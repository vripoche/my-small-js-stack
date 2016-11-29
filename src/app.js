import 'babel-polyfill';

const template = require('./hbs/app.hbs');

export const App = new Function("this.initialize()");

Object.assign(App.prototype, {
  template: template,
  initialize() {
    document.body.innerHTML = this.template();
    return 'init';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  new App();
});
