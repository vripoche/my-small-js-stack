import {LocalStore} from '../src/local-store';
import sinon from 'sinon';

describe('Practice 2', () => {
    const sandbox = sinon.sandbox.create();

    afterEach(() => {
        sandbox.restore();
    });

    it('get value', () => {
        const localStore = new LocalStore();
        const stub = sandbox.stub(localStore.store, 'getItem');

        stub.withArgs('name').returns('John');

        localStore.get('name').should.equal('John');
        
        //Without sinon-chai
        stub.calledOnce.should.be.true;

        //With sinon-chai
        stub.should.be.calledOnce;
    });
});
