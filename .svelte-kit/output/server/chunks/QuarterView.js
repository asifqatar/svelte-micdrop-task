import { c as create_ssr_component, d as each, e as escape, b as add_attribute } from "./ssr.js";
import { getDaysInMonth, getDay, startOfMonth } from "date-fns";
import { w as writable } from "./index.js";
const QuarterView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentYear;
  let currentQuarter;
  let quarterStartMonth;
  let quarterMonths;
  let { currentevents = {} } = $$props;
  let { year = null } = $$props;
  let { quarter = null } = $$props;
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
    "December"
  ];
  const weeks = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  let events = {};
  let daysInMonths = [];
  let loading = writable(true);
  function isEvent(month, day) {
    const dateKey = `${currentYear}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events[dateKey];
  }
  if ($$props.currentevents === void 0 && $$bindings.currentevents && currentevents !== void 0) $$bindings.currentevents(currentevents);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.quarter === void 0 && $$bindings.quarter && quarter !== void 0) $$bindings.quarter(quarter);
  currentYear = year;
  currentQuarter = quarter;
  {
    (async () => {
      loading.set(true);
      currentevents.forEach((event) => {
        const eventDate = new Date(event.date);
        const dateKey = `${eventDate.getUTCFullYear()}-${String(eventDate.getUTCMonth() + 1).padStart(2, "0")}-${String(eventDate.getUTCDate()).padStart(2, "0")}`;
        events[dateKey] = true;
      });
      daysInMonths = months.map((_, index) => {
        const date = new Date(currentYear, index, 1);
        return {
          days: getDaysInMonth(date),
          startDay: getDay(startOfMonth(date)),
          prevMonthDays: getDaysInMonth(new Date(currentYear, index - 1, 1))
        };
      });
      loading.set(false);
    })();
  }
  quarterStartMonth = (currentQuarter - 1) * 3;
  quarterMonths = months.slice(quarterStartMonth, quarterStartMonth + 3);
  return `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 overflow-hidden mx-auto">${each(quarterMonths, (month, qIndex) => {
    return `<div class="mt-4"><button class="text-center text-Text-Primary text-xl font-normal leading-5 mb-5 w-full">${escape(month)} ${escape(currentYear)}</button> <div class="border-[0.5px] border-stroke-Primary rounded-lg grid grid-cols-7">${each(weeks, (week) => {
      return `<div class="text-Text-Tartiary border-b-[0.5px] border-stroke-Primary py-2 text-sm leading-[14px] font-normal text-center">${escape(week)} </div>`;
    })} ${each(Array(42).fill().map((_, i) => i), (i) => {
      return `${i < daysInMonths[quarterStartMonth + qIndex]?.startDay ? `<div class="flex items-center justify-center h-12 text-[16px] font-normal text-Text-Tartiary opacity-[0.16] leading-4">${escape(daysInMonths[quarterStartMonth + qIndex].prevMonthDays - daysInMonths[quarterStartMonth + qIndex]?.startDay + i + 1)} </div>` : `${i >= daysInMonths[quarterStartMonth + qIndex]?.startDay && i < daysInMonths[quarterStartMonth + qIndex]?.startDay + daysInMonths[quarterStartMonth + qIndex]?.days ? `<div${add_attribute(
        "class",
        `flex items-center justify-center text-Text-Tartiary m-[1px] h-12 text-[16px] font-normal leading-4 cursor-pointer rounded-md
                  ${isEvent(quarterStartMonth + qIndex, i - daysInMonths[quarterStartMonth + qIndex]?.startDay + 1) ? "bg-[#0284FE26] hover:text-white" : "hover:text-white"}
                  hover:bg-brand-Primary `,
        0
      )}>${escape(i - daysInMonths[quarterStartMonth + qIndex]?.startDay + 1)} </div>` : `<div class="flex items-center justify-center h-12 text-[16px] font-normal text-Text-Tartiary opacity-[0.16] leading-4">${escape(i - (daysInMonths[quarterStartMonth + qIndex]?.startDay + daysInMonths[quarterStartMonth + qIndex]?.days) + 1)} </div>`}`}`;
    })}</div> </div>`;
  })}</div>`;
});
export {
  QuarterView as Q
};
