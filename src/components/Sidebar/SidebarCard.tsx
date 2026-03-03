import { CardIcon, CardText, SidebarCard as StyledCard } from "./Sidebar.css";

interface SidebarCardProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export const SidebarCard = ({ icon, text, onClick }: SidebarCardProps) => (
  <StyledCard onClick={onClick} role={onClick ? "button" : undefined}>
    <CardIcon>{icon}</CardIcon>
    <CardText>{text}</CardText>
  </StyledCard>
);
