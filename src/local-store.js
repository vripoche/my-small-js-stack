import 'babel-polyfill';
import _ from 'lodash';

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
    get(key) {
        if(!_.isString(key)) {
            throw new Error('ERROR !!! argument should be a string');
        }
        return this.store.getItem(key);
    },
    set(key, value) {
        if(!_.isString(key)){
            key = 'default';
        }
        if(!_.isString(value) || !_.isNumber(value)) {
            value = 0;
        }
        this.store.setItem(key, value);
    },
    setVisit() {
        this.store.setItem('visit', Date.now());
    }
});
