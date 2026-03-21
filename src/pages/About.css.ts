import styled, { keyframes } from "styled-components";
import { DARK, FONT, GOLD, GRAY, RGBA } from "../utils/constants";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 100px;
  min-height: 100%;
  font-family: ${FONT.primary};
`;

export const ProfilePanel = styled.div`
  width: 100%;
  max-width: 820px;
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

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 32px 40px;

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
    padding: 24px 20px;
  }
`;

export const HeroAvatar = styled.div`
  width: 120px;
  height: 120px;
  min-width: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${RGBA.gold(0.6)};
  box-shadow: 0 0 24px ${RGBA.goldPrimary(0.25)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HeroName = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: ${GOLD.cream};
  font-family: ${FONT.primary};
  letter-spacing: 0.5px;
`;

export const HeroTitle = styled.div`
  font-size: 15px;
  color: ${GOLD.muted};
  font-weight: 500;
`;

export const HeroStars = styled.div`
  font-size: 18px;
  color: ${GOLD.primary};
  letter-spacing: 3px;
  margin-top: 2px;
`;

export const HeroTagline = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  color: ${RGBA.cream(0.8)};
  line-height: 1.6;
`;

export const SectionContainer = styled.div`
  padding: 24px 40px;

  @media (max-width: 640px) {
    padding: 20px 20px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${GOLD.muted};
  font-family: ${FONT.primary};
  border-bottom: 1px solid ${RGBA.goldTan(0.3)};
  padding-bottom: 6px;
`;

export const AttributeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const AttributeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${RGBA.white(0.04)};
  border-left: 3px solid ${GOLD.muted};
  border-radius: 4px;
`;

export const AttributeLabel = styled.span`
  font-size: 12px;
  color: ${RGBA.cream(0.6)};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 90px;
`;

export const AttributeValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${GOLD.cream};
`;

export const StoryText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.8;
  color: ${RGBA.cream(0.9)};
  text-align: justify;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${GOLD.primary},
      ${GOLD.muted},
      ${RGBA.goldTan(0.3)}
    );
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding: 16px 0 16px 20px;

  &::before {
    content: "";
    position: absolute;
    left: -18px;
    top: 22px;
    width: 10px;
    height: 10px;
    background: ${GOLD.primary};
    border: 2px solid ${DARK.slate};
    transform: rotate(45deg);
  }
`;

export const TimelineCompany = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${GOLD.cream};
`;

export const TimelineRole = styled.div`
  font-size: 14px;
  color: ${RGBA.cream(0.8)};
  margin-top: 2px;
`;

export const TimelinePeriod = styled.div`
  font-size: 12px;
  color: ${GOLD.muted};
  margin-top: 4px;
`;

export const TimelineDescription = styled.p`
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: ${RGBA.cream(0.7)};
`;

export const EducationGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EducationCard = styled.div`
  padding: 16px 20px;
  background: ${RGBA.white(0.04)};
  border: 1px solid ${RGBA.white(0.08)};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const EducationSchool = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${GOLD.cream};
`;

export const EducationDegree = styled.div`
  font-size: 14px;
  color: ${RGBA.cream(0.8)};
`;

export const EducationPeriod = styled.div`
  font-size: 12px;
  color: ${GOLD.muted};
  white-space: nowrap;
`;

export const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillChip = styled.span`
  padding: 6px 14px;
  background: ${RGBA.gold(0.15)};
  border: 1px solid ${RGBA.gold(0.35)};
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${GOLD.cream};
`;
