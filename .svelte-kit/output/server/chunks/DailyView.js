import { c as create_ssr_component, e as escape, d as each, v as validate_component, b as add_attribute } from "./ssr.js";
import { getHours } from "date-fns";
import { B as Badge } from "./Badge.js";
import { t as truncateTitle } from "./utils.js";
import { B as Button } from "./Button.js";
import { A as AddMainBlue } from "./add-main-blue.js";
const css = {
  code: ".grid.svelte-1mqwu8m.svelte-1mqwu8m{width:100%}.hour-cell.svelte-1mqwu8m.svelte-1mqwu8m{border-bottom:0.5px solid var(--Stroke-Primary, #d4d6d9);border-right:0.5px solid var(--Stroke-Primary, #d4d6d9);color:var(--text-tartiary, #666c79);font-size:14px}.day-cell.svelte-1mqwu8m.svelte-1mqwu8m{font-size:14px;border-bottom:0.5px solid var(--Stroke-Primary, #d4d6d9);display:flex;align-items:flex-start;padding-left:10px}.image.svelte-1mqwu8m.svelte-1mqwu8m{border-radius:var(--rounded-sm, 2px);background:url(<path-to-image>) lightgray 50% / cover no-repeat;box-shadow:0px 20px 6px 0px rgba(0, 0, 0, 0),\n      0px 13px 5px 0px rgba(0, 0, 0, 0.02),\n      0px 7px 4px 0px rgba(0, 0, 0, 0.08),\n      0px 3px 3px 0px rgba(0, 0, 0, 0.14),\n      0px 1px 2px 0px rgba(0, 0, 0, 0.16)}.timeline.svelte-1mqwu8m.svelte-1mqwu8m{color:#666c79;font-size:8px;font-style:italic;font-weight:300;line-height:8px;letter-spacing:-0.4px;text-align:center}.embedCalendar.svelte-1mqwu8m.svelte-1mqwu8m{box-shadow:0px 56px 16px 0px rgba(43, 43, 43, 0),\n      0px 36px 14px 0px rgba(43, 43, 43, 0.01),\n      0px 20px 12px 0px rgba(43, 43, 43, 0.05),\n      0px 9px 9px 0px rgba(43, 43, 43, 0.09),\n      0px 2px 5px 0px rgba(43, 43, 43, 0.1)}.embedCalendar.svelte-1mqwu8m .desc.svelte-1mqwu8m{color:#0d1526;text-align:center;font-size:8px;font-style:normal;font-weight:500;line-height:10px;letter-spacing:-0.16px}@media(max-width: 1024px){.hour-cell.svelte-1mqwu8m.svelte-1mqwu8m,.day-cell.svelte-1mqwu8m.svelte-1mqwu8m{font-size:12px;padding:8px}}@media(max-width: 768px){.hour-cell.svelte-1mqwu8m.svelte-1mqwu8m,.day-cell.svelte-1mqwu8m.svelte-1mqwu8m{font-size:10px;padding:6px}}@media(max-width: 640px){.hour-cell.svelte-1mqwu8m.svelte-1mqwu8m,.day-cell.svelte-1mqwu8m.svelte-1mqwu8m{font-size:8px;padding:4px}.embedCalendar.svelte-1mqwu8m.svelte-1mqwu8m{box-shadow:none}.day-cell.svelte-1mqwu8m.svelte-1mqwu8m{flex-direction:row}}@keyframes svelte-1mqwu8m-pulse{0%,100%{opacity:1}50%{opacity:0.5}}",
  map: '{"version":3,"file":"DailyView.svelte","sources":["DailyView.svelte"],"sourcesContent":["<script>\\n  import { getHours } from \\"date-fns\\";\\n  import Badge from \\"../../Badges/Badge.svelte\\";\\n  import { truncateTitle } from \\"./../../../utils/utils\\";\\n  import Button from \\"../../Button/Button.svelte\\";\\n  import AddMainBlue from \\"./../../../assets/svg/add-main-blue.svg\\";\\n\\n  export let isScheduledBtn = false;\\n  export let scheduleRecurring = false;\\n  export let eventCalendar = false;\\n  export let embedCalendar = false;\\n  export let currentevents = [];\\n\\n  export let selectedDate;\\n\\n  let hoursInDay = [];\\n\\n  $: {\\n    hoursInDay = Array.from({ length: 24 }, (_, i) => ({\\n      hour: i,\\n      events: [],\\n    }));\\n\\n    hoursInDay = hoursInDay.map((hour) => {\\n      hour.events = currentevents.filter((event) => {\\n        const eventDate = new Date(event.date);\\n        return (\\n          getHours(new Date(event.date)) === hour.hour &&\\n          eventDate.getUTCMonth() === selectedDate.getUTCMonth() &&\\n          eventDate.getUTCDay() === selectedDate.getUTCDay() &&\\n          eventDate.getUTCFullYear() === selectedDate.getUTCFullYear() &&\\n          eventDate.getUTCDate() === selectedDate.getUTCDate()\\n        );\\n      });\\n      return hour;\\n    });\\n  }\\n\\n  function formatHour(hour) {\\n    return hour < 10 ? `0${hour}:00` : `${hour}:00`;\\n  }\\n\\n  let hoveredDay = null;\\n\\n  function handleHover(hour) {\\n    hoveredDay = hour;\\n  }\\n\\n  function handleMouseLeave() {\\n    hoveredDay = null;\\n  }\\n\\n  $: formattedDay = new Intl.DateTimeFormat(\\"en-GB\\", {\\n    day: \\"numeric\\",\\n    month: \\"long\\",\\n    timeZone: \\"UTC\\",\\n  }).format(selectedDate);\\n  $: formattedWeek = new Intl.DateTimeFormat(\\"en-GB\\", {\\n    weekday: \\"long\\",\\n    timeZone: \\"UTC\\",\\n  }).format(selectedDate);\\n<\/script>\\n\\n<div class=\\"overflow-hidden mx-auto w-full\\">\\n  <div class=\\"grid grid-cols-8 gap-0\\">\\n    <div class=\\"empty-cell col-span-1\\" />\\n    <h2 class=\\"text-left col-span-7 p-2\\">\\n      <span class=\\"text-[#252B37] text-lg leading-[18px] font-normal\\"\\n        >{formattedWeek}</span\\n      >,\\n      <span class=\\"text-[#666C79] text-sm font-normal\\">{formattedDay}</span>\\n    </h2>\\n  </div>\\n  <div\\n    class=\\"grid grid-cols-8 gap-0 border-r-[0.5px] border-t-[0.5px] border-l-[0.5px] border-stroke-Primary rounded-lg\\"\\n  >\\n    {#each hoursInDay as hourBlock}\\n      <div class=\\"hour-cell flex justify-center items-center text-center py-3\\">\\n        {formatHour(hourBlock.hour)}\\n      </div>\\n      <!-- svelte-ignore missing-declaration -->\\n      <!-- svelte-ignore a11y-no-static-element-interactions -->\\n      <div\\n        class=\\"day-cell p-2 pb-3 flex sm:gap-3 text-center col-span-7\\"\\n        on:mouseenter={() => handleHover(hourBlock)}\\n        on:mouseleave={handleMouseLeave}\\n      >\\n        {#each hourBlock.events as event}\\n          {#if scheduleRecurring}\\n            <Badge\\n              event=\\"squareEvent\\"\\n              eventBgColor=\\"hsla(0, 0%, 100%, 1)\\"\\n              eventTextColor=\\"hsla(220, 20%, 18%, 1)\\"\\n              on:click={() => alert(\\"You clicked on an event!\\")}\\n            >\\n              {event.name}\\n            </Badge>\\n          {:else if eventCalendar}\\n            <Badge\\n              event=\\"circleEvent\\"\\n              eventBgColor=\\"hsla(209, 99%, 50%, 0.15)\\"\\n              eventTextColor=\\"hsla(209, 99%, 50%, 1)\\"\\n              on:click={() => alert(\\"You clicked on an event!\\")}\\n            >\\n              {truncateTitle(event.name, 13)}\\n            </Badge>\\n          {:else if embedCalendar}\\n            <!-- svelte-ignore a11y-click-events-have-key-events -->\\n            <div\\n              class=\\"w-[150px] flex flex-col items-center gap-1.5 p-[5px] embedCalendar  rounded\\"\\n              on:click={() => alert(\\"You clicked on an event!\\")}\\n            >\\n              <img\\n                class=\\"image\\"\\n                height=\\"46px\\"\\n                src={event.image}\\n                alt={event.name}\\n              />\\n              <div class=\\"timeline hidden sm:flex\\">{event.timeline}</div>\\n              <div class=\\"desc\\">{event.name}</div>\\n            </div>\\n          {/if}\\n        {/each}\\n        {#if isScheduledBtn && hoveredDay === hourBlock}\\n          <div class=\\"mt-auto mx-auto\\">\\n            <Button ScheduledBtn beforeIcon={AddMainBlue}>Schedule</Button>\\n          </div>\\n        {/if}\\n      </div>\\n    {/each}\\n  </div>\\n</div>\\n\\n<style>\\n  .grid {\\n    width: 100%;\\n  }\\n  .hour-cell {\\n    border-bottom: 0.5px solid var(--Stroke-Primary, #d4d6d9);\\n    border-right: 0.5px solid var(--Stroke-Primary, #d4d6d9);\\n    color: var(--text-tartiary, #666c79);\\n    font-size: 14px;\\n  }\\n\\n  .day-cell {\\n    font-size: 14px;\\n    border-bottom: 0.5px solid var(--Stroke-Primary, #d4d6d9);\\n    display: flex;\\n    align-items: flex-start;\\n    padding-left: 10px;\\n  }\\n  .image {\\n    border-radius: var(--rounded-sm, 2px);\\n    background: url(<path-to-image>) lightgray 50% / cover no-repeat;\\n    box-shadow:\\n      0px 20px 6px 0px rgba(0, 0, 0, 0),\\n      0px 13px 5px 0px rgba(0, 0, 0, 0.02),\\n      0px 7px 4px 0px rgba(0, 0, 0, 0.08),\\n      0px 3px 3px 0px rgba(0, 0, 0, 0.14),\\n      0px 1px 2px 0px rgba(0, 0, 0, 0.16);\\n  }\\n  .timeline {\\n    color: #666c79;\\n    font-size: 8px;\\n    font-style: italic;\\n    font-weight: 300;\\n    line-height: 8px;\\n    letter-spacing: -0.4px;\\n    text-align: center;\\n  }\\n\\n  .embedCalendar {\\n    box-shadow:\\n      0px 56px 16px 0px rgba(43, 43, 43, 0),\\n      0px 36px 14px 0px rgba(43, 43, 43, 0.01),\\n      0px 20px 12px 0px rgba(43, 43, 43, 0.05),\\n      0px 9px 9px 0px rgba(43, 43, 43, 0.09),\\n      0px 2px 5px 0px rgba(43, 43, 43, 0.1);\\n  }\\n\\n  .embedCalendar .desc {\\n    color: #0d1526;\\n    text-align: center;\\n    font-size: 8px;\\n    font-style: normal;\\n    font-weight: 500;\\n    line-height: 10px;\\n    letter-spacing: -0.16px;\\n  }\\n\\n  @media (max-width: 1024px) {\\n    .hour-cell,\\n    .day-cell {\\n      font-size: 12px;\\n      padding: 8px;\\n    }\\n  }\\n\\n  @media (max-width: 768px) {\\n    .hour-cell,\\n    .day-cell {\\n      font-size: 10px;\\n      padding: 6px;\\n    }\\n  }\\n\\n  @media (max-width: 640px) {\\n    .hour-cell,\\n    .day-cell {\\n      font-size: 8px;\\n      padding: 4px;\\n    }\\n    .embedCalendar{\\n      box-shadow: none;\\n    }\\n    .day-cell {\\n      flex-direction: row;\\n  }\\n  }\\n\\n  @keyframes pulse {\\n    0%,\\n    100% {\\n      opacity: 1;\\n    }\\n    50% {\\n      opacity: 0.5;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
function formatHour(hour) {
  return hour < 10 ? `0${hour}:00` : `${hour}:00`;
}
const DailyView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formattedDay;
  let formattedWeek;
  let { isScheduledBtn = false } = $$props;
  let { scheduleRecurring = false } = $$props;
  let { eventCalendar = false } = $$props;
  let { embedCalendar = false } = $$props;
  let { currentevents = [] } = $$props;
  let { selectedDate } = $$props;
  let hoursInDay = [];
  let hoveredDay = null;
  if ($$props.isScheduledBtn === void 0 && $$bindings.isScheduledBtn && isScheduledBtn !== void 0) $$bindings.isScheduledBtn(isScheduledBtn);
  if ($$props.scheduleRecurring === void 0 && $$bindings.scheduleRecurring && scheduleRecurring !== void 0) $$bindings.scheduleRecurring(scheduleRecurring);
  if ($$props.eventCalendar === void 0 && $$bindings.eventCalendar && eventCalendar !== void 0) $$bindings.eventCalendar(eventCalendar);
  if ($$props.embedCalendar === void 0 && $$bindings.embedCalendar && embedCalendar !== void 0) $$bindings.embedCalendar(embedCalendar);
  if ($$props.currentevents === void 0 && $$bindings.currentevents && currentevents !== void 0) $$bindings.currentevents(currentevents);
  if ($$props.selectedDate === void 0 && $$bindings.selectedDate && selectedDate !== void 0) $$bindings.selectedDate(selectedDate);
  $$result.css.add(css);
  {
    {
      hoursInDay = Array.from({ length: 24 }, (_, i) => ({ hour: i, events: [] }));
      hoursInDay = hoursInDay.map((hour) => {
        hour.events = currentevents.filter((event) => {
          const eventDate = new Date(event.date);
          return getHours(new Date(event.date)) === hour.hour && eventDate.getUTCMonth() === selectedDate.getUTCMonth() && eventDate.getUTCDay() === selectedDate.getUTCDay() && eventDate.getUTCFullYear() === selectedDate.getUTCFullYear() && eventDate.getUTCDate() === selectedDate.getUTCDate();
        });
        return hour;
      });
    }
  }
  formattedDay = new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      timeZone: "UTC"
    }
  ).format(selectedDate);
  formattedWeek = new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: "UTC" }).format(selectedDate);
  return `<div class="overflow-hidden mx-auto w-full"><div class="grid grid-cols-8 gap-0 svelte-1mqwu8m"><div class="empty-cell col-span-1"></div> <h2 class="text-left col-span-7 p-2"><span class="text-[#252B37] text-lg leading-[18px] font-normal">${escape(formattedWeek)}</span>,
      <span class="text-[#666C79] text-sm font-normal">${escape(formattedDay)}</span></h2></div> <div class="grid grid-cols-8 gap-0 border-r-[0.5px] border-t-[0.5px] border-l-[0.5px] border-stroke-Primary rounded-lg svelte-1mqwu8m">${each(hoursInDay, (hourBlock) => {
    return `<div class="hour-cell flex justify-center items-center text-center py-3 svelte-1mqwu8m">${escape(formatHour(hourBlock.hour))}</div>   <div class="day-cell p-2 pb-3 flex sm:gap-3 text-center col-span-7 svelte-1mqwu8m">${each(hourBlock.events, (event) => {
      return `${scheduleRecurring ? `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          event: "squareEvent",
          eventBgColor: "hsla(0, 0%, 100%, 1)",
          eventTextColor: "hsla(220, 20%, 18%, 1)"
        },
        {},
        {
          default: () => {
            return `${escape(event.name)} `;
          }
        }
      )}` : `${eventCalendar ? `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          event: "circleEvent",
          eventBgColor: "hsla(209, 99%, 50%, 0.15)",
          eventTextColor: "hsla(209, 99%, 50%, 1)"
        },
        {},
        {
          default: () => {
            return `${escape(truncateTitle(event.name, 13))} `;
          }
        }
      )}` : `${embedCalendar ? ` <div class="w-[150px] flex flex-col items-center gap-1.5 p-[5px] embedCalendar rounded svelte-1mqwu8m"><img class="image svelte-1mqwu8m" height="46px"${add_attribute("src", event.image, 0)}${add_attribute("alt", event.name, 0)}> <div class="timeline hidden sm:flex svelte-1mqwu8m">${escape(event.timeline)}</div> <div class="desc svelte-1mqwu8m">${escape(event.name)}</div> </div>` : ``}`}`}`;
    })} ${isScheduledBtn && hoveredDay === hourBlock ? `<div class="mt-auto mx-auto">${validate_component(Button, "Button").$$render(
      $$result,
      {
        ScheduledBtn: true,
        beforeIcon: AddMainBlue
      },
      {},
      {
        default: () => {
          return `Schedule`;
        }
      }
    )} </div>` : ``} </div>`;
  })}</div> </div>`;
});
export {
  DailyView as D
};
