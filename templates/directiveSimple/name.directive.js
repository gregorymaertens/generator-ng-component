(function(){
  'use strict';

  angular.module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= classedName %>);

  function <%= classedName %>($log, ENV){

    var directive = {
      template: '<div></div>',
      restrict: 'EA',
      link: link
    };

    return directive;

    ////////////

    function link(scope, element, attrs){
      element.text('this is the <%= cameledName %> directive');
    }

  }

})();