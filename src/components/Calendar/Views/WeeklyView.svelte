<script>
  import { addDays, startOfWeek, format, getHours } from "date-fns";
  import Badge from "../../Badges/Badge.svelte";
  import { truncateTitle } from "./../../../utils/utils";
  import Button from "./../../Button/Button.svelte";
  import AddMainBlue from "./../../../assets/svg/add-main-blue.svg";

  export let isScheduledBtn = false;
  export let scheduleRecurring = false;
  export let eventCalendar = false;
  export let embedCalendar = false;
  export let currentevents = [];

  $: console.log(currentevents, "logs currentevents");

  export let selectedDate;

  let weekDays = [];
  let loading = true;

  $: weekDays = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfWeek(selectedDate, { weekStartsOn: 1 }), i)
  );

  function getEventsForDayAndHour(day, hour) {
    return currentevents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getUTCDate() === day.getUTCDate() &&
        eventDate.getUTCMonth() === day.getUTCMonth() &&
        eventDate.getUTCFullYear() === day.getUTCFullYear() &&
        getHours(new Date(event.date)) === hour
      );
    });
  }

  function handleHover(hour) {
    console.log(hour, "logs hourss");
    hoveredDay = hour;
  }

  function handleMouseLeave() {
    hoveredDay = null;
  }
</script>

<div class="overflow-hidden mx-auto w-full">
  <div
    class="grid grid-cols-8 gap-0 text-center text-sm font-semibold border-t border-r border-l border-stroke-Primary rounded-t-lg"
  >
    <div class="time-header"></div>
    {#each weekDays as day}
      <div>
        <div
          class="day-header flex flex-col gap-2 border-l border-stroke-Primary uppercase"
        >
          <span class="text-[#666C79] text-sm leading-[14px] font-normal">
            {format(day, "EEE")}
          </span>
          <span class="text-[18px] text-[#0D1526] font-normal leading-[18px]">
            {format(day, "dd")}
          </span>
        </div>
      </div>
    {/each}
  </div>
  <div class="grid grid-cols-8 gap-0 border-x border-stroke-Primary rounded-b-lg overflow-hidden">
    {#each Array(24)
      .fill()
      .map((_, i) => i) as hour}
      <div
        class="hour-cell flex justify-center items-center pt-3 pb-3 text-center p-2"
      >
        {`${hour}:00`}
      </div>
      {#each weekDays as day}
        <div class="day-cell group p-2 border-b border-l border-stroke-Primary">
          {#each getEventsForDayAndHour(day, hour) as event}
            <div class="event-badge text-xs mb-1">
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
              <!-- svelte-ignore a11y-no-static-element-interactions -->
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
            </div>
          {/each}
          {#if isScheduledBtn}
            <div class=" mt-auto mx-auto">
              <div class="hidden group-hover:block">
                <Button ScheduledBtn beforeIcon={AddMainBlue}>Schedule</Button>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    {/each}
  </div>
</div>

<style>
  .grid {
    width: 100%;
  }

  .day-header {
    font-size: 14px;
    font-weight: normal;
  }

  .time-header,
  .day-header {
    padding: 12px;
    border-bottom: 1px solid var(--stroke-primary, #d4d6d9);
    color: var(--text-primary, #0d1526);
  }

  .hour-cell {
    background-color: var(--bg-secondary, #ffffff);
    color: var(--text-tartiary, #666c79);
    font-size: 14px;
    border-bottom: 1px solid var(--Stroke-Primary, #d4d6d9);
  }

  .day-cell {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px
  }

  .event-badge {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(220, 20%, 18%, 1);
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 400;
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
    .time-header,
    .day-header,
    .hour-cell,
    .day-cell {
      font-size: 12px;
      padding: 8px;
    }
  }

  @media (max-width: 768px) {
    .time-header,
    .day-header,
    .hour-cell,
    .day-cell {
      font-size: 10px;
      padding: 6px;
    }
  }

  @media (max-width: 640px) {
    .time-header,
    .day-header,
    .hour-cell,
    .day-cell {
      font-size: 8px;
      padding: 4px;
    }
    .embedCalendar{
      box-shadow: none;
    }
  }
</style>
