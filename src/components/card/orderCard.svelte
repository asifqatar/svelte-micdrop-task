<script>
    import { Accordion, AccordionItem } from "flowbite-svelte";

    export let data = [];

    let openIndex = 0; 
    const handleClick = (index) => {
        openIndex = openIndex === index ? -1 : index;
    };
</script>

<div class="w-ful pt-4">
    <div
        class="flex gap-10 text-gray-600 bg-gray-50 items-center py-4 px-2 uppercase border-b border-gray-100"
    >
        <h2 class="text-xs font-semibold text-gray-500">ORDER ID</h2>
        <h2 class="text-xs font-semibold text-gray-500">NO. OF TICKETS</h2>
        <h2 class="text-xs font-semibold text-gray-500">ORDER TOTAL</h2>
    </div>
    <Accordion flush class="divide-y divide-gray-200">
        {#each data as event, index}
            <div 
              on:click={() => handleClick(index)}
              on:keydown={(e) => e.key === 'Enter' && handleClick(index)}
              class="cursor-pointer"
              role="button"
              tabindex="0"
            >
                <AccordionItem
                    paddingFlush="py-5 {openIndex === index ? 'p-0' : ''} "
                    class="relative {openIndex === index
                        ? 'border-l-4 border-l-primary-400 border-b-0 group-first:rounded-none '
                        : ''}"
                    open={openIndex === index}
                >
                    <svelte:fragment slot="header">
                        <div
                            class="grid grid-cols-12 items-center p-2 w-full {openIndex ===
                            index
                                ? 'pt-5 pl-1'
                                : ''}"
                        >
                            <div
                                class="flex w-full text-gray-900 text-start text-sm font-medium col-span-4 text-nowrap"
                            >
                                {event.orderId}
                            </div>
                            <div
                                class="flex w-full text-start  text-gray-500  text-sm font-medium col-span-4 text-nowrap"
                            >
                                {event.no_tickets}
                            </div>
                            <div
                                class="flex w-full text-sm font-medium col-span-4 text-nowrap text-green-500 ml-6"
                            >
                                {event.orderTotal}
                            </div>
                        </div>
                    </svelte:fragment>
                    <div
                        class="p-2 shadow-sm bg-white border-l-4 border-l-primary-400 group-first:rounded-none"
                    >
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <p class="text-xs text-gray-500 font-semibold">
                                    Date of Purchase
                                </p>
                                <div class="flex flex-col w-full md:w-96">
                                    <p
                                        class="text-sm text-gray-500 font-normal break-words mt-1"
                                    >
                                        {event.date}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 font-semibold">
                                    Event
                                </p>
                                <p
                                    class="text-sm text-gray-500 font-normal break-words mt-1"
                                >
                                    {event.show.name}
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <p class="text-xs text-gray-500 font-semibold">
                                    Customer
                                </p>
                                <p
                                    class="text-sm text-gray-500 font-normal break-words mt-1"
                                >
                                    {event.customer}
                                </p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 font-semibold">
                                    Sales Channel
                                </p>
                                <div class="flex gap-2">
                                    <img src={event.channel.image} class="w-[20px] h-[20px]" alt="icon" />
                                    <p
                                        class="text-sm text-gray-500 font-normal break-words mt-1"
                                    >
                                        {event.channel.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionItem>
            </div>
        {/each}
    </Accordion>
</div>
