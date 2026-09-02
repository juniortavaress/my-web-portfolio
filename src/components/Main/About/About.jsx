import { Trans } from 'react-i18next';
import './About.css';
import profilePhoto from '../../../assets/profile-photo-about.jpg';

const About = ({ t }) => {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-photo">
          <img src={profilePhoto} alt="Jucélio Tavares Junior" />
        </div>
        <div>
          <span className="eyebrow">{t('about_eyebrow')}</span>
          <h2 className="about-heading">{t('about_title')}</h2>
          <p><Trans t={t} i18nKey="about_p1" components={{ strong: <strong /> }} /></p>
          <p><Trans t={t} i18nKey="about_p2" components={{ strong: <strong /> }} /></p>
          <p>{t('about_p4')}</p>
          <p><Trans t={t} i18nKey="about_p3" components={{ strong: <strong /> }} /></p>
        </div>
      </div>
    </section>
  );
};

export default About;
