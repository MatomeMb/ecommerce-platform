// frontend/src/services/orders.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

// Submit an order
export const submitOrder = async (orderData) => {
  try {
    const response = await axios.post(API_URL, orderData);
    return response.data; // Return the created order
  } catch (error) {
    console.error('Error submitting order:', error);
    throw error;
  }
};
