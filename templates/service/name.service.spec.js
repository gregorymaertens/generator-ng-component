(function(){
'use strict';

describe('Service: <%= cameledName %>Service', function () {

  // load the service's module
  beforeEach(module('<%= scriptAppName %>'));

  // instantiate service
  var <%= cameledName %>Service;
  beforeEach(inject(function (_<%= cameledName %>Service_) {
    <%= cameledName %>Service = _<%= cameledName %>Service_;
  }));

  it('should do something', function () {<% if (hasFilter('jasmine')) { %>
    expect(!!<%= cameledName %>Service).toBe(true);<% } if (hasFilter('mocha')) { %>
    expect(!!<%= cameledName %>Service).to.be.true;<% } %>
  });

});
})();