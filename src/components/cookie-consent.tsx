import * as React from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "dar-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-20 z-50 px-3 sm:bottom-24 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-lg border border-border bg-card/95 p-4 shadow-glow backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-foreground">
            We use cookies to keep the stream smooth and understand how you use the site.
            By clicking <span className="font-semibold">Accept</span>, you agree to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => decide("declined")}
            className="text-muted-foreground"
          >
            Decline
          </Button>
          <Button size="sm" onClick={() => decide("accepted")} className="font-bold uppercase">
            Accept
          </Button>
          <button
            type="button"
            onClick={() => decide("declined")}
            aria-label="Close"
            className="ml-1 rounded-sm p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
