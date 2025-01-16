import Data from "./EventsData.json";

export function GET() {
  return new Response(JSON.stringify(Data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
