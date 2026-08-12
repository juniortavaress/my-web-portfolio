import { Trans } from 'react-i18next';
import './About.css';

const STACK = ['Python', 'Flask', 'React', 'JavaScript', 'PySide6', 'SQLite', 'Git'];

const About = ({ t }) => {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-photo">{t('about_photo_placeholder')}</div>
        <div>
          <span className="eyebrow">{t('about_eyebrow')}</span>
          <h2 className="about-heading">{t('about_title')}</h2>
          <p><Trans t={t} i18nKey="about_p1" components={{ strong: <strong /> }} /></p>
          <p><Trans t={t} i18nKey="about_p2" components={{ strong: <strong /> }} /></p>
          <p>{t('about_p3')}</p>

          <div className="about-stack-line">
            <span className="about-stack-label">{t('about_stack_label')}</span>
            {STACK.map(tech => (
              <span key={tech} className="stack-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
