<script context="module">
    import Cropzone from "./Cropzone.svelte";
  
    export const meta = {
      title: "Components/Cropzone",
      component: Cropzone,
      argTypes: {
        existingImage: { control: 'text' },
        readonly: { control: 'boolean' },
        shape: { 
          control: { type: 'select' },
          options: ['rect', 'round'] 
        },
      },
    };
  </script>
  
  <script>
    import { Story, Template } from "@storybook/addon-svelte-csf";
  </script>
  
  <Template let:args>
    <Cropzone {...args} />
  </Template>
  
  <Story name="Default Cropzone" args={{ shape: "rect", readonly: false }} />
  
  <Story name="Round Shape Cropzone">
    <Cropzone shape="round" />
  </Story>
  
  

  