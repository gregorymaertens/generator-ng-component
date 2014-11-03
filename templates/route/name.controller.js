(function(){
  'use strict';

  angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>);

    function <%= classedName %>() {

      var vm = this;
      vm.message = message;

      ////////////

      function message() {
        return 'Hello';
      }

    }

  };

})();
