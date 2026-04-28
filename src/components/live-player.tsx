import { Play, Pause, Volume2, Loader2, Radio } from "lucide-react";
import { usePlayer } from "./player-context";
import { EqBars } from "./eq-bars";

export function LivePlayerBar() {
  const { isPlaying, isLoading, volume, toggle, setVolume } = usePlayer();

  return (
    <div
      id="live-player"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-5">
        <button
          onClick={toggle}
          aria-label={isPlaying ? "Pause live stream" : "Play live stream"}
          className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 active:scale-95"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" />
          )}
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full border border-secondary/40 bg-secondary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-secondary">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
            Live
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Radio className="h-3.5 w-3.5 text-primary" />
              <span className="truncate">Disturbing Africa Radio</span>
            </div>
            <div className="truncate text-xs text-muted-foreground">
              {isLoading
                ? "Connecting to stream…"
                : isPlaying
                  ? "Now playing — Afro Fusion live"
                  : "Press play to tune in"}
            </div>
          </div>
          <div className="ml-auto hidden sm:block">
            <EqBars active={isPlaying} />
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
}
