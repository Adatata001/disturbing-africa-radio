import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { isOpenNow } from "@/lib/hours";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shows", label: "Shows" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [openNow, setOpenNow] = React.useState(false);

  React.useEffect(() => {
    const update = () => setOpenNow(isOpenNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
        <Link to="/" className="group flex items-center gap-2">
          <img 
            src="/disturbing-africa-logo.png" 
            alt="Disturbing Africa Radio" 
            className="h-9 w-9"
          />
          <div className="leading-tight">
            <div className="display text-base font-black tracking-tight text-foreground">
              Disturbing Africa
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
              Radio
            </div>
          </div>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <span
            className={`hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest sm:inline-flex ${
              openNow
                ? "border-secondary/40 bg-secondary/10 text-secondary"
                : "border-border bg-muted text-muted-foreground"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${openNow ? "bg-secondary" : "bg-muted-foreground"}`}
            />
            {openNow ? "On Air" : "Off Air"}
          </span>

          <a
            href="#live-player"
            className="hidden items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:opacity-95 sm:inline-flex"
          >
            Open Player
          </a>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col p-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
