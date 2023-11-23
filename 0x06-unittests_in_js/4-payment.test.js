const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stubcalculateNumber;
  let consoleSpy;

  beforeEach(() => {
    stubcalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stubcalculateNumber.restore();
    consoleSpy.restore();
  });

  it('stub the function Utils.calculateNumber and verify its call (always return 10)', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(stubcalculateNumber, 'SUM', 100, 20);
    sinon.assert.callCount(stubcalculateNumber, 1);

    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');
  });
});
