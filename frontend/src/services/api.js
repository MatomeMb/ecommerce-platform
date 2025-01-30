// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';  // Make sure to update with your backend URL if it's deployed

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Submit an order
export const submitOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/order`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error submitting order:", error);
    throw error;
  }
};
