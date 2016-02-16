var should = require('chai').should();
var sinon = require('sinon');

var App = require('../src/app.js');

describe('App', () => {
  var app;

  beforeEach(() => {
    app = new App();
  });
  
  it('initialize', () => {
    app.initialize.should.be.a('function');
    app.initialize().should.equal('init');
  });
  
});
