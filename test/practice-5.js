import {LocalStore} from '../src/local-store';
import sinon from 'sinon';

describe('Practice 5', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });

    it('set data object', () => {
        const localStore = new LocalStore();

        const spy = sandbox.spy(localStore.store, 'setItem');

        localStore.set('life-meaning', 42);
        localStore.set(42, 42);
        localStore.set(42, []);
        localStore.set({}, []);

        spy.should.always.be.calledWith(sinon.match.string, sinon.match.string.or(sinon.match.number));
    });
});
