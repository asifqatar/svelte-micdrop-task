import { c as create_ssr_component, h as compute_rest_props, g as getContext, i as spread, j as escape_attribute_value, k as escape_object, b as add_attribute, e as escape, f as createEventDispatcher, o as null_to_empty, v as validate_component, d as each, a as subscribe } from "../../../../../chunks/ssr.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { c as cn, g as getDaysNumberOptions, a as getDays } from "../../../../../chunks/utils.js";
import { C as Cancel } from "../../../../../chunks/pdf-upload-download.js";
import { C as CustomDropdown } from "../../../../../chunks/CustomDropdown.js";
import { C as Checkbox } from "../../../../../chunks/Checkbox.js";
import { L as Label } from "../../../../../chunks/Label.js";
import { T as Textarea, E as ErrorMessage, C as CustomDropzone } from "../../../../../chunks/ErrorMessage.js";
import { A as Accordion, a as AccordionItem } from "../../../../../chunks/AccordionItem.js";
import { w as writable } from "../../../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const PlusOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "plus outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>`} `;
});
const TrashBinOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "trash bin outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path></svg>`} `;
});
const AvailSettingsIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%202V4M6%202V4M3%208H21M2.5%2012.2432C2.5%207.88594%202.5%205.70728%203.75212%204.35364C5.00424%203%207.01949%203%2011.05%203H12.95C16.9805%203%2018.9958%203%2020.2479%204.35364C21.5%205.70728%2021.5%207.88594%2021.5%2012.2432V12.7568C21.5%2017.1141%2021.5%2019.2927%2020.2479%2020.6464C18.9958%2022%2016.9805%2022%2012.95%2022H11.05C7.01949%2022%205.00424%2022%203.75212%2020.6464C2.5%2019.2927%202.5%2017.1141%202.5%2012.7568V12.2432ZM12.6047%2012.0055L13.2206%2013.2475C13.3046%2013.4204%2013.5286%2013.5862%2013.7175%2013.618L14.8339%2013.805C15.5478%2013.925%2015.7158%2014.4472%2015.2014%2014.9624L14.3335%2015.8374C14.1865%2015.9856%2014.106%2016.2715%2014.1515%2016.4761L14.4%2017.5594C14.596%2018.4168%2014.1445%2018.7485%2013.3921%2018.3004L12.3457%2017.6758C12.1567%2017.5629%2011.8453%2017.5629%2011.6528%2017.6758L10.6064%2018.3004C9.85748%2018.7485%209.40253%2018.4133%209.5985%2017.5594L9.84698%2016.4761C9.89247%2016.2715%209.81198%2015.9856%209.665%2015.8374L8.79709%2014.9624C8.28615%2014.4472%208.45063%2013.925%209.16455%2013.805L10.2809%2013.618C10.4664%2013.5862%2010.6904%2013.4204%2010.7744%2013.2475L11.3903%2012.0055C11.7263%2011.3315%2012.2722%2011.3315%2012.6047%2012.0055Z'%20stroke='%230D1526'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const CustomSettingsIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.2892%2021.9609H9.39111C6.14261%2021.9609%204.51836%2021.9609%203.50918%2020.9358C2.5%2019.9106%202.5%2018.2607%202.5%2014.9609V9.96094C2.5%206.66111%202.5%205.01119%203.50918%203.98607C4.51836%202.96094%206.14261%202.96094%209.39111%202.96094H12.3444C15.5929%202.96094%2017.4907%203.01612%2018.5%204.04125C19.5092%205.06637%2019.5%206.66111%2019.5%209.96094V11.1473'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%2015H11M7%2010H15'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20opacity='0.93'%20d='M20.7598%2014.8785C19.8544%2013.8641%2019.3112%2013.9245%2018.7076%2014.1056C18.2851%2014.166%2016.8365%2015.8568%2016.2329%2016.3952C15.2419%2017.3743%2014.2464%2018.3823%2014.1807%2018.5138C13.9931%2018.8188%2013.8186%2019.3592%2013.7341%2019.963C13.5771%2020.8688%2013.3507%2021.8885%2013.6375%2021.9759C13.9242%2022.0632%2014.7239%2021.8954%2015.6293%2021.7625C16.2329%2021.6538%2016.6554%2021.533%2016.9572%2021.3519C17.3797%2021.0983%2018.1644%2020.2046%2019.5164%2018.8761C20.3644%2017.9833%2021.1823%2017.3664%2021.4238%2016.7626C21.6652%2015.8568%2021.3031%2015.3737%2020.7598%2014.8785Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3c/svg%3e";
const css$1 = {
  code: ".modal-box.svelte-16shu3n{box-shadow:0px 152px 43px 0px rgba(79, 79, 79, 0),\n      0px 97px 39px 0px rgba(79, 79, 79, 0.01),\n      0px 55px 33px 0px rgba(79, 79, 79, 0.05),\n      0px 24px 24px 0px rgba(79, 79, 79, 0.09),\n      0px 6px 13px 0px rgba(79, 79, 79, 0.1)}.modal-content.svelte-16shu3n{background:white;max-width:100%;max-height:90vh;overflow-y:scroll;padding:2rem;border-radius:0.5rem}.modal-content.svelte-16shu3n::-webkit-scrollbar{display:none}.max-w-xs.svelte-16shu3n{width:20rem}.max-w-sm.svelte-16shu3n{width:24rem}.max-w-md.svelte-16shu3n{width:28rem}.max-w-lg.svelte-16shu3n{width:32rem}.max-w-xl.svelte-16shu3n{width:36rem}.max-w-large.svelte-16shu3n{width:80rem}",
  map: '{"version":3,"file":"CustomModal.svelte","sources":["CustomModal.svelte"],"sourcesContent":["<script>\\n  import { createEventDispatcher } from \\"svelte\\";\\n  import Button from \\"../Button/Button.svelte\\";\\n  import Cancel from \\"../../assets/svg/cancel.svg\\";\\n  import { cn } from \\"@/utils/utils\\";\\n\\n  export let contentClass = \\"\\";\\n  export let show = false;\\n  // export let title = \\"\\";\\n  // export let description = \\"\\";\\n  // export let warningText = \\"\\";\\n  // export let actions = [];\\n  // export let icon = null;\\n  export let closeBtn = false; // To show close button\\n  export let size = \\"md\\"; // Define the size prop with a default value of \'md\'\\n\\n  const dispatch = createEventDispatcher();\\n\\n  const handleAction = (action) => {\\n    action.onClick();\\n    dispatch(action.label.toLowerCase());\\n    show = false;\\n  };\\n\\n  const stopPropagation = (event) => {\\n    event.stopPropagation();\\n  };\\n\\n  // Function to return appropriate width class based on size prop\\n  const getSizeClass = () => {\\n    switch (size) {\\n      case \\"xs\\":\\n        return \\"max-w-xs\\"; // extra small\\n      case \\"sm\\":\\n        return \\"max-w-sm\\"; // small\\n      case \\"md\\":\\n        return \\"max-w-md\\"; // medium\\n      case \\"lg\\":\\n        return \\"max-w-lg\\"; // large\\n      case \\"xl\\":\\n        return \\"max-w-xl\\"; // extra large\\n      case \\"full\\":\\n        return \\"max-w-large\\"; // extra large\\n      default:\\n        return \\"max-w-md\\"; // default to medium\\n    }\\n  };\\n<\/script>\\n\\n{#if show}\\n  <div\\n    class=\\"fixed overflow-hidden inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50\\"\\n    role=\\"presentation\\"\\n    on:click={() => (show = false)}\\n  >\\n    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n    <!-- svelte-ignore a11y-click-events-have-key-events -->\\n    <div\\n      class={cn(`modal-content modal-box`, getSizeClass(), contentClass)}\\n      role=\\"dialog\\"\\n      on:click={stopPropagation}\\n    >\\n      {#if closeBtn}\\n        <div class=\\"flex justify-end\\">\\n          <button class=\\"focus:outline-none\\" on:click={() => (show = false)}>\\n            <img src={Cancel} alt=\\"Close Icon\\" />\\n          </button>\\n        </div>\\n      {/if}\\n\\n      <slot />\\n    </div>\\n  </div>\\n{/if}\\n\\n<style>\\n  .modal-box {\\n    box-shadow:\\n      0px 152px 43px 0px rgba(79, 79, 79, 0),\\n      0px 97px 39px 0px rgba(79, 79, 79, 0.01),\\n      0px 55px 33px 0px rgba(79, 79, 79, 0.05),\\n      0px 24px 24px 0px rgba(79, 79, 79, 0.09),\\n      0px 6px 13px 0px rgba(79, 79, 79, 0.1);\\n  }\\n\\n  .modal-content {\\n    background: white;\\n    max-width: 100%;\\n    max-height: 90vh;\\n    overflow-y: scroll;\\n    padding: 2rem;\\n    border-radius: 0.5rem;\\n  }\\n\\n  .modal-content::-webkit-scrollbar {\\n    display: none;\\n  }\\n\\n  /* Tailwind utility classes for max-width */\\n  .max-w-xs {\\n    width: 20rem; /* 320px */\\n  }\\n\\n  .max-w-sm {\\n    width: 24rem; /* 384px */\\n  }\\n\\n  .max-w-md {\\n    width: 28rem; /* 448px */\\n  }\\n\\n  .max-w-lg {\\n    width: 32rem; /* 512px */\\n  }\\n\\n  .max-w-xl {\\n    width: 36rem; /* 576px */\\n  }\\n  .max-w-large {\\n    width: 80rem; /* 576px */\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4EE,yBAAW,CACT,UAAU,CACR,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC;AAC5C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC;AAC9C,MAAM,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CACzC,CAEA,6BAAe,CACb,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MACjB,CAEA,6BAAc,mBAAoB,CAChC,OAAO,CAAE,IACX,CAGA,wBAAU,CACR,KAAK,CAAE,KACT,CAEA,wBAAU,CACR,KAAK,CAAE,KACT,CAEA,wBAAU,CACR,KAAK,CAAE,KACT,CAEA,wBAAU,CACR,KAAK,CAAE,KACT,CAEA,wBAAU,CACR,KAAK,CAAE,KACT,CACA,2BAAa,CACX,KAAK,CAAE,KACT"}'
};
const CustomModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentClass = "" } = $$props;
  let { show = false } = $$props;
  let { closeBtn = false } = $$props;
  let { size = "md" } = $$props;
  createEventDispatcher();
  const getSizeClass = () => {
    switch (size) {
      case "xs":
        return "max-w-xs";
      case "sm":
        return "max-w-sm";
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-lg";
      case "xl":
        return "max-w-xl";
      case "full":
        return "max-w-large";
      default:
        return "max-w-md";
    }
  };
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0) $$bindings.contentClass(contentClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.closeBtn === void 0 && $$bindings.closeBtn && closeBtn !== void 0) $$bindings.closeBtn(closeBtn);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  $$result.css.add(css$1);
  return `${show ? `<div class="fixed overflow-hidden inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50" role="presentation">  <div class="${escape(null_to_empty(cn(`modal-content modal-box`, getSizeClass(), contentClass)), true) + " svelte-16shu3n"}" role="dialog">${closeBtn ? `<div class="flex justify-end"><button class="focus:outline-none" data-svelte-h="svelte-1ewpioa"><img${add_attribute("src", Cancel, 0)} alt="Close Icon"></button></div>` : ``} ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const CustomMesageImage$1 = "/_app/immutable/assets/avails_custom_message.CM59YjvD.png";
