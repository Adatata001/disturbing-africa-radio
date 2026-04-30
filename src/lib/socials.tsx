import type { SVGProps } from "react";

const SOCIAL_SLUG = "disturbingafricaltd";

export const SOCIAL_HANDLE = `@${SOCIAL_SLUG}`;

export const SOCIALS = {
  instagram: `https://www.instagram.com/${SOCIAL_SLUG}/`,
  twitter: `https://twitter.com/${SOCIAL_SLUG}`,
} as const;

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L22.75 22h-6.93l-5.43-6.62L4.2 22H.94l8.02-9.17L1.5 2h7.1l4.91 6.07L18.244 2Zm-1.22 18h1.92L7.06 4H5.02l12.004 16Z" />
    </svg>
  );
}
