<script>
  import { getDay, getDaysInMonth, startOfMonth } from "date-fns";

  export let currentYear;
  export let currentevents;

  let daysInMonths = [];
  let events = {};
  let loading = true;

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

  $: (async () => {
    loading = true;
    events = {};
    try {
      currentevents.forEach((event) => {
        const eventDate = new Date(event.date);
        const dateKey = `${eventDate.getUTCFullYear()}-${String(
          eventDate.getUTCMonth() + 1
        ).padStart(2, "0")}-${String(eventDate.getUTCDate()).padStart(2, "0")}`;
        events[dateKey] = true;
      });

      daysInMonths = months.map((_, index) => {
        const date = new Date(currentYear, index, 1);
        let startDay = getDay(startOfMonth(date));
        startDay = startDay === 0 ? 6 : startDay - 1;
        return {
          days: getDaysInMonth(date),
          startDay: startDay,
          prevMonthDays: getDaysInMonth(new Date(currentYear, index - 1, 1)),
        };
      });
    } catch (error) {
      console.error("Error fetching events:", error);
    }
    loading = false;
  })();

  function isEvent(month, day) {
    const dateKey = `${currentYear}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events[dateKey];
  }
</script>


  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 overflow-hidden mx-auto"
  >
    {#each months as month, index}
      <div class="mt-3">
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
          {#if loading}
            <div class="mt-10"></div>
          {:else}
            {#each Array(42)
              .fill()
              .map((_, i) => i) as i}
              {#if i < daysInMonths[index]?.startDay}
                <div
                  class="flex items-center justify-center h-12 text-[16px] font-normal text-Text-Tartiary opacity-[0.16] leading-4"
                >
                  {daysInMonths[index].prevMonthDays -
                    daysInMonths[index]?.startDay +
                    i +
                    1}
                </div>
              {:else if i >= daysInMonths[index]?.startDay && i < daysInMonths[index]?.startDay + daysInMonths[index]?.days}
                <div
                  class={`flex items-center justify-center text-Text-Tartiary m-[1px] h-12 text-[16px] font-normal leading-4 cursor-pointer rounded-md
              ${isEvent(index, i - daysInMonths[index]?.startDay + 1) ? "bg-[#0284FE26] hover:text-white" : "hover:text-white"} 
              hover:bg-brand-Primary `}
                >
                  {i - daysInMonths[index]?.startDay + 1}
                </div>
              {:else}
                <div
                  class="flex items-center justify-center h-12 text-[16px] font-normal text-Text-Tartiary opacity-[0.16] leading-4"
                >
                  {i -
                    (daysInMonths[index]?.startDay +
                      daysInMonths[index]?.days) +
                    1}
                </div>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>