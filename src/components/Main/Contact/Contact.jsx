import './Contact.css';

const Contact = ({ t }) => {

  return (
    <section id="contact" className="contact">
      <div className="contact-blob"></div>
      <span className="eyebrow">{t('contact.eyebrow')}</span>
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.description')}</p>

      <div className="contact-cta">
        <a href="mailto:juceliojunior27@gmail.com" className="btn btn-primary">{t('contact.send_button')}</a>
        <a href="https://wa.me/5548998430552" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">{t('contact.whatsapp_button')}</a>
      </div>

      <div className="contact-links">
        <a href="mailto:juceliojunior27@gmail.com">Email</a>
        <a href="https://github.com/juniortavaress" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jucelio-junior" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;