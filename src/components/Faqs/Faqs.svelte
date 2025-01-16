<script>
  export let faqs = [];
</script>

<div class="w-full">
  {#each faqs as faq}
    <div class="mb-6">
      <div class="text-[16px] font-[400] text-[#252B37] mb-1">
        {faq.title}
      </div>

      <div class="text-[16px] font-[400] text-[#666C79]">
        {faq.description}
      </div>
    </div>
  {/each}
</div>
