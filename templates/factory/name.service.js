(function(){
  'use strict';

  angular.module('<%= scriptAppName %>').factory('<%= cameledName %>Factory', <%= cameledName %>Factory);

  function <%= cameledName %>Factory() {

    var factory = {
      someMethod: someMethod
    };

    var meaningOfLife = 42;

    return factory;

    ////////////
    function someMethod(){
      return meaningOfLife;
    }

  }

})();
