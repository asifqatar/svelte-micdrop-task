<!-- src/components/ErrorMessage.svelte -->
<script>
  export let message = ""; // Accept the error message as a prop
</script>

{#if message}
  <span class="text-xs text-red-500">{message}</span>
{/if}
