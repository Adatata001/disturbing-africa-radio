import * as React from "react";

// Stream is now served by the embedded Caster.fm widget (see LivePlayerBar).
// This context is kept as a lightweight stub so existing UI (Listen Live button,
// EQ bars) keeps working — toggling simply scrolls focus to the live player.

type PlayerCtx = {
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  toggle: () => void;
  setVolume: (v: number) => void;
};

const Ctx = React.createContext<PlayerCtx | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying] = React.useState(false);

  const toggle = React.useCallback(() => {
    if (typeof window === "undefined") return;
    const el = document.getElementById("live-player");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  const setVolume = React.useCallback(() => {}, []);

  return (
    <Ctx.Provider value={{ isPlaying, isLoading: false, volume: 1, toggle, setVolume }}>
      {children}
    </Ctx.Provider>
  );
}

export function usePlayer() {
  const v = React.useContext(Ctx);
  if (!v) throw new Error("usePlayer must be used within PlayerProvider");
  return v;
}
