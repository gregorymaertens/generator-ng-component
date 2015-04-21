'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var ngUtils = require('./util.js');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = this._.slugify(this._.humanize(this.appname));
  this.scriptAppName = this.config.get('moduleName') || this._.camelize(this.appname) + ngUtils.appName(this);

  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);
  this.compName = this.options.comp !== undefined ? this.options.comp.toLowerCase() : this.name.toLowerCase();
  this.altDir = this.options.alt !== undefined ? this.config.get('basePath') + '/' + this.options.alt +'/':undefined; 

  this.hasFilter = function(filter) {
    return this.config.get('filters').indexOf(filter) !== -1;
  }.bind(this);

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }

  this.sourceRoot(path.join(__dirname, '/templates'));
};

util.inherits(Generator, yeoman.generators.NamedBase);
