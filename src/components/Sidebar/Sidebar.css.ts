import styled from "styled-components";

import nameCard from "../../assets/images/Namecard_Background_Fontaine_Judgment.webp?url";
import { GOLD, GRAY, NEUTRAL, RGBA } from "../../utils/constants";

export const SidebarContent = styled.aside<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  /* background: rgba(44, 54, 71, 0.95); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  /* padding: 24px 16px; */
  z-index: 500;
  transform: translateX(${(p) => (p.$open ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 100;
`;

export const Container = styled.div<{
  direction?: "column" | "row";
}>`
  display: flex;
  flex-direction: ${({ direction = "column" }) =>
    direction === "column" ? "column" : "row"};
  width: 100%;
  height: 100%;
`;

export const SideSidebar = styled.div`
  width: 15%;
  min-width: 40px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${RGBA.slateBlue(1)},
    ${RGBA.slateBlue(0.7)}
  );
  border-right: 2px solid ${GOLD.border};
  border-left: 2px solid ${GOLD.border};
  padding: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  gap: 10px;
`;

export const BackButton = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${GOLD.creamLight};
  border-radius: 50%;
  border: 5px solid ${GRAY.border};
  cursor: pointer;
  padding: 6px;
  img {
    width: 100%;
  }
`;

export const TopSide = styled.div`
  height: 30%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${nameCard}) no-repeat center center;
  background-size: cover;
  padding: 15px;
  gap: 15px;
`;

export const PictureSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const PicWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px groove ${RGBA.white(0.5)};
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  /* border: 5px solid #ffffff; */
`;

export const MailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${NEUTRAL.white};
`;

export const MailText = styled.a`
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  text-shadow: 2px 2px 4px ${RGBA.black(0.5)};
  background-color: ${RGBA.black(0.5)};
  padding: 2px 5px;
  border-radius: 20px;
  width: 100%;
  text-decoration: none;
  color: ${NEUTRAL.white};
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${NEUTRAL.white};
  }
`;

export const CopyButton = styled.div`
  opacity: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  img {
    width: 15px;
  }
  span {
    font-size: 11px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${NEUTRAL.white};
`;
export const NameSection = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  font-size: 18px;
  background: linear-gradient(
    to right,
    ${RGBA.black(0)},
    ${RGBA.slateBlue(0.7)},
    ${RGBA.black(0)}
  );
  padding: 2px 4px;
`;

export const SchoolSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  background: linear-gradient(
    to right,
    ${RGBA.black(0)},
    ${RGBA.slateBlue(0.7)},
    ${RGBA.black(0)}
  );
  padding: 2px 4px;
`;

export const SchoolLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${NEUTRAL.white};
`;

export const SchoolName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${NEUTRAL.white};
`;

export const SchoolNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
`;

export const TooltipIcon = styled.button`
  width: 20px;
  height: 20px;
  min-width: 14px;
  min-height: 14px;
  border-radius: 50%;
  background: ${RGBA.white(0.9)};
  color: ${GRAY.muted};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  /* line-height: 1; */
  padding: 2px;

  &:hover {
    background: ${NEUTRAL.white};
  }

  &:focus {
    outline: none;
  }
`;

export const DegreeTooltip = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 6px;
  padding: 8px 12px;
  background: ${RGBA.slateBlue(0.9)};
  color: ${NEUTRAL.white};
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 0 4px 12px ${RGBA.black(0.3)};
  z-index: 200;
  white-space: nowrap;
`;

export const BioSection = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: justify;
  width: 100%;
  font-size: 12px;
`;

export const ExperienceSection = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: justify;
  width: 100%;
  font-size: 14px;
`;

export const BotSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 12px;
  overflow-y: auto;
  flex: 1;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  /* margin: 0 20px; */
`;

export const SidebarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  /* padding: 8px 8px; */
  background: ${RGBA.slateBlue(1)};
  /* border: 1px solid rgba(211, 188, 142, 0.5); */
  /* border-radius: 6px; */
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: inset 0 0 0 3px ${GRAY.light};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CardIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color: ${NEUTRAL.white};
  padding: 6px 0;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const CardText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${NEUTRAL.white};
  text-align: center;
  padding-bottom: 6px;
`;

