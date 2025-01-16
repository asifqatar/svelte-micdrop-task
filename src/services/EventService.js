import { startOfWeek, addDays } from "date-fns";

let mockEvents = [];

export async function fetchEventsFromAPI() {
  try {
    const response = await fetch("/api/getEventsForVenue");
    if (response.ok) {
      const events = await response.json();
      console.log("Fetched events:", events);
      return events.map((event) => ({
        id: event.ID,
        date: event.startDateTime,
        title: event.title,
      }));
    } else {
      console.error("Failed to load events:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function fetchEventsForMonth(year, month) {
  mockEvents = await fetchEventsFromAPI();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockEvents.filter((event) =>
          event.date.startsWith(`${year}-${String(month).padStart(2, "0")}`)
        )
      );
    }, 500);
  });
}

export async function fetchEventsForWeek(date) {
  mockEvents = await fetchEventsFromAPI();

  const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 });
  const endOfWeekDate = addDays(startOfWeekDate, 6);

  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredEvents = mockEvents.filter((event) => {
        const eventDate = new Date(event.date).getTime();
        return (
          eventDate >= startOfWeekDate.getTime() &&
          eventDate <= endOfWeekDate.getTime()
        );
      });
      resolve(filteredEvents);
    }, 500);
  });
}

export async function fetchEventsForDay(date) {
  mockEvents = await fetchEventsFromAPI();

  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredEvents = mockEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getUTCDate() === date.getUTCDate() &&
          eventDate.getUTCMonth() === date.getUTCMonth() &&
          eventDate.getUTCFullYear() === date.getUTCFullYear()
        );
      });
      resolve(filteredEvents);
    }, 500);
  });
}
