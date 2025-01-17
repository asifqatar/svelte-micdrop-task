import { c as create_ssr_component, h as compute_rest_props, s as setContext, b as add_attribute, i as spread, k as escape_object, j as escape_attribute_value, g as getContext, a as subscribe, d as each, v as validate_component } from "../../../chunks/ssr.js";
import "clsx";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as CustomDropzone, E as ErrorMessage, T as Textarea } from "../../../chunks/ErrorMessage.js";
import { w as writable } from "../../../chunks/index.js";
import { L as Label } from "../../../chunks/Label.js";
import { I as Input } from "../../../chunks/Input2.js";
import { z } from "zod";
import { twMerge, twJoin } from "tailwind-merge";
import { A as Add, T as Tabs, a as TabItem } from "../../../chunks/add-main.js";
import { B as Badge } from "../../../chunks/Badge.js";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "divClass",
    "striped",
    "hoverable",
    "noborder",
    "shadow",
    "color",
    "customeColor",
    "items",
    "filter",
    "placeholder",
    "innerDivClass",
    "searchClass",
    "svgDivClass",
    "svgClass",
    "inputClass"
  ]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  let { customeColor = "" } = $$props;
  let { items = [] } = $$props;
  let { filter = null } = $$props;
  let { placeholder = "Search" } = $$props;
  let { innerDivClass = "p-4" } = $$props;
  let { searchClass = "relative mt-1" } = $$props;
  let { svgDivClass = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" } = $$props;
  let { svgClass = "w-5 h-5 text-gray-500 dark:text-gray-400" } = $$props;
  let { inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let searchTerm = "";
  let inputCls = twMerge(inputClass, $$props.classInput);
  let svgDivCls = twMerge(svgDivClass, $$props.classSvgDiv);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  const searchTermStore = writable(searchTerm);
  const filterStore = writable(filter);
  setContext("searchTerm", searchTermStore);
  setContext("filter", filterStore);
  setContext("sorter", writable(null));
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0) $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0) $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0) $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.customeColor === void 0 && $$bindings.customeColor && customeColor !== void 0) $$bindings.customeColor(customeColor);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0) $$bindings.innerDivClass(innerDivClass);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0) $$bindings.searchClass(searchClass);
  if ($$props.svgDivClass === void 0 && $$bindings.svgDivClass && svgDivClass !== void 0) $$bindings.svgDivClass(svgDivClass);
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0) $$bindings.svgClass(svgClass);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0) $$bindings.inputClass(inputClass);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  {
    setContext("items", items);
  }
  {
    searchTermStore.set(searchTerm);
  }
  {
    {
      if (filter) filterStore.set(filter);
    }
  }
  return `<div${add_attribute("class", twJoin(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}>${filter ? `${slots.search ? slots.search({}) : ` <div${add_attribute("class", innerDivClass, 0)}><label for="table-search" class="sr-only" data-svelte-h="svelte-1m8vpa4">Search</label> <div${add_attribute("class", searchClass, 0)}><div${add_attribute("class", svgDivCls, 0)}>${slots.svgSearch ? slots.svgSearch({}) : ` <svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> `}</div> <input type="text" id="table-search"${add_attribute("class", inputCls, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", searchTerm, 0)}></div> ${slots.header ? slots.header({}) : ``}</div> `}` : ``} <table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div> `;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let filtered;
  let sorted;
  let $$restProps = compute_rest_props($$props, ["tableBodyClass"]);
  let $sorter, $$unsubscribe_sorter;
  let $searchTerm, $$unsubscribe_searchTerm;
  let $filter, $$unsubscribe_filter;
  let { tableBodyClass = void 0 } = $$props;
  let filter = getContext("filter");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  let searchTerm = getContext("searchTerm");
  $$unsubscribe_searchTerm = subscribe(searchTerm, (value) => $searchTerm = value);
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0) $$bindings.tableBodyClass(tableBodyClass);
  items = getContext("items") || [];
  filtered = $filter ? items.filter((item) => $filter(item, $searchTerm)) : items;
  sorted = $sorter ? filtered.toSorted((a, b) => $sorter.sortDirection * $sorter.sort(a, b)) : filtered;
  $$unsubscribe_sorter();
  $$unsubscribe_searchTerm();
  $$unsubscribe_filter();
  return `<tbody${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tableBodyClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``} ${each(sorted, (item) => {
    return `${slots.row ? slots.row({ item }) : ``}`;
  })}</tbody> `;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0) $$bindings.tdClass(tdClass);
  tdClassfinal = twMerge(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `<td${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tdClassfinal)
      }
    ],
    {}
  )}>${$$props.onclick ? `<button>${slots.default ? slots.default({}) : ``}</button>` : `${slots.default ? slots.default({}) : ``}`}</td> `;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$props.class
  ]);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr> `;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0) $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0) $$bindings.defaultRow(defaultRow);
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead> `;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding", "sort", "defaultDirection", "defaultSort", "direction"]);
  let $sorter, $$unsubscribe_sorter;
  let { padding = "px-6 py-3" } = $$props;
  let { sort = null } = $$props;
  let { defaultDirection = "asc" } = $$props;
  let { defaultSort = false } = $$props;
  let { direction = defaultSort ? defaultDirection : null } = $$props;
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  let sortId = Math.random().toString(36).substring(2);
  if (defaultSort) {
    sortItems();
  }
  function sortItems() {
    if (!sort || !sorter) return;
    sorter.update((sorter2) => {
      return {
        id: sortId,
        sort,
        sortDirection: sorter2?.id === sortId ? -sorter2.sortDirection : defaultDirection === "asc" ? 1 : -1
      };
    });
  }
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0) $$bindings.sort(sort);
  if ($$props.defaultDirection === void 0 && $$bindings.defaultDirection && defaultDirection !== void 0) $$bindings.defaultDirection(defaultDirection);
  if ($$props.defaultSort === void 0 && $$bindings.defaultSort && defaultSort !== void 0) $$bindings.defaultSort(defaultSort);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  direction = $sorter?.id === sortId ? $sorter.sortDirection === 1 ? "asc" : "desc" : null;
  $$unsubscribe_sorter();
  return `${sort && sorter ? `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-sort": escape_attribute_value(direction ? `${direction}ending` : void 0)
      }
    ],
    {}
  )}><button${add_attribute("class", twMerge("w-full text-left", "after:absolute after:pl-3", direction === "asc" && 'after:content-["▲"]', direction === "desc" && 'after:content-["▼"]', padding), 0)}>${slots.default ? slots.default({}) : ``}</button></th>` : `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>`} `;
});
const Profile_tab_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let form = {
    organization_name: "",
    email_address: "",
    phone: "",
    location: "",
    description: ""
  };
  z.object({
    organization_name: z.string().min(1, "Organization name is required."),
    email_address: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    location: z.string().min(1, "Location is required."),
    description: z.string().min(10, "Description must be at least 10 characters.")
  });
  const errors = writable({});
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here..."
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div>${validate_component(CustomDropzone, "CustomDropzone").$$render($$result, { label: "Upload logo", showWider: true }, {}, {})} <form class="my-5"><div class="mb-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "organization_name",
        class: "block mb-2"
      },
      {},
      {
        default: () => {
          return `Organization name`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "organization_name",
        size: "lg",
        placeholder: "Jetpack",
        value: form.organization_name
      },
      {
        value: ($$value) => {
          form.organization_name = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$errors.organization_name ? `${validate_component(ErrorMessage, "ErrorMessage").$$render(
      $$result,
      {
        message: $errors.organization_name._errors[0]
      },
      {},
      {}
    )}` : ``} <span class="text-xs text-gray-500" data-svelte-h="svelte-hk90kh">Visible to members</span></div> <div class="flex flex-col lg:flex-row lg:gap-4 w-full"><div class="mb-6 flex-1">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "email_address",
        class: "block mb-2"
      },
      {},
      {
        default: () => {
          return `Email address`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "email_address",
        size: "lg",
        placeholder: "name@example.com",
        class: "w-full",
        value: form.email_address
      },
      {
        value: ($$value) => {
          form.email_address = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$errors.email_address ? `${validate_component(ErrorMessage, "ErrorMessage").$$render(
      $$result,
      {
        message: $errors.email_address._errors[0]
      },
      {},
      {}
    )}` : ``}</div> <div class="mb-6 flex-1">${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "block mb-2" }, {}, {
      default: () => {
        return `Phone`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "phone",
        size: "lg",
        placeholder: "xxx-xxx-xxxx",
        class: "w-full",
        value: form.phone
      },
      {
        value: ($$value) => {
          form.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$errors.phone ? `${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: $errors.phone._errors[0] }, {}, {})}` : ``}</div></div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "location", class: "block mb-2" }, {}, {
      default: () => {
        return `Location`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "location",
        size: "lg",
        placeholder: "46, Real Estate, New York, USA",
        value: form.location
      },
      {
        value: ($$value) => {
          form.location = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$errors.location ? `${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: $errors.location._errors[0] }, {}, {})}` : ``}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "block mb-2" }, {}, {
      default: () => {
        return `Description`;
      }
    })} ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      Object.assign({}, textareaprops, { value: form.description }),
      {
        value: ($$value) => {
          form.description = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$errors.description ? `${validate_component(ErrorMessage, "ErrorMessage").$$render($$result, { message: $errors.description._errors[0] }, {}, {})}` : ``}</div> ${validate_component(Button, "Button").$$render(
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
    )}</form></div>`;
  } while (!$$settled);
  $$unsubscribe_errors();
  return $$rendered;
});
const UserIcon = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.83692%209.03127C3.01164%209.52267%200.847795%2010.5261%202.16572%2011.7817C2.80952%2012.395%203.52654%2012.8337%204.42801%2012.8337H9.57198C10.4735%2012.8337%2011.1905%2012.395%2011.8343%2011.7817C13.1522%2010.5261%2010.9884%209.52267%2010.1631%209.03127C8.2278%207.8789%205.7722%207.8789%203.83692%209.03127Z'%20stroke='%230284FE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.625%203.79199C9.625%205.24174%208.44976%206.41699%207%206.41699C5.55025%206.41699%204.375%205.24174%204.375%203.79199C4.375%202.34225%205.55025%201.16699%207%201.16699C8.44976%201.16699%209.625%202.34225%209.625%203.79199Z'%20stroke='%230284FE'%20stroke-width='1.5'/%3e%3c/svg%3e";
const MoreIcon = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.40078%209.0002C5.40078%209.47759%205.21114%209.93542%204.87357%2010.273C4.53601%2010.6106%204.07817%2010.8002%203.60078%2010.8002C3.12339%2010.8002%202.66555%2010.6106%202.32799%2010.273C1.99042%209.93542%201.80078%209.47759%201.80078%209.0002C1.80078%208.52281%201.99042%208.06497%202.32799%207.7274C2.66555%207.38984%203.12339%207.2002%203.60078%207.2002C4.07817%207.2002%204.53601%207.38984%204.87357%207.7274C5.21114%208.06497%205.40078%208.52281%205.40078%209.0002ZM10.8008%209.0002C10.8008%209.47759%2010.6111%209.93542%2010.2736%2010.273C9.93601%2010.6106%209.47817%2010.8002%209.00078%2010.8002C8.52339%2010.8002%208.06556%2010.6106%207.72799%2010.273C7.39042%209.93542%207.20078%209.47759%207.20078%209.0002C7.20078%208.52281%207.39042%208.06497%207.72799%207.7274C8.06556%207.38984%208.52339%207.2002%209.00078%207.2002C9.47817%207.2002%209.93601%207.38984%2010.2736%207.7274C10.6111%208.06497%2010.8008%208.52281%2010.8008%209.0002ZM14.4008%2010.8002C14.8782%2010.8002%2015.336%2010.6106%2015.6736%2010.273C16.0111%209.93542%2016.2008%209.47759%2016.2008%209.0002C16.2008%208.52281%2016.0111%208.06497%2015.6736%207.7274C15.336%207.38984%2014.8782%207.2002%2014.4008%207.2002C13.9234%207.2002%2013.4656%207.38984%2013.128%207.7274C12.7904%208.06497%2012.6008%208.52281%2012.6008%209.0002C12.6008%209.47759%2012.7904%209.93542%2013.128%2010.273C13.4656%2010.6106%2013.9234%2010.8002%2014.4008%2010.8002Z'%20fill='%23666C79'/%3e%3c/svg%3e";
const Team_tab_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tableView;
  const array = Array(10).fill(10);
  let teamUSER = [...array];
  tableView = "user";
  return `<div><div class="w-full p-2 flex justify-between">${validate_component(Input, "Input").$$render(
    $$result,
    {
      class: "w-2/4",
      id: "search",
      size: "lg",
      placeholder: "search"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render($$result, { className: "md:w-auto", beforeIcon: Add }, {}, {
    default: () => {
      return `Invite User`;
    }
  })}</div> <div class="flex gap-4 my-5"><button class="flex justify-center bg-blue-100 text-sm text-brand-Primary p-3 px-5 rounded-full" data-svelte-h="svelte-167yamh"><img${add_attribute("src", UserIcon, 0)} alt="Before Icon here" class="mr-2 my-auto">
      Users</button> <button class="flex justify-center bg-blue-100 text-sm text-brand-Primary p-3 px-5 rounded-full" data-svelte-h="svelte-1hcmu2o"><img${add_attribute("src", UserIcon, 0)} alt="Before Icon here" class="mr-2 my-auto">
      Role</button></div> ${tableView === "user" ? `${validate_component(Table, "Table").$$render($$result, { hoverable: true, items: teamUSER }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render(
            $$result,
            {
              sort: (a, b) => a.type.localeCompare(b.type)
            },
            {},
            {
              default: () => {
                return `Name`;
              }
            }
          )} ${validate_component(TableHeadCell, "TableHeadCell").$$render(
            $$result,
            {
              sort: (a, b) => a.make - b.make,
              defaultDirection: "desc"
            },
            {},
            {
              default: () => {
                return `Email address`;
              }
            }
          )} ${validate_component(TableHeadCell, "TableHeadCell").$$render(
            $$result,
            {
              sort: (a, b) => a.make - b.make,
              defaultDirection: "desc"
            },
            {},
            {
              default: () => {
                return `Role`;
              }
            }
          )} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `<span class="sr-only" data-svelte-h="svelte-1fjv44v">Buy</span>`;
            }
          })}`;
        }
      })} ${validate_component(TableBody, "TableBody").$$render($$result, { tableBodyClass: "divide-y" }, {}, {
        row: ({ teamUSER: teamUSER2 }) => {
          return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { slot: "row" }, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Albert Flores`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "font-light" }, {}, {
                default: () => {
                  return `rrian@yandex.ru`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "font-light" }, {}, {
                default: () => {
                  return `Admin`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500" data-svelte-h="svelte-liw0o"><img${add_attribute("src", MoreIcon, 0)} alt="more-actions" class="mr-2"></a>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``} ${tableView === "role" ? `${validate_component(Table, "Table").$$render($$result, { hoverable: true, items: teamUSER }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render(
            $$result,
            {
              sort: (a, b) => a.type.localeCompare(b.type)
            },
            {},
            {
              default: () => {
                return `Name`;
              }
            }
          )} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `<span class="sr-only" data-svelte-h="svelte-1fjv44v">Buy</span>`;
            }
          })}`;
        }
      })} ${validate_component(TableBody, "TableBody").$$render($$result, { tableBodyClass: "divide-y" }, {}, {
        row: ({ teamUSER: teamUSER2 }) => {
          return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { slot: "row" }, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "font-light" }, {}, {
                default: () => {
                  return `Admin`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500" data-svelte-h="svelte-liw0o"><img${add_attribute("src", MoreIcon, 0)} alt="more-actions" class="mr-2"></a>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``}</div>`;
});
const Venue_tab_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const array = Array(10).fill(10);
  let items = [...array];
  return `<div><div class="w-full p-2 flex justify-end"><a href="/settings/venue/add">${validate_component(Button, "Button").$$render(
    $$result,
    {
      className: "w-full md:w-auto",
      beforeIcon: Add
    },
    {},
    {
      default: () => {
        return `Add Venue`;
      }
    }
  )}</a></div> ${validate_component(Table, "Table").$$render($$result, { hoverable: true, items }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Venue`;
            }
          })} ${validate_component(TableHeadCell, "TableHeadCell").$$render(
            $$result,
            {
              sort: (a, b) => a.type.localeCompare(b.type)
            },
            {},
            {
              default: () => {
                return `Location`;
              }
            }
          )} ${validate_component(TableHeadCell, "TableHeadCell").$$render(
            $$result,
            {
              sort: (a, b) => a.make - b.make,
              defaultDirection: "desc"
            },
            {},
            {
              default: () => {
                return `Stages`;
              }
            }
          )} ${validate_component(TableHeadCell, "TableHeadCell").$$render(
            $$result,
            {
              sort: (a, b) => a.make - b.make,
              defaultDirection: "desc"
            },
            {},
            {
              default: () => {
                return `Next event`;
              }
            }
          )} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `<span class="sr-only" data-svelte-h="svelte-1fjv44v">Buy</span>`;
            }
          })}`;
        }
      })} ${validate_component(TableBody, "TableBody").$$render($$result, { tableBodyClass: "divide-y" }, {}, {
        row: ({ item }) => {
          return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { slot: "row" }, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Jetpack Comedy`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Los Angeles`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `1`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Badge, "Badge").$$render($$result, { size: "large", status: "success" }, {}, {
                    default: () => {
                      return `Feb 1, 2024`;
                    }
                  })}`;
                }
              })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500" data-svelte-h="svelte-os61k"><img${add_attribute("src", MoreIcon, 0)} alt="more-actions" class="mr-2"></a>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<p class="text-xl" data-svelte-h="svelte-dactip">Organization Profile</p> <div class="my-5">${validate_component(Tabs, "Tabs").$$render(
        $$result,
        {
          tabStyle: "underline",
          contentClass: "bg-white p-4"
        },
        {},
        {
          default: () => {
            return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Profile" }, {}, {
              default: () => {
                return `${validate_component(Profile_tab_content, "ProfileTabContent").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Team" }, {}, {
              default: () => {
                return `${validate_component(Team_tab_content, "TeamTabContent").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Venue" }, {}, {
              default: () => {
                return `${validate_component(Venue_tab_content, "VenueTabContent").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Billing" }, {}, {
              default: () => {
                return `<p class="text-sm text-gray-500 dark:text-gray-400" data-svelte-h="svelte-oqxve3"><b>Users:</b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>`;
              }
            })}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
