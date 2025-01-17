import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { W as WeeklyView } from "../../../chunks/WeeklyView.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WeeklyView, "WeeklyView").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
