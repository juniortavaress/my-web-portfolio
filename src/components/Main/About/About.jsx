import React from 'react';
import './About.css';

const About = ({ t }) => {
  return (
    <section id="about" className="full-section about-container">
      <div className="about-content">
        <h2 className="section-title">{t('about_title')}</h2>
        
        <div className="about-grid">
          {/* Lado Esquerdo: Texto Narrativo */}
          <div className="about-text">
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            
            <div className="skills-tags">
              <span>#Python</span>
              <span>#Flask</span>
              <span>#React</span>
              <span>#JavaScript</span>
              <span>#PySide6</span>
              <span>#SQLite</span>
              <span>#Git</span>
            </div>
          </div>

          <div className="about-cards">
            <div className="skill-card">
              <i className="devicon-chrome-plain"></i>
              <span>{t('about_web')}</span>
            </div>
            <div className="skill-card">
              <i className="devicon-python-plain"></i>
              <span>{t('about_desktop')}</span>
            </div>
            <div className="skill-card">
              <i className="devicon-googlecloud-plain"></i> 
              <span>{t('about_eng')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;