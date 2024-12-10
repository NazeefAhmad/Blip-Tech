const mongoose = require('mongoose');

// Define Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User reference
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Product reference
      name: { type: String, required: true }, // Product name for easy retrieval
      quantity: { type: Number, required: true }, // Quantity of the product
      price: { type: Number, required: true }, // Product price
    },
  ],
  totalAmount: { type: Number, required: true }, // Total price of the cart
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create and export Cart Model
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
