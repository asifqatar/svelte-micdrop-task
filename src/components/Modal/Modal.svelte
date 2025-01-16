<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../Button/Button.svelte";
  import Cancel from "../../assets/svg/cancel.svg";

  export let show = false;
  export let title = "";
  export let description = "";
  export let warningText = "";
  export let actions = [];
  export let icon = null;
  export let closeBtn = false; // To show close button

  const dispatch = createEventDispatcher();

  const handleAction = (action) => {
    action.onClick();
    dispatch(action.label.toLowerCase());
    show = false;
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };
</script>

{#if show}
  <div
    class="fixed inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50"
    role="presentation"
    on:click={() => (show = false)}
  >
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="bg-white p-6 rounded-2xl modal-box text-center flex max-w-sm flex-col gap-6 w-full"
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
      {#if icon}
        <div class="flex justify-center items-center">
          <img src={icon} alt="Icon here" />
        </div>
      {/if}
      {#if title}
        <h2 class="text-xl text-Text-Primary leading-5 font-normal">{title}</h2>
      {/if}
      {#if description}
        <p class="text-Text-Tartiary text-sm leading-[22px] mx-4 font-normal">
          {description}
        </p>
      {/if}
      {#if warningText}
        <p
          class="text-accent-Danger text-center text-sm leading-[22px] font-bold"
        >
          {warningText}
        </p>
      {/if}
      <div class="flex justify-around gap-3">
        {#each actions as action}
          <Button
            size="full"
            {...action}
            beforeIcon={action.beforeIcon}
            afterIcon={action.afterIcon}
            on:click={() => handleAction(action)}
            danger={action.label === "Delete" ? true : false}
          >
            {action.label}
          </Button>
        {/each}
      </div>
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
</style>
