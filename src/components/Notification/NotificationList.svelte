<script>
  import MessageSent from "./../../assets/icons/messagesent.svg";
  import SoldOut from "./../../assets/icons/sold.svg";
  import Cancelled from "./../../assets/icons/cross.svg";
  import Confirmed from "./../../assets/icons/confirmed.svg";

  export let name;
  export let action;
  export let event;
  export let message;
  export let time;
  export let avatar;
  export let status;

  function getStatusIcon() {
    const normalizedStatus = (status || "").trim().toLowerCase();

    if (normalizedStatus === "message sent") {
      return message ? MessageSent : null;
    }
    if (
      normalizedStatus === "section sold out" ||
      normalizedStatus === "ticket sold" ||
      normalizedStatus === "show sold out" ||
      normalizedStatus === "event is now published"
    ) {
      return SoldOut;
    }
    if (
      normalizedStatus === "performer declined" ||
      normalizedStatus === "performer left" ||
      normalizedStatus === "cancelled" ||
      normalizedStatus === "declined" ||
      normalizedStatus === "performer left the roster"
    ) {
      return Cancelled;
    }
    if (
      normalizedStatus === "performer confirmed" ||
      normalizedStatus === "event is fully booked"
    ) {
      return Confirmed;
    }
    return null;
  }

  const icon = getStatusIcon();
</script>

<div class="flex items-start">
  <div class="relative">
    <img
      src={avatar}
      alt=""
      class="size-[44px] mr-3 rounded-[4px] relative object-cover shadow"
    />
    {#if icon}
      <div class="absolute size-[16px] right-2 -bottom-1">
        <img src={icon} alt={status} class="rounded-full" />
      </div>
    {/if}
  </div>
  <div class="flex-1 min-w-0">
    <p class="text-[16px] font-medium text-gray-900 leading-6">
      {#if name}
        {name}
        {#if action}
          <span class="font-normal text-gray-500"> {action}</span>
        {/if}
        {#if event}
          <span class="font-medium"> {event}</span>
        {/if}
      {:else if event}
        {event}
        {#if action}
          <span class="font-normal text-gray-500"> {action}</span>
        {/if}
      {/if}
    </p>

    {#if message}
      <p class="text-[16px] font-normal leading-[24px] text-gray-500">
        {message}
      </p>
    {/if}
    <p class="text-sm leading-[17.5px] text-gray-400 font-normal mt-1">
      {time}
    </p>
  </div>
</div>
