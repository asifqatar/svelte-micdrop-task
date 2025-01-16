<script>
  export let items = [];

  function scrollToSection(tabId) {
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<div
  class="flex justify-start sm:justify-center gap-6 sm:gap-8 border-b border-b-[#E5E7EB]"
>
  {#each items as item}
    <div>
      <button
        on:click={() => scrollToSection(item.id)}
        class="w-full py-2 px-1 text-sm sm:text-[16px] text-center font-medium focus:outline-none"
      >
        {item.label}
      </button>
    </div>
  {/each}
</div>
