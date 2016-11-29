import {LocalStore} from '../src/local-store';
import sinon from 'sinon';

describe('Practice 1', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });

    it('throws error if localStorage does not exists', () => {
        const stub = sandbox.stub(LocalStore.prototype, 'check');
        
        stub.returns(false);

        const test = function () {
            new LocalStore();
        }

        test.should.throw('ERROR !!! No localStorage');
    });
});
