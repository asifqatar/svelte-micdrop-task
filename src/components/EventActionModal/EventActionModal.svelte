<script>
  import { createEventDispatcher } from 'svelte';
  import Button from "./../Button/Button.svelte";

  export let show = false;
  export let fromDateTime = "";
  export let toDateTime = "";
  export let onReschedule = () => {};
  export let onManage = () => {};
  export let onDelete = () => {};

  const dispatch = createEventDispatcher();

  const handleReschedule = () => {
    show = false;
    onReschedule();
    dispatch('reschedule');
  };

  const handleManage = () => {
    show = false;
    onManage();
    dispatch('manage');
  };

  const handleDelete = () => {
    show = false;
    onDelete();
    dispatch('delete');
  };
</script>

{#if show}
  <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div class="bg-white p-4 rounded-2xl modal-box w-full flex justify-start flex-col gap-3 max-w-80">
      <div>
        <p class="text-[10px] font-normal leading-[14px] text-Text-Tartiary">From</p>
        <p class="text-base font-normal not-italic leading-4 text-Text-Primary mt-2">{fromDateTime}</p>
      </div>
      <div>
        <p class="text-[10px] font-normal leading-[14px] text-Text-Tartiary">To</p>
        <p class="text-base font-normal not-italic leading-4 text-Text-Primary mt-2">{toDateTime}</p>
      </div>
      <div class="border-t bg-stroke-Primary"></div>
      <div class="flex justify-around gap-3">
        <Button strokebtn size="full" on:click={handleReschedule}>Reschedule</Button>
        <Button strokebtn size="full" on:click={handleManage}>Manage</Button>
        <Button danger size="full" strokebtn on:click={handleDelete}>Delete</Button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-box {
    box-shadow: 0px 152px 43px 0px rgba(79, 79, 79, 0), 0px 97px 39px 0px rgba(79, 79, 79, 0.01),
                0px 55px 33px 0px rgba(79, 79, 79, 0.05), 0px 24px 24px 0px rgba(79, 79, 79, 0.09),
                0px 6px 13px 0px rgba(79, 79, 79, 0.1);
  }
</style>