<script lang="ts">
  import { Button } from 'flowbite-svelte'
  import { createEventDispatcher } from 'svelte'

  export let isPaginated: boolean
  export let currentPage: number = 1
  export let totalPages: number
  export let pageSize: number = 10

  const dispatch = createEventDispatcher()

  // Trigger event to notify parent about page change
  function changePage(newPage: number) {
    if (newPage >= 1 && newPage <= totalPages) {
      currentPage = newPage
      const offset = (currentPage - 1) * pageSize
      dispatch('pageChange', { currentPage, offset, pageSize })
    }
  }

  function nextPage() {
    changePage(currentPage + 1)
  }

  function previousPage() {
    changePage(currentPage - 1)
  }
</script>

{#if isPaginated}
  <div class="flex gap-4 justify-end mt-2">
    <Button
      color="alternative"
      on:click={previousPage}
      disabled={currentPage === 1}
    >
      Previous
    </Button>
    <span
      class="w-[40px] py-2 center items-center align-middle text-center bg-black font-bold rounded-lg cursor-pointer"
    >
      {currentPage}
    </span>
    <Button
      color="dark"
      on:click={nextPage}
      disabled={currentPage === totalPages}
    >
      Next
    </Button>
  </div>
{/if}
