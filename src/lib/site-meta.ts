const DEFAULT_SITE_URL = "https://disturbing-africa-radio.vercel.app";

function normalizeSiteUrl(url?: string) {
  if (!url) {
    return undefined;
  }

  const withProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}

const vercelSiteUrl =
  typeof process !== "undefined"
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
    : undefined;

export const SITE_URL =
  normalizeSiteUrl(import.meta.env.VITE_SITE_URL) ||
  normalizeSiteUrl(vercelSiteUrl) ||
  DEFAULT_SITE_URL;

export const SOCIAL_IMAGE_URL = `${SITE_URL}/social-preview.jpg`;
export const SOCIAL_IMAGE_ALT =
  "Disturbing Africa Radio artwork with the headline Real Sounds. Real Stories. Real Africa.";
export const SOCIAL_IMAGE_TYPE = "image/jpeg";
export const SOCIAL_IMAGE_WIDTH = "1200";
export const SOCIAL_IMAGE_HEIGHT = "630";
