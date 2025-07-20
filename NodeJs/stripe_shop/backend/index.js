
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const Stripe = require('stripe');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// POST /create-checkout-session
// Отримує масив товарів: [{ id, quantity }, ...]
app.post('/create-checkout-session', async (req, res) => {
  try {
    const items = req.body; 
    // Завантажуємо всі продукти з fakestore
    const { data: products } = await axios.get('https://fakestoreapi.com/products');

    // Формуємо line_items для Stripe
    const line_items = items.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) {
        throw new Error(`Product ID ${item.id} not found`);
      }
      return {
        price_data: {
          currency: 'usd',
          product_data: { name: product.title },
          unit_amount: Math.round(product.price * 100), // в центах
        },
        quantity: item.quantity,
      };
    });

    // Створюємо Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url:  'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Error creating checkout session', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
