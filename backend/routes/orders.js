// backend/routes/orders.js

const express = require('express');
const Order = require('../models/order');
const router = express.Router();

// POST order
router.post('/', async (req, res) => {
  try {
    const { products, totalAmount, user } = req.body;
    const newOrder = new Order({ products, totalAmount, user });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
