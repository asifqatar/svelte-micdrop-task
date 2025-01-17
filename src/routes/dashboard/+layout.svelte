<script>
</script>

<div class="flex h-screen">
  <div class="bg-gray-600 w-[232px] h-full hidden lg:block" />
  <div class="flex-1 flex flex-col">
    <header class="h-[59px] bg-gray-400" />
    <main class="flex-1 lg:p-4 p-0 bg-gray-white overflow-auto">
      <slot />
    </main>
  </div>
</div>
