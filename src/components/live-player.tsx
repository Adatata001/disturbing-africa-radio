import { ExternalLink, Loader2, Play, Radio } from "lucide-react";
import { EqBars } from "./eq-bars";
import { CASTER_PLAYER_URL, usePlayer } from "./player-context";

export function LivePlayerBar() {
  const { isLoading, toggle } = usePlayer();

  return (
    <div
      id="live-player"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2">
        <button
          onClick={toggle}
          aria-label="Open live player"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Play className="ml-0.5 h-4 w-4" />
          )}
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-secondary/40 bg-secondary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-secondary sm:flex">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
            Live
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Radio className="h-3.5 w-3.5 text-primary" />
              <span className="truncate">Disturbing Africa Radio</span>
            </div>
            <div className="truncate text-xs text-muted-foreground">
              Tap play to open the live radio player
            </div>
          </div>
          <div className="ml-auto hidden sm:block">
            <EqBars active={false} />
          </div>
        </div>

        <a
          href={CASTER_PLAYER_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary sm:inline-flex"
        >
          Player <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
