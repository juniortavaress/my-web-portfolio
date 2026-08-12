import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ t }) => {

  return (
    <section id="contact" className="contact">
      <div className="contact-blob"></div>
      <span className="eyebrow">{t('contact.eyebrow')}</span>
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.description')}</p>

      <form action="https://formspree.io/f/xwvnvodn" method="POST" className="contact-form">
        <input type="text" name="name" placeholder={t('contact.form_name')} required />
        <input type="email" name="email" placeholder={t('contact.form_email')} required />
        <textarea name="message" placeholder={t('contact.form_message')} rows="4" required></textarea>
        <button type="submit" className="btn btn-primary">{t('contact.send_button')}</button>
      </form>

      <div className="contact-links">
        <a href="https://wa.me/5548998430552" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/jucelio-junior" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:juceliojunior27@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/juniortavaress" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;