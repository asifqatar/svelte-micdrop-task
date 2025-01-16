<script>
  import { writable } from "svelte/store";
  import Button from "./../Button/Button.svelte";

  import CalendarIcon from "./../../assets/icons/calendar-month.svg";
  import ArrowLeft from "./../../assets/icons/arrow-left.svg";
  import ArrowRight from "./../../assets/icons/arrow-right.svg";

  let selectedDate = writable("");
  let selectedHour = writable("01");
  let selectedMinute = writable("00");
  let selectedMeridiem = writable("AM");

  let hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  let isDatePickerOpen = writable(false);

  let currentMonth = writable(new Date().getMonth());
  let currentYear = writable(new Date().getFullYear());

  function toggleDatePicker() {
    isDatePickerOpen.update((state) => !state);
  }
  function selectDate(date) {
    if (date === "Today") {
      const now = new Date();
      const formattedDate = `${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}/${now.getFullYear()}`;
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const meridiem = now.getHours() >= 12 ? "PM" : "AM";

      selectedDate.set(formattedDate);
      selectedHour.set(hours);
      selectedMinute.set(minutes);
      selectedMeridiem.set(meridiem);

      currentMonth.set(now.getMonth());
      currentYear.set(now.getFullYear());
    } else {
      selectedDate.set(date);
    }
    toggleDatePicker();
  }

  function selectHour(hour) {
    selectedHour.set(hour);
  }

  function selectMinute(minute) {
    selectedMinute.set(minute);
  }

  function selectMeridiem(meridiem) {
    selectedMeridiem.set(meridiem);
  }

  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  function firstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }

  function prevMonth() {
    currentMonth.update((month) => {
      if (month === 0) {
        currentYear.update((year) => year - 1);
        return 11;
      }
      return month - 1;
    });
  }

  function nextMonth() {
    currentMonth.update((month) => {
      if (month === 11) {
        currentYear.update((year) => year + 1);
        return 0;
      }
      return month + 1;
    });
  }

  $: daysArray = Array.from(
    { length: daysInMonth($currentMonth, $currentYear) },
    (_, i) => i + 1
  );
  $: leadingBlanks = Array(firstDayOfMonth($currentMonth, $currentYear)).fill(
    null
  );
</script>

<div class="relative max-w-md mx-auto">
  <button
    class="w-72 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 py-3 flex items-center text-[#6B7280] text-sm leading-[17.5px]"
    on:click={toggleDatePicker}
  >
    {#if $selectedDate !== ""}
      {$selectedDate}, {$selectedHour}:{$selectedMinute} {$selectedMeridiem}
    {:else}
      Select date and time
    {/if}
    <span class="ml-auto">
      <img src={CalendarIcon} alt="Calendar Icon here" />
    </span>
  </button>

  {#if $isDatePickerOpen}
    <div
      class="absolute top-12 w-full bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10"
    >
      <div class="flex justify-between items-center">
        <div>
          <div>
            <div class="flex items-center justify-between px-1 pb-2">
              <button on:click={prevMonth}>
                <img src={ArrowLeft} alt="Left Icon here" />
              </button>
              <span class="text-gray-900 text-[12px] font-bold leading-[18px]">
                {new Date($currentYear, $currentMonth).toLocaleString(
                  "default",
                  {
                    month: "long",
                  }
                )}{" "}
                {$currentYear}
              </span>
              <button on:click={nextMonth}>
                <img src={ArrowRight} alt="Right icon here" />
              </button>
            </div>

            <div
              class="grid grid-cols-7 gap-1 text-center text-sm leading-[18px] font-semibold text-gray-900"
            >
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1">Sun</div>
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1">Mon</div>
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1">Tue</div>
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1">Wed</div>
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1">Thu</div>
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1">Fri</div>
              <div class="text-[#6B7280] mt-2 mb-2 ml-1 mr-1">Sat</div>

              {#each leadingBlanks as _}
                <div></div>
              {/each}

              {#each daysArray as day}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                  class="cursor-pointer p-2 rounded-lg {$selectedDate ===
                  `${String($currentMonth + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${$currentYear}`
                    ? 'bg-[#0284fe] text-white'
                    : 'hover:bg-blue-100'}"
                  on:click={() =>
                    selectDate(
                      `${String($currentMonth + 1).padStart(2, "0")}/${String(
                        day
                      ).padStart(2, "0")}/${$currentYear}`
                    )}
                >
                  {day}
                </div>
              {/each}
            </div>
          </div>
          <div class="gap-1 flex justify-between items-end mt-4">
            <Button size="full" on:click={() => selectDate("Today")}>
              Today
            </Button>
            <Button
              strokebtn
              size="full"
              on:click={() => {
                selectedDate.set("");
                toggleDatePicker();
              }}
            >
              Clear
            </Button>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 ml-4 -translate-y-0.5">
          <div
            class="overflow-auto h-full text-[12px] text-center leading-[18px] font-medium"
          >
            <!-- Hour Picker -->
            {#each hours as hour}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="cursor-pointer p-2 rounded-lg {$selectedHour === hour
                  ? 'bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center'
                  : 'hover:bg-blue-100'}"
                on:click={() => selectHour(hour)}
              >
                {hour}
              </div>
            {/each}
          </div>

          <div
            class="space-y-2 text-[12px] text-center leading-[18px] font-medium"
          >
            <!-- Minute Picker -->
            {#each ["00", "15", "30", "45"] as minute}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="cursor-pointer p-2 rounded-lg {$selectedMinute === minute
                  ? 'bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center'
                  : 'hover:bg-blue-100'}"
                on:click={() => selectMinute(minute)}
              >
                {minute}
              </div>
            {/each}
          </div>

          <div
            class="space-y-2 text-[12px] text-center leading-[18px] font-medium"
          >
            {#each ["AM", "PM"] as meridiem}
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div
                class="cursor-pointer p-2 rounded-lg {$selectedMeridiem ===
                meridiem
                  ? 'bg-[#0284fe] text-white text-[12px] font-bold leading-[18px] text-center'
                  : 'hover:bg-blue-100'}"
                on:click={() => selectMeridiem(meridiem)}
              >
                {meridiem}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .overflow-auto {
    overflow-y: auto;
    max-height: 250px;
  }
  .overflow-auto::-webkit-scrollbar {
    width: 0px;
  }
</style>
