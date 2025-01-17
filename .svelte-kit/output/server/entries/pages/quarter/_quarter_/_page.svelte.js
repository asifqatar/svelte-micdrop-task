import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { Q as QuarterView } from "../../../../chunks/QuarterView.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(QuarterView, "QuarterView").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
