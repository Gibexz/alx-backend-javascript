const { expect } = require('chai');
const request = require('request');

describe('index page', () => {
  it('several test for "/"', () => new Promise((done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('correct status code when :id is a number for /cart/:id and correct body', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/93', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 93');
      done();
    });
  }));

  it('correct status code when :id is a string for /cart/hi', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/hi', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  it('correct status code when :id is a string for /cart/hi', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/-55', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
