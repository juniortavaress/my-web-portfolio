import fineInvestGraphImg from '../../../assets/fineinvest_graph_img.png';

export const projects = [
  {
    id: 4,
    category: 'web', 
    key: 'finance_manager',
    tools: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    color: '#22c55e',
    image: fineInvestGraphImg
  },
  {
    id: 3,
    category: 'software',
    key: 'calibration', // Chave para buscar no i18n
    tools: ['Python', 'Abaqus API', 'Supabase', 'PSO Algorithm', 'Distributed Computing'],
    color: '#ff4444'
  },
  {
    id: 2,
    category: 'software',
    key: 'market',
    tools: ['Python', 'Selenium', 'Pandas', 'Web Scraping'],
    color: '#00ff88'
  },
  {
    id: 1,
    category: 'software',
    key: 'structural',
    tools: ['Python', 'PySide6', 'Matplotlib', 'NumPy'],
    color: '#8833ff'
  },
];