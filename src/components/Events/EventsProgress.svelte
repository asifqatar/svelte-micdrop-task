<script>
  export let events = [];
  export let variant = "top";

  $: textColor = variant === "top" ? "text-[#76A9FA]" : "text-red-500";
  $: valueColor = variant === "top" ? "text-[#1E429F]" : "text-red-700";
  $: gradientColor = variant === "top" ? "#EBF5FF" : "#FDF2F2";

  function getGradientStyle(revenue) {
    return `linear-gradient(to right, ${gradientColor} ${revenue}%, transparent ${revenue}%)`;
  }
</script>

<div class="space-y-4 bg-white rounded-lg">
  <div class="space-y-3">
    {#each events as event (event.revenue)}
    <div
    class="relative py-2 pl-4 pr-1 rounded overflow-hidden grid grid-cols-6  items-center"
    style:background={getGradientStyle(event.revenue)}
  >
    <span class="text-xs font-normal leading-[16px] col-span-2 truncate {textColor}">
      {event.date}
    </span>
    <span class="text-sm text-gray-700 truncate leading-[14px] col-span-3">
      {event.title}
    </span>
    <span class="text-xs font-normal leading-[16px] flex justify-end col-span-1 {valueColor}">
      {event.revenue}
    </span>
  </div>
    {/each}
  </div>
</div>