import { render, screen, fireEvent } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, describe, test, vi } from "vitest";
import DateRangePicker from "./DateRangePicker.svelte"; 

function setupTest(args) {
  const user = userEvent.setup();
  const { component } = render(DateRangePicker, { ...args });
  return { user, component };
}

describe("DateRangePicker Component Tests", () => {
  test("Renders the date picker button", () => {
    setupTest({});
    expect(screen.getByText("Select Date Range")).toBeInTheDocument();
  });

  test("Opens the date picker when the button is clicked", async () => {
    const { user } = setupTest({});
    const button = screen.getByText("Select Date Range");
    await user.click(button);
    expect(screen.getByText("Last 30 days")).toBeInTheDocument();
  });

  test("Closes the date picker when Apply is clicked", async () => {
    const { user } = setupTest({});
    const button = screen.getByText("Select Date Range");
    await user.click(button);
    expect(screen.getByText("Apply")).toBeInTheDocument();
    const applyButton = screen.getByText("Apply");
    await user.click(applyButton);
    expect(screen.queryByText("Last 30 days")).not.toBeInTheDocument();
  });

  test("Cancels date selection and closes the date picker", async () => {
    const { user } = setupTest({});
    const button = screen.getByText("Select Date Range");
    await user.click(button);
    const cancelButton = screen.getByText("Cancel");
    await user.click(cancelButton);
    expect(screen.queryByText("Last 30 days")).not.toBeInTheDocument();
    expect(screen.getByText("Select Date Range")).toBeInTheDocument();
  });

  test("Correctly selects a date range option", async () => {
    const { user } = setupTest({});
    const button = screen.getByText("Select Date Range");
    await user.click(button);
    const option = screen.getByText("Last 7 days");
    await user.selectOptions(screen.getByRole("combobox"), option);
    expect(screen.getByDisplayValue("Last 7 days")).toBeInTheDocument();
  });

  test("Correctly highlights the selected date range", async () => {
    const { user } = setupTest({});
    const button = screen.getByText("Select Date Range");
    await user.click(button);
    const dayButton = screen.getAllByText("1")[0];
    await user.click(dayButton);
    const endDayButton = screen.getAllByText("7")[0];
    await user.click(endDayButton);
    expect(dayButton).toHaveClass("bg-[#0284fe]");
    expect(endDayButton).toHaveClass("bg-[#0284fe]");
  });
});
