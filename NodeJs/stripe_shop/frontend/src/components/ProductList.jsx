import React, { useEffect, useState } from 'react';

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {products.map(p => (
        <div key={p.id} className="border p-4 rounded">
          <img src={p.image} alt={p.title} className="h-40 object-contain mb-2" />
          <h2 className="font-semibold text-lg">{p.title}</h2>
          <p className="text-gray-700">${p.price}</p>
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => addToCart(p)}
          >Add to Cart</button>
        </div>
      ))}
    </div>
  );
}