<script>
  import { cn } from './../../utils/utils'

  export let style = ''
  export let placeholder = 'Search...'
  export let searchQuery
</script>

<!-- {#if isSearchable} -->
<div class="w-full my-5 text-white">
  <input
    class={cn(
      `text-black border-slate-100 outline-none focus:outline-none focus:ring-0`,
      style,
    )}
    type="text"
    bind:value={$searchQuery}
    {placeholder}
  />
</div>
