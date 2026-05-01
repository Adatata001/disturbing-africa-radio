import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Instagram, Mail } from "lucide-react";
import * as React from "react";
import { isOpenNow } from "@/lib/hours";
import { SOCIAL_HANDLE, SOCIALS, TwitterIcon } from "@/lib/socials";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Disturbing Africa Radio" },
      {
        name: "description",
        content:
          "Visit Disturbing Africa Radio at 120 End Street, Doornfontein, Johannesburg. Open daily 5AM - 12AM. Connect via Instagram and Twitter.",
      },
      { property: "og:title", content: "Contact - Disturbing Africa Radio" },
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
          <Reveal direction="up">
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Get in touch
            </div>
            <h1 className="display mt-2 text-5xl sm:text-6xl">
              Visit the <span className="text-gradient-brand">studio.</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Drop a line, follow us on social, or come find us in Johannesburg.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal direction="left">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
                      Studio Address
                    </div>
                    <div className="mt-1 display text-xl">120 End Street, Doornfontein</div>
                    <div className="text-sm text-muted-foreground">Johannesburg, South Africa</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={100}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/15 text-secondary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
                      On Air Hours
                    </div>
                    <div className="mt-1 display text-xl">5:00 AM - 12:00 AM</div>
                    <div className="text-sm text-muted-foreground">Daily, all week</div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                      openNow
                        ? "border-secondary/40 bg-secondary/10 text-secondary"
                        : "border-border bg-muted text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${openNow ? "bg-secondary" : "bg-muted-foreground"}`}
                    />
                    {openNow ? "Open now" : "Closed"}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
                      Email
                    </div>
                    <a
                      href="mailto:madeinafricastudio04@gmail.com"
                      className="mt-1 block display text-xl text-foreground hover:text-primary"
                    >
                      madeinafricastudio04@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div className="text-sm text-muted-foreground">
                Find us on Instagram and Twitter as{" "}
                <span className="font-semibold text-foreground">{SOCIAL_HANDLE}</span>.
              </div>

              <div className="mt-3 flex gap-2">
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-md border border-border p-3 hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={SOCIALS.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="rounded-md border border-border p-3 hover:border-primary hover:text-primary"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                title="Disturbing Africa Radio location"
                src="https://www.google.com/maps?q=120+End+Street,Doornfontein,Johannesburg,South+Africa&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[400px] w-full grayscale invert-[0.85]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
