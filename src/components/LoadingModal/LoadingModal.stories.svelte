<script context="module">
  import LoadingModal from "./LoadingModal.svelte";

  export const meta = {
    title: "Components/LoadingModal",
    component: LoadingModal,
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";

  let show = true;

  function handleClose() {
    show = false;
    console.log("Modal closed");
  }
</script>

<Template let:args>
  <LoadingModal {...args} {show} on:close={handleClose} />
</Template>

<Story
  name="Default Loading Modal"
  args={{
    show: true,
  }}
/>