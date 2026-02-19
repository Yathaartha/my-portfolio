import styled from "styled-components";

import bgImage from "./assets/images/bg.png?url";

const HomepageContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("${bgImage}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const AsiaButton = styled.button`
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  backdrop-filter: blur(2px);

  &:hover {
    background: rgba(59, 65, 75, 0.85);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

const DiamondIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #f0f0f0;
  transform: rotate(45deg);
  box-shadow: 0 0 0 1px rgba(47, 52, 58, 0.3);
`;

const Checkmark = styled.svg`
  transform: rotate(-45deg);
  width: 12px;
  height: 12px;
`;

function Homepage() {
  return (
    <HomepageContainer>
      <AsiaButton>
        <DiamondIcon>
          <Checkmark viewBox="0 0 24 24" fill="none" stroke="#2f343a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </Checkmark>
        </DiamondIcon>
        Asia
      </AsiaButton>
    </HomepageContainer>
  );
}

export default Homepage;

