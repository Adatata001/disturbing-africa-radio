import { createFileRoute } from "@tanstack/react-router";
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
  { day: "Monday", show: "New Music Monday" },
  { day: "Tuesday", show: "Dancehall Riddim" },
  { day: "Wednesday", show: "New Music Wednesday" },
  { day: "Thursday", show: "Throwback Thursday" },
  { day: "Friday", show: "Hip Hop Friday" },
  { day: "Saturday", show: "Underground" },
  { day: "Sunday", show: "Sunday School" },
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
            <table className="w-full min-w-[640px] text-left text-sm">
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
                      <div className="rounded-md border border-secondary/30 bg-secondary/10 p-3 transition-colors">
                        <div className="text-xs font-bold text-foreground">Abraham Yusuf</div>
                        <div className="mt-0.5 text-[11px] text-muted-foreground">
                          Presenter
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
    </div>
  );
}
