const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;  // This will use the Mongo URI from your .env file

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);  // No need for additional options anymore
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
