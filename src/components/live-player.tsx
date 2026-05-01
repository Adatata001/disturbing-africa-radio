import * as React from "react";

// Caster.fm official embed widget. Loads the embed.js script once and renders
// the widget container — Caster.fm's script then upgrades it into a full player.
export function LivePlayerBar() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const SCRIPT_SRC = "https://cdn.cloud.caster.fm/widgets/embed.js";
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );

    // Reset the rendered flag so the script re-processes on remount (route changes).
    if (containerRef.current) {
      containerRef.current.setAttribute("data-rendered", "false");
    }

    if (!existing) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Script already loaded — try to re-trigger render if the widget exposes a global.
      const w = window as unknown as { CasterEmbed?: { render?: () => void } };
      if (w.CasterEmbed?.render) {
        try {
          w.CasterEmbed.render();
        } catch {
          /* noop */
        }
      }
    }
  }, []);

  return (
    <div
      id="live-player"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto max-w-7xl px-2 py-2 sm:px-4">
        <div
          ref={containerRef}
          data-type="newStreamPlayer"
          data-publictoken="6c5ebe42-6006-4934-bf0a-b7351f2fed98"
          data-theme="light"
          data-color="e81e4d"
          data-channelid=""
          data-rendered="false"
          className="cstrEmbed block w-full rounded-md border border-border bg-card p-2"
        >
          <a href="https://www.caster.fm" className="sr-only">
            Shoutcast Hosting
          </a>
        </div>
      </div>
    </div>
  );
}
