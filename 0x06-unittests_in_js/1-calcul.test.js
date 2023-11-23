const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('tests for calculateNumber function - All returned values are rounded', () => {
  describe('type === "SUM"', () => {
    it('if first arg  is SUM', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.9), 7);
      assert.strictEqual(calculateNumber('SUM', -2.5, -3.9), -6);
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
      assert.strictEqual(calculateNumber('SUM', -2, -3), -5);
      assert.strictEqual(calculateNumber('SUM', -2.5, 0), -2);
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUM', 2.5, -0), 3);
      assert.doesNotThrow(() => calculateNumber('SUM', 2.5, 3.9));
      assert.notStrictEqual(calculateNumber('SUM', 1.5, 2.5), null);
      assert.ok(calculateNumber('SUM', 9.6, 9.7) === 20);
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
  });
  describe('type === "SUBTRACT"', () => {
    it('if first arg  is SUBTRACT', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 3.9), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.5, -3.9), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', -2, -3), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.5, 0), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, -0), 3);
      assert.doesNotThrow(() => calculateNumber('SUBTRACT', 2.5, 3.9));
      assert.notStrictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), null);
      assert.ok(calculateNumber('SUBTRACT', 9.6, 9.7) === 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.499999, 3.499999), -1);
    });
  });
  describe('type === "DIVIDE"', () => {
    it('if first arg  is DIVIDE', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 3.9), 0.75);
      assert.strictEqual(calculateNumber('DIVIDE', -2.5, -3.9), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 2, 4), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2), -3.5);
      assert.strictEqual(calculateNumber('DIVIDE', -2.5, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, -0), 'Error');
      assert.doesNotThrow(() => calculateNumber('DIVIDE', 2.5, 3.9));
      assert.notStrictEqual(calculateNumber('DIVIDE', 1.5, 2.5), null);
      assert.ok(calculateNumber('DIVIDE', 9.7, 9.7) === 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.499999, 3.666666), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });
  });
});
