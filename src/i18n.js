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
      "nav_services": "My Journey",
      "nav_projects": "Projects",
      "nav_contact": "Contact",

      "hero_wave": "👋 Hi, I'm Junior",
      "hero_title_pre": "Mechanical Engineering",
      "hero_title_highlight": "student",
      "hero_title_post": "at UFSC",
      "hero_desc": "In my final year, with experience in automation, data analysis, and systems development. I use programming as a tool to solve problems and optimize processes, both in my personal and professional life.",
      "hero_cta_primary": "My journey",
      "hero_cta_ghost": "See my work",
      "hero_badge": "Open to new opportunities",
      "hero_trust_value": "5+",
      "hero_trust_label": "years coding",

      "about_eyebrow": "About me",
      "about_photo_placeholder": "Your photo or illustration here",
      "about_title": "Jucélio Tavares Junior",
      "about_p1": "I think engineering just confirmed something I already was before it. Since I was 18, I've been investing and tracking my own numbers every month — I've always liked that logic of looking at a piece of data, understanding what it's telling you, and making a decision based on it.",
      "about_p2": "When I started <strong>Mechanical Engineering</strong>, that way of thinking just gained more structure. I learned to break a big problem into smaller parts, test hypotheses, understand before acting. That also became a daily habit — whenever I see a repetitive task, I'm already thinking about how to automate it. That's what happened with a calibration process I automated during an exchange program in Germany, which used to take months and started taking 12 days after that.",
      "about_p4": "Besides that, I'm a pretty adventurous person. I like jumping into new challenges, learning things I don't know how to do yet — I'm always looking to pick up something new, whether it's an instrument, a language, or even a sport.",
      "about_p3": "In the end, I'm someone who's always looking for a challenge, whether in my personal or professional life.",
      "about_stack_label": "I mainly work with",
      "about_web": "Web Development",
      "about_desktop": "Software Development ",
      "about_eng": "Engenharia & Data",

      "trajectory_eyebrow": "My Journey",
      "trajectory_title": "Where I've worked and what I've built",
      "trajectory_desc": "A timeline of experiences that shaped how I approach problems — from student teams to research labs and companies.",
      "trajectory_list": {
        "hollox": {
          "period": "Feb 2026 – Present",
          "role": "Web Developer",
          "org": "Hollox",
          "location": "Remote",
          "summary": "Gather requirements with clients and manage the product backlog. Built the virtual tour and interactive floor plan, now the platform's main acquisition channel."
        },
        "mti": {
          "period": "Jul 2024 – Feb 2026",
          "role": "Intern",
          "org": "Manufacturing Technology Institute (MTI)",
          "location": "Germany",
          "summary": "Cut a calibration process from months to 12 days by automating a simulation workflow with Python and a custom PSO optimization algorithm."
        },
        "lva": {
          "period": "Sep 2022 – Jul 2024",
          "role": "Undergraduate Research",
          "org": "LVA / Nidec — UFSC",
          "location": "Florianópolis, Brazil",
          "summary": "Processed and analyzed acoustic measurement data, and built Python (PySide6) GUIs for the lab's analysis software."
        },
        "ampera": {
          "period": "Jul 2021 – Aug 2022",
          "role": "Aerodynamics Lead",
          "org": "Ampera Racing",
          "location": "Florianópolis, Brazil",
          "summary": "Led a 10-person aerodynamics team using Scrum, and negotiated a sponsorship partnership with stakeholders that funded the project."
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
      "nav_services": "Minha Trajetória",
      "nav_projects": "Projetos",
      "nav_contact": "Contato",

      "hero_wave": "👋 Olá, eu sou o Junior",
      "hero_title_pre": "Estudante de",
      "hero_title_highlight": "Engenharia Mecânica",
      "hero_title_post": "pela UFSC",
      "hero_desc": "Estou no último ano do curso, e possuo experiência em automação, análise de dados e desenvolvimento de sistemas. Uso programação como ferramenta para resolver problemas e otimizar processos, seja na vida pessoal ou profissional.",
      "hero_cta_primary": "Minha trajetória",
      "hero_cta_ghost": "Ver meu trabalho",
      "hero_badge": "Aberto a novas oportunidades",
      "hero_trust_value": "5+",
      "hero_trust_label": "anos programando",

      "about_eyebrow": "Sobre mim ",
      "about_photo_placeholder": "Foto ou ilustração sua aqui",
      "about_title": "Jucélio Tavares Junior",
      "about_p1": "Acho que a engenharia só confirmou uma coisa que eu já era antes dela. Desde os 18 anos invisto e acompanho meus próprios números todo mês, sempre gostei dessa lógica de olhar para um dado, entender o que ele está dizendo e tomar uma decisão em cima disso.",
      "about_p2": "Quando entrei na Engenharia Mecânica, esse jeito de pensar só ganhou mais estrutura. Aprendi a quebrar um problema grande em partes menores, testar hipóteses, entender antes de agir. Isso também virou um hábito no dia a dia, sempre que vejo uma tarefa repetitiva, já penso em como automatizá-la. Foi assim com um processo de calibração que automatizei durante um intercâmbio na Alemanha, que levava meses e passou a levar 12 dias depois disso.",
      "about_p4": "Fora isso, sou uma pessoa bem aventureira. Gosto de me jogar em desafios novos, de aprender coisas que ainda não sei fazer. Sempre procuro aprender algo novo, seja um instrumento, um idioma ou até mesmo um esporte.",
      "about_p3": "No fim, sou uma pessoa que está sempre à procura de um desafio, seja na vida pessoal ou profissional.",
      "about_stack_label": "",
      "about_web": "Desenvolvimento Web",
      "about_desktop": "Desenvolvimento de Software",
      "about_eng": "Engenharia & Dados",

      "trajectory_eyebrow": "Minha Trajetória",
      "trajectory_title": "Onde já trabalhei e o que já construí",
      "trajectory_desc": "Uma linha do tempo com as experiências que moldaram meu jeito de encarar problemas — de equipes de competição a laboratórios de pesquisa e empresas.",
      "trajectory_list": {
        "hollox": {
          "period": "Fev 2026 – Atualmente",
          "role": "Desenvolvedor Web",
          "org": "Hollox",
          "location": "Remoto",
          "summary": "Levanto requisitos com clientes e gerencio o backlog de produto. Desenvolvi o tour virtual e a maquete interativa, hoje o principal canal de captação da plataforma."
        },
        "mti": {
          "period": "Jul 2024 – Fev 2026",
          "role": "Internship",
          "org": "Manufacturing Technology Institute (MTI)",
          "location": "Alemanha",
          "summary": "Reduzi um processo de calibração de meses para 12 dias, automatizando um workflow de simulação com Python e um algoritmo de otimização PSO customizado."
        },
        "lva": {
          "period": "Set 2022 – Jul 2024",
          "role": "Iniciação Científica",
          "org": "LVA / Nidec — UFSC",
          "location": "Florianópolis, Brasil",
          "summary": "Tratei e analisei dados de medição acústica, e desenvolvi interfaces em Python (PySide6) para o software de análise do laboratório."
        },
        "ampera": {
          "period": "Jul 2021 – Ago 2022",
          "role": "Head de Aerodinâmica",
          "org": "Ampera Racing",
          "location": "Florianópolis, Brasil",
          "summary": "Liderei a área de aerodinâmica com uso da metodologia Scrum, e negociei patrocínio com stakeholders para viabilizar o projeto."
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
        "description": "Fique à vontade para entrar em contato, posso falar sobre uma vaga, um projeto ou só trocar uma ideia.",
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
