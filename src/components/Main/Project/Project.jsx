import React, { useState, useEffect } from 'react';
import { projects } from './projectData'
import './Projects.css';

const Projects = ({ t }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
      if (selectedProject) {
        document.documentElement.style.overflow = 'hidden'; 
      } else {
        document.documentElement.style.overflow = 'unset';
      }
      return () => {
        document.documentElement.style.overflow = 'unset';
      };
    }, [selectedProject]);


  return (
    <section id="projects" className="projects-section">
      <div className="project-content">
        <h2 className="section-title">{t('projects_title')}</h2>

        <div className="filter-container desktop-only">
          {['all', 'web', 'software'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)} 
              className={filter === cat ? 'active' : ''}
            >
              {t(`filter_${cat}`)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card" onClick={() => setSelectedProject(proj)}>
              <div className="project-image-placeholder">
                {proj.image ? (
                  <img 
                    src={proj.image} 
                    alt={t(`project_list.${proj.key}.title`)} 
                    className="project-img"
                  />
                ) : (
                  <span>{t('status')}</span>
                )}
              </div>
              <div className="card-body">
                <h3>{t(`project_list.${proj.key}.title`)}</h3>
                <p>{t(`project_list.${proj.key}.short`)}</p>
                <div className="project-tools">
                  {proj.tools.slice(0, 3).map(tool => <span key={tool}>{tool}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL / POP-UP */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>&times;</button>
            
            <div className="modal-image">
                {selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={t(`project_list.${selectedProject.key}.title`)} 
                    className="project-img"
                  />
                ) : (
                  <span>{t('status')}</span>
                )}
            </div>

            <div className="modal-info">
              <h2>{t(`project_list.${selectedProject.key}.title`)}</h2>
              <div className="project-tools">
                {selectedProject.tools.map(tool => <span key={tool}>{tool}</span>)}
              </div>
              <p className="modal-full-desc">{t(`project_list.${selectedProject.key}.full`)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;