import sinon from 'sinon';
import { strict as assert } from 'assert';
import sendPaymentRequestToApi from './4-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify console.log is called correctly', () => {
    // Create a stub for calculateNumber method
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log to verify it's called with the correct message
    const logSpy = sinon.spy(console, 'log');
    
    // Call the function with test values
    sendPaymentRequestToApi(100, 20);
    
    // Check if calculateNumber was called with the expected arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
    
    // Verify that the stubbed return value (10) is used in the console.log message
    assert(logSpy.calledOnceWithExactly('The total is: 10'));
    
    // Restore the stub and spy
    calculateNumberStub.restore();
    logSpy.restore();
  });
});
