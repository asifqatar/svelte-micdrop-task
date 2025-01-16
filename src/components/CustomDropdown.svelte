<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  // Props interface
  interface Option {
    label: string;
    value: string;
  }

  export let options: Option[] = [];
  export let selected: Option | null = null;
  export let placeholder: string = "Select";

  const dispatcher = createEventDispatcher();

  let isOpen = false;

  // Toggle dropdown
  const toggleDropdown = () => {
    isOpen = !isOpen;
  };

  // Select an option
  const selectOption = (option: Option) => {
    selected = option;
    dispatcher("select", option);
    isOpen = false; // Close dropdown after selection
  };

  // Close dropdown if clicked outside
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      event.target instanceof HTMLElement &&
      !event.target.closest(".dropdown")
    ) {
      isOpen = false;
    }
  };

  onMount(() => {
    if (window) {
      window.addEventListener("click", handleOutsideClick);
    }
  });

  const capitalise = (value) => {
    if (value.length > 1)
      return value.charAt(0).toUpperCase() + "" + value.slice(1);
    else return value;
  };
</script>

<div class="dropdown relative text-xs">
  <button
    class="btn flex px-2 lg:px-4 py-2 text-left bg-white text-black border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    on:click|preventDefault={toggleDropdown}
  >
    {#if selected}
      <span class="my-auto">
        {selected.label || capitalise(selected)}
      </span>
    {:else}
      <span class="my-auto ">
        {placeholder}
      </span>
    {/if}
    <!-- Dropdown icon -->
    <svg
      class="my-auto lg:ml-4"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 9C6.5 9 10.9189 15 12.5 15C14.0812 15 18.5 9 18.5 9"
        stroke="#0D1526"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>

  {#if isOpen}
    <div
      class="dropdown-menu flex flex-col absolute mt-1 bg-white border rounded-md shadow-lg z-10"
    >
      {#each options as option}
        <button
          class="w-full text-left px-4 py-2 cursor-pointer text-black hover:bg-gray-100"
          on:click|preventDefault={() => selectOption(option)}
        >
          {option.label}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* Optional styling for scrollable dropdowns */

  .dropdown-menu {
    width: fit-content;
    max-height: 200px;
    overflow-y: auto;
    font-size: 11px;
  }

  .dropdown-menu::-webkit-scrollbar {
    display: none;
  }
</style>
