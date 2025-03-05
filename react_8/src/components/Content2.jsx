import React, { useState, useEffect } from 'react';

const Content2 = () => {
  const [count, setCount] = useState(0);

  // Виконується лише при монтуванні та демонтажі
  useEffect(() => {
    document.title = 'Content2 Mounted';
    return () => {
      document.title = 'Content2 Unmounted';
    };
  }, []);

  // Виконується при зміні count
  useEffect(() => {
    document.body.style.backgroundColor = count % 2 === 0 ? '#f0f0f0' : '#fff0f0';
  }, [count]);

  // Виконується при кожному рендері
  useEffect(() => {
    const timestampEl = document.getElementById('content2-timestamp');
    if (timestampEl) {
      timestampEl.textContent = `Last render: ${new Date().toLocaleTimeString()}`;
    }
  });

  return (
    <div style={{ border: '1px solid red', padding: '10px', marginBottom: '10px' }}>
      <h2>Content2 Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p id="content2-timestamp">Last render: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default Content2;
