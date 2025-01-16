<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();

  let availableOptions = ["The Crow", "Jetpack", "Rocket", "Falcon", "Eagle"];
  let selectedOptions = ["Jetpack"];
  let inputValue = "";
  let filteredOptions = [];

  const removeOption = (option) => {
    selectedOptions = selectedOptions.filter((item) => item !== option);
  };

  const addOption = (option) => {
    if (!selectedOptions.includes(option)) {
      selectedOptions = [...selectedOptions, option];
      inputValue = "";
      filteredOptions = [];
    }
  };

  const handleInput = (event) => {
    inputValue = event.target.value;
    filteredOptions = availableOptions.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      addOption(inputValue);
    }
  };
</script>

<div
  class="flex items-center flex-wrap gap-2 bg-[#F7F7F8] border border-gray-300 rounded-xl p-2 ring-1 ring-gray-400"
>
  <!-- Selected tags -->
  {#each selectedOptions as option}
    <div
      class="bg-white flex items-center px-2 py-1 rounded-md border-2 border-gray-300"
    >
      <span class="mr-2">{option}</span>
      <button
        class="text-gray-500 hover:text-gray-700 focus:outline-none"
        on:click={() => removeOption(option)}
      >
        ✕
      </button>
    </div>
  {/each}

  <!-- Input field -->
  <input
    class="bg-[#F7F7F8] border-none focus:ring-0 outline-none p-2 flex-grow"
    type="text"
    bind:value={inputValue}
    placeholder="Search or add..."
    on:input={handleInput}
    on:keydown={handleKeyDown}
  />
</div>

<!-- Autocomplete dropdown -->
{#if filteredOptions.length > 0}
  <ul
    class="dropdown-menu border border-gray-300 rounded-lg mt-2 max-h-40 overflow-y-auto"
  >
    {#each filteredOptions as option}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li
        class="p-2 hover:bg-gray-100 cursor-pointer"
        on:click={() => addOption(option)}
      >
        {option}
      </li>
    {/each}
  </ul>
{/if}

<style>
  input::placeholder {
    color: #a0aec0; /* Tailwind's gray-400 */
  }

  /* Optional styling for scrollable dropdowns */

  .dropdown-menu::-webkit-scrollbar {
    display: none;
  }
</style>
