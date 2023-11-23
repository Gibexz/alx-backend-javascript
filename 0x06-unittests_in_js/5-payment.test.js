const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi test', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the right output for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.callCount(consoleSpy, 1);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
  });

  it('should log the right output for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
  });
});
