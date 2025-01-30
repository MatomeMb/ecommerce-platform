// frontend/src/services/products.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Return the product
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
