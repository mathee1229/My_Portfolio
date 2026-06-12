import React from 'react';
import { useNavigate } from 'react-router-dom';
import myPhoto from './Image.jpeg'; 

function Home() {
  const navigate = useNavigate();
  const skills = ['React.js', 'PHP', 'MySQL', 'JavaScript', 'HTML5 / CSS3', 'UI/UX (Figma)'];

  return (
    <header style={{ 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 4%',
      backgroundColor: '#000000',
      color: '#f8fafc',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'auto auto', 
        gap: '20px',
        width: '100%',
        maxWidth: '1100px',
        boxSizing: 'border-box'
      }}>
        
        {/* 1. LARGE HERO BLOCK */}
        <div style={{
          gridColumn: 'span 2',
          background: 'transparent',
          border: 'none',
          padding: '20px 10px 20px 0px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}>
          <p style={{ color: '#f0e103', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Undergraduate Portfolio
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', margin: '0 0 20px 0', color: '#ffffff' }}>
            I'm <span style={{ color: '#38bdf8' }}>Matheesha Indeewara</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: '1.75', margin: 0, fontWeight: '400' }}>
            I am currently pursuing a degree in Information Technology and have a keen interest in software engineering, web development, and emerging technologies. Through academic projects and self-learning, I continue to strengthen my technical knowledge and problem-solving skills while preparing for a career in the technology field.
          </p>
        </div>

        {/* 2. PORTRAIT IMAGE BLOCK */}
        <div style={{
          background: 'transparent',
          border: 'none',
          padding: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          height: '100%',
          minHeight: '340px'
        }}>
          <img 
            src={myPhoto} 
            alt="Matheesha Indeewara's Portrait"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
              display: 'block'
            }} 
          />
        </div>

        {/* 3. INTERACTIVE CTA BUTTON BLOCK (දැන් මේකෙත් box එක අයින් කරා) */}
        <div style={{
          gridColumn: '1/-1',
          maxWidth: '1100px', // උඩ grid එකේ පළලටම සමාන වෙන්න 750px සිට 1100px දක්වා වැඩි කරා
          width: '100%',
          margin: '20px auto 0 auto', // උඩ කොටස් වල ඉඳන් පොඩි ඉඩක් තියාගන්න margin එකක් දුන්නා
          background: 'transparent',  // පසුබිම් වර්ණය transparent කරා
          border: 'none',             // Border එක අයින් කරා
          padding: '20px 0px',        // වටේ කොටුව නැති නිසා padding දෙපැත්ත 0 කරා ලස්සනට align වෙන්න
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          boxSizing: 'border-box',
          borderTop: '1px solid #1e293b' // Optional: පේජ් එකේ වෙන් වීම ලස්සනට පේන්න උඩින් විතරක් හීනි line එකක් දැම්මා
        }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>Technical Showcase</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Explore deployed projects, systems, and source code repositories.</p>
          </div>
          
          <button 
            onClick={() => navigate('/projects')} 
            style={{
              padding: '14px 28px',
              background: '#38bdf8',
              color: '#0f172a',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              whiteSpace: 'nowrap',
              marginLeft: '20px'
            }}
            onMouseOver={(e) => e.target.style.background = '#0ea5e9'}
            onMouseOut={(e) => e.target.style.background = '#38bdf8'}
          >
            View My Work →
          </button>
        </div>
      </div>
    </header>
  );
}

export default Home;