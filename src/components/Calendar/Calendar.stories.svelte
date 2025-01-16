<script context="module">
  import Calendar from "./Calendar.svelte";
  import imageView from "./../../assets/images/image.png";

  export const meta = {
    title: "Components/Calendar",
    component: Calendar,
    argTypes: {},
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  const eventsData = [
    {
      name: "Event Sample",
      date: new Date('Sat Oct 05 2024 05:00:00 GMT+0500 (Pakistan Standard Time)'), 
      image: imageView,
      description: "This is a successfully modified Event.",
      timeline: "6:00 PM - 9:00 PM",
    },
    {
      name: "Tech Roast Show",
      date: new Date('Tue Oct 08 2024 05:00:00 GMT+0500 (Pakistan Standard Time)'),
      image: imageView,
      description: "This is a sample event.",
      timeline: "6:00 PM - 9:00 PM",
    },
  ];
  
</script>

<Template let:args>
  <div class="py-5">
    <Calendar {...args} />
  </div>
</Template>

<Story name="Default Calendar">
  <Calendar currentMonth={10} currentYear={2024} />
</Story>

<Story name="With Scheduled Button">
  <Calendar currentMonth={10} currentYear={2024} isScheduledBtn />
</Story>

<Story name="Embed Calendar">
  <Calendar
    currentMonth={9}
    currentYear={2024}
    embedCalendar={true}
    currentevents={eventsData}
  />
</Story>

<Story name="Event Calendar">
  <Calendar
    currentMonth={9}
    currentYear={2024}
    eventCalendar
    currentevents={eventsData}
  />
</Story>

<Story name="Schedule Recurring Calendar">
  <Calendar
    currentMonth={9}
    currentYear={2024}
    scheduleRecurring
    currentevents={eventsData}
  />
</Story>
