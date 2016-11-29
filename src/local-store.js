import 'babel-polyfill';

export const LocalStore = new Function("this.initialize()");

Object.assign(LocalStore.prototype, {
    store:null,
    initialize() {
        if(!this.check()) {
            throw new Error("ERROR !!! No localStorage");
        }
        this.store = window.localStorage;
    },
    check() {
        return !! window.localStorage;
    },
    get(value) {
        return this.store.getItem(value);
    }
});
