import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div className="count-component">
      <p>Лічильник: {count}</p>
      <button onClick={increment}>Збільшити</button>
      <button onClick={decrement}>Зменшити</button>
    </div>
  );
}

export default Count;
