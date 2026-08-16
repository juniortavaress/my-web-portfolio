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
      "nav_services": "How I help",
      "nav_projects": "Projects",
      "nav_contact": "Let's talk",

      "hero_wave": "👋 Hi, I'm Junior",
      "hero_title_pre": "I turn your ideas into",
      "hero_title_highlight": "systems and websites",
      "hero_title_post": "that actually work.",
      "hero_desc": "I have a degree in Engineering and build custom digital solutions — from simple websites to full systems — for people and small businesses that need something functional, beautiful, and made with care.",
      "hero_cta_primary": "Request a quote",
      "hero_cta_ghost": "See my work",
      "hero_badge": "Available for new projects",
      "hero_trust_value": "5+",
      "hero_trust_label": "years coding",

      "about_eyebrow": "About me",
      "about_photo_placeholder": "Your photo or illustration here",
      "about_title": "From engineering to technology, always solving problems",
      "about_p1": "I hold a degree in <strong>Mechanical Engineering</strong>, and throughout college I discovered in code an even more direct way to solve real problems — for people and for businesses.",
      "about_p2": "Today I focus on building <strong>custom websites, systems, and applications</strong>, always with the same mindset I brought from engineering: understanding the problem deeply before proposing a solution, and delivering something that truly works in your day-to-day.",
      "about_p3": "If you have an idea, a manual process that wastes your time, or need a website to showcase your work — I can help you bring it to life.",
      "about_stack_label": "I mainly work with",
      "about_web": "Web Development",
      "about_desktop": "Software Development ",
      "about_eng": "Engenharia & Data",

      "services_eyebrow": "How I can help",
      "services_title": "Custom solutions for your problem",
      "services_desc": "I don't just deliver code — I deliver a solution built for what you actually need.",
      "services_list": {
        "web": {
          "title": "Websites & web systems",
          "desc": "From an institutional website to a full system with login, database, and control panel — so you can manage your business without relying on loose spreadsheets."
        },
        "automation": {
          "title": "Task automation",
          "desc": "That repetitive process eating up your day? I automate it with scripts that do the work for you, with far less room for error."
        },
        "apps": {
          "title": "Custom applications",
          "desc": "Software built for your business's specific needs — inventory control, customer records, reports, and much more."
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
          "full": "Website for a vertical techniques school in Florianópolis, offering mountain rescue courses, first-aid training (APH), and canine rescue training."
        },
        "atmos_finance": {
          "title": "Atmos — Finance Manager",
          "short": "Presentation site for Atmos, a tool to organize and track personal finances.",
          "full": "Presentation website for Atmos, a tool designed to organize and track personal finances in a simple, visual way."
        },
        "solo_arena": {
          "title": "SOLO Padel & Sand Arena",
          "short": "Landing page for a sports arena with padel courts and sand sports.",
          "full": "Landing page for a sports arena featuring padel courts and sand sports, presenting the venue's structure and making it easy to get in touch for bookings."
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
          "full": "A modern institutional website built for Vinicius Anselmo to present personal trainer and online coaching services. The project combines responsive design, animations, and a conversion-oriented structure with sections for services, workflow, FAQ, and contact channels."
      },
      },
      
      "contact": {
        "eyebrow": "Let's talk",
        "title": "Have an idea or a problem to solve?",
        "subtitle": "Let's work together!",
        "description": "Tell me what you need — no strings attached. I reply quickly and will tell you exactly how I can help.",
        "send_button": "Send a message",
        "whatsapp_button": "Chat on WhatsApp"
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
      "nav_services": "Como ajudo",
      "nav_projects": "Projetos",
      "nav_contact": "Vamos conversar",

      "hero_wave": "👋 Olá, eu sou o Junior",
      "hero_title_pre": "Transformo suas ideias em",
      "hero_title_highlight": "sistemas e sites",
      "hero_title_post": "que funcionam de verdade.",
      "hero_desc": "Desenvolvo soluções digitais sob medida, de sites simples a sistemas completos, para pessoas e negócios que precisam de algo funcional, bonito e feito com cuidado.",
      "hero_cta_primary": "Solicitar orçamento",
      "hero_cta_ghost": "Ver meu trabalho",
      "hero_badge": "Disponível para novos projetos",
      "hero_trust_value": "5+",
      "hero_trust_label": "anos programando",

      "about_eyebrow": "Sobre mim",
      "about_photo_placeholder": "Foto ou ilustração sua aqui",
      "about_title": "Da engenharia para a tecnologia, sempre resolvendo problemas",
      "about_p1": "Sou <strong>estudante de Engenharia Mecânica</strong> e, ao longo da faculdade, descobri no código uma forma ainda mais direta de resolver problemas reais — de pessoas e de negócios.",
      "about_p2": "Hoje me dedico a usar a programação para resolver problemas reais seja por meio de <strong>sites, sistemas, aplicativos sob medida ou automatizações</strong>, sempre com a mesma mentalidade que trouxe da engenharia: entender o problema a fundo antes de propor a solução, e entregar algo que realmente funcione no seu dia a dia.",
      "about_p3": "Se você tem uma ideia, um processo manual que consome tempo, ou precisa de um site para mostrar seu trabalho — eu posso te ajudar a tirar isso do papel.",
      "about_stack_label": "",
      "about_web": "Desenvolvimento Web",
      "about_desktop": "Desenvolvimento de Software",
      "about_eng": "Engenharia & Dados",

      "services_eyebrow": "Como posso ajudar",
      "services_title": "Soluções sob medida para o seu problema",
      "services_desc": "Não entrego só código — entrego uma solução pensada para o que você realmente precisa.",
      "services_list": {
        "web": {
          "title": "Sites e sistemas web",
          "desc": "Do site institucional ao sistema completo com login, banco de dados e painel de controle, para você gerenciar seu negócio sem depender de planilhas soltas."
        },
        "automation": {
          "title": "Automação de tarefas",
          "desc": "Aquele processo repetitivo que toma horas do seu dia? Eu automatizo com scripts que fazem o trabalho por você, com muito menos chance de erro."
        },
        "apps": {
          "title": "Aplicativos sob medida",
          "desc": "Programas de computador feitos para a necessidade específica do seu negócio, controle de estoque, cadastro de clientes, relatórios e muito mais."
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
          "full": "Site para uma escola de técnicas verticais em Florianópolis, com cursos de resgate em montanha, APH e treinamento com cães."
        },
        "atmos_finance": {
          "title": "Atmos — Gestão Financeira",
          "short": "Site de apresentação do Atmos, uma ferramenta para organizar as finanças pessoais.",
          "full": "Site de apresentação do Atmos, uma ferramenta para organizar e acompanhar as finanças pessoais de forma simples e visual."
        },
        "solo_arena": {
          "title": "SOLO Arena de Padel & Areia",
          "short": "Landing page para uma arena esportiva com quadras de padel e esportes de areia.",
          "full": "Landing page para uma arena esportiva com quadras de padel e esportes de areia, apresentando a estrutura do local e facilitando o contato para reservas."
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
        "full": "Um sistema robusto de gestão financeira projetado para acompanhar transações bancárias e carteiras de investimento em um só lugar. \n\nAs principais funcionalidades incluem processamento automatizado de notas de corretagem via Pandas e um dashboard responsivo. O projeto demonstra habilidades em CRUD, integração de bancos de dados relacionais e manipulação de dados financeiros complexos para gerar insights de rentabilidade."
      },
        "personal_trainer_vini": {
        "title": "Vinicius Anselmo Personal Trainer",
        "short": "Landing page premium com foco em serviços fitness, conversão e impacto visual.",
        "full": "Site institucional moderno criado para apresentar os serviços de personal trainer e consultoria online do Vinicius Anselmo. O projeto combina design responsivo, animações e uma estrutura orientada à conversão com seções de serviços, processo de trabalho, FAQ e canais de contato."
      },
      },

      "contact": {
        "eyebrow": "Vamos conversar",
        "title": "Tem uma ideia ou um problema para resolver?",
        "subtitle": "Vamos trabalhar juntos!",
        "description": "Me conta o que você precisa — sem compromisso. Eu respondo e te digo exatamente como posso ajudar.",
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
