import * as React from "react";

export const CASTER_PLAYER_URL =
  "https://widgets.cloud.caster.fm/player/?token=6c5ebe42-6006-4934-bf0a-b7351f2fed98&theme=dark&color=f5d000";

type PlayerCtx = {
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  toggle: () => void;
  setVolume: (v: number) => void;
};

const Ctx = React.createContext<PlayerCtx | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [volume, setVolumeState] = React.useState(0.8);

  const toggle = React.useCallback(() => {
    if (typeof window === "undefined") return;
    window.open(CASTER_PLAYER_URL, "disturbing-africa-player", "popup,width=420,height=720");
  }, []);

  const setVolume = React.useCallback((v: number) => {
    setVolumeState(v);
  }, []);

  return (
    <Ctx.Provider value={{ isPlaying: false, isLoading: false, volume, toggle, setVolume }}>
      {children}
    </Ctx.Provider>
  );
}

export function usePlayer() {
  const v = React.useContext(Ctx);
  if (!v) throw new Error("usePlayer must be used within PlayerProvider");
  return v;
}
