import sinon from 'sinon';
import { strict as assert } from 'assert';
import sendPaymentRequestToApi from './4-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify console.log is called correctly', () => {
    // Stub the Utils.calculateNumber function to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log to verify it logs the correct message
    const logSpy = sinon.spy(console, 'log');
    
    // Call the function with test values
    sendPaymentRequestToApi(100, 20);
    
    // Check if the stub was called with the expected arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
    
    // Check if console.log was called with the correct message
    assert(logSpy.calledOnceWithExactly('The total is: 10'));
    
    // Restore the stub and spy after the test
    calculateNumberStub.restore();
    logSpy.restore();
  });
});
