import { c as create_ssr_component, b as add_attribute, v as validate_component, a as subscribe, e as escape, d as each, f as createEventDispatcher, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
import { I as Input } from "../../chunks/Input.js";
import { w as writable } from "../../chunks/index.js";
import { C as Cancel, p as pdfUpload, A as AddMain } from "../../chunks/pdf-upload-download.js";
import { B as Badge } from "../../chunks/Badge.js";
import { D as DailyView } from "../../chunks/DailyView.js";
import { W as WeeklyView } from "../../chunks/WeeklyView.js";
import { Q as QuarterView } from "../../chunks/QuarterView.js";
import { Y as YearlyView } from "../../chunks/YearlyView.js";
import { getDaysInMonth, getDay, startOfMonth } from "date-fns";
import { A as AddMainBlue } from "../../chunks/add-main-blue.js";
import { t as truncateTitle } from "../../chunks/utils.js";
import "clsx";
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    stageName: "",
    location: ""
  } } = $$props;
  let { formErrors = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    stageName: "",
    location: ""
  } } = $$props;
  let form;
  if ($$props.formData === void 0 && $$bindings.formData && formData !== void 0) $$bindings.formData(formData);
  if ($$props.formErrors === void 0 && $$bindings.formErrors && formErrors !== void 0) $$bindings.formErrors(formErrors);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form class="w-full mx-auto flex flex-col gap-6"${add_attribute("this", form, 0)}><h2 class="text-2xl font-normal text-Text-Tartiary leading-6" data-svelte-h="svelte-1a7x2zh">Basic info</h2> <div class="flex justify-between gap-4">${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "First Name",
        id: "firstName",
        name: "firstName",
        placeholder: "Peet",
        required: true,
        className: "w-full",
        size: "full",
        errorText: formErrors.firstName,
        value: formData.firstName
      },
      {
        value: ($$value) => {
          formData.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Last Name",
        id: "lastName",
        name: "lastName",
        placeholder: "Guercio",
        required: true,
        className: "w-full",
        size: "full",
        errorText: formErrors.lastName,
        value: formData.lastName
      },
      {
        value: ($$value) => {
          formData.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex justify-between gap-4">${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Email address",
        type: "email",
        id: "email",
        name: "email",
        placeholder: "name@example.com",
        required: true,
        className: "w-full",
        size: "full",
        errorText: formErrors.email,
        value: formData.email
      },
      {
        value: ($$value) => {
          formData.email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Phone",
        type: "phoneNumber",
        id: "phone",
        name: "phone",
        placeholder: "xxx-xxx-xxxx",
        required: true,
        className: "w-full",
        size: "full",
        errorText: formErrors.phone,
        value: formData.phone
      },
      {
        value: ($$value) => {
          formData.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Stage name (optional)",
        type: "text",
        id: "stageName",
        name: "stageName",
        placeholder: "Stage name",
        size: "full",
        buttonText: "Edit",
        controlled: true,
        errorText: formErrors.stageName,
        helperText: "How you’ll be identified by club managers and displayed on event pages",
        value: formData.stageName
      },
      {
        value: ($$value) => {
          formData.stageName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Location",
        type: "text",
        id: "location",
        name: "location",
        placeholder: "New York, USA",
        required: true,
        size: "full",
        buttonText: "Edit",
        controlled: true,
        errorText: formErrors.location,
        value: formData.location
      },
      {
        value: ($$value) => {
          formData.location = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex justify-between gap-4 mx-auto">${validate_component(Button, "Button").$$render($$result, { type: "submit", className: "" }, {}, {
      default: () => {
        return `Save changes`;
      }
    })} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        strokebtn: true,
        type: "button",
        className: ""
      },
      {},
      {
        default: () => {
          return `Cancel`;
        }
      }
    )}</div></form>`;
  } while (!$$settled);
  return $$rendered;
});
const CalendarIcon = "/_app/immutable/assets/calendar-month.DUBirlvR.svg";
const ArrowLeft$1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='arrow-left'%3e%3cpath%20id='Vector'%20d='M14.8572%206.81378H3.90239L6.52282%204.06273C6.63197%203.95206%206.71903%203.81967%206.77892%203.6733C6.83881%203.52692%206.87034%203.36949%206.87166%203.21019C6.87298%203.05088%206.84406%202.8929%206.7866%202.74545C6.72914%202.59801%206.64428%202.46405%206.53698%202.3514C6.42968%202.23875%206.30209%202.14967%206.16164%202.08934C6.0212%202.02902%205.87072%201.99866%205.71898%202.00005C5.56724%202.00143%205.41728%202.03453%205.27786%202.0974C5.13843%202.16028%205.01233%202.25168%204.90691%202.36627L0.335739%207.16531C0.229315%207.27676%200.144878%207.40916%200.0872666%207.55491C0.0296551%207.70067%200%207.85693%200%208.01474C0%208.17255%200.0296551%208.32881%200.0872666%208.47457C0.144878%208.62033%200.229315%208.75273%200.335739%208.86417L4.90691%2013.6632C5.12244%2013.8818%205.41111%2014.0027%205.71075%2014C6.01039%2013.9972%206.29702%2013.871%206.5089%2013.6486C6.72078%2013.4262%206.84097%2013.1252%206.84357%2012.8107C6.84618%2012.4961%206.73099%2012.193%206.52282%2011.9668L3.90239%209.2133H14.8572C15.1603%209.2133%2015.451%209.0869%2015.6653%208.8619C15.8796%208.6369%2016%208.33174%2016%208.01354C16%207.69535%2015.8796%207.39018%2015.6653%207.16519C15.451%206.94019%2015.1603%206.81378%2014.8572%206.81378Z'%20fill='%23111928'/%3e%3c/g%3e%3c/svg%3e";
const ArrowRight$1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='arrow-right'%3e%3cpath%20id='Vector'%20d='M15.913%208.45783C15.9995%208.23906%2016.0222%207.99833%2015.978%207.76609C15.9339%207.53386%2015.8249%207.32055%2015.665%207.15317L11.0933%202.36541C10.9878%202.25109%2010.8617%202.15991%2010.7223%202.09718C10.5828%202.03445%2010.4329%202.00143%2010.2811%202.00005C10.1294%201.99866%209.97885%202.02895%209.83839%202.08913C9.69793%202.14931%209.57032%202.23819%209.463%202.35057C9.35569%202.46296%209.27083%202.5966%209.21336%202.7437C9.15589%202.8908%209.12697%203.04841%209.12829%203.20734C9.12961%203.36627%209.16114%203.52333%209.22104%203.66936C9.28094%203.81539%209.36801%203.94747%209.47717%204.05788L12.0991%206.80366H1.14293C0.839806%206.80366%200.549097%206.92977%200.334756%207.15423C0.120416%207.3787%200%207.68315%200%208.0006C0%208.31805%200.120416%208.62249%200.334756%208.84696C0.549097%209.07143%200.839806%209.19754%201.14293%209.19754H12.0991L9.47831%2011.9421C9.36915%2012.0525%209.28208%2012.1846%209.22218%2012.3306C9.16228%2012.4767%209.13075%2012.6337%209.12943%2012.7927C9.12811%2012.9516%209.15703%2013.1092%209.2145%2013.2563C9.27197%2013.4034%209.35683%2013.537%209.46415%2013.6494C9.57146%2013.7618%209.69907%2013.8507%209.83953%2013.9109C9.97999%2013.9711%2010.1305%2014.0013%2010.2823%2014C10.434%2013.9986%2010.584%2013.9656%2010.7234%2013.9028C10.8629%2013.8401%2010.989%2013.7489%2011.0944%2013.6346L15.6661%208.84683C15.772%208.7354%2015.8559%208.60322%2015.913%208.45783Z'%20fill='%23111928'/%3e%3c/g%3e%3c/svg%3e";
const css$5 = {
  code: ".overflow-auto.svelte-92dlhq{overflow-y:auto;max-height:250px}.overflow-auto.svelte-92dlhq::-webkit-scrollbar{width:0px}",
  map: `{"version":3,"file":"DatePicker.svelte","sources":["DatePicker.svelte"],"sourcesContent":["<script>\\n  import { writable } from \\"svelte/store\\";\\n  import Button from \\"./../Button/Button.svelte\\";\\n\\n  import CalendarIcon from \\"./../../assets/icons/calendar-month.svg\\";\\n  import ArrowLeft from \\"./../../assets/icons/arrow-left.svg\\";\\n  import ArrowRight from \\"./../../assets/icons/arrow-right.svg\\";\\n\\n  let selectedDate = writable(\\"\\");\\n  let selectedHour = writable(\\"01\\");\\n  let selectedMinute = writable(\\"00\\");\\n  let selectedMeridiem = writable(\\"AM\\");\\n\\n  let hours = Array.from({ length: 12 }, (_, i) =>\\n    String(i + 1).padStart(2, \\"0\\")\\n  );\\n  let isDatePickerOpen = writable(false);\\n\\n  let currentMonth = writable(new Date().getMonth());\\n  let currentYear = writable(new Date().getFullYear());\\n\\n  function toggleDatePicker() {\\n    isDatePickerOpen.update((state) => !state);\\n  }\\n  function selectDate(date) {\\n    if (date === \\"Today\\") {\\n      const now = new Date();\\n      const formattedDate = \`\${String(now.getMonth() + 1).padStart(2, \\"0\\")}/\${String(now.getDate()).padStart(2, \\"0\\")}/\${now.getFullYear()}\`;\\n      const hours = String(now.getHours() % 12 || 12).padStart(2, \\"0\\");\\n      const minutes = String(now.getMinutes()).padStart(2, \\"0\\");\\n      const meridiem = now.getHours() >= 12 ? \\"PM\\" : \\"AM\\";\\n\\n      selectedDate.set(formattedDate);\\n      selectedHour.set(hours);\\n      selectedMinute.set(minutes);\\n      selectedMeridiem.set(meridiem);\\n\\n      currentMonth.set(now.getMonth());\\n      currentYear.set(now.getFullYear());\\n    } else {\\n      selectedDate.set(date);\\n    }\\n    toggleDatePicker();\\n  }\\n\\n  function selectHour(hour) {\\n    selectedHour.set(hour);\\n  }\\n\\n  function selectMinute(minute) {\\n    selectedMinute.set(minute);\\n  }\\n\\n  function selectMeridiem(meridiem) {\\n    selectedMeridiem.set(meridiem);\\n  }\\n\\n  function daysInMonth(month, year) {\\n    return new Date(year, month + 1, 0).getDate();\\n  }\\n\\n  function firstDayOfMonth(month, year) {\\n    return new Date(year, month, 1).getDay();\\n  }\\n\\n  function prevMonth() {\\n    currentMonth.update((month) => {\\n      if (month === 0) {\\n        currentYear.update((year) => year - 1);\\n        return 11;\\n      }\\n      return month - 1;\\n    });\\n  }\\n\\n  function nextMonth() {\\n    currentMonth.update((month) => {\\n      if (month === 11) {\\n        currentYear.update((year) => year + 1);\\n        return 0;\\n      }\\n      return month + 1;\\n    });\\n  }\\n\\n  $: daysArray = Array.from(\\n    { length: daysInMonth($currentMonth, $currentYear) },\\n    (_, i) => i + 1\\n  );\\n  $: leadingBlanks = Array(firstDayOfMonth($currentMonth, $currentYear)).fill(\\n    null\\n  );\\n<\/script>\\n\\n<div class=\\"relative max-w-md mx-auto\\">\\n  <button\\n    class=\\"w-72 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]\\"\\n    on:click={toggleDatePicker}\\n  >\\n    {#if $selectedDate !== \\"\\"}\\n      {$selectedDate}, {$selectedHour}:{$selectedMinute} {$selectedMeridiem}\\n    {:else}\\n      Select date and time\\n    {/if}\\n    <span class=\\"ml-auto\\">\\n      <img src={CalendarIcon} alt=\\"Calendar Icon here\\" />\\n    </span>\\n  </button>\\n\\n  {#if $isDatePickerOpen}\\n    <div\\n      class=\\"absolute top-12 w-full bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10\\"\\n    >\\n      <div class=\\"flex justify-between items-center\\">\\n        <div>\\n          <div>\\n            <div class=\\"flex items-center justify-between px-1 pb-2\\">\\n              <button on:click={prevMonth}>\\n                <img src={ArrowLeft} alt=\\"Left Icon here\\" />\\n              </button>\\n              <span class=\\"text-gray-900 text-[12px] font-bold leading-[18px]\\">\\n                {new Date($currentYear, $currentMonth).toLocaleString(\\n                  \\"default\\",\\n                  {\\n                    month: \\"long\\",\\n                  }\\n                )}{\\" \\"}\\n                {$currentYear}\\n              </span>\\n              <button on:click={nextMonth}>\\n                <img src={ArrowRight} alt=\\"Right icon here\\" />\\n              </button>\\n            </div>\\n\\n            <div\\n              class=\\"grid grid-cols-7 gap-1 text-center text-sm leading-[18px] font-semibold text-gray-900\\"\\n            >\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1\\">Sun</div>\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1\\">Mon</div>\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1\\">Tue</div>\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1\\">Wed</div>\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1\\">Thu</div>\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1\\">Fri</div>\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1\\">Sat</div>\\n\\n              {#each leadingBlanks as _}\\n                <div></div>\\n              {/each}\\n\\n              {#each daysArray as day}\\n                <!-- svelte-ignore a11y-click-events-have-key-events -->\\n                <!-- svelte-ignore a11y-no-static-element-interactions -->\\n                <div\\n                  class=\\"cursor-pointer p-2 rounded-lg {$selectedDate ===\\n                  \`\${String($currentMonth + 1).padStart(2, '0')}/\${String(day).padStart(2, '0')}/\${$currentYear}\`\\n                    ? 'bg-[#0284fe] text-white'\\n                    : 'hover:bg-blue-100'}\\"\\n                  on:click={() =>\\n                    selectDate(\\n                      \`\${String($currentMonth + 1).padStart(2, \\"0\\")}/\${String(\\n                        day\\n                      ).padStart(2, \\"0\\")}/\${$currentYear}\`\\n                    )}\\n                >\\n                  {day}\\n                </div>\\n              {/each}\\n            </div>\\n          </div>\\n          <div class=\\"gap-1 flex justify-between items-end mt-4\\">\\n            <Button size=\\"full\\" on:click={() => selectDate(\\"Today\\")}>\\n              Today\\n            </Button>\\n            <Button\\n              strokebtn\\n              size=\\"full\\"\\n              on:click={() => {\\n                selectedDate.set(\\"\\");\\n                toggleDatePicker();\\n              }}\\n            >\\n              Clear\\n            </Button>\\n          </div>\\n        </div>\\n\\n        <div class=\\"grid grid-cols-3 gap-2 ml-4 -translate-y-0.5\\">\\n          <div\\n            class=\\"overflow-auto h-full text-[12px] text-center leading-[18px] font-medium\\"\\n          >\\n            <!-- Hour Picker -->\\n            {#each hours as hour}\\n              <!-- svelte-ignore a11y-click-events-have-key-events -->\\n              <!-- svelte-ignore a11y-no-static-element-interactions -->\\n              <div\\n                class=\\"cursor-pointer p-2 rounded-lg {$selectedHour === hour\\n                  ? 'bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center'\\n                  : 'hover:bg-blue-100'}\\"\\n                on:click={() => selectHour(hour)}\\n              >\\n                {hour}\\n              </div>\\n            {/each}\\n          </div>\\n\\n          <div\\n            class=\\"space-y-2 text-[12px] text-center leading-[18px] font-medium\\"\\n          >\\n            <!-- Minute Picker -->\\n            {#each [\\"00\\", \\"15\\", \\"30\\", \\"45\\"] as minute}\\n              <!-- svelte-ignore a11y-click-events-have-key-events -->\\n              <!-- svelte-ignore a11y-no-static-element-interactions -->\\n              <div\\n                class=\\"cursor-pointer p-2 rounded-lg {$selectedMinute === minute\\n                  ? 'bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center'\\n                  : 'hover:bg-blue-100'}\\"\\n                on:click={() => selectMinute(minute)}\\n              >\\n                {minute}\\n              </div>\\n            {/each}\\n          </div>\\n\\n          <div\\n            class=\\"space-y-2 text-[12px] text-center leading-[18px] font-medium\\"\\n          >\\n            {#each [\\"AM\\", \\"PM\\"] as meridiem}\\n              <!-- svelte-ignore a11y-no-static-element-interactions -->\\n              <!-- svelte-ignore a11y-click-events-have-key-events -->\\n              <div\\n                class=\\"cursor-pointer p-2 rounded-lg {$selectedMeridiem ===\\n                meridiem\\n                  ? 'bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center'\\n                  : 'hover:bg-blue-100'}\\"\\n                on:click={() => selectMeridiem(meridiem)}\\n              >\\n                {meridiem}\\n              </div>\\n            {/each}\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  {/if}\\n</div>\\n\\n<style>\\n  .overflow-auto {\\n    overflow-y: auto;\\n    max-height: 250px;\\n  }\\n  .overflow-auto::-webkit-scrollbar {\\n    width: 0px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuPE,4BAAe,CACb,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,KACd,CACA,4BAAc,mBAAoB,CAChC,KAAK,CAAE,GACT"}`
};
function daysInMonth$1(month2, year) {
  return new Date(year, month2 + 1, 0).getDate();
}
function firstDayOfMonth$1(month2, year) {
  return new Date(year, month2, 1).getDay();
}
const DatePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let daysArray;
  let leadingBlanks;
  let $currentYear, $$unsubscribe_currentYear;
  let $currentMonth, $$unsubscribe_currentMonth;
  let $selectedDate, $$unsubscribe_selectedDate;
  let $selectedHour, $$unsubscribe_selectedHour;
  let $selectedMinute, $$unsubscribe_selectedMinute;
  let $selectedMeridiem, $$unsubscribe_selectedMeridiem;
  let $isDatePickerOpen, $$unsubscribe_isDatePickerOpen;
  let selectedDate = writable("");
  $$unsubscribe_selectedDate = subscribe(selectedDate, (value) => $selectedDate = value);
  let selectedHour = writable("01");
  $$unsubscribe_selectedHour = subscribe(selectedHour, (value) => $selectedHour = value);
  let selectedMinute = writable("00");
  $$unsubscribe_selectedMinute = subscribe(selectedMinute, (value) => $selectedMinute = value);
  let selectedMeridiem = writable("AM");
  $$unsubscribe_selectedMeridiem = subscribe(selectedMeridiem, (value) => $selectedMeridiem = value);
  let hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  let isDatePickerOpen = writable(false);
  $$unsubscribe_isDatePickerOpen = subscribe(isDatePickerOpen, (value) => $isDatePickerOpen = value);
  let currentMonth = writable((/* @__PURE__ */ new Date()).getMonth());
  $$unsubscribe_currentMonth = subscribe(currentMonth, (value) => $currentMonth = value);
  let currentYear = writable((/* @__PURE__ */ new Date()).getFullYear());
  $$unsubscribe_currentYear = subscribe(currentYear, (value) => $currentYear = value);
  $$result.css.add(css$5);
  daysArray = Array.from(
    {
      length: daysInMonth$1($currentMonth, $currentYear)
    },
    (_, i) => i + 1
  );
  leadingBlanks = Array(firstDayOfMonth$1($currentMonth, $currentYear)).fill(null);
  $$unsubscribe_currentYear();
  $$unsubscribe_currentMonth();
  $$unsubscribe_selectedDate();
  $$unsubscribe_selectedHour();
  $$unsubscribe_selectedMinute();
  $$unsubscribe_selectedMeridiem();
  $$unsubscribe_isDatePickerOpen();
  return `<div class="relative max-w-md mx-auto"><button class="w-72 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]">${$selectedDate !== "" ? `${escape($selectedDate)}, ${escape($selectedHour)}:${escape($selectedMinute)} ${escape($selectedMeridiem)}` : `Select date and time`} <span class="ml-auto" data-svelte-h="svelte-r21re7"><img${add_attribute("src", CalendarIcon, 0)} alt="Calendar Icon here"></span></button> ${$isDatePickerOpen ? `<div class="absolute top-12 w-full bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10"><div class="flex justify-between items-center"><div><div><div class="flex items-center justify-between px-1 pb-2"><button data-svelte-h="svelte-s9l5c4"><img${add_attribute("src", ArrowLeft$1, 0)} alt="Left Icon here"></button> <span class="text-gray-900 text-[12px] font-bold leading-[18px]">${escape(new Date($currentYear, $currentMonth).toLocaleString("default", { month: "long" }))}${escape(" ")} ${escape($currentYear)}</span> <button data-svelte-h="svelte-pjq47w"><img${add_attribute("src", ArrowRight$1, 0)} alt="Right icon here"></button></div> <div class="grid grid-cols-7 gap-1 text-center text-sm leading-[18px] font-semibold text-gray-900"><div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1" data-svelte-h="svelte-iodggh">Sun</div> <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1" data-svelte-h="svelte-r4u2vt">Mon</div> <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1" data-svelte-h="svelte-sdxjph">Tue</div> <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1" data-svelte-h="svelte-wogxob">Wed</div> <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1" data-svelte-h="svelte-8rck36">Thu</div> <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1" data-svelte-h="svelte-146yavm">Fri</div> <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1" data-svelte-h="svelte-15b5ai3">Sat</div> ${each(leadingBlanks, (_) => {
    return `<div></div>`;
  })} ${each(daysArray, (day) => {
    return `  <div class="${"cursor-pointer p-2 rounded-lg " + escape(
      $selectedDate === `${String($currentMonth + 1).padStart(2, "0")}/${String(day).padStart(2, "0")}/${$currentYear}` ? "bg-[#0284fe] text-white" : "hover:bg-blue-100",
      true
    )}">${escape(day)} </div>`;
  })}</div></div> <div class="gap-1 flex justify-between items-end mt-4">${validate_component(Button, "Button").$$render($$result, { size: "full" }, {}, {
    default: () => {
      return `Today`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { strokebtn: true, size: "full" }, {}, {
    default: () => {
      return `Clear`;
    }
  })}</div></div> <div class="grid grid-cols-3 gap-2 ml-4 -translate-y-0.5"><div class="overflow-auto h-full text-[12px] text-center leading-[18px] font-medium svelte-92dlhq"> ${each(hours, (hour) => {
    return `  <div class="${"cursor-pointer p-2 rounded-lg " + escape(
      $selectedHour === hour ? "bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center" : "hover:bg-blue-100",
      true
    )}">${escape(hour)} </div>`;
  })}</div> <div class="space-y-2 text-[12px] text-center leading-[18px] font-medium"> ${each(["00", "15", "30", "45"], (minute) => {
    return `  <div class="${"cursor-pointer p-2 rounded-lg " + escape(
      $selectedMinute === minute ? "bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center" : "hover:bg-blue-100",
      true
    )}">${escape(minute)} </div>`;
  })}</div> <div class="space-y-2 text-[12px] text-center leading-[18px] font-medium">${each(["AM", "PM"], (meridiem) => {
    return `  <div class="${"cursor-pointer p-2 rounded-lg " + escape(
      $selectedMeridiem === meridiem ? "bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center" : "hover:bg-blue-100",
      true
    )}">${escape(meridiem)} </div>`;
  })}</div></div></div></div>` : ``} </div>`;
});
const css$4 = {
  code: ".modal-box.svelte-11h8cpz{box-shadow:0px 152px 43px 0px rgba(79, 79, 79, 0),\n      0px 97px 39px 0px rgba(79, 79, 79, 0.01),\n      0px 55px 33px 0px rgba(79, 79, 79, 0.05),\n      0px 24px 24px 0px rgba(79, 79, 79, 0.09),\n      0px 6px 13px 0px rgba(79, 79, 79, 0.1)}",
  map: '{"version":3,"file":"Modal.svelte","sources":["Modal.svelte"],"sourcesContent":["<script>\\n  import { createEventDispatcher } from \\"svelte\\";\\n  import Button from \\"../Button/Button.svelte\\";\\n  import Cancel from \\"../../assets/svg/cancel.svg\\";\\n\\n  export let show = false;\\n  export let title = \\"\\";\\n  export let description = \\"\\";\\n  export let warningText = \\"\\";\\n  export let actions = [];\\n  export let icon = null;\\n  export let closeBtn = false; // To show close button\\n\\n  const dispatch = createEventDispatcher();\\n\\n  const handleAction = (action) => {\\n    action.onClick();\\n    dispatch(action.label.toLowerCase());\\n    show = false;\\n  };\\n\\n  const stopPropagation = (event) => {\\n    event.stopPropagation();\\n  };\\n<\/script>\\n\\n{#if show}\\n  <div\\n    class=\\"fixed inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50\\"\\n    role=\\"presentation\\"\\n    on:click={() => (show = false)}\\n  >\\n    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n    <!-- svelte-ignore a11y-click-events-have-key-events -->\\n    <div\\n      class=\\"bg-white p-6 rounded-2xl modal-box text-center flex max-w-sm flex-col gap-6 w-full\\"\\n      role=\\"dialog\\"\\n      on:click={stopPropagation}\\n    >\\n      {#if closeBtn}\\n        <div class=\\"flex justify-end\\">\\n          <button class=\\"focus:outline-none\\" on:click={() => (show = false)}>\\n            <img src={Cancel} alt=\\"Close Icon\\" />\\n          </button>\\n        </div>\\n      {/if}\\n      {#if icon}\\n        <div class=\\"flex justify-center items-center\\">\\n          <img src={icon} alt=\\"Icon here\\" />\\n        </div>\\n      {/if}\\n      {#if title}\\n        <h2 class=\\"text-xl text-Text-Primary leading-5 font-normal\\">{title}</h2>\\n      {/if}\\n      {#if description}\\n        <p class=\\"text-Text-Tartiary text-sm leading-[22px] mx-4 font-normal\\">\\n          {description}\\n        </p>\\n      {/if}\\n      {#if warningText}\\n        <p\\n          class=\\"text-accent-Danger text-center text-sm leading-[22px] font-bold\\"\\n        >\\n          {warningText}\\n        </p>\\n      {/if}\\n      <div class=\\"flex justify-around gap-3\\">\\n        {#each actions as action}\\n          <Button\\n            size=\\"full\\"\\n            {...action}\\n            beforeIcon={action.beforeIcon}\\n            afterIcon={action.afterIcon}\\n            on:click={() => handleAction(action)}\\n            danger={action.label === \\"Delete\\" ? true : false}\\n          >\\n            {action.label}\\n          </Button>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n{/if}\\n\\n<style>\\n  .modal-box {\\n    box-shadow:\\n      0px 152px 43px 0px rgba(79, 79, 79, 0),\\n      0px 97px 39px 0px rgba(79, 79, 79, 0.01),\\n      0px 55px 33px 0px rgba(79, 79, 79, 0.05),\\n      0px 24px 24px 0px rgba(79, 79, 79, 0.09),\\n      0px 6px 13px 0px rgba(79, 79, 79, 0.1);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqFE,yBAAW,CACT,UAAU,CACR,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC;AAC5C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CACzC"}'
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { warningText = "" } = $$props;
  let { actions = [] } = $$props;
  let { icon = null } = $$props;
  let { closeBtn = false } = $$props;
  createEventDispatcher();
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.warningText === void 0 && $$bindings.warningText && warningText !== void 0) $$bindings.warningText(warningText);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.closeBtn === void 0 && $$bindings.closeBtn && closeBtn !== void 0) $$bindings.closeBtn(closeBtn);
  $$result.css.add(css$4);
  return `${show ? `<div class="fixed inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50" role="presentation">  <div class="bg-white p-6 rounded-2xl modal-box text-center flex max-w-sm flex-col gap-6 w-full svelte-11h8cpz" role="dialog">${closeBtn ? `<div class="flex justify-end"><button class="focus:outline-none" data-svelte-h="svelte-1ewpioa"><img${add_attribute("src", Cancel, 0)} alt="Close Icon"></button></div>` : ``} ${icon ? `<div class="flex justify-center items-center"><img${add_attribute("src", icon, 0)} alt="Icon here"></div>` : ``} ${title ? `<h2 class="text-xl text-Text-Primary leading-5 font-normal">${escape(title)}</h2>` : ``} ${description ? `<p class="text-Text-Tartiary text-sm leading-[22px] mx-4 font-normal">${escape(description)}</p>` : ``} ${warningText ? `<p class="text-accent-Danger text-center text-sm leading-[22px] font-bold">${escape(warningText)}</p>` : ``} <div class="flex justify-around gap-3">${each(actions, (action) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      Object.assign({}, { size: "full" }, action, { beforeIcon: action.beforeIcon }, { afterIcon: action.afterIcon }, {
        danger: action.label === "Delete" ? true : false
      }),
      {},
      {
        default: () => {
          return `${escape(action.label)} `;
        }
      }
    )}`;
  })}</div></div></div>` : ``}`;
});
const ArrowLeft = "data:image/svg+xml,%3csvg%20width='8'%20height='13'%20viewBox='0%200%208%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Path%202%20Copy'%20d='M7%2011.4961L2%206.49805L7%201.5'%20stroke='%23424242'%20stroke-width='2'/%3e%3c/svg%3e";
const ArrowRight = "data:image/svg+xml,%3csvg%20width='8'%20height='13'%20viewBox='0%200%208%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Path%202%20Copy%202'%20d='M1%2011.4961L6%206.49805L1%201.5'%20stroke='%23424242'%20stroke-width='2'/%3e%3c/svg%3e";
const css$3 = {
  code: ".bg-blue-300.svelte-1ry7d7j{background-color:#ebf5ff}",
  map: `{"version":3,"file":"DateRangePicker.svelte","sources":["DateRangePicker.svelte"],"sourcesContent":["<script>\\n  import { writable } from \\"svelte/store\\";\\n  import { createEventDispatcher } from \\"svelte\\";\\n  import Button from \\"./../Button/Button.svelte\\";\\n  import CalendarIcon from \\"./../../assets/icons/calendar-month.svg\\";\\n  import ArrowLeft from \\"./../../assets/icons/left-square.svg\\";\\n  import ArrowRight from \\"./../../assets/icons/right-square.svg\\";\\n\\n  let selectedStartDate = writable(null);\\n  let selectedEndDate = writable(null);\\n  let isDatePickerOpen = writable(false);\\n  let currentMonth1 = writable(new Date().getMonth());\\n  let currentYear1 = writable(new Date().getFullYear());\\n  let currentMonth2 = writable(new Date().getMonth() + 1);\\n  let currentYear2 = writable(new Date().getFullYear());\\n  const weeks = [\\"S\\", \\"M\\", \\"T\\", \\"W\\", \\"T\\", \\"F\\", \\"S\\"];\\n  let options = [\\n    { id: 0, text: \\"Select a range\\", disabled: true },\\n    { id: 1, text: \\"Last 30 days\\" },\\n    { id: 2, text: \\"Last 7 days\\" },\\n    { id: 3, text: \\"Last 3 days\\" },\\n  ];\\n\\n  const dispatch = createEventDispatcher();\\n\\n  let selected = options[0];\\n  function toggleDatePicker() {\\n    dispatch(isDatePickerOpen.update((state) => !state));\\n  }\\n  function formatDate(year, month, day) {\\n    return \`\${String(month + 1).padStart(2, \\"0\\")}/\${day}/\${year}\`;\\n  }\\n  function daysInMonth(month, year) {\\n    return new Date(year, month + 1, 0).getDate();\\n  }\\n  function firstDayOfMonth(month, year) {\\n    return new Date(year, month, 1).getDay();\\n  }\\n  function prevMonth(calendar) {\\n    if (calendar === 1) {\\n      currentMonth1.update((m) => {\\n        if (m === 0) {\\n          currentYear1.update((y) => y - 1);\\n          return 11;\\n        } else {\\n          return m - 1;\\n        }\\n      });\\n    } else {\\n      currentMonth2.update((m) => {\\n        if (m === 0) {\\n          currentYear2.update((y) => y - 1);\\n          return 11;\\n        } else {\\n          return m - 1;\\n        }\\n      });\\n    }\\n  }\\n  function nextMonth(calendar) {\\n    if (calendar === 1) {\\n      currentMonth1.update((m) => {\\n        if (m === 11) {\\n          currentYear1.update((y) => y + 1);\\n          return 0;\\n        } else {\\n          return m + 1;\\n        }\\n      });\\n    } else {\\n      currentMonth2.update((m) => {\\n        if (m === 11) {\\n          currentYear2.update((y) => y + 1);\\n          return 0;\\n        } else {\\n          return m + 1;\\n        }\\n      });\\n    }\\n  }\\n  function isWithinRange(date, start, end) {\\n    if (!start || !end) return false;\\n    const currentDate = new Date(date);\\n    const startDate = new Date(start);\\n    const endDate = new Date(end);\\n    return currentDate >= startDate && currentDate <= endDate;\\n  }\\n  function selectDate(date, isStart) {\\n    let parsedDate = new Date(date);\\n    if (isStart) {\\n      if ($selectedEndDate && new Date($selectedEndDate) < parsedDate) {\\n        selectedStartDate.set($selectedEndDate);\\n        selectedEndDate.set(date);\\n      } else {\\n        selectedStartDate.set(date);\\n        if ($selectedEndDate && new Date($selectedEndDate) < parsedDate) {\\n          selectedEndDate.set(null);\\n        }\\n      }\\n    } else {\\n      if ($selectedStartDate && new Date($selectedStartDate) > parsedDate) {\\n        selectedEndDate.set($selectedStartDate);\\n        selectedStartDate.set(date);\\n      } else {\\n        selectedEndDate.set(date);\\n      }\\n    }\\n  }\\n  $: if (selected && selected.id !== 0) {\\n    let days = Number(selected.text.split(\\" \\")[1]);\\n    let endDate = new Date();\\n    let startDate = new Date();\\n    startDate.setDate(endDate.getDate() - days + 1);\\n    selectedStartDate.set(\\n      formatDate(\\n        startDate.getFullYear(),\\n        startDate.getMonth(),\\n        startDate.getDate()\\n      )\\n    );\\n    selectedEndDate.set(\\n      formatDate(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())\\n    );\\n  }\\n  function getPreviousMonthEndDays(month, year) {\\n    const prevMonth = month === 0 ? 11 : month - 1;\\n    const prevYear = month === 0 ? year - 1 : year;\\n    const daysInPrevMonth = daysInMonth(prevMonth, prevYear);\\n    const firstDay = firstDayOfMonth(month, year);\\n    return Array.from({ length: firstDay }, (_, i) =>\\n      formatDate(prevYear, prevMonth, daysInPrevMonth - firstDay + i + 1)\\n    );\\n  }\\n  function getNextMonthStartDays(month, year, dayCount) {\\n    const nextMonth = month === 11 ? 0 : month + 1;\\n    const nextYear = month === 11 ? year + 1 : year;\\n    return Array.from({ length: dayCount }, (_, i) =>\\n      formatDate(nextYear, nextMonth, i + 1)\\n    );\\n  }\\n  $: leadingBlanks1 = getPreviousMonthEndDays($currentMonth1, $currentYear1);\\n  $: daysArray1 = [\\n    ...leadingBlanks1,\\n    ...Array.from(\\n      { length: daysInMonth($currentMonth1, $currentYear1) },\\n      (_, i) => formatDate($currentYear1, $currentMonth1, i + 1)\\n    ),\\n    ...getNextMonthStartDays(\\n      $currentMonth1,\\n      $currentYear1,\\n      42 - (leadingBlanks1.length + daysInMonth($currentMonth1, $currentYear1))\\n    ),\\n  ];\\n  $: leadingBlanks2 = getPreviousMonthEndDays($currentMonth2, $currentYear2);\\n  $: daysArray2 = [\\n    ...leadingBlanks2,\\n    ...Array.from(\\n      { length: daysInMonth($currentMonth2, $currentYear2) },\\n      (_, i) => formatDate($currentYear2, $currentMonth2, i + 1)\\n    ),\\n    ...getNextMonthStartDays(\\n      $currentMonth2,\\n      $currentYear2,\\n      42 - (leadingBlanks2.length + daysInMonth($currentMonth2, $currentYear2))\\n    ),\\n  ];\\n<\/script>\\n\\n<div class=\\"relative max-w-4xl mx-auto max-sm:mx-2\\">\\n  <button\\n    class=\\"w-full sm:w-1/2 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]\\"\\n    on:click={toggleDatePicker}\\n  >\\n    {#if $selectedStartDate && $selectedEndDate}\\n      {$selectedStartDate} to {$selectedEndDate}\\n    {:else}\\n      Select Date Range\\n    {/if}\\n    <span class=\\"ml-auto\\">\\n      <img src={CalendarIcon} alt=\\"Calendar Icon\\" />\\n    </span>\\n  </button>\\n  {#if $isDatePickerOpen}\\n    <div\\n      class=\\"absolute top-12 w-full bg-white rounded-xl p-6 border border-[#EEE] shadow z-10\\"\\n    >\\n      <div class=\\"grid md:grid-cols-2 lg:grid-cols-3 gap-6\\">\\n        <div>\\n          <div class=\\"flex items-center justify-between pb-2 pl-1\\">\\n            <button on:click={() => prevMonth(1)}>\\n              <img src={ArrowLeft} alt=\\"Left Icon\\" />\\n            </button>\\n            <span class=\\"text-[16px] font-[600] pb-0.5\\">\\n              {new Date($currentYear1, $currentMonth1).toLocaleString(\\n                \\"default\\",\\n                { month: \\"long\\" }\\n              )}\\n              {$currentYear1}\\n            </span>\\n            <div></div>\\n          </div>\\n          <div class=\\"grid grid-cols-7 text-center text-sm leading-[18px]\\">\\n            {#each weeks as week}\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1 text-sm\\">\\n                {week}\\n              </div>\\n            {/each}\\n            {#each daysArray1 as day, index}\\n              <!-- svelte-ignore a11y-click-events-have-key-events -->\\n              <!-- svelte-ignore a11y-no-static-element-interactions -->\\n              <div\\n                class=\\"p-2.5 {index < leadingBlanks1.length ||\\n                index >=\\n                  leadingBlanks1.length +\\n                    daysInMonth($currentMonth1, $currentYear1)\\n                  ? 'text-[#BDBDBD] cursor-default'\\n                  : 'cursor-pointer'} {$selectedStartDate === day\\n                  ? 'bg-[#0284fe] text-white rounded-[3px]'\\n                  : $selectedEndDate === day\\n                    ? 'bg-[#0284fe] text-white rounded-[3px]'\\n                    : isWithinRange(day, $selectedStartDate, $selectedEndDate)\\n                      ? 'bg-blue-300'\\n                      : 'hover:bg-blue-100'}\\"\\n                on:click={index < leadingBlanks1.length ||\\n                index >=\\n                  leadingBlanks1.length +\\n                    daysInMonth($currentMonth1, $currentYear1)\\n                  ? null\\n                  : () =>\\n                      selectDate(day, !$selectedStartDate || $selectedEndDate)}\\n              >\\n                {day.split(\\"/\\")[1]}\\n              </div>\\n            {/each}\\n          </div>\\n        </div>\\n        <!-- Second Calendar (End Date) -->\\n        <div>\\n          <div class=\\"flex items-center justify-between pb-2 pr-1.5\\">\\n            <div></div>\\n            <span class=\\"text-[16px] font-[600] pb-0.5\\">\\n              {new Date($currentYear2, $currentMonth2).toLocaleString(\\n                \\"default\\",\\n                { month: \\"long\\" }\\n              )}\\n              {$currentYear2}\\n            </span>\\n            <button on:click={() => nextMonth(2)}>\\n              <img src={ArrowRight} alt=\\"Right Icon\\" />\\n            </button>\\n          </div>\\n          <div class=\\"grid grid-cols-7 text-center text-sm leading-[18px]\\">\\n            {#each weeks as week}\\n              <div class=\\"text-[#6B7280] mt-2 mb-2 ml-1 mr-1 font-bold text-sm\\">\\n                {week}\\n              </div>\\n            {/each}\\n            {#each daysArray2 as day, index}\\n              <!-- svelte-ignore a11y-click-events-have-key-events -->\\n              <!-- svelte-ignore a11y-no-static-element-interactions -->\\n              <div\\n                class=\\"p-2.5 {index < leadingBlanks2.length ||\\n                index >=\\n                  leadingBlanks2.length +\\n                    daysInMonth($currentMonth2, $currentYear2)\\n                  ? 'text-[#BDBDBD] cursor-default'\\n                  : 'cursor-pointer'} {$selectedStartDate === day\\n                  ? 'bg-[#0284fe] text-white rounded-[3px]'\\n                  : $selectedEndDate === day\\n                    ? 'bg-[#0284fe] text-white rounded-[3px]'\\n                    : isWithinRange(day, $selectedStartDate, $selectedEndDate)\\n                      ? 'bg-blue-300'\\n                      : 'hover:bg-blue-100'}\\"\\n                on:click={index < leadingBlanks2.length ||\\n                index >=\\n                  leadingBlanks2.length +\\n                    daysInMonth($currentMonth2, $currentYear2)\\n                  ? null\\n                  : () =>\\n                      selectDate(day, !$selectedStartDate || $selectedEndDate)}\\n              >\\n                {day.split(\\"/\\")[1]}\\n              </div>\\n            {/each}\\n          </div>\\n        </div>\\n        <!-- Apply and Cancel Buttons -->\\n        <div class=\\"h-full w-full flex flex-1 flex-col\\">\\n          <div class=\\"\\">\\n            <select\\n              class=\\"w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px] bg-[#F9FAFB]\\"\\n              bind:value={selected}\\n            >\\n              {#each options as option}\\n                <option\\n                  value={option}\\n                  disabled={option.id === 0}\\n                  selected={selected === option}\\n                >\\n                  {option.text}\\n                </option>\\n              {/each}\\n            </select>\\n            <div class=\\"flex gap-3 mt-4\\">\\n              <div\\n                class=\\"w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]\\"\\n              >\\n                {#if $selectedStartDate}\\n                  {$selectedStartDate}\\n                {:else}\\n                  Start Date\\n                {/if}\\n              </div>\\n              <div\\n                class=\\"w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]\\"\\n              >\\n                {#if $selectedEndDate}\\n                  {$selectedEndDate}\\n                {:else}\\n                  End Date\\n                {/if}\\n              </div>\\n            </div>\\n            <div class=\\"flex items-center py-4 w-full gap-2\\">\\n              <input\\n                type=\\"checkbox\\"\\n                class=\\"rounded border-2 border-black/70 bg-[#F9FAFB]\\"\\n              />\\n              <span class=\\"text-sm\\">Compare</span>\\n            </div>\\n          </div>\\n          <div class=\\"gap-1 flex justify-between items-end mt-auto w-full\\">\\n            <Button\\n              strokebtn\\n              size=\\"full\\"\\n              on:click={() => {\\n                selectedStartDate.set(null);\\n                selectedEndDate.set(null);\\n                toggleDatePicker();\\n              }}>Cancel</Button\\n            >\\n            <Button size=\\"full\\" on:click={() => toggleDatePicker()}\\n              >Apply</Button\\n            >\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  {/if}\\n</div>\\n\\n<style>\\n  .bg-blue-300 {\\n    background-color: #ebf5ff;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgWE,2BAAa,CACX,gBAAgB,CAAE,OACpB"}`
};
function formatDate(year, month2, day) {
  return `${String(month2 + 1).padStart(2, "0")}/${day}/${year}`;
}
function daysInMonth(month2, year) {
  return new Date(year, month2 + 1, 0).getDate();
}
function firstDayOfMonth(month2, year) {
  return new Date(year, month2, 1).getDay();
}
function isWithinRange(date, start, end) {
  if (!start || !end) return false;
  const currentDate = new Date(date);
  const startDate = new Date(start);
  const endDate = new Date(end);
  return currentDate >= startDate && currentDate <= endDate;
}
function getPreviousMonthEndDays(month2, year) {
  const prevMonth = month2 === 0 ? 11 : month2 - 1;
  const prevYear = month2 === 0 ? year - 1 : year;
  const daysInPrevMonth = daysInMonth(prevMonth, prevYear);
  const firstDay = firstDayOfMonth(month2, year);
  return Array.from({ length: firstDay }, (_, i) => formatDate(prevYear, prevMonth, daysInPrevMonth - firstDay + i + 1));
}
function getNextMonthStartDays(month2, year, dayCount) {
  const nextMonth = month2 === 11 ? 0 : month2 + 1;
  const nextYear = month2 === 11 ? year + 1 : year;
  return Array.from({ length: dayCount }, (_, i) => formatDate(nextYear, nextMonth, i + 1));
}
const DateRangePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let leadingBlanks1;
  let daysArray1;
  let leadingBlanks2;
  let daysArray2;
  let $currentYear2, $$unsubscribe_currentYear2;
  let $currentMonth2, $$unsubscribe_currentMonth2;
  let $currentYear1, $$unsubscribe_currentYear1;
  let $currentMonth1, $$unsubscribe_currentMonth1;
  let $selectedStartDate, $$unsubscribe_selectedStartDate;
  let $selectedEndDate, $$unsubscribe_selectedEndDate;
  let $isDatePickerOpen, $$unsubscribe_isDatePickerOpen;
  let selectedStartDate = writable(null);
  $$unsubscribe_selectedStartDate = subscribe(selectedStartDate, (value) => $selectedStartDate = value);
  let selectedEndDate = writable(null);
  $$unsubscribe_selectedEndDate = subscribe(selectedEndDate, (value) => $selectedEndDate = value);
  let isDatePickerOpen = writable(false);
  $$unsubscribe_isDatePickerOpen = subscribe(isDatePickerOpen, (value) => $isDatePickerOpen = value);
  let currentMonth1 = writable((/* @__PURE__ */ new Date()).getMonth());
  $$unsubscribe_currentMonth1 = subscribe(currentMonth1, (value) => $currentMonth1 = value);
  let currentYear1 = writable((/* @__PURE__ */ new Date()).getFullYear());
  $$unsubscribe_currentYear1 = subscribe(currentYear1, (value) => $currentYear1 = value);
  let currentMonth2 = writable((/* @__PURE__ */ new Date()).getMonth() + 1);
  $$unsubscribe_currentMonth2 = subscribe(currentMonth2, (value) => $currentMonth2 = value);
  let currentYear2 = writable((/* @__PURE__ */ new Date()).getFullYear());
  $$unsubscribe_currentYear2 = subscribe(currentYear2, (value) => $currentYear2 = value);
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];
  let options = [
    {
      id: 0,
      text: "Select a range",
      disabled: true
    },
    { id: 1, text: "Last 30 days" },
    { id: 2, text: "Last 7 days" },
    { id: 3, text: "Last 3 days" }
  ];
  createEventDispatcher();
  let selected = options[0];
  $$result.css.add(css$3);
  {
    if (selected && selected.id !== 0) {
      let days = Number(selected.text.split(" ")[1]);
      let endDate = /* @__PURE__ */ new Date();
      let startDate = /* @__PURE__ */ new Date();
      startDate.setDate(endDate.getDate() - days + 1);
      selectedStartDate.set(formatDate(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
      selectedEndDate.set(formatDate(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
    }
  }
  leadingBlanks1 = getPreviousMonthEndDays($currentMonth1, $currentYear1);
  daysArray1 = [
    ...leadingBlanks1,
    ...Array.from(
      {
        length: daysInMonth($currentMonth1, $currentYear1)
      },
      (_, i) => formatDate($currentYear1, $currentMonth1, i + 1)
    ),
    ...getNextMonthStartDays($currentMonth1, $currentYear1, 42 - (leadingBlanks1.length + daysInMonth($currentMonth1, $currentYear1)))
  ];
  leadingBlanks2 = getPreviousMonthEndDays($currentMonth2, $currentYear2);
  daysArray2 = [
    ...leadingBlanks2,
    ...Array.from(
      {
        length: daysInMonth($currentMonth2, $currentYear2)
      },
      (_, i) => formatDate($currentYear2, $currentMonth2, i + 1)
    ),
    ...getNextMonthStartDays($currentMonth2, $currentYear2, 42 - (leadingBlanks2.length + daysInMonth($currentMonth2, $currentYear2)))
  ];
  $$unsubscribe_currentYear2();
  $$unsubscribe_currentMonth2();
  $$unsubscribe_currentYear1();
  $$unsubscribe_currentMonth1();
  $$unsubscribe_selectedStartDate();
  $$unsubscribe_selectedEndDate();
  $$unsubscribe_isDatePickerOpen();
  return `<div class="relative max-w-4xl mx-auto max-sm:mx-2"><button class="w-full sm:w-1/2 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]">${$selectedStartDate && $selectedEndDate ? `${escape($selectedStartDate)} to ${escape($selectedEndDate)}` : `Select Date Range`} <span class="ml-auto" data-svelte-h="svelte-1em94gf"><img${add_attribute("src", CalendarIcon, 0)} alt="Calendar Icon"></span></button> ${$isDatePickerOpen ? `<div class="absolute top-12 w-full bg-white rounded-xl p-6 border border-[#EEE] shadow z-10"><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><div><div class="flex items-center justify-between pb-2 pl-1"><button data-svelte-h="svelte-1qschkk"><img${add_attribute("src", ArrowLeft, 0)} alt="Left Icon"></button> <span class="text-[16px] font-[600] pb-0.5">${escape(new Date($currentYear1, $currentMonth1).toLocaleString("default", { month: "long" }))} ${escape($currentYear1)}</span> <div></div></div> <div class="grid grid-cols-7 text-center text-sm leading-[18px]">${each(weeks, (week) => {
    return `<div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1 text-sm">${escape(week)} </div>`;
  })} ${each(daysArray1, (day, index) => {
    return `  <div class="${"p-2.5 " + escape(
      index < leadingBlanks1.length || index >= leadingBlanks1.length + daysInMonth($currentMonth1, $currentYear1) ? "text-[#BDBDBD] cursor-default" : "cursor-pointer",
      true
    ) + " " + escape(
      $selectedStartDate === day ? "bg-[#0284fe] text-white rounded-[3px]" : $selectedEndDate === day ? "bg-[#0284fe] text-white rounded-[3px]" : isWithinRange(day, $selectedStartDate, $selectedEndDate) ? "bg-blue-300" : "hover:bg-blue-100",
      true
    ) + " svelte-1ry7d7j"}">${escape(day.split("/")[1])} </div>`;
  })}</div></div>  <div><div class="flex items-center justify-between pb-2 pr-1.5"><div></div> <span class="text-[16px] font-[600] pb-0.5">${escape(new Date($currentYear2, $currentMonth2).toLocaleString("default", { month: "long" }))} ${escape($currentYear2)}</span> <button data-svelte-h="svelte-1xkx8hr"><img${add_attribute("src", ArrowRight, 0)} alt="Right Icon"></button></div> <div class="grid grid-cols-7 text-center text-sm leading-[18px]">${each(weeks, (week) => {
    return `<div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1 font-bold text-sm">${escape(week)} </div>`;
  })} ${each(daysArray2, (day, index) => {
    return `  <div class="${"p-2.5 " + escape(
      index < leadingBlanks2.length || index >= leadingBlanks2.length + daysInMonth($currentMonth2, $currentYear2) ? "text-[#BDBDBD] cursor-default" : "cursor-pointer",
      true
    ) + " " + escape(
      $selectedStartDate === day ? "bg-[#0284fe] text-white rounded-[3px]" : $selectedEndDate === day ? "bg-[#0284fe] text-white rounded-[3px]" : isWithinRange(day, $selectedStartDate, $selectedEndDate) ? "bg-blue-300" : "hover:bg-blue-100",
      true
    ) + " svelte-1ry7d7j"}">${escape(day.split("/")[1])} </div>`;
  })}</div></div>  <div class="h-full w-full flex flex-1 flex-col"><div class=""><select class="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px] bg-[#F9FAFB]">${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)} ${option.id === 0 ? "disabled" : ""} ${selected === option ? "selected" : ""}>${escape(option.text)} </option>`;
  })}</select> <div class="flex gap-3 mt-4"><div class="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]">${$selectedStartDate ? `${escape($selectedStartDate)}` : `Start Date`}</div> <div class="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]">${$selectedEndDate ? `${escape($selectedEndDate)}` : `End Date`}</div></div> <div class="flex items-center py-4 w-full gap-2" data-svelte-h="svelte-t553sw"><input type="checkbox" class="rounded border-2 border-black/70 bg-[#F9FAFB]"> <span class="text-sm">Compare</span></div></div> <div class="gap-1 flex justify-between items-end mt-auto w-full">${validate_component(Button, "Button").$$render($$result, { strokebtn: true, size: "full" }, {}, {
    default: () => {
      return `Cancel`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { size: "full" }, {}, {
    default: () => {
      return `Apply`;
    }
  })}</div></div></div></div>` : ``} </div>`;
});
const Pin = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='pin'%3e%3cpath%20id='Vector'%20d='M3.5%2021L8.5%2016'%20stroke='%23FF922E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M13.7585%2018.8714C10.0152%2018.0215%206.47844%2014.4848%205.62853%2010.7415C5.49399%2010.1489%205.42672%209.85266%205.62161%209.37197C5.8165%208.89129%206.05457%208.74255%206.53071%208.44509C7.60705%207.77265%208.77254%207.55888%209.98209%207.66586C11.6793%207.81598%2012.5279%207.89104%2012.9512%207.67048C13.3746%207.44991%2013.6622%206.93417%2014.2376%205.90269L14.9664%204.59604C15.4465%203.73528%2015.6866%203.3049%2016.2513%203.10202C16.816%202.89913%2017.1558%203.02199%2017.8355%203.26771C19.4249%203.84236%2020.6576%205.07505%2021.2323%206.66449C21.478%207.34417%2021.6009%207.68401%2021.398%208.2487C21.1951%208.8134%2020.7647%209.05346%2019.9039%209.53358L18.5672%2010.2792C17.5376%2010.8534%2017.0229%2011.1406%2016.8024%2011.568C16.5819%2011.9955%2016.662%2012.8256%2016.8221%2014.4859C16.9399%2015.7068%2016.7369%2016.88%2016.0555%2017.9697C15.7577%2018.4458%2015.6088%2018.6839%2015.1283%2018.8786C14.6477%2019.0733%2014.3513%2019.006%2013.7585%2018.8714Z'%20stroke='%23FF922E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";
const LeftArrow = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.25%204.5C11.25%204.5%206.75001%207.81418%206.75%209C6.74999%2010.1859%2011.25%2013.5%2011.25%2013.5'%20stroke='%230D1526'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const RightArrow = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.75%2013.5C6.75%2013.5%2011.25%2010.1858%2011.25%209C11.25%207.8141%206.75%204.5%206.75%204.5'%20stroke='%230D1526'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const CaretDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M24 12L16 22 8 12z"></path></svg>`;
});
const css$2 = {
  code: ".calendar.svelte-e3latg.svelte-e3latg{display:grid;grid-template-columns:repeat(7, minmax(100px, 1fr));grid-template-rows:auto;grid-auto-rows:minmax(158px, auto)}.day-container.svelte-e3latg.svelte-e3latg{padding:8px;gap:12px;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.calendar.svelte-e3latg>.day-container.svelte-e3latg,.calendar.svelte-e3latg>div.svelte-e3latg{border-top:1px solid #d4d6d9}.calendar.svelte-e3latg>.day-container.svelte-e3latg:not(:nth-child(7n + 1)),.calendar.svelte-e3latg>div.svelte-e3latg:not(:nth-child(7n + 1)){border-left:1px solid #d4d6d9}.calendar.svelte-e3latg>.day-container.svelte-e3latg:nth-last-child(-n + 7),.calendar.svelte-e3latg>div.svelte-e3latg:nth-last-child(-n + 7){border-bottom:1px solid #d4d6d9}.calendar.svelte-e3latg>.day-container.svelte-e3latg:last-of-type{border-right:1px solid #d4d6d9}.day.svelte-e3latg.svelte-e3latg{font-size:18px;color:#0d1526;font-weight:400;line-height:18px;font-style:normal}.embedCalendar.svelte-e3latg.svelte-e3latg{box-shadow:0px 56px 16px 0px rgba(43, 43, 43, 0),\n      0px 36px 14px 0px rgba(43, 43, 43, 0.01),\n      0px 20px 12px 0px rgba(43, 43, 43, 0.05),\n      0px 9px 9px 0px rgba(43, 43, 43, 0.09),\n      0px 2px 5px 0px rgba(43, 43, 43, 0.1)}.timeline.svelte-e3latg.svelte-e3latg{color:#666c79;font-size:8px;font-style:italic;font-weight:300;line-height:8px;letter-spacing:-0.4px;text-align:center}.embedCalendar.svelte-e3latg .desc.svelte-e3latg{color:#0d1526;text-align:center;font-size:8px;font-style:normal;font-weight:500;line-height:10px;letter-spacing:-0.16px}.image.svelte-e3latg.svelte-e3latg{border-radius:2px;background:lightgray 50% / cover no-repeat;box-shadow:0px 20px 6px 0px rgba(0, 0, 0, 0),\n      0px 13px 5px 0px rgba(0, 0, 0, 0.02),\n      0px 7px 4px 0px rgba(0, 0, 0, 0.08),\n      0px 3px 3px 0px rgba(0, 0, 0, 0.14),\n      0px 1px 2px 0px rgba(0, 0, 0, 0.16)}@media(max-width: 1024px){.calendar.svelte-e3latg.svelte-e3latg{grid-template-columns:repeat(7, minmax(100px, 1fr))}.day.svelte-e3latg.svelte-e3latg{font-size:16px}}@media(max-width: 768px){.calendar.svelte-e3latg.svelte-e3latg{grid-template-columns:repeat(7, minmax(70px, 1fr))}.day.svelte-e3latg.svelte-e3latg{font-size:14px}.day-container.svelte-e3latg.svelte-e3latg{padding:6px 4px}}@media(max-width: 640px){.calendar.svelte-e3latg.svelte-e3latg{grid-template-columns:repeat(7, minmax(30px, 1fr))}.day.svelte-e3latg.svelte-e3latg{font-size:12px}.timeline.svelte-e3latg.svelte-e3latg{font-size:7px;font-weight:300;line-height:6px}.embedCalendar.svelte-e3latg .desc.svelte-e3latg{font-size:6px;font-weight:500;line-height:8px}.embedCalendar.svelte-e3latg.svelte-e3latg{box-shadow:none}}",
  map: '{"version":3,"file":"Calendar.svelte","sources":["Calendar.svelte"],"sourcesContent":["<script>\\n  import { getDay, getDaysInMonth, startOfMonth } from \\"date-fns\\";\\n  import Button from \\"../Button/Button.svelte\\";\\n  import Badge from \\"./../Badges/Badge.svelte\\";\\n  import AddMainBlue from \\"../../assets/svg/add-main-blue.svg\\";\\n  import { truncateTitle } from \\"../../utils/utils\\";\\n\\n  export let isScheduledBtn = false;\\n  export let scheduleRecurring = false;\\n  export let eventCalendar = false;\\n  export let embedCalendar = false;\\n  let currentDate = new Date();\\n  export let currentYear = currentDate.getUTCFullYear();\\n  export let currentMonth = currentDate.getUTCMonth();\\n  export let currentevents = [];\\n\\n  let selectedDate;\\n  $: selectedDate = new Date(Date.UTC(currentYear, currentMonth, 1));\\n\\n  let daysInMonth = [];\\n\\n  $: {\\n    const days = getDaysInMonth(selectedDate);\\n    const startDay = getDay(startOfMonth(selectedDate));\\n    daysInMonth = Array.from({ length: days }, (_, i) => ({\\n      day: i + 1,\\n      startDay: startDay + i,\\n      events: [],\\n    }));\\n\\n    daysInMonth = daysInMonth.map((day) => {\\n      day.events = currentevents.filter((event) => {\\n        const eventDate = new Date(event.date);\\n        return (\\n          eventDate.getUTCFullYear() === currentYear &&\\n          eventDate.getUTCMonth() === selectedDate.getUTCMonth() &&\\n          eventDate.getUTCDate() === day.day\\n        );\\n      });\\n      return day;\\n    });\\n  }\\n\\n  let hoveredDay = null;\\n\\n  function handleHover(day) {\\n    hoveredDay = day;\\n  }\\n\\n  function handleMouseLeave() {\\n    hoveredDay = null;\\n  }\\n\\n  function navigateToDay(day) {\\n    const dayString = String(day).padStart(2, \\"0\\");\\n    const monthString = String(selectedDate.getUTCMonth() + 1).padStart(2, \\"0\\");\\n    const route = `/daily/${currentYear}-${monthString}-${dayString}`;\\n\\n    console.log(route, \\"logs goto route\\");\\n    // goto(route); // Uncomment this when using SvelteKit routing\\n  }\\n<\/script>\\n\\n<div class=\\"max-w-[1200px] overflow-hidden mx-auto w-full bg-BG-Primary mb-10\\">\\n  <div\\n    class=\\"calendar w-full overflow-hidden mx-auto grid rounded-lg border border-stroke-Primary\\"\\n  >\\n    {#each [\\"Sun\\", \\"Mon\\", \\"Tue\\", \\"Wed\\", \\"Thu\\", \\"Fri\\", \\"Sat\\"] as dayName}\\n      <!-- svelte-ignore a11y-click-events-have-key-events -->\\n      <!-- svelte-ignore a11y-no-static-element-interactions -->\\n      <span\\n        class=\\"flex p-3 items-center justify-center gap-3 bg-BG-Primary text-Text-Tartiary leading-[18px] font-normal text-[14px] sm:text-lg border-l first:border-l-0 border-stroke-Primary\\"\\n      >\\n        {dayName}\\n      </span>\\n    {/each}\\n    {#each Array(daysInMonth[0]?.startDay || 0)\\n      .fill()\\n      .map(() => \\"\\") as _}\\n      <div></div>\\n    {/each}\\n    {#each daysInMonth as day}\\n      <!-- svelte-ignore missing-declaration -->\\n      <!-- svelte-ignore a11y-no-static-element-interactions -->\\n      <!-- svelte-ignore a11y-click-events-have-key-events -->\\n      <div\\n        class=\\"day-container text-[#252B37] flex flex-col items-center\\"\\n        on:click={() => navigateToDay(day.day)}\\n        on:mouseenter={() => handleHover(day)}\\n        on:mouseleave={handleMouseLeave}\\n      >\\n        <div class=\\"my-1.5 w-full h-full flex flex-col items-center gap-2\\">\\n          <span class=\\"day\\">{day.day}</span>\\n\\n          {#each day.events as event}\\n            {#if scheduleRecurring}\\n              <Badge\\n                event=\\"squareEvent\\"\\n                eventBgColor=\\"hsla(0, 0%, 100%, 1)\\"\\n                eventTextColor=\\"hsla(220, 20%, 18%, 1)\\"\\n                on:click={() => alert(\\"You clicked on an event!\\")}\\n              >\\n                {event.name}\\n              </Badge>\\n            {:else if eventCalendar}\\n              <Badge\\n                event=\\"circleEvent\\"\\n                eventBgColor=\\"hsla(209, 99%, 50%, 0.15)\\"\\n                eventTextColor=\\"hsla(209, 99%, 50%, 1)\\"\\n                on:click={() => alert(\\"You clicked on an event!\\")}\\n              >\\n                {truncateTitle(event.name, 13)}\\n              </Badge>\\n            {:else if embedCalendar}\\n              <div\\n                class=\\"w-full flex flex-col items-center gap-1.5 p-[5px] embedCalendar rounded\\"\\n                on:click={() => alert(\\"You clicked on an event!\\")}\\n              >\\n                <img\\n                  class=\\"image\\"\\n                  height=\\"46px\\"\\n                  src={event.image}\\n                  alt={event.name}\\n                />\\n                <div class=\\"timeline hidden sm:flex\\">{event.timeline}</div>\\n                <div class=\\"desc\\">{event.name}</div>\\n              </div>\\n            {/if}\\n          {/each}\\n\\n          {#if isScheduledBtn && hoveredDay === day}\\n            <div class=\\"mt-auto mx-auto\\">\\n              <Button ScheduledBtn beforeIcon={AddMainBlue}>Schedule</Button>\\n            </div>\\n          {/if}\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</div>\\n\\n<style>\\n  .calendar {\\n    display: grid;\\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\\n    grid-template-rows: auto;\\n    grid-auto-rows: minmax(158px, auto);\\n  }\\n\\n  .day-container {\\n    padding: 8px;\\n    gap: 12px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    width: 100%;\\n  }\\n\\n  .calendar > .day-container,\\n  .calendar > div {\\n    border-top: 1px solid #d4d6d9;\\n  }\\n\\n  .calendar > .day-container:not(:nth-child(7n + 1)),\\n  .calendar > div:not(:nth-child(7n + 1)) {\\n    border-left: 1px solid #d4d6d9;\\n  }\\n\\n  .calendar > .day-container:nth-last-child(-n + 7),\\n  .calendar > div:nth-last-child(-n + 7) {\\n    border-bottom: 1px solid #d4d6d9;\\n  }\\n  .calendar > .day-container:last-of-type {\\n    border-right: 1px solid #d4d6d9;\\n  }\\n\\n  .day {\\n    font-size: 18px;\\n    color: #0d1526;\\n    font-weight: 400;\\n    line-height: 18px;\\n    font-style: normal;\\n  }\\n\\n  .embedCalendar {\\n    box-shadow:\\n      0px 56px 16px 0px rgba(43, 43, 43, 0),\\n      0px 36px 14px 0px rgba(43, 43, 43, 0.01),\\n      0px 20px 12px 0px rgba(43, 43, 43, 0.05),\\n      0px 9px 9px 0px rgba(43, 43, 43, 0.09),\\n      0px 2px 5px 0px rgba(43, 43, 43, 0.1);\\n  }\\n\\n  .timeline {\\n    color: #666c79;\\n    font-size: 8px;\\n    font-style: italic;\\n    font-weight: 300;\\n    line-height: 8px;\\n    letter-spacing: -0.4px;\\n    text-align: center;\\n  }\\n\\n  .embedCalendar .desc {\\n    color: #0d1526;\\n    text-align: center;\\n    font-size: 8px;\\n    font-style: normal;\\n    font-weight: 500;\\n    line-height: 10px;\\n    letter-spacing: -0.16px;\\n  }\\n\\n  .image {\\n    border-radius: 2px;\\n    background: lightgray 50% / cover no-repeat;\\n    box-shadow:\\n      0px 20px 6px 0px rgba(0, 0, 0, 0),\\n      0px 13px 5px 0px rgba(0, 0, 0, 0.02),\\n      0px 7px 4px 0px rgba(0, 0, 0, 0.08),\\n      0px 3px 3px 0px rgba(0, 0, 0, 0.14),\\n      0px 1px 2px 0px rgba(0, 0, 0, 0.16);\\n  }\\n\\n  @media (max-width: 1024px) {\\n    .calendar {\\n      grid-template-columns: repeat(7, minmax(100px, 1fr));\\n    }\\n\\n    .day {\\n      font-size: 16px;\\n    }\\n  }\\n\\n  @media (max-width: 768px) {\\n    .calendar {\\n      grid-template-columns: repeat(7, minmax(70px, 1fr));\\n    }\\n\\n    .day {\\n      font-size: 14px;\\n    }\\n\\n    .day-container {\\n      padding: 6px 4px;\\n    }\\n  }\\n\\n  @media (max-width: 640px) {\\n    .calendar {\\n      grid-template-columns: repeat(7, minmax(30px, 1fr));\\n    }\\n\\n    .day {\\n      font-size: 12px;\\n    }\\n\\n    .timeline {\\n      font-size: 7px;\\n      font-weight: 300;\\n      line-height: 6px;\\n    }\\n\\n    .embedCalendar .desc {\\n      font-size: 6px;\\n      font-weight: 500;\\n      line-height: 8px;\\n    }\\n    .embedCalendar {\\n      box-shadow: none;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8IE,qCAAU,CACR,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CACpD,kBAAkB,CAAE,IAAI,CACxB,cAAc,CAAE,OAAO,KAAK,CAAC,CAAC,IAAI,CACpC,CAEA,0CAAe,CACb,OAAO,CAAE,GAAG,CACZ,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,UAAU,CAC3B,KAAK,CAAE,IACT,CAEA,uBAAS,CAAG,4BAAc,CAC1B,uBAAS,CAAG,iBAAI,CACd,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OACxB,CAEA,uBAAS,CAAG,4BAAc,KAAK,WAAW,MAAM,CAAC,CAAC,CAClD,uBAAS,CAAG,iBAAG,KAAK,WAAW,MAAM,CAAC,CAAE,CACtC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OACzB,CAEA,uBAAS,CAAG,4BAAc,gBAAgB,MAAM,CAAC,CACjD,uBAAS,CAAG,iBAAG,gBAAgB,MAAM,CAAE,CACrC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAC3B,CACA,uBAAS,CAAG,4BAAc,aAAc,CACtC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,OAC1B,CAEA,gCAAK,CACH,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,MACd,CAEA,0CAAe,CACb,UAAU,CACR,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC;AAC3C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC5C,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CACxC,CAEA,qCAAU,CACR,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,MACd,CAEA,4BAAc,CAAC,mBAAM,CACnB,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,OAClB,CAEA,kCAAO,CACL,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,SAAS,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,SAAS,CAC3C,UAAU,CACR,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AACvC,MAAM,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;AAC1C,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;AACzC,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;AACzC,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CACtC,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,qCAAU,CACR,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CACrD,CAEA,gCAAK,CACH,SAAS,CAAE,IACb,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAU,CACR,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,GAAG,CAAC,CACpD,CAEA,gCAAK,CACH,SAAS,CAAE,IACb,CAEA,0CAAe,CACb,OAAO,CAAE,GAAG,CAAC,GACf,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAU,CACR,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,GAAG,CAAC,CACpD,CAEA,gCAAK,CACH,SAAS,CAAE,IACb,CAEA,qCAAU,CACR,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GACf,CAEA,4BAAc,CAAC,mBAAM,CACnB,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GACf,CACA,0CAAe,CACb,UAAU,CAAE,IACd,CACF"}'
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isScheduledBtn = false } = $$props;
  let { scheduleRecurring = false } = $$props;
  let { eventCalendar = false } = $$props;
  let { embedCalendar = false } = $$props;
  let currentDate = /* @__PURE__ */ new Date();
  let { currentYear = currentDate.getUTCFullYear() } = $$props;
  let { currentMonth = currentDate.getUTCMonth() } = $$props;
  let { currentevents = [] } = $$props;
  let selectedDate;
  let daysInMonth2 = [];
  let hoveredDay = null;
  if ($$props.isScheduledBtn === void 0 && $$bindings.isScheduledBtn && isScheduledBtn !== void 0) $$bindings.isScheduledBtn(isScheduledBtn);
  if ($$props.scheduleRecurring === void 0 && $$bindings.scheduleRecurring && scheduleRecurring !== void 0) $$bindings.scheduleRecurring(scheduleRecurring);
  if ($$props.eventCalendar === void 0 && $$bindings.eventCalendar && eventCalendar !== void 0) $$bindings.eventCalendar(eventCalendar);
  if ($$props.embedCalendar === void 0 && $$bindings.embedCalendar && embedCalendar !== void 0) $$bindings.embedCalendar(embedCalendar);
  if ($$props.currentYear === void 0 && $$bindings.currentYear && currentYear !== void 0) $$bindings.currentYear(currentYear);
  if ($$props.currentMonth === void 0 && $$bindings.currentMonth && currentMonth !== void 0) $$bindings.currentMonth(currentMonth);
  if ($$props.currentevents === void 0 && $$bindings.currentevents && currentevents !== void 0) $$bindings.currentevents(currentevents);
  $$result.css.add(css$2);
  selectedDate = new Date(Date.UTC(currentYear, currentMonth, 1));
  {
    {
      const days = getDaysInMonth(selectedDate);
      const startDay = getDay(startOfMonth(selectedDate));
      daysInMonth2 = Array.from({ length: days }, (_, i) => ({
        day: i + 1,
        startDay: startDay + i,
        events: []
      }));
      daysInMonth2 = daysInMonth2.map((day) => {
        day.events = currentevents.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate.getUTCFullYear() === currentYear && eventDate.getUTCMonth() === selectedDate.getUTCMonth() && eventDate.getUTCDate() === day.day;
        });
        return day;
      });
    }
  }
  return `<div class="max-w-[1200px] overflow-hidden mx-auto w-full bg-BG-Primary mb-10"><div class="calendar w-full overflow-hidden mx-auto grid rounded-lg border border-stroke-Primary svelte-e3latg">${each(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (dayName) => {
    return `  <span class="flex p-3 items-center justify-center gap-3 bg-BG-Primary text-Text-Tartiary leading-[18px] font-normal text-[14px] sm:text-lg border-l first:border-l-0 border-stroke-Primary">${escape(dayName)} </span>`;
  })} ${each(Array(daysInMonth2[0]?.startDay || 0).fill().map(() => ""), (_) => {
    return `<div class="svelte-e3latg"></div>`;
  })} ${each(daysInMonth2, (day) => {
    return `   <div class="day-container text-[#252B37] flex flex-col items-center svelte-e3latg"><div class="my-1.5 w-full h-full flex flex-col items-center gap-2"><span class="day svelte-e3latg">${escape(day.day)}</span> ${each(day.events, (event) => {
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
      )}` : `${embedCalendar ? `<div class="w-full flex flex-col items-center gap-1.5 p-[5px] embedCalendar rounded svelte-e3latg"><img class="image svelte-e3latg" height="46px"${add_attribute("src", event.image, 0)}${add_attribute("alt", event.name, 0)}> <div class="timeline hidden sm:flex svelte-e3latg">${escape(event.timeline)}</div> <div class="desc svelte-e3latg">${escape(event.name)}</div> </div>` : ``}`}`}`;
    })} ${isScheduledBtn && hoveredDay === day ? `<div class="mt-auto mx-auto">${validate_component(Button, "Button").$$render(
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
    )} </div>` : ``}</div> </div>`;
  })}</div> </div>`;
});
const css$1 = {
  code: ".skeleton-monthly.svelte-1sfw7ap{display:grid;grid-template-columns:repeat(7, minmax(100px, 1fr));grid-gap:1px;padding-top:4px}.skeleton-animation.svelte-1sfw7ap{animation:svelte-1sfw7ap-pulse 1.5s infinite ease-in-out}@keyframes svelte-1sfw7ap-pulse{0%,100%{opacity:1}50%{opacity:0.5}}",
  map: '{"version":3,"file":"SkeletonLoader.svelte","sources":["SkeletonLoader.svelte"],"sourcesContent":["<script>\\n  export let type = \\"\\";\\n  let boxes = 30;\\n  let hoursInDay = 17;\\n  let quarter = 3;\\n  let month = 9;\\n\\n  // $: console.log(type);\\n<\/script>\\n\\n{#if type === \\"monthly\\"}\\n  <div class=\\"skeleton-animation p-7 rounded-sm bg-[#f0f0f0]\\"></div>\\n  <div class=\\"skeleton-monthly\\">\\n    {#each Array(boxes) as _, index (index)}\\n      <div class=\\"skeleton-animation\\">\\n        <div class=\\"w-full h-40 rounded-md bg-[#f0f0f0]\\"></div>\\n      </div>\\n    {/each}\\n  </div>\\n{:else if type === \\"daily\\"}\\n  <div class=\\"skeleton-animation\\">\\n    <div class=\\"flex\\">\\n      <div class=\\"p-5 w-[10%] mb-2\\"></div>\\n      <div class=\\"p-5 rounded-md w-[30%] mb-2 bg-[#f0f0f0]\\"></div>\\n    </div>\\n    <div class=\\"p-5 rounded-md w-full mb-2 bg-[#f0f0f0]\\"></div>\\n    <div class=\\"flex gap-2\\">\\n      <div class=\\"flex flex-col gap-2 w-[15%]\\">\\n        {#each Array(hoursInDay) as _, index (index)}\\n          <div class=\\"w-full h-10 rounded-sm bg-[#f0f0f0]\\"></div>\\n        {/each}\\n      </div>\\n      <div class=\\"flex flex-col gap-2 w-[85%]\\">\\n        {#each Array(hoursInDay) as _, index (index)}\\n          <div class=\\"w-full h-10 rounded-sm bg-[#f0f0f0]\\"></div>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n{:else if type === \\"weekly\\"}\\n  <div class=\\"skeleton-animation\\">\\n    <div class=\\"p-6 rounded-md w-full mb-3 bg-[#f0f0f0]\\"></div>\\n    <div class=\\"flex gap-2\\">\\n      <div class=\\"flex flex-col gap-2 w-[15%]\\">\\n        {#each Array(hoursInDay) as _, index (index)}\\n          <div class=\\"w-full h-10 rounded-sm bg-[#f0f0f0]\\"></div>\\n        {/each}\\n      </div>\\n      <div class=\\"flex flex-col gap-2 w-[85%]\\">\\n        {#each Array(hoursInDay) as _, index (index)}\\n          <div class=\\"w-full h-10 rounded-sm bg-[#f0f0f0]\\"></div>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n{:else if type === \\"quarter\\"}\\n  <div class=\\"skeleton-animation\\">\\n    <div class=\\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4\\">\\n      {#each Array(quarter) as _, index (index)}\\n        <div>\\n          <div class=\\"w-full h-64 rounded-md bg-[#f0f0f0]\\"></div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n{:else if type === \\"yearly\\"}\\n  <div class=\\"skeleton-animation\\">\\n    <div class=\\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4\\">\\n      {#each Array(month) as _, index (index)}\\n        <div>\\n          <div class=\\"w-full h-64 rounded-md bg-[#f0f0f0]\\"></div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n{/if}\\n\\n<style>\\n  .skeleton-monthly {\\n    display: grid;\\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\\n    grid-gap: 1px;\\n    padding-top: 4px;\\n  }\\n  .skeleton-animation {\\n    animation: pulse 1.5s infinite ease-in-out;\\n  }\\n  @keyframes pulse {\\n    0%,\\n    100% {\\n      opacity: 1;\\n    }\\n    50% {\\n      opacity: 0.5;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8EE,gCAAkB,CAChB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CACpD,QAAQ,CAAE,GAAG,CACb,WAAW,CAAE,GACf,CACA,kCAAoB,CAClB,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,QAAQ,CAAC,WACjC,CACA,WAAW,oBAAM,CACf,EAAE,CACF,IAAK,CACH,OAAO,CAAE,CACX,CACA,GAAI,CACF,OAAO,CAAE,GACX,CACF"}'
};
let boxes = 30;
let hoursInDay = 17;
let quarter = 3;
let month = 9;
const SkeletonLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  $$result.css.add(css$1);
  return `${type === "monthly" ? `<div class="skeleton-animation p-7 rounded-sm bg-[#f0f0f0] svelte-1sfw7ap"></div> <div class="skeleton-monthly svelte-1sfw7ap">${each(Array(boxes), (_, index) => {
    return `<div class="skeleton-animation svelte-1sfw7ap" data-svelte-h="svelte-18gxy75"><div class="w-full h-40 rounded-md bg-[#f0f0f0]"></div> </div>`;
  })}</div>` : `${type === "daily" ? `<div class="skeleton-animation svelte-1sfw7ap"><div class="flex" data-svelte-h="svelte-1g2m542"><div class="p-5 w-[10%] mb-2"></div> <div class="p-5 rounded-md w-[30%] mb-2 bg-[#f0f0f0]"></div></div> <div class="p-5 rounded-md w-full mb-2 bg-[#f0f0f0]"></div> <div class="flex gap-2"><div class="flex flex-col gap-2 w-[15%]">${each(Array(hoursInDay), (_, index) => {
    return `<div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>`;
  })}</div> <div class="flex flex-col gap-2 w-[85%]">${each(Array(hoursInDay), (_, index) => {
    return `<div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>`;
  })}</div></div></div>` : `${type === "weekly" ? `<div class="skeleton-animation svelte-1sfw7ap"><div class="p-6 rounded-md w-full mb-3 bg-[#f0f0f0]"></div> <div class="flex gap-2"><div class="flex flex-col gap-2 w-[15%]">${each(Array(hoursInDay), (_, index) => {
    return `<div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>`;
  })}</div> <div class="flex flex-col gap-2 w-[85%]">${each(Array(hoursInDay), (_, index) => {
    return `<div class="w-full h-10 rounded-sm bg-[#f0f0f0]"></div>`;
  })}</div></div></div>` : `${type === "quarter" ? `<div class="skeleton-animation svelte-1sfw7ap"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">${each(Array(quarter), (_, index) => {
    return `<div data-svelte-h="svelte-9rzvp8"><div class="w-full h-64 rounded-md bg-[#f0f0f0]"></div> </div>`;
  })}</div></div>` : `${type === "yearly" ? `<div class="skeleton-animation svelte-1sfw7ap"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">${each(Array(month), (_, index) => {
    return `<div data-svelte-h="svelte-9rzvp8"><div class="w-full h-64 rounded-md bg-[#f0f0f0]"></div> </div>`;
  })}</div></div>` : ``}`}`}`}`}`;
});
const css = {
  code: ".shadower.svelte-1nqnxmb{box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2),\n      0 6px 10px 0 rgba(0, 0, 0, 0.14),\n      0 1px 18px 0 rgba(0, 0, 0, 0.12)}",
  map: '{"version":3,"file":"CalendarContainer.svelte","sources":["CalendarContainer.svelte"],"sourcesContent":["<script>\\n  import { writable } from \\"svelte/store\\";\\n  import LeftArrow from \\"./../../../assets/svg/arrow-Left-01.svg\\";\\n  import RightArrow from \\"./../../../assets/svg/arrow-right-01.svg\\";\\n  import CaretDown from \\"carbon-icons-svelte/lib/CaretDown.svelte\\";\\n\\n  import DailyView from \\"../Views/DailyView.svelte\\";\\n  import WeeklyView from \\"../Views/WeeklyView.svelte\\";\\n  import QuarterView from \\"../Views/QuarterView.svelte\\";\\n  import YearlyView from \\"../Views/YearlyView.svelte\\";\\n  import Calendar from \\"../Calendar.svelte\\";\\n  import { onMount } from \\"svelte\\";\\n  import imageView from \\"./../../../assets/images/image.png\\";\\n  import SkeletonLoader from \\"../../SkeletonLoader/SkeletonLoader.svelte\\";\\n\\n  let date = new Date(\\n    Date.UTC(\\n      new Date().getUTCFullYear(),\\n      new Date().getUTCMonth(),\\n      new Date().getUTCDate()\\n    )\\n  );\\n\\n  let options = [\\n    { id: 0, text: \\"Day\\" },\\n    { id: 1, text: \\"Week\\" },\\n    { id: 2, text: \\"Month\\" },\\n    { id: 3, text: \\"Quarter\\" },\\n    { id: 4, text: \\"Year\\" },\\n  ];\\n\\n  let isDatePickerOpen = writable(false);\\n  let currentView = writable(options[2].text);\\n  let currentYear = writable(date.getUTCFullYear());\\n  let currentMonth = writable(date.getUTCMonth());\\n  let currentQuarter = writable(Math.ceil((date.getUTCMonth() + 1) / 3));\\n  let selectedDate = writable(date);\\n  let loading = writable(true);\\n\\n  function toggleDatePicker() {\\n    isDatePickerOpen.update((state) => !state);\\n  }\\n\\n  function selectOption(option) {\\n    currentView.set(option.text);\\n    isDatePickerOpen.set(false);\\n  }\\n\\n  function handleNext() {\\n    if ($currentView === \\"Day\\") {\\n      selectedDate.update(\\n        (d) =>\\n          new Date(\\n            Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1)\\n          )\\n      );\\n    } else if ($currentView === \\"Week\\") {\\n      selectedDate.update(\\n        (d) =>\\n          new Date(\\n            Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 7)\\n          )\\n      );\\n    } else if ($currentView === \\"Month\\") {\\n      currentMonth.update((month) => {\\n        if (month === 11) {\\n          currentYear.update((year) => year + 1);\\n          return 0;\\n        }\\n        return month + 1;\\n      });\\n    } else if ($currentView === \\"Quarter\\") {\\n      currentQuarter.update((quarter) => {\\n        let newQuarter = quarter + 1;\\n        if (newQuarter > 4) {\\n          newQuarter = 1;\\n          currentYear.update((year) => year + 1);\\n        }\\n        return newQuarter;\\n      });\\n    } else if ($currentView === \\"Year\\") {\\n      currentYear.update((year) => year + 1);\\n    }\\n  }\\n\\n  function handlePrev() {\\n    if ($currentView === \\"Day\\") {\\n      selectedDate.update(\\n        (d) =>\\n          new Date(\\n            Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - 1)\\n          )\\n      );\\n    } else if ($currentView === \\"Week\\") {\\n      selectedDate.update(\\n        (d) =>\\n          new Date(\\n            Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - 7)\\n          )\\n      );\\n    } else if ($currentView === \\"Month\\") {\\n      currentMonth.update((month) => {\\n        if (month === 0) {\\n          currentYear.update((year) => year - 1);\\n          return 11;\\n        }\\n        return month - 1;\\n      });\\n    } else if ($currentView === \\"Quarter\\") {\\n      currentQuarter.update((quarter) => {\\n        let newQuarter = quarter - 1;\\n        if (newQuarter < 1) {\\n          newQuarter = 4;\\n          currentYear.update((year) => year - 1);\\n        }\\n        return newQuarter;\\n      });\\n    } else if ($currentView === \\"Year\\") {\\n      currentYear.update((year) => year - 1);\\n    }\\n  }\\n\\n  let events = [];\\n  function convertToCustomDateTimeFormat(isoDateString) {\\n    const date = new Date(isoDateString);\\n    return new Date(\\n      Date.UTC(\\n        date.getUTCFullYear(),\\n        date.getUTCMonth(),\\n        date.getUTCDate(),\\n        date.getUTCHours(),\\n        date.getUTCMinutes()\\n      )\\n    );\\n  }\\n\\n  function convertToCustomDateFormat(isoDateString) {\\n    const date = new Date(isoDateString);\\n    return new Date(\\n      Date.UTC(\\n        date.getUTCFullYear(),\\n        date.getUTCMonth(),\\n        date.getUTCDate(),\\n        date.getUTCHours()\\n      )\\n    );\\n  }\\n\\n  function formatTimeRange(startDate, endDate) {\\n    const start = new Date(startDate);\\n    const end = new Date(endDate);\\n\\n    function formatTime(date) {\\n      let hours = date.getUTCHours();\\n      const minutes = date.getUTCMinutes();\\n      const ampm = hours >= 12 ? \\"PM\\" : \\"AM\\";\\n      hours = hours % 12;\\n      hours = hours ? hours : 12;\\n      const minutesStr = minutes < 10 ? \\"0\\" + minutes : minutes;\\n      return hours + \\":\\" + minutesStr + \\" \\" + ampm;\\n    }\\n    const startTime = formatTime(start);\\n    const endTime = formatTime(end);\\n    return `${startTime} - ${endTime}`;\\n  }\\n\\n  const fetchEvents = async () => {\\n    loading.set(true);\\n    try {\\n      const response = await fetch(\\"/api/getEventsForVenue\\");\\n      if (response.ok) {\\n        const list = await response.json();\\n        const setData = list.map((c) => {\\n          let startTime = convertToCustomDateTimeFormat(c.startDateTime);\\n          let endTime = convertToCustomDateTimeFormat(c.endDateTime);\\n          return {\\n            name: c.title,\\n            date: convertToCustomDateFormat(c.startDateTime),\\n            image: imageView,\\n            description: c.description,\\n            timeline: formatTimeRange(startTime, endTime),\\n          };\\n        });\\n        events = setData;\\n        console.log(setData);\\n        loading.set(false);\\n      } else {\\n        console.error(\\"Failed to load events:\\", response.status);\\n      }\\n    } catch (error) {\\n      console.error(\\"Error fetching events:\\", error);\\n      loading.set(false);\\n    }\\n  };\\n  onMount(() => {\\n    fetchEvents();\\n  });\\n<\/script>\\n\\n<div\\n  class=\\"max-w-7xl mx-auto w-full h-screen overflow-x-auto border border-stroke-Primary rounded-lg bg-BG-Primary\\"\\n>\\n  <header\\n    class=\\"h-16 flex items-center w-full border-b border-stroke-Primary mx-auto\\"\\n  >\\n    <nav\\n      class=\\"w-full sm:max-w-6xl mx-auto flex items-center justify-between px-2\\"\\n    >\\n      <div class=\\"flex items-center gap-5 h-full\\">\\n        <button\\n          class=\\"border cursor-pointer outline-none border-stroke-Primary rounded-full p-3\\"\\n          on:click={handlePrev}\\n        >\\n          <img class=\\"w-5 h-5\\" src={LeftArrow} alt=\\"Previous\\" />\\n        </button>\\n      </div>\\n      <h2\\n        class=\\"text-[#0D1526] pb-5 pt-5 text-center text-xl leading-[20px] font-normal\\"\\n      >\\n        {#if $currentView === \\"Day\\"}\\n          {new Intl.DateTimeFormat(\\"en-GB\\", {\\n            day: \\"numeric\\",\\n            month: \\"long\\",\\n            year: \\"numeric\\",\\n            timeZone: \\"UTC\\",\\n          }).format($selectedDate)}\\n        {:else if $currentView === \\"Week\\"}\\n          {new Intl.DateTimeFormat(\\"en\\", {\\n            month: \\"long\\",\\n            year: \\"numeric\\",\\n            timeZone: \\"UTC\\",\\n          }).format($selectedDate)}\\n        {:else if $currentView === \\"Month\\"}\\n          {new Intl.DateTimeFormat(\\"en\\", {\\n            month: \\"long\\",\\n            year: \\"numeric\\",\\n            timeZone: \\"UTC\\",\\n          }).format(new Date(Date.UTC($currentYear, $currentMonth)))}\\n        {:else if $currentView === \\"Quarter\\"}\\n          {$currentYear}\\n        {:else if $currentView === \\"Year\\"}\\n          {$currentYear}\\n        {/if}\\n      </h2>\\n      <div class=\\"flex items-center justify-center gap-1.5\\">\\n        <div class=\\"relative\\">\\n          <button\\n            class=\\"w-auto border-[1px] border-stroke-Primary rounded-full pl-4 pr-3 py-3 flex items-center text-black/70 text-sm leading-[17.5px]\\"\\n            on:click={toggleDatePicker}\\n          >\\n            {$currentView}\\n            <CaretDown class=\\"ml-2\\" />\\n          </button>\\n          {#if $isDatePickerOpen}\\n            <div\\n              class=\\"absolute top-12 right-0 w-[190px] bg-white rounded-lg shadower border shadow-3xl z-10 py-2\\"\\n            >\\n              {#each options as option}\\n                <!-- svelte-ignore a11y-click-events-have-key-events -->\\n                <!-- svelte-ignore a11y-no-static-element-interactions -->\\n                <div\\n                  class=\\"py-2 px-4 hover:bg-gray-100 cursor-pointer text-sm w-full hover:no-underline text-black/70 bg-white flex justify-between items-center\\"\\n                  on:click={() => selectOption(option)}\\n                >\\n                  <span>{option.text}</span>\\n                  <span class=\\"text-xs\\">{option.text.charAt(0)}</span>\\n                </div>\\n              {/each}\\n            </div>\\n          {/if}\\n        </div>\\n        <button\\n          class=\\"border cursor-pointer outline-none border-stroke-Primary rounded-full p-3\\"\\n          on:click={handleNext}\\n        >\\n          <img class=\\"w-5 h-5\\" src={RightArrow} alt=\\"Next\\" />\\n        </button>\\n      </div>\\n    </nav>\\n  </header>\\n\\n  <main class=\\"px-2 py-4 max-w-6xl mx-auto\\">\\n    {#if $currentView === \\"Day\\"}\\n      {#if $loading}\\n        <SkeletonLoader type=\\"daily\\" />\\n      {:else}\\n        <DailyView\\n          selectedDate={$selectedDate}\\n          embedCalendar\\n          currentevents={events}\\n        />\\n      {/if}\\n    {:else if $currentView === \\"Week\\"}\\n      {#if $loading}\\n        <SkeletonLoader type=\\"weekly\\" />\\n      {:else}\\n        <WeeklyView\\n          selectedDate={$selectedDate}\\n          embedCalendar\\n          currentevents={events}\\n        />\\n      {/if}\\n    {:else if $currentView === \\"Month\\"}\\n      {#if $loading}\\n        <SkeletonLoader type=\\"monthly\\" />\\n      {:else}\\n        <Calendar\\n          embedCalendar\\n          currentYear={$currentYear}\\n          currentMonth={$currentMonth}\\n          currentevents={events}\\n        />\\n      {/if}\\n    {:else if $currentView === \\"Quarter\\"}\\n      {#if $loading}\\n        <SkeletonLoader type=\\"quarter\\" />\\n      {:else}\\n        <QuarterView\\n          year={$currentYear}\\n          quarter={$currentQuarter}\\n          currentevents={events}\\n        />\\n      {/if}\\n    {:else if $currentView === \\"Year\\"}\\n      {#if $loading}\\n        <SkeletonLoader type=\\"yearly\\" />\\n      {:else}\\n        <YearlyView currentYear={$currentYear} currentevents={events} />\\n      {/if}\\n    {/if}\\n  </main>\\n</div>\\n\\n<style>\\n  .shadower {\\n    box-shadow:\\n      0 3px 5px -1px rgba(0, 0, 0, 0.2),\\n      0 6px 10px 0 rgba(0, 0, 0, 0.14),\\n      0 1px 18px 0 rgba(0, 0, 0, 0.12);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8UE,wBAAU,CACR,UAAU,CACR,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC;AACvC,MAAM,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;AACtC,MAAM,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CACnC"}'
};
const CalendarContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentView, $$unsubscribe_currentView;
  let $selectedDate, $$unsubscribe_selectedDate;
  let $currentYear, $$unsubscribe_currentYear;
  let $currentMonth, $$unsubscribe_currentMonth;
  let $isDatePickerOpen, $$unsubscribe_isDatePickerOpen;
  let $loading, $$unsubscribe_loading;
  let $currentQuarter, $$unsubscribe_currentQuarter;
  let date = new Date(Date.UTC((/* @__PURE__ */ new Date()).getUTCFullYear(), (/* @__PURE__ */ new Date()).getUTCMonth(), (/* @__PURE__ */ new Date()).getUTCDate()));
  let options = [
    { id: 0, text: "Day" },
    { id: 1, text: "Week" },
    { id: 2, text: "Month" },
    { id: 3, text: "Quarter" },
    { id: 4, text: "Year" }
  ];
  let isDatePickerOpen = writable(false);
  $$unsubscribe_isDatePickerOpen = subscribe(isDatePickerOpen, (value) => $isDatePickerOpen = value);
  let currentView = writable(options[2].text);
  $$unsubscribe_currentView = subscribe(currentView, (value) => $currentView = value);
  let currentYear = writable(date.getUTCFullYear());
  $$unsubscribe_currentYear = subscribe(currentYear, (value) => $currentYear = value);
  let currentMonth = writable(date.getUTCMonth());
  $$unsubscribe_currentMonth = subscribe(currentMonth, (value) => $currentMonth = value);
  let currentQuarter = writable(Math.ceil((date.getUTCMonth() + 1) / 3));
  $$unsubscribe_currentQuarter = subscribe(currentQuarter, (value) => $currentQuarter = value);
  let selectedDate = writable(date);
  $$unsubscribe_selectedDate = subscribe(selectedDate, (value) => $selectedDate = value);
  let loading = writable(true);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let events = [];
  $$result.css.add(css);
  $$unsubscribe_currentView();
  $$unsubscribe_selectedDate();
  $$unsubscribe_currentYear();
  $$unsubscribe_currentMonth();
  $$unsubscribe_isDatePickerOpen();
  $$unsubscribe_loading();
  $$unsubscribe_currentQuarter();
  return `<div class="max-w-7xl mx-auto w-full h-screen overflow-x-auto border border-stroke-Primary rounded-lg bg-BG-Primary"><header class="h-16 flex items-center w-full border-b border-stroke-Primary mx-auto"><nav class="w-full sm:max-w-6xl mx-auto flex items-center justify-between px-2"><div class="flex items-center gap-5 h-full"><button class="border cursor-pointer outline-none border-stroke-Primary rounded-full p-3" data-svelte-h="svelte-t28vuw"><img class="w-5 h-5"${add_attribute("src", LeftArrow, 0)} alt="Previous"></button></div> <h2 class="text-[#0D1526] pb-5 pt-5 text-center text-xl leading-[20px] font-normal">${$currentView === "Day" ? `${escape(new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }
  ).format($selectedDate))}` : `${$currentView === "Week" ? `${escape(new Intl.DateTimeFormat(
    "en",
    {
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }
  ).format($selectedDate))}` : `${$currentView === "Month" ? `${escape(new Intl.DateTimeFormat(
    "en",
    {
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }
  ).format(new Date(Date.UTC($currentYear, $currentMonth))))}` : `${$currentView === "Quarter" ? `${escape($currentYear)}` : `${$currentView === "Year" ? `${escape($currentYear)}` : ``}`}`}`}`}</h2> <div class="flex items-center justify-center gap-1.5"><div class="relative"><button class="w-auto border-[1px] border-stroke-Primary rounded-full pl-4 pr-3 py-3 flex items-center text-black/70 text-sm leading-[17.5px]">${escape($currentView)} ${validate_component(CaretDown, "CaretDown").$$render($$result, { class: "ml-2" }, {}, {})}</button> ${$isDatePickerOpen ? `<div class="absolute top-12 right-0 w-[190px] bg-white rounded-lg shadower border shadow-3xl z-10 py-2 svelte-1nqnxmb">${each(options, (option) => {
    return `  <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer text-sm w-full hover:no-underline text-black/70 bg-white flex justify-between items-center"><span>${escape(option.text)}</span> <span class="text-xs">${escape(option.text.charAt(0))}</span> </div>`;
  })}</div>` : ``}</div> <button class="border cursor-pointer outline-none border-stroke-Primary rounded-full p-3" data-svelte-h="svelte-1yy1wsb"><img class="w-5 h-5"${add_attribute("src", RightArrow, 0)} alt="Next"></button></div></nav></header> <main class="px-2 py-4 max-w-6xl mx-auto">${$currentView === "Day" ? `${$loading ? `${validate_component(SkeletonLoader, "SkeletonLoader").$$render($$result, { type: "daily" }, {}, {})}` : `${validate_component(DailyView, "DailyView").$$render(
    $$result,
    {
      selectedDate: $selectedDate,
      embedCalendar: true,
      currentevents: events
    },
    {},
    {}
  )}`}` : `${$currentView === "Week" ? `${$loading ? `${validate_component(SkeletonLoader, "SkeletonLoader").$$render($$result, { type: "weekly" }, {}, {})}` : `${validate_component(WeeklyView, "WeeklyView").$$render(
    $$result,
    {
      selectedDate: $selectedDate,
      embedCalendar: true,
      currentevents: events
    },
    {},
    {}
  )}`}` : `${$currentView === "Month" ? `${$loading ? `${validate_component(SkeletonLoader, "SkeletonLoader").$$render($$result, { type: "monthly" }, {}, {})}` : `${validate_component(Calendar, "Calendar").$$render(
    $$result,
    {
      embedCalendar: true,
      currentYear: $currentYear,
      currentMonth: $currentMonth,
      currentevents: events
    },
    {},
    {}
  )}`}` : `${$currentView === "Quarter" ? `${$loading ? `${validate_component(SkeletonLoader, "SkeletonLoader").$$render($$result, { type: "quarter" }, {}, {})}` : `${validate_component(QuarterView, "QuarterView").$$render(
    $$result,
    {
      year: $currentYear,
      quarter: $currentQuarter,
      currentevents: events
    },
    {},
    {}
  )}`}` : `${$currentView === "Year" ? `${$loading ? `${validate_component(SkeletonLoader, "SkeletonLoader").$$render($$result, { type: "yearly" }, {}, {})}` : `${validate_component(YearlyView, "YearlyView").$$render(
    $$result,
    {
      currentYear: $currentYear,
      currentevents: events
    },
    {},
    {}
  )}`}` : ``}`}`}`}`}</main> </div>`;
});
const AlertIcon = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Alert%20icon'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.2058%206C30.8921%202%2025.1079%202%2022.7942%206L0.814303%2044C-1.49937%2048%201.39273%2053%206.02008%2053H49.9799C54.6073%2053%2057.4994%2048%2055.1857%2044L33.2058%206ZM28.1687%2019C26.2321%2019%2024.6622%2020.567%2024.6622%2022.5V31.5C24.6622%2033.433%2026.2321%2035%2028.1687%2035C30.1053%2035%2031.6752%2033.433%2031.6752%2031.5V22.5C31.6752%2020.567%2030.1053%2019%2028.1687%2019ZM28.1687%2038C26.2321%2038%2024.6622%2039.567%2024.6622%2041.5C24.6622%2043.433%2026.2321%2045%2028.1687%2045C30.1053%2045%2031.6752%2043.433%2031.6752%2041.5C31.6752%2039.567%2030.1053%2038%2028.1687%2038Z'%20fill='%23FF922E'/%3e%3c/g%3e%3c/svg%3e";
function shapeStyle$1(shape) {
  switch (shape) {
    case "64x64-rounded-square":
      return `w-16 h-16 rounded-lg`;
    case "256x256-profile-photo":
      return `w-64 h-64 rounded-full`;
    case "128x128-rounded-square":
      return `w-32 h-32 rounded-lg`;
    case "fullwidth-rounded-rectangle":
      return `w-full h-32 rounded-xl`;
    case "32x32-circle":
      return `w-8 h-8 rounded-full`;
    default:
      return `w-16 h-16 rounded-lg`;
  }
}
function shapeClose$1(shape) {
  switch (shape) {
    case "64x64-rounded-square":
      return `top-[-5px] right-[-5px] p-1 rounded-lg`;
    case "256x256-profile-photo":
      return `top-[22px] right-[19px] p-2.5 rounded-full`;
    case "128x128-rounded-square":
      return `top-[-5px] right-[-5px] p-1 rounded-lg`;
    case "fullwidth-rounded-rectangle":
      return `top-[-5px] right-[-5px] p-1 rounded-xl`;
    case "32x32-circle":
      return `top-[-3px] right-[-3px] rounded-full`;
    default:
      return `top-[-5px] right-[-5px] p-1 rounded-full`;
  }
}
const FileDropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { existingImages = [] } = $$props;
  let { readonly = false } = $$props;
  let { shape = "default" } = $$props;
  let images = [];
  let videos = [];
  let pdfs = [];
  let deleteModalOpen = false;
  let selectedIndex = null;
  let fileType = null;
  const dispatch = createEventDispatcher();
  function handleDelete(index, type) {
    if (fileType === "image" && selectedIndex !== null) {
      images = images.filter((_, i) => i !== selectedIndex);
    } else if (fileType === "video" && selectedIndex !== null) {
      videos = videos.filter((_, i) => i !== selectedIndex);
    } else if (fileType === "pdf" && selectedIndex !== null) {
      pdfs = pdfs.filter((_, i) => i !== selectedIndex);
    }
    dispatch("delete", { index, type });
    selectedIndex = null;
    deleteModalOpen = !deleteModalOpen;
  }
  function handeModel(index = null, type) {
    deleteModalOpen = !deleteModalOpen;
    if (index !== null) {
      selectedIndex = index;
      fileType = type;
    }
  }
  if ($$props.existingImages === void 0 && $$bindings.existingImages && existingImages !== void 0) $$bindings.existingImages(existingImages);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0) $$bindings.readonly(readonly);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0) $$bindings.shape(shape);
  images = existingImages;
  return `<input type="file" accept="image/*,video/mp4,application/pdf" class="hidden" aria-label="file-input"> <div class="w-4/5 mx-auto"><div class="w-full flex flex-col justify-center items-start p-4 rounded-[12px] bg-white border border-BG-Secondary shadow"><div class="flex w-full gap-3.5">${each(images, (image, index) => {
    return `<div${add_attribute("class", `relative shadow ${shapeStyle$1(shape)}`, 0)}> <img${add_attribute("src", image, 0)} alt="uploaded image"${add_attribute("class", `object-cover ${shapeStyle$1(shape)}`, 0)}> ${!readonly ? `<button${add_attribute("class", `${shapeClose$1(shape)} absolute bg-red-200 cursor-pointer`, 0)}><img${add_attribute("src", Cancel, 0)} alt="close button img"> </button>` : ``} </div>`;
  })} ${each(videos, (video, index) => {
    return `<div${add_attribute("class", `relative shadow ${shapeStyle$1(shape)}`, 0)}> <video${add_attribute("src", video, 0)} alt="uploaded video"${add_attribute("class", `object-cover ${shapeStyle$1(shape)}`, 0)}></video> ${!readonly ? `<button${add_attribute("class", `${shapeClose$1(shape)} absolute bg-red-200 cursor-pointer`, 0)}><img${add_attribute("src", Cancel, 0)} alt="X"> </button>` : ``} </div>`;
  })} ${each(pdfs, (pdf, index) => {
    return `<div${add_attribute("class", `relative shadow ${shapeStyle$1(shape)} flex justify-center items-center`, 0)}><img${add_attribute("src", pdfUpload, 0)} alt="PDF Icon"${add_attribute(
      "class",
      `"object-contain max-w-full max-h-full ${shape.includes("256x256-profile-photo") ? "rounded-full" : "p-2"}`,
      0
    )}> ${!readonly ? `<button${add_attribute("class", `${shapeClose$1(shape)} absolute bg-red-200 cursor-pointer`, 0)}><img${add_attribute("src", Cancel, 0)} alt="close button img"> </button>` : ``} </div>`;
  })} ${!readonly ? `<button${add_attribute("class", `flex justify-center items-center border-dashed border-2 cursor-pointer border-brand-Primary border-opacity-50 bg-BG-Secondary ${shapeStyle$1(shape)}`, 0)}><img${add_attribute("src", AddMain, 0)} alt="Add icon"${add_attribute("class", `${shape.includes("32x32-circle") && "p-1.5"}`, 0)}></button>` : ``}</div> ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: deleteModalOpen,
      icon: AlertIcon,
      title: "Delete this image?",
      description: "Are you sure you want to permanently delete this image? This action cannot be undone.",
      actions: [
        {
          label: "Cancel",
          strokebtn: true,
          onClick: handeModel
        },
        { label: "Delete", onClick: handleDelete }
      ]
    },
    {},
    {}
  )} ${``}</div></div>`;
});
function shapeStyle(shape) {
  return shape === "round" ? "w-16 h-16 rounded-full" : "w-16 h-16 rounded-lg";
}
function shapeClose(shape) {
  return shape === "round" ? "top-[-2px] right-[-2px] p-1 rounded-full" : "top-[-5px] right-[-5px] p-1 rounded-full";
}
const CropZone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { existingImage = "" } = $$props;
  let { readonly = false } = $$props;
  let { shape = "rect" } = $$props;
  let image = existingImage || "";
  let croppedImage = "";
  let deleteModalOpen = false;
  const dispatch = createEventDispatcher();
  function handleDelete() {
    image = "";
    croppedImage = "";
    dispatch("delete");
    deleteModalOpen = false;
  }
  function handleModel() {
    deleteModalOpen = !deleteModalOpen;
  }
  if ($$props.existingImage === void 0 && $$bindings.existingImage && existingImage !== void 0) $$bindings.existingImage(existingImage);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0) $$bindings.readonly(readonly);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0) $$bindings.shape(shape);
  {
    if (existingImage && !croppedImage && !image) {
      image = existingImage;
    }
  }
  return `<input type="file" accept="image/*" id="file-input" class="hidden" aria-label="file-input"> <div class="w-4/5 mx-auto"><div class="w-full flex flex-col justify-center items-start p-4 rounded-[12px] bg-white border border-BG-Secondary shadow"><div class="flex w-full gap-3.5">${croppedImage || image ? `<div${add_attribute("class", `relative shadow ${shapeStyle(shape)}`, 0)}> <img${add_attribute("src", croppedImage || image, 0)} alt="uploaded image"${add_attribute("class", `w-full h-full object-cover ${shapeStyle(shape)}`, 0)}> ${!readonly ? `<button${add_attribute("class", `${shapeClose(shape)} absolute bg-red-200 cursor-pointer`, 0)}><img${add_attribute("src", Cancel, 0)} alt="close button img"></button>` : ``}</div>` : `${!readonly ? `<button${add_attribute("class", `flex justify-center items-center border-dashed border-2 cursor-pointer border-brand-Primary border-opacity-50 bg-BG-Secondary ${shapeStyle(shape)}`, 0)}><img${add_attribute("src", AddMain, 0)} alt="Add icon"></button>` : ``}`}</div> ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: deleteModalOpen,
      icon: AlertIcon,
      title: "Delete this image?",
      description: "Are you sure you want to permanently delete this image? This action cannot be undone.",
      actions: [
        {
          label: "Cancel",
          strokebtn: true,
          onClick: handleModel
        },
        { label: "Delete", onClick: handleDelete }
      ]
    },
    {},
    {}
  )} ${``} ${``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalOpen = false;
  function onConfirm() {
    console.log("Item created");
    modalOpen = false;
  }
  return `${$$result.head += `<!-- HEAD_svelte-8gb88t_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-8gb88t_END -->`, ""} <div class="flex flex-col my-5" data-svelte-h="svelte-1kjlz9r"><h1>List of Links</h1> <ul><li><a href="/settings" class="text-xl text-blue-500 underline">Settings</a></li> <li><a href="/settings/profile" class="text-xl text-blue-500 underline">Profile</a></li> <li><a href="/settings/invite-user" class="text-xl text-blue-500 underline">Invite User</a></li> <li><a href="/settings/venue/add" class="text-xl text-blue-500 underline">Add Venue</a></li> <li><a href="/settings/create-role" class="text-xl text-blue-500 underline">Create Role</a></li></ul></div> <div class="py-5">${validate_component(FileDropzone, "FileDropzone").$$render($$result, {}, {}, {})}</div> <div class="py-5">${validate_component(CropZone, "Cropzone").$$render($$result, { shape: "round" }, {}, {})}</div> <div class="py-5">${validate_component(CalendarContainer, "CalendarContainer").$$render($$result, {}, {}, {})}</div> <div class="py-5">${validate_component(DatePicker, "DatePicker").$$render($$result, {}, {}, {})}</div> <div class="py-5">${validate_component(DateRangePicker, "DateRangePicker").$$render($$result, {}, {}, {})}</div> <section class="flex flex-col justify-center items-center flex-[0.6] py-20"><div class="flex space-x-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      alert: true,
      strokebtn: true,
      beforeIcon: Pin
    },
    {},
    {
      default: () => {
        return `Open Modal`;
      }
    }
  )}</div> ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: modalOpen,
      title: "Create Item",
      description: "Are you sure you want to create this item?",
      closeBtn: true,
      actions: [
        {
          label: "Cancel",
          onClick: () => modalOpen = false,
          strokebtn: true
        },
        { label: "Confirm", onClick: onConfirm }
      ]
    },
    {},
    {}
  )} <div class="py-5 flex gap-2">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div> <div class="py-5">${validate_component(Badge, "Badge").$$render($$result, { status: "success", size: "large" }, {}, {
    default: () => {
      return `modal`;
    }
  })} ${validate_component(Badge, "Badge").$$render($$result, { status: "danger", size: "large" }, {}, {
    default: () => {
      return `alert`;
    }
  })} ${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      dismissable: true,
      className: "border border-stroke-Primary",
      size: "large"
    },
    {},
    {
      default: () => {
        return `warning`;
      }
    }
  )} <p data-svelte-h="svelte-g5lrs8">To check more about Button variations, Please check the Storybook</p></div></section>`;
});
export {
  Page as default
};
