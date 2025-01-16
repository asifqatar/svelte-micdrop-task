import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, test, vi, expect } from "vitest";
import Form from "./Form.svelte";

function setupTest() {
  const user = userEvent.setup();
  const { component } = render(Form);
  return { user, component };
}

describe("Form Component Tests", () => {
  test("Renders all input fields and submit button", () => {
    setupTest();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone")).toBeInTheDocument();
    expect(screen.getByLabelText("Stage name (optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Location")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Save changes/i })).toBeInTheDocument();
  });

  test("Submits form with valid data", async () => {
    const { user } = setupTest();

    const formData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      stageName: "",
      location: "New York, USA",
    };

    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email address");
    const phoneInput = screen.getByLabelText("Phone");
    const stageNameInput = screen.getByLabelText("Stage name (optional)");
    const locationInput = screen.getByLabelText("Location");
    const submitButton = screen.getByRole("button", { name: /Save changes/i });

    const consoleSpy = vi.spyOn(console, "log");
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    await user.type(firstNameInput, formData.firstName);
    await user.type(lastNameInput, formData.lastName);
    await user.type(emailInput, formData.email);
    await user.type(phoneInput, formData.phone);

    if (formData.stageName) {
      await user.type(stageNameInput, formData.stageName);
    }

    await user.type(locationInput, formData.location);

    await user.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith("Form Submitted:", formData);
    expect(alertSpy).toHaveBeenCalledWith("Form submitted successfully!");

    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });
});
