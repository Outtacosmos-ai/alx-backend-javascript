const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.3), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 8.6, 2.3), 3);
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 8.6, 0.2), 'Error');
    });
  });
});