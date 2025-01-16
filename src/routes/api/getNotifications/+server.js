import Data from "./NotificationData.json";

export function GET() {
  return new Response(JSON.stringify(Data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
