import styled, { keyframes } from "styled-components";

import { DARK, GOLD, RGBA } from "../../utils/constants";

const linePulse = keyframes`
  0%, 100% { opacity: 0.5; stroke-opacity: 0.6; }
  50% { opacity: 1; stroke-opacity: 1; }
`;

export const SkillTreeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: url("/celestia-sky.png") no-repeat center center fixed;
  background-size: cover;
  background-color: ${DARK.navy};
  font-family: "Georgia", "Times New Roman", "HYWenHei-85W", serif;
  overflow: hidden;
`;

export const SkillTreeContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 60px 20px 24px;
`;

export const SkillsColumn = styled.div`
  position: fixed;
  top: 80px;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  padding: 20px;
  overflow-y: auto;
  z-index: 10;
`;

export const ConstellationSection = styled.section<{ $category: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 24px;
`;

export const ConstellationTitle = styled.h2`
  font-family: "Georgia", "Times New Roman", "HYWenHei-85W", serif;
  font-size: 18px;
  font-weight: 600;
  color: ${GOLD.cream};
  margin: 0 0 8px;
  text-align: right;
  text-shadow: 0 0 12px ${RGBA.gold(0.4)};
`;

export const NodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

export const LinesClipWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

export const ConnectionSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const GlowLine = styled.line`
  stroke: ${RGBA.gold(0.7)};
  stroke-width: 2;
  filter: drop-shadow(0 0 4px ${RGBA.gold(0.6)});
  animation: ${linePulse} 2s ease-in-out infinite;
`;

export const StarNode = styled.button`
  position: relative;
  z-index: 1;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid ${RGBA.gold(0.6)};
  background: ${RGBA.slate(0.5)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: ${GOLD.cream};
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 16px ${RGBA.gold(0.6)};
  }
`;

export const NodeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const NodeLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;

export const NodeLabel = styled.span`
  font-family: "Georgia", "Times New Roman", "HYWenHei-85W", serif;
  font-size: 15px;
  font-weight: 600;
  color: ${RGBA.cream(0.9)};
  white-space: nowrap;
`;

export const NodeSubtitle = styled.span`
  font-family: "Georgia", "Times New Roman", "HYWenHei-85W", serif;
  font-size: 12px;
  font-weight: 400;
  color: ${RGBA.cream(0.6)};
  white-space: nowrap;
`;

export const SidePanel = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 360px;
  max-width: 90vw;
  height: 100vh;
  background: ${RGBA.slate(0.2)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-right: 1px solid ${RGBA.white(0.1)};
  padding: 24px 48px 24px 24px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 4px 0 24px ${RGBA.black(0.3)};
`;

export const SidePanelTitle = styled.h3`
  font-family: "Georgia", "Times New Roman", "HYWenHei-85W", serif;
  font-size: 20px;
  font-weight: 600;
  color: ${GOLD.cream};
  margin: 0 0 8px;
`;

export const SidePanelLevel = styled.p`
  font-size: 14px;
  color: ${RGBA.cream(0.7)};
  margin: 0 0 20px;
`;

export const SidePanelSection = styled.h4`
  font-family: "Georgia", "Times New Roman", "HYWenHei-85W", serif;
  font-size: 16px;
  font-weight: 600;
  color: ${GOLD.muted};
  margin: 16px 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const ProjectItem = styled.div`
  margin-bottom: 12px;
  padding: 12px;
  background: ${RGBA.white(0.05)};
  border-radius: 6px;
  border-left: 3px solid ${GOLD.muted};
`;

export const ProjectName = styled.div`
  font-weight: 600;
  color: ${GOLD.cream};
  font-size: 15px;
  margin-bottom: 4px;
`;

export const ProjectDescription = styled.p`
  font-size: 12px;
  color: ${RGBA.cream(0.8)};
  margin: 0;
  line-height: 1.5;
`;

export const ClosePanelButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: ${GOLD.cream};
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: 24px;
  left: 24px;
  padding: 10px 20px;
  background: ${RGBA.slate(0.6)};
  backdrop-filter: blur(8px);
  border: 1px solid ${RGBA.gold(0.4)};
  border-radius: 6px;
  color: ${GOLD.cream};
  font-family: "Georgia", "Times New Roman", "HYWenHei-85W", serif;
  font-size: 16px;
  cursor: pointer;
  z-index: 101;

  &:hover {
    background: ${RGBA.slate(0.8)};
  }
`;

export const PanelOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  cursor: default;
`;

