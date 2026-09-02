import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
    translation: {
      "hi_my_name_is": "Hi, I'm",
      "role": "Engineer & Developer",
      "i_build": "I develop modern applications, combining robust back-ends with dynamic interfaces.",
      "nav_home": "Home",
      "nav_about": "About",
      "nav_services": "How I help",
      "nav_projects": "Projects",
      "nav_contact": "Contact",

      "hero_wave": "👋 Hi, I'm Junior",
      "hero_title_pre": "I build",
      "hero_title_highlight": "systems and websites",
      "hero_title_post": "that actually work.",
      "hero_desc": "I have a background in Engineering and an analytical approach to problem solving. I build digital solutions end-to-end — from front-end interfaces to back-end systems and automation — with a strong focus on writing code that is functional, clean, and reliable.",
      "hero_cta_primary": "Get in touch",
      "hero_cta_ghost": "See my work",
      "hero_badge": "Open to new opportunities",
      "hero_trust_value": "5+",
      "hero_trust_label": "years coding",

      "about_eyebrow": "About me",
      "about_photo_placeholder": "Your photo or illustration here",
      "about_title": "From engineering to technology, always solving problems",
      "about_p1": "I hold a degree in <strong>Mechanical Engineering</strong>, which trained me to break down complex problems into data, variables, and testable hypotheses before jumping to a solution.",
      "about_p2": "Today I apply that same analytical mindset to <strong>software, automation, and data</strong> — mapping a process, finding where it breaks down or wastes time, and building the tool that fixes it.",
      "about_p3": "I enjoy the full cycle: understanding a problem, modeling it, and shipping something that actually works — and I'm always looking for the next one to work on.",
      "about_stack_label": "I mainly work with",
      "about_web": "Web Development",
      "about_desktop": "Software Development ",
      "about_eng": "Engenharia & Data",

      "services_eyebrow": "What I do",
      "services_title": "Where I focus my work",
      "services_desc": "I approach every problem analytically first — then build the tool that solves it.",
      "services_list": {
        "web": {
          "title": "Websites & web systems",
          "desc": "From institutional websites to full systems with authentication, databases, and admin panels."
        },
        "automation": {
          "title": "Process automation & data analysis",
          "desc": "I map repetitive or manual processes and replace them with scripts and pipelines that cut time and error, turning raw data into something decision-ready."
        },
        "apps": {
          "title": "Custom software & tools",
          "desc": "Applications built around a specific operational need — inventory control, reporting, monitoring, and more."
        }
      },

      "projects_eyebrow": "Projects",
      "projects_title": "A bit of what I've already built",
      "filter_all": "All",
      "filter_web": "Web Development",
      "filter_software": "Software Development",
      "view_more": "View Details",
      "view_less": "Close",
      "status": "SOON",

      "project_list": {
        "vertical_life": {
          "title": "Vertical Life 8",
          "short": "Website for a vertical rescue techniques school in Florianópolis, Brazil.",
          "full": "Institutional website for a vertical techniques school in Florianópolis. It brings together the courses offered — mountain rescue, first-aid training (APH), and canine rescue — in a clear structure focused on building credibility and converting visitors into students."
        },
        "atmos_finance": {
          "title": "Atmos — Finance Manager",
          "short": "Presentation site for Atmos, a tool to organize and track personal finances.",
          "full": "Presentation website for Atmos, a product for organizing and tracking personal finances. The layout leans on charts and in-app mockups to explain the value proposition fast, without relying on long copy."
        },
        "solo_arena": {
          "title": "SOLO Padel & Sand Arena",
          "short": "Landing page for a sports arena with padel courts and sand sports.",
          "full": "Conceptual landing page for a fictional sports arena with padel courts and sand sports. Features opening hours, a booking button, and location."
        },
        "acoustic_analysis_gui": {
          "title": "Acoustic Analysis Interface",
          "short": "Open-source Python GUI for time, frequency, and psychoacoustic audio analysis.",
          "full": "An open-source graphical interface developed in Python alongside Ricardo Brum and Jucélio Tavares Junior for sound quality analysis. It allows importing, editing, and analyzing audio in the time and frequency domains, as well as through psychoacoustic metrics calculated with the MosQIto framework from Eomys Engineering. The project is under constant evolution, and contributors are very welcome."
        },
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
        "personal_trainer_vini": {
          "title": "Vinicius Anselmo Personal Trainer",
          "short": "Premium landing page focused on fitness services, conversion, and visual impact.",
          "full": "Institutional website presenting Vinicius Anselmo's personal trainer and online coaching services. Features sections for services, workflow, FAQ, and contact channels, with responsive design and animations."
      },
      },
      
      "contact": {
        "eyebrow": "Contact",
        "title": "Let's talk?",
        "subtitle": "I'm open to new opportunities.",
        "description": "Feel free to reach out — I'm happy to talk about a role, a project, or just exchange ideas.",
        "send_button": "Send a message",
        "whatsapp_button": "Chat on WhatsApp"
      }
    }
  },
    pt: {
    translation: {
      "hi_my_name_is": "Olá, me chamo",
      "role": "Engenheiro & Desenvolvedor",
      "i_build": "Desenvolvo aplicações modernas, unindo back-ends robustos à interfaces dinâmicas.",
      "nav_home": "Início",
      "nav_about": "Sobre",
      "nav_services": "Como ajudo",
      "nav_projects": "Projetos",
      "nav_contact": "Contato",

      "hero_wave": "👋 Olá, eu sou o Junior",
      "hero_title_pre": "Eu construo",
      "hero_title_highlight": "sistemas e sites",
      "hero_title_post": "que funcionam de verdade.",
      "hero_desc": "Sou formado em Engenharia e desenvolvo soluções digitais de ponta a ponta — de interfaces front-end a sistemas back-end — com foco em escrever código funcional, limpo e confiável.",
      "hero_cta_primary": "Entrar em contato",
      "hero_cta_ghost": "Ver meu trabalho",
      "hero_badge": "Aberto a novas oportunidades",
      "hero_trust_value": "5+",
      "hero_trust_label": "anos programando",

      "about_eyebrow": "Sobre mim",
      "about_photo_placeholder": "Foto ou ilustração sua aqui",
      "about_title": "Da engenharia para a tecnologia, sempre resolvendo problemas",
      "about_p1": "Sou <strong>estudante de Engenharia Mecânica</strong> e, ao longo da faculdade, descobri no código uma forma ainda mais direta de resolver problemas reais.",
      "about_p2": "Hoje me dedico a construir <strong>sites, sistemas e aplicativos</strong>, sempre com a mesma mentalidade que trouxe da engenharia: entender o problema a fundo antes de propor a solução, e entregar algo que realmente funcione.",
      "about_p3": "Gosto de tirar um projeto do zero até algo funcional e bem construído — e estou sempre em busca do próximo desafio.",
      "about_stack_label": "",
      "about_web": "Desenvolvimento Web",
      "about_desktop": "Desenvolvimento de Software",
      "about_eng": "Engenharia & Dados",

      "services_eyebrow": "O que eu faço",
      "services_title": "Onde concentro meu trabalho",
      "services_desc": "Não entrego só código — construo soluções pensadas para o problema real.",
      "services_list": {
        "web": {
          "title": "Sites e sistemas web",
          "desc": "De sites institucionais a sistemas completos com autenticação, banco de dados e painel administrativo."
        },
        "automation": {
          "title": "Automação de tarefas",
          "desc": "Scripts e ferramentas que substituem trabalho manual repetitivo, reduzindo tempo e chance de erro."
        },
        "apps": {
          "title": "Aplicativos sob medida",
          "desc": "Software construído para necessidades específicas — controle de estoque, cadastro de clientes, relatórios e mais."
        }
      },

      "projects_eyebrow": "Projetos",
      "projects_title": "Um pouco do que já construí",
      "filter_all": "Todos",
      "filter_web": "Desevolvimento Web",
      "filter_software": "Desenvolvmento de Software",
      "view_more": "Ver Detalhes",
      "view_less": "Fechar",
      "status": "EM BREVE",

      "project_list": {
        "vertical_life": {
          "title": "Vertical Life 8",
          "short": "Site para uma escola de técnicas verticais em Florianópolis.",
          "full": "Projeto de um site institucional para uma escola de técnicas verticais em Florianópolis. Reúne os cursos oferecidos bem como apresentação da equipe e dos apoiadores."
        },
        "atmos_finance": {
          "title": "Atmos — Gestão Financeira",
          "short": "Site de apresentação do Atmos, uma ferramenta para organizar as finanças pessoais.",
          "full": "Site para gestão financeira pessoal, com módulos de 'amigos' para divisão de conta e módulo de investimento, com atualização automática. Foi um projeto para uso pessoal."
        },
        "solo_arena": {
          "title": "SOLO Arena de Padel & Areia",
          "short": "Landing page para uma arena esportiva com quadras de padel e esportes de areia.",
          "full": "Projeto conceitual de landing page para uma arena esportiva fictícia, com quadras de padel e esportes de areia. Traz horário de funcionamento, botão de reserva e localização."
        },
        "acoustic_analysis_gui": {
          "title": "Interface de Análise Sonora",
          "short": "Interface open-source em Python para análise de áudio no tempo, frequência e métricas psicoacústicas.",
          "full": "Uma interface gráfica open-source desenvolvida em Python em conjunto com Henrique Alende e Ricardo Brum para análises de qualidade sonora. Nela, é possível importar, editar e analisar áudios no domínio do tempo, da frequência e por meio de métricas psicoacústicas calculadas com o framework MosQIto, da Eomys Engineering. O projeto está em constante evolução, e quem tiver interesse em contribuir será muito bem-vindo."
        },
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
        "full": "Primeiro sistema de gestão financeira projetado por mim para acompanhar transações bancárias e carteiras de investimento em um só lugar. \n\nAs principais funcionalidades incluem processamento automatizado de notas de corretagem via Pandas e um dashboard responsivo."
      },
        "personal_trainer_vini": {
        "title": "Vinicius Anselmo Personal Trainer",
        "short": "Landing page premium com foco em serviços fitness, conversão e impacto visual.",
        "full": "Site institucional para apresentar os serviços de personal trainer e consultoria online do Vinicius Anselmo. Traz seções de serviços, processo de trabalho, FAQ e canais de contato, com design responsivo e animações."
      },
      },

      "contact": {
        "eyebrow": "Contato",
        "title": "Vamos conversar?",
        "subtitle": "Estou aberto a novas oportunidades.",
        "description": "Fique à vontade para entrar em contato — posso falar sobre uma vaga, um projeto ou só trocar uma ideia.",
        "send_button": "Enviar mensagem",
        "whatsapp_button": "Chamar no WhatsApp"
      },


     
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
