import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center', // කිසිම spacer එකක් නැතුව කෙලින්ම මැදට align කරා
      alignItems: 'center',
      padding: '22px 8%', // Logo එක නැති නිසා Navbar එකේ උස ලස්සන වෙන්න padding හැදුවා
      backgroundColor: '#000000',
      borderBottom: '1px solid #02224a',
      boxSizing: 'border-box'
    }}>
      
      {/* Tabs අතර ඉඩ ප්‍රමාණය (gap) 45px සිට 60px දක්වා වැඩි කරා */}
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