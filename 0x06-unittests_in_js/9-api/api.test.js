const axios = require('axios');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', async () => {
    const response = await axios.get(`${API_URL}/`);
    expect(response.status).to.equal(200);
    expect(response.data).to.equal('Welcome to the payment system');
  });

  it('GET /cart/:id returns correct response for valid :id', async () => {
    const response = await axios.get(`${API_URL}/cart/47`);
    expect(response.status).to.equal(200);
    expect(response.data).to.equal('Payment methods for cart 47');
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', async () => {
    try {
      await axios.get(`${API_URL}/cart/-47`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', async () => {
    try {
      await axios.get(`${API_URL}/cart/d200-44a5-9de6`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
