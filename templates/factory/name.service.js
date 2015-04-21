(function(){
  'use strict';

  angular.module('<%= scriptAppName %>').factory('<%= cameledName %>'Factory, <%= cameledName %>Factory);

  function <%= cameledName %>Factory() {

    // Public API here
    var factory = {
      someMethod: someMethod
    };

    // Service logic
    // ...
    var meaningOfLife = 42;

    return factory;

    ////////////
    function someMethod(){
      return meaningOfLife;
    }

  }

})();
