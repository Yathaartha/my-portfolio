export type ProjectCategory = "featured" | "webDev" | "machineLearning" | "archives";

export type ProjectRarity = 3 | 4 | 5;

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  rarity: ProjectRarity;
  icon: string;
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
    id: "portfolio",
    name: "Portfolio Website",
    description:
      "A Genshin Impact-inspired personal portfolio built with React, TypeScript, styled-components, and Vite. Features an interactive constellation skill tree, animated resume modal, project showcase with rarity system, and an immersive UI inspired by the Paimon menu.",
    category: "featured",
    rarity: 5,
    icon: "🌐",
    techStack: ["React", "TypeScript", "Styled Components", "Vite", "Framer Motion"],
    url: "https://github.com/Yathaartha",
  },
  {
    id: "parkit-app",
    name: "ParkIT App",
    description:
      "A full-stack parking management application that helps users find and reserve parking spots. Features real-time availability tracking, reservation management, and an intuitive user interface for seamless parking experiences.",
    category: "featured",
    rarity: 5,
    icon: "🅿️",
    techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
    url: "https://github.com/Yathaartha/ParkIT-app",
  },
  {
    id: "parkit-api",
    name: "ParkIT API",
    description:
      "RESTful backend API powering the ParkIT parking management system. Handles user authentication, parking spot management, reservations, and real-time availability updates with Express and MongoDB.",
    category: "featured",
    rarity: 4,
    icon: "⚙️",
    techStack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    url: "https://github.com/Yathaartha/ParkIT-api",
  },
  {
    id: "bellacucina",
    name: "BellaCucina Website",
    description:
      "A responsive website built for Bella Cucina restaurant in Agawam. Features menu display, location information, and an elegant design that captures the restaurant's Italian dining atmosphere.",
    category: "webDev",
    rarity: 4,
    icon: "🍝",
    techStack: ["JavaScript", "HTML", "CSS", "React"],
    url: "https://github.com/Yathaartha/BellaCucina-website",
  },
  {
    id: "ebn-app",
    name: "EBN App",
    description:
      "A modern web application with a clean, polished interface built using contemporary CSS techniques and responsive design principles for an optimal user experience across devices.",
    category: "webDev",
    rarity: 4,
    icon: "📱",
    techStack: ["CSS", "JavaScript", "React"],
    url: "https://github.com/Yathaartha/EBN-app",
  },
  {
    id: "sasto-twitch",
    name: "Sasto Twitch",
    description:
      "A Twitch-inspired streaming platform clone built with JavaScript. Implements core streaming platform features including channel browsing, live stream viewing, and user interaction capabilities.",
    category: "webDev",
    rarity: 4,
    icon: "📺",
    techStack: ["JavaScript", "React", "Node.js"],
    url: "https://github.com/Yathaartha/sasto-twitch",
  },
  {
    id: "ml-pipeline",
    name: "ML Data Pipeline",
    description:
      "Machine learning pipeline developed during academic research at Clark University. Handles data preprocessing, feature engineering, model training, and visualization of results using industry-standard Python libraries.",
    category: "machineLearning",
    rarity: 4,
    icon: "🧠",
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    url: "#",
  },
  {
    id: "signal-processing",
    name: "Signal Processing",
    description:
      "Numerical methods and signal processing projects from academic coursework at Leeds Beckett University. MATLAB-based implementations covering Fourier transforms, filtering, and digital signal analysis.",
    category: "machineLearning",
    rarity: 3,
    icon: "📈",
    techStack: ["MATLAB", "Python"],
    url: "#",
  },
  {
    id: "snake-game",
    name: "Snake Game",
    description:
      "A classic Snake game implementation built with vanilla JavaScript. Features smooth gameplay mechanics, score tracking, and responsive controls for an engaging retro gaming experience.",
    category: "archives",
    rarity: 3,
    icon: "🐍",
    techStack: ["JavaScript", "HTML", "CSS"],
    url: "https://github.com/Yathaartha/Snake-game",
  },
];
