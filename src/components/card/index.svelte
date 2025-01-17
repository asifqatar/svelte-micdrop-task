<script lang="ts">
  import ToggleButtons from "../Button/ToggleButtons.svelte";

  export let title: string = "Title";
  export let subtitle: string = "";
  export let link: string = "";
  export let linkText: string = "See all";
  export let buttons: boolean = false;
  export let event: boolean = false;
</script>

<div
  class="space-y-3 bg-white lg:p-6 p-4 rounded-[8px] overflow-hidden card-wrapper w-full"
>
  <div class="flex justify-between items-start flex-wrap gap-2">
    <div>
      <h2
        class="lg:font-normal lg:text-xl lg:leading-[30px] font-base font-medium leading-[24px] w-[200px]"
      >
        <span
          class={event
            ? "w-[150px]"
            : ""}
        >
          {title}
        </span>
      </h2>
      {#if subtitle}
        <p class="text-xs leading-[18px] text-gray-500 lg:block hidden">
          {subtitle}
        </p>
      {/if}
    </div>
    {#if link}
      <div>
        <div>
          <a
            href={link}
            class="font-medium text-sm text-[#0284FE] leading-[14px]"
          >
            {linkText}
          </a>
        </div>
      </div>
    {/if}
    {#if buttons}
      <div>
        <ToggleButtons />
      </div>
    {/if}
  </div>
  <slot />
</div>

<style>
  .card-wrapper {
    box-shadow: 0px 1px 2px -1px #0000001a;
    box-shadow: 0px 1px 3px 0px #0000001a;
  }
</style>
