import {LocalStore} from '../src/local-store';
import sinon from 'sinon';

describe('Practice 6', () => {
    const sandbox = sinon.sandbox.create();
    const mock = sinon.mock(window.localStorage);

    beforeEach(() => {
        mock.expects('getItem').once();
        mock.expects('setItem').atLeast(1).withExactArgs(sinon.match.string, sinon.match.string.or(sinon.match.number));
    });

    afterEach(() => {
        sandbox.restore();
        mock.restore();
    });

    it('calls localStorage functions correctly', () => {
        const localStore = new LocalStore();

        localStore.set('life-meaning', 42);
        localStore.set('life-meaning', {});
        localStore.set([], {});

        localStore.get('life-meaning');

        mock.verify();
    });
});
