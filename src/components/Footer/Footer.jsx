import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Junior Tavares</span>
      <span>Florianópolis, Brasil</span>
    </footer>
  );
};

export default Footer;