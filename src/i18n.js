import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
    translation: {
      "hi_my_name_is": "Hi, I'm",
      "role": "Full-Stack Developer",
      "i_build": "I develop modern applications, combining robust back-ends with dynamic interfaces.",
      "nav_home": "Home",
      "nav_about": "About",
      "nav_projects": "Projects",
      "nav_contact": "Contact",
      "about_title": "About Me",
      "about_p1": "I am a final-year Mechanical Engineering student and a software developer with 5 years of practical Python experience. My journey combines engineering's analytical rigor with digital solutions for automation and complex technical problems.",
      "about_p2": "I have experience developing applications across different platforms: in the Web environment, I've built integrated websites with Flask and modern interfaces with React. In the Desktop landscape, I develop robust software using PySide for automation and optimization.",
      "about_web": "Web Development",
      "about_desktop": "Software Development ",
      "about_eng": "Engenharia & Data",

      "projects_title": "My Projects",
      "filter_all": "All",
      "filter_web": "Web Development",
      "filter_software": "Software Development",
      "view_more": "View Details",
      "view_less": "Close",
      "status": "SOON",

      "project_list": {
        "calibration": {
          "title": "Material Model Calibrator",
          "short": "Distributed system for inverse material calibration via FEA (Abaqus).",
          "full": "An advanced Python application for automatic calibration of constitutive material models. It orchestrates a complex optimization cycle across multiple computers using Supabase and PSO algorithms."
        },
        "market": {
          "title": "Market Analysis Tool",
          "short": "Automation for intelligent filtering of Brazilian Stocks and REITs.",
          "full": "A Python-based tool that uses Selenium for web scraping real-time financial data from the B3 exchange, applying smart filters to identify investment opportunities."
        },
        "structural": {
          "title": "Mechanical Structural Analyzer",
          "short": "Desktop Software for truss and beam analysis with an intuitive GUI.",
          "full": "A Python implementation of FEM algorithms originally in MATLAB. It calculates deflections, stresses, and moments, providing a user-friendly interface for engineering students."
        },
        "finance_manager": {
        "title": "Personal Finance & Investment Manager",
        "short": "Full-stack Flask application for tracking transactions and investment portfolios.",
        "full": "A robust financial system designed to manage bank transactions and investment portfolios in one place. \n\nKey features include automated processing of brokerage notes, and a responsive dashboard. It overcomes hosting limitations by offering a modular architecture that supports real-time API integration for asset pricing. Developed to streamline personal wealth management through data automation."
      },
      },
      
      "contact": {
        "title": "Contact",
        "subtitle": "Let's work together!",
        "description": "I'm currently available for new projects. Feel free to reach out via social media or the form below.",
        "form_name": "Name",
        "form_email": "Email",
        "form_message": "Message",
        "send_button": "Send Message"
      }
    }
  },
    pt: {
    translation: {
      "hi_my_name_is": "Olá, me chamo",
      "role": "Desenvolvedor Full-Stack",
      "i_build": "Desenvolvo aplicações modernas, unindo back-ends robustos à interfaces dinâmicas.",
      "nav_home": "Início",
      "nav_about": "Sobre",
      "nav_projects": "Projetos",
      "nav_contact": "Contato",
      
      "about_title": "Sobre Mim",
      "about_p1": "Sou estudante de Engenharia Mecânica no último ano e desenvolvedor de software com 5 anos de experiência prática em Python. Minha trajetória une o rigor analítico da engenharia à criação de soluções digitais para automação e problemas técnicos complexos.",
      "about_p2": "Tenho experiência no desenvolvimento de aplicações em diferentes plataformas: no ambiente Web, construí sites integrados com Flask e interfaces modernas com React. No cenário Desktop, desenvolvo softwares robustos utilizando PySide para automação e otimização.",
      "about_web": "Desenvolvimento Web",
      "about_desktop": "Desenvolvimento de Software",
      "about_eng": "Engenharia & Dados",

      "projects_title": "Meus Projetos",
      "filter_all": "Todos",
      "filter_web": "Desevolvimento Web",
      "filter_software": "Desenvolvmento de Software",
      "view_more": "Ver Detalhes",
      "view_less": "Fechar",
      "status": "EM BREVE",

      "project_list": {
        "calibration": {
          "title": "Calibrador de Modelos de Materiais",
          "short": "Sistema distribuído para calibração inversa de materiais via FEA (Abaqus).",
          "full": "Aplicação avançada em Python para calibração automática de modelos constitutivos. Orquestra simulações distribuídas via nuvem (Supabase) e utiliza algoritmos PSO."
        },
        "market": {
          "title": "Market Analysis Tool",
          "short": "Automação para filtragem inteligente de Ações e FIIs da B3.",
          "full": "Ferramenta de web scraping com Selenium que coleta dados da B3 em tempo real e aplica filtros customizáveis para análise de investimentos."
        },
        "structural": {
          "title": "Analisador Estrutural Mecânico",
          "short": "Software Desktop para análise de treliças e vigas com interface gráfica.",
          "full": "Implementação em Python de algoritmos de elementos finitos. Calcula deflexões, tensões e momentos fletores, facilitando o uso para estudantes de engenharia."
        },
        "finance_manager": {
        "title": "Gestor de Finanças e Investimentos",
        "short": "Aplicação Full-stack em Flask para controle de transações e carteira de ativos.",
        "full": "Um sistema robusto de gestão financeira projetado para acompanhar transações bancárias e carteiras de investimento em um só lugar. \n\nAs principais funcionalidades incluem processamento automatizado de notas de corretagem via Pandas e um dashboard responsivo. O projeto demonstra habilidades em CRUD, integração de bancos de dados relacionais e manipulação de dados financeiros complexos para gerar insights de rentabilidade."
      },
      },

      "contact": {
        "title": "Contatos",
        "subtitle": "Vamos trabalhar juntos!",
        "description": "Estou disponível para novos projetos. Sinta-se à vontade para me chamar nas redes ou enviar uma mensagem.",
        "form_name": "Nome",
        "form_email": "E-mail",
        "form_message": "Mensagem",
        "send_button": "Enviar Mensagem", },


     
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt", // Língua padrão se o detector falhar
    interpolation: { escapeValue: false }
  });

export default i18n;