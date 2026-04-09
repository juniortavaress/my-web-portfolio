import './Home.css';

const Home = ({ t }) => {
  return (
    <section id="home" className="full-section">
        <div className="hero-content">

            <p className="intro-text">{t('hi_my_name_is')}</p>
            <h1>Junior <span className="highlight">Tavares</span></h1>
            
            <div className="role-container">
                <h2 className="role-title">{t('role')}</h2>
            </div>

            <div className="tech-group">
                <div className="tech-icons">
                    <div className="tech-icon-hitbox" title="Python"><i className="devicon-python-plain"></i></div>
                    <div className="tech-icon-hitbox" title="Flask"><i className="devicon-flask-original"></i></div>
                    <div className="tech-icon-hitbox" title="SQLite"><i className="devicon-sqlite-plain"></i></div>
                    <div className="tech-icon-hitbox" title="React"><i className="devicon-react-original"></i></div>
                    <div className="tech-icon-hitbox" title="JavaScript"><i className="devicon-javascript-plain"></i></div>
                    <div className="tech-icon-hitbox" title="HTML5"><i className="devicon-html5-plain"></i></div>
                    <div className="tech-icon-hitbox" title="CSS3"><i className="devicon-css3-plain"></i></div>
                    <div className="tech-icon-hitbox" title="Tailwind"><i className="devicon-tailwindcss-original"></i></div>
                    <div className="tech-icon-hitbox" title="Git"><i className="devicon-git-plain"></i></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
