import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '22px 8%', 
      backgroundColor: '#000000',
      borderBottom: '1px solid #02224a',
      boxSizing: 'border-box'
    }}>
      

      <div style={{ display: 'flex', gap: '60px' }}> 
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <Link 
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
            style={{
              textDecoration: 'none',
              color: '#ffffff', 
              fontSize: '1.15rem',
              fontWeight: '500',
              transition: 'color 0.2s ease',
            }}
          >
            {item}
          </Link>
        ))}
      </div>

    </nav>
  );
}

export default Navbar;