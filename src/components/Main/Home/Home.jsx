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
                    <i className="devicon-python-plain" title="Python"></i>
                    <i className="devicon-flask-original" title="Flask"></i>
                    <i className="devicon-sqlite-plain" title="SQLite"></i>
                    <i className="devicon-react-original" title="React"></i>
                    <i className="devicon-javascript-plain" title="JavaScript"></i>
                    <i className="devicon-html5-plain" title="HTML5"></i>
                    <i className="devicon-css3-plain" title="CSS3"></i>
                    <i className="devicon-git-plain" title="Git"></i>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;