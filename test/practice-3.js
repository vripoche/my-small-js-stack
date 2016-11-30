import {LocalStore} from '../src/local-store';
import sinon from 'sinon';

describe('Practice 3', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });

    it('throws error if arg is not a string', () => {
        const localStore = new LocalStore();
        const test = () => {
            localStore.get([]);
        }
        test.should.throw('ERROR !!! argument should be a string');
    });
});
