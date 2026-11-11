import styled, { keyframes } from "styled-components";

import cornerSparkleIcon from "../../assets/icons/corner-sparkle.svg?url";
import { DARK, FONT, GOLD, GRAY, MEDIA, RGBA } from "../../utils/constants";

const rotatePhone = keyframes`
  0%, 15% { transform: rotate(0deg); }
  45%, 70% { transform: rotate(-90deg); }
  100% { transform: rotate(0deg); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
`;

export const Overlay = styled.div`
  display: none;

  ${MEDIA.mobilePortrait} {
    position: fixed;
    inset: 0;
    z-index: 100000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background:
      radial-gradient(ellipse at center, ${RGBA.slateBlue(0.55)} 0%, transparent 70%),
      ${DARK.navy};
    font-family: ${FONT.primary};
    touch-action: none;
  }
`;

export const Panel = styled.div`
  position: relative;
  width: 100%;
  max-width: 340px;
  padding: 36px 24px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  background-color: ${DARK.slateBlue};
  border: 2px solid ${GRAY.medium};
  box-shadow:
    inset 0 0 0 1px ${GRAY.light},
    0 8px 32px ${RGBA.black(0.5)};

  &::before {
    content: "";
    position: absolute;
    inset: 2px;
    border: 1px solid ${GRAY.input};
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const Corner = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url("${cornerSparkleIcon}");
  background-size: contain;
  background-repeat: no-repeat;

  &.top-left {
    top: -10px;
    left: -10px;
    transform: rotate(180deg);
  }
  &.top-right {
    top: -10px;
    right: -10px;
    transform: rotate(-90deg);
  }
  &.bottom-left {
    bottom: -10px;
    left: -10px;
    transform: rotate(90deg);
  }
  &.bottom-right {
    bottom: -10px;
    right: -10px;
  }
`;

export const PhoneIcon = styled.svg`
  width: 84px;
  height: 84px;
  color: ${GOLD.cream};
  filter: drop-shadow(0 0 10px ${RGBA.goldPrimary(0.35)});
  animation: ${rotatePhone} 2.8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: rotate(-90deg);
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: ${GOLD.cream};
  font-family: ${FONT.primary};
  font-size: 18px;
  font-weight: 700;
`;

export const TitleDecoration = styled.span`
  font-size: 11px;
  opacity: 0.8;
  animation: ${glow} 2.8s ease-in-out infinite;
`;

export const Divider = styled.div`
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

export const Message = styled.p`
  margin: 0;
  color: ${RGBA.cream(0.85)};
  font-size: 14px;
  line-height: 1.6;
`;
