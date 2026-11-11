import {
  CloseButton,
  Corner,
  ModalOverlay,
  ResumeBody,
  ResumeContact,
  ResumeModalContainer,
  ResumeName,
  ResumeSection,
  ResumeSectionTitle,
  ResumeSkillChips,
  ResumeSkillGroup,
  TitleDivider,
} from "./ResumeModal.css";

const CLOSE_BUTTON_SVG: React.ReactNode = (
  <svg viewBox="0 0 24 24" fill="none">
    <line
      x1="4"
      y1="4"
      x2="10"
      y2="10"
      stroke="#c8a84b"
      strokeWidth="2.5"
      strokeLinecap="square"
    />
    <line
      x1="4"
      y1="4"
      x2="4"
      y2="8"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <line
      x1="4"
      y1="4"
      x2="8"
      y2="4"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <line
      x1="20"
      y1="4"
      x2="14"
      y2="10"
      stroke="#c8a84b"
      strokeWidth="2.5"
      strokeLinecap="square"
    />
    <line
      x1="20"
      y1="4"
      x2="20"
      y2="8"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <line
      x1="20"
      y1="4"
      x2="16"
      y2="4"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <line
      x1="4"
      y1="20"
      x2="10"
      y2="14"
      stroke="#c8a84b"
      strokeWidth="2.5"
      strokeLinecap="square"
    />
    <line
      x1="4"
      y1="20"
      x2="4"
      y2="16"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <line
      x1="4"
      y1="20"
      x2="8"
      y2="20"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <line
      x1="20"
      y1="20"
      x2="14"
      y2="14"
      stroke="#c8a84b"
      strokeWidth="2.5"
      strokeLinecap="square"
    />
    <line
      x1="20"
      y1="20"
      x2="20"
      y2="16"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <line
      x1="20"
      y1="20"
      x2="16"
      y2="20"
      stroke="#c8a84b"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

const SKILL_GROUPS: { label: string; skills: string[] }[] = [
  {
    label: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#", "SQL", "Go"],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      "React.js", "Node.js", "Express.js", ".NET", "Spring", "Spring Boot",
      "Angular", "Vue.js", "AWS", "Docker", "Git", "SVN", "CI/CD", "Postman",
      "Adobe Photoshop", "Figma", "Front-end Frameworks", "Gradle", "Redux",
    ],
  },
  {
    label: "Databases & Data Technologies",
    skills: ["Oracle", "PostgreSQL", "Data Structures", "Storage Systems"],
  },
  {
    label: "Infrastructure & Observability",
    skills: ["Cloud Infrastructure", "Kubernetes", "Grafana", "Envoy", "Cilium"],
  },
];

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal = ({ onClose }: ResumeModalProps) => (
  <ModalOverlay onClick={onClose}>
    <ResumeModalContainer onClick={(e) => e.stopPropagation()}>
      <Corner className="top-left" />
      <Corner className="top-right" />
      <Corner className="bottom-left" />
      <Corner className="bottom-right" />
      <CloseButton type="button" onClick={onClose} aria-label="Close resume">
        {CLOSE_BUTTON_SVG}
      </CloseButton>
      <ResumeName>Yathaartha Maharjan</ResumeName>
      <ResumeContact>
        Boulder, CO
        {" · "}
        <a href="mailto:myathaartha@gmail.com">myathaartha@gmail.com</a>
        {" · "}
        <a
          href="https://www.linkedin.com/in/yathaartha-maharjan/"
          target="_blank"
          rel="noopener noreferrer">
          linkedin.com/in/yathaartha-maharjan
        </a>
        {" · "}
        <a
          href="https://github.com/Yathaartha"
          target="_blank"
          rel="noopener noreferrer">
          github.com/Yathaartha
        </a>
      </ResumeContact>
      <TitleDivider />
      <ResumeBody>
        <ResumeSection>
          <ResumeSectionTitle>Summary</ResumeSectionTitle>
          <p style={{ textAlign: "justify" }}>
            Full-Stack Developer with over 3 years of experience designing and
            implementing scalable applications using React, Node.js, Java, and
            PostgreSQL. Proficient in developing RESTful APIs, Dockerized
            microservices, cloud-native infrastructure, and CI/CD pipelines.
            Strong collaborator experienced in translating stakeholder needs
            into reliable, customer-facing solutions across the product
            lifecycle.
          </p>
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Education</ResumeSectionTitle>
          <p>
            <strong>Clark University</strong> — Worcester, MA
            <br />
            <em>Aug 2024 – May 2026</em>
            <br />
            Master of Science, Computer Science (STEM) · GPA: 3.91
          </p>
          <p>
            <strong>Leeds Beckett University</strong> — Kathmandu, Nepal
            <br />
            <em>Sep 2020 – Sep 2023</em>
            <br />
            Bachelor of Science, Computing · GPA: 3.87
          </p>
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Skills</ResumeSectionTitle>
          {SKILL_GROUPS.map(({ label, skills }) => (
            <ResumeSkillGroup key={label}>
              <strong>{label}</strong>
              <ResumeSkillChips>
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </ResumeSkillChips>
            </ResumeSkillGroup>
          ))}
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Professional Experience</ResumeSectionTitle>
          {/* Elytra Global */}
          <p>
            <strong>Co-founder</strong> — Elytra Global, Ltd.
            <br />
            <em>Rockville, Maryland · May 2026 – Present</em>
          </p>
          <ul>
            <li>
              Design and engineer a non-custodial B2B payment orchestration
              platform from the ground up to facilitate seamless cross-border
              transactions.
            </li>
            <li>
              Build scalable, cloud-native backend architecture using Node.js,
              TypeScript, and PostgreSQL while applying cloud infrastructure
              principles.
            </li>
            <li>
              Manage technical infrastructure, from configuring domain DNS
              routing to deploying secure, containerized environments.
            </li>
          </ul>
          {/* Dzango Technologies */}
          <p>
            <strong>Full-Stack Developer</strong> — Dzango Technologies
            <br />
            <em>Paris, France · Jan 2023 – Jun 2024</em>
          </p>
          <ul>
            <li>
              Designed and implemented scalable full-stack solutions with React
              (ES6+), Node.js, and PostgreSQL, applying front-end frameworks,
              RESTful APIs, and automated testing to enhance performance and
              customer experience while contributing to the client's Series A
              funding.
            </li>
            <li>
              Developed complex Oracle and PostgreSQL SQL queries and automated
              reporting tools for storage systems supporting business-critical
              decisions, leading to more informed strategic planning.
            </li>
            <li>
              Ensured system reliability by integrating Dockerized Spring Boot
              microservices and streamlining CI/CD pipelines for the backend,
              resulting in reduced deployment times and improved system uptime.
            </li>
          </ul>
          <p>
            <strong>Associate Software Developer</strong> — Dzango Technologies
            <br />
            <em>Paris, France · Jun 2022 – Dec 2022</em>
          </p>
          <ul>
            <li>
              Developed features and fixed bugs across full-stack web
              applications using React in an Agile team, enhancing application
              stability and end user satisfaction.
            </li>
            <li>
              Used TypeScript and React to improve application performance and
              UI responsiveness, resulting in a smoother user experience and
              more efficient development process.
            </li>
          </ul>
          {/* Aakash Labs */}
          <p>
            <strong>Frontend Developer</strong> — Aakash Labs
            <br />
            <em>Kathmandu, Nepal · Jul 2021 – Jun 2022</em>
          </p>
          <ul>
            <li>
              Built a CRM system from scratch using React, Redux, Angular,
              HTML5, and CSS3, enabling streamlined access to client and project
              data for the digital marketing team.
            </li>
          </ul>
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Projects</ResumeSectionTitle>
          <p>
            <strong>Smart Parking System – ParkIT</strong>
            <br />
            <em>
              Python, OpenCV, Docker, CI/CD ·{" "}
              <a
                href="https://github.com/Yathaartha/ParkIT-app"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </em>
          </p>
          <ul>
            <li>
              Developed a computer vision-powered parking detection system using
              Python and OpenCV, applying data processing techniques to improve
              space detection accuracy to 95%.
            </li>
            <li>
              Automated application deployment and testing with Docker, CI/CD
              pipelines, and Git version control, supporting reliable software
              releases.
            </li>
          </ul>
        </ResumeSection>
      </ResumeBody>
    </ResumeModalContainer>
  </ModalOverlay>
);

