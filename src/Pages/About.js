import React from 'react';

function About() {
  return (
    // 1. මුළු පිටුවේම පසුබිම දෙපැත්තටම යනකම්ම සම්පූර්ණයෙන් කළු කරන්න මේ wrapper එක දැම්මා
    <div style={{ 
      backgroundColor: '#000000', 
      width: '100%', 
      minHeight: '90vh', 
      boxSizing: 'border-box' 
    }}>
      
      {/* 2. මැද තියෙන content කොටස කලින් තිබ්බ විදිහටම maxWidth 900px වලින් සකස් කරා */}
      <main style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        
        {/* Background Neon Glow Effect */}
        <div style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
          filter: 'blur(130px)',
          opacity: 0.18,
          top: '10%',
          right: '10%',
          zIndex: -1
        }}></div>

        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: '#ffffff' }}>
          About <span style={{ color: '#00f2fe' }}>Me</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* 1. Educational Background (Box එක කලින් තිබුණු Styles මයි) */}
          <section style={{ background: '#111827', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#00f2fe', fontSize: '1.4rem', marginBottom: '10px' }}>Educational Background</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.7' }}>
              I am currently reading for the <strong>National Diploma in Technology (NDT)</strong> in <strong>Information Technology</strong> at the <strong>Institute of Technology, University of Moratuwa (ITUM)</strong>. My academic curriculum has provided me with a solid foundation in computer systems, structural programming, and user-centric application designs.
            </p>
          </section>

          {/* 2. Technical Skills (Box එක කලින් තිබුණු Styles මයි) */}
          <section style={{ background: '#111827', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#00f2fe', fontSize: '1.4rem', marginBottom: '15px' }}>Technical Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['HTML5', 'CSS3', 'JavaScript (ES6)', 'React.js', 'PHP', 'MySQL', 'Figma', 'Adobe Illustrator'].map((skill, index) => (
                <span key={index} style={{ background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.2)', color: '#00f2fe', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500' }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* 3. Career Aspirations (Box එක කලින් තිබුණු Styles මයි) */}
          <section style={{ background: '#111827', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#00f2fe', fontSize: '1.4rem', marginBottom: '10px' }}>Career Aspirations</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.7' }}>
              My immediate goal is to transition into the professional software industry through a challenging <strong>Software Engineering / Web Development Internship</strong>. I am eager to contribute to real-world development pipelines, apply industry-standard design heuristics, and solve complex layout and backend architectural challenges.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}

export default About;