<script context="module">
  import Notification from "./Notification.svelte";
  import { Template, Story } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Components/Notification",
    component: Notification,
  };

  const sampleNotifications = [
    {
      id: 1,
      avatar: "src/assets/images/Avatar.png",
      name: "Grace Lusk",
      action: "confirmed for",
      event: "Jest Quest",
      status: "confirmed",
      message: "Can I go up early? I have another show at...",
      time: "2024-10-11T00:012:00",
      statusIcon: "src/assets/icons/confirmed.svg",
    },
    {
      id: 2,
      avatar: "src/assets/images/Avatar.png",
      name: "Andy Peters",
      action: "declined for",
      event: "Jest Quest",
      status: "declined",
      message: null,
      time: "2024-10-11T00:06:00",
      statusIcon: "src/assets/icons/declined.svg",
    },
    {
      id: 3,
      avatar: "src/assets/images/Avatar.png",
      name: "All Performers",
      action: "confirmed for",
      event: "Jest Quest",
      status: "confirmed",
      message: "4/4 spots confirmed",
      time: "2024-10-11T00:06:00",
      statusIcon: "src/assets/icons/confirmed.svg",
    },
    {
      id: 4,
      avatar: "src/assets/images/Avatar.png",
      name: "Jest Quest",
      action: "has been published",
      event: "",
      status: "published",
      message: "Ticket sales are now open",
      time: "2024-10-09T10:05:00",
      statusIcon: "src/assets/icons/published.svg",
    },
    {
      id: 5,
      avatar: "src/assets/images/Avatar.png",
      name: "",
      action: "is sold out",
      event: "Jetpack Comedy",
      status: "sold out",
      message: "Ticket sales are now open",
      time: "2024-10-09T10:05:00",
      statusIcon: "src/assets/icons/sold.svg",
    },
    {
      id: 6,
      avatar: "src/assets/images/Avatar.png",
      name: "Message sent",
      action: "to Andy Peters",
      event: "",
      status: "confirmed",
      message: "Status changed to Confirmed",
      time: "2024-10-09T10:05:00",
      statusIcon: "src/assets/icons/confirmed.svg",
    },
    {
      id: 7,
      avatar: "src/assets/images/Avatar.png",
      name: "The Jetpack Comedy Show",
      action: "just sold out",
      event: "",
      status: "sold out",
      message: "Thursday, 8:30pm",
      time: "2024-10-08T20:30:00",
      statusIcon: "src/assets/icons/sold.svg",
    },
    {
      id: 8,
      avatar: "src/assets/images/Avatar.png",
      name: "6 VIP tickets",
      action: "sold for",
      event: "The Black Lady Sketch Show",
      status: "in progress",
      message: "85/100 sold",
      time: "2024-10-08T18:38:00",
      statusIcon: "src/assets/icons/cart.svg",
    },
  ];
</script>

<Template let:args>
  <Notification {...args} />
</Template>

<Story name="Default (No Notifications)">
  <Notification notifications={[]} />
</Story>

<Story name="Single Notification">
  <Notification
    notifications={[
      {
        id: 3,
        avatar: "src/assets/images/Avatar.png",
        name: "Grace Lusk",
        action: "confirmed for",
        event: "Jest Quest",
        status: "confirmed",
        message: "Can I go up early? I have another show at...",
        time: "2024-10-09T10:05:00",
        statusIcon: "src/assets/icons/confirmed.svg",
      },
    ]}
  />
</Story>

<Story name="With Sample Notifications">
  <Notification notifications={sampleNotifications} />
</Story>
