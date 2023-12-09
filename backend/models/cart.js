// cart.js
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    products: [
        {
            productId: { type: String, required: true },
            quantity: { type: Number, default: 1 },
        },
    ],
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
