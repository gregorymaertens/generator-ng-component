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
  var name = this.name;

  var done = this.async();
  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create this route?',
      default: this.altDir || self.config.get('routeDirectory')
    },
    {
      name: 'route',
      message: 'What will the url of your route be?',
      default: '/' + name
    }
  ];

  this.prompt(prompts, function (props) {
    this.route = props.route;
    this.dir = path.join(props.dir, this.compName);
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  var basePath = this.config.get('basePath') || '';
  this.htmlUrl = ngUtil.relativeUrl(basePath, path.join(this.dir, this.name + '.html'), this.config.get('urlPrefix'));
	var moduleName = ngUtil.moduleName(this.dir);
	this.scriptAppName = moduleName || this.scriptAppName;
  ngUtil.copyTemplates(this, 'route');
};