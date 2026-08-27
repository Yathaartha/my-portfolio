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
  TitleDivider,
} from "./ResumeModal.css";

const CLOSE_BUTTON_SVG = (
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
          <ResumeSectionTitle>Education</ResumeSectionTitle>
          <p>
            <strong>Clark University</strong> — Worcester, MA
            <br />
            <em>Aug 2024 – May 2026</em>
            <br />
            Master of Science in Computer Science (STEM)
          </p>
          <p>
            <strong>Leeds Beckett University</strong> — Leeds, UK
            <br />
            <em>Sep 2020 – Sep 2023</em>
            <br />
            Bachelors of Science (Hons) in Computing (GPA: 3.8/4.0)
          </p>
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Professional Summary</ResumeSectionTitle>
          <p style={{ textAlign: "justify" }}>
            Full-stack Software Engineer with 3+ years of experience building
            and scaling production web applications used by real customers.
            Specialized in React, Node.js, and containerized backend services,
            with proven impact improving deployment speed, system reliability,
            and business decision-making. Experienced working in Agile teams and
            contributing to products that supported successful Series A growth.
          </p>
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Experience</ResumeSectionTitle>
          {/* Dzango Technologies */}
          <p>
            <strong>Full Stack Developer</strong> — Dzango Technologies
            <br />
            <em>Jan 2023 – Jun 2024</em>
          </p>
          <ul>
            <li>
              Built and maintained production-grade full-stack features used by
              real customers, contributing to platform scalability, performance
              improvements, and product maturity during a successful Series A
              growth phase
            </li>
            <li>
              Built and optimized PostgreSQL queries and GraphQL/REST APIs
              powering business-critical reporting, enabling stakeholders to
              make faster, data-driven decisions reducing reporting turnaround
              time by ~30%
            </li>
            <li>
              Containerized backend services using Docker and improved CI/CD
              pipelines, reducing deployment time and increasing system uptime
              in production
            </li>
            <li>
              Collaborated closely with product managers, designers, and
              engineers in Agile sprints, contributing to feature planning,
              technical decisions, and on-time delivery
            </li>
          </ul>
          {/* Dzango Technologies */}
          <p>
            <strong>Associate Software Developer</strong> — Dzango Technologies
            <br />
            <em>Jun 2022 – Dec 2022</em>
          </p>
          <ul>
            <li>
              Contributed to backend services and automation scripts across
              multiple full-stack applications, resolving production issues and
              improving overall platform reliability
            </li>
            <li>
              Improved frontend performance and responsiveness using TypeScript
              and React, while implementing secure access control patterns
              aligned with IAM best practices
            </li>
          </ul>
          {/* Aakash Labs */}
          <p>
            <strong>Aakash Labs</strong> — Frontend Developer
            <br />
            <em>Jul 2021 – Jun 2022</em>
          </p>
          <ul>
            <li>
              Designed and developed a production CRM application from scratch
              using React and Redux, supporting client and project management
              workflows for a regulated digital marketing environment
            </li>
            <li>
              Translated Figma designs into pixel-perfect, accessible interfaces
              in collaboration with UI/UX designers, improving usability and
              consistency across the platform
            </li>
          </ul>
          {/* Kaaikaas */}
          <p>
            <strong>Kaaikaas Technologies</strong> — Web Developer Intern
            <br />
            <em>Jan 2021 – Jun 2021</em>
          </p>
          <ul>
            <li>
              Built responsive web interfaces using HTML, CSS/SASS, and React
              for real client projects, including hospitality websites
            </li>
            <li>
              Iterated on features based on client feedback, improving usability
              and delivery speed
            </li>
          </ul>
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Projects</ResumeSectionTitle>
          <p>
            <strong>ParkIT</strong>
            <br />
            <em>
              React, Node.js, Express, MongoDB ·{" "}
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
              Built a full-stack parking management application with real-time
              availability tracking, reservation management, and RESTful API
              backend
            </li>
          </ul>
          <p>
            <strong>BellaCucina Website</strong>
            <br />
            <em>
              React, JavaScript, CSS ·{" "}
              <a
                href="https://github.com/Yathaartha/BellaCucina-website"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </em>
          </p>
          <ul>
            <li>
              Designed and developed a responsive restaurant website for Bella
              Cucina Agawam with menu display and elegant UI
            </li>
          </ul>
          <p>
            <strong>Portfolio Website</strong>
            <br />
            <em>
              React, TypeScript, Styled Components, Vite ·{" "}
              <a
                href="https://github.com/Yathaartha"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </em>
          </p>
          <ul>
            <li>
              Created a Genshin Impact-themed portfolio with an interactive
              constellation skill tree, animated modals, and project showcase
            </li>
          </ul>
        </ResumeSection>
        <ResumeSection>
          <ResumeSectionTitle>Skills</ResumeSectionTitle>
          <ResumeSkillChips>
            <span>JavaScript / TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Git</span>
            <span>REST APIs</span>
            <span>HTML & CSS</span>
          </ResumeSkillChips>
        </ResumeSection>
      </ResumeBody>
    </ResumeModalContainer>
  </ModalOverlay>
);

