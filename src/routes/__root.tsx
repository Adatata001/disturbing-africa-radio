import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { PlayerProvider } from "@/components/player-context";
import { LivePlayerBar } from "@/components/live-player";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  SITE_URL,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_TYPE,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_WIDTH,
} from "@/lib/site-meta";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl font-black text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Off-frequency</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We can&apos;t tune into that page. Let&apos;s get you back to the studio.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Disturbing Africa Radio - Afro Fusion Live" },
      {
        name: "description",
        content:
          "Disturbing Africa Radio - Afro Fusion broadcasting the freshest mainstream and underground sounds from Africa and the diaspora.",
      },
      { name: "author", content: "Disturbing Africa Radio" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Disturbing Africa Radio" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Disturbing Africa Radio - Afro Fusion Live" },
      {
        property: "og:description",
        content: "Afro Fusion radio. Bold, underground, unfiltered. Listen live now.",
      },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:image:secure_url", content: SOCIAL_IMAGE_URL },
      { property: "og:image:type", content: SOCIAL_IMAGE_TYPE },
      { property: "og:image:width", content: SOCIAL_IMAGE_WIDTH },
      { property: "og:image:height", content: SOCIAL_IMAGE_HEIGHT },
      { property: "og:image:alt", content: SOCIAL_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Disturbing Africa Radio - Afro Fusion Live" },
      {
        name: "twitter:description",
        content: "Afro Fusion radio. Bold, underground, unfiltered. Listen live now.",
      },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:image:alt", content: SOCIAL_IMAGE_ALT },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <PlayerProvider>
      <div className="flex min-h-screen flex-col bg-background bg-grain">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <LivePlayerBar />
      </div>
    </PlayerProvider>
  );
}
