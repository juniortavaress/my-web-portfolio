import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ t }) => {

  return (
    <section id="contact" className="full-section">
      <div className="contact-container">
        <h2>{t('contact.title')}</h2>
      
        <div className="contact-grid">
          <form action="https://formspree.io/f/xwvnvodn" method="POST" className="contact-form desktop-only">
            <input type="text" name="name" placeholder={t('contact.form_name')} required />
            <input type="email" name="email" placeholder={t('contact.form_email')} required />
            <textarea name="message" placeholder={t('contact.form_message')} rows="5" required></textarea>
            <button type="submit" className="btn-send">{t('contact.send_button')}</button>
          </form>

          <div className="contact-info">
            <h3>{t('contact.subtitle')}</h3>
            <p>{t('contact.description')}</p>
        
            <div className="social-icons">
              <a href="https://wa.me/5548998430552" target="_blank" rel="noopener noreferrer" className="social-card">
                <FaWhatsapp /> <span>WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/in/jucelio-junior" target="_blank" rel="noopener noreferrer" className="social-card">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="mailto:juceliojunior27@gmail.com" className="social-card">
                <FaEnvelope /> <span>Email</span>
              </a>
              <a href="https://github.com/juniortavaress" target="_blank" rel="noopener noreferrer" className="social-card">
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;