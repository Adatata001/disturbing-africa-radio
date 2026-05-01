// Caster.fm embedded stream player. Replaces the previous custom HTML5 audio bar.
export function LivePlayerBar() {
  return (
    <div
      id="live-player"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto max-w-7xl px-2 py-2 sm:px-4">
        <iframe
          title="Disturbing Africa Radio - Live Stream"
          src="https://hub.cloud.caster.fm/public/widgets/streamPlayer?token=6c5ebe42-6006-4934-bf0a-b7351f2fed98&theme=dark&color=e81e4d"
          width="100%"
          height="80"
          frameBorder={0}
          allow="autoplay"
          className="block w-full rounded-md border border-border bg-card"
        />
      </div>
    </div>
  );
}
