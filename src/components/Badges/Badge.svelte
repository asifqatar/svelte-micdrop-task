<script>
  import { createEventDispatcher } from "svelte";
  import { classNames } from "./../../utils/utils.js";
  import CancelIcon from "./../../assets/icons/cancel-circle.svg";

  const dispatch = createEventDispatcher();

  export let size = "";
  export let className = "";
  export let icon = "";
  export let textColor = "";
  export let bgColor = "";
  export let status = "";
  export let noBorder = false;
  export let tier = null;
  export let tierVariation = null;
  export let event = null;
  export let eventTextColor = "";
  export let eventBgColor = "";
  export let dismissable = false;

  let visible = true;

  const sizeClass = (() => {
    switch (size) {
      case "small":
        return "px-[2px] text-[7px] leading-[7px] rounded-[4px] font-medium";
      case "medium":
        return "px-[8.5px] py-[2px] text-[10px] leading-[14px] font-semibold rounded-[6px]";
      case "large":
        return "px-[15.5px] py-[6px] text-sm leading-[14px] font-medium rounded-[6px]";
      default:
        return "";
    }
  })(size);

  const statusStyles = (() => {
    switch (status) {
      case "success":
        return {
          textColor: "#15A033",
          bgColor: "rgba(21, 160, 51, 0.15)",
          statusClass: "success-class",
        };
      case "warning":
        return {
          textColor: "rgba(255, 146, 46, 1)",
          bgColor: "rgba(255, 146, 46, 0.15)",
          statusClass: "warning-class",
        };
      case "danger":
        return {
          textColor: "rgba(255, 102, 102, 1)",
          bgColor: "rgba(255, 102, 102, 0.15)",
          statusClass: "danger-class",
        };
      default:
        return { textColor, bgColor, statusClass: "" };
    }
  })();

  const tierStyles = (() => {
    switch (tier) {
      case 1:
        if (tierVariation === "red") {
          return {
            textColor: "#f66",
            bgColor: "rgba(255, 102, 102, 0.15)",
            tierClass:
              "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]",
          };
        } else {
          return {
            textColor: "rgba(108, 43, 217, 1)",
            bgColor: "rgba(108, 43, 217, 0.15)",
            tierClass:
              "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]",
          };
        }
      case 2:
        return {
          textColor: "rgba(255, 146, 46, 1)",
          bgColor: "rgba(255, 146, 46, 0.15)",
          tierClass:
            "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]",
        };
      case 3:
        return {
          textColor: "rgba(2, 132, 254, 1)",
          bgColor: "rgba(2, 132, 254, 0.15)",
          tierClass:
            "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]",
        };
      case 4:
        return {
          textColor: "rgba(21, 160, 51, 1)",
          bgColor: "rgba(21, 160, 51, 0.15)",
          tierClass:
            "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]",
        };
      case 5:
        return {
          textColor: "rgba(255, 102, 102, 1)",
          bgColor: "rgba(255, 102, 102, 0.15)",
          tierClass:
            "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]",
        };
      default:
        return { textColor, bgColor, tierClass: "" };
    }
  })();

  const eventStyles = (() => {
    switch (event) {
      case "squareEvent":
        return {
          textColor: eventTextColor || "rgba(37, 43, 55, 1)",
          bgColor: eventBgColor || "rgba(2, 132, 254, 0.5)",
          eventClass: "square-event",
        };
      case "circleEvent":
        return {
          textColor: eventTextColor || "#000000",
          bgColor: eventBgColor || "#add8e6",
          eventClass: "circle-event",
        };
      default:
        return { textColor, bgColor, eventClass: "" };
    }
  })();

  let finalBgColor = noBorder
    ? "transparent"
    : event
      ? eventStyles.bgColor
      : tier
        ? tierStyles.bgColor
        : statusStyles.bgColor;
  let finalTextColor = event
    ? eventStyles.textColor
    : tier
      ? tierStyles.textColor
      : statusStyles.textColor;
  let finalBorder = noBorder ? "none" : "";

  let finalClass = classNames(
    event
      ? eventStyles.eventClass
      : tier
        ? tierStyles.tierClass
        : statusStyles.statusClass,
    finalBorder
  );

  function handleDismiss(event) {
    event.stopPropagation();
    visible = false;
    dispatch("dismiss", event);
  }
</script>

{#if visible}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class={classNames(
      "cursor-pointer gap-1",
      "inline-flex items-center",
      sizeClass,
      className,
      finalClass
    )}
    style="color: {finalTextColor}; background-color: {finalBgColor};"
    on:click={(event) => dispatch("click", event)}
  >
    {#if icon}
      <img src={icon} alt="Badge Icon here" />
    {/if}
    {#if dismissable}
      <button class="dismiss-button" on:click={handleDismiss}>
        <img src={CancelIcon} alt="Dismissible Icon here" />
      </button>
    {/if}
    <slot />
  </div>
{/if}

<style>
  .square-event {
    padding: 4px;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    border: 0.8px solid rgba(2, 132, 254, 0.5);
    box-shadow:
      0px 20px 6px 0px rgba(0, 0, 0, 0),
      0px 13px 5px 0px rgba(0, 0, 0, 0.02),
      0px 7px 4px 0px rgba(0, 0, 0, 0.08),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 1px 2px 0px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
  .circle-event {
    padding: 4px;
    align-items: center;
    gap: 4px;
    border-radius: 9999px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
  }

  .dismiss-button {
    background: none;
    border: none;
    padding: 0;
    margin-left: 4px;
    cursor: pointer;
  }

  @media only screen and (max-width: 640px) {
    .square-event {
      padding: 2px;
      font-size: 8px;
      line-height: 10px;
      font-weight: 200;
    }

    .circle-event {
      padding: 2px;
      font-size: 8px;
      gap: 0px;
      font-weight: 500;
      line-height: 8px;
    }
  }
</style>
