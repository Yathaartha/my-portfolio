import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  CONNECTIONS,
  CONSTELLATION_NAMES,
  SKILL_NODES,
  SOFT_SKILL_NODES,
  type SkillCategory,
  type SkillNode,
} from "./skillTreeData";
import {
  BackButton,
  ClosePanelButton,
  ConstellationSection,
  ConstellationTitle,
  ConnectionSvg,
  GlowLine,
  LinesClipWrapper,
  NodeLabel,
  NodeLabelGroup,
  NodeSubtitle,
  NodesContainer,
  NodeWrapper,
  PanelOverlay,
  ProjectDescription,
  ProjectItem,
  ProjectName,
  SidePanel,
  SidePanelLevel,
  SidePanelSection,
  SidePanelTitle,
  SkillTreeContainer,
  SkillTreeContent,
  SkillsColumn,
  StarNode,
} from "./SkillTree.css";

const CONSTELLATION_ORDER: SkillCategory[] = ["anemo", "geo", "electro", "soft"];

function SkillTree() {
  const navigate = useNavigate();
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(null);
  const [nodePositions, setNodePositions] = useState<Map<string, { x: number; y: number }>>(new Map());
  const nodeRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const skillsColumnRef = useRef<HTMLDivElement>(null);

  const updatePositions = useCallback(() => {
    requestAnimationFrame(() => {
      const positions = new Map<string, { x: number; y: number }>();
      nodeRefs.current.forEach((el, id) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          positions.set(id, {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          });
        }
      });
      setNodePositions(positions);
    });
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(updatePositions, 150);
    const timer2 = setTimeout(updatePositions, 1200);
    window.addEventListener("resize", updatePositions);
    const skillsEl = skillsColumnRef.current;
    if (skillsEl) {
      skillsEl.addEventListener("scroll", updatePositions);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", updatePositions);
      skillsEl?.removeEventListener("scroll", updatePositions);
    };
  }, [updatePositions, selectedNode]);

  const [viewport, setViewport] = useState({ w: 1920, h: 1080 });
  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getConnectedLines = () => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    const skillsEl = skillsColumnRef.current;
    const padding = 8;
    const inVisibleArea = (p: { x: number; y: number }) => {
      if (!skillsEl) return true;
      const rect = skillsEl.getBoundingClientRect();
      return (
        p.x >= rect.left - padding &&
        p.x <= rect.right + padding &&
        p.y >= rect.top - padding &&
        p.y <= rect.bottom + padding
      );
    };
    CONNECTIONS.forEach(({ from, to }) => {
      const p1 = nodePositions.get(from);
      const p2 = nodePositions.get(to);
      if (p1 && p2 && inVisibleArea(p1) && inVisibleArea(p2)) {
        lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
      }
    });
    return lines;
  };

  const allNodes = [...SKILL_NODES, ...SOFT_SKILL_NODES];
  const nodesByCategory = CONSTELLATION_ORDER.reduce(
    (acc, cat) => ({ ...acc, [cat]: allNodes.filter((n) => n.category === cat) }),
    {} as Record<SkillCategory, SkillNode[]>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  return (
    <SkillTreeContainer>
      {!selectedNode && (
        <BackButton type="button" onClick={() => navigate(-1)}>
          ← Back
        </BackButton>
      )}

      <SkillTreeContent>
        <LinesClipWrapper>
          <ConnectionSvg
            viewBox={`0 0 ${viewport.w} ${viewport.h}`}
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}>
            {getConnectedLines().map((line, i) => (
              <GlowLine key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
            ))}
          </ConnectionSvg>
        </LinesClipWrapper>
        <SkillsColumn ref={skillsColumnRef}>
          {CONSTELLATION_ORDER.map((category) => (
            <ConstellationSection key={category} $category={category}>
              <ConstellationTitle>{CONSTELLATION_NAMES[category]}</ConstellationTitle>
              <NodesContainer>
                {nodesByCategory[category].map((node, idx) => (
                  <motion.div
                    key={node.id}
                    custom={idx}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ position: "relative", zIndex: 1 }}>
                    <NodeWrapper>
                      <NodeLabelGroup>
                        <NodeLabel>{node.name}</NodeLabel>
                        <NodeSubtitle>Level {node.level}/{node.maxLevel}</NodeSubtitle>
                      </NodeLabelGroup>
                      <StarNode
                        ref={(el) => {
                          if (el) nodeRefs.current.set(node.id, el);
                          else nodeRefs.current.delete(node.id);
                        }}
                        type="button"
                        onClick={() => setSelectedNode(node)}>
                        {node.icon}
                      </StarNode>
                    </NodeWrapper>
                  </motion.div>
                ))}
              </NodesContainer>
            </ConstellationSection>
          ))}
        </SkillsColumn>
      </SkillTreeContent>

      {selectedNode && (
        <>
          <PanelOverlay
            onClick={() => setSelectedNode(null)}
            aria-hidden="true"
          />
          <SidePanel>
            <ClosePanelButton type="button" onClick={() => setSelectedNode(null)} aria-label="Close panel">
              ×
            </ClosePanelButton>
          <SidePanelTitle>{selectedNode.name}</SidePanelTitle>
          <SidePanelLevel>
            Level {selectedNode.level} / {selectedNode.maxLevel}
          </SidePanelLevel>
          <SidePanelSection>Projects</SidePanelSection>
          {selectedNode.projects.map((proj) => (
            <ProjectItem key={proj.name}>
              <ProjectName>{proj.name}</ProjectName>
              <ProjectDescription>{proj.description}</ProjectDescription>
            </ProjectItem>
          ))}
          </SidePanel>
        </>
      )}
    </SkillTreeContainer>
  );
}

export default SkillTree;
