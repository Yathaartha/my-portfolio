import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type Project,
  type ProjectCategory,
} from "./projectsData";
import {
  AttributeItem,
  AttributeName,
  AttributesLabel,
  AttributeValue,
  CardIcon,
  CardNameBar,
  CategoryButton,
  ContentWrapper,
  DetailCloseButton,
  DetailPanel,
  DetailProjectIcon,
  DetailRarity,
  DetailTitle,
  ExchangeButton,
  GridArea,
  LeftSidebar,
  LoreLabel,
  LoreText,
  ProjectCard,
  ProjectGrid,
  ProjectsContainer,
  TimerBar,
} from "./ProjectsPage.css";

const RARITY_STARS: Record<number, string> = {
  3: "★★★",
  4: "★★★★",
  5: "★★★★★",
};

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("featured");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "featured"
      ? PROJECTS.filter((p) => p.category === "featured")
      : activeCategory === "webDev"
        ? PROJECTS.filter((p) => p.category === "webDev")
        : activeCategory === "machineLearning"
          ? PROJECTS.filter((p) => p.category === "machineLearning")
          : PROJECTS.filter((p) => p.category === "archives");

  const getAttributeLabel = (index: number) => {
    if (index === 0) return "Primary Element";
    if (index === 1) return "Secondary";
    return `Talent ${index + 1}`;
  };

  return (
    <ProjectsContainer>
      <TimerBar>Next Update: May 2026</TimerBar>

      <LeftSidebar>
        {PROJECT_CATEGORIES.map(({ key, label }) => (
          <CategoryButton
            key={key}
            type="button"
            $active={activeCategory === key}
            onClick={() => setActiveCategory(key)}>
            {label}
          </CategoryButton>
        ))}
      </LeftSidebar>

      <ContentWrapper>
        <GridArea
          as={motion.main}
          initial={false}
          animate={{
            flex: selectedProject ? "0 0 60%" : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <ProjectGrid>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                type="button"
                $rarity={project.rarity}
                onClick={() => setSelectedProject(project)}>
                <CardIcon>{project.icon}</CardIcon>
                <CardNameBar>{project.name}</CardNameBar>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </GridArea>

        <AnimatePresence mode="wait">
          {selectedProject && (
            <DetailPanel
              as={motion.aside}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              <div style={{ position: "relative", padding: "24px", flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
                <DetailCloseButton
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close panel">
                  ×
                </DetailCloseButton>
                <DetailProjectIcon>
                  {selectedProject.spriteUrl ? (
                    <img src={selectedProject.spriteUrl} alt={selectedProject.name} />
                  ) : (
                    selectedProject.icon
                  )}
                </DetailProjectIcon>
                <DetailTitle>{selectedProject.name}</DetailTitle>
                <DetailRarity>{RARITY_STARS[selectedProject.rarity]} Rarity</DetailRarity>

                <LoreLabel>Lore</LoreLabel>
                <LoreText>{selectedProject.description}</LoreText>

                <AttributesLabel>Attributes</AttributesLabel>
                {selectedProject.techStack.map((tech, idx) => (
                  <AttributeItem key={tech}>
                    <AttributeName>{getAttributeLabel(idx)}:</AttributeName>
                    <AttributeValue>{tech}</AttributeValue>
                  </AttributeItem>
                ))}

                <ExchangeButton
                  href={selectedProject.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer">
                  View Project
                </ExchangeButton>
              </div>
            </DetailPanel>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </ProjectsContainer>
  );
}

export default ProjectsPage;
