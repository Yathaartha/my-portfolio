import Layout from "./Layout";
import profilePicture from "../assets/images/dummy-profile-pic.webp";
import {
  AboutWrapper,
  AttributeCard,
  AttributeGrid,
  AttributeLabel,
  AttributeValue,
  EducationCard,
  EducationDegree,
  EducationGrid,
  EducationInfo,
  EducationPeriod,
  EducationSchool,
  HeaderDiamond,
  HeroAvatar,
  HeroInfo,
  HeroName,
  HeroSection,
  HeroStars,
  HeroTagline,
  HeroTitle,
  PanelDivider,
  PanelHeader,
  ProfilePanel,
  SectionContainer,
  SectionTitle,
  SkillChip,
  SkillsWrap,
  StoryText,
  TimelineCompany,
  TimelineContainer,
  TimelineDescription,
  TimelineItem,
  TimelinePeriod,
  TimelineRole,
} from "./About.css";

const ATTRIBUTES = [
  { label: "Location", value: "MA, USA" },
  { label: "Affiliation", value: "Clark University" },
  { label: "Experience", value: "3+ years" },
  { label: "Element", value: "Full Stack" },
];

const EXPERIENCE = [
  {
    company: "Dzango Technologies",
    role: "Full Stack Developer",
    period: "Jan 2023 – Jun 2024",
    description:
      "Built and maintained production-grade full-stack features, optimized PostgreSQL queries and GraphQL/REST APIs, containerized backend services with Docker, and collaborated in Agile sprints.",
  },
  {
    company: "Dzango Technologies",
    role: "Associate Software Developer",
    period: "Jun 2022 – Dec 2022",
    description:
      "Contributed to backend services and automation scripts, improved frontend performance with TypeScript and React, and implemented secure access control patterns.",
  },
  {
    company: "Aakash Labs",
    role: "Frontend Developer",
    period: "Jul 2021 – Jun 2022",
    description:
      "Designed and developed a production CRM application from scratch using React and Redux, translating Figma designs into pixel-perfect, accessible interfaces.",
  },
  {
    company: "Kaaikaas Technologies",
    role: "Web Developer Intern",
    period: "Jan 2021 – Jun 2021",
    description:
      "Built responsive web interfaces using HTML, CSS/SASS, and React for real client projects including hospitality websites.",
  },
];

const EDUCATION = [
  {
    school: "Clark University",
    degree: "Master of Science in Computer Science (STEM)",
    period: "Jan 2022 – Present",
  },
  {
    school: "Leeds Beckett University",
    degree: "BSc (Hons) Computing — GPA 3.8/4.0",
    period: "Sep 2020 – Sep 2023",
  },
];

const SKILLS = [
  "JavaScript / TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "GraphQL",
  "REST APIs",
  "Git",
  "HTML & CSS",
  "Redux",
];

function About() {
  return (
    <Layout pageName="About">
      <AboutWrapper>
        <ProfilePanel>
          <PanelHeader>
            <HeaderDiamond>◆</HeaderDiamond>
            Character Profile
            <HeaderDiamond>◆</HeaderDiamond>
          </PanelHeader>
          <PanelDivider />

          <HeroSection>
            <HeroAvatar>
              <img src={profilePicture} alt="Yathaartha Maharjan" />
            </HeroAvatar>
            <HeroInfo>
              <HeroName>Yathaartha Maharjan</HeroName>
              <HeroTitle>Full Stack Developer</HeroTitle>
              <HeroStars>★★★★★</HeroStars>
              <HeroTagline>
                A passionate full-stack engineer who builds scalable web
                applications and brings ideas to life through clean code and
                thoughtful design.
              </HeroTagline>
            </HeroInfo>
          </HeroSection>

          <PanelDivider />

          <SectionContainer>
            <SectionTitle>Character Details</SectionTitle>
            <AttributeGrid>
              {ATTRIBUTES.map((attr) => (
                <AttributeCard key={attr.label}>
                  <AttributeLabel>{attr.label}</AttributeLabel>
                  <AttributeValue>{attr.value}</AttributeValue>
                </AttributeCard>
              ))}
            </AttributeGrid>
          </SectionContainer>

          <PanelDivider />

          <SectionContainer>
            <SectionTitle>Character Story</SectionTitle>
            <StoryText>
              Full-stack Software Engineer with 3+ years of experience building
              and scaling production web applications used by real customers.
              Specialized in React, Node.js, and containerized backend services,
              with proven impact improving deployment speed, system reliability,
              and business decision-making. Experienced working in Agile teams
              and contributing to products that supported successful Series A
              growth. Passionate about building things that matter — from
              production CRMs to parking systems to this very portfolio.
            </StoryText>
          </SectionContainer>

          <PanelDivider />

          <SectionContainer>
            <SectionTitle>Quest Log — Experience</SectionTitle>
            <TimelineContainer>
              {EXPERIENCE.map((exp) => (
                <TimelineItem key={`${exp.company}-${exp.period}`}>
                  <TimelineCompany>{exp.company}</TimelineCompany>
                  <TimelineRole>{exp.role}</TimelineRole>
                  <TimelinePeriod>{exp.period}</TimelinePeriod>
                  <TimelineDescription>{exp.description}</TimelineDescription>
                </TimelineItem>
              ))}
            </TimelineContainer>
          </SectionContainer>

          <PanelDivider />

          <SectionContainer>
            <SectionTitle>Education</SectionTitle>
            <EducationGrid>
              {EDUCATION.map((edu) => (
                <EducationCard key={edu.school}>
                  <EducationInfo>
                    <EducationSchool>{edu.school}</EducationSchool>
                    <EducationDegree>{edu.degree}</EducationDegree>
                  </EducationInfo>
                  <EducationPeriod>{edu.period}</EducationPeriod>
                </EducationCard>
              ))}
            </EducationGrid>
          </SectionContainer>

          <PanelDivider />

          <SectionContainer>
            <SectionTitle>Talents</SectionTitle>
            <SkillsWrap>
              {SKILLS.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </SkillsWrap>
          </SectionContainer>
        </ProfilePanel>
      </AboutWrapper>
    </Layout>
  );
}

export default About;
