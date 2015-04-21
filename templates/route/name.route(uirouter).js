(function(){
	'use strict';

  angular.module('<%= scriptAppName %>').config(config);
  
  function config($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Controller',
        controllerAs: 'vm'
      });
  }

})();