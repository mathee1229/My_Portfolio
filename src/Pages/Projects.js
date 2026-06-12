import React from 'react';

function Projects() {
  const myProjects = [
    {
      title: "Mood Based Music Reccomender",
      description: "An interactive web application designed to analyze user moods and recommend personalized music playlists. Features a clean, user-centric UI/UX design with dynamic JavaScript filtering for seamless audio playback exploration.",
      tech: ["HTML5", "CSS3", "JavaScript", "UI Design"],
      github: "https://github.com/Isuru446/Mood-Flow-Music1.git"
    },
    {
      title: "Shipment & Logistic Management System",
      description: "A comprehensive digital logistics architecture featuring secure role-based access control (RBAC) for Drivers, Inspectors, and Customs Officials. Powered by a robust backend API handling dynamic database relations and tracking workflows.",
      tech: ["PHP", "MySQL", "REST API"],
      github: "https://github.com/Randil-K/Shipment-and-Logestic-Managment-System.git"
    },
    {
      title: "Student Event Management System",
      description: "A dynamic campus-focused web application engineered for institutional continuous assessment, dealing with data creation, event manipulation, and database communication.",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      github: "#" 
    },
    {
      title: "Food Ordering System",
      // අලුත් Description එක: කෑම ඇණවුම් කරන පද්ධතියට ගැලපෙන විදිහට සකස් කරා
      description: "A modern, full-stack food delivery web application that enables users to browse menus, manage a real-time shopping cart, and place orders. Integrated with secure user authentication and a dynamic database to track active orders.",
      // Tech Badges ටිකත් කෑම ඇණවුම් කරන ඇප් එකකට ගැලපෙන ලෙස යාවත්කාලීන කරා
      tech: ["React.js", "Firebase", "Tailwind CSS"],
      github: "#" 
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#000000', 
      width: '100%', 
      minHeight: '90vh', 
      boxSizing: 'border-box' 
    }}>
      
      <main style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '45px', color: '#ffffff' }}>
          My <span style={{ color: '#00f2fe' }}>Projects</span>
        </h2>
        
        {/* Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {myProjects.map((project, index) => (
            <article 
              key={index} 
              style={{ 
                background: '#111827', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '30px', 
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#00f2fe';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 242, 254, 0.15)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: '#fff' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
                  {project.description}
                </p>
              </div>
              
              <div>
                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(0, 242, 254, 0.08)', 
                      color: '#00f2fe', 
                      padding: '4px 10px', 
                      borderRadius: '4px', 
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: '#4facfe', 
                    textDecoration: 'none', 
                    fontWeight: '600', 
                    fontSize: '0.9rem',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => { e.target.style.color = '#00f2fe'; }}
                  onMouseOut={(e) => { e.target.style.color = '#4facfe'; }}
                >
                  View Repository →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;