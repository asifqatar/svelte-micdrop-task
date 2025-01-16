<script context="module">
  import FileDropzone from "./FileDropzone.svelte";
  import { Template, Story } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Components/FileDropzone",
    component: FileDropzone,
  };
</script>

<Template let:args>
  <FileDropzone {...args} />
</Template>

<Story name="Default FileDropzone">
  <FileDropzone />
</Story>

<Story name="Rounded Square Small Shape Dropzone">
  <FileDropzone shape="32x32-circle" />
</Story>

<Story name="FileDropzone with Existing Images">
  <FileDropzone
    existingImages={["https://via.placeholder.com/150"]}
    shape="256x256-profile-photo"
  />
</Story>

<Story name="Readonly FileDropzone">
  <FileDropzone shape="128x128-rounded-square" />
</Story>

<Story name="Rounded Square Shape Dropzone">
  <FileDropzone shape="64x64-rounded-square" />
</Story>

<Story name="Fullwidth Rounded Rectangle Dropzone">
  <FileDropzone shape="fullwidth-rounded-rectangle" />
</Story>
