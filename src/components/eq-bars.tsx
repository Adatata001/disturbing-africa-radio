type Props = {
  active: boolean;
  className?: string;
};

export function EqBars({ active, className }: Props) {
  return (
    <div className={`flex h-5 items-end gap-[3px] ${className ?? ""}`} aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="block w-[3px] rounded-sm bg-primary"
          style={{
            height: "100%",
            animationPlayState: active ? "running" : "paused",
            animationDelay: `${i * 0.12}s`,
            transform: active ? undefined : "scaleY(0.25)",
          }}
        />
      ))}
      <style>{`
        .flex > span { animation: eq 0.9s ease-in-out infinite; transform-origin: bottom; }
      `}</style>
    </div>
  );
}
