import {LocalStore} from '../src/local-store';
import sinon from 'sinon';

describe('Practice 4', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });

    it('set visit with current timestamp', () => {
        const localStore = new LocalStore();
        const clock = sinon.useFakeTimers(1000); // 1s

        const spy = sandbox.spy(localStore.store, 'setItem');

        localStore.setVisit();
        spy.should.be.calledWith('visit', 1000);

        clock.restore();
    });
});
