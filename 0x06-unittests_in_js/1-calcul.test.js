const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 2.6), 2);
      assert.strictEqual(calculateNumber('SUM', -1.6, -1.7), -4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 4.5), 1);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 2.6), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.6, -1.7), 4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the quotient of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.4), 5);
      assert.strictEqual(calculateNumber('DIVIDE', 10.5, 2.4), 5);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 0.2), 'Error');
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -10, 2), -5);
      assert.strictEqual(calculateNumber('DIVIDE', 10, -2), -5);
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
    });
  });
});