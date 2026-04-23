const DEFAULT_SITE_URL = "https://disturbing-africa-radio.netlify.app";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "") || DEFAULT_SITE_URL;

export const SOCIAL_IMAGE_URL = `${SITE_URL}/social-preview.png`;
export const SOCIAL_IMAGE_ALT =
  "Disturbing Africa Radio artwork with the headline Real Sounds. Real Stories. Real Africa.";
