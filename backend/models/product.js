// backend/models/product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },  // optional
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
