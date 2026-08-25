// Lightweight inline SVG icon set — avoids extra icon-library dependencies.

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const SnowflakeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
    <path d="M12 2v20M12 2 9 5M12 2l3 3M12 22l-3-3M12 22l3-3M2 12h20M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3M5 5l14 14M5 5l1 4M5 5l4 1M19 19l-4-1M19 19l-1-4M5 19l14-14M5 19l4-1M5 19l1-4M19 5l-1 4M19 5l-4 1" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="M4 12.5 9.5 18 20 6" />
  </svg>
);

export const ChevronIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="m7 9 5 5 5-5" />
  </svg>
);

export const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" stroke="none" {...props}>
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z" />
  </svg>
);

export const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M12 3l7 3v6c0 4.8-3 7.9-7 9-4-1.1-7-4.2-7-9V6l7-3Z" />
    <path d="m9 12 2.2 2.2L15 10" />
  </svg>
);

export const WrenchIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2V20h3.8l5.3-5.3a4 4 0 0 0 4.6-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
  </svg>
);

export const FridgeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <rect x="5" y="2.5" width="14" height="19" rx="2" />
    <path d="M5 9.5h14" />
    <path d="M8.5 5.5v2M8.5 12.5v2" />
  </svg>
);

export const AlertIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M12 3 2 20h20L12 3Z" />
    <path d="M12 10v4M12 17v.01" />
  </svg>
);

export const BuildingIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M4 21V6l8-3 8 3v15" />
    <path d="M9 21v-5h6v5M9 9h.01M9 13h.01M15 9h.01M15 13h.01" />
  </svg>
);

export const DropletIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M12 3s6 6.6 6 10.5a6 6 0 1 1-12 0C6 9.6 12 3 12 3Z" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
