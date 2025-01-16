<script>
  import LoadingIcon from "./../..//assets/svg/loading-03.svg";
  export let show = false;
  export let className = "";

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
</script>

{#if show}
  <div
    class={classNames(
      "fixed inset-0 flex items-center justify-center  bg-gray-900 bg-opacity-50 z-50 ",
      className
    )}
  >
    <div
      class="bg-white p-6 rounded-2xl modal-box flex flex-col gap-6 w-full max-w-md"
    >
      <h1 class="text-xl text-left font-normal leading-5 text-Text-Primary">
        Please wait..
      </h1>
      <p class="text-Text-Secondary text-sm font-normal leading-[14px]">Checking database</p>
      <div class="flex justify-center items-center">
        <button class=" flex gap-1 cursor-progress items-center px-2 rounded-md py-1 bg-[rgba(56,160,255,0.15)]">
          <img src={LoadingIcon} alt="" class="icon text-accent-Infoblue" />
          <span class="text-accent-Infoblue text-sm font-semibold leading-3 not-italic">checking</span>
        </button>
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
