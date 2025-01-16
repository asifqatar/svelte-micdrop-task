import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Notification from "./Notification.svelte";

const notificationsData = [
  {
    id: 1,
    name: "John Doe",
    action: "commented on your",
    event: "post",
    message: "Great job on the project!",
    time: new Date().toISOString(),
    avatar: "https://via.placeholder.com/44",
    statusIcon: "https://via.placeholder.com/16",
  },
  {
    id: 2,
    name: "Jane Smith",
    action: "liked your",
    event: "photo",
    message: null,
    time: new Date(Date.now() - 86400000).toISOString(),
    avatar: "https://via.placeholder.com/44",
    statusIcon: "https://via.placeholder.com/16",
  },
];

describe("Notification Component Tests", () => {
  test("Renders group of notifications correctly", () => {
    render(Notification, { notifications: notificationsData });

    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("Earlier")).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });
  test("Renders notification panel with group title", () => {
    render(Notification, { notifications: notificationsData });

    expect(screen.getByText("Notifications")).toBeInTheDocument();

    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("Earlier")).toBeInTheDocument();
  });

  test("Displays notifications correctly within the group", () => {
    render(Notification, { notifications: notificationsData });
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("Handles empty notifications gracefully", () => {
    render(Notification, { notifications: [] });

    expect(screen.getByText("Notifications")).toBeInTheDocument();

    expect(screen.getByText("No notifications available")).toBeInTheDocument();
  });
});
