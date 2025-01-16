import { render, screen, fireEvent } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, describe, test, vi } from "vitest";
import Input from "./Input.svelte";

function setupTest(args) {
  const user = userEvent.setup();
  const { component } = render(Input, { ...args });
  return { user, component };
}

describe("Input Component Tests", () => {
  test("Renders input with label", () => {
    setupTest({
      label: "Test Label",
      id: "test-input",
      type: "text",
      placeholder: "Test Placeholder",
    });
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Test Placeholder")).toBeInTheDocument();
  });

  test("Displays error text for invalid email", async () => {
    const { user } = setupTest({
      type: "email",
      id: "test-email",
      errorText: "Please provide a correct Email",
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "invalid-email");
    await fireEvent.blur(input);
    expect(
      screen.getByText("Please provide a correct Email")
    ).toBeInTheDocument();
  });

  test("Does not display error text for valid email", async () => {
    const { user } = setupTest({
      type: "email",
      id: "test-email",
      errorText: "Please provide a correct Email",
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "test@example.com");
    await fireEvent.blur(input);
    expect(
      screen.queryByText("Please provide a correct Email")
    ).not.toBeInTheDocument();
  });

  test("Renders input with icon", () => {
    setupTest({
      type: "text",
      label: "Input with Icon",
      id: "input-with-icon",
      icon: "path/to/icon.svg",
    });
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Handles input changes correctly", async () => {
    const { user } = setupTest({
      type: "text",
      id: "test-input",
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "Test input");
    expect(input.value).toBe("Test input");
  });

  test("Displays hint text", () => {
    setupTest({
      type: "text",
      id: "test-input",
      hintText: "This is a hint text",
    });
    expect(screen.getByText("This is a hint text")).toBeInTheDocument();
  });

  test("Textarea renders correctly", () => {
    setupTest({
      type: "textarea",
      id: "test-textarea",
      label: "Test Textarea",
      placeholder: "Enter text here",
    });
    expect(screen.getByLabelText("Test Textarea")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter text here")).toBeInTheDocument();
  });

  test("Input can be disabled", () => {
    setupTest({
      type: "text",
      id: "test-input",
      disabled: true,
    });
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  test("Displays optional text", () => {
    setupTest({
      type: "text",
      id: "test-input",
      label: "Test Label",
      optional: true,
    });
    expect(screen.getByText("(optional)")).toBeInTheDocument();
  });

  test("Applies correct size class", () => {
    setupTest({
      type: "text",
      id: "test-input",
      size: "large",
    });
    expect(screen.getByRole("textbox")).toHaveClass("w-96");
  });

  test("Applies correct content float class", () => {
    setupTest({
      type: "text",
      id: "test-input",
      contentFloat: "center",
    });
    expect(screen.getByRole("textbox")).toHaveClass("text-center");
  });

  test("Handles max length", async () => {
    const { user } = setupTest({
      type: "text",
      id: "test-input",
      maxlength: 5,
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "123456");
    expect(input.value).toBe("12345");
  });

  test("Displays custom error message for empty required input on blur", async () => {
    const { user } = setupTest({
      type: "text",
      id: "required-input",
      required: true,
      errorText: "This field is required.",
    });
    const input = screen.getByRole("textbox");
    await fireEvent.blur(input);
    expect(screen.getByText("This field is required.")).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-required", "true");
  });

  test("Renders correct placeholder for textarea", () => {
    setupTest({
      type: "textarea",
      id: "test-textarea",
      placeholder: "Textarea Placeholder",
    });
    expect(
      screen.getByPlaceholderText("Textarea Placeholder")
    ).toBeInTheDocument();
  });

  test("Formats credit card number correctly", async () => {
    const { user } = setupTest({
      type: "creditCardNumber",
      id: "credit-card-input",
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "1234567812345678");
    expect(input.value).toBe("1234 5678 1234 5678");
  });

  test("Disabled textarea is non-interactive", async () => {
    setupTest({
      type: "textarea",
      id: "disabled-textarea",
      disabled: true,
    });
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
  });

  test("Handles password input type correctly", async () => {
    const { user } = setupTest({
      type: "password",
      id: "password-input",
    });
    const input = screen.getByPlaceholderText("");
    await user.type(input, "securepassword");
    expect(input.value).toBe("securepassword");
    expect(input.type).toBe("password");
  });

  test("Applies correct class for small size input", () => {
    setupTest({
      type: "text",
      id: "small-size-input",
      size: "small",
    });
    expect(screen.getByRole("textbox")).toHaveClass("w-52");
  });

  test("Input adheres to maxlength attribute", async () => {
    const { user } = setupTest({
      type: "text",
      id: "maxlength-input",
      maxlength: 10,
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "This text is way too long");
    expect(input.value).toBe("This text ");
  });

  test("Number input type accepts only numeric values", async () => {
    const { user } = setupTest({
      type: "number",
      id: "number-input",
    });
    const input = screen.getByRole("spinbutton");
    await user.type(input, "123abc456");
    expect(input.value).toBe("123456");
  });

  test("Search input type functions correctly", async () => {
    const { user } = setupTest({
      type: "search",
      id: "search-input",
      placeholder: "Search here",
    });
    const input = screen.getByPlaceholderText("Search here");
    await user.type(input, "query");
    expect(input.value).toBe("query");
  });

  test("Displays error text when input is shorter than minlength", async () => {
    const { user } = setupTest({
      type: "text",
      id: "minlength-input",
      minlength: 5,
      errorText: "Input is too short",
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "123");
    await fireEvent.blur(input);
    expect(screen.getByText("Input is too short")).toBeInTheDocument();
  });

  test("Formats phone number correctly", async () => {
    const { user } = setupTest({
      type: "phoneNumber",
      id: "phone-input",
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "1234567890");
    expect(input.value).toBe("123-456-7890");
  });

  test("Displays error message for required input on blur", async () => {
    const { user } = setupTest({
      type: "text",
      id: "required-blur-input",
      required: true,
      errorText: "This field is required.",
    });
    const input = screen.getByRole("textbox");
    await fireEvent.blur(input);
    expect(screen.getByText("This field is required.")).toBeInTheDocument();
  });

  test("Custom class is applied correctly", () => {
    setupTest({
      type: "text",
      id: "custom-class-input",
      className: "custom-class",
    });

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });
});

test("Readonly input cannot be edited", async () => {
  const { user } = setupTest({
    type: "text",
    id: "readonly-input",
    readonly: true,
  });
  const input = screen.getByRole("textbox");
  await user.type(input, "Attempt to change");
  expect(input.value).toBe("");
});

test("Controlled input with button click triggers callback", async () => {
  const onButtonClickMock = vi.fn();

  const { user } = setupTest({
    controlled: true,
    buttonText: "Submit",
    onButtonClick: onButtonClickMock,
  });

  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: /submit/i });

  await user.type(input, "Test value");

  expect(input.value).toBe("Test value");

  await fireEvent.click(button);

  expect(onButtonClickMock).toHaveBeenCalledWith("Test value");
  expect(onButtonClickMock).toHaveBeenCalledTimes(1);
});