// server.js
const express = require('express');
const path = require('path');

const app = express();

// Вбудований парсер JSON
app.use(express.json());

// Роздача статичних файлів (щоби client.html обслуговувався автоматично)
app.use(express.static(path.join(__dirname)));

let products = [];

// 1. Завантажуємо товари з fakestoreapi при старті
async function loadProducts() {
  // У Node.js 18+ є глобальний fetch
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  products = data.map(p => ({ ...p, stock: Math.floor(Math.random() * 20) + 1 }));
}

loadProducts().catch(console.error);

// 2. GET /products — повернути всі товари
app.get('/products', (req, res) => {
  res.json(products);
});

// 3. POST /products/sort — сортування
app.post('/products/sort', (req, res) => {
  const { field, order } = req.body;
  if (!['title','price'].includes(field) || !['asc','desc'].includes(order)) {
    return res.status(400).json({ error: 'Невірні параметри сортування' });
  }

  let sorted;
  if (field === 'price') {
    // Числова сортування за допомогою віднімання
    sorted = [...products].sort((a, b) => {
      return order === 'asc'
        ? a.price - b.price
        : b.price - a.price;
    });
  } else {
    // Сортування рядків для title
    sorted = [...products].sort((a, b) => {
      if (a.title < b.title) return order === 'asc' ? -1 : 1;
      if (a.title > b.title) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  res.json(sorted);
});

// 4. POST /products/purchase — купити
// body: { productId: number, quantity: number }
app.post('/products/purchase', (req, res) => {
  const { productId, quantity } = req.body;
  const prod = products.find(p => p.id === productId);
  if (!prod) {
    return res.status(404).json({ error: 'Товар не знайдено' });
  }
  if (quantity > prod.stock) {
    return res.status(400).json({ 
      error: 'Недостатньо товару в наявності', 
      available: prod.stock
    });
  }
  prod.stock -= quantity;
  res.json({ message: 'Успішно куплено', remaining: prod.stock });
});

// 5. Redirect "/" to client.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
