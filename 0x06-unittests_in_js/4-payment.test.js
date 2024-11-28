import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import { sendPaymentRequestToApi } from './4-payment.js';

describe('sendPaymentRequestToApi', () => {
  it('should use a stub for calculateNumber', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});