import { useState } from 'react';
import logoImg from '../../assets/logo.png';
import './Header.css';

const Header = ({ t, i18n, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">
        <a href="#home">
          <img src={logoImg} alt="Logo Jucelio" style={{ height: '80px' }} />
        </a>
      </div>

      {/* Only Mobile */}
      <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav_home')}</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav_about')}</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('nav_projects')}</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav_contact')}</a></li>
          
          {/* Only Mobile */}
          <li className="mobile-only">
            <button className="lang-button" onClick={toggleLanguage}>
              {i18n.language === 'pt' ? 'EN' : 'PT'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Only Desktop */}
      <div className="header-actions desktop-only">
        <button className="lang-button" onClick={toggleLanguage}>
          {i18n.language === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </header>
  );
};

export default Header;