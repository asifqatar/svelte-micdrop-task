<script>
  import { writable } from "svelte/store";
  import { createEventDispatcher } from "svelte";
  import Button from "./../Button/Button.svelte";
  import CalendarIcon from "./../../assets/icons/calendar-month.svg";
  import ArrowLeft from "./../../assets/icons/left-square.svg";
  import ArrowRight from "./../../assets/icons/right-square.svg";

  let selectedStartDate = writable(null);
  let selectedEndDate = writable(null);
  let isDatePickerOpen = writable(false);
  let currentMonth1 = writable(new Date().getMonth());
  let currentYear1 = writable(new Date().getFullYear());
  let currentMonth2 = writable(new Date().getMonth() + 1);
  let currentYear2 = writable(new Date().getFullYear());
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];
  let options = [
    { id: 0, text: "Select a range", disabled: true },
    { id: 1, text: "Last 30 days" },
    { id: 2, text: "Last 7 days" },
    { id: 3, text: "Last 3 days" },
  ];

  const dispatch = createEventDispatcher();

  let selected = options[0];
  function toggleDatePicker() {
    dispatch(isDatePickerOpen.update((state) => !state));
  }
  function formatDate(year, month, day) {
    return `${String(month + 1).padStart(2, "0")}/${day}/${year}`;
  }
  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
  function firstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }
  function prevMonth(calendar) {
    if (calendar === 1) {
      currentMonth1.update((m) => {
        if (m === 0) {
          currentYear1.update((y) => y - 1);
          return 11;
        } else {
          return m - 1;
        }
      });
    } else {
      currentMonth2.update((m) => {
        if (m === 0) {
          currentYear2.update((y) => y - 1);
          return 11;
        } else {
          return m - 1;
        }
      });
    }
  }
  function nextMonth(calendar) {
    if (calendar === 1) {
      currentMonth1.update((m) => {
        if (m === 11) {
          currentYear1.update((y) => y + 1);
          return 0;
        } else {
          return m + 1;
        }
      });
    } else {
      currentMonth2.update((m) => {
        if (m === 11) {
          currentYear2.update((y) => y + 1);
          return 0;
        } else {
          return m + 1;
        }
      });
    }
  }
  function isWithinRange(date, start, end) {
    if (!start || !end) return false;
    const currentDate = new Date(date);
    const startDate = new Date(start);
    const endDate = new Date(end);
    return currentDate >= startDate && currentDate <= endDate;
  }
  function selectDate(date, isStart) {
    let parsedDate = new Date(date);
    if (isStart) {
      if ($selectedEndDate && new Date($selectedEndDate) < parsedDate) {
        selectedStartDate.set($selectedEndDate);
        selectedEndDate.set(date);
      } else {
        selectedStartDate.set(date);
        if ($selectedEndDate && new Date($selectedEndDate) < parsedDate) {
          selectedEndDate.set(null);
        }
      }
    } else {
      if ($selectedStartDate && new Date($selectedStartDate) > parsedDate) {
        selectedEndDate.set($selectedStartDate);
        selectedStartDate.set(date);
      } else {
        selectedEndDate.set(date);
      }
    }
  }
  $: if (selected && selected.id !== 0) {
    let days = Number(selected.text.split(" ")[1]);
    let endDate = new Date();
    let startDate = new Date();
    startDate.setDate(endDate.getDate() - days + 1);
    selectedStartDate.set(
      formatDate(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      )
    );
    selectedEndDate.set(
      formatDate(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
    );
  }
  function getPreviousMonthEndDays(month, year) {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = daysInMonth(prevMonth, prevYear);
    const firstDay = firstDayOfMonth(month, year);
    return Array.from({ length: firstDay }, (_, i) =>
      formatDate(prevYear, prevMonth, daysInPrevMonth - firstDay + i + 1)
    );
  }
  function getNextMonthStartDays(month, year, dayCount) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    return Array.from({ length: dayCount }, (_, i) =>
      formatDate(nextYear, nextMonth, i + 1)
    );
  }
  $: leadingBlanks1 = getPreviousMonthEndDays($currentMonth1, $currentYear1);
  $: daysArray1 = [
    ...leadingBlanks1,
    ...Array.from(
      { length: daysInMonth($currentMonth1, $currentYear1) },
      (_, i) => formatDate($currentYear1, $currentMonth1, i + 1)
    ),
    ...getNextMonthStartDays(
      $currentMonth1,
      $currentYear1,
      42 - (leadingBlanks1.length + daysInMonth($currentMonth1, $currentYear1))
    ),
  ];
  $: leadingBlanks2 = getPreviousMonthEndDays($currentMonth2, $currentYear2);
  $: daysArray2 = [
    ...leadingBlanks2,
    ...Array.from(
      { length: daysInMonth($currentMonth2, $currentYear2) },
      (_, i) => formatDate($currentYear2, $currentMonth2, i + 1)
    ),
    ...getNextMonthStartDays(
      $currentMonth2,
      $currentYear2,
      42 - (leadingBlanks2.length + daysInMonth($currentMonth2, $currentYear2))
    ),
  ];
</script>

