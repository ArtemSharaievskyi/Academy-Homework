import React, { useState } from 'react';
import Navbar from './Navbar';
import Content1 from './Content1';
import Content2 from './Content2';
import Footer from './Footer';

const Wrapper = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Hooks та Життєвий Цикл Компонент</h1>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>
          <input type="checkbox" checked={showNavbar} onChange={() => setShowNavbar(!showNavbar)} />
          Show Navbar
        </label>
        <label style={{ marginRight: '10px' }}>
          <input type="checkbox" checked={showContent1} onChange={() => setShowContent1(!showContent1)} />
          Show Content1
        </label>
        <label style={{ marginRight: '10px' }}>
          <input type="checkbox" checked={showContent2} onChange={() => setShowContent2(!showContent2)} />
          Show Content2
        </label>
        <label style={{ marginRight: '10px' }}>
          <input type="checkbox" checked={showFooter} onChange={() => setShowFooter(!showFooter)} />
          Show Footer
        </label>
      </div>

      {showNavbar && <Navbar />}
      {showContent1 && <Content1 />}
      {showContent2 && <Content2 />}
      {showFooter && <Footer />}
    </div>
  );
};

export default Wrapper;
