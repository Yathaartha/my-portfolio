import backIcon from "../../assets/icons/back-arrow.png";
import {
    BackButton, BotSide, Container, PictureSection, SidebarContent, SideSidebar, TextSection,
    TopSide
} from "./Sidebar.css";

export const Sidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  return (
    <SidebarContent $open={sidebarOpen}>
      <Container direction="row">
        <SideSidebar>
          <BackButton>
            <img src={backIcon} alt="return" />
          </BackButton>
        </SideSidebar>
        <Container
          direction="column"
          style={{
            background:
              "linear-gradient(to bottom, rgba(239, 229, 216, 1), rgba(239, 229, 216, 0.7))",
          }}>
          <TopSide>
            <PictureSection></PictureSection>
            <TextSection></TextSection>
          </TopSide>
          <BotSide>asd</BotSide>
        </Container>
      </Container>
    </SidebarContent>
  );
};

