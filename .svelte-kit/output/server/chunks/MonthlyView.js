import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "./ssr.js";
import { format, getDaysInMonth, getDay, startOfMonth } from "date-fns";
import { B as Badge } from "./Badge.js";
let mockEvents = [];
async function fetchEventsFromAPI() {
  try {
    const response = await fetch("/api/getEventsForVenue");
    if (response.ok) {
      const events = await response.json();
      console.log("Fetched events:", events);
      return events.map((event) => ({
        id: event.ID,
        date: event.startDateTime,
        title: event.title
      }));
    } else {
      console.error("Failed to load events:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
async function fetchEventsForMonth(year, month) {
  mockEvents = await fetchEventsFromAPI();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockEvents.filter(
          (event) => event.date.startsWith(`${year}-${String(month).padStart(2, "0")}`)
        )
      );
    }, 500);
  });
}
const css = {
  code: ".calendar.svelte-obmsx5.svelte-obmsx5{display:grid;grid-template-columns:repeat(7, minmax(100px, 1fr));grid-template-rows:auto;grid-auto-rows:minmax(158px, auto)}.day-container.svelte-obmsx5.svelte-obmsx5{border-left:1px solid #d4d6d9;border-top:1px solid #d4d6d9;padding:12px;gap:12px;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.calendar.svelte-obmsx5>.day-container.svelte-obmsx5,.calendar.svelte-obmsx5>div.svelte-obmsx5{border-left:1px solid #d4d6d9;border-top:1px solid #d4d6d9}.calendar.svelte-obmsx5>.day-container.svelte-obmsx5:nth-last-child(-n + 7),.calendar.svelte-obmsx5>div.svelte-obmsx5:nth-last-child(-n + 7){border-bottom:1px solid #d4d6d9}.calendar.svelte-obmsx5>.day-container.svelte-obmsx5:last-of-type{border-right:1px solid #d4d6d9;border-bottom:none}.day.svelte-obmsx5.svelte-obmsx5{font-size:18px;color:#0d1526;font-weight:400;line-height:18px;font-style:normal}@media(max-width: 1024px){.calendar.svelte-obmsx5.svelte-obmsx5{grid-template-columns:repeat(7, minmax(100px, 1fr))}.day.svelte-obmsx5.svelte-obmsx5{font-size:16px}}@media(max-width: 768px){.calendar.svelte-obmsx5.svelte-obmsx5{grid-template-columns:repeat(7, minmax(70px, 1fr))}.day.svelte-obmsx5.svelte-obmsx5{font-size:14px}.day-container.svelte-obmsx5.svelte-obmsx5{padding:6px 4px}}@media(max-width: 480px){.calendar.svelte-obmsx5.svelte-obmsx5{grid-template-columns:repeat(7, minmax(30px, 1fr))}.day.svelte-obmsx5.svelte-obmsx5{font-size:12px}}",
  map: '{"version":3,"file":"MonthlyView.svelte","sources":["MonthlyView.svelte"],"sourcesContent":["<script>\\n  import { getDay, getDaysInMonth, startOfMonth, format } from \\"date-fns\\";\\n  import { fetchEventsForMonth } from \\"./../../../services/EventService\\";\\n  import Badge from \\"../../Badges/Badge.svelte\\";\\n  import { onMount } from \\"svelte\\";\\n\\n  export let currentYear;\\n  export let currentMonth;\\n\\n  let selectedDate;\\n  let daysInMonth = [];\\n  let monthName = \\"\\";\\n  let events = [];\\n\\n  $: selectedDate = new Date(Date.UTC(currentYear, currentMonth, 1));\\n  $: monthName = format(selectedDate, \\"MMMM\\");\\n\\n  async function setupDaysAndEvents() {\\n    const days = getDaysInMonth(selectedDate);\\n    const startDay = getDay(startOfMonth(selectedDate));\\n\\n    daysInMonth = Array.from({ length: days }, (_, i) => ({\\n      day: i + 1,\\n      startDay: startDay + i,\\n      events: [],\\n    }));\\n\\n    events = await fetchEventsForMonth(currentYear, currentMonth + 1);\\n\\n    daysInMonth = daysInMonth.map((day) => {\\n      day.events = events.filter((event) => {\\n        const eventDate = new Date(event.date);\\n        return (\\n          eventDate.getUTCFullYear() === currentYear &&\\n          eventDate.getUTCMonth() === currentMonth &&\\n          eventDate.getUTCDate() === day.day\\n        );\\n      });\\n      return day;\\n    });\\n  }\\n\\n  onMount(setupDaysAndEvents);\\n\\n  $: if (currentYear && currentMonth !== undefined) {\\n    setupDaysAndEvents();\\n  }\\n\\n  function navigateToDay(day) {\\n    const dayString = String(day).padStart(2, \\"0\\");\\n    const monthString = String(currentMonth + 1).padStart(2, \\"0\\");\\n    const route = `/daily/${currentYear}-${monthString}-${dayString}`;\\n    // goto(route);\\n  }\\n<\/script>\\n\\n<div class=\\"max-w-[1200px] overflow-hidden mx-auto w-full bg-BG-Primary my-4\\">\\n  <div\\n    class=\\"calendar w-full overflow-hidden mx-auto grid rounded-lg border-t border-r border-b border-stroke-Primary\\"\\n  >\\n    {#each [\\"Sun\\", \\"Mon\\", \\"Tue\\", \\"Wed\\", \\"Thu\\", \\"Fri\\", \\"Sat\\"] as dayName}\\n      <span\\n        class=\\"flex p-3 items-center justify-center gap-3 bg-BG-Primary text-Text-Tertiary leading-[18px] font-normal text-[14px] sm:text-lg border-l border-stroke-Primary\\"\\n      >\\n        {dayName}\\n      </span>\\n    {/each}\\n\\n    {#each Array(daysInMonth[0]?.startDay || 0)\\n      .fill()\\n      .map(() => \\"\\") as _}\\n      <div></div>\\n    {/each}\\n    {#each daysInMonth as day}\\n      <!-- svelte-ignore a11y-no-static-element-interactions -->\\n      <!-- svelte-ignore a11y-click-events-have-key-events -->\\n      <div\\n        class=\\"day-container text-[#252B37] flex flex-col items-center\\"\\n        on:click={() => navigateToDay(day.day)}\\n      >\\n        <span class=\\"day\\">{day.day}</span>\\n        <div class=\\"mt-1 w-full flex flex-col items-center gap-1 p-1\\">\\n          {#each day.events as event}\\n            <Badge\\n              event=\\"squareEvent\\"\\n              eventBgColor=\\"hsla(0, 0%, 100%, 1)\\"\\n              eventTextColor=\\"hsla(220, 20%, 18%, 1)\\"\\n            >\\n              {event.title}\\n            </Badge>\\n          {/each}\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</div>\\n\\n<style>\\n  .calendar {\\n    display: grid;\\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\\n    grid-template-rows: auto;\\n    grid-auto-rows: minmax(158px, auto);\\n  }\\n\\n  .day-container {\\n    border-left: 1px solid #d4d6d9;\\n    border-top: 1px solid #d4d6d9;\\n    padding: 12px;\\n    gap: 12px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    width: 100%;\\n  }\\n\\n  .calendar > .day-container,\\n  .calendar > div {\\n    border-left: 1px solid #d4d6d9;\\n    border-top: 1px solid #d4d6d9;\\n  }\\n\\n  .calendar > .day-container:nth-last-child(-n + 7),\\n  .calendar > div:nth-last-child(-n + 7) {\\n    border-bottom: 1px solid #d4d6d9;\\n  }\\n\\n  .calendar > .day-container:last-of-type {\\n    border-right: 1px solid #d4d6d9;\\n    border-bottom: none;\\n  }\\n\\n  .day {\\n    font-size: 18px;\\n    color: #0d1526;\\n    font-weight: 400;\\n    line-height: 18px;\\n    font-style: normal;\\n  }\\n\\n  @media (max-width: 1024px) {\\n    .calendar {\\n      grid-template-columns: repeat(7, minmax(100px, 1fr));\\n    }\\n\\n    .day {\\n      font-size: 16px;\\n    }\\n  }\\n\\n  @media (max-width: 768px) {\\n    .calendar {\\n      grid-template-columns: repeat(7, minmax(70px, 1fr));\\n    }\\n\\n    .day {\\n      font-size: 14px;\\n    }\\n\\n    .day-container {\\n      padding: 6px 4px;\\n    }\\n  }\\n\\n  @media (max-width: 480px) {\\n    .calendar {\\n      grid-template-columns: repeat(7, minmax(30px, 1fr));\\n    }\\n\\n    .day {\\n      font-size: 12px;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkGE,qCAAU,CACR,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CACpD,kBAAkB,CAAE,IAAI,CACxB,cAAc,CAAE,OAAO,KAAK,CAAC,CAAC,IAAI,CACpC,CAEA,0CAAe,CACb,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC9B,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC7B,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,UAAU,CAC3B,KAAK,CAAE,IACT,CAEA,uBAAS,CAAG,4BAAc,CAC1B,uBAAS,CAAG,iBAAI,CACd,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC9B,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OACxB,CAEA,uBAAS,CAAG,4BAAc,gBAAgB,MAAM,CAAC,CACjD,uBAAS,CAAG,iBAAG,gBAAgB,MAAM,CAAE,CACrC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAC3B,CAEA,uBAAS,CAAG,4BAAc,aAAc,CACtC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC/B,aAAa,CAAE,IACjB,CAEA,gCAAK,CACH,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,MACd,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,qCAAU,CACR,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CACrD,CAEA,gCAAK,CACH,SAAS,CAAE,IACb,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAU,CACR,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,GAAG,CAAC,CACpD,CAEA,gCAAK,CACH,SAAS,CAAE,IACb,CAEA,0CAAe,CACb,OAAO,CAAE,GAAG,CAAC,GACf,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAU,CACR,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,GAAG,CAAC,CACpD,CAEA,gCAAK,CACH,SAAS,CAAE,IACb,CACF"}'
};
const MonthlyView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentYear } = $$props;
  let { currentMonth } = $$props;
  let selectedDate;
  let daysInMonth = [];
  let events = [];
  async function setupDaysAndEvents() {
    const days = getDaysInMonth(selectedDate);
    const startDay = getDay(startOfMonth(selectedDate));
    daysInMonth = Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      startDay: startDay + i,
      events: []
    }));
    events = await fetchEventsForMonth(currentYear, currentMonth + 1);
    daysInMonth = daysInMonth.map((day) => {
      day.events = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getUTCFullYear() === currentYear && eventDate.getUTCMonth() === currentMonth && eventDate.getUTCDate() === day.day;
      });
      return day;
    });
  }
  if ($$props.currentYear === void 0 && $$bindings.currentYear && currentYear !== void 0) $$bindings.currentYear(currentYear);
  if ($$props.currentMonth === void 0 && $$bindings.currentMonth && currentMonth !== void 0) $$bindings.currentMonth(currentMonth);
  $$result.css.add(css);
  selectedDate = new Date(Date.UTC(currentYear, currentMonth, 1));
  format(selectedDate, "MMMM");
  {
    if (currentYear && currentMonth !== void 0) {
      setupDaysAndEvents();
    }
  }
  return `<div class="max-w-[1200px] overflow-hidden mx-auto w-full bg-BG-Primary my-4"><div class="calendar w-full overflow-hidden mx-auto grid rounded-lg border-t border-r border-b border-stroke-Primary svelte-obmsx5">${each(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (dayName) => {
    return `<span class="flex p-3 items-center justify-center gap-3 bg-BG-Primary text-Text-Tertiary leading-[18px] font-normal text-[14px] sm:text-lg border-l border-stroke-Primary">${escape(dayName)} </span>`;
  })} ${each(Array(daysInMonth[0]?.startDay || 0).fill().map(() => ""), (_) => {
    return `<div class="svelte-obmsx5"></div>`;
  })} ${each(daysInMonth, (day) => {
    return `  <div class="day-container text-[#252B37] flex flex-col items-center svelte-obmsx5"><span class="day svelte-obmsx5">${escape(day.day)}</span> <div class="mt-1 w-full flex flex-col items-center gap-1 p-1">${each(day.events, (event) => {
      return `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          event: "squareEvent",
          eventBgColor: "hsla(0, 0%, 100%, 1)",
          eventTextColor: "hsla(220, 20%, 18%, 1)"
        },
        {},
        {
          default: () => {
            return `${escape(event.title)} `;
          }
        }
      )}`;
    })}</div> </div>`;
  })}</div> </div>`;
});
export {
  MonthlyView as M
};
