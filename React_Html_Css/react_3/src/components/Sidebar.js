import React from 'react';

function Sidebar({ data }) {
  return (
    <div className="sidebar-component">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export default Sidebar;
