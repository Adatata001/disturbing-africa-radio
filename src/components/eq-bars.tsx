type Props = {
  active: boolean;
  className?: string;
};

const BAR_HEIGHTS = ["35%", "60%", "85%", "50%"] as const;

export function EqBars({ active, className }: Props) {
  return (
    <div className={`flex h-5 items-end gap-[3px] ${className ?? ""}`} aria-hidden>
      {BAR_HEIGHTS.map((height, i) => (
        <span
          key={i}
          className={`block w-[3px] rounded-sm ${active ? "bg-primary" : "bg-primary/40"}`}
          style={{ height }}
        />
      ))}
    </div>
  );
}
