<script>
    export let events;
  
    function getBarColor(percentage) {
      if (percentage >= 70) {
        return "bg-[#15A033]";
      } else if (percentage >= 30) {
        return "bg-[#FF922E]";
      }
      return "bg-[#F66]";
    }
  </script>
  
  {#each events as event}
    <div class="border-b p-4 space-y-4">
      <div class="text-sm font-medium text-[#111928] leading-[21px]">{event.show.name}</div>
      <div class="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p class="text-gray-500 text-xs font-semibold">Date</p>
          <p class="mt-2 text-sm text-gray-500 leading-[21px] font-normal">Sept 23</p>
        </div>
        <div>
          <p class="text-gray-500 text-xs font-semibold">Time</p>
          <p class="mt-2 text-sm text-gray-500 leading-[21px] font-normal">12:30PM PST</p>
        </div>
        <div>
          <p class="text-gray-500 text-xs font-semibold">Revenue</p>
          <p class="text-[#15A033] mt-2 text-sm leading-[21px] font-normal">{event.sale}</p>
        </div>
      </div>
  
      <div class="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p class="text-gray-500 text-xs font-semibold">Performers</p>
          <div class="flex -space-x-2 mt-2">
            {#each event.performers.slice(0, 2) as performer, i}
              <img
                src={performer.image || "/placeholder.svg"}
                alt={performer.name}
                class="w-6 h-6 rounded-full border-2 border-white"
                style="z-index: {event.performers.length - i}"
              />
            {/each}
            {#if event.performers.length > 3}
              <span
                class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs border-2 border-white"
              >
                +{event.performers.length - 3}
              </span>
            {/if}
          </div>
        </div>
        <div>
          <p class="text-gray-500 text-xs font-semibold">Tickets</p>
          <div class="mt-2">
            <p class="text-xs mb-1 text-[#666C79]">
              {event.seats.current}/{event.seats.sale}
            </p>
            <div class="w-full h-[7px] bg-gray-200 rounded-full">
              <div
                class={`h-[7px] rounded-[10px] ${getBarColor(
                  (event.seats.current/ event.seats.sale) * 100
                )}`}
                style="width: {(event.seats.current/ event.seats.sale) * 100}%"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-gray-500 text-xs font-semibold">In Cart</p>
          <p class="mt-2 text-sm text-gray-500 leading-[21px] font-normal">
            2 
          </p>
        </div>
      </div>
    </div>
  {/each}