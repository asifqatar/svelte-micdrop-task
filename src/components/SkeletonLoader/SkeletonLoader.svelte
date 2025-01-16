<script>
  export let type = "";
  let boxes = 30;
  let hoursInDay = 17;
  let quarter = 3;
  let month = 9;

  // $: console.log(type);
</script>

{#if type === "monthly"}
  <div class="skeleton-animation p-7 rounded-sm bg-[#f0f0f0]"></div>
  <div class="skeleton-monthly">
    {#each Array(boxes) as _, index (index)}
      <div class="skeleton-animation">
        <div class="w-full h-40 rounded-md bg-[#f0f0f0]"></div>
      </div>
    {/each}
  </div>
{:else if type === "daily"}
  <div class="skeleton-animation">
    <div class="flex">
      <div class="p-5 w-[10%] mb-2"></div>
      <div class="p-5 rounded-md w-[30%] mb-2 bg-[#f0f0f0]"></div>
    </div>
    <div class="p-5 rounded-md w-full mb-2 bg-[#f0f0f0]"></div>
    <div class="flex gap-2">
      <div class="flex flex-col gap-2 w-[15%]">
        {#each Array(hoursInDay) as _, index (index)}
          <div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>
        {/each}
      </div>
      <div class="flex flex-col gap-2 w-[85%]">
        {#each Array(hoursInDay) as _, index (index)}
          <div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>
        {/each}
      </div>
    </div>
  </div>
{:else if type === "weekly"}
  <div class="skeleton-animation">
    <div class="p-6 rounded-md w-full mb-3 bg-[#f0f0f0]"></div>
    <div class="flex gap-2">
      <div class="flex flex-col gap-2 w-[15%]">
        {#each Array(hoursInDay) as _, index (index)}
          <div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>
        {/each}
      </div>
      <div class="flex flex-col gap-2 w-[85%]">
        {#each Array(hoursInDay) as _, index (index)}
          <div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>
        {/each}
      </div>
    </div>
  </div>
{:else if type === "quarter"}
  <div class="skeleton-animation">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
      {#each Array(quarter) as _, index (index)}
        <div>
          <div class="w-full h-64 rounded-md bg-[#f0f0f0]"></div>
        </div>
      {/each}
    </div>
  </div>
{:else if type === "yearly"}
  <div class="skeleton-animation">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
      {#each Array(month) as _, index (index)}
        <div>
          <div class="w-full h-64 rounded-md bg-[#f0f0f0]"></div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .skeleton-monthly {
    display: grid;
    grid-template-columns: repeat(7, minmax(100px, 1fr));
    grid-gap: 1px;
    padding-top: 4px;
  }
  .skeleton-animation {
    animation: pulse 1.5s infinite ease-in-out;
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>
