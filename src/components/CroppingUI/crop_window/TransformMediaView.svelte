<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let media;

  export let position = { x: 0, y: 0 };
  export let height = 1.0;
  export let rotation = 0;

  let image_el;

  let dispatch = createEventDispatcher();

  function media_loaded() {
    const media_el = image_el;

    if (media_el) {
      const naturalWidth = image_el.naturalWidth || 0;
      const naturalHeight = image_el.naturalHeight || 0;

      let media_size = {
        width: naturalWidth,
        height: naturalHeight,
      };
      dispatch("media_size", media_size);
    }
  }

  onMount(() => {
    if (image_el && image_el.complete) {
      media_loaded();
    }
  });
</script>

{#if media && media.content_type === "image"}
  <img
    on:load={media_loaded}
    bind:this={image_el}
    src={media.url}
    alt={"image to be cropped"}
    style={`transform: translateX(-50%) translateY(-50%) rotate(${rotation}deg);` +
      `height: ${height}px;` +
      `margin-left: ${position.x}px;` +
      `margin-top: ${position.y}px;`}
  />
{/if}

<style>
  img {
    display: block;
    max-width: none;
    max-height: none;
    width: auto;
  }
</style>
