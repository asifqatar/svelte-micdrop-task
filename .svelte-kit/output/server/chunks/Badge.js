import { c as create_ssr_component, f as createEventDispatcher, e as escape, o as null_to_empty, b as add_attribute } from "./ssr.js";
import { b as classNames } from "./utils.js";
const CancelIcon = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='cancel-circle'%3e%3cpath%20id='Vector'%20d='M10.0796%2010L6.23999%206M6.2404%2010L10.08%206'%20stroke='%23666C79'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M14.56%208.00016C14.56%204.31826%2011.6946%201.3335%208.16001%201.3335C4.62539%201.3335%201.76001%204.31826%201.76001%208.00016C1.76001%2011.682%204.62539%2014.6668%208.16001%2014.6668C11.6946%2014.6668%2014.56%2011.682%2014.56%208.00016Z'%20stroke='%23666C79'%20stroke-width='1.5'/%3e%3c/g%3e%3c/svg%3e";
const css = {
  code: ".square-event.svelte-lxxtv4{padding:4px;align-items:center;gap:4px;border-radius:4px;border:0.8px solid rgba(2, 132, 254, 0.5);box-shadow:0px 20px 6px 0px rgba(0, 0, 0, 0),\n      0px 13px 5px 0px rgba(0, 0, 0, 0.02),\n      0px 7px 4px 0px rgba(0, 0, 0, 0.08),\n      0px 3px 3px 0px rgba(0, 0, 0, 0.14),\n      0px 1px 2px 0px rgba(0, 0, 0, 0.16);overflow:hidden;text-overflow:ellipsis;font-size:14px;font-style:normal;font-weight:400;line-height:14px}.circle-event.svelte-lxxtv4{padding:4px;align-items:center;gap:4px;border-radius:9999px;font-size:14px;font-style:normal;font-weight:600;line-height:14px}.dismiss-button.svelte-lxxtv4{background:none;border:none;padding:0;margin-left:4px;cursor:pointer}@media only screen and (max-width: 640px){.square-event.svelte-lxxtv4{padding:2px;font-size:8px;line-height:10px;font-weight:200}.circle-event.svelte-lxxtv4{padding:2px;font-size:8px;gap:0px;font-weight:500;line-height:8px}}",
  map: '{"version":3,"file":"Badge.svelte","sources":["Badge.svelte"],"sourcesContent":["<script>\\n  import { createEventDispatcher } from \\"svelte\\";\\n  import { classNames } from \\"./../../utils/utils.js\\";\\n  import CancelIcon from \\"./../../assets/icons/cancel-circle.svg\\";\\n\\n  const dispatch = createEventDispatcher();\\n\\n  export let size = \\"\\";\\n  export let className = \\"\\";\\n  export let icon = \\"\\";\\n  export let textColor = \\"\\";\\n  export let bgColor = \\"\\";\\n  export let status = \\"\\";\\n  export let noBorder = false;\\n  export let tier = null;\\n  export let tierVariation = null;\\n  export let event = null;\\n  export let eventTextColor = \\"\\";\\n  export let eventBgColor = \\"\\";\\n  export let dismissable = false;\\n\\n  let visible = true;\\n\\n  const sizeClass = (() => {\\n    switch (size) {\\n      case \\"small\\":\\n        return \\"px-[2px] text-[7px] leading-[7px] rounded-[4px] font-medium\\";\\n      case \\"medium\\":\\n        return \\"px-[8.5px] py-[2px] text-[10px] leading-[14px] font-semibold rounded-[6px]\\";\\n      case \\"large\\":\\n        return \\"px-[15.5px] py-[6px] text-sm leading-[14px] font-medium rounded-[6px]\\";\\n      default:\\n        return \\"\\";\\n    }\\n  })(size);\\n\\n  const statusStyles = (() => {\\n    switch (status) {\\n      case \\"success\\":\\n        return {\\n          textColor: \\"#15A033\\",\\n          bgColor: \\"rgba(21, 160, 51, 0.15)\\",\\n          statusClass: \\"success-class\\",\\n        };\\n      case \\"warning\\":\\n        return {\\n          textColor: \\"rgba(255, 146, 46, 1)\\",\\n          bgColor: \\"rgba(255, 146, 46, 0.15)\\",\\n          statusClass: \\"warning-class\\",\\n        };\\n      case \\"danger\\":\\n        return {\\n          textColor: \\"rgba(255, 102, 102, 1)\\",\\n          bgColor: \\"rgba(255, 102, 102, 0.15)\\",\\n          statusClass: \\"danger-class\\",\\n        };\\n      default:\\n        return { textColor, bgColor, statusClass: \\"\\" };\\n    }\\n  })();\\n\\n  const tierStyles = (() => {\\n    switch (tier) {\\n      case 1:\\n        if (tierVariation === \\"red\\") {\\n          return {\\n            textColor: \\"#f66\\",\\n            bgColor: \\"rgba(255, 102, 102, 0.15)\\",\\n            tierClass:\\n              \\"rounded-md font-semibold flex justify-center items-center w-6 h-[22px]\\",\\n          };\\n        } else {\\n          return {\\n            textColor: \\"rgba(108, 43, 217, 1)\\",\\n            bgColor: \\"rgba(108, 43, 217, 0.15)\\",\\n            tierClass:\\n              \\"rounded-md font-semibold flex justify-center items-center w-6 h-[22px]\\",\\n          };\\n        }\\n      case 2:\\n        return {\\n          textColor: \\"rgba(255, 146, 46, 1)\\",\\n          bgColor: \\"rgba(255, 146, 46, 0.15)\\",\\n          tierClass:\\n            \\"rounded-md font-semibold flex justify-center items-center w-6 h-[22px]\\",\\n        };\\n      case 3:\\n        return {\\n          textColor: \\"rgba(2, 132, 254, 1)\\",\\n          bgColor: \\"rgba(2, 132, 254, 0.15)\\",\\n          tierClass:\\n            \\"rounded-md font-semibold flex justify-center items-center w-6 h-[22px]\\",\\n        };\\n      case 4:\\n        return {\\n          textColor: \\"rgba(21, 160, 51, 1)\\",\\n          bgColor: \\"rgba(21, 160, 51, 0.15)\\",\\n          tierClass:\\n            \\"rounded-md font-semibold flex justify-center items-center w-6 h-[22px]\\",\\n        };\\n      case 5:\\n        return {\\n          textColor: \\"rgba(255, 102, 102, 1)\\",\\n          bgColor: \\"rgba(255, 102, 102, 0.15)\\",\\n          tierClass:\\n            \\"rounded-md font-semibold flex justify-center items-center w-6 h-[22px]\\",\\n        };\\n      default:\\n        return { textColor, bgColor, tierClass: \\"\\" };\\n    }\\n  })();\\n\\n  const eventStyles = (() => {\\n    switch (event) {\\n      case \\"squareEvent\\":\\n        return {\\n          textColor: eventTextColor || \\"rgba(37, 43, 55, 1)\\",\\n          bgColor: eventBgColor || \\"rgba(2, 132, 254, 0.5)\\",\\n          eventClass: \\"square-event\\",\\n        };\\n      case \\"circleEvent\\":\\n        return {\\n          textColor: eventTextColor || \\"#000000\\",\\n          bgColor: eventBgColor || \\"#add8e6\\",\\n          eventClass: \\"circle-event\\",\\n        };\\n      default:\\n        return { textColor, bgColor, eventClass: \\"\\" };\\n    }\\n  })();\\n\\n  let finalBgColor = noBorder\\n    ? \\"transparent\\"\\n    : event\\n      ? eventStyles.bgColor\\n      : tier\\n        ? tierStyles.bgColor\\n        : statusStyles.bgColor;\\n  let finalTextColor = event\\n    ? eventStyles.textColor\\n    : tier\\n      ? tierStyles.textColor\\n      : statusStyles.textColor;\\n  let finalBorder = noBorder ? \\"none\\" : \\"\\";\\n\\n  let finalClass = classNames(\\n    event\\n      ? eventStyles.eventClass\\n      : tier\\n        ? tierStyles.tierClass\\n        : statusStyles.statusClass,\\n    finalBorder\\n  );\\n\\n  function handleDismiss(event) {\\n    event.stopPropagation();\\n    visible = false;\\n    dispatch(\\"dismiss\\", event);\\n  }\\n<\/script>\\n\\n{#if visible}\\n  <!-- svelte-ignore a11y-click-events-have-key-events -->\\n  <!-- svelte-ignore a11y-no-static-element-interactions -->\\n  <div\\n    class={classNames(\\n      \\"cursor-pointer gap-1\\",\\n      \\"inline-flex items-center\\",\\n      sizeClass,\\n      className,\\n      finalClass\\n    )}\\n    style=\\"color: {finalTextColor}; background-color: {finalBgColor};\\"\\n    on:click={(event) => dispatch(\\"click\\", event)}\\n  >\\n    {#if icon}\\n      <img src={icon} alt=\\"Badge Icon here\\" />\\n    {/if}\\n    {#if dismissable}\\n      <button class=\\"dismiss-button\\" on:click={handleDismiss}>\\n        <img src={CancelIcon} alt=\\"Dismissible Icon here\\" />\\n      </button>\\n    {/if}\\n    <slot />\\n  </div>\\n{/if}\\n\\n<style>\\n  .square-event {\\n    padding: 4px;\\n    align-items: center;\\n    gap: 4px;\\n    border-radius: 4px;\\n    border: 0.8px solid rgba(2, 132, 254, 0.5);\\n    box-shadow:\\n      0px 20px 6px 0px rgba(0, 0, 0, 0),\\n      0px 13px 5px 0px rgba(0, 0, 0, 0.02),\\n      0px 7px 4px 0px rgba(0, 0, 0, 0.08),\\n      0px 3px 3px 0px rgba(0, 0, 0, 0.14),\\n      0px 1px 2px 0px rgba(0, 0, 0, 0.16);\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    font-size: 14px;\\n    font-style: normal;\\n    font-weight: 400;\\n    line-height: 14px;\\n  }\\n  .circle-event {\\n    padding: 4px;\\n    align-items: center;\\n    gap: 4px;\\n    border-radius: 9999px;\\n    font-size: 14px;\\n    font-style: normal;\\n    font-weight: 600;\\n    line-height: 14px;\\n  }\\n\\n  .dismiss-button {\\n    background: none;\\n    border: none;\\n    padding: 0;\\n    margin-left: 4px;\\n    cursor: pointer;\\n  }\\n\\n  @media only screen and (max-width: 640px) {\\n    .square-event {\\n      padding: 2px;\\n      font-size: 8px;\\n      line-height: 10px;\\n      font-weight: 200;\\n    }\\n\\n    .circle-event {\\n      padding: 2px;\\n      font-size: 8px;\\n      gap: 0px;\\n      font-weight: 500;\\n      line-height: 8px;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4LE,2BAAc,CACZ,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,UAAU,CACR,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AACvC,MAAM,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;AAC1C,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;AACzC,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;AACzC,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrC,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAAQ,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACf,CACA,2BAAc,CACZ,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,aAAa,CAAE,MAAM,CACrB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACf,CAEA,6BAAgB,CACd,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,OACV,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACxC,2BAAc,CACZ,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,GACf,CAEA,2BAAc,CACZ,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,GAAG,CACd,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GACf,CACF"}'
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { size = "" } = $$props;
  let { className = "" } = $$props;
  let { icon = "" } = $$props;
  let { textColor = "" } = $$props;
  let { bgColor = "" } = $$props;
  let { status = "" } = $$props;
  let { noBorder = false } = $$props;
  let { tier = null } = $$props;
  let { tierVariation = null } = $$props;
  let { event = null } = $$props;
  let { eventTextColor = "" } = $$props;
  let { eventBgColor = "" } = $$props;
  let { dismissable = false } = $$props;
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
  })();
  const statusStyles = (() => {
    switch (status) {
      case "success":
        return {
          textColor: "#15A033",
          bgColor: "rgba(21, 160, 51, 0.15)",
          statusClass: "success-class"
        };
      case "warning":
        return {
          textColor: "rgba(255, 146, 46, 1)",
          bgColor: "rgba(255, 146, 46, 0.15)",
          statusClass: "warning-class"
        };
      case "danger":
        return {
          textColor: "rgba(255, 102, 102, 1)",
          bgColor: "rgba(255, 102, 102, 0.15)",
          statusClass: "danger-class"
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
            tierClass: "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]"
          };
        } else {
          return {
            textColor: "rgba(108, 43, 217, 1)",
            bgColor: "rgba(108, 43, 217, 0.15)",
            tierClass: "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]"
          };
        }
      case 2:
        return {
          textColor: "rgba(255, 146, 46, 1)",
          bgColor: "rgba(255, 146, 46, 0.15)",
          tierClass: "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]"
        };
      case 3:
        return {
          textColor: "rgba(2, 132, 254, 1)",
          bgColor: "rgba(2, 132, 254, 0.15)",
          tierClass: "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]"
        };
      case 4:
        return {
          textColor: "rgba(21, 160, 51, 1)",
          bgColor: "rgba(21, 160, 51, 0.15)",
          tierClass: "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]"
        };
      case 5:
        return {
          textColor: "rgba(255, 102, 102, 1)",
          bgColor: "rgba(255, 102, 102, 0.15)",
          tierClass: "rounded-md font-semibold flex justify-center items-center w-6 h-[22px]"
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
          eventClass: "square-event"
        };
      case "circleEvent":
        return {
          textColor: eventTextColor || "#000000",
          bgColor: eventBgColor || "#add8e6",
          eventClass: "circle-event"
        };
      default:
        return { textColor, bgColor, eventClass: "" };
    }
  })();
  let finalBgColor = noBorder ? "transparent" : event ? eventStyles.bgColor : tier ? tierStyles.bgColor : statusStyles.bgColor;
  let finalTextColor = event ? eventStyles.textColor : tier ? tierStyles.textColor : statusStyles.textColor;
  let finalBorder = noBorder ? "none" : "";
  let finalClass = classNames(
    event ? eventStyles.eventClass : tier ? tierStyles.tierClass : statusStyles.statusClass,
    finalBorder
  );
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0) $$bindings.textColor(textColor);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0) $$bindings.bgColor(bgColor);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  if ($$props.noBorder === void 0 && $$bindings.noBorder && noBorder !== void 0) $$bindings.noBorder(noBorder);
  if ($$props.tier === void 0 && $$bindings.tier && tier !== void 0) $$bindings.tier(tier);
  if ($$props.tierVariation === void 0 && $$bindings.tierVariation && tierVariation !== void 0) $$bindings.tierVariation(tierVariation);
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  if ($$props.eventTextColor === void 0 && $$bindings.eventTextColor && eventTextColor !== void 0) $$bindings.eventTextColor(eventTextColor);
  if ($$props.eventBgColor === void 0 && $$bindings.eventBgColor && eventBgColor !== void 0) $$bindings.eventBgColor(eventBgColor);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  $$result.css.add(css);
  return `${`  <div class="${escape(null_to_empty(classNames("cursor-pointer gap-1", "inline-flex items-center", sizeClass, className, finalClass)), true) + " svelte-lxxtv4"}" style="${"color: " + escape(finalTextColor, true) + "; background-color: " + escape(finalBgColor, true) + ";"}">${icon ? `<img${add_attribute("src", icon, 0)} alt="Badge Icon here">` : ``} ${dismissable ? `<button class="dismiss-button svelte-lxxtv4" data-svelte-h="svelte-1cu9dc9"><img${add_attribute("src", CancelIcon, 0)} alt="Dismissible Icon here"></button>` : ``} ${slots.default ? slots.default({}) : ``}</div>`}`;
});
export {
  Badge as B
};
