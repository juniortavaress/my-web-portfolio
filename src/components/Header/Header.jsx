import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ t, i18n, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#home">Junior Tavares<span className="dot">.</span></a>
      </div>

      {/* Only Mobile */}
      <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav_about')}</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t('nav_services')}</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('nav_projects')}</a></li>
          <li><a href="#contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>{t('nav_contact')}</a></li>
          <li className="lang-item">
            <button className="lang-button" onClick={toggleLanguage}>
              {i18n.language === 'pt' ? 'EN' : 'PT'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;