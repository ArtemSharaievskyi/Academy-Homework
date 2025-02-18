import React from 'react';

function Footer({ data }) {
  return (
    <div className="footer-component">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export default Footer;
