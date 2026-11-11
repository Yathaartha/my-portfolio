import {
  Corner,
  Divider,
  Message,
  Overlay,
  Panel,
  PhoneIcon,
  Title,
  TitleDecoration,
} from "./RotateDeviceOverlay.css";

/**
 * Covers the site on phones held in portrait. Shown purely via CSS media
 * query, so it appears/disappears instantly as the device rotates.
 */
export const RotateDeviceOverlay = () => (
  <Overlay role="alert" aria-live="polite">
    <Panel>
      <Corner className="top-left" />
      <Corner className="top-right" />
      <Corner className="bottom-left" />
      <Corner className="bottom-right" />

      <PhoneIcon
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <rect x="20" y="6" width="24" height="52" rx="4" />
        <line x1="28" y1="11" x2="36" y2="11" />
        <circle cx="32" cy="51" r="1.5" fill="currentColor" />
      </PhoneIcon>

      <Title>
        <TitleDecoration>◆</TitleDecoration>
        Rotate Your Device
        <TitleDecoration>◆</TitleDecoration>
      </Title>
      <Divider />
      <Message>
        Please turn your phone to landscape to view this portfolio.
      </Message>
    </Panel>
  </Overlay>
);
