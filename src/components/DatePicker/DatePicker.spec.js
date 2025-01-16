import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import DatePicker from "./DatePicker.svelte";
import { writable } from "svelte/store";

function setupTest() {
  const user = userEvent.setup();
  const selectedDate = writable("");
  const { component } = render(DatePicker, { selectedDate });
  return {
    user,
    component,
    selectedDate,
    datePickerButton: () =>
      screen.getByRole("button", { name: /select date and time/i }),
    todayButton: () => screen.getByRole("button", { name: /today/i }),
    clearButton: () => screen.getByRole("button", { name: /clear/i }),
    dayButton: (day) => screen.getAllByText(day)[0], // Use the first occurrence (likely in the date grid)
    hourButton: (hour) => screen.getAllByText(hour)[1], // Use the correct index for the hour picker
    minuteButton: (minute) => screen.getAllByText(minute)[1], // Use the correct index for the minute picker
    meridiemButton: (meridiem) => screen.getByText(meridiem),
  };
}

describe("DatePicker Component Tests", () => {
  test("Renders DatePicker component correctly", () => {
    const { datePickerButton } = setupTest();
    expect(datePickerButton()).toBeInTheDocument();
    expect(datePickerButton()).toHaveTextContent("Select date and time");
  });

  test("Opens and closes the date picker on button click", async () => {
    const { user, datePickerButton } = setupTest();

    await user.click(datePickerButton());
    expect(
      screen.getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/i
      )
    ).toBeInTheDocument();

    await user.click(datePickerButton());
    await waitFor(() => {
      expect(
        screen.queryByText(
          /January|February|March|April|May|June|July|August|September|October|November|December/i
        )
      ).not.toBeInTheDocument();
    });
  });

  test('Clears the selected date when the "Clear" button is clicked', async () => {
    const { user, datePickerButton, clearButton } = setupTest();

    await user.click(datePickerButton());
    await user.click(clearButton());

    await waitFor(() => {
      expect(datePickerButton()).toHaveTextContent("Select date and time");
    });
  });

  test("Navigates through months correctly", async () => {
    const { user, datePickerButton } = setupTest();

    await user.click(datePickerButton());
    const nextMonthButton = screen.getByAltText("Right icon here");
    const prevMonthButton = screen.getByAltText("Left Icon here");

    const currentMonthText = screen.getByText(
      /January|February|March|April|May|June|July|August|September|October|November|December/i
    ).textContent;

    await user.click(nextMonthButton);
    const nextMonthText = screen.getByText(
      /January|February|March|April|May|June|July|August|September|October|November|December/i
    ).textContent;

    expect(nextMonthText).not.toEqual(currentMonthText);

    await user.click(prevMonthButton);
    const prevMonthText = screen.getByText(
      /January|February|March|April|May|June|July|August|September|October|November|December/i
    ).textContent;

    expect(prevMonthText).toEqual(currentMonthText);
  });
});
