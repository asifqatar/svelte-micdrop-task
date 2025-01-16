import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import FileDropZone from "./FileDropZone.svelte";

function setupTest(args) {
  const user = userEvent.setup();
  const { component } = render(FileDropZone, { ...args });
  return { user, component };
}

describe("FileDropZone Component Tests", () => {
  test("Renders the component with initial elements", async () => {
    const { user } = setupTest({ existingImages: [] });

    const uploadButton = screen.getByRole("button");
    await user.click(uploadButton);

      expect(screen.getByText(/drop anywhere to upload/i)).toBeInTheDocument();
    expect(
      screen.getByText(/supported : jpg, jpeg, png, mp4, webp, svg, gif/i)
    ).toBeInTheDocument();
  });

  test("Opens file upload modal when upload button is clicked", async () => {
    const { user } = setupTest({});

    const addButton = screen.getByRole("button", { name: /add icon/i });
    await user.click(addButton);

    expect(screen.getByText(/drop anywhere to upload/i)).toBeInTheDocument();
  });

  test("Handles file upload correctly (valid image)", async () => {
    const { user } = setupTest({});

    const mockFile = new File(["image content"], "test.jpg", {
      type: "image/jpeg",
    });

    global.URL.createObjectURL = vi.fn(() => "mockImageURL");

    const input = screen.getByLabelText("file-input");
    await user.upload(input, mockFile);

    expect(screen.getByAltText("uploaded image")).toBeInTheDocument();

    expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockFile);
  });
});
