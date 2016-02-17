var chai = require('chai');
var sinonChai = require("sinon-chai");
var sinon = require('sinon');

var should = chai.should();
chai.use(sinonChai);

var App = require('../src/app.js');

describe('App', () => {
  var app;

  beforeEach(() => {
    app = new App();
  });

  it('loads ES6 Polyfill', () => {
    Symbol.should.be.a('function');
  });

  it('initializes', () => {
    app.initialize.should.be.a('function');
    app.initialize().should.equal('init');
  });
  
});
