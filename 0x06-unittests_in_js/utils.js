// utils.js

const Utils = {
  calculateNumber(type, a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      throw TypeError('Parameters must be numbers or able to coerce to number');
    }

    switch (type) {
      case 'SUM':
        return Math.round(numA) + Math.round(numB);
      case 'SUBTRACT':
        return Math.round(numA) - Math.round(numB);
      case 'DIVIDE':
        if (Math.round(numB) === 0) throw Error('Cannot divide by 0');
        return Math.round(numA) / Math.round(numB);
      default:
        throw Error('Unsupported type');
    }
  },
};

module.exports = Utils;
