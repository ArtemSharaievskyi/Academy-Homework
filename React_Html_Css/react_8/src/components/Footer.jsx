import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [footerCount, setFooterCount] = useState(0);
  const isInitialRender = useRef(true);

  // Виконується лише при зміні footerCount (пропускаємо монтування)
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const footerElement = document.getElementById('footer-update');
    if (footerElement) {
      footerElement.textContent = `Footer updated count: ${footerCount}`;
    }
  }, [footerCount]);

  return (
    <footer style={{ border: '1px solid purple', padding: '10px', marginBottom: '10px' }}>
      <h2>Footer Component</h2>
      <p>Footer Count: {footerCount}</p>
      <button onClick={() => setFooterCount(footerCount + 1)}>Increase Footer Count</button>
      <p id="footer-update">Footer updated count: {footerCount}</p>
    </footer>
  );
};

export default Footer;
