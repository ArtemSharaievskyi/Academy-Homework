import React from 'react';

function Header({ data }) {
  return (
    <div className="header-component">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export default Header;
