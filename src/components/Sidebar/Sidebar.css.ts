import styled from "styled-components";

import nameCard from "../../assets/images/Namecard_Background_Fontaine_Judgment.webp?url";

export const SidebarContent = styled.aside<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  /* background: rgba(44, 54, 71, 0.95); */
  /* backdrop-filter: blur(8px); */
  -webkit-backdrop-filter: blur(8px);
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
    rgba(75, 84, 101, 1),
    rgba(75, 84, 101, 0.7)
  );
  border-right: 2px solid #d3bc8e;
  border-left: 2px solid #d3bc8e;
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
  background: #ece5d8;
  border-radius: 50%;
  border: 5px solid #95979d;
  cursor: pointer;
  padding: 6px;
  img {
    width: 100%;
  }
`;

export const TopSide = styled.div`
  height: 35%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${nameCard}) no-repeat center center;
  background-size: cover;
`;

export const PictureSection = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextSection = styled.div`
  width: 100%;
  height: 100%;
`;
export const BotSide = styled.div``;

