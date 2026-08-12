import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Main/Home/Home";
import About from "./components/Main/About/About";
import Services from "./components/Main/Services/Services";
import Contact from "./components/Main/Contact/Contact";
import Project from "./components/Main/Project/Project";
import { useTranslation } from 'react-i18next';
import "./App.css"


const App = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <div id="main-div">
      <Header t={t} i18n={i18n} toggleLanguage={toggleLanguage} />

      <main className="content-wrapper">
        <Home t={t}/>
        <About t={t} />
        <Services t={t} />
        <Project t={t} />
        <Contact t={t} />
      </main>

      <Footer />


    </div>
  );
};

export default App;