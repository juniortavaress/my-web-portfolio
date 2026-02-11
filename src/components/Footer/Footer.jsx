import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-signature">
          <span className="code-icon">{"</>"}</span>
          <span className="name">JUNIOR TAVARES</span>
          <span className="dash">|</span>
          <span className="role">Full-Stack Developer</span>
        </div>
        
        <p className="footer-copyright">
          © {new Date().getFullYear()} — Built with Precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;