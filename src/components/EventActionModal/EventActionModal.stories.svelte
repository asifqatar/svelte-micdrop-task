<script context="module">
  import EventActionModal from "./EventActionModal.svelte";

  export const meta = {
    title: "Components/EventActionModal",
    component: EventActionModal,
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";

  let show = true;
  let fromDateTime = "10:30 Tuesday June 20, 2024";
  let toDateTime = "12:30 Wednesday June 21, 2024";

  function handleReschedule() {
    show = false;
    console.log("Reschedule clicked");
  }

  function handleManage() {
    show = false;
    console.log("Manage clicked");
  }

  function handleDelete() {
    show = false;
    console.log("Delete clicked");
  }
</script>

<Template let:args>
  <EventActionModal
    {...args}
    {show}
    {fromDateTime}
    {toDateTime}
    on:reschedule={handleReschedule}
    on:manage={handleManage}
    on:delete={handleDelete}
  />
</Template>

<Story
  name="Default Event Action Modal"
  args={{
    show: true,
    fromDateTime: "10:30 Tuesday June 20, 2024",
    toDateTime: "12:30 Wednesday June 21, 2024",
  }}
/>