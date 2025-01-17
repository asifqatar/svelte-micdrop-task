import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: ".card.svelte-vy4jps{margin:auto;width:90%;min-height:50%;margin:5rem auto}",
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<section class=\\"w-screen min-h-screen bg-gray-300 flex\\">\\n  <div class=\\"card bg-white p-4 shadow rounded-xl\\">\\n    <slot />\\n  </div>\\n</section>\\n\\n<style lang=\\"css\\">\\n  .card {\\n    margin: auto;\\n    width: 90%;\\n    min-height: 50%;\\n    margin: 5rem auto;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAOE,mBAAM,CACJ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,GAAG,CACf,MAAM,CAAE,IAAI,CAAC,IACf"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="w-screen min-h-screen bg-gray-300 flex"><div class="card bg-white p-4 shadow rounded-xl svelte-vy4jps">${slots.default ? slots.default({}) : ``}</div> </section>`;
});
export {
  Card as C
};
