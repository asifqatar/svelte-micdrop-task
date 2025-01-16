<script>
  import SendMessage from "@/assets/svg/send-message.svg";
  import Button from "@/components/Button/Button.svelte";
  import { Label, Textarea } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here...",
  };
</script>

<div class="flex flex-col">
  <div class="w-full flex flex-col justify-center items-center">
    <svg
      class="my-5"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0623 4.07025C25.1583 0.942823 3.314 8.60394 3.33204 11.401C3.3525 14.5729 11.8628 15.5486 14.2216 16.2105C15.6402 16.6083 16.02 17.0163 16.3471 18.5038C17.8284 25.2403 18.5722 28.591 20.2672 28.6658C22.9691 28.7853 30.8964 7.12234 28.0623 4.07025Z"
        stroke="#0284FE"
        stroke-width="2"
      />
      <path
        d="M15.332 16.6667L19.9987 12"
        stroke="#0284FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <p class="text-xl text-center">
      Send request to all performers on <br /> avails list?
    </p>
    <span class="text-sm text-gray-600 font-normal my-4"
      >If you’d like to include a message, add it here:</span
    >
  </div>
  <div class="mb-6">
    <Label for="description" class="block mb-2"
      >Include custom message in booking emails</Label
    >
    <Textarea {...textareaprops} />
  </div>

  <div class="w-full flex justify-end p-3 gap-4">
    <Button strokebtn on:click={() => dispatch("close")}>Cancel</Button>
    <Button beforeIcon={SendMessage}>Share</Button>
  </div>
</div>
