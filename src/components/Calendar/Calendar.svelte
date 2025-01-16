<script>
  import { getDay, getDaysInMonth, startOfMonth } from "date-fns";
  import Button from "../Button/Button.svelte";
  import Badge from "./../Badges/Badge.svelte";
  import AddMainBlue from "../../assets/svg/add-main-blue.svg";
  import { truncateTitle } from "../../utils/utils";

  export let isScheduledBtn = false;
  export let scheduleRecurring = false;
  export let eventCalendar = false;
  export let embedCalendar = false;
  let currentDate = new Date();
  export let currentYear = currentDate.getUTCFullYear();
  export let currentMonth = currentDate.getUTCMonth();
  export let currentevents = [];

  let selectedDate;
  $: selectedDate = new Date(Date.UTC(currentYear, currentMonth, 1));

  let daysInMonth = [];

  $: {
    const days = getDaysInMonth(selectedDate);
    const startDay = getDay(startOfMonth(selectedDate));
    daysInMonth = Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      startDay: startDay + i,
      events: [],
    }));

    daysInMonth = daysInMonth.map((day) => {
      day.events = currentevents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getUTCFullYear() === currentYear &&
          eventDate.getUTCMonth() === selectedDate.getUTCMonth() &&
          eventDate.getUTCDate() === day.day
        );
      });
      return day;
    });
  }

  let hoveredDay = null;

  function handleHover(day) {
    hoveredDay = day;
  }

  function handleMouseLeave() {
    hoveredDay = null;
  }

  function navigateToDay(day) {
    const dayString = String(day).padStart(2, "0");
    const monthString = String(selectedDate.getUTCMonth() + 1).padStart(2, "0");
    const route = `/daily/${currentYear}-${monthString}-${dayString}`;

    console.log(route, "logs goto route");
    // goto(route); // Uncomment this when using SvelteKit routing
  }
</script>

<div class="max-w-[1200px] overflow-hidden mx-auto w-full bg-BG-Primary mb-10">
  <div
    class="calendar w-full overflow-hidden mx-auto grid rounded-lg border border-stroke-Primary"
  >
    {#each ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as dayName}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class="flex p-3 items-center justify-center gap-3 bg-BG-Primary text-Text-Tartiary leading-[18px] font-normal text-[14px] sm:text-lg border-l first:border-l-0 border-stroke-Primary"
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
      <!-- svelte-ignore missing-declaration -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="day-container text-[#252B37] flex flex-col items-center"
        on:click={() => navigateToDay(day.day)}
        on:mouseenter={() => handleHover(day)}
        on:mouseleave={handleMouseLeave}
      >
        <div class="my-1.5 w-full h-full flex flex-col items-center gap-2">
          <span class="day">{day.day}</span>

          {#each day.events as event}
            {#if scheduleRecurring}
              <Badge
                event="squareEvent"
                eventBgColor="hsla(0, 0%, 100%, 1)"
                eventTextColor="hsla(220, 20%, 18%, 1)"
                on:click={() => alert("You clicked on an event!")}
              >
                {event.name}
              </Badge>
            {:else if eventCalendar}
              <Badge
                event="circleEvent"
                eventBgColor="hsla(209, 99%, 50%, 0.15)"
                eventTextColor="hsla(209, 99%, 50%, 1)"
                on:click={() => alert("You clicked on an event!")}
              >
                {truncateTitle(event.name, 13)}
              </Badge>
            {:else if embedCalendar}
              <div
                class="w-full flex flex-col items-center gap-1.5 p-[5px] embedCalendar rounded"
                on:click={() => alert("You clicked on an event!")}
              >
                <img
                  class="image"
                  height="46px"
                  src={event.image}
                  alt={event.name}
                />
                <div class="timeline hidden sm:flex">{event.timeline}</div>
                <div class="desc">{event.name}</div>
              </div>
            {/if}
          {/each}

          {#if isScheduledBtn && hoveredDay === day}
            <div class="mt-auto mx-auto">
              <Button ScheduledBtn beforeIcon={AddMainBlue}>Schedule</Button>
            </div>
          {/if}
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
    padding: 8px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .calendar > .day-container,
  .calendar > div {
    border-top: 1px solid #d4d6d9;
  }

  .calendar > .day-container:not(:nth-child(7n + 1)),
  .calendar > div:not(:nth-child(7n + 1)) {
    border-left: 1px solid #d4d6d9;
  }

  .calendar > .day-container:nth-last-child(-n + 7),
  .calendar > div:nth-last-child(-n + 7) {
    border-bottom: 1px solid #d4d6d9;
  }
  .calendar > .day-container:last-of-type {
    border-right: 1px solid #d4d6d9;
  }

  .day {
    font-size: 18px;
    color: #0d1526;
    font-weight: 400;
    line-height: 18px;
    font-style: normal;
  }

  .embedCalendar {
    box-shadow:
      0px 56px 16px 0px rgba(43, 43, 43, 0),
      0px 36px 14px 0px rgba(43, 43, 43, 0.01),
      0px 20px 12px 0px rgba(43, 43, 43, 0.05),
      0px 9px 9px 0px rgba(43, 43, 43, 0.09),
      0px 2px 5px 0px rgba(43, 43, 43, 0.1);
  }

  .timeline {
    color: #666c79;
    font-size: 8px;
    font-style: italic;
    font-weight: 300;
    line-height: 8px;
    letter-spacing: -0.4px;
    text-align: center;
  }

  .embedCalendar .desc {
    color: #0d1526;
    text-align: center;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: -0.16px;
  }

  .image {
    border-radius: 2px;
    background: lightgray 50% / cover no-repeat;
    box-shadow:
      0px 20px 6px 0px rgba(0, 0, 0, 0),
      0px 13px 5px 0px rgba(0, 0, 0, 0.02),
      0px 7px 4px 0px rgba(0, 0, 0, 0.08),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 1px 2px 0px rgba(0, 0, 0, 0.16);
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

  @media (max-width: 640px) {
    .calendar {
      grid-template-columns: repeat(7, minmax(30px, 1fr));
    }

    .day {
      font-size: 12px;
    }

    .timeline {
      font-size: 7px;
      font-weight: 300;
      line-height: 6px;
    }

    .embedCalendar .desc {
      font-size: 6px;
      font-weight: 500;
      line-height: 8px;
    }
    .embedCalendar {
      box-shadow: none;
    }
  }
</style>
