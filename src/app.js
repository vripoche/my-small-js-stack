import 'babel-polyfill';
import _ from 'lodash';

const template = require('./hbs/app.hbs');

const App = new Function("this.initialize()");

_.extend(App.prototype, {
  template: template,
  initialize() {
    document.body.innerHTML = this.template();
    return 'init';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  new App();
});

module.exports = App;
