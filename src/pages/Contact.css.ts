import styled, { keyframes } from "styled-components";
import { DARK, FONT, GOLD, GRAY, RGBA } from "../utils/constants";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 100px;
  min-height: 100%;
  font-family: ${FONT.primary};
`;

export const ContactPanel = styled.div`
  width: 100%;
  max-width: 680px;
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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0 40px 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 0 20px 20px;
  }
`;

export const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: ${RGBA.white(0.04)};
  border: 1px solid ${RGBA.white(0.08)};
  border-radius: 6px;
  text-decoration: none;
  color: ${GOLD.cream};
  transition: all 0.2s ease;

  &:hover {
    background: ${RGBA.white(0.08)};
    border-color: ${RGBA.gold(0.4)};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${RGBA.black(0.2)};
  }

  svg {
    width: 22px;
    height: 22px;
    min-width: 22px;
    color: ${GOLD.muted};
    fill: currentColor;
  }
`;

export const ContactCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const ContactCardLabel = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${RGBA.cream(0.5)};
`;

export const ContactCardValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${GOLD.cream};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FormSection = styled.div`
  padding: 24px 40px 32px;

  @media (max-width: 640px) {
    padding: 20px 20px 24px;
  }
`;

export const FormTitle = styled.h3`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${GOLD.cream};
  font-family: ${FONT.primary};
`;

export const FormInput = styled.input`
  padding: 11px 14px;
  background: ${RGBA.white(0.08)};
  border: 1px solid ${RGBA.white(0.15)};
  border-radius: 4px;
  color: #e8e8e8;
  font-size: 14px;
  font-family: ${FONT.primary};
  transition: border-color 0.2s;

  &::placeholder {
    color: ${RGBA.white(0.4)};
  }

  &:focus {
    outline: none;
    border-color: ${GOLD.primary};
    background: ${RGBA.white(0.1)};
  }
`;

export const FormTextarea = styled.textarea`
  padding: 11px 14px;
  background: ${RGBA.white(0.08)};
  border: 1px solid ${RGBA.white(0.15)};
  border-radius: 4px;
  color: #e8e8e8;
  font-size: 14px;
  font-family: ${FONT.primary};
  min-height: 140px;
  resize: vertical;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${RGBA.white(0.4)};
  }

  &:focus {
    outline: none;
    border-color: ${GOLD.primary};
    background: ${RGBA.white(0.1)};
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 24px;
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
  font-size: 16px;
  font-weight: 700;
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

  &:focus {
    outline: none;
  }
`;
