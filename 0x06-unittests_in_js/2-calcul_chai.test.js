const chai = require('chai');
const expect = chai.expect
const calculateNumber = require('./1-calcul');

describe('tests for calculateNumber function - All returned values are rounded', () => {
  describe('type === "SUM"', () => {
    it('if first arg  is SUM', () => {
      expect(calculateNumber('SUM', 2.5, 3.9)).to.be.equal(7);
      expect(calculateNumber('SUM', -2.5, -3.9)).to.be.equal(-6);
      expect(calculateNumber('SUM', 2, 3)).to.be.equal(5);
      expect(calculateNumber('SUM', -2, -3)).to.be.equal(-5);
      expect(calculateNumber('SUM', -2.5, 0)).to.be.equal(-2);
      expect(calculateNumber('SUM', 0, 0)).to.be.equal(0);
      expect(calculateNumber('SUM', 2.5, -0)).to.be.equal(3);
      expect(() => calculateNumber('SUM', 2.5, 3.9)).to.not.throw();
      expect(calculateNumber('SUM', 1.5, 2.5)).to.not.equal(null);
      expect(calculateNumber('SUM', 9.6, 9.7)).to.be.equal(20);
      expect(calculateNumber('SUM', 2.499999, 3.499999)).to.be.equal(5);
    });
  });
  describe('type === "SUBTRACT"', () => {
    it('if first arg is SUBTRACT', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 3.9)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', -2.5, -3.9)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', -2, -3)).to.equal(1);
      expect(calculateNumber('SUBTRACT', -2.5, 0)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 2.5, -0)).to.equal(3);
      expect(() => calculateNumber('SUBTRACT', 2.5, 3.9)).to.not.throw();
      expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.not.equal(null);
      expect(calculateNumber('SUBTRACT', 9.6, 9.7)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 2.499999, 3.499999)).to.equal(-1);
    });
  });

  describe('type === "DIVIDE"', () => {
    it('if first arg is DIVIDE', () => {
      expect(calculateNumber('DIVIDE', 2.5, 3.9)).to.equal(0.75);
      expect(calculateNumber('DIVIDE', -2.5, -3.9)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', -7.0, 2)).to.equal(-3.5);
      expect(calculateNumber('DIVIDE', -2.5, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 2.5, -0)).to.equal('Error');
      expect(() => calculateNumber('DIVIDE', 2.5, 3.9)).to.not.throw();
      expect(calculateNumber('DIVIDE', 1.5, 2.5)).to.not.equal(null);
      expect(calculateNumber('DIVIDE', 9.7, 9.7)).to.equal(1);
      expect(calculateNumber('DIVIDE', 2.499999, 3.666666)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });
  });
});
