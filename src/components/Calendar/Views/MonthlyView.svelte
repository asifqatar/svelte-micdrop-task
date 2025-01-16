<script>
  import { getDay, getDaysInMonth, startOfMonth, format } from "date-fns";
  import { fetchEventsForMonth } from "./../../../services/EventService";
  import Badge from "../../Badges/Badge.svelte";
  import { onMount } from "svelte";

  export let currentYear;
  export let currentMonth;

  let selectedDate;
  let daysInMonth = [];
  let monthName = "";
  let events = [];

  $: selectedDate = new Date(Date.UTC(currentYear, currentMonth, 1));
  $: monthName = format(selectedDate, "MMMM");

  async function setupDaysAndEvents() {
    const days = getDaysInMonth(selectedDate);
    const startDay = getDay(startOfMonth(selectedDate));

    daysInMonth = Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      startDay: startDay + i,
      events: [],
    }));

    events = await fetchEventsForMonth(currentYear, currentMonth + 1);

    daysInMonth = daysInMonth.map((day) => {
      day.events = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getUTCFullYear() === currentYear &&
          eventDate.getUTCMonth() === currentMonth &&
          eventDate.getUTCDate() === day.day
        );
      });
      return day;
    });
  }

  onMount(setupDaysAndEvents);

  $: if (currentYear && currentMonth !== undefined) {
    setupDaysAndEvents();
  }

  function navigateToDay(day) {
    const dayString = String(day).padStart(2, "0");
    const monthString = String(currentMonth + 1).padStart(2, "0");
    const route = `/daily/${currentYear}-${monthString}-${dayString}`;
    // goto(route);
  }
</script>

<div class="max-w-[1200px] overflow-hidden mx-auto w-full bg-BG-Primary my-4">
  <div
    class="calendar w-full overflow-hidden mx-auto grid rounded-lg border-t border-r border-b border-stroke-Primary"
  >
    {#each ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as dayName}
      <span
        class="flex p-3 items-center justify-center gap-3 bg-BG-Primary text-Text-Tertiary leading-[18px] font-normal text-[14px] sm:text-lg border-l border-stroke-Primary"
      >
        {dayName}
      </span>
    {/each}

    {#each Array(daysInMonth[0]?.startDay || 0)
      .fill()
      .map(() => "") as _}
      <div></div>
    {/each}
    {#each daysInMonth as day}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="day-container text-[#252B37] flex flex-col items-center"
        on:click={() => navigateToDay(day.day)}
      >
        <span class="day">{day.day}</span>
        <div class="mt-1 w-full flex flex-col items-center gap-1 p-1">
          {#each day.events as event}
            <Badge
              event="squareEvent"
              eventBgColor="hsla(0, 0%, 100%, 1)"
              eventTextColor="hsla(220, 20%, 18%, 1)"
            >
              {event.title}
            </Badge>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(100px, 1fr));
    grid-template-rows: auto;
    grid-auto-rows: minmax(158px, auto);
  }

  .day-container {
    border-left: 1px solid #d4d6d9;
    border-top: 1px solid #d4d6d9;
    padding: 12px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .calendar > .day-container,
  .calendar > div {
    border-left: 1px solid #d4d6d9;
    border-top: 1px solid #d4d6d9;
  }

  .calendar > .day-container:nth-last-child(-n + 7),
  .calendar > div:nth-last-child(-n + 7) {
    border-bottom: 1px solid #d4d6d9;
  }

  .calendar > .day-container:last-of-type {
    border-right: 1px solid #d4d6d9;
    border-bottom: none;
  }

  .day {
    font-size: 18px;
    color: #0d1526;
    font-weight: 400;
    line-height: 18px;
    font-style: normal;
  }

  @media (max-width: 1024px) {
    .calendar {
      grid-template-columns: repeat(7, minmax(100px, 1fr));
    }

    .day {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    .calendar {
      grid-template-columns: repeat(7, minmax(70px, 1fr));
    }

    .day {
      font-size: 14px;
    }

    .day-container {
      padding: 6px 4px;
    }
  }

  @media (max-width: 480px) {
    .calendar {
      grid-template-columns: repeat(7, minmax(30px, 1fr));
    }

    .day {
      font-size: 12px;
    }
  }
</style>
