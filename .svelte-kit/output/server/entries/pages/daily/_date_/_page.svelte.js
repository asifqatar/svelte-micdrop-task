import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { D as DailyView } from "../../../../chunks/DailyView.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { params } = $$props;
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  return `${validate_component(DailyView, "DailyView").$$render($$result, { params }, {}, {})}`;
});
export {
  Page as default
};
