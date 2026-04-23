import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Disturbing Africa Radio" },
      {
        name: "description",
        content:
          "Disturbing Africa Radio is an Afro Fusion channel spreading the influence of African underground genres. Subsidiary of Dstrb Afrik Global LTD.",
      },
      { property: "og:title", content: "About — Disturbing Africa Radio" },
      {
        property: "og:description",
        content: "Mission, vision and values of Disturbing Africa Radio.",
      },
      { property: "og:image", content: community },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  "Bold Curations — No Safe Playlists",
  "African Sound Diversity",
  "Cultural Integrity",
  "Platform For Emerging Talent",
  "Disruptive Programming",
  "Global Accessibility",
  "Authentic Conversations",
  "Consistency & Quality Control",
  "Community-Driven Growth",
  "Independence From Industry Politics",
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary">
            About the station
          </div>
          <h1 className="display mt-2 text-5xl font-black leading-[0.95] sm:text-7xl">
            We don't<br />
            <span className="text-gradient-brand">play it safe.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Disturbing Africa Radio is an Afro Fusion radio channel that broadcasts the latest
            and freshest from the mainstream and underground genre. We exist to make noise for
            the sounds the algorithm misses.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">
              Mission
            </div>
            <h2 className="display mt-3 text-3xl font-black sm:text-4xl">
              Spread the influence of African underground genres across Africa + the diaspora.
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">
              Vision
            </div>
            <h2 className="display mt-3 text-3xl font-black sm:text-4xl">
              Position African music as a permanent force in global pop culture.
            </h2>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary">
            Core values
          </div>
          <h2 className="display mt-2 text-4xl font-black sm:text-5xl">
            The rules of the signal.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <li
                key={v}
                className="flex items-start gap-3 rounded-lg border border-border bg-background/40 p-4"
              >
                <span className="display flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-black text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1.5 text-sm font-semibold">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CEO + CERT */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">
              CEO Spotlight
            </div>
            <h3 className="display mt-2 text-4xl font-black">Abraham Yusuf</h3>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Leading Disturbing Africa Radio with a vision to make African underground a
              global standard — championing independent artists, bold programming and
              uncompromising quality.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <BadgeCheck className="h-8 w-8 text-secondary" />
            <div className="display mt-3 text-2xl font-black">Certified</div>
            <div className="text-sm text-muted-foreground">9 / 10 / 25</div>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              A subsidiary of{" "}
              <span className="font-bold text-foreground">Dstrb Afrik Global LTD</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
