<script>
  import { getDay, getDaysInMonth, startOfMonth } from "date-fns";
  import { writable } from "svelte/store";

  export let currentevents = {};
  export let year = null;
  export let quarter = null;

  $: currentYear = year;
  $: currentQuarter = quarter;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weeks = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  let events = {};
  let daysInMonths = [];
  let loading = writable(true);

  $: (async () => {
    loading.set(true);
    currentevents.forEach((event) => {
      const eventDate = new Date(event.date);
      const dateKey = `${eventDate.getUTCFullYear()}-${String(
        eventDate.getUTCMonth() + 1
      ).padStart(2, "0")}-${String(eventDate.getUTCDate()).padStart(2, "0")}`;
      events[dateKey] = true;
    });

    daysInMonths = months.map((_, index) => {
      const date = new Date(currentYear, index, 1);
      return {
        days: getDaysInMonth(date),
        startDay: getDay(startOfMonth(date)),
        prevMonthDays: getDaysInMonth(new Date(currentYear, index - 1, 1)),
      };
    });
    loading.set(false);
  })();

  function isEvent(month, day) {
    const dateKey = `${currentYear}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events[dateKey];
  }

  $: quarterStartMonth = (currentQuarter - 1) * 3;
  $: quarterMonths = months.slice(quarterStartMonth, quarterStartMonth + 3);
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 overflow-hidden mx-auto"
>
  {#each quarterMonths as month, qIndex}
    <div class="mt-4">
      <button
        class="text-center text-Text-Primary text-xl font-normal leading-5 mb-5 w-full"
      >
        {month}
        {currentYear}
      </button>
      <div
        class="border-[0.5px] border-stroke-Primary rounded-lg grid grid-cols-7"
      >
        {#each weeks as week}
          <div
            class="text-Text-Tartiary border-b-[0.5px] border-stroke-Primary py-2 text-sm leading-[14px] font-normal text-center"
          >
            {week}
          </div>
        {/each}
        {#each Array(42)
          .fill()
          .map((_, i) => i) as i}
          {#if i < daysInMonths[quarterStartMonth + qIndex]?.startDay}
            <div
              class="flex items-center justify-center h-12 text-[16px] font-normal text-Text-Tartiary opacity-[0.16] leading-4"
            >
              {daysInMonths[quarterStartMonth + qIndex].prevMonthDays -
                daysInMonths[quarterStartMonth + qIndex]?.startDay +
                i +
                1}
            </div>
          {:else if i >= daysInMonths[quarterStartMonth + qIndex]?.startDay && i < daysInMonths[quarterStartMonth + qIndex]?.startDay + daysInMonths[quarterStartMonth + qIndex]?.days}
            <div
              class={`flex items-center justify-center text-Text-Tartiary m-[1px] h-12 text-[16px] font-normal leading-4 cursor-pointer rounded-md
                  ${isEvent(quarterStartMonth + qIndex, i - daysInMonths[quarterStartMonth + qIndex]?.startDay + 1) ? "bg-[#0284FE26] hover:text-white" : "hover:text-white"}
                  hover:bg-brand-Primary `}
            >
              {i - daysInMonths[quarterStartMonth + qIndex]?.startDay + 1}
            </div>
          {:else}
            <div
              class="flex items-center justify-center h-12 text-[16px] font-normal text-Text-Tartiary opacity-[0.16] leading-4"
            >
              {i -
                (daysInMonths[quarterStartMonth + qIndex]?.startDay +
                  daysInMonths[quarterStartMonth + qIndex]?.days) +
                1}
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/each}
</div>
