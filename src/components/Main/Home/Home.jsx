import './Home.css';

const Home = ({ t }) => {
  return (
    <section id="home" className="hero full-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-wave">{t('hero_wave')}</div>
          <h1>
            {t('hero_title_pre')} <span className="highlight">{t('hero_title_highlight')}</span> {t('hero_title_post')}
          </h1>
          <p className="hero-desc">{t('hero_desc')}</p>

          <div className="hero-cta">
            <a href="#about" className="btn btn-primary">{t('hero_cta_primary')}</a>
            <a href="#projects" className="btn btn-ghost">{t('hero_cta_ghost')}</a>
          </div>

          <div className="hero-trust">
            <div>
              {/* <strong>{t('hero_trust_value')}</strong>
              <span>{t('hero_trust_label')}</span> */}
            </div>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-circle">
            <span className="avatar-initials">JT</span>
            <div className="avatar-badge">
              <span className="pulse"></span>
              {t('hero_badge')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
