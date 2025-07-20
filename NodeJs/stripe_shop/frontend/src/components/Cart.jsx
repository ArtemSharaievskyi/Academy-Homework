import React from 'react';

export default function Cart({ cart, updateQuantity, removeFromCart }) {

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  const handleCheckout = async () => {
    try {
      const res = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  return (
    <div className="border-t pt-4">
      <h2 className="text-2xl font-bold mb-2">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span className="flex-1">{item.title}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={e => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
              className="w-16 border rounded text-center mx-4"
            />
            <span className="w-20 text-right">${(item.price * item.quantity).toFixed(2)}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
      <button
        onClick={handleCheckout}
        disabled={cart.length === 0}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded disabled:opacity-50"
      >
        Checkout
      </button>
    </div>
  );
}