import { CardIcon, CardText, SidebarCard as StyledCard } from "./Sidebar.css";

interface SidebarCardProps {
  icon: React.ReactNode;
  text: string;
}

export const SidebarCard = ({ icon, text }: SidebarCardProps) => (
  <StyledCard>
    <CardIcon>{icon}</CardIcon>
    <CardText>{text}</CardText>
  </StyledCard>
);
