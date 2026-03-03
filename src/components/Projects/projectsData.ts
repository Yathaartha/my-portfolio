export type ProjectCategory = "featured" | "webDev" | "machineLearning" | "archives";

export type ProjectRarity = 3 | 4 | 5;

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  rarity: ProjectRarity;
  icon: string;
  /** Optional high-res sprite/image URL. Falls back to icon emoji if not set. */
  spriteUrl?: string;
  techStack: string[];
  url?: string;
}

export const PROJECT_CATEGORIES: { key: ProjectCategory; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "webDev", label: "Web Dev" },
  { key: "machineLearning", label: "Machine Learning" },
  { key: "archives", label: "Archives" },
];

export const PROJECTS: Project[] = [
  {
    id: "life-graph",
    name: "Life Graph App",
    description:
      "An interactive data visualization application built with React and D3.js. Visualizes personal life events, milestones, and timelines in an engaging graph format. Features smooth animations, zoom/pan controls, and responsive design.",
    category: "featured",
    rarity: 5,
    icon: "📊",
    techStack: ["React", "D3.js", "TypeScript"],
    url: "#",
  },
  {
    id: "node-boilerplate",
    name: "Node.js Backend Boilerplate",
    description:
      "A production-ready Node.js and TypeScript backend starter template. Includes Express, authentication patterns, database setup, and CI/CD configuration. Designed for rapid API development.",
    category: "featured",
    rarity: 4,
    icon: "⚙",
    techStack: ["Node.js", "TypeScript", "Express"],
    url: "#",
  },
  {
    id: "portfolio",
    name: "Portfolio Website",
    description:
      "This very portfolio! A Genshin Impact-inspired personal website built with React, styled-components, and Vite. Features a skill tree, resume modal, and immersive UI.",
    category: "webDev",
    rarity: 4,
    icon: "🌐",
    techStack: ["React", "TypeScript", "Styled Components", "Vite"],
    url: "#",
  },
  {
    id: "crm-app",
    name: "CRM Application",
    description:
      "Production CRM built from scratch with React and Redux. Supports client and project management workflows for regulated digital marketing environments.",
    category: "webDev",
    rarity: 4,
    icon: "📋",
    techStack: ["React", "Redux", "TypeScript"],
    url: "#",
  },
  {
    id: "ml-pipeline",
    name: "ML Data Pipeline",
    description:
      "Machine learning pipeline for academic research. Handles data preprocessing, model training, and visualization of results.",
    category: "machineLearning",
    rarity: 3,
    icon: "🧠",
    techStack: ["Python", "scikit-learn", "Pandas"],
    url: "#",
  },
  {
    id: "signal-processing",
    name: "Signal Processing",
    description:
      "Numerical methods and signal processing projects from academic coursework. MATLAB-based implementations.",
    category: "machineLearning",
    rarity: 3,
    icon: "📈",
    techStack: ["MATLAB", "Python"],
    url: "#",
  },
  {
    id: "hospitality-site",
    name: "Hospitality Website",
    description:
      "Responsive web interface for a hospitality client. Built with React, HTML, and SASS.",
    category: "archives",
    rarity: 3,
    icon: "🏨",
    techStack: ["React", "HTML", "SASS"],
    url: "#",
  },
];