const OnlyPerformCalender = "/_app/immutable/assets/only_performs.DFMlypDM.png";
const EnableCalndar = "/_app/immutable/assets/enable_calendar.xJ0YGrxx.png";
const MoreInfoIcon = "data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.728516%207.50033C0.728516%2010.9636%203.53606%2013.7712%206.99935%2013.7712C10.4627%2013.7712%2013.2702%2010.9636%2013.2702%207.50033C13.2702%204.03704%2010.4627%201.22949%206.99935%201.22949C3.53606%201.22949%200.728516%204.03704%200.728516%207.50033ZM6.81379%206.93292C6.95787%206.95228%207.15726%207.00414%207.32642%207.17331C7.49559%207.34247%207.54745%207.5418%207.56682%207.68594C7.58286%207.80529%207.58274%207.94413%207.58268%208.06068V8.08366V10.417C7.58268%2010.7392%207.32152%2011.0003%206.99935%2011.0003C6.67717%2011.0003%206.41602%2010.7392%206.41602%2010.417V8.08366C6.09384%208.08366%205.83268%207.8225%205.83268%207.50033C5.83268%207.17815%206.09384%206.91699%206.41602%206.91699H6.439C6.55561%206.91693%206.69438%206.91682%206.81379%206.93292ZM6.99667%204.58366C6.67595%204.58366%206.41596%204.84483%206.41596%205.16699C6.41596%205.48916%206.67595%205.75033%206.99667%205.75033H7.00192C7.32263%205.75033%207.58262%205.48916%207.58262%205.16699C7.58262%204.84483%207.32263%204.58366%207.00192%204.58366H6.99667Z'%20fill='%23ADB0B7'/%3e%3c/svg%3e";
const AvailsSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let days;
  createEventDispatcher();
  let selectedDaysNumber = null;
  let selectedDay = null;
  let selectedTimeOptions = null;
  let hasCustomEmail = false;
  let customMessagePopup = false;
  let onlyPerforms = false;
  let showEnableCalendarModal = false;
  let enabledCalendar = false;
  let noEnableCalendar = false;
  let canOpenEnableCalendar = localStorage.getItem("noEnableCalendar") || false;
  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here..."
  };
  const timeOptions = [{ value: "weeks", label: "Weeks" }, { value: "months", label: "Months" }];
  let daysNumber = [];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (enabledCalendar && !canOpenEnableCalendar) {
        showEnableCalendarModal = true;
      } else {
        showEnableCalendarModal = false;
      }
    }
    daysNumber = getDaysNumberOptions(selectedTimeOptions);
    days = getDays(selectedTimeOptions);
    $$rendered = `<div><div class="mb-6"><div class="flex mb-6">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "font-normal",
        checked: enabledCalendar
      },
      {
        checked: ($$value) => {
          enabledCalendar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Enable the Availability Calendar and allow performers to update`;
        }
      }
    )} <button class="ml-2 my-auto p-2" data-svelte-h="svelte-1rnu3au"><img class="my-auto"${add_attribute("src", MoreInfoIcon, 0)} alt="more-info"></button></div> <div class="flex ml-6 my-5 gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        className: "max-sm:text-xs block max-w-max",
        strokebtn: true
      },
      {},
      {
        default: () => {
          return `<svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3191 0.824937C15.349 0.843401 15.3747 0.849054 15.3858 0.850276C15.3882 0.850545 15.3894 0.850572 15.3894 0.850593C15.3894 0.850672 15.3713 0.85066 15.3321 0.863697L15.3191 0.824937ZM15.3191 0.824937L15.2983 0.762442L15.3191 0.824937ZM1.50558 5.47826L15.1612 0.920715L11.2346 14.6796L8.87036 9.35225L13.2591 3.49307L12.5586 2.79351L6.68246 7.20634L1.50558 5.47826Z" fill="#0D1526" stroke="#0D1526"></path></svg>

        Send avails request now`;
        }
      }
    )} <span class="text-xs font-light text-green-500 my-auto" data-svelte-h="svelte-15pmz6m">Last sent: 3/7/22 2:54PM PST</span></div></div> <div class="mb-6">${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "font-normal" }, {}, {
      default: () => {
        return `Request that performers update their availability every`;
      }
    })} <div class="flex ml-6 my-5 gap-4">${validate_component(CustomDropdown, "CustomDropdown").$$render(
      $$result,
      {
        options: daysNumber,
        selected: selectedDaysNumber
      },
      {
        selected: ($$value) => {
          selectedDaysNumber = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CustomDropdown, "CustomDropdown").$$render(
      $$result,
      {
        options: timeOptions,
        selected: selectedTimeOptions
      },
      {
        selected: ($$value) => {
          selectedTimeOptions = $$value;
          $$settled = false;
        }
      },
      {}
    )} <span class="my-auto text-black text-xs" data-svelte-h="svelte-25c75q">on</span> ${validate_component(CustomDropdown, "CustomDropdown").$$render(
      $$result,
      { options: days, selected: selectedDay },
      {
        selected: ($$value) => {
          selectedDay = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="flex mb-6">${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: true, class: "font-normal" }, {}, {
      default: () => {
        return `Only let performers mark availability on dates with events scheduled on
      them`;
      }
    })} <button class="ml-2 my-auto p-1" data-svelte-h="svelte-13riwxb"><img class="my-auto"${add_attribute("src", MoreInfoIcon, 0)} alt="more-info"></button></div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "flex mb-2" }, {}, {
      default: () => {
        return `${validate_component(Checkbox, "Checkbox").$$render(
          $$result,
          {
            class: "my-auto",
            checked: hasCustomEmail
          },
          {
            checked: ($$value) => {
              hasCustomEmail = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Custom message in avails request emails`;
            }
          }
        )} <button class="ml-2 my-auto p-1" data-svelte-h="svelte-k0btxt"><img class="my-auto"${add_attribute("src", MoreInfoIcon, 0)} alt="more-info"></button>`;
      }
    })} ${hasCustomEmail ? `${validate_component(Textarea, "Textarea").$$render($$result, Object.assign({}, textareaprops), {}, {})} ` : ``}</div> ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: customMessagePopup, closeBtn: true }, {}, {
      default: () => {
        return `<div class="my-2" data-svelte-h="svelte-19oa3u9"><img${add_attribute("src", CustomMesageImage$1, 0)} alt="custom-message-popup"></div>`;
      }
    })} ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: onlyPerforms, closeBtn: true }, {}, {
      default: () => {
        return `<div class="my-2" data-svelte-h="svelte-2s27p0"><img${add_attribute("src", OnlyPerformCalender, 0)} alt="only-performs-calender"></div>`;
      }
    })} ${validate_component(CustomModal, "CustomModal").$$render(
      $$result,
      {
        show: showEnableCalendarModal,
        closeBtn: true
      },
      {},
      {
        default: () => {
          return `<div class="my-2 flex flex-col gap-2 justify-center items-center"><img${add_attribute("src", EnableCalndar, 0)} alt="enable-calender"> ${enabledCalendar ? `${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              class: "font-normal",
              checked: noEnableCalendar
            },
            {
              checked: ($$value) => {
                noEnableCalendar = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Don’t show this again`;
              }
            }
          )}` : ``} ${validate_component(Button, "Button").$$render($$result, { className: "w-full my-5" }, {}, {
            default: () => {
              return `ok`;
            }
          })}</div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "input.svelte-3tnv3n::-moz-placeholder{color:#a0aec0}input.svelte-3tnv3n::placeholder{color:#a0aec0}.dropdown-menu.svelte-3tnv3n::-webkit-scrollbar{display:none}",
  map: `{"version":3,"file":"InputTag.svelte","sources":["InputTag.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import { createEventDispatcher } from \\"svelte\\";\\n\\n  const dispatcher = createEventDispatcher();\\n\\n  let availableOptions = [\\"The Crow\\", \\"Jetpack\\", \\"Rocket\\", \\"Falcon\\", \\"Eagle\\"];\\n  let selectedOptions = [\\"Jetpack\\"];\\n  let inputValue = \\"\\";\\n  let filteredOptions = [];\\n\\n  const removeOption = (option) => {\\n    selectedOptions = selectedOptions.filter((item) => item !== option);\\n  };\\n\\n  const addOption = (option) => {\\n    if (!selectedOptions.includes(option)) {\\n      selectedOptions = [...selectedOptions, option];\\n      inputValue = \\"\\";\\n      filteredOptions = [];\\n    }\\n  };\\n\\n  const handleInput = (event) => {\\n    inputValue = event.target.value;\\n    filteredOptions = availableOptions.filter((option) =>\\n      option.toLowerCase().includes(inputValue.toLowerCase())\\n    );\\n  };\\n\\n  const handleKeyDown = (event) => {\\n    if (event.key === \\"Enter\\" && inputValue) {\\n      addOption(inputValue);\\n    }\\n  };\\n<\/script>\\n\\n<div\\n  class=\\"flex items-center flex-wrap gap-2 bg-[#F7F7F8] border border-gray-300 rounded-xl p-2 ring-1 ring-gray-400\\"\\n>\\n  <!-- Selected tags -->\\n  {#each selectedOptions as option}\\n    <div\\n      class=\\"bg-white flex items-center px-2 py-1 rounded-md border-2 border-gray-300\\"\\n    >\\n      <span class=\\"mr-2\\">{option}</span>\\n      <button\\n        class=\\"text-gray-500 hover:text-gray-700 focus:outline-none\\"\\n        on:click={() => removeOption(option)}\\n      >\\n        ✕\\n      </button>\\n    </div>\\n  {/each}\\n\\n  <!-- Input field -->\\n  <input\\n    class=\\"bg-[#F7F7F8] border-none focus:ring-0 outline-none p-2 flex-grow\\"\\n    type=\\"text\\"\\n    bind:value={inputValue}\\n    placeholder=\\"Search or add...\\"\\n    on:input={handleInput}\\n    on:keydown={handleKeyDown}\\n  />\\n</div>\\n\\n<!-- Autocomplete dropdown -->\\n{#if filteredOptions.length > 0}\\n  <ul\\n    class=\\"dropdown-menu border border-gray-300 rounded-lg mt-2 max-h-40 overflow-y-auto\\"\\n  >\\n    {#each filteredOptions as option}\\n      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n      <!-- svelte-ignore a11y-click-events-have-key-events -->\\n      <li\\n        class=\\"p-2 hover:bg-gray-100 cursor-pointer\\"\\n        on:click={() => addOption(option)}\\n      >\\n        {option}\\n      </li>\\n    {/each}\\n  </ul>\\n{/if}\\n\\n<style>\\n  input::-moz-placeholder {\\n    color: #a0aec0; /* Tailwind's gray-400 */\\n  }\\n\\n  input::placeholder {\\n    color: #a0aec0; /* Tailwind's gray-400 */\\n  }\\n\\n  /* Optional styling for scrollable dropdowns */\\n\\n  .dropdown-menu::-webkit-scrollbar {\\n    display: none;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqFE,mBAAK,kBAAmB,CACtB,KAAK,CAAE,OACT,CAEA,mBAAK,aAAc,CACjB,KAAK,CAAE,OACT,CAIA,4BAAc,mBAAoB,CAChC,OAAO,CAAE,IACX"}`
};
const InputTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let selectedOptions = ["Jetpack"];
  let inputValue = "";
  let filteredOptions = [];
  $$result.css.add(css);
  return `<div class="flex items-center flex-wrap gap-2 bg-[#F7F7F8] border border-gray-300 rounded-xl p-2 ring-1 ring-gray-400"> ${each(selectedOptions, (option) => {
    return `<div class="bg-white flex items-center px-2 py-1 rounded-md border-2 border-gray-300"><span class="mr-2">${escape(option)}</span> <button class="text-gray-500 hover:text-gray-700 focus:outline-none" data-svelte-h="svelte-1q0krrm">✕</button> </div>`;
  })}  <input class="bg-[#F7F7F8] border-none focus:ring-0 outline-none p-2 flex-grow svelte-3tnv3n" type="text" placeholder="Search or add..."${add_attribute("value", inputValue, 0)}></div>  ${filteredOptions.length > 0 ? `<ul class="dropdown-menu border border-gray-300 rounded-lg mt-2 max-h-40 overflow-y-auto svelte-3tnv3n">${each(filteredOptions, (option) => {
    return `  <li class="p-2 hover:bg-gray-100 cursor-pointer">${escape(option)} </li>`;
  })}</ul>` : ``}`;
});
const AvaialRequestContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col justify-center items-center"><svg class="my-5" width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9987 1.66699V4.33366M5.9987 1.66699V4.33366M1.9987 9.66699H25.9987M1.33203 15.3246C1.33203 9.51491 1.33203 6.61003 3.00152 4.80518C4.67102 3.00033 7.35802 3.00033 12.732 3.00033H15.2654C20.6394 3.00033 23.3264 3.00033 24.9959 4.80518C26.6654 6.61003 26.6654 9.51491 26.6654 15.3246V16.0094C26.6654 21.8191 26.6654 24.7239 24.9959 26.5289C23.3264 28.3337 20.6394 28.3337 15.2654 28.3337H12.732C7.35802 28.3337 4.67102 28.3337 3.00152 26.5289C1.33203 24.7239 1.33203 21.8191 1.33203 16.0094V15.3246ZM14.805 15.0077L15.6262 16.6637C15.7382 16.8942 16.0368 17.1153 16.2887 17.1577L17.7772 17.407C18.7291 17.567 18.9531 18.2633 18.2672 18.9502L17.11 20.1169C16.914 20.3145 16.8067 20.6957 16.8674 20.9685L17.1987 22.4129C17.46 23.5561 16.858 23.9983 15.8548 23.4009L14.4596 22.5681C14.2076 22.4175 13.7924 22.4175 13.5358 22.5681L12.1406 23.4009C11.142 23.9983 10.5354 23.5514 10.7967 22.4129L11.128 20.9685C11.1887 20.6957 11.0813 20.3145 10.8854 20.1169L9.72815 18.9502C9.0469 18.2633 9.2662 17.567 10.2181 17.407L11.7066 17.1577C11.9539 17.1153 12.2526 16.8942 12.3646 16.6637L13.1858 15.0077C13.6338 14.109 14.3616 14.109 14.805 15.0077Z" stroke="#0D1526" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> <p data-svelte-h="svelte-1v5cbcq">Avails requests</p> <span class="text-xs text-gray-600 font-normal my-4" data-svelte-h="svelte-1w0srm6">If a performer’s profile page is marked</span> ${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: true, class: "font-normal" }, {}, {
    default: () => {
      return `Receive Avails Requests for`;
    }
  })}  <div class="my-5">${validate_component(InputTag, "InputTag").$$render($$result, {}, {}, {})}</div> <span class="w-[80%] text-center text-xs text-gray-600 font-light my-4" data-svelte-h="svelte-1h7pygm">they will receive reminders to update their avails whenever “Send avails
    request now” is clicked, or on the schedule you set below.</span> ${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "font-normal" }, {}, {
    default: () => {
      return `Don’t show this again`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { className: "w-full my-5" }, {}, {
    default: () => {
      return `ok`;
    }
  })}</div>`;
});
const SendMessage = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.31435%208.63767L22.2231%202.32692C22.2494%202.31815%2022.272%202.31222%2022.291%202.30826C22.2882%202.32408%2022.284%202.3424%2022.278%202.36333L16.8469%2021.394L13.4685%2013.7813L19.3787%205.89085L18.6782%205.19128L10.7734%2011.1276L3.31435%208.63767Z'%20fill='white'%20stroke='white'/%3e%3c/svg%3e";
const SendRequestContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here..."
  };
  return `<div class="flex flex-col"><div class="w-full flex flex-col justify-center items-center" data-svelte-h="svelte-10oy9sx"><svg class="my-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0623 4.07025C25.1583 0.942823 3.314 8.60394 3.33204 11.401C3.3525 14.5729 11.8628 15.5486 14.2216 16.2105C15.6402 16.6083 16.02 17.0163 16.3471 18.5038C17.8284 25.2403 18.5722 28.591 20.2672 28.6658C22.9691 28.7853 30.8964 7.12234 28.0623 4.07025Z" stroke="#0284FE" stroke-width="2"></path><path d="M15.332 16.6667L19.9987 12" stroke="#0284FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> <p class="text-xl text-center">Send request to all performers on <br> avails list?</p> <span class="text-sm text-gray-600 font-normal my-4">If you’d like to include a message, add it here:</span></div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "block mb-2" }, {}, {
    default: () => {
      return `Include custom message in booking emails`;
    }
  })} ${validate_component(Textarea, "Textarea").$$render($$result, Object.assign({}, textareaprops), {}, {})}</div> <div class="w-full flex justify-end p-3 gap-4">${validate_component(Button, "Button").$$render($$result, { strokebtn: true }, {}, {
    default: () => {
      return `Cancel`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { beforeIcon: SendMessage }, {}, {
    default: () => {
      return `Share`;
    }
  })}</div></div>`;
});
const DisclaimerImage = "/_app/immutable/assets/disclamier-popup.CD8KZBtG.png";
const FAQImage = "/_app/immutable/assets/faq-popup.D8eQHDXF.png";
const CustomMesageImage = "/_app/immutable/assets/custom_message_popup.Q1rl9H-d.png";
const { Object: Object_1 } = globals;
const SetDisclaimers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checkbox_one = false;
  let checkbox_two = false;
  let hasCustomEmail = false;
  let hasCustomCheckout = false;
  let disclaimerPopup = false;
  let faqPopup = false;
  let customMessagePopup = false;
  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here..."
  };
  z.object({
    question_prompt: z.string().min(1, { message: "Question prompt is required" }),
    selected_question_type: z.string().min(1, { message: "Please select a question type" }),
    questions: z.array(z.string().min(1, { message: "Option cannot be empty" })),
    disclaimer: z.string().min(1, { message: "Disclaimer is required" }),
    faq: z.string().min(1, { message: "FAQ is required" }),
    request_notification: z.string().min(1, {
      message: "Custom message in avails request notifications is required"
    }),
    booking_notification: z.string().min(1, {
      message: "Custom message in booking notifications is required"
    }),
    email_message: z.string().min(1, {
      message: "Custom email signup message on checkout page is required"
    }),
    avails_email_request: z.string().min(1, {
      message: "Custom message in avails request emails is required"
    }),
    inlcude_booking_emails: z.string().min(1, {
      message: "Include custom message in booking emails is required"
    }),
    venue_faqs: z.string().min(1, { message: "Venue FAQs is required" })
  });
  let formData = {
    question_prompt: "",
    selected_question_type: "",
    questions: ["", ""],
    disclaimer: "",
    faq: "",
    request_notification: "",
    booking_notification: "",
    email_message: "",
    avails_email_request: "",
    inlcude_booking_emails: "",
    venue_faqs: ""
  };
  let formErrors = {};
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="p-4"><form class="my-5"><div class="w-full p-6 mx-auto my-5 rounded-lg border"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "flex mb-2" }, {}, {
      default: () => {
        return `<span class="my-auto" data-svelte-h="svelte-1uc44hg">Disclaimer</span> <button class="ml-2 my-auto p-1" data-svelte-h="svelte-1imrf7x"><img class="my-auto"${add_attribute("src", MoreInfoIcon, 0)} alt="more-info"></button>`;
      }
    })} ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      Object_1.assign({}, textareaprops, { value: formData.disclaimer }),
      {
        value: ($$value) => {
          formData.disclaimer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: formErrors.disclaimer }, {}, {})}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "flex mb-2" }, {}, {
      default: () => {
        return `<span class="my-auto" data-svelte-h="svelte-1u6kzun">Venue FAQs</span> <button class="ml-2 my-auto p-1" data-svelte-h="svelte-tn3qgr"><img class="my-auto"${add_attribute("src", MoreInfoIcon, 0)} alt="more-info"></button>`;
      }
    })} ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      Object_1.assign({}, textareaprops, { value: formData.venue_faqs }),
      {
        value: ($$value) => {
          formData.venue_faqs = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: formErrors.venue_faqs }, {}, {})}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "block mb-2" }, {}, {
      default: () => {
        return `${validate_component(Checkbox, "Checkbox").$$render(
          $$result,
          { checked: hasCustomCheckout },
          {
            checked: ($$value) => {
              hasCustomCheckout = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Custom email signup message on checkout page`;
            }
          }
        )}`;
      }
    })} ${hasCustomCheckout ? `${validate_component(Input, "Input").$$render(
      $$result,
      {
        size: "full",
        placeholder: "Join the mailing list for updates",
        buttonText: "Edit",
        controlled: true,
        value: formData.email_message
      },
      {
        value: ($$value) => {
          formData.email_message = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: formErrors.email_message }, {}, {})}` : ``}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "flex mb-2" }, {}, {
      default: () => {
        return `${validate_component(Checkbox, "Checkbox").$$render(
          $$result,
          {
            class: "my-auto",
            checked: hasCustomEmail
          },
          {
            checked: ($$value) => {
              hasCustomEmail = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Custom message in booking emails`;
            }
          }
        )} <button class="ml-2 my-auto p-1" data-svelte-h="svelte-155j68h"><img class="my-auto"${add_attribute("src", MoreInfoIcon, 0)} alt="more-info"></button>`;
      }
    })} ${hasCustomEmail ? `${validate_component(Textarea, "Textarea").$$render(
      $$result,
      Object_1.assign({}, textareaprops, { value: formData.inlcude_booking_emails }),
      {
        value: ($$value) => {
          formData.inlcude_booking_emails = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ErrorMessage, "ErrorMessage").$$render(
      $$result,
      {
        message: formErrors.inlcude_booking_emails
      },
      {},
      {}
    )}` : ``}</div> <div class="mb-6">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "font-normal",
        checked: checkbox_one
      },
      {
        checked: ($$value) => {
          checkbox_one = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Ask for customer phone number during checkout`;
        }
      }
    )}</div> ${checkbox_one ? `<div class="mb-6">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "font-normal",
        checked: checkbox_two
      },
      {
        checked: ($$value) => {
          checkbox_two = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Make phone number required`;
        }
      }
    )}</div>` : ``} <div class="flex justify-end gap-4">${validate_component(Button, "Button").$$render($$result, { className: "px-6", strokebtn: true }, {}, {
      default: () => {
        return `Cancel`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { className: "px-6", type: "submit" }, {}, {
      default: () => {
        return `Create`;
      }
    })}</div></div></form> ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: disclaimerPopup, closeBtn: true }, {}, {
      default: () => {
        return `<div class="my-2" data-svelte-h="svelte-4qnj5t"><img${add_attribute("src", DisclaimerImage, 0)} alt="disclaimer-popup"></div>`;
      }
    })} ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: faqPopup, closeBtn: true }, {}, {
      default: () => {
        return `<div class="my-2" data-svelte-h="svelte-s4mrwt"><img${add_attribute("src", FAQImage, 0)} alt="faq-popup"></div>`;
      }
    })} ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: customMessagePopup, closeBtn: true }, {}, {
      default: () => {
        return `<div class="my-2" data-svelte-h="svelte-19oa3u9"><img${add_attribute("src", CustomMesageImage, 0)} alt="custom-message-popup"></div>`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ModalOne = "/_app/immutable/assets/modal_1.DB1LpCo-.png";
const ModalTwo = "/_app/immutable/assets/modal_2.CJ0CCui0.png";
let showVenueModal = false;
let showAvailRequest = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here..."
  };
  let stages = [""];
  let showAvailModal = false;
  let showSendRequest = false;
  let showCannotDeleteModal = false;
  let showDeleteModal = false;
  let form = {
    venue_name: "",
    location: "",
    phone: "",
    description: ""
  };
  z.object({
    venue_name: z.string().min(1, "Venue name is required."),
    location: z.string().min(1, "Location is required."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    // description: z
    //   .string()
    //   .min(10, "Description must be at least 10 characters.")
    //   ,
    stages: z.array(z.string().min(1, "Stage name cannot be empty."))
  });
  const errors = writable({});
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CustomModal, "CustomModal").$$render(
          $$result,
          {
            show: showAvailModal,
            size: "xl",
            closeBtn: true
          },
          {},
          {
            default: () => {
              return `<img${add_attribute("src", ModalOne, 0)} alt="modal-1"> `;
            }
          }
        )}  ${validate_component(CustomModal, "CustomModal").$$render(
          $$result,
          {
            show: showVenueModal,
            size: "full",
            closeBtn: true
          },
          {},
          {
            default: () => {
              return `<img${add_attribute("src", ModalTwo, 0)} alt="modal-2"> `;
            }
          }
        )} ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: showAvailRequest, closeBtn: true }, {}, {
          default: () => {
            return `${validate_component(AvaialRequestContent, "AvaialRequestContent").$$render($$result, {}, {}, {})}`;
          }
        })} ${validate_component(CustomModal, "CustomModal").$$render(
          $$result,
          {
            show: showSendRequest,
            closeBtn: true,
            size: "xl",
            style: "width: 600px"
          },
          {},
          {
            default: () => {
              return `${validate_component(SendRequestContent, "SendRequestContent").$$render($$result, {}, {}, {})}`;
            }
          }
        )} <p class="text-lg" data-svelte-h="svelte-45o77s">Add Venue</p> <form class="my-5"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "venue_name", class: "block mb-2" }, {}, {
          default: () => {
            return `Venue name`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "venue_name",
            size: "full",
            placeholder: "Bar Lubitsh",
            buttonText: "Edit",
            controlled: true,
            value: form.venue_name
          },
          {
            value: ($$value) => {
              form.venue_name = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(ErrorMessage, "ErrorMessage").$$render(
          $$result,
          {
            message: $errors.venue_name?._errors?.[0]
          },
          {},
          {}
        )}</div> <div class="flex flex-col lg:flex-row lg:gap-4 w-full"><div class="mb-6 flex-1">${validate_component(Label, "Label").$$render($$result, { for: "location", class: "block mb-2" }, {}, {
          default: () => {
            return `Location`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "location",
            size: "full",
            placeholder: "46, Real Estate, New Work, USA",
            buttonText: "Edit",
            controlled: true,
            value: form.location
          },
          {
            value: ($$value) => {
              form.location = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: $errors.location?._errors?.[0] }, {}, {})}</div> <div class="mb-6 flex-1">${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "block mb-2" }, {}, {
          default: () => {
            return `Phone`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "phone",
            size: "full",
            placeholder: "xxx-xxx-xxxx",
            buttonText: "Edit",
            controlled: true,
            value: form.phone
          },
          {
            value: ($$value) => {
              form.phone = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: $errors.phone?._errors?.[0] }, {}, {})}</div></div> <div class="w-full mb-6">${validate_component(Label, "Label").$$render($$result, { for: "stage", class: "block mb-2" }, {}, {
          default: () => {
            return `Name of main stage(optional)`;
          }
        })} <div class="w-full flex flex-col justify-start gap-4">${each(stages, (stage, index) => {
          return `<div class="w-full flex">${validate_component(Input, "Input").$$render(
            $$result,
            {
              className: "w-full",
              key: index,
              size: "full",
              placeholder: index === 0 ? "Main stage" : `Stage ${index}`,
              buttonText: "Edit",
              controlled: true,
              value: stages[index]
            },
            {
              value: ($$value) => {
                stages[index] = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${index > 0 ? `<button class="p-4 cursor-pointer">${validate_component(TrashBinOutline, "TrashBinOutline").$$render($$result, { class: "my-auto text-red-600 " }, {}, {})} </button>` : ``}</div> ${validate_component(ErrorMessage, "ErrorMessage").$$render(
            $$result,
            {
              message: $errors.stages?._errors?.[index]?.[0]
            },
            {},
            {}
          )}`;
        })}</div> <button class="flex text-sm text-brand-Primary my-2 cursor-pointer">${validate_component(PlusOutline, "PlusOutline").$$render($$result, { size: "md", class: "mr-2" }, {}, {})}
        Add stage</button></div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "block mb-2" }, {}, {
          default: () => {
            return `Description`;
          }
        })} ${validate_component(Textarea, "Textarea").$$render(
          $$result,
          Object.assign({}, textareaprops, { buttonText: "Edit" }, { controlled: true }, { value: form.description }),
          {
            value: ($$value) => {
              form.description = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(ErrorMessage, "ErrorMessage").$$render(
          $$result,
          {
            message: $errors.description?._errors?.[0]
          },
          {},
          {}
        )}</div> <div class="mb-6">${validate_component(CustomDropzone, "CustomDropzone").$$render(
          $$result,
          {
            label: "Venue logos (optional)",
            showWider: true
          },
          {},
          {}
        )}</div> <div class="my-5">${validate_component(Accordion, "Accordion").$$render(
          $$result,
          {
            class: "rounded-none border-none",
            flush: true
          },
          {},
          {
            default: () => {
              return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                header: () => {
                  return `<span slot="header" class="text-sm font-normal flex" data-svelte-h="svelte-f8sffg"><img${add_attribute("src", CustomSettingsIcon, 0)} class="mr-2 my-auto" alt="CustomSettingsIcon"> <span class="my-auto text-black">Set Disclaimers, FAQs &amp; Custom messages</span></span>`;
                },
                default: () => {
                  return `${validate_component(SetDisclaimers, "SetDisclaimers").$$render($$result, {}, {}, {})}`;
                }
              })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                header: () => {
                  return `<span slot="header" class="text-sm font-normal flex gap-2" data-svelte-h="svelte-fnpudk"><img${add_attribute("src", AvailSettingsIcon, 0)} class="mr-2 my-auto" alt="CustomSettingsIcon"> <span class="my-auto text-black">Avails settings</span></span>`;
                },
                default: () => {
                  return `${validate_component(AvailsSettings, "AvailsSettings").$$render($$result, {}, {}, {})}`;
                }
              })} `;
            }
          }
        )}</div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            strokebtn: true,
            className: "w-full md:w-auto"
          },
          {},
          {
            default: () => {
              return `Cancel`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            className: "w-full md:w-auto",
            type: "submit"
          },
          {},
          {
            default: () => {
              return `Save Changes`;
            }
          }
        )} ${validate_component(Button, "Button").$$render($$result, { className: "w-full md:w-auto" }, {}, {
          default: () => {
            return `Upcoming Venue`;
          }
        })} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            className: "w-full md:w-auto",
            danger: true
          },
          {},
          {
            default: () => {
              return `Delete Venue`;
            }
          }
        )}</form> ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: showCannotDeleteModal, size: "sm" }, {}, {
          default: () => {
            return `<div class="flex flex-col justify-center items-center p-2"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.2058 6C30.8921 2 25.1079 2 22.7942 6L0.814303 44C-1.49937 48 1.39273 53 6.02008 53H49.9799C54.6073 53 57.4994 48 55.1857 44L33.2058 6ZM28.1687 19C26.2321 19 24.6622 20.567 24.6622 22.5V31.5C24.6622 33.433 26.2321 35 28.1687 35C30.1053 35 31.6752 33.433 31.6752 31.5V22.5C31.6752 20.567 30.1053 19 28.1687 19ZM28.1687 38C26.2321 38 24.6622 39.567 24.6622 41.5C24.6622 43.433 26.2321 45 28.1687 45C30.1053 45 31.6752 43.433 31.6752 41.5C31.6752 39.567 30.1053 38 28.1687 38Z" fill="#FF922E"></path></svg> <p class="my-5 text-lg" data-svelte-h="svelte-x3o19o">Cannot delete</p> <span class="text-sm font-light my-1 text-center" data-svelte-h="svelte-kyw9te">You cannot delete a venue with upcoming events. You must move these
        events to another venue or delete them before you can delete this venue.</span> ${validate_component(Button, "Button").$$render($$result, { className: "w-full mt-8" }, {}, {
              default: () => {
                return `Ok`;
              }
            })}</div>`;
          }
        })} ${validate_component(CustomModal, "CustomModal").$$render($$result, { show: showDeleteModal, size: "sm" }, {}, {
          default: () => {
            return `<div class="flex flex-col justify-center items-center p-2"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.2058 6C30.8921 2 25.1079 2 22.7942 6L0.814303 44C-1.49937 48 1.39273 53 6.02008 53H49.9799C54.6073 53 57.4994 48 55.1857 44L33.2058 6ZM28.1687 19C26.2321 19 24.6622 20.567 24.6622 22.5V31.5C24.6622 33.433 26.2321 35 28.1687 35C30.1053 35 31.6752 33.433 31.6752 31.5V22.5C31.6752 20.567 30.1053 19 28.1687 19ZM28.1687 38C26.2321 38 24.6622 39.567 24.6622 41.5C24.6622 43.433 26.2321 45 28.1687 45C30.1053 45 31.6752 43.433 31.6752 41.5C31.6752 39.567 30.1053 38 28.1687 38Z" fill="#FF922E"></path></svg> <p class="my-5 text-lg" data-svelte-h="svelte-1w84uyn">Are you sure?</p> <span class="text-sm font-light my-1 text-center" data-svelte-h="svelte-1ou6v33">This will delete the venue, all sales and event data, and remove it
        from all associated performers’ portals.</span> <div class="w-full flex gap-2">${validate_component(Button, "Button").$$render(
              $$result,
              {
                className: "w-full mt-8",
                strokebtn: true
              },
              {},
              {
                default: () => {
                  return `Cancel`;
                }
              }
            )} ${validate_component(Button, "Button").$$render($$result, { className: "w-full mt-8", danger: true }, {}, {
              default: () => {
                return `Delete Venue`;
              }
            })}</div></div>`;
          }
        })} `;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_errors();
  return $$rendered;
});
export {
  Page as default
};
