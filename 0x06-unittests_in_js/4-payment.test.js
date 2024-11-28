import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import sendPaymentRequestToApi from './4-payment.js';

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
      const bigBrother = sinon.spy(console);
      const dummy = sinon.stub(Utils, 'calculateNumber');
  
      dummy.returns(10);
      sendPaymentRequestToApi(100, 20);
  
      // Verify that calculateNumber was called with the right arguments
      expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
      expect(dummy.callCount).to.be.equal(1);
  
      // Verify that console.log was called correctly
      expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
      expect(bigBrother.log.callCount).to.be.equal(1);
  
      // Restore stub and spy
      dummy.restore();
      bigBrother.log.restore();
    });
});
