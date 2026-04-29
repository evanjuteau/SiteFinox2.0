import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const baseProps = (size: number, rest: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...rest,
});

// ============= Project icons (Parcours selector) =============

export function HomeIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function BuildingIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <rect x="4" y="3" width="16" height="18" rx="0.5" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

export function FamilyIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="16" cy="7" r="2.5" />
      <circle cx="12" cy="14" r="1.8" />
      <path d="M3 20c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M11 20c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    </svg>
  );
}

export function SunsetIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="12" cy="14" r="4" />
      <path d="M12 4v2M5 7l1.5 1.5M19 7l-1.5 1.5M2 14h2M20 14h2" />
      <path d="M3 19h18" />
    </svg>
  );
}

// ============= Step icons (parcours steps) =============

export function TargetIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CoinsIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <ellipse cx="9" cy="8" rx="6" ry="2.5" />
      <path d="M3 8v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V8" />
      <path d="M3 12v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" />
      <ellipse cx="17" cy="14" rx="4" ry="1.8" />
      <path d="M13 14v3c0 1 1.8 1.8 4 1.8s4-.8 4-1.8v-3" />
    </svg>
  );
}

export function HandshakeIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="m11 17 2 2a1 1 0 0 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-1.41-1.41l2.62-2.62a3 3 0 0 1 4.24 0l4.84 4.84" />
      <path d="m21 3-2.77 2.77a1 1 0 0 1-1.41 0l-2.55-2.55" />
      <path d="M3 21 4.41 19.59" />
      <path d="m9 14-3.5 3.5a1 1 0 0 1-3-3L8.62 8.38" />
    </svg>
  );
}

export function BankIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M3 9 12 4l9 5" />
      <path d="M4 9v9M20 9v9" />
      <path d="M8 11v6M12 11v6M16 11v6" />
      <path d="M3 19h18" />
    </svg>
  );
}

export function ShieldIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ScaleIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="m6 7-3 6c.5 1.5 2 2.5 3 2.5s2.5-1 3-2.5L6 7Z" />
      <path d="m18 7-3 6c.5 1.5 2 2.5 3 2.5s2.5-1 3-2.5L18 7Z" />
    </svg>
  );
}

export function KeyIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="7" cy="14" r="4" />
      <path d="m11 11 9-9" />
      <path d="m17 5 3 3" />
      <path d="m14 8 3 3" />
    </svg>
  );
}

export function DocumentIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M14 3H6v18h12V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

export function ColumnsIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M3 7 12 3l9 4" />
      <path d="M5 7v12M19 7v12" />
      <path d="M9 9v8M15 9v8" />
      <path d="M3 19h18" />
    </svg>
  );
}

export function ChartIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M3 3v18h18" />
      <path d="M7 16V11M11 16V8M15 16V13M19 16V6" />
    </svg>
  );
}

export function RefreshIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 21v-5h5M21 3v5h-5" />
    </svg>
  );
}

export function HeartIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M19 7c-1.5-2.5-5-2.5-7 0-2-2.5-5.5-2.5-7 0-2 3 0 7 7 12 7-5 9-9 7-12Z" />
    </svg>
  );
}

export function BabyIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M9 8.5h.01M15 8.5h.01" />
      <path d="M9.5 11.5c.6.7 1.5 1.2 2.5 1.2s1.9-.5 2.5-1.2" />
      <path d="M5 21c1-3 4-5 7-5s6 2 7 5" />
    </svg>
  );
}

export function ScrollIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M5 5c0-1.1.9-2 2-2h11l1 4v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5Z" />
      <path d="M5 5c0 1.1.9 2 2 2h11" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

export function TrendUpIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function CalculatorIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M8 7h8" />
      <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </svg>
  );
}

export function CalendarIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 9h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="M8 13h2M14 13h2M8 17h2M14 17h2" />
    </svg>
  );
}

export function GemIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="m6 3 6 18 6-18Z" />
      <path d="M3 9h18" />
      <path d="m6 3 6 6 6-6" />
    </svg>
  );
}

// ============= Service page hero icons =============

export function UmbrellaIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M22 12a10 10 0 0 0-20 0Z" />
      <path d="M12 12v7" />
      <path d="M9 19a3 3 0 0 0 6 0" />
    </svg>
  );
}

export function UsersIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M16 14c2.8 0 5 2 5 5" />
    </svg>
  );
}

export function TreeIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M12 3v18" />
      <path d="M12 8c-2-2-5-2-7 0M12 8c2-2 5-2 7 0" />
      <path d="M12 13c-3-3-7-2-9 0M12 13c3-3 7-2 9 0" />
      <path d="M9 21h6" />
    </svg>
  );
}

export function GlobeIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <rect x="3" y="7" width="18" height="14" rx="1" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
      <path d="M11 13v2h2v-2" />
    </svg>
  );
}

// ============= UI utility icons =============

export function ArrowRightIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function PlayIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <polygon points="6,4 20,12 6,20" fill="currentColor" />
    </svg>
  );
}

export function MinimizeIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4" />
    </svg>
  );
}

export function CloseIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function StarIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path
        d="m12 2 2.9 6.3 6.9.7-5.2 4.7 1.4 6.8L12 17.3 6 20.5l1.4-6.8L2.2 9l6.9-.7L12 2Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

// ============= Social media icons =============

export function LinkedInIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)} fill="currentColor" stroke="none">
      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM8.3 18.3H5.7V9.7h2.6v8.6Zm-1.3-9.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11.3 9.7h-2.6V14c0-1-.4-1.7-1.3-1.7s-1.4.7-1.4 1.7v4.3h-2.6V9.7H13v1.2c.4-.7 1.2-1.4 2.6-1.4 1.8 0 3 1.3 3 3.7v5.1Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)} fill="currentColor" stroke="none">
      <path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)} fill="currentColor" stroke="none">
      <path d="M17.5 3h3.3l-7.2 8.2L22 21h-6.7l-5.2-6.8L4 21H.7l7.7-8.8L0 3h6.8l4.7 6.2L17.5 3Zm-1.2 16h1.8L7.7 5h-2l10.6 14Z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)} fill="currentColor" stroke="none">
      <path d="M22 12c0-3-.4-4.7-.8-5.5-.4-.7-1.1-1.3-1.9-1.5C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.3.5c-.8.2-1.5.8-1.9 1.5C2.4 7.3 2 9 2 12s.4 4.7.8 5.5c.4.7 1.1 1.3 1.9 1.5C6.3 19.5 12 19.5 12 19.5s5.7 0 7.3-.5c.8-.2 1.5-.8 1.9-1.5.4-.8.8-2.5.8-5.5ZM10 15.3V8.7l5.5 3.3-5.5 3.3Z" />
    </svg>
  );
}

export function TikTokIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)} fill="currentColor" stroke="none">
      <path d="M20 9.6a7 7 0 0 1-4.5-1.8v7.5a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3a2.6 2.6 0 1 0 1.8 2.4V2h2.9a4.2 4.2 0 0 0 4.4 4.2v3.4Z" />
    </svg>
  );
}
