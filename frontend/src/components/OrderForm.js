// frontend/src/components/OrderForm.js
import React, { useState } from 'react';
import { submitOrder } from '../services/api';

const OrderForm = () => {
  const [orderData, setOrderData] = useState({
    productId: '',
    quantity: 1,
    customerName: '',
    customerEmail: ''
  });

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitOrder(orderData);
      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input
          type="text"
          name="productId"
          value={orderData.productId}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={orderData.quantity}
          onChange={handleChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="customerName"
          value={orderData.customerName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="customerEmail"
          value={orderData.customerEmail}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
