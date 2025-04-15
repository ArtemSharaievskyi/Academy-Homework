import React from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px 15px',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '4px'
        }}>
          мій перший портал
        </div>,
        document.body
      )}
    </>
  );
};

export default Portal;
