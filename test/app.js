const App = require('../src/app.js');

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
