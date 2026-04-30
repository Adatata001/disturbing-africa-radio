const WAT_TIME_ZONE = "Africa/Lagos";

function getWatHour(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: WAT_TIME_ZONE,
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  return Number(parts.find((part) => part.type === "hour")?.value || 0);
}

// Station hours: 5am to 12am WAT. Off air from 12:00am to 4:59am WAT.
export function isOpenNow(date = new Date()): boolean {
  const h = getWatHour(date);
  return h >= 5 && h < 24;
}
