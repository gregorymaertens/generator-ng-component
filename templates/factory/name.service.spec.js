'use strict';

describe('Service: <%= cameledName %>Factory', function () {

  // load the service's module
  beforeEach(module('<%= scriptAppName %>'));

  // instantiate service
  var <%= cameledName %>Factory;
  beforeEach(inject(function (_<%= cameledName %>Factory_) {
    <%= cameledName %>Factory = _<%= cameledName %>Factory_;
  }));

  it('should do something', function () {<% if (hasFilter('jasmine')) { %>
    expect(!!<%= cameledName %>Factory).toBe(true);<% } if (hasFilter('mocha')) { %>
    expect(!!<%= cameledName %>Factory).to.be.true;<% } %>
  });

});
