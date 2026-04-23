// Station hours: 5am — 12am (midnight). Open from 05:00 to 24:00.
export function isOpenNow(date = new Date()): boolean {
  const h = date.getHours();
  return h >= 5 && h < 24;
}
