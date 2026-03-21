import styled from "styled-components";

import cornerSparkleIcon from "../../assets/icons/corner-sparkle.svg?url";
import { DARK, FONT, GOLD, GRAY, NEUTRAL, RGBA } from "../../utils/constants";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 24px;
`;

export const ResumeModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${NEUTRAL.modalBg};
  border: 2px solid ${GRAY.medium};
  box-shadow:
    inset 0 0 0 1px ${NEUTRAL.modalBorder},
    0 8px 32px ${RGBA.black(0.3)};
  color: ${DARK.slate};
`;

export const Corner = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url("${cornerSparkleIcon}");
  background-size: contain;
  background-repeat: no-repeat;

  &.top-left {
    top: -5px;
    left: -5px;
    transform: rotate(180deg);
  }
  &.top-right {
    top: -5px;
    right: -5px;
    transform: rotate(-90deg);
  }
  &.bottom-left {
    bottom: -5px;
    left: -5px;
    transform: rotate(90deg);
  }
  &.bottom-right {
    bottom: -5px;
    right: -5px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  width: 32px;
  height: 32px;
  color: ${GRAY.medium};

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const ResumeName = styled.h1`
  margin: 32px 40px 4px;
  font-family: ${FONT.primary};
  font-size: 28px;
  font-weight: 700;
  color: ${DARK.slate};
  text-align: center;
`;

export const ResumeContact = styled.p`
  margin: 0 40px 16px;
  font-size: 12px;
  color: ${GRAY.medium};
  text-align: center;
  line-height: 1.5;

  a {
    color: ${GRAY.medium};
    text-decoration: none;
    border-bottom: 1px solid rgba(93, 102, 122, 0.5);

    &:hover {
      color: #2f343a;
      border-bottom-color: #c8a84b;
    }
  }
`;

export const TitleDivider = styled.div`
  width: calc(100% - 80px);
  height: 1px;
  margin: 0 auto 24px;
  background: linear-gradient(
    90deg,
    transparent,
    ${RGBA.gray(0.3)} 20%,
    ${RGBA.gray(0.3)} 80%,
    transparent
  );
`;

export const ResumeBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 40px 32px;
  font-family: ${FONT.primary};
  font-size: 13px;
  line-height: 1.5;

  p {
    margin: 0 0 8px;
    padding-left: 0;
  }

  ul {
    margin: 4px 0 16px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 4px;
  }

  em {
    font-size: 12px;
    color: ${GRAY.medium};
  }
`;

export const ResumeSection = styled.section`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  li {
    text-align: justify;
  }
`;

export const ResumeSectionTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${GOLD.muted};
  color: ${GOLD.muted};
  padding-bottom: 4px;
`;

export const ResumeSkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;

  span {
    padding: 4px 10px;
    background: ${RGBA.gold(0.2)};
    border: 1px solid ${RGBA.gold(0.5)};
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
`;

