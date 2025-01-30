const express = require('express');
const rateLimit = require('express-rate-limit');  // Import rate limiting
const { body, validationResult } = require('express-validator');
const Product = require('../models/product');
const router = express.Router();

// Rate Limiter: Limit requests to 100 per IP within a 15-minute window
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiter to all product routes
router.use(limiter);

// Validation schema for creating and updating products
const productValidation = [
  body('name').isString().notEmpty().withMessage('Name is required and should be a string.'),
  body('price').isNumeric().isFloat({ min: 0 }).withMessage('Price is required and should be a positive number.'),
  body('description').isString().isLength({ min: 5 }).withMessage('Description should be at least 5 characters long.'),
  body('category').isString().notEmpty().withMessage('Category is required.'),
  body('stock').isInt({ min: 0 }).withMessage('Stock should be a non-negative integer.')
];

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});


// GET a product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new product (with validation)
router.post('/', productValidation, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      stock: req.body.stock
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Invalid product data', error: err.message });
  }
});

// PUT (update) a product by ID (with validation)
router.put('/:id', productValidation, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
