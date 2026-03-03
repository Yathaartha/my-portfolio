export type SkillCategory = "anemo" | "geo" | "electro" | "soft";

export interface SkillNode {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  category: SkillCategory;
  icon: string;
  projects: { name: string; description: string }[];
}

export interface Connection {
  from: string;
  to: string;
}

export const SKILL_NODES: SkillNode[] = [
  // Anemo — Frontend/Web
  {
    id: "react",
    name: "React",
    level: 4,
    maxLevel: 5,
    category: "anemo",
    icon: "⚛",
    projects: [
      { name: "Dzango Technologies", description: "Full-stack features, TypeScript/React frontend, IAM patterns" },
      { name: "Aakash Labs", description: "Production CRM from scratch with React & Redux, Figma-to-code" },
      { name: "Kaaikaas Technologies", description: "Responsive web interfaces with React for hospitality clients" },
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: 4,
    maxLevel: 5,
    category: "anemo",
    icon: "📘",
    projects: [
      { name: "Dzango Technologies", description: "Frontend performance, type-safe APIs, Agile sprints" },
      { name: "Aakash Labs", description: "TypeScript across CRM application modules" },
    ],
  },
  // Geo — Infrastructure/Backend
  {
    id: "nodejs",
    name: "Node.js",
    level: 4,
    maxLevel: 5,
    category: "geo",
    icon: "🟢",
    projects: [
      { name: "Dzango Technologies", description: "Backend services, GraphQL/REST APIs, containerization" },
      { name: "Kaaikaas Technologies", description: "Full-stack client projects" },
    ],
  },
  {
    id: "sequelize",
    name: "Sequelize",
    level: 3,
    maxLevel: 5,
    category: "geo",
    icon: "🗄",
    projects: [
      { name: "Dzango Technologies", description: "PostgreSQL ORM, database migrations, query optimization" },
    ],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    level: 4,
    maxLevel: 5,
    category: "geo",
    icon: "🐘",
    projects: [
      { name: "Dzango Technologies", description: "Business-critical reporting, ~30% faster reporting turnaround" },
    ],
  },
  {
    id: "docker",
    name: "Docker",
    level: 3,
    maxLevel: 5,
    category: "geo",
    icon: "🐳",
    projects: [
      { name: "Dzango Technologies", description: "Containerized backend services, CI/CD pipelines, deployment speed" },
    ],
  },
  {
    id: "zod",
    name: "Zod",
    level: 3,
    maxLevel: 5,
    category: "geo",
    icon: "✓",
    projects: [
      { name: "Dzango Technologies", description: "Schema validation, type-safe API contracts" },
    ],
  },
  // Electro — Data Science/AI
  {
    id: "python",
    name: "Python",
    level: 5,
    maxLevel: 5,
    category: "electro",
    icon: "🐍",
    projects: [
      { name: "Clark University", description: "Academic projects, scripting, automation" },
      { name: "Dzango Technologies", description: "Automation scripts, backend tooling" },
    ],
  },
  {
    id: "ml",
    name: "Machine Learning",
    level: 3,
    maxLevel: 5,
    category: "electro",
    icon: "🧠",
    projects: [
      { name: "Clark University", description: "MSCS coursework, ML models and data pipelines" },
    ],
  },
  {
    id: "matlab",
    name: "MATLAB",
    level: 5,
    maxLevel: 5,
    category: "electro",
    icon: "∫",
    projects: [
      { name: "Leeds Beckett University", description: "Numerical methods, signal processing, academic projects" },
    ],
  },
];

export const CONNECTIONS: Connection[] = [
  { from: "react", to: "typescript" },
  { from: "nodejs", to: "sequelize" },
  { from: "sequelize", to: "postgresql" },
  { from: "nodejs", to: "docker" },
  { from: "nodejs", to: "zod" },
  { from: "python", to: "ml" },
  { from: "python", to: "matlab" },
];

export const CONSTELLATION_NAMES: Record<SkillCategory, string> = {
  anemo: "Anemo — Frontend & Web",
  geo: "Geo — Infrastructure & Backend",
  electro: "Electro — Data Science & AI",
  soft: "Soft Skills",
};

export const SOFT_SKILL_NODES: SkillNode[] = [
  {
    id: "humanities",
    name: "Humanities Foundation",
    level: 4,
    maxLevel: 5,
    category: "soft",
    icon: "📚",
    projects: [
      {
        name: "Liberal Arts Education",
        description:
          "Cross-disciplinary background from Liberal Arts education. Strengthens communication, research synthesis, and user-centered design reasoning.",
      },
    ],
  },
  {
    id: "domestic-sphere",
    name: "Domestic Sphere",
    level: 4,
    maxLevel: 5,
    category: "soft",
    icon: "🏠",
    projects: [
      {
        name: "Household & Life",
        description:
          "Experience managing household systems, logistics, and collaborative decision-making. Buffs team coordination and project ownership.",
      },
    ],
  },
];
