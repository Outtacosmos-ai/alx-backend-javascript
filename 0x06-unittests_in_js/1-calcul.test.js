// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -6); // Corrected to -6
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 4); // Corrected to 4
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle division by rounded 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});
