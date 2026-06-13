import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };

  return (
    <div style={{ 
      backgroundColor: '#000000', 
      width: '100%', 
      minHeight: '90vh', 
      boxSizing: 'border-box' 
    }}>
      
      <main style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: '#ffffff' }}>
          Contact <span style={{ color: '#00f2fe' }}>Me</span>
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '40px',
          alignItems: 'start'
        }}>
          
        
          <div style={{
            background: '#111827', 
            padding: '35px', 
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            
            {/* 1. Address Item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={iconBoxStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', color: '#ffffff', fontSize: '1.1rem', fontWeight: '600' }}>Address</h4>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.95rem' }}>Polgasowita, Sri Lanka.</p>
              </div>
            </div>

           
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={iconBoxStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', color: '#ffffff', fontSize: '1.1rem', fontWeight: '600' }}>Call Us</h4>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.95rem' }}>+94 XX XXX XXXX</p>
              </div>
            </div>

            {/* 3. Email Us Item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={iconBoxStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', color: '#ffffff', fontSize: '1.1rem', fontWeight: '600' }}>Email Us</h4>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.95rem' }}>info@example.com</p>
              </div>
            </div>

            
            <a 
              href="https://github.com/mathee1229" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
              onMouseOver={(e) => { e.currentTarget.querySelector('.icon-circle').style.background = 'rgba(0, 242, 254, 0.18)'; }}
              onMouseOut={(e) => { e.currentTarget.querySelector('.icon-circle').style.background = 'rgba(0, 242, 254, 0.08)'; }}
            >
              <div className="icon-circle" style={iconBoxStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', color: '#ffffff', fontSize: '1.1rem', fontWeight: '600' }}>GitHub</h4>
                <p style={{ margin: 0, color: '#4facfe', fontSize: '0.95rem' }}>github.com/mathee1229</p>
              </div>
            </a>

           
            <a 
              href="https://www.linkedin.com/in/matheesha-ik-jayawardhana-15bb16333?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
              onMouseOver={(e) => { e.currentTarget.querySelector('.icon-circle').style.background = 'rgba(0, 242, 254, 0.18)'; }}
              onMouseOut={(e) => { e.currentTarget.querySelector('.icon-circle').style.background = 'rgba(0, 242, 254, 0.08)'; }}
            >
              <div className="icon-circle" style={iconBoxStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', color: '#ffffff', fontSize: '1.1rem', fontWeight: '600' }}>LinkedIn</h4>
                <p style={{ margin: 0, color: '#4facfe', fontSize: '0.95rem' }}>Matheesha Jayawardhana</p>
              </div>
            </a>

           
            <div style={{ width: '100%', height: '230px', marginTop: '10px', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe 
                title="Google Map Location"
                src="https://maps.google.com/maps?q=Polgasowita,%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>

          </div>

          
          <div style={{ width: '100%' }}>
            {submitted ? (
              <div style={{ 
                padding: '20px', 
                background: 'rgba(0, 242, 254, 0.1)', 
                border: '1px solid #00f2fe', 
                color: '#00f2fe', 
                borderRadius: '12px', 
                textAlign: 'center',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>
                ✨ Thank you! Your message has been transmitted successfully. I will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px', 
                background: '#111827', 
                padding: '35px', 
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ color: '#9ca3af', fontSize: '0.9rem', fontWeight: '500' }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#00f2fe'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ color: '#9ca3af', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#00f2fe'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ color: '#9ca3af', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    required 
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#00f2fe'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  style={{ 
                    padding: '14px', 
                    background: 'linear-gradient(45deg, #00f2fe, #4facfe)', 
                    color: '#0b0f19', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontWeight: 'bold', 
                    fontSize: '1rem', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.boxShadow = '0 0 25px rgba(0, 242, 254, 0.6)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}


const iconBoxStyle = {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  background: 'rgba(0, 242, 254, 0.08)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  transition: 'background 0.3s ease'
};


const inputStyle = {
  padding: '12px',
  background: '#0b0f19',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default Contact;