<script>
  export let items = [];
  const removeItem = (id) => {
    items = items.filter((item) => item.id !== id);
  };
</script>

<div>
  {#each items as item, i}
    <div class="flex justify-between items-center mb-2">
      <div>
        <p class="font-semibold">#{i + 1} {item.title}</p>
        <p class="text-sm text-gray-500">{item.date} • {item.time}</p>
      </div>
      <button on:click={() => removeItem(item.id)} class="text-red-500 text-sm"
        >Remove</button
      >
    </div>
  {/each}
</div>
