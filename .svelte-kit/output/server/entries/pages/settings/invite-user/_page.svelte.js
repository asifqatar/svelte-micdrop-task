import { c as create_ssr_component, h as compute_rest_props, i as spread, k as escape_object, j as escape_attribute_value, e as escape, d as each, b as add_attribute, f as createEventDispatcher, v as validate_component } from "../../../../chunks/ssr.js";
import { z } from "zod";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { I as Input } from "../../../../chunks/Input2.js";
import { L as Label } from "../../../../chunks/Label.js";
import { twMerge } from "tailwind-merge";
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 disabled:text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:disabled:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0) $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0) $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled ${(value === void 0 ? true : void 0) ? "selected" : ""} value="">${escape(placeholder)}</option>` : ``}${items && items.length > 0 ? `${each(items, ({ value: itemValue, name, disabled }) => {
    return `<option ${disabled ? "disabled" : ""}${add_attribute("value", itemValue, 0)} ${(itemValue === value ? true : void 0) ? "selected" : ""}>${escape(name)}</option>`;
  })}` : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const css = {
  code: ".dropdown-menu.svelte-krnkml::-webkit-scrollbar{display:none}",
  map: '{"version":3,"file":"EventSearch.svelte","sources":["EventSearch.svelte"],"sourcesContent":["<script>\\n  import { createEventDispatcher } from \\"svelte\\";\\n  export let placeholder = \\"\\";\\n  let searchQuery = \\"\\";\\n  let options = [\\n    {\\n      id: 1,\\n      title: \\"Jetpack Comedy Show: Big Comics, Small Venue\\",\\n      name: \\"Jetpack Comedy\\",\\n      date: \\"Thu, Oct 24\\",\\n      time: \\"11:00PM\\",\\n      status: \\"Live\\",\\n    },\\n    {\\n      id: 2,\\n      title: \\"Jakarta vs. Everybody Showdown\\",\\n      name: \\"Jetpack Comedy\\",\\n      date: \\"Thu, Oct 24\\",\\n      time: \\"11:00PM\\",\\n      status: \\"Draft\\",\\n    },\\n    // Add more options as needed\\n  ];\\n\\n  const dispatcher = createEventDispatcher();\\n\\n  const selectOption = (option) => {\\n    dispatcher(\\"select\\", option);\\n    searchQuery = \\"\\";\\n  };\\n\\n  // Filter options based on the search query\\n  $: filteredOptions = options.filter((option) =>\\n    option.title.toLowerCase().includes(searchQuery.toLowerCase())\\n  );\\n<\/script>\\n\\n<div class=\\"w-full my-3\\">\\n  <!-- <svg\\n    width=\\"34\\"\\n    height=\\"34\\"\\n    viewBox=\\"0 0 34 34\\"\\n    fill=\\"none\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n  >\\n    <path\\n      d=\\"M24.5156 24.4961L30.6429 30.6234\\"\\n      stroke=\\"#666C79\\"\\n      stroke-width=\\"2.45091\\"\\n      stroke-linecap=\\"round\\"\\n      stroke-linejoin=\\"round\\"\\n    />\\n    <path\\n      d=\\"M27.9153 15.6471C27.9153 8.87913 22.4289 3.39258 15.6608 3.39258C8.8928 3.39258 3.40625 8.87913 3.40625 15.6471C3.40625 22.4152 8.8928 27.9017 15.6608 27.9017C22.4289 27.9017 27.9153 22.4152 27.9153 15.6471Z\\"\\n      stroke=\\"#666C79\\"\\n      stroke-width=\\"2.45091\\"\\n      stroke-linejoin=\\"round\\"\\n    />\\n  </svg> -->\\n\\n  <input\\n    type=\\"text\\"\\n    bind:value={searchQuery}\\n    {placeholder}\\n    class=\\"w-full p-4 bg-gray-50 border border-gray-300 rounded-md outline-none\\"\\n  />\\n\\n  {#if searchQuery}\\n    <ul class=\\"dropdown-menu mt-2 rounded max-h-40 overflow-y-auto shadow-md\\">\\n      {#if filteredOptions.length > 0}\\n        {#each filteredOptions as option}\\n          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n          <!-- svelte-ignore a11y-click-events-have-key-events -->\\n          <li\\n            class=\\"p-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center\\"\\n            on:click={() => selectOption(option)}\\n          >\\n            <div class=\\"flex flex-col gap-1\\">\\n              <p class=\\"text-sm font-medium\\">\\n                {option.title}<span class=\\"text-green-500 text-sm ml-2\\"\\n                  >({option.status})</span\\n                >\\n              </p>\\n              <span class=\\"text-sm text-gray-500\\">{option.name}</span>\\n              <p class=\\"text-xs text-gray-500\\">{option.date} • {option.time}</p>\\n            </div>\\n            <span class=\\"text-blue-500 text-sm ml-2\\">Select</span>\\n          </li>\\n        {/each}\\n      {:else}\\n        <li class=\\"p-4 py-6 text-gray-500\\">\\n          Event not found. Please try another keyword and make sure the event is\\n          yours.\\n        </li>\\n      {/if}\\n    </ul>\\n  {/if}\\n</div>\\n\\n<style>\\n  .dropdown-menu::-webkit-scrollbar {\\n    display: none;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoGE,4BAAc,mBAAoB,CAChC,OAAO,CAAE,IACX"}'
};
const EventSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "" } = $$props;
  let searchQuery = "";
  let options = [
    {
      id: 1,
      title: "Jetpack Comedy Show: Big Comics, Small Venue",
      name: "Jetpack Comedy",
      date: "Thu, Oct 24",
      time: "11:00PM",
      status: "Live"
    },
    {
      id: 2,
      title: "Jakarta vs. Everybody Showdown",
      name: "Jetpack Comedy",
      date: "Thu, Oct 24",
      time: "11:00PM",
      status: "Draft"
    }
  ];
  createEventDispatcher();
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  $$result.css.add(css);
  options.filter((option) => option.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return `<div class="w-full my-3"> <input type="text"${add_attribute("placeholder", placeholder, 0)} class="w-full p-4 bg-gray-50 border border-gray-300 rounded-md outline-none"${add_attribute("value", searchQuery, 0)}> ${``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFormValid;
  z.object({
    email: z.string().email("Invalid email address"),
    role: z.string().nonempty("User role is required"),
    hasLimitedAccess: z.boolean()
  });
  let userForms = [
    {
      id: 1,
      email: "",
      role: "",
      hasLimitedAccess: false,
      selectedEvents: [],
      errors: {}
      // To store validation errors
    }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isFormValid = userForms.every((form) => Object.keys(form.errors).length === 0 && form.email && form.role);
    {
      console.log("isFormValid", userForms, isFormValid);
    }
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<h2 class="text-2xl" data-svelte-h="svelte-1vsaqw2">Invite Users</h2> <span class="text-sm text-gray-500" data-svelte-h="svelte-d7trrx">Enter the email addresses of the users you’d like to add, then choose the
    role they should have within your organization.</span> ${each(userForms, (form, index) => {
          return `<div class="flex flex-col p-5 my-5 rounded"><div class="w-full flex flex-col lg:flex-row gap-5 items-start"><p># ${escape(index + 1)}</p> <div class="w-full flex flex-col mb-5">${validate_component(Label, "Label").$$render(
            $$result,
            {
              for: `email-${index}`,
              class: "block mb-2"
            },
            {},
            {
              default: () => {
                return `User email`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              id: `email-${index}`,
              type: "email",
              size: "lg",
              placeholder: "Enter email address",
              value: form.email
            },
            {
              value: ($$value) => {
                form.email = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${form.errors.email ? `<p class="text-red-500 text-sm mt-1">${escape(form.errors.email)}</p>` : ``} <div class="my-5">${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `User role
              ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  class: "mt-2 p-4",
                  placeholder: "Select a role",
                  items: [
                    { value: "co-host", name: "Co-host" },
                    { value: "host", name: "Host" }
                  ],
                  value: form.role
                },
                {
                  value: ($$value) => {
                    form.role = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} `;
            }
          })} ${form.errors.role ? `<p class="text-red-500 text-sm mt-1">${escape(form.errors.role)}</p>` : ``}</div> ${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            { checked: form.hasLimitedAccess },
            {
              checked: ($$value) => {
                form.hasLimitedAccess = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Limited event access
          `;
              }
            }
          )} ${form.hasLimitedAccess ? `${validate_component(EventSearch, "EventSearch").$$render($$result, { placeholder: "Select Event" }, {}, {})}` : ``}</div> ${index > 0 ? `${validate_component(Button, "Button").$$render($$result, { danger: true }, {}, {
            default: () => {
              return `Remove`;
            }
          })}` : ``}</div> ${each(form.selectedEvents, (event, i) => {
            return `<div class="flex justify-between gap-1 items-center my-3"><div><p class="font-normal">#${escape(i + 1)} ${escape(event.title)}</p> <p class="text-sm text-gray-500 my-2">${escape(event.date)} • ${escape(event.time)} </p></div> <button class="text-red-500 text-sm my-auto" data-svelte-h="svelte-gjqmp4">Remove</button> </div>`;
          })} </div>`;
        })} <hr class="my-5">  <a href="#" class="text-primary-500 my-5" data-svelte-h="svelte-qm6uie">Add more user</a> <div class="flex my-5 gap-2">${validate_component(Button, "Button").$$render($$result, { disabled: !isFormValid }, {}, {
          default: () => {
            return `Save and invite`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { strokebtn: true }, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
