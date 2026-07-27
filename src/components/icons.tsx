// Custom-drawn line icons — deliberately not pulled from a generic icon
// library, so the site doesn't read as a templated AI-builder page.
import { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const PipelineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 5h16" />
    <path d="M4 5l6 7v6l4 2v-8l6-7" />
  </svg>
);

export const StackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);

export const FlowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 6h10" />
    <path d="M12 16V9a3 3 0 0 0-3-3H6" />
    <path d="M12 16V9a3 3 0 0 1 3-3h3" />
  </svg>
);

export const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M6 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4.5 4.6 1.5 1.5 0 0 1 6 3Z" />
  </svg>
);

export const MapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <rect x="3" y="17" width="6" height="4" rx="1" />
    <rect x="15" y="17" width="6" height="4" rx="1" />
    <path d="M12 7v5" />
    <path d="M6 17v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
  </svg>
);

export const BuildIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <rect x="4" y="10" width="7" height="7" rx="1" />
    <rect x="13" y="10" width="7" height="7" rx="1" />
    <path d="M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
  </svg>
);

export const LoopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 12a8 8 0 0 1 14-5.3" />
    <path d="M18 4v3.5H14.5" />
    <path d="M20 12a8 8 0 0 1-14 5.3" />
    <path d="M6 20v-3.5H9.5" />
  </svg>
);

export const MessageCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 5h16v10a2 2 0 0 1-2 2H9l-5 4V5Z" />
    <path d="M8.5 11.5l2 2 4-4" />
  </svg>
);

export const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const TrendUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 16l5-5 4 4 7-8" />
    <path d="M15 7h5v5" />
  </svg>
);

export const TargetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.5" />
  </svg>
);

export const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M12 20s-7-4.6-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5c-2.5 4.4-9.5 9-9.5 9Z" />
  </svg>
);

export const BoltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />
  </svg>
);

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.3" />
  </svg>
);

export const SendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M21 3 3 10.5l7 2.5 2 7L21 3Z" />
    <path d="M12.5 13.5 21 3" />
  </svg>
);

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 12.5l5 5L20 6" />
  </svg>
);
