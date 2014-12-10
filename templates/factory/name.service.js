(function(){
  'use strict';

  angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', <%= classedName %>);

  function <%= classedName %>($log, ENV) {

    // Public API here
    var service = {
      someMethod: someMethod
    };

    // Service logic
    // ...
    var meaningOfLife = 42;

    return service;

    ////////////
    function someMethod(){
      return meaningOfLife;
    }

  }

})();
