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
      message: 'Where would you like to create this controller?',
      default: this.altDir || self.config.get('routeDirectory')
    }
  ];

  this.prompt(prompts, function (props) {
    this.dir = path.join(props.dir, this.name);
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
	var moduleName = ngUtil.moduleName(this.dir);
	this.scriptAppName = moduleName || this.scriptAppName;
  ngUtil.copyTemplates(this, 'controller');
};
