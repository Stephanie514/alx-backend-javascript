// 3-payment.test.js

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('calls Utils.calculateNumber with the correct arguments', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    calculateNumberSpy.restore();
  });
});
