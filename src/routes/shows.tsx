import { createFileRoute } from "@tanstack/react-router";
import showMic from "@/assets/show-mic.jpg";
import showVocal from "@/assets/show-vocal.jpg";
import showVinyl from "@/assets/show-vinyl.jpg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/shows")({
  head: () => ({
    meta: [
      { title: "Shows & Schedule - Disturbing Africa Radio" },
      {
        name: "description",
        content:
          "Weekly schedule and roster of shows on Disturbing Africa Radio - new music, dancehall, throwbacks, hip hop, underground sounds and Sunday School.",
      },
      { property: "og:title", content: "Shows & Schedule - Disturbing Africa Radio" },
      {
        property: "og:description",
        content: "See what's on air this week on Disturbing Africa Radio.",
      },
    ],
  }),
  component: ShowsPage,
});

const SCHEDULE = [
  { day: "Monday", show: "New Music Monday", tag: "New Music" },
  { day: "Tuesday", show: "Dancehall Riddim", tag: "Dancehall" },
  { day: "Wednesday", show: "New Music Wednesday", tag: "New Music" },
  { day: "Thursday", show: "Throwback Thursday", tag: "Throwback" },
  { day: "Friday", show: "Hip Hop Friday", tag: "Hip Hop" },
  { day: "Saturday", show: "Underground", tag: "Underground" },
  { day: "Sunday", show: "Sunday School", tag: "Sunday" },
];

const ROSTER = [
  {
    name: "New Music Monday",
    host: "New Music Monday",
    desc: "Fresh releases and new discoveries to start the week with the newest sounds.",
    tag: "New Music",
    image: showMic,
  },
  {
    name: "Dancehall Riddim",
    host: "Dancehall Riddim",
    desc: "Dancehall energy, riddims, and island heat in the Disturbing Africa mix.",
    tag: "Dancehall",
    image: showVocal,
  },
  {
    name: "New Music Wednesday",
    host: "New Music Wednesday",
    desc: "Midweek drops, discoveries, and fresh rotations from the continent and diaspora.",
    tag: "New Music",
    image: showVinyl,
  },
  {
    name: "Throwback Thursday",
    host: "Throwback Thursday",
    desc: "Classic records, remembered moments, and throwback sounds with lasting influence.",
    tag: "Throwback",
    image: showVocal,
  },
  {
    name: "Hip Hop Friday",
    host: "Hip Hop Friday",
    desc: "Hip hop selections for the Friday signal, from street records to major anthems.",
    tag: "Hip Hop",
    image: showVinyl,
  },
  {
    name: "Underground",
    host: "Underground",
    desc: "Raw underground selections and independent sounds outside the usual rotation.",
    tag: "Underground",
    image: showMic,
  },
  {
    name: "Sunday School",
    host: "Sunday School",
    desc: "A Sunday reset with reflective selections, feel-good records, and soulful radio energy.",
    tag: "Sunday",
    image: showVocal,
  },
];

function ShowsPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Reveal direction="up">
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">
              Programming
            </div>
            <h1 className="display mt-2 text-5xl font-black sm:text-6xl">
              Shows & <span className="text-gradient-brand">Schedule</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Weekly themed programming from new music to dancehall, throwbacks, hip hop,
              underground sounds, and Sunday School.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SCHEDULE GRID */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <Reveal direction="up">
          <div className="overflow-x-auto rounded-xl border border-border bg-card/40">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-background/40">
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Day
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Show
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Presenter
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Format
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((slot) => (
                  <tr key={slot.day} className="border-b border-border last:border-0">
                    <td className="p-4 align-top">
                      <div className="display text-lg font-black text-primary">{slot.day}</div>
                    </td>
                    <td className="p-3 align-top">
                      <div className="rounded-md border border-border bg-background/40 p-3 transition-colors hover:border-primary/40">
                        <div className="text-xs font-bold text-foreground">{slot.show}</div>
                        <div className="mt-0.5 text-[11px] text-muted-foreground">
                          Weekly Rotation
                        </div>
                      </div>
                    </td>
                    <td className="p-3 align-top">
                      <div className="rounded-md border border-border bg-background/40 p-3 transition-colors hover:border-primary/40">
                        <div className="text-xs font-bold text-foreground">{slot.show}</div>
                        <div className="mt-0.5 text-[11px] text-muted-foreground">Presenter</div>
                      </div>
                    </td>
                    <td className="p-3 align-top">
                      <div className="rounded-md border border-secondary/30 bg-secondary/10 p-3 transition-colors">
                        <div className="text-xs font-bold text-foreground">{slot.tag}</div>
                        <div className="mt-0.5 text-[11px] text-muted-foreground">
                          Disturbing Africa Radio
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ROSTER */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <Reveal direction="up">
          <h2 className="display text-3xl font-black sm:text-4xl">The Roster</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROSTER.map((show, i) => (
            <Reveal key={show.name} direction="up" delay={(i % 3) * 100}>
              <article className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={show.image}
                    alt={show.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    {show.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="display text-xl font-black">{show.name}</h3>
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">
                    with {show.host}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{show.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
