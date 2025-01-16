<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../Button/Button.svelte";
  import Cancel from "../../assets/svg/cancel.svg";
  import { cn } from "@/utils/utils";

  export let contentClass = "";
  export let show = false;
  // export let title = "";
  // export let description = "";
  // export let warningText = "";
  // export let actions = [];
  // export let icon = null;
  export let closeBtn = false; // To show close button
  export let size = "md"; // Define the size prop with a default value of 'md'

  const dispatch = createEventDispatcher();

  const handleAction = (action) => {
    action.onClick();
    dispatch(action.label.toLowerCase());
    show = false;
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  // Function to return appropriate width class based on size prop
  const getSizeClass = () => {
    switch (size) {
      case "xs":
        return "max-w-xs"; // extra small
      case "sm":
        return "max-w-sm"; // small
      case "md":
        return "max-w-md"; // medium
      case "lg":
        return "max-w-lg"; // large
      case "xl":
        return "max-w-xl"; // extra large
      case "full":
        return "max-w-large"; // extra large
      default:
        return "max-w-md"; // default to medium
    }
  };
</script>

{#if show}
  <div
    class="fixed overflow-hidden inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50"
    role="presentation"
    on:click={() => (show = false)}
  >
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class={cn(`modal-content modal-box`, getSizeClass(), contentClass)}
      role="dialog"
      on:click={stopPropagation}
    >
      {#if closeBtn}
        <div class="flex justify-end">
          <button class="focus:outline-none" on:click={() => (show = false)}>
            <img src={Cancel} alt="Close Icon" />
          </button>
        </div>
      {/if}

      <slot />
    </div>
  </div>
{/if}

<style>
  .modal-box {
    box-shadow:
      0px 152px 43px 0px rgba(79, 79, 79, 0),
      0px 97px 39px 0px rgba(79, 79, 79, 0.01),
      0px 55px 33px 0px rgba(79, 79, 79, 0.05),
      0px 24px 24px 0px rgba(79, 79, 79, 0.09),
      0px 6px 13px 0px rgba(79, 79, 79, 0.1);
  }

  .modal-content {
    background: white;
    max-width: 100%;
    max-height: 90vh;
    overflow-y: scroll;
    padding: 2rem;
    border-radius: 0.5rem;
  }

  .modal-content::-webkit-scrollbar {
    display: none;
  }

  /* Tailwind utility classes for max-width */
  .max-w-xs {
    width: 20rem; /* 320px */
  }

  .max-w-sm {
    width: 24rem; /* 384px */
  }

  .max-w-md {
    width: 28rem; /* 448px */
  }

  .max-w-lg {
    width: 32rem; /* 512px */
  }

  .max-w-xl {
    width: 36rem; /* 576px */
  }
  .max-w-large {
    width: 80rem; /* 576px */
  }
</style>
