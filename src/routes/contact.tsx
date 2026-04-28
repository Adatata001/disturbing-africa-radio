import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, HeartHandshake, Instagram, Facebook, Music2, Mail } from "lucide-react";
import { SOCIALS } from "@/components/site-footer";
import { isOpenNow } from "@/lib/hours";
import * as React from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Disturbing Africa Radio" },
      {
        name: "description",
        content:
          "Visit Disturbing Africa Radio at C10 Bugai Street, Makera, Kaduna. Open daily 5AM – 12AM. Connect via WhatsApp and socials.",
      },
      { property: "og:title", content: "Contact — Disturbing Africa Radio" },
      {
        property: "og:description",
        content: "Studio address, hours and ways to connect with Disturbing Africa Radio.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [openNow, setOpenNow] = React.useState(false);
  React.useEffect(() => {
    const update = () => setOpenNow(isOpenNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary">
            Get in touch
          </div>
          <h1 className="display mt-2 text-5xl font-black sm:text-6xl">
            Visit the <span className="text-gradient-brand">studio.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Drop a line, slide into the WhatsApp community, or come find us in Kaduna.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* INFO */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Studio Address
                  </div>
                  <div className="mt-1 display text-xl font-black">
                    C10 Bugai Street, Makera
                  </div>
                  <div className="text-sm text-muted-foreground">Kaduna, Nigeria</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/15 text-secondary">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">
                    On Air Hours
                  </div>
                  <div className="mt-1 display text-xl font-black">5:00 AM — 12:00 AM</div>
                  <div className="text-sm text-muted-foreground">Daily, all week</div>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
                    openNow
                      ? "border-secondary/40 bg-secondary/10 text-secondary"
                      : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${openNow ? "bg-secondary" : "bg-muted-foreground"}`} />
                  {openNow ? "Open now" : "Closed"}
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Email
                  </div>
                  <a
                    href="mailto:hello@disturbingafricaradio.com"
                    className="mt-1 block display text-xl font-black text-foreground hover:text-primary"
                  >
                    hello@disturbingafricaradio.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <a
                href={SOCIALS.tipjar}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground"
              >
                <HeartHandshake className="h-4 w-4" /> Tip the Studio
              </a>
            </div>

            <div className="flex gap-2">
              <a href={SOCIALS.tiktok} aria-label="TikTok" className="rounded-md border border-border p-3 hover:border-primary hover:text-primary">
                <Music2 className="h-5 w-5" />
              </a>
              <a href={SOCIALS.instagram} aria-label="Instagram" className="rounded-md border border-border p-3 hover:border-primary hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SOCIALS.facebook} aria-label="Facebook" className="rounded-md border border-border p-3 hover:border-primary hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title="Disturbing Africa Radio location"
              src="https://www.google.com/maps?q=Makera,Kaduna,Nigeria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full grayscale invert-[0.85]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
