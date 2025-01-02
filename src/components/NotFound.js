import React from 'react'

const NotFound = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '3rem', color: 'red' }}>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          Go back to Home
        </a>
      </div>
    );
  };

export default NotFound
