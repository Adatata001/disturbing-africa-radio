const VERCEL_SITE_URL = "https://disturbing-africa-radio.vercel.app";

function normalizeSiteUrl(url?: string) {
  if (!url) {
    return undefined;
  }

  const withProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}

export const SITE_URL = normalizeSiteUrl(import.meta.env.VITE_SITE_URL) || VERCEL_SITE_URL;

// Keep the preview image on the stable Vercel asset URL so previews work even
// when the shared page URL is the custom domain.
export const SOCIAL_IMAGE_URL = `${VERCEL_SITE_URL}/social-preview.jpg`;
export const SOCIAL_IMAGE_ALT =
  "Disturbing Africa Radio artwork with the headline Real Sounds. Real Stories. Real Africa.";
export const SOCIAL_IMAGE_TYPE = "image/jpeg";
export const SOCIAL_IMAGE_WIDTH = "1200";
export const SOCIAL_IMAGE_HEIGHT = "630";
