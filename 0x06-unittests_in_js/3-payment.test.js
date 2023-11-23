const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('checks that the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber("SUM", 100, 20)', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    sinon.assert.callCount(calculateNumberSpy, 1);

    calculateNumberSpy.restore();
  });
});
