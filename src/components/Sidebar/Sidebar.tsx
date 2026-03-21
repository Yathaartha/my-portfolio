import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import backIcon from "../../assets/icons/back-arrow.png";
import { ResumeModal } from "./ResumeModal";
import copyIcon from "../../assets/icons/copy.png";
import profilePicture from "../../assets/images/dummy-profile-pic.webp";
import {
    BackButton, BioSection, BotSide, CardGrid, Container, CopyButton, DegreeTooltip,
    ExperienceSection, InfoSection, MailSection, MailText, NameSection, PictureSection, PicWrapper,
    ProfilePicture, SchoolLabel, SchoolName, SchoolNameRow, SchoolSection, SidebarContent,
    SideSidebar, TooltipIcon, TopSide
} from "./Sidebar.css";
import { SidebarCard } from "./SidebarCard";
import { SIDEBAR_CARDS, sidebarCardIcons } from "./sidebarCardData";

export const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) => {
  const navigate = useNavigate();
  const [degreeTooltipOpen, setDegreeTooltipOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const degreeTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!degreeTooltipOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        degreeTooltipRef.current &&
        !degreeTooltipRef.current.contains(e.target as Node)
      ) {
        setDegreeTooltipOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [degreeTooltipOpen]);

  return (
    <SidebarContent $open={sidebarOpen}>
      <Container direction="row">
        <SideSidebar>
          <BackButton onClick={() => setSidebarOpen(false)}>
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
            <PictureSection>
              <PicWrapper>
                <ProfilePicture src={profilePicture} alt="profile" />
              </PicWrapper>
              <MailSection>
                <MailText href="mailto:myathaartha@gmail.com">
                  myathaartha@gmail.com
                </MailText>
                <CopyButton
                  onClick={() => {
                    navigator.clipboard.writeText("myathaartha@gmail.com");
                    toast.success("Copied!");
                  }}>
                  <img src={copyIcon} alt="copy" />
                  <span>Copy</span>
                </CopyButton>
              </MailSection>
            </PictureSection>
            <InfoSection>
              <NameSection>Yathaartha Maharjan</NameSection>
              <BioSection>
                I am a software engineer with a passion for building web
                applications.
              </BioSection>
              <SchoolSection>
                <SchoolLabel>School:</SchoolLabel>
                <SchoolNameRow ref={degreeTooltipRef}>
                  <SchoolName>Clark University</SchoolName>
                  <TooltipIcon
                    type="button"
                    onClick={() => setDegreeTooltipOpen((o) => !o)}
                    aria-label="Show degree">
                    i
                  </TooltipIcon>
                  {degreeTooltipOpen && (
                    <DegreeTooltip>
                      Masters of Science in Computer Science
                    </DegreeTooltip>
                  )}
                </SchoolNameRow>
              </SchoolSection>
              <ExperienceSection>
                <span>Experience:</span>
                <span>3 years+</span>
              </ExperienceSection>
            </InfoSection>
          </TopSide>
          <BotSide>
            <CardGrid>
              {SIDEBAR_CARDS.map(({ text, iconKey }) => (
                <SidebarCard
                  key={text}
                  icon={sidebarCardIcons[iconKey]}
                  text={text}
                  onClick={
                    iconKey === "resume"
                      ? () => setResumeModalOpen(true)
                      : iconKey === "skillTree"
                        ? () => {
                            navigate("/skill-tree");
                            setSidebarOpen(false);
                          }
                        : iconKey === "projects" || iconKey === "archives"
                          ? () => {
                              navigate("/projects");
                              setSidebarOpen(false);
                            }
                          : iconKey === "hobbies"
                            ? () => {
                                navigate("/hobbies");
                                setSidebarOpen(false);
                              }
                            : undefined
                  }
                />
              ))}
            </CardGrid>
          </BotSide>
        </Container>
      </Container>
      {resumeModalOpen &&
        createPortal(
          <ResumeModal onClose={() => setResumeModalOpen(false)} />,
          document.body
        )}
    </SidebarContent>
  );
};

