import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animation direction. Default: "up" */
  direction?: "up" | "left" | "right" | "none";
  /** Delay in ms */
  delay?: number;
  /** As which HTML element to render */
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const offset =
    direction === "up"
      ? "translate-y-8"
      : direction === "left"
        ? "-translate-x-8"
        : direction === "right"
          ? "translate-x-8"
          : "";

  return (
    <Tag
      // @ts-expect-error generic ref typing for polymorphic element
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${offset}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
