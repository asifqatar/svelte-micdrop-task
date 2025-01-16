<script>
  import Button from "@/components/Button/Button.svelte";
  import { Toggle } from "flowbite-svelte";
  import { z } from "zod";
  import { writable } from "svelte/store";

  const notificationSchema = z.object({
    performerNotifications: z.object({
      confirms: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      declines: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      cancels: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      sendMessages: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      allConfirmed: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
    }),
    eventNotifications: z.object({
      orderCompleted: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      sectionSoldOut: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      eventAlmostSoldOut: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      eventGoesPublic: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      allPerformersConfirmed: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      soldOut: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
      lowTicketSales: z.object({
        email: z.boolean(),
        sms: z.boolean(),
      }),
    }),
  });

  let performerNotifications = writable({
    confirms: { label: "Confirms", email: true, sms: false },
    declines: { label: "Declines", email: true, sms: true },
    cancels: { label: "Cancels", email: false, sms: true },
    sendMessages: { label: "Send messages", email: false, sms: false },
    allConfirmed: { label: "Leaves a roster", email: true, sms: false },
  });

  let eventNotifications = writable({
    orderCompleted: { label: "Order completed", email: false, sms: true },
    sectionSoldOut: { label: "Section sold out", email: true, sms: false },
    eventAlmostSoldOut: {
      label: "Event almost sold out",
      email: false,
      sms: true,
    },
    soldOut: { label: "Sold out", email: true, sms: false },
    lowTicketSales: { label: "Low ticket sales", email: true, sms: false },
    eventGoesPublic: { label: "Event goes public", email: false, sms: true },
    allPerformersConfirmed: {
      label: "All performers confirmed",
      email: true,
      sms: false,
    },
  });

  let errors = writable({});

  // Submit function
  const handleSubmit = () => {
    const currentPerformerNotifications = $performerNotifications;
    const currentEventNotifications = $eventNotifications;

    const formData = {
      performerNotifications: {
        confirms: currentPerformerNotifications.confirms,
        declines: currentPerformerNotifications.declines,
        cancels: currentPerformerNotifications.cancels,
        sendMessages: currentPerformerNotifications.sendMessages,
        allConfirmed: currentPerformerNotifications.allConfirmed,
      },
      eventNotifications: {
        orderCompleted: currentEventNotifications.orderCompleted,
        sectionSoldOut: currentEventNotifications.sectionSoldOut,
        eventAlmostSoldOut: currentEventNotifications.eventAlmostSoldOut,
        eventGoesPublic: currentEventNotifications.eventGoesPublic,
        allPerformersConfirmed:
          currentEventNotifications.allPerformersConfirmed,
        soldOut: currentEventNotifications.soldOut,
        lowTicketSales: currentEventNotifications.lowTicketSales,
      },
    };

    const result = notificationSchema.safeParse(formData);

    if (result.success) {
      console.log("Form submitted successfully:", formData);
      errors.set({}); // Clear any previous errors
    } else {
      console.log("Validation errors:", result.error.format());
      errors.set(result.error.format()); // Set validation errors
    }
  };
</script>

<section>
  <!-- Section: Receive notification when performer -->
  <div class="mb-6">
    <h2 class="text-2xl font-light text-gray-500 mb-4">
      Receive notification when performer:
    </h2>

    {#each Object.entries($performerNotifications) as [key, notification]}
      <div class="grid grid-cols-6 gap-4 items-center mb-4 border-b py-3">
        <span class="col-span-4">{notification.label}</span>
        <Toggle
          checked={notification.email}
          label="Email"
          on:change={() => {
            $performerNotifications[key].email = !notification.email;
          }}
        />
        <Toggle
          checked={notification.sms}
          label="SMS"
          on:change={() => {
            $performerNotifications[key].sms = !notification.sms;
          }}
        />
      </div>
      {#if $errors.performerNotifications?.[key]?.email}
        <p class="text-red-500 text-sm">
          Email: {$errors.performerNotifications[key].email._errors[0]}
        </p>
      {/if}
      {#if $errors.performerNotifications?.[key]?.sms}
        <p class="text-red-500 text-sm">
          SMS: {$errors.performerNotifications[key].sms._errors[0]}
        </p>
      {/if}
    {/each}
  </div>

  <!-- Section: Receive notification about event -->
  <div class="mb-6">
    <h2 class="text-2xl font-light text-gray-500 mb-4">Event notifications:</h2>

    {#each Object.entries($eventNotifications) as [key, notification]}
      <div class="grid grid-cols-6 gap-4 items-center mb-4 border-b py-3">
        <span class="col-span-4">{notification.label}</span>
        <Toggle
          checked={notification.email}
          label="Email"
          on:change={() => {
            $eventNotifications[key].email = !notification.email;
          }}
        />
        <Toggle
          checked={notification.sms}
          label="SMS"
          on:change={() => {
            $eventNotifications[key].sms = !notification.sms;
          }}
        />
      </div>
      {#if $errors.eventNotifications?.[key]?.email}
        <p class="text-red-500 text-sm">
          Email: {$errors.eventNotifications[key].email._errors[0]}
        </p>
      {/if}
      {#if $errors.eventNotifications?.[key]?.sms}
        <p class="text-red-500 text-sm">
          SMS: {$errors.eventNotifications[key].sms._errors[0]}
        </p>
      {/if}
    {/each}
  </div>

  <div class="my-4">
    <Button on:click={handleSubmit}>Save changes</Button>
  </div>
</section>
