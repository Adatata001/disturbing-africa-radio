import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, HeartHandshake, MapPin, Clock, Radio, Music2 } from "lucide-react";

const HANDLE = "disturbingafricaltd";

export const SOCIALS = {
  tiktok: `https://www.tiktok.com/@${HANDLE}`,
  instagram: `https://www.instagram.com/${HANDLE}`,
  facebook: `https://www.facebook.com/${HANDLE}`,
  tipjar: "#",
};

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Radio className="h-5 w-5" />
            </div>
            <div className="display text-lg font-black">Disturbing Africa Radio</div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Afro Fusion radio broadcasting the latest & freshest from the mainstream &
            underground. Spreading the influence of African underground genres across the
            continent and the diaspora.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SOCIALS.tipjar}
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary"
            >
              <HeartHandshake className="h-4 w-4" /> Tip Studio
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Visit</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-secondary" />
              <span>C10 Bugai Street, Makera, Kaduna</span>
            </li>
            <li className="flex gap-2">
              <Clock className="h-4 w-4 shrink-0 text-secondary" />
              <span>On Air daily — 5:00 AM to 12:00 AM</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            <a href={SOCIALS.tiktok} aria-label="TikTok" className="rounded-md border border-border p-2 hover:border-primary hover:text-primary">
              <Music2 className="h-4 w-4" />
            </a>
            <a href={SOCIALS.instagram} aria-label="Instagram" className="rounded-md border border-border p-2 hover:border-primary hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SOCIALS.facebook} aria-label="Facebook" className="rounded-md border border-border p-2 hover:border-primary hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">@{HANDLE}</div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/shows" className="text-muted-foreground hover:text-foreground">Shows & Schedule</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © 2025 Disturbing Africa Radio. A subsidiary of{" "}
            <span className="font-semibold text-foreground">Dstrb Afrik Global LTD</span>.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>CEO — Abraham Yusuf</span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Certified 9 / 10 / 25
            </span>
          </div>
        </div>
      </div>
      {/* spacer so persistent player doesn't cover footer text */}
      <div className="h-20" />
    </footer>
  );
}
