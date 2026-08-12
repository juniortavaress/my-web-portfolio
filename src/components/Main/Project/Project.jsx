import { useState, useEffect, useRef, useCallback } from 'react';
import { projects } from './projectData'
import './Projects.css';

const Projects = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [progress, setProgress] = useState(0);
  const [wrapHeight, setWrapHeight] = useState(0);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  const total = projects.length;
  const activeIndex = Math.min(total, Math.max(1, Math.round(progress * (total - 1)) + 1));

  const getTrackWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return Math.max(track.scrollWidth - window.innerWidth, 0);
  }, []);

  const updateTrack = useCallback(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const totalScroll = wrap.offsetHeight - window.innerHeight;
    let p = totalScroll > 0 ? -wrap.getBoundingClientRect().top / totalScroll : 0;
    p = Math.max(0, Math.min(1, p));

    const trackWidth = getTrackWidth();
    track.style.transform = `translateX(-${p * trackWidth}px)`;
    setProgress(p);
  }, [getTrackWidth]);

  useEffect(() => {
    const recalc = () => {
      setWrapHeight(window.innerHeight + getTrackWidth());
      updateTrack();
    };
    recalc();

    window.addEventListener('resize', recalc);

    const track = trackRef.current;
    const iframes = track ? track.querySelectorAll('iframe, img') : [];
    iframes.forEach(el => el.addEventListener('load', recalc));

    return () => {
      window.removeEventListener('resize', recalc);
      iframes.forEach(el => el.removeEventListener('load', recalc));
    };
  }, [getTrackWidth, updateTrack]);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(updateTrack);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateTrack]);

  useEffect(() => {
    document.documentElement.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => {
      document.documentElement.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-pin-wrap" ref={wrapRef} style={{ height: wrapHeight ? `${wrapHeight}px` : '100vh' }}>
      <div className="projects-sticky">
        <div className="projects-header">
          <div>
            <span className="eyebrow">{t('projects_eyebrow')}</span>
            <h2 className="projects-heading">{t('projects_title')}</h2>
          </div>
          <div className="count">{String(activeIndex).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
        </div>

        <div className="track" ref={trackRef}>
          {projects.map((proj) => (
            <div key={proj.id} className="card" onClick={() => setSelectedProject(proj)}>
              <div className="card-thumb">
                {proj.liveUrl ? (
                  <iframe src={proj.liveUrl} loading="lazy" title={t(`project_list.${proj.key}.title`)} />
                ) : proj.image ? (
                  <img src={proj.image} alt={t(`project_list.${proj.key}.title`)} />
                ) : (
                  <span>{t('status')}</span>
                )}
              </div>
              <div className="card-body">
                <div className="card-tags">
                  {proj.tools.slice(0, 3).map(tool => <span key={tool} className="tag">{tool}</span>)}
                </div>
                <h3>{t(`project_list.${proj.key}.title`)}</h3>
                <p>{t(`project_list.${proj.key}.short`)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress * 100}%` }}></div>
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay open" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>

            {selectedProject.liveUrl ? (
              <iframe className="modal-frame" src={selectedProject.liveUrl} loading="lazy" title={t(`project_list.${selectedProject.key}.title`)} />
            ) : selectedProject.expandedImage ? (
              <img className="modal-frame" src={selectedProject.expandedImage} alt={t(`project_list.${selectedProject.key}.title`)} />
            ) : null}

            <div className="modal-body">
              <div className="card-tags">
                {selectedProject.tools.map(tool => <span key={tool} className="tag">{tool}</span>)}
              </div>
              <h3>{t(`project_list.${selectedProject.key}.title`)}</h3>
              <p>{t(`project_list.${selectedProject.key}.full`)}</p>
              <div className="modal-actions">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {t('view_more')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
