import { c as create_ssr_component, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { B as Badge } from "../../../chunks/Badge.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as CustomDropdown } from "../../../chunks/CustomDropdown.js";
const crossIcon = "data:image/svg+xml,%3csvg%20width='13'%20height='12'%20viewBox='0%200%2013%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Subtract'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.5%200C3.18629%200%200.5%202.68629%200.5%206C0.5%209.31371%203.18629%2012%206.5%2012C9.81371%2012%2012.5%209.31371%2012.5%206C12.5%202.68629%209.81371%200%206.5%200ZM5.03033%203.46967C4.73744%203.17678%204.26256%203.17678%203.96967%203.46967C3.67678%203.76256%203.67678%204.23744%203.96967%204.53033L5.43934%206L3.96967%207.46967C3.67678%207.76256%203.67678%208.23744%203.96967%208.53033C4.26256%208.82322%204.73744%208.82322%205.03033%208.53033L6.5%207.06066L7.96967%208.53033C8.26256%208.82322%208.73744%208.82322%209.03033%208.53033C9.32322%208.23744%209.32322%207.76256%209.03033%207.46967L7.56066%206L9.03033%204.53033C9.32322%204.23744%209.32322%203.76256%209.03033%203.46967C8.73744%203.17678%208.26256%203.17678%207.96967%203.46967L6.5%204.93934L5.03033%203.46967Z'%20fill='%23FF6666'/%3e%3c/svg%3e";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedDaysNumber = null;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex justify-between"><p class="text-xl" data-svelte-h="svelte-15hb8ek">Upload CSV</p>  ${validate_component(Button, "Button").$$render($$result, { className: "my-auto px-6" }, {}, {
          default: () => {
            return `Next`;
          }
        })}</div> <p class="w-3/4 text-sm text-gray-500 my-4" data-svelte-h="svelte-16zszhq">Its important for your deliverability that everyone you send to has given
    you explicit permission to email them. Pleased <a href="#" class="text-blue-500 font-medium">read our policy</a> for more details</p> <div class="flex justify-between my-5"><div class="max-w-sm flex bg-orange-100 ring-1 ring-orange-400 p-4 rounded-lg" data-svelte-h="svelte-qorh7m"><svg class="mr-3 my-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0820312 9.9987C0.0820312 4.52187 4.52187 0.0820312 9.9987 0.0820312C15.4755 0.0820312 19.9154 4.52187 19.9154 9.9987C19.9154 15.4755 15.4755 19.9154 9.9987 19.9154C4.52187 19.9154 0.0820312 15.4755 0.0820312 9.9987ZM9.9987 1.58203C5.3503 1.58203 1.58203 5.3503 1.58203 9.9987C1.58203 14.6471 5.3503 18.4154 9.9987 18.4154C14.647 18.4154 18.4154 14.647 18.4154 9.9987C18.4154 5.3503 14.6471 1.58203 9.9987 1.58203ZM10.1432 8.35549C10.3511 8.38344 10.6234 8.45619 10.8531 8.6859C11.0828 8.91558 11.1556 9.18777 11.1836 9.39581C11.2072 9.57179 11.2071 9.77911 11.207 9.96568V9.96571L11.207 9.9987V14.582C11.207 14.9962 10.8712 15.332 10.457 15.332C10.0428 15.332 9.70703 14.9962 9.70703 14.582V9.9987C9.70703 9.93548 9.70702 9.88092 9.70667 9.8324C9.65814 9.83205 9.60358 9.83203 9.54037 9.83203C9.12615 9.83203 8.79037 9.49624 8.79037 9.08203C8.79037 8.66782 9.12615 8.33203 9.54037 8.33203L9.57335 8.33202H9.57337C9.75996 8.33194 9.96725 8.33184 10.1432 8.35549ZM10.2279 4.41536C9.67558 4.41536 9.22787 4.86308 9.22787 5.41536C9.22787 5.96765 9.67558 6.41536 10.2279 6.41536H10.2361C10.7884 6.41536 11.2361 5.96765 11.2361 5.41536C11.2361 4.86308 10.7884 4.41536 10.2361 4.41536H10.2279Z" fill="black"></path></svg> <span class="my-auto font-normal">13 unmapped fields detected</span></div> ${validate_component(Button, "Button").$$render($$result, { strokebtn: true, className: "my-auto" }, {}, {
          default: () => {
            return `Skip unmapped`;
          }
        })}</div> <div class="flex flex-col border ring-1 ring-gray-200 rounded-lg"><div class="flex justify-between px-4 py-3 bg-gray-50"><div class="flex flex-col my-auto"><span class="text-lg font-light" data-svelte-h="svelte-dd7u37">Name</span> ${validate_component(Badge, "Badge").$$render(
          $$result,
          {
            className: "block my-3",
            size: "large",
            status: "danger",
            icon: crossIcon
          },
          {},
          {
            default: () => {
              return `Unmapped`;
            }
          }
        )}</div> <div class="flex gap-4 my-auto">${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "font-light text-md" }, {}, {
          default: () => {
            return `Skip column`;
          }
        })} <div class="flex flex-col"><span class="my-2 tex-sm" data-svelte-h="svelte-nmaa6w">Field mapped to:</span> ${validate_component(CustomDropdown, "CustomDropdown").$$render(
          $$result,
          {
            options: [],
            placeholder: "Select a field",
            selected: selectedDaysNumber
          },
          {
            selected: ($$value) => {
              selectedDaysNumber = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div> ${each(Array(5).fill(5), (arr) => {
          return `<span class="p-4 border-b text-sm text-gray-500 font-light hover:bg-gray-50" data-svelte-h="svelte-1aqhhzj">The best comdey club</span>`;
        })} <span class="p-4 text-sm text-blue-500 font-medium" data-svelte-h="svelte-j9pmbb">Show All</span></div> <div class="flex flex-col border ring-1 ring-gray-200 rounded-lg mt-5"><div class="flex justify-between px-4 py-3 bg-gray-50"><div class="flex flex-col my-auto"><span class="text-lg font-light" data-svelte-h="svelte-naljxn">Website</span> ${validate_component(Badge, "Badge").$$render(
          $$result,
          {
            className: "block my-3",
            size: "large",
            status: "danger",
            icon: crossIcon
          },
          {},
          {
            default: () => {
              return `Unmapped`;
            }
          }
        )}</div> <div class="flex gap-4 my-auto">${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "font-light text-md" }, {}, {
          default: () => {
            return `Skip column`;
          }
        })} <div class="flex flex-col"><span class="my-2 tex-sm" data-svelte-h="svelte-nmaa6w">Field mapped to:</span> ${validate_component(CustomDropdown, "CustomDropdown").$$render(
          $$result,
          {
            options: [],
            placeholder: "Select a field",
            selected: selectedDaysNumber
          },
          {
            selected: ($$value) => {
              selectedDaysNumber = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div> ${each(Array(5).fill(5), (arr) => {
          return `<span class="p-4 border-b text-sm text-gray-500 font-light hover:bg-gray-50" data-svelte-h="svelte-1aqhhzj">The best comdey club</span>`;
        })} <span class="p-4 text-sm text-blue-500 font-medium" data-svelte-h="svelte-j9pmbb">Show All</span></div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
