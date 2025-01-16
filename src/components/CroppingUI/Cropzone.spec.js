import { render, screen, fireEvent } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, test, vi, expect } from "vitest";
import Cropzone from "./Cropzone.svelte";

function setupTest(args = {}) {
  const user = userEvent.setup();
  const { component } = render(Cropzone, { ...args });
  return { user, component };
}

describe("Cropzone Component Tests", () => {
  test("Renders default cropzone with upload button", () => {
    setupTest({ existingImage: "", readonly: false, shape: "rect" });

    const uploadButton = screen.getByRole("button", { name: /add icon/i });
    expect(uploadButton).toBeInTheDocument();
  });

  test("Displays existing image if provided", () => {
    const existingImageUrl = "https://via.placeholder.com/150";
    setupTest({
      existingImage: existingImageUrl,
      shape: "rect",
      readonly: false,
    });

    const uploadedImage = screen.getByAltText("uploaded image");
    expect(uploadedImage).toBeInTheDocument();
    expect(uploadedImage.src).toBe(existingImageUrl);
  });

  test("Readonly mode does not show upload button", () => {
    setupTest({
      existingImage: "https://via.placeholder.com/150",
      readonly: true,
      shape: "rect",
    });

    const uploadButton = screen.queryByRole("button", { name: /add icon/i });
    expect(uploadButton).toBeNull(); // Button should not be in the document
  });

  test("Opens file upload modal when upload button is clicked", async () => {
    const { user } = setupTest({ readonly: false });

    const uploadButton = screen.getByRole("button", { name: /add icon/i });
    await user.click(uploadButton);

    expect(screen.getByText(/drop anywhere to upload/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Supported: JPG, JPEG, PNG, Webp/i)
    ).toBeInTheDocument();
  });

  test("Handles file upload correctly", async () => {
    const { user } = setupTest();

    const mockFile = new File(["image content"], "test.jpg", {
      type: "image/jpeg",
    });

    global.URL.createObjectURL = vi.fn(() => "mockImageURL");

    const input = screen.getByLabelText("file-input");
    await user.upload(input, mockFile);

    expect(screen.getByAltText("uploaded image")).toBeInTheDocument();
    expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockFile);
  });

  test("Cancels deletion process", async () => {
    const { user } = setupTest({
      existingImage: "https://via.placeholder.com/150",
      shape: "rect",
    });

    const deleteButton = screen.getByRole("button", {
      name: /close button img/i,
    });
    await user.click(deleteButton);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await user.click(cancelButton);

    const uploadedImage = screen.getByAltText("uploaded image");
    expect(uploadedImage).toBeInTheDocument();
  });
});
