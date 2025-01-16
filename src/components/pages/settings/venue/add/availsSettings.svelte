<script>
  import Button from "@/components/Button/Button.svelte";
  import CustomDropdown from "@/components/CustomDropdown.svelte";
  import CustomModal from "@/components/Modal/CustomModal.svelte";
  import { Label, Checkbox, Textarea } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  import CustomMesageImage from "@/assets/images/avails_custom_message.png";
  import OnlyPerformCalender from "@/assets/images/only_performs.png";
  import EnableCalndar from "@/assets/images/enable_calendar.png";
  import MoreInfoIcon from "@/assets/svg/more-info.svg";
  import ErrorMessage from "@/components/Input/ErrorMessage.svelte";
  import { getDays, getDaysNumberOptions } from "@/utils/utils";

  const dispatch = createEventDispatcher();

  let selectedDaysNumber = null;
  let selectedDay = null;
  let selectedTimeOptions = null;
  let hasCustomEmail = false;
  let customMessagePopup = false;
  let onlyPerforms = false;
  let showEnableCalendarModal = false;
  let enabledCalendar = false;
  let noEnableCalendar = false;
  let canOpenEnableCalendar = localStorage.getItem("noEnableCalendar") || false;

  $: if (enabledCalendar && !canOpenEnableCalendar) {
    showEnableCalendarModal = true;
  } else {
    showEnableCalendarModal = false;
  }

  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here...",
  };

  const timeOptions = [
    { value: "weeks", label: "Weeks" },
    { value: "months", label: "Months" },
  ];

  let daysNumber = []; // Initialize with an empty array
  let dasys = []; // Initialize with an empty array

  // Update daysNumber when the time unit changes
  function onTimeUnitChange(selectedTime) {
    // selectedDay = "";
    // selectedDaysNumber = "";
    selectedTimeOptions = selectedTime;
    daysNumber = getDaysNumberOptions(selectedTime);
  }

  // Initialize with a default time unit (optional)
  $: daysNumber = getDaysNumberOptions(selectedTimeOptions);
  $: days = getDays(selectedTimeOptions);

  const sendRequest = (event) => {
    event.preventDefault();
    console.log("request sent");
    dispatch("send:avail-request", true);
  };

  function handleCheckboxChange() {
    if (noEnableCalendar)
      localStorage.setItem("noEnableCalendar", noEnableCalendar);
  }
</script>

<div>
  <div class="mb-6">
    <div class="flex mb-6">
      <Checkbox class="font-normal" bind:checked={enabledCalendar}
        >Enable the Availability Calendar and allow performers to update</Checkbox
      >
      <button
        class="ml-2 my-auto p-2"
        on:click|preventDefault={() =>
          // !canOpenEnableCalendar &&
          (showEnableCalendarModal = !showEnableCalendarModal)}
      >
        <img class="my-auto" src={MoreInfoIcon} alt="more-info" />
      </button>
    </div>

    <div class="flex ml-6 my-5 gap-2">
      <Button
        className="max-sm:text-xs block max-w-max"
        strokebtn
        on:click={sendRequest}
      >
        <svg
          class="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3191 0.824937C15.349 0.843401 15.3747 0.849054 15.3858 0.850276C15.3882 0.850545 15.3894 0.850572 15.3894 0.850593C15.3894 0.850672 15.3713 0.85066 15.3321 0.863697L15.3191 0.824937ZM15.3191 0.824937L15.2983 0.762442L15.3191 0.824937ZM1.50558 5.47826L15.1612 0.920715L11.2346 14.6796L8.87036 9.35225L13.2591 3.49307L12.5586 2.79351L6.68246 7.20634L1.50558 5.47826Z"
            fill="#0D1526"
            stroke="#0D1526"
          />
        </svg>

        Send avails request now</Button
      >
      <span class="text-xs font-light text-green-500 my-auto"
        >Last sent: 3/7/22 2:54PM PST</span
      >
    </div>
  </div>
  <div class="mb-6">
    <Checkbox class="font-normal"
      >Request that performers update their availability every</Checkbox
    >
    <div class="flex ml-6 my-5 gap-4">
      <CustomDropdown options={daysNumber} bind:selected={selectedDaysNumber} />
      <CustomDropdown
        options={timeOptions}
        bind:selected={selectedTimeOptions}
        on:select={(e) => onTimeUnitChange(e.detail.value)}
      />
      <span class="my-auto text-black text-xs">on</span>
      <CustomDropdown options={days} bind:selected={selectedDay} />
    </div>
  </div>
  <div class="flex mb-6">
    <Checkbox checked class="font-normal"
      >Only let performers mark availability on dates with events scheduled on
      them</Checkbox
    >
    <button
      class="ml-2 my-auto p-1"
      on:click|preventDefault={() => (onlyPerforms = !onlyPerforms)}
    >
      <img class="my-auto" src={MoreInfoIcon} alt="more-info" />
    </button>
  </div>

  <div class="mb-6">
    <Label for="description" class="flex mb-2">
      <Checkbox class="my-auto" bind:checked={hasCustomEmail}
        >Custom message in avails request emails</Checkbox
      >
      <button
        class="ml-2 my-auto p-1"
        on:click|preventDefault={() =>
          (customMessagePopup = !customMessagePopup)}
      >
        <img class="my-auto" src={MoreInfoIcon} alt="more-info" />
      </button>
    </Label>
    {#if hasCustomEmail}
      <Textarea {...textareaprops} />
      <!-- <ErrorMessage message={formErrors.inlcude_booking_emails} /> -->
    {/if}
  </div>

  <CustomModal
    show={customMessagePopup}
    closeBtn
    on:cancel={() => console.log("cancel")}
    on:confirm={() => console.log("confirm")}
  >
    <div class="my-2">
      <img src={CustomMesageImage} alt="custom-message-popup" />
    </div>
  </CustomModal>

  <CustomModal
    show={onlyPerforms}
    closeBtn
    on:cancel={() => console.log("cancel")}
    on:confirm={() => console.log("confirm")}
  >
    <div class="my-2">
      <img src={OnlyPerformCalender} alt="only-performs-calender" />
    </div>
  </CustomModal>
  <CustomModal
    show={showEnableCalendarModal}
    closeBtn
    on:cancel={() => console.log("cancel")}
    on:confirm={() => console.log("confirm")}
  >
    <div class="my-2 flex flex-col gap-2 justify-center items-center">
      <img src={EnableCalndar} alt="enable-calender" />
      {#if enabledCalendar}
        <Checkbox
          bind:checked={noEnableCalendar}
          class="font-normal"
          on:change={() => handleCheckboxChange()}
          >Don’t show this again</Checkbox
        >
      {/if}
      <Button
        className="w-full my-5"
        on:click={() => (showEnableCalendarModal = !showEnableCalendarModal)}
        >ok</Button
      >
    </div>
  </CustomModal>
</div>