<div class="relative max-w-4xl mx-auto max-sm:mx-2">
  <button
    class="w-full sm:w-1/2 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]"
    on:click={toggleDatePicker}
  >
    {#if $selectedStartDate && $selectedEndDate}
      {$selectedStartDate} to {$selectedEndDate}
    {:else}
      Select Date Range
    {/if}
    <span class="ml-auto">
      <img src={CalendarIcon} alt="Calendar Icon" />
    </span>
  </button>
  {#if $isDatePickerOpen}
    <div
      class="absolute top-12 w-full bg-white rounded-xl p-6 border border-[#EEE] shadow z-10"
    >
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <div class="flex items-center justify-between pb-2 pl-1">
            <button on:click={() => prevMonth(1)}>
              <img src={ArrowLeft} alt="Left Icon" />
            </button>
            <span class="text-[16px] font-[600] pb-0.5">
              {new Date($currentYear1, $currentMonth1).toLocaleString(
                "default",
                { month: "long" }
              )}
              {$currentYear1}
            </span>
            <div></div>
          </div>
          <div class="grid grid-cols-7 text-center text-sm leading-[18px]">
            {#each weeks as week}
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1 text-sm">
                {week}
              </div>
            {/each}
            {#each daysArray1 as day, index}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="p-2.5 {index < leadingBlanks1.length ||
                index >=
                  leadingBlanks1.length +
                    daysInMonth($currentMonth1, $currentYear1)
                  ? 'text-[#BDBDBD] cursor-default'
                  : 'cursor-pointer'} {$selectedStartDate === day
                  ? 'bg-[#0284fe] text-white rounded-[3px]'
                  : $selectedEndDate === day
                    ? 'bg-[#0284fe] text-white rounded-[3px]'
                    : isWithinRange(day, $selectedStartDate, $selectedEndDate)
                      ? 'bg-blue-300'
                      : 'hover:bg-blue-100'}"
                on:click={index < leadingBlanks1.length ||
                index >=
                  leadingBlanks1.length +
                    daysInMonth($currentMonth1, $currentYear1)
                  ? null
                  : () =>
                      selectDate(day, !$selectedStartDate || $selectedEndDate)}
              >
                {day.split("/")[1]}
              </div>
            {/each}
          </div>
        </div>
        <!-- Second Calendar (End Date) -->
        <div>
          <div class="flex items-center justify-between pb-2 pr-1.5">
            <div></div>
            <span class="text-[16px] font-[600] pb-0.5">
              {new Date($currentYear2, $currentMonth2).toLocaleString(
                "default",
                { month: "long" }
              )}
              {$currentYear2}
            </span>
            <button on:click={() => nextMonth(2)}>
              <img src={ArrowRight} alt="Right Icon" />
            </button>
          </div>
          <div class="grid grid-cols-7 text-center text-sm leading-[18px]">
            {#each weeks as week}
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1 font-bold text-sm">
                {week}
              </div>
            {/each}
            {#each daysArray2 as day, index}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="p-2.5 {index < leadingBlanks2.length ||
                index >=
                  leadingBlanks2.length +
                    daysInMonth($currentMonth2, $currentYear2)
                  ? 'text-[#BDBDBD] cursor-default'
                  : 'cursor-pointer'} {$selectedStartDate === day
                  ? 'bg-[#0284fe] text-white rounded-[3px]'
                  : $selectedEndDate === day
                    ? 'bg-[#0284fe] text-white rounded-[3px]'
                    : isWithinRange(day, $selectedStartDate, $selectedEndDate)
                      ? 'bg-blue-300'
                      : 'hover:bg-blue-100'}"
                on:click={index < leadingBlanks2.length ||
                index >=
                  leadingBlanks2.length +
                    daysInMonth($currentMonth2, $currentYear2)
                  ? null
                  : () =>
                      selectDate(day, !$selectedStartDate || $selectedEndDate)}
              >
                {day.split("/")[1]}
              </div>
            {/each}
          </div>
        </div>
        <!-- Apply and Cancel Buttons -->
        <div class="h-full w-full flex flex-1 flex-col">
          <div class="">
            <select
              class="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px] bg-[#F9FAFB]"
              bind:value={selected}
            >
              {#each options as option}
                <option
                  value={option}
                  disabled={option.id === 0}
                  selected={selected === option}
                >
                  {option.text}
                </option>
              {/each}
            </select>
            <div class="flex gap-3 mt-4">
              <div
                class="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]"
              >
                {#if $selectedStartDate}
                  {$selectedStartDate}
                {:else}
                  Start Date
                {/if}
              </div>
              <div
                class="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]"
              >
                {#if $selectedEndDate}
                  {$selectedEndDate}
                {:else}
                  End Date
                {/if}
              </div>
            </div>
            <div class="flex items-center py-4 w-full gap-2">
              <input
                type="checkbox"
                class="rounded border-2 border-black/70 bg-[#F9FAFB]"
              />
              <span class="text-sm">Compare</span>
            </div>
          </div>
          <div class="gap-1 flex justify-between items-end mt-auto w-full">
            <Button
              strokebtn
              size="full"
              on:click={() => {
                selectedStartDate.set(null);
                selectedEndDate.set(null);
                toggleDatePicker();
              }}>Cancel</Button
            >
            <Button size="full" on:click={() => toggleDatePicker()}
              >Apply</Button
            >
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .bg-blue-300 {
    background-color: #ebf5ff;
  }
</style>
