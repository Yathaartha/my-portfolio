import styled from "styled-components";

import cornerSparkleIcon from "../assets/icons/corner-sparkle.png?url";

export const HomepageContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  /* transform: translate(-50%, -50%); */
  object-fit: cover;
  z-index: -1;
`;

export const PageButton = styled.button`
  position: absolute;
  bottom: 48px;
  left: 50%;
  min-width: 250px;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 32px;
  background: rgba(59, 65, 75, 0.78);
  border: none;
  border-top: 1px solid #2f343a;
  border-bottom: 1px solid #2f343a;
  border-radius: 2px;
  color: #e8e8e8;
  font-family: "HYWenHei-85W", Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  backdrop-filter: blur(2px);
  &:hover {
    background: rgba(59, 65, 75, 0.85);
    outline: none;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const DiamondIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #f0f0f0;
  transform: rotate(45deg);
  box-shadow: 0 0 0 1px rgba(47, 52, 58, 0.3);
  position: absolute;
  left: 20px;
`;

export const Checkmark = styled.svg`
  transform: rotate(-45deg);
  width: 20px;
  height: 20px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  /* background: rgba(44, 54, 71, 0.95); */
  /* border: 2px solid #d4af37; */
  /* border-radius: 8px; */
  /* padding: 24px; */
  min-width: 380px;
  /* box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5); */
  /* position: relative; */
  background-color: #3b4255; /* Dark blue background */
  border: 2px solid #5d667a; /* Outer subtle border */

  /* The "Carved" Highlight */
  /* This creates a 1px solid line inside the border */
  box-shadow: inset 0 0 0 1px #848e9c;

  /* Optional: Add a slight outer glow to make it pop */
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));

  position: relative;
  padding: 20px;
  &::before {
    content: "";
    position: absolute;
    /* Pull it in slightly from the edges */
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;

    /* The "Engraved" line */
    border: 1px solid #7a8494;
    pointer-events: none; /* Make sure it doesn't block clicks */
    opacity: 0.6;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  color: #fdf2c1;
  font-size: 18px;
  font-weight: 700;
  font-family: "HYWenHei-85W", Arial, Helvetica, sans-serif;
`;

export const TitleDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(180, 155, 100, 0.4) 30%,
    rgba(180, 155, 100, 0.4) 70%,
    transparent
  );
  margin-bottom: 24px;
  margin-top: -16px;
`;

export const TitleDecoration = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #fdf2c1;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  width: 32px;
  height: 32px;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.button<{ $selected?: boolean }>`
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 15px;
  /* margin-bottom: 8px; */
  margin: 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-right: none;
  border-left: none;

  transition: all 0.2s ease;
  font-family: "HYWenHei-85W", "Segoe UI", sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  }

  &.selected {
    background: rgba(255, 255, 255, 0.08);
    border: 2px solid #fdf2c1; /* The cream/gold color from the image */
    color: #ece5d8;
    /* Add a slight inner glow to the selected state */
    box-shadow: inset 0 0 10px rgba(236, 229, 216, 0.1);
  }
`;

export const DiamondOutline = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid #d4af37;
  transform: rotate(45deg);
  flex-shrink: 0;
`;

export const DiamondCheck = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: #f0f0f0;
  transform: rotate(45deg);
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.5);
`;

export const NavItemCheckmark = styled.svg`
  transform: rotate(-45deg);
  width: 10px;
  height: 10px;
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

export const HamburgerButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 5px; */
  background: transparent;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
  /* backdrop-filter: blur(4px); */

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    padding: 4px;
  }
`;

export const SidebarOverlay = styled.div<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 40%;
  /* background: rgba(0, 0, 0, 0.4); */
  z-index: 499;
  /* opacity: ${(p) => (p.$open ? 1 : 0)}; */
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: opacity 1s ease;
`;

export const MainContent = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 0;
`;

export const SocialIcons = styled.div`
  position: absolute;
  bottom: 48px;
  right: 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: #000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

