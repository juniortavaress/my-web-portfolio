import { useState, useEffect, useRef, useCallback } from 'react';
import { projects } from './projectData'
import './Projects.css';

const FRAME_WIDTH = 1440;
const FRAME_HEIGHT = 900;

const ScaledFrame = ({ src, title, interactive = false }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      setScale(container.clientWidth / FRAME_WIDTH);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="scaled-frame">
      <iframe
        src={src}
        loading="lazy"
        scrolling={interactive ? 'yes' : 'no'}
        title={title}
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          transform: `scale(${scale})`,
          pointerEvents: interactive ? 'auto' : 'none',
        }}
      />
    </div>
  );
};

const Projects = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [progress, setProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef(null);

  const total = projects.length;
  const activeIndex = Math.min(total, Math.max(1, Math.round(progress * (total - 1)) + 1));

  const updateFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const p = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    setProgress(p);
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft < maxScroll - 4);
  }, []);

  const handleWheel = useCallback((e) => {
    const track = trackRef.current;
    if (!track) return;

    // Mouse wheel comum só gera deltaY (deltaX fica em 0), então qualquer
    // deltaX presente já indica um swipe lateral de trackpad. Nesse caso
    // usamos o maior dos dois deltas como direção do carrossel; scroll
    // vertical puro (deltaX === 0) passa direto para a página.
    if (e.deltaX === 0) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;

    const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const atStart = track.scrollLeft <= 0;
    const atEnd = track.scrollLeft >= maxScroll - 1;

    if ((delta > 0 && atEnd) || (delta < 0 && atStart)) {
      return;
    }

    e.preventDefault();
    track.scrollLeft += delta;
  }, []);

  const dragState = useRef({ active: false, dragged: false, startX: 0, startScroll: 0 });

  const handlePointerDown = useCallback((e) => {
    const track = trackRef.current;
    if (!track || (e.pointerType === 'mouse' && e.button !== 0)) return;
    dragState.current = {
      active: true,
      dragged: false,
      startX: e.clientX,
      startScroll: track.scrollLeft,
    };
  }, []);

  const handlePointerMove = useCallback((e) => {
    const track = trackRef.current;
    const state = dragState.current;
    if (!track || !state.active) return;

    const dx = e.clientX - state.startX;
    if (Math.abs(dx) > 5) {
      state.dragged = true;
      track.scrollLeft = state.startScroll - dx;
    }
  }, []);

  const endDrag = useCallback(() => {
    dragState.current.active = false;
  }, []);

  const handleCardClick = useCallback((proj) => {
    if (dragState.current.dragged) {
      dragState.current.dragged = false;
      return;
    }
    setSelectedProject(proj);
  }, []);

  const scrollByCard = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.card');
    const step = card ? card.getBoundingClientRect().width + 28 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('wheel', handleWheel, { passive: false });
    track.addEventListener('scroll', updateFromScroll, { passive: true });
    updateFromScroll();
    return () => {
      track.removeEventListener('wheel', handleWheel);
      track.removeEventListener('scroll', updateFromScroll);
    };
  }, [handleWheel, updateFromScroll]);

  useEffect(() => {
    document.documentElement.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => {
      document.documentElement.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    window.addEventListener('resize', updateFromScroll);
    return () => window.removeEventListener('resize', updateFromScroll);
  }, [updateFromScroll]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div>
          <span className="eyebrow">{t('projects_eyebrow')}</span>
          <h2 className="projects-heading">{t('projects_title')}</h2>
        </div>
        <div className="carousel-controls">
          <div className="count">{String(activeIndex).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="track"
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {projects.map((proj) => (
          <div key={proj.id} className="card" onClick={() => handleCardClick(proj)}>
            <div className="card-thumb">
              {proj.liveUrl ? (
                <ScaledFrame src={proj.liveUrl} title={t(`project_list.${proj.key}.title`)} />
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

      {selectedProject && (
        <div className="modal-overlay open" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>

            {selectedProject.liveUrl && (
              <div className="modal-visual">
                <div className="monitor-mockup">
                  <svg className="monitor-svg" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
                    <rect x="10" y="10" width="980" height="600" rx="24" fill="#1c1e1a" />
                    <rect x="34" y="34" width="932" height="552" rx="4" fill="#000" />
                    <rect x="440" y="610" width="120" height="46" fill="#1c1e1a" />
                    <path d="M330 656 h340 l24 34 h-388 z" fill="#1c1e1a" />
                  </svg>
                  <div className="monitor-screen">
                    <ScaledFrame src={selectedProject.liveUrl} title={t(`project_list.${selectedProject.key}.title`)} interactive />
                  </div>
                </div>
              </div>
            )}

            <div className={`modal-body${!selectedProject.liveUrl ? ' modal-body-full' : ''}`}>
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
