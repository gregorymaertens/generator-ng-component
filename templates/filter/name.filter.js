(function(){
  'use strict';

  angular.module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', <%= classedName %>);

  function <%= classedName %>($log, ENV) {

    return filter;

    ////////////

    function filter(input) {
      return '<%= cameledName %> filter: ' + input;
    }

  }

})();
