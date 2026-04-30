import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Instagram, Sparkles } from "lucide-react";
import heroDj from "@/assets/hero-dj.jpg";
import showMic from "@/assets/show-mic.jpg";
import showVocal from "@/assets/show-vocal.jpg";
import showVinyl from "@/assets/show-vinyl.jpg";
import community from "@/assets/community.jpg";
import { EqBars } from "@/components/eq-bars";
import { usePlayer } from "@/components/player-context";
import { Reveal } from "@/components/reveal";
import { SOCIAL_HANDLE, SOCIALS, TwitterIcon } from "@/lib/socials";
import {
  SITE_URL,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_TYPE,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_WIDTH,
} from "@/lib/site-meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Disturbing Africa Radio - Listen Live | Afro Fusion" },
      {
        name: "description",
        content:
          "Tune into Disturbing Africa Radio - bold curations of African mainstream and underground sounds. Streaming live daily 5AM-12AM.",
      },
      { property: "og:title", content: "Disturbing Africa Radio - Listen Live" },
      {
        property: "og:description",
        content: "Afro Fusion radio. Bold, underground, unfiltered. Listen live now.",
      },
      { name: "twitter:title", content: "Disturbing Africa Radio - Listen Live" },
      {
        name: "twitter:description",
        content: "Afro Fusion radio. Bold, underground, unfiltered. Listen live now.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:image:secure_url", content: SOCIAL_IMAGE_URL },
      { property: "og:image:type", content: SOCIAL_IMAGE_TYPE },
      { property: "og:image:width", content: SOCIAL_IMAGE_WIDTH },
      { property: "og:image:height", content: SOCIAL_IMAGE_HEIGHT },
      { property: "og:image:alt", content: SOCIAL_IMAGE_ALT },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:image:alt", content: SOCIAL_IMAGE_ALT },
    ],
  }),
  component: HomePage,
});

const FEATURED_SHOWS = [
  {
    name: "Underground Frequencies",
    host: "with DJ Adisa",
    schedule: "Mon - Fri | 8 PM",
    tag: "Afro House",
    image: showMic,
  },
  {
    name: "Voices Of The Continent",
    host: "with Amara K.",
    schedule: "Wed | 6 PM",
    tag: "Talk + Live",
    image: showVocal,
  },
  {
    name: "Crate Diggers",
    host: "with Selecta Bem",
    schedule: "Sat | 10 PM",
    tag: "Vinyl Sets",
    image: showVinyl,
  },
] as const;

const VALUES = [
  "Bold Curations - No Safe Playlists",
  "African Sound Diversity",
  "Cultural Integrity",
  "Platform For Emerging Talent",
  "Disruptive Programming",
  "Global Accessibility",
  "Authentic Conversations",
  "Consistency & Quality Control",
  "Community-Driven Growth",
  "Independence From Industry Politics",
] as const;

function HomePage() {
  const { isPlaying, toggle } = usePlayer();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={heroDj}
            alt="DJ at the decks lit by green and yellow neon"
            width={1600}
            height={1200}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:py-28 lg:grid-cols-12">
          <Reveal direction="left" className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-secondary">
              <Sparkles className="h-3 w-3" />
              Afro Fusion | Mainstream + Underground
            </span>
            <h1 className="display mt-5 text-5xl font-black leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
              Welcome to <span className="text-gradient-brand">Disturbing</span>
              <br />
              Africa Radio
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              The freshest cuts from Africa&apos;s mainstream and underground -
              broadcasting bold, unfiltered sound from Kaduna to the diaspora.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={toggle}
                className="inline-flex animate-gentle-bounce items-center gap-3 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                {isPlaying ? "Now Playing" : "Listen Live"}
                <EqBars active={isPlaying} className="h-4" />
              </button>
              <Link
                to="/shows"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"
              >
                Explore Shows <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="hidden self-end lg:col-span-4 lg:block">
            <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
              <div className="text-[11px] font-bold uppercase tracking-widest text-primary">
                On Air Now
              </div>
              <div className="mt-2 display text-2xl font-black">Underground Frequencies</div>
              <div className="text-sm text-muted-foreground">with DJ Adisa</div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">Afro House | Live</span>
                <EqBars active={isPlaying} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="overflow-hidden py-6">
          <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-8 pr-8">
                <span>Spread the Influence of African Underground Genres</span>
                <span aria-hidden>★</span>
                <span>Bold Curations</span>
                <span aria-hidden>★</span>
                <span>No Safe Playlists</span>
                <span aria-hidden>★</span>
                <span>Cultural Integrity</span>
                <span aria-hidden>★</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">
              Featured
            </div>
            <h2 className="display mt-2 text-4xl font-black sm:text-5xl">Shows on rotation</h2>
          </div>
          <Link
            to="/shows"
            className="hidden items-center gap-1 text-sm font-bold uppercase tracking-wider text-primary hover:underline sm:inline-flex"
          >
            All shows <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURED_SHOWS.map((show, i) => (
            <Reveal key={show.name} direction="up" delay={i * 120}>
              <article
                className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
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
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">
                    {show.schedule}
                  </div>
                  <h3 className="display mt-2 text-2xl font-black">{show.name}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{show.host}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal direction="left" className="lg:col-span-4">
              <div className="text-xs font-bold uppercase tracking-widest text-secondary">
                What we stand for
              </div>
              <h2 className="display mt-2 text-4xl font-black leading-[0.95] sm:text-5xl">
                Ten rules.
                <br />
                <span className="text-primary">No compromises.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Our core values keep the signal pure - from selection to broadcast.
              </p>
            </Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {VALUES.map((value, i) => (
                <Reveal key={value} direction="right" delay={i * 60}>
                  <li
                    className="flex items-start gap-3 rounded-lg border border-border bg-background/40 p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="display flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-black text-primary-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1.5 text-sm font-semibold text-foreground">{value}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal direction="left" className="relative overflow-hidden rounded-xl border border-border">
            <img
              src={community}
              alt="Crowd at an underground music event with green and yellow stage lights"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal direction="right">
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">
              Our vision
            </div>
            <h2 className="display mt-2 text-4xl font-black leading-[0.95] sm:text-6xl">
              United voices.
              <br />
              <span className="text-gradient-brand">Limitless stories.</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              We position African music as a permanent force in global pop culture -
              building a platform for emerging talent, authentic conversations, and
              disruptive programming.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:underline"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-secondary/15 p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Follow the movement
              </div>
              <h2 className="display mt-2 text-3xl sm:text-4xl">
                Support the signal. Power the sound.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Follow <span className="font-semibold text-foreground">{SOCIAL_HANDLE}</span> on
                Instagram and Twitter to keep independent African radio on air.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex animate-gentle-bounce items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary"
              >
                <HeartHandshake className="h-4 w-4" /> Tip the Studio
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href={SOCIALS.twitter}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"
              >
                <TwitterIcon className="h-4 w-4" /> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
