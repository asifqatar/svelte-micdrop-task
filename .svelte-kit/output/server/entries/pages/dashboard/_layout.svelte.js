import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex h-screen"><div class="bg-gray-600 w-[232px] h-full hidden lg:block"></div> <div class="flex-1 flex flex-col"><header class="h-[59px] bg-gray-400"></header> <main class="flex-1 p-4 bg-gray-white overflow-auto">${slots.default ? slots.default({}) : ``}</main></div></div>`;
});
export {
  Layout as default
};
