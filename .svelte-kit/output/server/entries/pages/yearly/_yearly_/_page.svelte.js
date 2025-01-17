import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { Y as YearlyView } from "../../../../chunks/YearlyView.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(YearlyView, "YearlyView").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
