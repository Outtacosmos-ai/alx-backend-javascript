// 3-payment.test.js

import { expect } from 'chai';
import sinon from 'sinon';
import { Utils } from './utils.js';
import { sendPaymentRequestToApi } from './3-payment.js';

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with the correct arguments', function () {
    // Create a spy for the calculateNumber method
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function with the test values
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the correct arguments
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy to avoid affecting other tests
    spy.restore();
  });
});
