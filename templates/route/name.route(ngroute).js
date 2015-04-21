(function(){
	'use strict';

  angular.module('<%= scriptAppName %>').config(config);
  function config($routeProvider) {
    $routeProvider.when('<%= route %>', {
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Controller'
      });
  }

})();