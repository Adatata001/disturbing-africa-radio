import { createFileRoute } from "@tanstack/react-router";
import community from "@/assets/community.jpg";
import { Reveal } from "@/components/reveal";

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
          <Reveal direction="up">
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
          </Reveal>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal direction="left">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-primary">
                Mission
              </div>
              <h2 className="display mt-3 text-3xl font-black sm:text-4xl">
                Spread the influence of African underground genres across Africa + the diaspora.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-secondary">
                Vision
              </div>
              <h2 className="display mt-3 text-3xl font-black sm:text-4xl">
                Position African music as a permanent force in global pop culture.
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <Reveal direction="up">
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">
              Core values
            </div>
            <h2 className="display mt-2 text-4xl font-black sm:text-5xl">
              The rules of the signal.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v} direction="up" delay={(i % 3) * 80}>
                <li
                  className="flex items-start gap-3 rounded-lg border border-border bg-background/40 p-4"
                >
                  <span className="display flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-black text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1.5 text-sm font-semibold">{v}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SUBSIDIARY */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Reveal direction="up">
          <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">
              The label behind the signal
            </div>
            <h3 className="display mt-2 text-4xl font-black">Dstrb Afrik Global LTD</h3>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Disturbing Africa Radio is a subsidiary of Dstrb Afrik Global LTD —
              championing independent African artists, bold programming and
              uncompromising quality.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
