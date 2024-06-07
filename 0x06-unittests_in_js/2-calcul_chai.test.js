// 2-calcul_chai.test.js
import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a is 1.4, and b is 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is SUBTRACT, a is 1.4, and b is 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is DIVIDE, a is 1.4, and b is 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when type is DIVIDE, a is 1.4, and b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
