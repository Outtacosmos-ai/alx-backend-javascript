const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
    assert.strictEqual(calculateNumberSpy.returnValues[0], 120);
    
    calculateNumberSpy.restore();
  });
});

