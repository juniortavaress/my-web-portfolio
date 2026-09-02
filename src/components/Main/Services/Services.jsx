import './Services.css';

const TRAJECTORY_KEYS = ['ampera', 'lva', 'mti', 'hollox'];

const Services = ({ t }) => {
  return (
    <section id="services" className="section trajectory">
      <div className="section-head">
        <span className="eyebrow">{t('trajectory_eyebrow')}</span>
        <h2 className="services-heading">{t('trajectory_title')}</h2>
      </div>

      <div className="timeline-scroll">
        <div className="timeline">
          <div className="timeline-line" />
          {TRAJECTORY_KEYS.map((key, i) => {
            const tooltipSide = i < TRAJECTORY_KEYS.length / 2 ? 'right' : 'left';
            const card = (
              <div className="timeline-card" tabIndex={0}>
                <h3>{t(`trajectory_list.${key}.role`)}</h3>
                <span className="timeline-org">{t(`trajectory_list.${key}.org`)}</span>
                <span className="timeline-location">{t(`trajectory_list.${key}.location`)}</span>
                <div className={`timeline-tooltip timeline-tooltip-${tooltipSide}`}>{t(`trajectory_list.${key}.summary`)}</div>
              </div>
            );
            const period = (
              <span className="timeline-period">{t(`trajectory_list.${key}.period`)}</span>
            );

            return (
              <div key={key} className={`timeline-item ${i % 2 === 0 ? 'is-up' : 'is-down'}`}>
                <div className="timeline-slot timeline-slot-top">{i % 2 === 0 ? card : period}</div>
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-slot timeline-slot-bottom">{i % 2 === 0 ? period : card}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
