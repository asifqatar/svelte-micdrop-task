<script>
  import { Checkbox } from "flowbite-svelte";
  import Badge from "@/components/Badges/Badge.svelte";
  import Button from "@/components/Button/Button.svelte";
  import Card from "@/components/Card.svelte";
  import crossIcon from "@/assets/icons/cross.svg";
  //   import NextIcon from "@/assets/icons/next-icon.svg";
  import CustomDropdown from "@/components/CustomDropdown.svelte";

  let selectedDaysNumber = null;

  //   console.log(
  //     Array(5).fill(["The best comedy club", "Comedy of the year", "New Shows"])
  //   );
</script>

<Card>
  <div class="flex justify-between">
    <p class="text-xl">Upload CSV</p>

    <!-- <Button className="my-auto px-6" afterIcon={NextIcon}>Next</Button> -->
    <Button className="my-auto px-6">Next</Button>
  </div>
  <p class="w-3/4 text-sm text-gray-500 my-4">
    Its important for your deliverability that everyone you send to has given
    you explicit permission to email them. Pleased <a
      href="#"
      class="text-blue-500 font-medium">read our policy</a
    > for more details
  </p>

  <div class="flex justify-between my-5">
    <div
      class="max-w-sm flex bg-orange-100 ring-1 ring-orange-400 p-4 rounded-lg"
    >
      <svg
        class="mr-3 my-auto"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0820312 9.9987C0.0820312 4.52187 4.52187 0.0820312 9.9987 0.0820312C15.4755 0.0820312 19.9154 4.52187 19.9154 9.9987C19.9154 15.4755 15.4755 19.9154 9.9987 19.9154C4.52187 19.9154 0.0820312 15.4755 0.0820312 9.9987ZM9.9987 1.58203C5.3503 1.58203 1.58203 5.3503 1.58203 9.9987C1.58203 14.6471 5.3503 18.4154 9.9987 18.4154C14.647 18.4154 18.4154 14.647 18.4154 9.9987C18.4154 5.3503 14.6471 1.58203 9.9987 1.58203ZM10.1432 8.35549C10.3511 8.38344 10.6234 8.45619 10.8531 8.6859C11.0828 8.91558 11.1556 9.18777 11.1836 9.39581C11.2072 9.57179 11.2071 9.77911 11.207 9.96568V9.96571L11.207 9.9987V14.582C11.207 14.9962 10.8712 15.332 10.457 15.332C10.0428 15.332 9.70703 14.9962 9.70703 14.582V9.9987C9.70703 9.93548 9.70702 9.88092 9.70667 9.8324C9.65814 9.83205 9.60358 9.83203 9.54037 9.83203C9.12615 9.83203 8.79037 9.49624 8.79037 9.08203C8.79037 8.66782 9.12615 8.33203 9.54037 8.33203L9.57335 8.33202H9.57337C9.75996 8.33194 9.96725 8.33184 10.1432 8.35549ZM10.2279 4.41536C9.67558 4.41536 9.22787 4.86308 9.22787 5.41536C9.22787 5.96765 9.67558 6.41536 10.2279 6.41536H10.2361C10.7884 6.41536 11.2361 5.96765 11.2361 5.41536C11.2361 4.86308 10.7884 4.41536 10.2361 4.41536H10.2279Z"
          fill="black"
        />
      </svg>

      <span class="my-auto font-normal">13 unmapped fields detected</span>
    </div>

    <Button strokebtn className="my-auto">Skip unmapped</Button>
  </div>

  <div class="flex flex-col border ring-1 ring-gray-200 rounded-lg">
    <div class="flex justify-between px-4 py-3 bg-gray-50">
      <div class="flex flex-col my-auto">
        <span class="text-lg font-light">Name</span>
        <Badge
          className="block my-3"
          size="large"
          status="danger"
          icon={crossIcon}>Unmapped</Badge
        >
      </div>
      <div class="flex gap-4 my-auto">
        <Checkbox class="font-light text-md">Skip column</Checkbox>
        <div class="flex flex-col">
          <span class="my-2 tex-sm">Field mapped to:</span>
          <CustomDropdown
            options={[]}
            bind:selected={selectedDaysNumber}
            placeholder="Select a field"
          />
        </div>
      </div>
    </div>
    {#each Array(5).fill(5) as arr}
      <span
        class="p-4 border-b text-sm text-gray-500 font-light hover:bg-gray-50"
        >The best comdey club</span
      >
    {/each}
    <span class="p-4 text-sm text-blue-500 font-medium">Show All</span>
  </div>

  <div class="flex flex-col border ring-1 ring-gray-200 rounded-lg mt-5">
    <div class="flex justify-between px-4 py-3 bg-gray-50">
      <div class="flex flex-col my-auto">
        <span class="text-lg font-light">Website</span>
        <Badge
          className="block my-3"
          size="large"
          status="danger"
          icon={crossIcon}>Unmapped</Badge
        >
      </div>
      <div class="flex gap-4 my-auto">
        <Checkbox class="font-light text-md">Skip column</Checkbox>
        <div class="flex flex-col">
          <span class="my-2 tex-sm">Field mapped to:</span>
          <CustomDropdown
            options={[]}
            bind:selected={selectedDaysNumber}
            placeholder="Select a field"
          />
        </div>
      </div>
    </div>
    {#each Array(5).fill(5) as arr}
      <span
        class="p-4 border-b text-sm text-gray-500 font-light hover:bg-gray-50"
        >The best comdey club</span
      >
    {/each}
    <span class="p-4 text-sm text-blue-500 font-medium">Show All</span>
  </div>
</Card>
