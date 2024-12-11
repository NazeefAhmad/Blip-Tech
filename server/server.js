// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // require('dotenv').config();

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Connect to MongoDB
// // // mongoose.connect(process.env.MONGODB_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('Connected to MongoDB'))
// // // .catch((err) => console.log(err));

// // // // Sample route
// // // app.get('/', (req, res) => {
// // //   res.send('Hello from the backend!');
// // // });

// // // const PORT = process.env.PORT || 3000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });


// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // require('dotenv').config();

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGODB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log('Connected to MongoDB'))
// // .catch((err) => console.log(err));

// // // Define Order Schema
// // const orderSchema = new mongoose.Schema({
// //   fullName: { type: String, required: true },
// //   address: { type: String, required: true },
// //   phoneNumber: { type: String, required: true },
// //   paymentMethod: { type: String, enum: ['cod', 'online'], required: true },
// //   createdAt: { type: Date, default: Date.now },
// // });

// // // Create Order Model
// // const Order = mongoose.model('Order', orderSchema);

// // // API Routes

// // // Sample route
// // app.get('/', (req, res) => {
// //   res.send('Hello from the backend!');
// // });

// // // Route to handle order submission
// // app.post('/place-order', async (req, res) => {
// //   try {
// //     const { fullName, address, phoneNumber, paymentMethod } = req.body;

// //     // Basic validation
// //     if (!fullName || !address || !phoneNumber || !paymentMethod) {
// //       return res.status(400).json({ message: 'All fields are required.' });
// //     }

// //     // Save the order in the database
// //     const newOrder = new Order({ fullName, address, phoneNumber, paymentMethod });
// //     await newOrder.save();

// //     res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Server error. Please try again later.' });
// //   }
// // });

// // // Start server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {

  
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.log(err));

// // Define Order Schema
// const orderSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   address: { type: String, required: true },
//   phoneNumber: { type: String, required: true },
//   paymentMethod: { type: String, enum: ['cod', 'online'], required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// // Create Order Model
// const Order = mongoose.model('Order', orderSchema);

// // API Routes

// // Sample route
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

// // Route to handle order submission
// app.post('/place-order', async (req, res) => {
//   try {
//     const { fullName, address, phoneNumber, paymentMethod } = req.body;

//     // Basic validation
//     if (!fullName || !address || !phoneNumber || !paymentMethod) {
//       return res.status(400).json({ message: 'All fields are required.' });
//     }

//     // Save the order in the database
//     const newOrder = new Order({ fullName, address, phoneNumber, paymentMethod });
//     await newOrder.save();

//     res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error. Please try again later.' });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 3030;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Define Order Schema
const orderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  paymentMethod: { type: String, enum: ['cod', 'online'], required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create Order Model
const Order = mongoose.model('Order', orderSchema);

// Define Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create Cart Model
const Cart = mongoose.model('Cart', cartSchema);

// API Routes

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Route to handle order submission
app.post('/place-order', async (req, res) => {
  try {
    const { fullName, address, phoneNumber, paymentMethod } = req.body;

    // Basic validation
    if (!fullName || !address || !phoneNumber || !paymentMethod) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Save the order in the database
    const newOrder = new Order({ fullName, address, phoneNumber, paymentMethod });
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Route to save or update cart
app.post('/save-cart', async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Validate input
    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ message: 'User ID and items are required.' });
    }

    // Calculate total amount
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Create or update cart
    const existingCart = await Cart.findOne({ userId });
    if (existingCart) {
      existingCart.items = items;
      existingCart.totalAmount = totalAmount;
      existingCart.updatedAt = Date.now();
      await existingCart.save();
      return res.status(200).json({ message: 'Cart updated successfully.', cart: existingCart });
    }

    // Save new cart
    const newCart = new Cart({ userId, items, totalAmount });
    await newCart.save();
    res.status(201).json({ message: 'Cart saved successfully.', cart: newCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Route to get cart
app.get('/get-cart/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId }).populate('items.productId', 'name price');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found.' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Route to delete cart
app.delete('/delete-cart/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedCart = await Cart.findOneAndDelete({ userId });
    if (!deletedCart) {
      return res.status(404).json({ message: 'Cart not found.' });
    }

    res.status(200).json({ message: 'Cart deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
