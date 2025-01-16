<script>
  import { createEventDispatcher } from "svelte";
  import BreadcrumbArrow from "../../assets/svg/arrow-up.svg";
  import BreadcrumbHome from "../../assets/svg/home.svg";

  export let data = [];

  const dispatch = createEventDispatcher();

  function handleClick(crumb) {
    dispatch("click", crumb);
  }
</script>

<div>
  {#if data.length > 0}
    <nav class="inline-flex lg:ml-4 text-sm leading-[14px] font-medium">
      {#each data as crumb, index}
        <div class="flex items-center">
          {#if index > 0}
            <img src={BreadcrumbArrow} alt="" class="w-3 h-3 mx-2.5" />
          {/if}
          {#if index === 0}
            <img src={BreadcrumbHome} alt="" class="w-3 h-3 mx-2.5" />
          {/if}
          {#if index === data.length - 1}
            <span class="text-Text-Tartiary cursor-default">{crumb.name}</span>
          {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <span class="text-Text-Secondary no-underline cursor-pointer">
              <a
                href={crumb.href}
                on:click={() => handleClick(crumb)}
                class="hover:no-underline"
              >
                {crumb.name}
              </a>
            </span>
          {/if}
        </div>
      {/each}
    </nav>
  {/if}
</div>
