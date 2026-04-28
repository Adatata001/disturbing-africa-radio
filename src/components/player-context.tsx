import * as React from "react";

export const STREAM_URL = "/disturbing-africa-test-audio.wav";

type PlayerCtx = {
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  toggle: () => void;
  setVolume: (v: number) => void;
};

const Ctx = React.createContext<PlayerCtx | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [volume, setVolumeState] = React.useState(0.8);

  React.useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.crossOrigin = "anonymous";
    audio.volume = volume;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };
    const onWaiting = () => setIsLoading(true);
    const onPlaying = () => setIsLoading(false);
    const onError = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("error", onError);

    // Attempt autoplay on load. Browsers may block until user interacts.
    audio.src = STREAM_URL + "?t=" + Date.now();
    setIsLoading(true);
    const attempt = audio.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        setIsLoading(false);
        setIsPlaying(false);
        // Fallback: start on first user interaction anywhere on the page.
        const resume = () => {
          audio.play().catch(() => {});
          window.removeEventListener("pointerdown", resume);
          window.removeEventListener("keydown", resume);
        };
        window.addEventListener("pointerdown", resume, { once: true });
        window.addEventListener("keydown", resume, { once: true });
      });
    }

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("error", onError);
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = React.useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // Reload on each play so the latest local test file is used.
      audio.src = STREAM_URL + "?t=" + Date.now();
      setIsLoading(true);
      audio.play().catch(() => {
        setIsLoading(false);
        setIsPlaying(false);
      });
      return;
    }

    audio.pause();
    audio.removeAttribute("src");
    audio.load();
  }, []);

  const setVolume = React.useCallback((v: number) => {
    setVolumeState(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
  }, []);

  return (
    <Ctx.Provider value={{ isPlaying, isLoading, volume, toggle, setVolume }}>
      {children}
    </Ctx.Provider>
  );
}

export function usePlayer() {
  const v = React.useContext(Ctx);
  if (!v) {
    throw new Error("usePlayer must be used within PlayerProvider");
  }
  return v;
}
