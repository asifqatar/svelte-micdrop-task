import { c as create_ssr_component, h as compute_rest_props, g as getContext, v as validate_component, b as add_attribute, n as compute_slots, a as subscribe, d as each, e as escape } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { L as Label } from "../../../../chunks/Label.js";
import { I as Input } from "../../../../chunks/Input2.js";
import { A as Add, T as Tabs, a as TabItem } from "../../../../chunks/add-main.js";
import { w as writable } from "../../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { z } from "zod";
const common = "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "group", "value", "checked", "customSize"]);
  let $$slots = compute_slots(slots);
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let { customSize = "" } = $$props;
  let background = getContext("background");
  const colors = {
    primary: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
    secondary: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",
    custom: customSize
  };
  let divClass;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0) $$bindings.customSize(customSize);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    divClass = twMerge(
      common,
      $$slots.offLabel ? "ms-3" : "",
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "primary"],
      sizes[size],
      "relative",
      $$props.classDiv
    );
    $$rendered = `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      Object.assign({}, { custom: true }, $$restProps, { class: $$props.class }, { value }, { checked }, { group }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.offLabel ? slots.offLabel({}) : ``} <span${add_attribute("class", divClass, 0)}></span> ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const AccountPage = "/_app/immutable/assets/account_page.BosA-BwW.png";
const CheckMarkIcon = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%2012C7.5913%2012%209.11742%2011.3679%2010.2426%2010.2426C11.3679%209.11742%2012%207.5913%2012%206C12%204.4087%2011.3679%202.88258%2010.2426%201.75736C9.11742%200.632141%207.5913%200%206%200C4.4087%200%202.88258%200.632141%201.75736%201.75736C0.632141%202.88258%200%204.4087%200%206C0%207.5913%200.632141%209.11742%201.75736%2010.2426C2.88258%2011.3679%204.4087%2012%206%2012ZM8.78025%205.03025C8.91687%204.8888%208.99246%204.69935%208.99076%204.5027C8.98905%204.30605%208.91017%204.11794%208.77111%203.97889C8.63206%203.83983%208.44395%203.76095%208.2473%203.75924C8.05065%203.75754%207.8612%203.83313%207.71975%203.96975L5.25%206.4395L4.28025%205.46975C4.1388%205.33313%203.94935%205.25754%203.7527%205.25924C3.55605%205.26095%203.36794%205.33983%203.22889%205.47889C3.08983%205.61794%203.01095%205.80605%203.00924%206.0027C3.00754%206.19935%203.08313%206.3888%203.21975%206.53025L4.71975%208.03025C4.8604%208.17085%205.05113%208.24984%205.25%208.24984C5.44887%208.24984%205.6396%208.17085%205.78025%208.03025L8.78025%205.03025Z'%20fill='%2315A033'/%3e%3c/svg%3e";
const FailMarkIcon = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%200C2.68629%200%200%202.68629%200%206C0%209.31371%202.68629%2012%206%2012C9.31371%2012%2012%209.31371%2012%206C12%202.68629%209.31371%200%206%200ZM4.53033%203.46967C4.23744%203.17678%203.76256%203.17678%203.46967%203.46967C3.17678%203.76256%203.17678%204.23744%203.46967%204.53033L4.93934%206L3.46967%207.46967C3.17678%207.76256%203.17678%208.23744%203.46967%208.53033C3.76256%208.82322%204.23744%208.82322%204.53033%208.53033L6%207.06066L7.46967%208.53033C7.76256%208.82322%208.23744%208.82322%208.53033%208.53033C8.82322%208.23744%208.82322%207.76256%208.53033%207.46967L7.06066%206L8.53033%204.53033C8.82322%204.23744%208.82322%203.76256%208.53033%203.46967C8.23744%203.17678%207.76256%203.17678%207.46967%203.46967L6%204.93934L4.53033%203.46967Z'%20fill='%23666C79'/%3e%3c/svg%3e";
const AccountNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $eventNotifications, $$unsubscribe_eventNotifications;
  let $performerNotifications, $$unsubscribe_performerNotifications;
  let $errors, $$unsubscribe_errors;
  z.object({
    performerNotifications: z.object({
      confirms: z.object({ email: z.boolean(), sms: z.boolean() }),
      declines: z.object({ email: z.boolean(), sms: z.boolean() }),
      cancels: z.object({ email: z.boolean(), sms: z.boolean() }),
      sendMessages: z.object({ email: z.boolean(), sms: z.boolean() }),
      allConfirmed: z.object({ email: z.boolean(), sms: z.boolean() })
    }),
    eventNotifications: z.object({
      orderCompleted: z.object({ email: z.boolean(), sms: z.boolean() }),
      sectionSoldOut: z.object({ email: z.boolean(), sms: z.boolean() }),
      eventAlmostSoldOut: z.object({ email: z.boolean(), sms: z.boolean() }),
      eventGoesPublic: z.object({ email: z.boolean(), sms: z.boolean() }),
      allPerformersConfirmed: z.object({ email: z.boolean(), sms: z.boolean() }),
      soldOut: z.object({ email: z.boolean(), sms: z.boolean() }),
      lowTicketSales: z.object({ email: z.boolean(), sms: z.boolean() })
    })
  });
  let performerNotifications = writable({
    confirms: {
      label: "Confirms",
      email: true,
      sms: false
    },
    declines: {
      label: "Declines",
      email: true,
      sms: true
    },
    cancels: {
      label: "Cancels",
      email: false,
      sms: true
    },
    sendMessages: {
      label: "Send messages",
      email: false,
      sms: false
    },
    allConfirmed: {
      label: "Leaves a roster",
      email: true,
      sms: false
    }
  });
  $$unsubscribe_performerNotifications = subscribe(performerNotifications, (value) => $performerNotifications = value);
  let eventNotifications = writable({
    orderCompleted: {
      label: "Order completed",
      email: false,
      sms: true
    },
    sectionSoldOut: {
      label: "Section sold out",
      email: true,
      sms: false
    },
    eventAlmostSoldOut: {
      label: "Event almost sold out",
      email: false,
      sms: true
    },
    soldOut: {
      label: "Sold out",
      email: true,
      sms: false
    },
    lowTicketSales: {
      label: "Low ticket sales",
      email: true,
      sms: false
    },
    eventGoesPublic: {
      label: "Event goes public",
      email: false,
      sms: true
    },
    allPerformersConfirmed: {
      label: "All performers confirmed",
      email: true,
      sms: false
    }
  });
  $$unsubscribe_eventNotifications = subscribe(eventNotifications, (value) => $eventNotifications = value);
  let errors = writable({});
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_eventNotifications();
  $$unsubscribe_performerNotifications();
  $$unsubscribe_errors();
  return `<section> <div class="mb-6"><h2 class="text-2xl font-light text-gray-500 mb-4" data-svelte-h="svelte-8xw08w">Receive notification when performer:</h2> ${each(Object.entries($performerNotifications), ([key, notification]) => {
    return `<div class="grid grid-cols-6 gap-4 items-center mb-4 border-b py-3"><span class="col-span-4">${escape(notification.label)}</span> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        checked: notification.email,
        label: "Email"
      },
      {},
      {}
    )} ${validate_component(Toggle, "Toggle").$$render($$result, { checked: notification.sms, label: "SMS" }, {}, {})}</div> ${$errors.performerNotifications?.[key]?.email ? `<p class="text-red-500 text-sm">Email: ${escape($errors.performerNotifications[key].email._errors[0])} </p>` : ``} ${$errors.performerNotifications?.[key]?.sms ? `<p class="text-red-500 text-sm">SMS: ${escape($errors.performerNotifications[key].sms._errors[0])} </p>` : ``}`;
  })}</div>  <div class="mb-6"><h2 class="text-2xl font-light text-gray-500 mb-4" data-svelte-h="svelte-ua5n92">Event notifications:</h2> ${each(Object.entries($eventNotifications), ([key, notification]) => {
    return `<div class="grid grid-cols-6 gap-4 items-center mb-4 border-b py-3"><span class="col-span-4">${escape(notification.label)}</span> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        checked: notification.email,
        label: "Email"
      },
      {},
      {}
    )} ${validate_component(Toggle, "Toggle").$$render($$result, { checked: notification.sms, label: "SMS" }, {}, {})}</div> ${$errors.eventNotifications?.[key]?.email ? `<p class="text-red-500 text-sm">Email: ${escape($errors.eventNotifications[key].email._errors[0])} </p>` : ``} ${$errors.eventNotifications?.[key]?.sms ? `<p class="text-red-500 text-sm">SMS: ${escape($errors.eventNotifications[key].sms._errors[0])} </p>` : ``}`;
  })}</div> <div class="my-4">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Save changes`;
    }
  })}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<p class="text-xl ml-2" data-svelte-h="svelte-u28ytz">Account profile</p> ${validate_component(Tabs, "Tabs").$$render(
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
                return `<section><div class="flex"><img${add_attribute("src", AccountPage, 0)} alt="account_page"> <div class="flex ml-4 my-auto gap-2">${validate_component(Button, "Button").$$render($$result, { beforeIcon: Add }, {}, {
                  default: () => {
                    return `Upload`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { strokebtn: true }, {}, {
                  default: () => {
                    return `Remove`;
                  }
                })}</div></div> <p class="text-xl text-gray-500 my-5" data-svelte-h="svelte-v6fzew">Personal details</p> <div class="flex flex-col lg:flex-row"><div class="flex lg:flex-1 flex-col"><div class="flex gap-4"><div class="w-full mb-6">${validate_component(Label, "Label").$$render($$result, { for: "first_name", class: "block mb-2" }, {}, {
                  default: () => {
                    return `First name`;
                  }
                })} ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    id: "first_name",
                    size: "lg",
                    placeholder: "Jetpack"
                  },
                  {},
                  {}
                )}</div> <div class="w-full mb-6">${validate_component(Label, "Label").$$render($$result, { for: "last_name", class: "block mb-2" }, {}, {
                  default: () => {
                    return `Last name`;
                  }
                })} ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    id: "last_name",
                    size: "lg",
                    placeholder: "Jetpack"
                  },
                  {},
                  {}
                )}</div></div> <div class="flex flex-col lg:flex-row gap-4"><div class="w-full mb-2">${validate_component(Label, "Label").$$render(
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
                    placeholder: "name@exaple.com"
                  },
                  {},
                  {}
                )}</div> <div class="w-full mb-6">${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "block mb-2" }, {}, {
                  default: () => {
                    return `Phone`;
                  }
                })} ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    id: "phone",
                    size: "lg",
                    placeholder: "xxx-xxx-xxxx"
                  },
                  {},
                  {}
                )}</div></div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "location", class: "block mb-2" }, {}, {
                  default: () => {
                    return `Location`;
                  }
                })} ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    id: "location",
                    size: "lg",
                    placeholder: "46, Real Estate, New Work, USA"
                  },
                  {},
                  {}
                )}</div> </div> <div class="flex-1 lg:p-8"></div></div> <p class="text-xl text-gray-500 my-5" data-svelte-h="svelte-1cbxepp">Change password</p> <div class="flex flex-col lg:flex-row gap-4"><div class="flex flex-col flex-1"><div class="mb-6">${validate_component(Label, "Label").$$render(
                  $$result,
                  {
                    for: "current_password",
                    class: "block mb-2"
                  },
                  {},
                  {
                    default: () => {
                      return `Current Password`;
                    }
                  }
                )} ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    id: "current_password",
                    size: "lg",
                    placeholder: "Enter your current password"
                  },
                  {},
                  {}
                )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "new_password", class: "block mb-2" }, {}, {
                  default: () => {
                    return `New Password`;
                  }
                })} ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    id: "new_password",
                    size: "lg",
                    placeholder: "Enter new password"
                  },
                  {},
                  {}
                )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render(
                  $$result,
                  {
                    for: "confirm_password",
                    class: "block mb-2"
                  },
                  {},
                  {
                    default: () => {
                      return `Confirm Password`;
                    }
                  }
                )} ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    id: "confirm_password",
                    size: "lg",
                    placeholder: "Retype new password"
                  },
                  {},
                  {}
                )}</div></div> <div class="flex flex-1 flex-col bg-gray-100 p-6 rounded-md ring-1 ring-gray-400 my-auto" data-svelte-h="svelte-1ctlmr2"><p class="text-xl font-medium">Password requirements:</p> <span class="text-sm lg:text-xl my-2 text-gray-500 font-normal">Ensure that these requirements are met:</span> <ul class="flex flex-col gap-2"><li class="flex gap-2 text-xs lg:text-md text-gray-500"><img class="my-auto"${add_attribute("src", CheckMarkIcon, 0)} alt="check_mark_icon"> <span class="my-auto">At least 10 characters (and up to 100 characters)</span></li> <li class="flex gap-2 text-xs lg:text-md text-gray-500"><img class="my-auto"${add_attribute("src", CheckMarkIcon, 0)} alt="check_mark_icon"> <span class="my-auto">At least one lowercase character</span></li> <li class="flex gap-2 text-xs lg:text-md text-gray-500"><img class="my-auto"${add_attribute("src", FailMarkIcon, 0)} alt="fail_mark_icon"> <span class="my-auto">At least one special character (! @ # ?)</span></li> <li class="flex gap-2 text-xs lg:text-md text-gray-500"><img class="my-auto"${add_attribute("src", FailMarkIcon, 0)} alt="fail_mark_icon"> <span class="my-auto">Significantly different from your previous passwords</span></li></ul></div></div> <div class="my-4">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `Save changes`;
                  }
                })}</div></section>`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Notifications" }, {}, {
              default: () => {
                return `${validate_component(AccountNotification, "AccountNotification").$$render($$result, {}, {}, {})}`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
