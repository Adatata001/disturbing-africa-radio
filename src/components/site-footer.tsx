import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Clock } from "lucide-react";
import { SOCIAL_HANDLE, SOCIALS, TwitterIcon } from "@/lib/socials";
import { Reveal } from "@/components/reveal";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <Reveal direction="up" className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src="/disturbing-africa-logo.png"
              alt="Disturbing Africa Radio"
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <div className="display text-base tracking-tight text-foreground">
                Disturbing Africa
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                Radio
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Afro Fusion radio broadcasting the latest and freshest from the mainstream
            and underground. Spreading the influence of African underground genres
            across the continent and the diaspora.
          </p>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Follow us on Instagram and Twitter as{" "}
            <span className="font-semibold text-foreground">{SOCIAL_HANDLE}</span>.
          </p>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Visit</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-secondary" />
              <span>C10 Bugai Street, Makera, Kaduna</span>
            </li>
            <li className="flex gap-2">
              <Clock className="h-4 w-4 shrink-0 text-secondary" />
              <span>On Air daily - 5:00 AM to 12:00 AM</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-md border border-border p-2 hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="rounded-md border border-border p-2 hover:border-primary hover:text-primary"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shows" className="text-muted-foreground hover:text-foreground">
                Shows & Schedule
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            (c) {new Date().getFullYear()} Disturbing Africa Radio. A subsidiary of{" "}
            <span className="font-semibold text-foreground">Dstrb Afrik Global LTD</span>.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>CEO - Abraham Yusuf</span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Certified 9 / 10 / 25
            </span>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </footer>
  );
}
