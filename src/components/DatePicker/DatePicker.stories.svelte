<script context="module">
  import { onMount } from "svelte";
  import { initFlowbite } from 'flowbite'
  import DatePicker from "./DatePicker.svelte";

  export const meta = {
    title: "Components/Datepicker",
    component: DatePicker,
  };
</script>

<script>
  import { Template, Story } from "@storybook/addon-svelte-csf";

  onMount(() => {
    initFlowbite();
  })
  
  export const Default = Template.bind({});
  Default.args = {};
</script>

<Template let:args>
  <DatePicker />
</Template>

<Story
  name="Default DatePicker">
  <DatePicker />
</Story>
