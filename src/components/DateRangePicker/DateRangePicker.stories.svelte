<script context="module">
  import DateRangePicker from "./DateRangePicker.svelte";

  export const meta = {
    title: "Components/DateRangePicker",
    component: DateRangePicker,
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { writable } from "svelte/store";

  let selectedStartDate = writable(null);
  let selectedEndDate = writable(null);
  let isDatePickerOpen = writable(true);
  let currentMonth1 = writable(new Date().getMonth());
  let currentYear1 = writable(new Date().getFullYear());
  let currentMonth2 = writable(new Date().getMonth() + 1);
  let currentYear2 = writable(new Date().getFullYear());

  function toggleDatePicker() {
    isDatePickerOpen.update((state) => !state);
  }

  function handleApply() {
    console.log(
      "Date range applied:",
      $selectedStartDate,
      "to",
      $selectedEndDate
    );
    toggleDatePicker();
  }

  function handleCancel() {
    selectedStartDate.set(null);
    selectedEndDate.set(null);
    toggleDatePicker();
  }
</script>

<Template let:args>
  <DateRangePicker
    {...args}
    bind:selectedStartDate
    bind:selectedEndDate
    bind:isDatePickerOpen
    bind:currentMonth1
    bind:currentYear1
    bind:currentMonth2
    bind:currentYear2
    on:apply={handleApply}
    on:cancel={handleCancel}
  />
</Template>

<Story
  name="Default Date Range Picker"
  args={{
    selectedStartDate: null,
    selectedEndDate: null,
    isDatePickerOpen: true,
    currentMonth1: new Date().getMonth(),
    currentYear1: new Date().getFullYear(),
    currentMonth2: new Date().getMonth() + 1,
    currentYear2: new Date().getFullYear(),
  }}
/>
