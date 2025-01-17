import { c as create_ssr_component, v as validate_component, e as escape, d as each, b as add_attribute } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { A as Accordion, a as AccordionItem } from "../../../../chunks/AccordionItem.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { I as Input } from "../../../../chunks/Input2.js";
import { L as Label } from "../../../../chunks/Label.js";
import { R as ROLE_PERMISSION_LIST } from "../../../../chunks/utils.js";
import { z } from "zod";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  z.object({
    name: z.string().min(1, "Role name is required").max(50, "Role name should be less than 50 characters"),
    permissions: z.array(z.string()).nonempty("At least one permission is required")
  });
  const role_list = ROLE_PERMISSION_LIST;
  let formData = { name: "", permissions: [] };
  let errors = {};
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<p class="my-5" data-svelte-h="svelte-ns28m5">Create Role</p> <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "block mb-2" }, {}, {
          default: () => {
            return `Name`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "name",
            size: "lg",
            placeholder: "Box Office",
            value: formData.name
          },
          {
            value: ($$value) => {
              formData.name = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${errors.name ? `<p class="text-red-500 text-sm">${escape(errors.name)}</p>` : ``}</div> <p class="my-2 text-2xl text-gray-500 font-light" data-svelte-h="svelte-1usfbep">Permissions</p> ${validate_component(Accordion, "Accordion").$$render(
          $$result,
          {
            class: "rounded-none border-none",
            flush: true
          },
          {},
          {
            default: () => {
              return `${each(role_list, (role, index) => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { value: index.toString() }, {}, {
                  header: () => {
                    return `<div slot="header" class="flex">${role.icon ? `<img class="mr-4 my-auto"${add_attribute("src", role.icon, 0)}${add_attribute("alt", role.title, 0)}> ` : ``} <div class="flex flex-col"><span class="my-auto text-sm font-normal text-black">${escape(role.title)}</span> <span class="text-xs font-light">${escape(role.description)}</span></div> </div>`;
                  },
                  default: () => {
                    return `<div class="flex flex-col px-4">${each(role.checkbox, (item, index2) => {
                      return `${validate_component(Checkbox, "Checkbox").$$render(
                        $$result,
                        {
                          class: "font-normal my-2",
                          checked: formData.permissions.includes(item)
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(item)}`;
                          }
                        }
                      )}`;
                    })}</div> `;
                  }
                })}`;
              })}`;
            }
          }
        )} ${errors.permissions ? `<p class="text-red-500 text-sm">${escape(errors.permissions)}</p>` : ``} <div class="flex gap-4 my-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Save changes`;
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
