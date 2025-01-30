// backend/models/order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  user: { type: String, required: true },  // example: user identifier
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
