import type { SVGProps } from "react";

const SOCIAL_SLUG = "disturbingafricaltd";

export const SOCIAL_HANDLE = `@${SOCIAL_SLUG}`;

export const SOCIALS = {
  tiktok: `https://www.tiktok.com/@${SOCIAL_SLUG}`,
  instagram: `https://www.instagram.com/${SOCIAL_SLUG}/`,
  facebook: `https://www.facebook.com/${SOCIAL_SLUG}`,
  tipjar: "#",
} as const;

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25h-3.12v12.12a2.8 2.8 0 1 1-2.8-2.8c.31 0 .61.05.9.15V8.76a5.93 5.93 0 0 0-.9-.07A5.92 5.92 0 1 0 15.82 14V7.95a7.9 7.9 0 0 0 4.62 1.49V6.69h-.85Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8.2h2.76l.41-3.2H13.5V8.56c0-.93.26-1.56 1.59-1.56H16.8V4.14c-.29-.04-1.28-.14-2.42-.14-2.39 0-4.03 1.46-4.03 4.14v2.46H7.6v3.2h2.75V22h3.15Z" />
    </svg>
  );
}
