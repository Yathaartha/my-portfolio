import type { ReactNode } from "react";
import { createElement } from "react";

import achievementsIcon from "../../assets/icons/Icon_Achievements.webp";
import archivesIcon from "../../assets/icons/Icon_Archive.webp";
import skillTreeIcon from "../../assets/icons/Icon_Battle_Pass.webp";
import projectsIcon from "../../assets/icons/Icon_Events.webp";
import feedbackIcon from "../../assets/icons/Icon_Feedback.webp";
import inventoryIcon from "../../assets/icons/Icon_Inventory.webp";
import questsIcon from "../../assets/icons/Icon_Quests.webp";
import resumeIcon from "../../assets/icons/Icon_Version_Highlights.webp";
import hobbiesIcon from "../../assets/icons/Icon_Wish.webp";

const img = (props: { src: string; alt: string }) =>
  createElement("img", props);

export const sidebarCardIcons: Record<string, ReactNode> = {
  resume: img({ src: resumeIcon, alt: "resume" }),
  inventory: img({ src: inventoryIcon, alt: "inventory" }),
  projects: img({ src: projectsIcon, alt: "projects" }),
  skillTree: img({ src: skillTreeIcon, alt: "skill tree" }),
  achievements: img({ src: achievementsIcon, alt: "achievements" }),
  quests: img({ src: questsIcon, alt: "quests" }),
  archives: img({ src: archivesIcon, alt: "archives" }),
  hobbies: img({ src: hobbiesIcon, alt: "hobbies" }),
  feedback: img({ src: feedbackIcon, alt: "feedback" }),
};

export const SIDEBAR_CARDS = [
  { text: "Resume", iconKey: "resume" },
  { text: "Inventory", iconKey: "inventory" },
  { text: "Projects", iconKey: "projects" },
  { text: "Skill Tree", iconKey: "skillTree" },
  { text: "Achievements", iconKey: "achievements" },
  { text: "Quests", iconKey: "quests" },
  { text: "Archives", iconKey: "archives" },
  { text: "Hobbies", iconKey: "hobbies" },
  { text: "Feedback", iconKey: "feedback" },
] as const;

