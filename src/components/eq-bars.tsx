type Props = {
  active: boolean;
  className?: string;
};

export function EqBars({ active: _active, className }: Props) {
  return (
    <div className={`flex h-5 items-end gap-[3px] ${className ?? ""}`} aria-hidden>
      {[0.4, 0.7, 0.5, 0.9].map((h, i) => (
        <span
          key={i}
          className="block w-[3px] rounded-sm bg-primary"
          style={{ height: `${h * 100}%` }}
        />
      ))}
    </div>
  );
}
