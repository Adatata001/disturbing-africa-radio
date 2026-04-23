import { createFileRoute } from "@tanstack/react-router";
import showMic from "@/assets/show-mic.jpg";
import showVocal from "@/assets/show-vocal.jpg";
import showVinyl from "@/assets/show-vinyl.jpg";

export const Route = createFileRoute("/shows")({
  head: () => ({
    meta: [
      { title: "Shows & Schedule — Disturbing Africa Radio" },
      {
        name: "description",
        content:
          "Weekly schedule and roster of shows on Disturbing Africa Radio — Afro House, Talk, Vinyl sessions and more.",
      },
      { property: "og:title", content: "Shows & Schedule — Disturbing Africa Radio" },
      {
        property: "og:description",
        content: "See what's on air this week. Live programming daily from 5AM to 12AM.",
      },
    ],
  }),
  component: ShowsPage,
});

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const SLOTS = [
  { time: "06:00", label: "Morning Pulse" },
  { time: "10:00", label: "Continental Mix" },
  { time: "14:00", label: "Afternoon Drift" },
  { time: "18:00", label: "Voices" },
  { time: "20:00", label: "Underground Frequencies" },
  { time: "22:00", label: "Late Night Crate" },
];

const ROSTER = [
  {
    name: "Underground Frequencies",
    host: "DJ Adisa",
    desc: "A nightly deep-dive into Afro House, Amapiano edits, and unreleased dubs.",
    tag: "Afro House",
    image: showMic,
  },
  {
    name: "Voices Of The Continent",
    host: "Amara K.",
    desc: "Live conversations with artists, curators and culture builders shaping African sound.",
    tag: "Talk + Live",
    image: showVocal,
  },
  {
    name: "Crate Diggers",
    host: "Selecta Bem",
    desc: "Vinyl-only sets pulling from Highlife, Afrobeat and rare Nigerian boogie.",
    tag: "Vinyl",
    image: showVinyl,
  },
  {
    name: "Morning Pulse",
    host: "Tomi & Ife",
    desc: "Wake up with fresh drops, news from the scene and listener shoutouts.",
    tag: "Daily",
    image: showVocal,
  },
  {
    name: "Continental Mix",
    host: "Rotating Selectors",
    desc: "Pan-African selections — from Lagos to Nairobi, Dakar to Joburg.",
    tag: "Mix",
    image: showVinyl,
  },
  {
    name: "Late Night Crate",
    host: "Nyx",
    desc: "After-hours frequencies for the night owls. Experimental, ambient, raw.",
    tag: "Late",
    image: showMic,
  },
];

function ShowsPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary">
            Programming
          </div>
          <h1 className="display mt-2 text-5xl font-black sm:text-6xl">
            Shows & <span className="text-gradient-brand">Schedule</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Live programming daily from 5:00 AM to 12:00 AM. All times West Africa Time (WAT).
          </p>
        </div>
      </section>

      {/* SCHEDULE GRID */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="overflow-x-auto rounded-xl border border-border bg-card/40">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-background/40">
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Time
                </th>
                {DAYS.map((d) => (
                  <th
                    key={d}
                    className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SLOTS.map((slot) => (
                <tr key={slot.time} className="border-b border-border last:border-0">
                  <td className="p-4 align-top">
                    <div className="display text-lg font-black text-primary">{slot.time}</div>
                  </td>
                  {DAYS.map((d) => {
                    const isWeekend = d === "Sat" || d === "Sun";
                    return (
                      <td key={d} className="p-3 align-top">
                        <div
                          className={`rounded-md border p-3 transition-colors ${
                            isWeekend
                              ? "border-secondary/30 bg-secondary/10"
                              : "border-border bg-background/40 hover:border-primary/40"
                          }`}
                        >
                          <div className="text-xs font-bold text-foreground">
                            {slot.label}
                          </div>
                          <div className="mt-0.5 text-[11px] text-muted-foreground">
                            {isWeekend ? "Weekend Edit" : "Weekday"}
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ROSTER */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="display text-3xl font-black sm:text-4xl">The Roster</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROSTER.map((show) => (
            <article
              key={show.name}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
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
          ))}
        </div>
      </section>
    </div>
  );
}
