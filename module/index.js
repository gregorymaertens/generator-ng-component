'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  var self = this;
  var done = this.async();
  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create this module?',
      default: this.altDir || self.config.get('routeDirectory')
    },
    {
      name: 'module',
      message: 'What will the module name be?',
			default:  self.config.get('modulePrefix')===''?self.name:(self.config.get('modulePrefix')+'.'+self.name)
    }
  ];

  this.prompt(prompts, function (props) {
    this.dir = this.altDir || path.join(props.dir, this.name);
		this.scriptAppName = props.module;
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  ngUtil.copyTemplates(this, 'module');
};
