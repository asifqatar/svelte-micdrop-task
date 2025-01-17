import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { M as MonthlyView } from "../../../../chunks/MonthlyView.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MonthlyView, "MonthlyView").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
