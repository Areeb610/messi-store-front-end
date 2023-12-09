const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// This endpoint will retrieve the user's cart
router.get('/', async (req, res) => {
  try {
    // For simplicity, we assume the user ID is sent in the request headers
    const userId = req.headers['user-id'];

    // Retrieve the user's cart from the database
    const userCart = await Cart.findOne({ userId });

    if (!userCart) {
      return res.status(200).json({ cartItems: [] });
    }

    res.status(200).json({ cartItems: userCart.products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// This endpoint will add a product to the user's cart
router.post('/add', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Retrieve the user's cart from the database
    let userCart = await Cart.findOne({ userId });

    // If the user doesn't have a cart, create a new one
    if (!userCart) {
      userCart = new Cart({ userId, products: [] });
    }

    // Check if the product is already in the cart
    const existingItem = userCart.products.find(item => item.productId === productId);

    if (existingItem) {
      // If the product is already in the cart, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If the product is not in the cart, add a new item
      userCart.products.push({ productId, quantity });
    }

    // Save the updated cart to the database
    await userCart.save();

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more endpoints for updating, removing, and clearing the cart as needed

module.exports = router;
