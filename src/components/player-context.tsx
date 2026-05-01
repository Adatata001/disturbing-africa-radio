import * as React from "react";

export const STREAM_URL =
  "https://morcast.caster.fm:14234/MsJiE;v=1c394c12057a23f801e415bee5777698";

type PlayerCtx = {
  errorMessage: string | null;
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  toggle: () => void;
  setVolume: (v: number) => void;
};

const Ctx = React.createContext<PlayerCtx | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const hasTriedAutoplayRef = React.useRef(false);
  const timeoutRef = React.useRef<number | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [volume, setVolumeState] = React.useState(0.8);

  const clearLoadTimeout = React.useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const stop = React.useCallback(() => {
    clearLoadTimeout();
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    setIsLoading(false);
    setIsPlaying(false);
  }, [clearLoadTimeout]);

  const start = React.useCallback(
    (autoplay = false) => {
      const audio = audioRef.current;
      if (!audio) return;

      setErrorMessage(null);
      setIsLoading(true);
      audio.src = `${STREAM_URL}?t=${Date.now()}`;

      clearLoadTimeout();
      timeoutRef.current = window.setTimeout(() => {
        stop();
        setErrorMessage("Audio could not be fetched. Please try again later.");
      }, 15_000);

      audio.play().catch((error: unknown) => {
        clearLoadTimeout();
        setIsLoading(false);
        setIsPlaying(false);

        if (
          autoplay &&
          error instanceof DOMException &&
          error.name === "NotAllowedError"
        ) {
          setErrorMessage("Autoplay was blocked by your browser. Tap play to listen live.");
          return;
        }

        setErrorMessage("Audio could not be fetched. Please try again later.");
      });
    },
    [clearLoadTimeout, stop],
  );

  React.useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audio.volume = volume;
    audioRef.current = audio;

    const onPlay = () => {
      setIsPlaying(true);
      setErrorMessage(null);
    };
    const onPause = () => setIsPlaying(false);
    const onPlaying = () => {
      clearLoadTimeout();
      setIsLoading(false);
      setIsPlaying(true);
      setErrorMessage(null);
    };
    const onWaiting = () => setIsLoading(true);
    const onError = () => {
      clearLoadTimeout();
      setIsLoading(false);
      setIsPlaying(false);
      setErrorMessage("Audio could not be fetched. Please try again later.");
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("error", onError);
    audio.addEventListener("stalled", onError);

    if (!hasTriedAutoplayRef.current) {
      hasTriedAutoplayRef.current = true;
      window.setTimeout(() => start(true), 500);
    }

    return () => {
      clearLoadTimeout();
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("stalled", onError);
      audioRef.current = null;
    };
  }, [clearLoadTimeout, start, volume]);

  const toggle = React.useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      stop();
      return;
    }

    start();
  }, [start, stop]);

  const setVolume = React.useCallback((v: number) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v;
  }, []);

  return (
    <Ctx.Provider value={{ errorMessage, isPlaying, isLoading, volume, toggle, setVolume }}>
      {children}
    </Ctx.Provider>
  );
}

export function usePlayer() {
  const v = React.useContext(Ctx);
  if (!v) throw new Error("usePlayer must be used within PlayerProvider");
  return v;
}
