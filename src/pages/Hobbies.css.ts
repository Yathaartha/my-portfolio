import styled, { keyframes } from "styled-components";
import { FONT, GOLD, GRAY, PURPLE, RGBA } from "../utils/constants";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const HobbiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 100px;
  min-height: 100%;
  font-family: ${FONT.primary};
`;

export const HobbiesPanel = styled.div`
  width: 100%;
  max-width: 860px;
  background: ${RGBA.slate(0.88)};
  backdrop-filter: blur(16px);
  border: 2px solid ${GRAY.medium};
  box-shadow:
    inset 0 0 0 1px ${RGBA.white(0.06)},
    0 8px 40px ${RGBA.black(0.5)};
  position: relative;
  animation: ${fadeUp} 0.6s ease both;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border: 1px solid ${RGBA.white(0.06)};
    pointer-events: none;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 24px 16px;
  color: ${GOLD.cream};
  font-size: 18px;
  font-weight: 700;
  font-family: ${FONT.primary};
`;

export const HeaderDiamond = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;

export const PanelDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${RGBA.goldTan(0.4)} 30%,
    ${RGBA.goldTan(0.4)} 70%,
    transparent
  );
`;

export const IntroText = styled.p`
  margin: 0;
  padding: 24px 40px;
  font-size: 15px;
  line-height: 1.7;
  color: ${RGBA.cream(0.85)};
  text-align: center;

  @media (max-width: 640px) {
    padding: 20px 20px;
  }
`;

export const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 40px 32px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0 20px 24px;
  }
`;

const RARITY_BORDER: Record<number, string> = {
  3: GRAY.light,
  4: PURPLE.light,
  5: GOLD.primary,
};

const RARITY_GLOW: Record<number, string> = {
  3: RGBA.white(0.05),
  4: `rgba(139, 126, 200, 0.12)`,
  5: RGBA.goldPrimary(0.15),
};

export const HobbyCard = styled.div<{ $rarity?: number }>`
  display: flex;
  gap: 16px;
  padding: 20px;
  background: ${RGBA.white(0.04)};
  border: 1px solid ${(p) => RARITY_BORDER[p.$rarity ?? 4] ?? RGBA.white(0.1)};
  border-radius: 8px;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(p) =>
      `radial-gradient(ellipse at top left, ${RARITY_GLOW[p.$rarity ?? 4]}, transparent 60%)`};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${RGBA.white(0.07)};
    box-shadow: 0 6px 20px ${RGBA.black(0.25)};
  }
`;

export const HobbyIconWrap = styled.div<{ $rarity?: number }>`
  width: 56px;
  height: 56px;
  min-width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: ${RGBA.white(0.06)};
  border: 2px solid ${(p) => RARITY_BORDER[p.$rarity ?? 4] ?? RGBA.gold(0.4)};
  border-radius: 10px;
  position: relative;
  z-index: 1;
`;

export const HobbyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  position: relative;
  z-index: 1;
`;

export const HobbyName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${GOLD.cream};
`;

export const HobbyLevel = styled.div<{ $rarity?: number }>`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(p) =>
    p.$rarity === 5
      ? GOLD.primary
      : p.$rarity === 4
        ? PURPLE.light
        : GRAY.light};
`;

export const HobbyDescription = styled.p`
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.55;
  color: ${RGBA.cream(0.7)};
`;

export const QuoteSection = styled.div`
  padding: 24px 40px 32px;

  @media (max-width: 640px) {
    padding: 20px 20px 24px;
  }
`;

export const QuoteBlock = styled.blockquote`
  margin: 0;
  padding: 20px 24px;
  background: linear-gradient(
    135deg,
    ${RGBA.gold(0.06)} 0%,
    ${RGBA.white(0.03)} 100%
  );
  border-left: 3px solid ${GOLD.muted};
  border-radius: 0 6px 6px 0;
  font-size: 14px;
  font-style: italic;
  line-height: 1.7;
  color: ${RGBA.cream(0.8)};

  background-image: linear-gradient(
    90deg,
    transparent 0%,
    ${RGBA.gold(0.04)} 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 6s ease-in-out infinite;
`;

export const QuoteAuthor = styled.span`
  display: block;
  margin-top: 10px;
  font-style: normal;
  font-size: 12px;
  font-weight: 600;
  color: ${GOLD.muted};
  text-align: right;
`;
