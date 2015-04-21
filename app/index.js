'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var NgComponentGenerator = yeoman.generators.Base.extend({
	constructor: function () {
	  yeoman.generators.Base.apply(this, arguments);
		this.option('comp', {desc:'component name overriding name'});
		this.option('alt', {desc:'alternative folder instead of components'});
  },
  
  info: function () {
    if (!this.options['skip-message']) {
      console.log(chalk.magenta('You\'re using the fantastic NgComponent generator.\n'));
      console.log(chalk.magenta('Initializing yo-rc.json configuration.\n'));
    }
  },

  saveConfig: function () {
		var basePath = this.options.basePath || 'app';
		var componentsDir = basePath + '/components/'
    this.config.defaults({
      'routeDirectory': this.options.routeDirectory || componentsDir,
      'directiveDirectory': this.options.directiveDirectory || componentsDir,
      'filterDirectory': this.options.filterDirectory || componentsDir,
      'serviceDirectory': this.options.serviceDirectory || componentsDir,
      'basePath': basePath,
      'moduleName': this.options.moduleName || '',
      'filters': this.options.filters || ['ngrouter', 'jasmine'],
      'extensions': this.options.extensions || ['js', 'html', 'css'],
      'directiveSimpleTemplates': this.options.directiveSimple || '',
      'directiveComplexTemplates': this.options.directiveComplex || '',
      'filterTemplates': this.options.filter || '',
      'serviceTemplates': this.options.service || '',
      'factoryTemplates': this.options.factory || '',
      'controllerTemplates': this.options.controller || '',
      'decoratorTemplates': this.options.decorator || '',
      'providerTemplates': this.options.provider || '',
      'routeTemplates': this.options.route || '',
      'modulePrefix': this.options.modulePrefix || '',
      'urlPrefix': this.options.urlPrefix || ''
    });
  }
});

module.exports = NgComponentGenerator;
