const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('tests for calculateNumber function - All returned values are rounded', () => {
  it('round and return +ve numbers', () => {
    assert.strictEqual(calculateNumber(2.5, 3.9), 7);
    assert.strictEqual(calculateNumber(-2.5, -3.9), -6);
    assert.strictEqual(calculateNumber(2, 3), 5);
    assert.strictEqual(calculateNumber(-2, -3), -5);
    assert.strictEqual(calculateNumber(-2.5, 0), -2);
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(2.5, -0), 3);
    assert.doesNotThrow(() => calculateNumber(2.5, 3.9));
    assert.notStrictEqual(calculateNumber(1.5, 2.5), null);
    assert.ok(calculateNumber(9.6, 9.7) === 20);
  });
});
