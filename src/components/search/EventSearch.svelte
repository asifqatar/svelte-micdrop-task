<script>
  import { createEventDispatcher } from "svelte";
  export let placeholder = "";
  let searchQuery = "";
  let options = [
    {
      id: 1,
      title: "Jetpack Comedy Show: Big Comics, Small Venue",
      name: "Jetpack Comedy",
      date: "Thu, Oct 24",
      time: "11:00PM",
      status: "Live",
    },
    {
      id: 2,
      title: "Jakarta vs. Everybody Showdown",
      name: "Jetpack Comedy",
      date: "Thu, Oct 24",
      time: "11:00PM",
      status: "Draft",
    },
    // Add more options as needed
  ];

  const dispatcher = createEventDispatcher();

  const selectOption = (option) => {
    dispatcher("select", option);
    searchQuery = "";
  };

  // Filter options based on the search query
  $: filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<div class="w-full my-3">
  <!-- <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.5156 24.4961L30.6429 30.6234"
      stroke="#666C79"
      stroke-width="2.45091"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.9153 15.6471C27.9153 8.87913 22.4289 3.39258 15.6608 3.39258C8.8928 3.39258 3.40625 8.87913 3.40625 15.6471C3.40625 22.4152 8.8928 27.9017 15.6608 27.9017C22.4289 27.9017 27.9153 22.4152 27.9153 15.6471Z"
      stroke="#666C79"
      stroke-width="2.45091"
      stroke-linejoin="round"
    />
  </svg> -->

  <input
    type="text"
    bind:value={searchQuery}
    {placeholder}
    class="w-full p-4 bg-gray-50 border border-gray-300 rounded-md outline-none"
  />

  {#if searchQuery}
    <ul class="dropdown-menu mt-2 rounded max-h-40 overflow-y-auto shadow-md">
      {#if filteredOptions.length > 0}
        {#each filteredOptions as option}
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li
            class="p-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
            on:click={() => selectOption(option)}
          >
            <div class="flex flex-col gap-1">
              <p class="text-sm font-medium">
                {option.title}<span class="text-green-500 text-sm ml-2"
                  >({option.status})</span
                >
              </p>
              <span class="text-sm text-gray-500">{option.name}</span>
              <p class="text-xs text-gray-500">{option.date} • {option.time}</p>
            </div>
            <span class="text-blue-500 text-sm ml-2">Select</span>
          </li>
        {/each}
      {:else}
        <li class="p-4 py-6 text-gray-500">
          Event not found. Please try another keyword and make sure the event is
          yours.
        </li>
      {/if}
    </ul>
  {/if}
</div>

<style>
  .dropdown-menu::-webkit-scrollbar {
    display: none;
  }
</style>
