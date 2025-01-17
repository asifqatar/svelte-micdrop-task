<script>
  import ArrowDown from "../../assets/svg/arrow-down.svg";
  import ArrowUp from "../../assets/svg/arrow-up.svg";

  export let stats = [];
</script>

{#each stats as stat}
  <div class="bg-white rounded-[16px] p-6 flex items-center justify-between stat">
    <div class="flex items-center">
      <div class="mr-3">
        <img src={stat.icon} alt="" class="w-full h-full" />
      </div>
      <div>
        <p class="text-[16px] font-normal text-[#666C79] leading-[16px]">{stat.name}</p>
        <p class="text-2xl font-normal text-[#252B37] mt-1">
          {stat.value}
          {#if stat.cents}
            <span class="text-sm align-super">{stat.cents}</span>
          {/if}
        </p>
      </div>
    </div>
    
    {#if stat.percentage !== undefined}
      <div
        class="flex items-center"
        style="color: {stat.percentage > 10 ? '#0E9F6E' : '#F05252'}"
      >
        <img src={stat.percentage > 10 ? ArrowUp : ArrowDown} alt="" />
        <h6 class="ml-1 text-lg font-semibold leading-[27px]">{Math.abs(stat.percentage)}%</h6>
      </div>
    {/if}
  </div>
{/each}

<style>
  .stat {
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px -1px rgba(0, 0, 0, 0.1);
  }
</style>
