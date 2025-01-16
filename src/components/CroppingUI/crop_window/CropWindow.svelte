<script>
  import { onMount } from "svelte";
  import GestureMediaView from "./GestureMediaView.svelte";
  import { defaultOptions, defaultValue } from "../types";

  export let media;
  export let value = defaultValue;

  export let options = defaultOptions;

  let outer_size;
  let crop_window_size;
  let center_point;

  export function commit() {
    gesture_el.commit();
  }

  export function set_zoom(zoom) {
    gesture_el.set_zoom(zoom);
  }

  export function set_rotation(degrees) {
    gesture_el.set_rotation(degrees);
  }

  export function set_pan(vector) {
    gesture_el.set_pan(vector);
  }

  onMount(() => {
    compute_window_sizes();
  });

  function compute_window_sizes() {
    let rect = outer_el.getBoundingClientRect();
    outer_size = {
      width: rect.width,
      height: rect.height,
    };

    center_point = { x: rect.width / 2, y: rect.height / 2 };

    crop_window_size =
      outer_size.width / outer_size.height > value.aspect
        ? {
            height: outer_size.height - 2 * options.crop_window_margin,
            width:
              (outer_size.height - 2 * options.crop_window_margin) *
              value.aspect,
          }
        : {
            height:
              (outer_size.width - 2 * options.crop_window_margin) /
              value.aspect,
            width: outer_size.width - 2 * options.crop_window_margin,
          };
  }

  let outer_el;
  let gesture_el;

  $: {
    if (outer_el && value.aspect) compute_window_sizes();
  }
</script>

<svelte:window on:resize={compute_window_sizes} />

<div
  bind:this={outer_el}
  class="outer"
  style={`--crop-window-height:${crop_window_size?.height || 0}px;
--crop-window-width:${crop_window_size?.width || 0}px;
--outer-height:${outer_size?.height || 0}px;
--outer-width:${outer_size?.width || 0}px;`}
>
  {#if crop_window_size && outer_size && center_point}
    <GestureMediaView
      bind:this={gesture_el}
      shape={options.shape}
      overlay={options.overlay}
      overlay_options={options.overlay_options}
      bind:value
      {media}
      {crop_window_size}
      {outer_size}
      {center_point}
    />
  {/if}
</div>

<style>
  .outer {
    height: 100%;
    width: 100%;
  }
</style>
