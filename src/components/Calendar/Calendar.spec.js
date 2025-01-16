import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import Calendar from "./Calendar.svelte";

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        {
          title: "Sample Event",
          startDateTime: "2024-10-03T10:00:00Z",
          endDateTime: "2024-10-03T11:00:00Z",
          description: "This is a sample event",
        },
      ]),
    })
  );
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("Calendar Component", () => {

  test("Renders day headers correctly", () => {
    render(Calendar);
    const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayHeaders.forEach(day => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test("Displays correct number of days in the month", async () => {
    render(Calendar);
    await waitFor(() => {
      const dayElements = screen.getAllByText(/\d+/);
      expect(dayElements.length).toBeGreaterThan(0);
    });
  });

  test("Displays 'Schedule' button on hover when isScheduledBtn is true", async () => {
    render(Calendar, { isScheduledBtn: true });

    const dayButton = screen.getByText("3");
    await userEvent.hover(dayButton);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /schedule/i })).toBeInTheDocument();
    });
  });

  test("Hides 'Schedule' button when not hovering", async () => {
    render(Calendar, { isScheduledBtn: true });

    const dayButton = screen.getByText("3");
    await userEvent.hover(dayButton);
    await userEvent.unhover(dayButton);

    await waitFor(() => {
      expect(screen.queryByRole("button", { name: /schedule/i })).not.toBeInTheDocument();
    });
  });
});
