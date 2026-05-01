import * as React from "react";

// Caster.fm embedded stream player using their official widget script.
export function LivePlayerBar() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Load the Caster.fm embed script once
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="cdn.cloud.caster.fm"][src*="embed.js"]',
    );

    const initWidget = () => {
      // The embed script scans for .cstrEmbed elements and renders the player.
      // Re-trigger if available.
      const w = window as unknown as { cstrEmbed?: { render?: () => void } };
      if (w.cstrEmbed?.render) {
        try {
          w.cstrEmbed.render();
        } catch {
          /* noop */
        }
      }
    };

    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://cdn.cloud.caster.fm/widgets/embed.js";
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      initWidget();
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
          className="cstrEmbed"
          data-type="newStreamPlayer"
          data-publictoken="6c5ebe42-6006-4934-bf0a-b7351f2fed98"
          data-theme="dark"
          data-color="e81e4d"
          data-channelid=""
          data-rendered="false"
        />
      </div>
    </div>
  );
}
