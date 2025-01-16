<script>
  import { getHours } from "date-fns";
  import Badge from "../../Badges/Badge.svelte";
  import { truncateTitle } from "./../../../utils/utils";
  import Button from "../../Button/Button.svelte";
  import AddMainBlue from "./../../../assets/svg/add-main-blue.svg";

  export let isScheduledBtn = false;
  export let scheduleRecurring = false;
  export let eventCalendar = false;
  export let embedCalendar = false;
  export let currentevents = [];

  export let selectedDate;

  let hoursInDay = [];

  $: {
    hoursInDay = Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      events: [],
    }));

    hoursInDay = hoursInDay.map((hour) => {
      hour.events = currentevents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          getHours(new Date(event.date)) === hour.hour &&
          eventDate.getUTCMonth() === selectedDate.getUTCMonth() &&
          eventDate.getUTCDay() === selectedDate.getUTCDay() &&
          eventDate.getUTCFullYear() === selectedDate.getUTCFullYear() &&
          eventDate.getUTCDate() === selectedDate.getUTCDate()
        );
      });
      return hour;
    });
  }

  function formatHour(hour) {
    return hour < 10 ? `0${hour}:00` : `${hour}:00`;
  }

  let hoveredDay = null;

  function handleHover(hour) {
    hoveredDay = hour;
  }

  function handleMouseLeave() {
    hoveredDay = null;
  }

  $: formattedDay = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(selectedDate);
  $: formattedWeek = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: "UTC",
  }).format(selectedDate);
</script>

<div class="overflow-hidden mx-auto w-full">
  <div class="grid grid-cols-8 gap-0">
    <div class="empty-cell col-span-1" />
    <h2 class="text-left col-span-7 p-2">
      <span class="text-[#252B37] text-lg leading-[18px] font-normal"
        >{formattedWeek}</span
      >,
      <span class="text-[#666C79] text-sm font-normal">{formattedDay}</span>
    </h2>
  </div>
  <div
    class="grid grid-cols-8 gap-0 border-r-[0.5px] border-t-[0.5px] border-l-[0.5px] border-stroke-Primary rounded-lg"
  >
    {#each hoursInDay as hourBlock}
      <div class="hour-cell flex justify-center items-center text-center py-3">
        {formatHour(hourBlock.hour)}
      </div>
      <!-- svelte-ignore missing-declaration -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="day-cell p-2 pb-3 flex sm:gap-3 text-center col-span-7"
        on:mouseenter={() => handleHover(hourBlock)}
        on:mouseleave={handleMouseLeave}
      >
        {#each hourBlock.events as event}
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
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="w-[150px] flex flex-col items-center gap-1.5 p-[5px] embedCalendar  rounded"
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
        {#if isScheduledBtn && hoveredDay === hourBlock}
          <div class="mt-auto mx-auto">
            <Button ScheduledBtn beforeIcon={AddMainBlue}>Schedule</Button>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .grid {
    width: 100%;
  }
  .hour-cell {
    border-bottom: 0.5px solid var(--Stroke-Primary, #d4d6d9);
    border-right: 0.5px solid var(--Stroke-Primary, #d4d6d9);
    color: var(--text-tartiary, #666c79);
    font-size: 14px;
  }

  .day-cell {
    font-size: 14px;
    border-bottom: 0.5px solid var(--Stroke-Primary, #d4d6d9);
    display: flex;
    align-items: flex-start;
    padding-left: 10px;
  }
  .image {
    border-radius: var(--rounded-sm, 2px);
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    box-shadow:
      0px 20px 6px 0px rgba(0, 0, 0, 0),
      0px 13px 5px 0px rgba(0, 0, 0, 0.02),
      0px 7px 4px 0px rgba(0, 0, 0, 0.08),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 1px 2px 0px rgba(0, 0, 0, 0.16);
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

  .embedCalendar {
    box-shadow:
      0px 56px 16px 0px rgba(43, 43, 43, 0),
      0px 36px 14px 0px rgba(43, 43, 43, 0.01),
      0px 20px 12px 0px rgba(43, 43, 43, 0.05),
      0px 9px 9px 0px rgba(43, 43, 43, 0.09),
      0px 2px 5px 0px rgba(43, 43, 43, 0.1);
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

  @media (max-width: 1024px) {
    .hour-cell,
    .day-cell {
      font-size: 12px;
      padding: 8px;
    }
  }

  @media (max-width: 768px) {
    .hour-cell,
    .day-cell {
      font-size: 10px;
      padding: 6px;
    }
  }

  @media (max-width: 640px) {
    .hour-cell,
    .day-cell {
      font-size: 8px;
      padding: 4px;
    }
    .embedCalendar{
      box-shadow: none;
    }
    .day-cell {
      flex-direction: row;
  }
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
