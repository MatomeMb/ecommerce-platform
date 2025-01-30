// backend/server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const productRoutes = require('./routes/products');  // Product routes
const orderRoutes = require('./routes/orders');  // Order routes

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON body

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
