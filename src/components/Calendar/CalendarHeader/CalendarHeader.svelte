<script>
  import { writable } from "svelte/store";
  import { page } from "$app/stores";
  import LeftArrow from "../../../assets/svg/arrow-Left-01.svg";
  import RightArrow from "../../../assets/svg/arrow-right-01.svg";
  import CaretDown from "carbon-icons-svelte/lib/CaretDown.svelte";
  import { goto } from "$app/navigation";

  let isDatePickerOpen = writable(false);
  let selectedOption = writable("Schedule");

  function toggleDatePicker() {
    isDatePickerOpen.update((state) => !state);
  }

  function selectOption(option) {
    goto(option.href).then(() => {
      selectedOption.set(option.text);
      closeDatePicker();
    });
  }

  function closeDatePicker() {
    isDatePickerOpen.set(false);
  }

  let currentDate = new Date().toISOString().split("T")[0];
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().toISOString().slice(0, 7);
  let currentQuarterNumber = Math.ceil((new Date().getMonth() + 1) / 3);
  let currentQuarter = `${currentYear}-q${currentQuarterNumber}`;

  let options = [
    { id: 0, text: "Day", href: `/daily/${currentDate}` },
    { id: 1, text: "Week", href: `/weekly/${currentDate}` },
    { id: 2, text: "Quarter", href: `/quarter/${currentQuarter}` },
    { id: 3, text: "Month", href: `/monthly/${currentMonth}` },
    { id: 4, text: "Year", href: `/yearly/${currentDate}` },
  ];

  $: {
    const path = $page.url.pathname;

    if (path.includes("/daily")) {
      selectedOption.set("Day");
    } else if (path.includes("/weekly")) {
      selectedOption.set("Week");
    } else if (path.includes("/monthly")) {
      selectedOption.set("Month");
    } else if (path.includes("/quarter")) {
      selectedOption.set("Quarter");
    } else if (path.includes("/yearly")) {
      selectedOption.set("Year");
    } else {
      selectedOption.set("Schedule");
    }
  }

  const handleNext = () => {
    const path = $page.url.pathname;
    if (path.includes("/yearly")) {
      let year = parseInt($page.params.yearly.split("-")[0]);
      year += 1;
      let date =
        $page.params.yearly.split("-")[1] +
        "-" +
        $page.params.yearly.split("-")[2];
      let newPath = `${year}-${date}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/monthly")) {
      let [year, month] = $page.params.month.split("-");
      year = parseInt(year);
      month = parseInt(month);
      month += 1;
      if (month > 12) {
        month = 1;
        year += 1;
      }
      const newMonth = month.toString().padStart(2, "0");
      let newPath = `/monthly/${year}-${newMonth}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/weekly")) {
      const date = new Date($page.params.date);
      date.setDate(date.getDate() + 7);
      const newDate = date.toISOString().split("T")[0];
      let newPath = `/weekly/${newDate}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/daily")) {
      const date = new Date($page.params.date);
      date.setDate(date.getDate() + 1);
      const newDate = date.toISOString().split("T")[0];
      let newPath = `/daily/${newDate}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/quarter")) {
      let [year, quarter] = $page.params.quarter.split("-");
      year = parseInt(year);
      quarter = parseInt(quarter.replace("q", ""));
      quarter += 1;
      if (quarter > 4) {
        quarter = 1;
        year += 1;
      }
      let newPath = `/quarter/${year}-q${quarter}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else {
      console.log("Not implemented");
    }
  };

  const handlePrev = () => {
    const path = $page.url.pathname;
    if (path.includes("/yearly")) {
      let year = parseInt($page.params.yearly.split("-")[0]);
      year -= 1;
      let date =
        $page.params.yearly.split("-")[1] +
        "-" +
        $page.params.yearly.split("-")[2];
      let newPath = `${year}-${date}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/monthly")) {
      let [year, month] = $page.params.month.split("-");
      year = parseInt(year);
      month = parseInt(month);
      month -= 1;
      if (month < 1) {
        month = 12;
        year -= 1;
      }
      const newMonth = month.toString().padStart(2, "0");
      let newPath = `/monthly/${year}-${newMonth}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/weekly")) {
      const date = new Date($page.params.date);
      date.setDate(date.getDate() - 7);
      const newDate = date.toISOString().split("T")[0];
      let newPath = `/weekly/${newDate}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/daily")) {
      const date = new Date($page.params.date);
      date.setDate(date.getDate() - 1);
      const newDate = date.toISOString().split("T")[0];
      let newPath = `/daily/${newDate}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else if (path.includes("/quarter")) {
      let [year, quarter] = $page.params.quarter.split("-");
      year = parseInt(year);
      quarter = parseInt(quarter.replace("q", ""));
      quarter -= 1;
      if (quarter < 1) {
        quarter = 4;
        year -= 1;
      }
      let newPath = `/quarter/${year}-q${quarter}`;
      goto(newPath).then(() => {
        location.reload();
      });
    } else {
      console.log("Not implemented");
    }
  };

  let nowDate;

  $: {
    const path = $page.url.pathname;

    if (path.includes("/yearly")) {
      nowDate = $page.params.yearly
        ? $page.params.yearly.split("-")[0]
        : currentYear.toString();
    } else if (path.includes("/monthly")) {
      const month = $page.params.month;
      if (month) {
        const [year, monthNumber] = month.split("-");
        const monthName = new Date(`${year}-${monthNumber}-01`).toLocaleString(
          "default",
          { month: "long" }
        );
        nowDate = `${year} ${monthName}`;
      } else {
        nowDate = `${new Date().toLocaleString("default", { month: "long" })} ${currentYear}`;
      }
    } else if (path.includes("/weekly")) {
      const date = $page.params.date;
      if (date) {
        const dateObj = new Date(date);
        const monthName = dateObj.toLocaleString("default", { month: "long" });
        const year = dateObj.getFullYear();
        nowDate = `${monthName} ${year}`;
      } else {
        nowDate = `${new Date().toLocaleString("default", { month: "long" })} ${currentYear}`;
      }
    } else if (path.includes("/daily")) {
      const date = $page.params.date;
      if (date) {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const monthName = dateObj.toLocaleString("default", { month: "long" });
        const year = dateObj.getFullYear();
        nowDate = `${day} ${monthName} ${year}`;
      } else {
        nowDate = `${new Date().toLocaleString("default", { month: "long" })} ${currentYear}`;
      }
    } else if (path.includes("/quarter")) {
      let params = $page.params.quarter;
      let year;
      let quarter;
      if (params) {
        [year, quarter] = params.split("-");
        if (!year) {
          year = currentYear.toString();
        }
      } else {
        year = currentYear.toString();
      }
      nowDate = quarter ? `${year}` : year;
    } else {
      nowDate = `${new Date().toLocaleString("default", { month: "long" })} ${currentYear}`;
    }
  }
</script>

<header class="h-16 flex items-center w-full border-b border-stroke-Primary">
  <nav class="w-[1200px] mx-auto flex items-center justify-between">
    <div class="flex items-center gap-5 h-full">
      <button
        class="border cursor-pointer outline-none border-stroke-Primary rounded-full p-3"
        on:click={handlePrev}
      >
        <img class="w-5 h-5" src={LeftArrow} alt="&lt" />
      </button>
    </div>
    <h2
      class="text-[#0D1526] pb-5 pt-5 text-center text-xl leading-[20px] font-normal"
    >
      {nowDate}
    </h2>
    <div class="flex items-center justify-center gap-1.5">
      <div class="relative">
        <button
          class="w-auto border-[1px] border-stroke-Primary rounded pl-4 pr-3 py-3 flex items-center text-black/70 focus:bg-gray-100 text-sm leading-[17.5px]"
          on:click={toggleDatePicker}
        >
          {$selectedOption}
          <CaretDown class="ml-2" />
        </button>
        {#if $isDatePickerOpen}
          <div
            class="absolute top-12 w-[250px] bg-white rounded shadower border shadow-3xl z-10 py-2"
          >
            {#each options as option}
              <div class="flex w-full">
                <a
                  href={option.href.toLowerCase()}
                  class="py-2 px-4 hover:bg-gray-100 cursor-pointer text-sm w-full hover:no-underline text-black/70 bg-white flex justify-between items-center"
                  on:click={() => selectOption(option)}
                >
                  <span>
                    {option.text}
                  </span>
                  <span class="text-xs">
                    {option.text.charAt(0)}
                  </span>
                </a>
              </div>
            {/each}
          </div>
        {/if}
      </div>
      <button
        class="border cursor-pointer outline-none border-stroke-Primary rounded-full p-3"
        on:click={handleNext}
      >
        <img class="w-5 h-5" src={RightArrow} alt="&gt" />
      </button>
    </div>
  </nav>
</header>

<style>
  .shadower {
    box-shadow:
      0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12);
  }
</style>
