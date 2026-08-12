import './Services.css';

const ICONS = {
  web: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F6F5C" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6.5" cy="6.5" r=".6" fill="#1F6F5C" />
    </svg>
  ),
  automation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F6F5C" strokeWidth="1.8">
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
    </svg>
  ),
  apps: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F6F5C" strokeWidth="1.8">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 18h6" />
    </svg>
  ),
};

const SERVICE_KEYS = ['web', 'automation', 'apps'];

const Services = ({ t }) => {
  return (
    <section id="services" className="section services">
      <div className="section-head">
        <span className="eyebrow">{t('services_eyebrow')}</span>
        <h2 className="services-heading">{t('services_title')}</h2>
        <p>{t('services_desc')}</p>
      </div>

      <div className="services-grid">
        {SERVICE_KEYS.map((key) => (
          <div key={key} className="service-card">
            <div className="service-icon">{ICONS[key]}</div>
            <h3>{t(`services_list.${key}.title`)}</h3>
            <p>{t(`services_list.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
