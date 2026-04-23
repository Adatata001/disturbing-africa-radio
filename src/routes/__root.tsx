import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { PlayerProvider } from "@/components/player-context";
import { LivePlayerBar } from "@/components/live-player";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl font-black text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Off-frequency</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We can't tune into that page. Let's get you back to the studio.
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
      { title: "Disturbing Africa Radio — Afro Fusion Live" },
      {
        name: "description",
        content:
          "Disturbing Africa Radio — Afro Fusion broadcasting the freshest mainstream & underground sounds from Africa and the diaspora.",
      },
      { name: "author", content: "Disturbing Africa Radio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Disturbing Africa Radio — Afro Fusion Live" },
      { name: "twitter:title", content: "Disturbing Africa Radio — Afro Fusion Live" },
      { name: "description", content: "Afro Fusion radio, African music, online radio Nigeria, underground African music, live radio streaming, Afrobeat radio, African diaspora music, internet radio" },
      { property: "og:description", content: "Afro Fusion radio, African music, online radio Nigeria, underground African music, live radio streaming, Afrobeat radio, African diaspora music, internet radio" },
      { name: "twitter:description", content: "Afro Fusion radio, African music, online radio Nigeria, underground African music, live radio streaming, Afrobeat radio, African diaspora music, internet radio" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b2f3f28d-bd41-4222-ba58-baf6945f231e" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b2f3f28d-bd41-4222-ba58-baf6945f231e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
