import styled from "styled-components";

import celestiaDark from "../../assets/images/celestia-dark.png?url";
import { DARK, FONT, GOLD, GRAY, PURPLE, RGBA } from "../../utils/constants";

const RARITY_GRADIENTS: Record<number, string> = {
  3: `linear-gradient(135deg, ${GRAY.medium} 0%, ${DARK.slateBlue} 50%, ${DARK.slate} 100%)`,
  4: `linear-gradient(135deg, ${PURPLE.light} 0%, ${PURPLE.dark} 50%, ${DARK.slateBlue} 100%)`,
  5: `linear-gradient(135deg, ${GOLD.primary} 0%, ${GOLD.muted} 30%, ${GOLD.brown} 70%, ${GOLD.darkBrown} 100%)`,
};

export const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: ${FONT.primary};

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    background: url(${celestiaDark}) no-repeat center center;
    background-size: cover;
    filter: blur(8px);
    z-index: -1;
  }
`;

export const TimerBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 24px;
  font-family: ${FONT.primary};
  background: ${RGBA.cream(0.9)};
  border-bottom: 1px solid ${RGBA.border(0.3)};
  color: ${RGBA.slateBlue(0.9)};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  z-index: 10;
`;

export const LeftSidebar = styled.aside`
  width: 200px;
  min-width: 200px;
  padding: 80px 0 24px;
  font-family: ${FONT.primary};
  background: linear-gradient(
    180deg,
    rgba(75, 84, 101, 0.95) 0%,
    rgba(47, 52, 58, 0.95) 100%
  );
  border-right: 2px solid #d3bc8e;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CategoryButton = styled.button<{ $active?: boolean }>`
  padding: 14px 20px;
  margin: 0 12px;
  background: ${(p) => (p.$active ? RGBA.border(0.3) : "transparent")};
  border: none;
  border-left: ${(p) =>
    p.$active ? `3px solid ${GOLD.primary}` : "3px solid transparent"};
  color: ${(p) => (p.$active ? GOLD.cream : RGBA.cream(0.7))};
  font-family: ${FONT.primary};
  font-size: 15px;
  font-weight: ${(p) => (p.$active ? "600" : "400")};
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${RGBA.border(0.2)};
    color: ${GOLD.cream};
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  min-width: 0;
  overflow: hidden;
  font-family: ${FONT.primary};
`;

export const GridArea = styled.main`
  flex: 1;
  padding: 80px 24px 24px;
  overflow-y: auto;
  min-width: 0;
  font-family: ${FONT.primary};
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectCard = styled.button<{ $rarity: number }>`
  font-family: ${FONT.primary};
  aspect-ratio: 1;
  border: 2px solid ${RGBA.border(0.4)};
  border-radius: 8px;
  background: ${(p) => RARITY_GRADIENTS[p.$rarity]};
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.25s ease;
  box-shadow: inset 0 0 0 1px ${RGBA.white(0.1)};

  &:hover {
    border-color: ${GOLD.primary};
    box-shadow:
      0 0 20px ${RGBA.goldPrimary(0.5)},
      inset 0 0 0 1px ${RGBA.goldPrimary(0.3)};
    transform: translateY(-2px);
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  font-size: 48px;
  opacity: 0.9;
`;

export const CardNameBar = styled.div`
  width: 100%;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: #fdf2c1;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

export const DetailPanel = styled.aside`
  font-family: ${FONT.primary};
  flex: 0 0 40%;
  min-width: 280px;
  max-width: 480px;
  height: 100vh;
  background: linear-gradient(
    180deg,
    ${RGBA.slate(0.98)} 0%,
    ${RGBA.dark(0.98)} 100%
  );
  backdrop-filter: blur(12px);
  border-left: 2px solid ${GOLD.border};
  padding: 56px 0 0;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px ${RGBA.black(0.4)};
`;

export const DetailCloseButton = styled.button`
  font-family: ${FONT.primary};
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: ${GOLD.cream};
  font-size: 24px;
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

export const DetailProjectIcon = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 90px;
  background: ${RGBA.gold(0.15)};
  border: 2px solid ${RGBA.gold(0.5)};
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const DetailTitle = styled.h2`
  font-family: ${FONT.primary};
  font-size: 22px;
  font-weight: 600;
  color: ${GOLD.cream};
  margin: 0 0 8px;
  padding-right: 36px;
  text-align: center;
`;

export const DetailRarity = styled.div`
  font-size: 12px;
  color: ${GOLD.muted};
  margin-bottom: 24px;
  text-align: center;
`;

export const LoreLabel = styled.h3`
  font-family: ${FONT.primary};
  font-size: 12px;
  font-weight: 600;
  color: ${GOLD.muted};
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const LoreText = styled.p`
  font-family: ${FONT.primary};
  font-size: 15px;
  line-height: 1.7;
  color: ${RGBA.cream(0.95)};
  margin: 0 0 24px;
`;

export const AttributesLabel = styled.h3`
  font-family: ${FONT.primary};
  font-size: 12px;
  font-weight: 600;
  color: ${GOLD.muted};
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const AttributeItem = styled.div`
  font-family: ${FONT.primary};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  margin-bottom: 8px;
  background: ${RGBA.white(0.05)};
  border-left: 3px solid ${GOLD.muted};
  border-radius: 4px;
  font-size: 14px;
  color: ${RGBA.cream(0.9)};
`;

export const AttributeName = styled.span`
  color: ${RGBA.cream(0.7)};
  min-width: 140px;
`;

export const AttributeValue = styled.span`
  font-weight: 500;
  color: ${GOLD.cream};
`;

export const ExchangeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  margin-top: auto;
  padding: 18px 24px;
  background: linear-gradient(
    180deg,
    ${GOLD.primary} 0%,
    ${GOLD.muted} 50%,
    ${GOLD.tan} 100%
  );
  border: 2px solid ${GOLD.cream};
  border-radius: 6px;
  color: ${DARK.slate};
  font-family: ${FONT.primary};
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow:
    0 4px 12px ${RGBA.black(0.3)},
    inset 0 1px 0 ${RGBA.white(0.3)};

  &:hover {
    background: linear-gradient(
      180deg,
      ${GOLD.bright} 0%,
      ${GOLD.primary} 50%,
      ${GOLD.muted} 100%
    );
    box-shadow:
      0 6px 20px ${RGBA.goldPrimary(0.4)},
      inset 0 1px 0 ${RGBA.white(0.4)};
    transform: translateY(-1px);
  }
`;

