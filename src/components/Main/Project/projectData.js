import mockupFineInvest from '../../../assets/mockup_fineinvest.png';
import mockupFineInvestExp from '../../../assets/mockup_fineinvest_exp.png';
import mockupMecsolSoftware from '../../../assets/mockup_mecsol.png';
import mockupMecsolSoftwareExp from '../../../assets/mockup_mecsol_exp.png';
import mockupViniTrainer from '../../../assets/mockup_vini_trainer.png';
import mockupViniTrainerExp from '../../../assets/mockup_vini_trainer_exp.png';
import mockupMarketAnalysis from '../../../assets/mockup_market_analysis.png';
import mockupMarketAnalysisExp from '../../../assets/mockup_market_analysis_exp.png';
import mockupPsycobox from '../../../assets/mockup_psycobox.png';
import mockupPsycoboxExp from '../../../assets/mockup_psycobox_exp.png';
import mockupMMCA from '../../../assets/mockup_mmca.png';
import mockupMMCAExp from '../../../assets/mockup_mmca_exp.png';

export const projects = [
  {
    id: 9,
    category: 'web',
    key: 'vertical_life',
    tools: ['React', 'JavaScript'],
    color: '#2d6a4f',
    liveUrl: 'https://site-vertical-life-8.vercel.app/',
    github: 'https://site-vertical-life-8.vercel.app/',
  },
  {
    id: 8,
    category: 'web',
    key: 'atmos_finance',
    tools: ['React', 'JavaScript'],
    color: '#1F6F5C',
    liveUrl: 'https://atmos-finance-manager.vercel.app/',
    github: 'https://atmos-finance-manager.vercel.app/',
  },
  {
    id: 7,
    category: 'web',
    key: 'solo_arena',
    tools: ['React', 'JavaScript'],
    color: '#E3A857',
    liveUrl: 'https://landing-page-sport-club.vercel.app/',
    github: 'https://landing-page-sport-club.vercel.app/',
  },
  {
    id: 6,
    category: 'web',
    key: 'personal_trainer_vini',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18next'],
    color: '#f1b34b',
    image: mockupViniTrainer,
    expandedImage: mockupViniTrainerExp,
    liveUrl: 'https://personal-trainer-vinicius-anselmo.vercel.app/',
    github: 'https://personal-trainer-vinicius-anselmo.vercel.app/',
  },
  {
    id: 5,
    category: 'web', 
    key: 'finance_manager',
    tools: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    color: '#22c55e',
    image: mockupFineInvest,
    expandedImage: mockupFineInvestExp,
    github: 'https://github.com/juniortavaress/finance-manager-flask-project',
  },
  {
    id: 4,
    category: 'software',
    key: 'calibration', 
    tools: ['Python', 'Abaqus API', 'Supabase', 'PSO Algorithm', 'Distributed Computing'],
    color: '#ff4444',
    image: mockupMMCA,
    expandedImage: mockupMMCAExp,
    github: 'https://github.com/juniortavaress/material-model-calibration',
  },
  {
    id: 3,
    category: 'software',
    key: 'acoustic_analysis_gui',
    tools: ['Python', 'MosQIto', 'Audio Analysis', 'Psychoacoustics'],
    color: '#3b82f6',
    image: mockupPsycobox,
    expandedImage: mockupPsycoboxExp, 
    github: 'https://github.com/henriquealende/PsychoBox',
  },
  {
    id: 2,
    category: 'software',
    key: 'market',
    tools: ['Python', 'Selenium', 'Pandas', 'Web Scraping'],
    color: '#00ff88',
    image: mockupMarketAnalysis,
    expandedImage: mockupMarketAnalysisExp,
    github: 'https://github.com/juniortavaress/market-analysis',
  },
  {
    id: 1,
    category: 'software',
    key: 'structural',
    tools: ['Python', 'PySide6', 'Matplotlib', 'NumPy'],
    color: '#8833ff',
    image: mockupMecsolSoftware,
    expandedImage: mockupMecsolSoftwareExp,
    github: 'https://github.com/juniortavaress/engineering-software-mecsol',
  },
];
