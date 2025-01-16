<script>
  import Button from "@/components/Button/Button.svelte";
  import InputTag from "@/components/Input/InputTag.svelte";

  import { Checkbox } from "flowbite-svelte";
</script>

<div class="flex flex-col justify-center items-center">
  <svg
    class="my-5"
    width="28"
    height="30"
    viewBox="0 0 28 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.9987 1.66699V4.33366M5.9987 1.66699V4.33366M1.9987 9.66699H25.9987M1.33203 15.3246C1.33203 9.51491 1.33203 6.61003 3.00152 4.80518C4.67102 3.00033 7.35802 3.00033 12.732 3.00033H15.2654C20.6394 3.00033 23.3264 3.00033 24.9959 4.80518C26.6654 6.61003 26.6654 9.51491 26.6654 15.3246V16.0094C26.6654 21.8191 26.6654 24.7239 24.9959 26.5289C23.3264 28.3337 20.6394 28.3337 15.2654 28.3337H12.732C7.35802 28.3337 4.67102 28.3337 3.00152 26.5289C1.33203 24.7239 1.33203 21.8191 1.33203 16.0094V15.3246ZM14.805 15.0077L15.6262 16.6637C15.7382 16.8942 16.0368 17.1153 16.2887 17.1577L17.7772 17.407C18.7291 17.567 18.9531 18.2633 18.2672 18.9502L17.11 20.1169C16.914 20.3145 16.8067 20.6957 16.8674 20.9685L17.1987 22.4129C17.46 23.5561 16.858 23.9983 15.8548 23.4009L14.4596 22.5681C14.2076 22.4175 13.7924 22.4175 13.5358 22.5681L12.1406 23.4009C11.142 23.9983 10.5354 23.5514 10.7967 22.4129L11.128 20.9685C11.1887 20.6957 11.0813 20.3145 10.8854 20.1169L9.72815 18.9502C9.0469 18.2633 9.2662 17.567 10.2181 17.407L11.7066 17.1577C11.9539 17.1153 12.2526 16.8942 12.3646 16.6637L13.1858 15.0077C13.6338 14.109 14.3616 14.109 14.805 15.0077Z"
      stroke="#0D1526"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <p>Avails requests</p>
  <span class="text-xs text-gray-600 font-normal my-4"
    >If a performer’s profile page is marked</span
  >
  <Checkbox checked class="font-normal">Receive Avails Requests for</Checkbox>
  <!-- InputSelect component usage -->
  <div class="my-5">
    <InputTag />
  </div>
  <span class="w-[80%] text-center text-xs text-gray-600 font-light my-4"
    >they will receive reminders to update their avails whenever “Send avails
    request now” is clicked, or on the schedule you set below.</span
  >
  <Checkbox class="font-normal">Don’t show this again</Checkbox>
  <Button className="w-full my-5">ok</Button>
</div>
