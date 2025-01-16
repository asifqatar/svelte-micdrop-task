import events from "./getEventsForVenue.json";

export function GET() {
  return new Response(JSON.stringify(events), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
