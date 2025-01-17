import { c as create_ssr_component, d as each, b as add_attribute, e as escape, a as subscribe, v as validate_component, f as createEventDispatcher, l as get_store_value, h as compute_rest_props, g as getContext, i as spread, j as escape_attribute_value, k as escape_object, n as compute_slots, s as setContext, o as null_to_empty, p as onDestroy, q as add_styles } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from "chart.js";
import { c as cn } from "../../../chunks/utils.js";
import { C as Checkbox, R as Radio } from "../../../chunks/Checkbox.js";
import { i as is_void, W as Wrapper } from "../../../chunks/Wrapper.js";
import { twMerge, twJoin } from "tailwind-merge";
import * as dom from "@floating-ui/dom";
import { F as Frame, A as Accordion, a as AccordionItem } from "../../../chunks/AccordionItem.js";
import "swipe-listener";
const DownIcon = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3029%209.83894L13.3033%209.83932C13.432%209.96174%2013.4998%2010.1227%2013.5%2010.2852C13.5002%2010.4476%2013.4331%2010.6086%2013.3051%2010.7312C13.305%2010.7314%2013.3048%2010.7315%2013.3047%2010.7316L8.51153%2015.3022L8.51117%2015.3025C8.44761%2015.3632%208.37066%2015.4125%208.28424%2015.4462L8.28423%2015.4461L8.27991%2015.4479C8.19452%2015.4821%208.10204%2015.5%208.00809%2015.5C7.91414%2015.5%207.82166%2015.4821%207.73627%2015.4479L7.73628%2015.4479L7.73194%2015.4462C7.64552%2015.4125%207.56857%2015.3632%207.50501%2015.3025L7.50465%2015.3022L2.71092%2010.7311L2.71097%2010.731L2.70459%2010.7251C2.63884%2010.6646%202.58779%2010.5934%202.55317%2010.5166C2.51859%2010.4398%202.50077%2010.3582%202.50002%2010.2763C2.49928%2010.1944%202.51561%2010.1126%202.54873%2010.0354C2.58189%209.95808%202.63155%209.88625%202.69606%209.82473C2.76063%209.76315%202.83872%209.71325%202.92635%209.67906C3.01402%209.64486%203.10872%209.62739%203.2047%209.62818C3.30069%209.62898%203.395%209.64802%203.48192%209.68362C3.56881%209.71922%203.64585%209.77033%203.70917%209.83284L3.70911%209.8329L3.7154%209.83889L6.46341%2012.4593L7.30846%2013.2651V12.0974V1.14278C7.30846%200.98018%207.37597%200.819145%207.50452%200.696568C7.63388%200.573219%207.81419%200.5%208.00689%200.5C8.1996%200.5%208.3799%200.573219%208.50926%200.696567C8.63781%200.819145%208.70532%200.98018%208.70532%201.14278V12.0974V13.2651L9.55037%2012.4593L12.2983%209.83894C12.2983%209.83892%2012.2984%209.83891%2012.2984%209.83889C12.4277%209.71562%2012.608%209.64244%2012.8006%209.64244C12.9933%209.64244%2013.1736%209.71563%2013.3029%209.83894Z'%20fill='%23F05252'%20stroke='%23F05252'/%3e%3c/svg%3e";
const ArrowUp = "data:image/svg+xml,%3csvg%20width='12'%20height='16'%20viewBox='0%200%2012%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.351401%206.53634L0.696267%206.17431C0.631646%206.11275%200.581939%206.04091%200.54876%205.96366C0.51561%205.88647%200.499278%205.80469%200.500024%205.72284C0.500771%205.64099%200.518595%205.55941%200.553203%205.48267C0.587843%205.40586%200.638945%205.33471%200.704808%205.27412L0.704859%205.27417L0.711138%205.26819L5.51018%200.696708L5.51054%200.696364C5.5742%200.635598%205.6513%200.586314%205.73793%200.552573L5.73962%200.551907C5.91539%200.482698%206.11409%200.482698%206.28986%200.55191L6.29156%200.55257C6.37818%200.586314%206.45528%200.635599%206.51895%200.696365L6.51931%200.696708L11.3148%205.26477C11.4378%205.38749%2011.5014%205.54602%2011.5%205.70549C11.4985%205.86613%2011.431%206.02496%2011.3037%206.14622C11.1756%206.26824%2010.9975%206.34139%2010.8065%206.34297C10.6169%206.34454%2010.4384%206.27533%2010.308%206.15674L7.56057%203.53954L6.7157%202.73474V3.90157V14.8571C6.7157%2015.0196%206.64818%2015.1806%206.51943%2015.3032C6.38986%2015.4267%206.20916%2015.5%206.01594%2015.5C5.82273%2015.5%205.64202%2015.4267%205.51245%2015.3032C5.3837%2015.1806%205.31618%2015.0196%205.31618%2014.8571V3.90157V2.73544L4.47147%203.53939L1.71802%206.15999L1.71797%206.15994L1.71163%206.16619C1.64821%206.22874%201.57103%206.2799%201.48394%206.31554C1.39681%206.35119%201.30228%206.37026%201.20605%206.37106C1.10981%206.37185%201.01489%206.35435%200.927016%206.32011C0.839179%206.28587%200.760941%206.23592%200.696268%206.17431L0.351401%206.53634Z'%20fill='%230E9F6E'%20stroke='%230E9F6E'/%3e%3c/svg%3e";
const css$2 = {
  code: ".stat.svelte-1k933w5{box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.1),\n      0px 1px 2px -1px rgba(0, 0, 0, 0.1)}",
  map: `{"version":3,"file":"StatsCard.svelte","sources":["StatsCard.svelte"],"sourcesContent":["<script>\\n  import ArrowDown from \\"../../assets/svg/arrow-down.svg\\";\\n  import ArrowUp from \\"../../assets/svg/arrow-up.svg\\";\\n\\n  export let stats = [];\\n<\/script>\\n\\n{#each stats as stat}\\n  <div class=\\"bg-white rounded-[16px] p-6 flex items-center justify-between stat\\">\\n    <div class=\\"flex items-center\\">\\n      <div class=\\"mr-3\\">\\n        <img src={stat.icon || \\"/placeholder.svg\\"} alt=\\"\\" />\\n      </div>\\n      <div>\\n        <p class=\\"text-[16px] font-normal text-Text-Tertiary\\">{stat.name}</p>\\n        <p class=\\"text-2xl font-normal text-Text-Secondary\\">\\n          {stat.value}\\n          {#if stat.cents}\\n            <span class=\\"text-sm align-super\\">{stat.cents}</span>\\n          {/if}\\n        </p>\\n      </div>\\n    </div>\\n    \\n    {#if stat.percentage !== undefined}\\n      <div\\n        class=\\"flex items-center\\"\\n        style=\\"color: {stat.percentage > 10 ? '#0E9F6E' : '#F05252'}\\"\\n      >\\n        <img src={stat.percentage > 10 ? ArrowUp : ArrowDown} alt=\\"\\" />\\n        <h6 class=\\"ml-1 text-lg font-semibold leading-[27px]\\">{Math.abs(stat.percentage)}%</h6>\\n      </div>\\n    {/if}\\n  </div>\\n{/each}\\n\\n<style>\\n  .stat {\\n    box-shadow:\\n      0px 1px 3px 0px rgba(0, 0, 0, 0.1),\\n      0px 1px 2px -1px rgba(0, 0, 0, 0.1);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqCE,oBAAM,CACJ,UAAU,CACR,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC;AACxC,MAAM,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACtC"}`
};
const StatsCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stats = [] } = $$props;
  if ($$props.stats === void 0 && $$bindings.stats && stats !== void 0) $$bindings.stats(stats);
  $$result.css.add(css$2);
  return `${each(stats, (stat) => {
    return `<div class="bg-white rounded-[16px] p-6 flex items-center justify-between stat svelte-1k933w5"><div class="flex items-center"><div class="mr-3"><img${add_attribute("src", stat.icon || "/placeholder.svg", 0)} alt=""></div> <div><p class="text-[16px] font-normal text-Text-Tertiary">${escape(stat.name)}</p> <p class="text-2xl font-normal text-Text-Secondary">${escape(stat.value)} ${stat.cents ? `<span class="text-sm align-super">${escape(stat.cents)}</span>` : ``}</p> </div></div> ${stat.percentage !== void 0 ? `<div class="flex items-center" style="${"color: " + escape(stat.percentage > 10 ? "#0E9F6E" : "#F05252", true)}"><img${add_attribute("src", stat.percentage > 10 ? ArrowUp : DownIcon, 0)} alt=""> <h6 class="ml-1 text-lg font-semibold leading-[27px]">${escape(Math.abs(stat.percentage))}%</h6> </div>` : ``} </div>`;
  })}`;
});
const ToggleButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activeButton, $$unsubscribe_activeButton;
  const activeButton = writable("revenue");
  $$unsubscribe_activeButton = subscribe(activeButton, (value) => $activeButton = value);
  $$unsubscribe_activeButton();
  return `<div class="flex border border-gray-300 rounded-[8px] overflow-hidden shadow-sm"><button class="${[
    "flex-1 py-2 text-center text-xs whitespace-nowrap font-medium transition-colors duration-200 px-2 border-r border-gray-300",
    ($activeButton === "ticketSales" ? "bg-blue-600" : "") + " " + ($activeButton === "ticketSales" ? "text-white" : "") + " " + ($activeButton !== "ticketSales" ? "text-gray-500" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-59f4ml">Ticket Sales</button> <button class="${[
    "flex-1 py-2 text-center text-xs font-medium transition-colors duration-200 px-2",
    ($activeButton === "revenue" ? "bg-blue-600" : "") + " " + ($activeButton === "revenue" ? "text-white" : "") + " " + ($activeButton !== "revenue" ? "text-gray-500" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-11tx929">Revenue</button></div>`;
});
const css$1 = {
  code: ".card-wrapper.svelte-z0bbr8{box-shadow:0px 1px 2px -1px #0000001a;box-shadow:0px 1px 3px 0px #0000001a}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import ToggleButtons from \\"../Button/ToggleButtons.svelte\\";\\nexport let title = \\"Title\\";\\nexport let subtitle = \\"\\";\\nexport let link = \\"\\";\\nexport let linkText = \\"See all\\";\\nexport let buttons = false;\\n<\/script>\\n\\n<div\\n  class=\\"space-y-3 bg-white lg:p-6 p-4 rounded-[8px] overflow-hidden card-wrapper w-full\\"\\n>\\n  <div class=\\"flex justify-between items-start flex-wrap gap-2\\">\\n    <div>\\n      <h2\\n        class=\\"lg:font-normal lg:text-xl lg:leading-[30px] font-base font-medium leading-[24px]\\"\\n      >\\n        {title}\\n      </h2>\\n      {#if subtitle}\\n        <p class=\\"text-xs leading-[18px] text-gray-500 lg:block hidden\\">\\n          {subtitle}\\n        </p>\\n      {/if}\\n    </div>\\n    {#if link}\\n      <div>\\n        <div>\\n          <a\\n            href={link}\\n            class=\\"font-medium text-sm text-[#0284FE] leading-[14px]\\"\\n          >\\n            {linkText}\\n          </a>\\n        </div>\\n      </div>\\n    {/if}\\n      {#if buttons}\\n      <div>\\n        <ToggleButtons />\\n      </div>\\n      {/if}\\n  </div>\\n  <slot />\\n</div>\\n\\n<style>\\n  .card-wrapper {\\n    box-shadow: 0px 1px 2px -1px #0000001a;\\n    box-shadow: 0px 1px 3px 0px #0000001a;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8CE,2BAAc,CACZ,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,SAAS,CACtC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,SAC9B"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Title" } = $$props;
  let { subtitle = "" } = $$props;
  let { link = "" } = $$props;
  let { linkText = "See all" } = $$props;
  let { buttons = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  if ($$props.linkText === void 0 && $$bindings.linkText && linkText !== void 0) $$bindings.linkText(linkText);
  if ($$props.buttons === void 0 && $$bindings.buttons && buttons !== void 0) $$bindings.buttons(buttons);
  $$result.css.add(css$1);
  return `<div class="space-y-3 bg-white lg:p-6 p-4 rounded-[8px] overflow-hidden card-wrapper w-full svelte-z0bbr8"><div class="flex justify-between items-start flex-wrap gap-2"><div><h2 class="lg:font-normal lg:text-xl lg:leading-[30px] font-base font-medium leading-[24px]">${escape(title)}</h2> ${subtitle ? `<p class="text-xs leading-[18px] text-gray-500 lg:block hidden">${escape(subtitle)}</p>` : ``}</div> ${link ? `<div><div><a${add_attribute("href", link, 0)} class="font-medium text-sm text-[#0284FE] leading-[14px]">${escape(linkText)}</a></div></div>` : ``} ${buttons ? `<div>${validate_component(ToggleButtons, "ToggleButtons").$$render($$result, {}, {}, {})}</div>` : ``}</div> ${slots.default ? slots.default({}) : ``} </div>`;
});
const RevenueChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);
  let chartCanvas;
  return `<div class="w-full h-[397px] bg-white"><canvas${add_attribute("this", chartCanvas, 0)}></canvas></div>`;
});
function createTableStore(initialData, keyField) {
  const dispatcher = createEventDispatcher();
  const sortedData = writable([...initialData]);
  const selectedRows = writable(/* @__PURE__ */ new Set());
  const selectAll = writable(false);
  const expandedRows = writable(/* @__PURE__ */ new Set());
  let draggedRowIndex = null;
  const sortData = (key) => {
    sortedData.update((current) => {
      return [...current].sort((a, b) => a[key] > b[key] ? 1 : -1);
    });
  };
  const filterData = (query) => {
    sortedData.set(
      initialData.filter(
        (row) => Object.values(row).some(
          (value) => value.toString().toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  };
  const toggleRowSelection = (rowKey) => {
    selectedRows.update((current) => {
      const updated = new Set(current);
      initialData.find((row) => row[keyField] === rowKey);
      if (updated.has(rowKey)) {
        updated.delete(rowKey);
      } else {
        updated.add(rowKey);
      }
      const selectedData = initialData.filter(
        (row) => updated.has(row[keyField])
      );
      dispatcher("rowsSelect", selectedData);
      selectAll.set(updated.size === initialData.length);
      return updated;
    });
  };
  const toggleSelectAll = () => {
    selectAll.update((value) => {
      const newValue = !value;
      const updated = newValue ? new Set(initialData.map((row) => row[keyField])) : /* @__PURE__ */ new Set();
      selectedRows.set(updated);
      const selectedData = newValue ? initialData : [];
      dispatcher("rowsSelect", selectedData);
      return newValue;
    });
  };
  const toggleRowExpansion = (rowKey) => {
    expandedRows.update((current) => {
      const updated = new Set(current);
      if (updated.has(rowKey)) {
        updated.delete(rowKey);
      } else {
        updated.add(rowKey);
      }
      return updated;
    });
  };
  const handleDragStart = (index) => {
    draggedRowIndex = index;
  };
  const handleDrop = (index) => {
    const droppedIndex = draggedRowIndex;
    if (droppedIndex !== null && droppedIndex !== index) {
      sortedData.update((rows) => {
        const updatedRows = [...rows];
        const [movedRow] = updatedRows.splice(droppedIndex, 1);
        updatedRows.splice(index, 0, movedRow);
        return updatedRows;
      });
      dispatcher("rowsReordered", get_store_value(sortedData));
    }
    draggedRowIndex = null;
  };
  const toggleRowSelectionRadio = (rowKey) => {
    selectedRows.update((current) => {
      const updated = /* @__PURE__ */ new Set();
      const selectedRow = initialData.find((row) => row[keyField] === rowKey);
      if (selectedRow) {
        updated.add(rowKey);
      }
      const selectedData = initialData.filter(
        (row) => updated.has(row[keyField])
      );
      dispatcher("rowsSelect", selectedData);
      selectAll.set(false);
      return updated;
    });
  };
  return {
    sortedData,
    selectedRows,
    selectAll,
    expandedRows,
    sortData,
    filterData,
    toggleRowSelection,
    toggleSelectAll,
    toggleRowExpansion,
    toggleRowSelectionRadio,
    handleDragStart,
    handleDrop
  };
}
const ExpandedRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $expandedRows, $$unsubscribe_expandedRows;
  let { tdStyle } = $$props;
  let { trStyle } = $$props;
  let { expandedRows } = $$props;
  $$unsubscribe_expandedRows = subscribe(expandedRows, (value) => $expandedRows = value);
  let { row } = $$props;
  let { columns } = $$props;
  let { hasActions } = $$props;
  let { keyField } = $$props;
  if ($$props.tdStyle === void 0 && $$bindings.tdStyle && tdStyle !== void 0) $$bindings.tdStyle(tdStyle);
  if ($$props.trStyle === void 0 && $$bindings.trStyle && trStyle !== void 0) $$bindings.trStyle(trStyle);
  if ($$props.expandedRows === void 0 && $$bindings.expandedRows && expandedRows !== void 0) $$bindings.expandedRows(expandedRows);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  if ($$props.hasActions === void 0 && $$bindings.hasActions && hasActions !== void 0) $$bindings.hasActions(hasActions);
  if ($$props.keyField === void 0 && $$bindings.keyField && keyField !== void 0) $$bindings.keyField(keyField);
  $$unsubscribe_expandedRows();
  return `${$expandedRows?.has(row[keyField]) ? `<tr${add_attribute("class", cn("bg-gray-100", trStyle), 0)}><td${add_attribute("colspan", columns.length + (hasActions ? 2 : 1), 0)}${add_attribute("class", cn("px-6 py-4", tdStyle), 0)}> <div> <p><!-- HTML_TAG_START -->${row["extraInfo"] || "No additional information available."}<!-- HTML_TAG_END --></p></div></td></tr>` : ``}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "pill",
    "outline",
    "size",
    "href",
    "type",
    "color",
    "shadow",
    "tag",
    "checked",
    "disabled"
  ]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "primary" } = $$props;
  let { shadow = false } = $$props;
  let { tag = "button" } = $$props;
  let { checked = void 0 } = $$props;
  let { disabled = false } = $$props;
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const colorCheckedClasses = {
    alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
    blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
    dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
    green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
    light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
    primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
    purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
    red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
    yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
    dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
    green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
    light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
    purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
    red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
    yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0) $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0) $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  buttonClass = twMerge(
    "text-center font-medium",
    group ? "focus-within:ring-2" : "focus-within:ring-4",
    group && "focus-within:z-10",
    group || "focus-within:outline-none",
    "inline-flex items-center justify-center " + sizeClasses[size],
    outline && checked && "border dark:border-gray-900",
    outline && checked && colorCheckedClasses[color],
    outline && !checked && outlineClasses[color],
    !outline && checked && colorCheckedClasses[color],
    !outline && !checked && colorClasses[color],
    color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"),
    outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    coloredFocusClasses[color],
    hasBorder() && group && "[&:not(:first-child)]:-ms-px",
    group ? pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : pill && "rounded-full" || "rounded-lg",
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  return `${href && !disabled ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      { role: "button" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `${tag === "button" ? `<button${spread(
    [
      { type: escape_attribute_value(type) },
      escape_object($$restProps),
      { disabled: disabled || null },
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`}`} `;
});
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let middleware;
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  let { middlewares = [dom.flip(), dom.shift()] } = $$props;
  const dispatch = createEventDispatcher();
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  const px = (n) => n ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0) $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0) $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0) $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0) $$bindings.triggeredBy(triggeredBy);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0) $$bindings.reference(reference);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0) $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0) $$bindings.yOnly(yOnly);
  if ($$props.middlewares === void 0 && $$bindings.middlewares && middlewares !== void 0) $$bindings.middlewares(middlewares);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      dispatch("show", open);
    }
    placement && (referenceEl = referenceEl);
    middleware = [
      ...middlewares,
      dom.offset(+offset),
      arrowEl
    ];
    arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-e", $$props.border && arrowSide === "top" && "border-t border-s ", $$props.border && arrowSide === "right" && "border-t border-e ", $$props.border && arrowSide === "left" && "border-b border-s ");
    $$rendered = `${!referenceEl ? `<div${add_attribute("this", contentEl, 0)}></div>` : ``} ${referenceEl ? `${validate_component(Frame, "Frame").$$render(
      $$result,
      Object.assign({}, { use: init }, { options: referenceEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
        }
      }
    )}` : ``} `;
  } while (!$$settled);
  return $$rendered;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerCls;
  let headerCls;
  let ulCls;
  let footerCls;
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "open",
    "containerClass",
    "classContainer",
    "headerClass",
    "classHeader",
    "footerClass",
    "classFooter",
    "activeClass",
    "classActive",
    "arrow",
    "trigger",
    "placement",
    "color",
    "shadow",
    "rounded"
  ]);
  let $$slots = compute_slots(slots);
  let { activeUrl = void 0 } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { classContainer = void 0 } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { classHeader = void 0 } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { classFooter = void 0 } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let { classActive = void 0 } = $$props;
  let { arrow = false } = $$props;
  let { trigger = "click" } = $$props;
  let { placement = "bottom" } = $$props;
  let { color = "dropdown" } = $$props;
  let { shadow = true } = $$props;
  let { rounded = true } = $$props;
  const activeUrlStore = writable("");
  let activeCls = twMerge(activeClass, classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.classContainer === void 0 && $$bindings.classContainer && classContainer !== void 0) $$bindings.classContainer(classContainer);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.classHeader === void 0 && $$bindings.classHeader && classHeader !== void 0) $$bindings.classHeader(classHeader);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  if ($$props.classFooter === void 0 && $$bindings.classFooter && classFooter !== void 0) $$bindings.classFooter(classFooter);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0) $$bindings.arrow(arrow);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl ?? "");
    }
    containerCls = twMerge(containerClass, classContainer);
    headerCls = twMerge(headerClass, classHeader);
    ulCls = twMerge("py-1", $$props.class);
    footerCls = twMerge(footerClass, classFooter);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { trigger }, { arrow }, { placement }, { shadow }, { rounded }, { color }, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const css = {
  code: "thead.svelte-yevmqg th.svelte-yevmqg{position:relative;cursor:grab;-webkit-user-select:none;-moz-user-select:none;user-select:none}thead.svelte-yevmqg th.svelte-yevmqg:active{cursor:grabbing}.dragging.svelte-yevmqg.svelte-yevmqg{background-color:#f0f0f0}.resizer.svelte-yevmqg.svelte-yevmqg{position:absolute;right:0;top:0;width:5px;cursor:col-resize;-webkit-user-select:none;-moz-user-select:none;user-select:none}.resizer.svelte-yevmqg.svelte-yevmqg:hover,.resizer.resizing.svelte-yevmqg.svelte-yevmqg{background-color:#a0a0a0}",
  map: '{"version":3,"file":"TableHead.svelte","sources":["TableHead.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { cn } from \\"./../../utils/utils\\";\\nimport { Checkbox } from \\"flowbite-svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport DownIcon from \\"./../../assets/svg/arrow-down.svg\\";\\nexport let theadStyle;\\nexport let thStyle;\\nexport let columns;\\nexport let bordered;\\nexport let hasCheckBox;\\nexport let hasRadioButton;\\nexport let hasActions;\\nexport let isDraggable;\\nexport let selectAll;\\nexport let sortData;\\nexport let toggleSelectAll;\\nexport let mobileView = [];\\nexport let screenSize;\\nlet table;\\nfunction createResizableColumn(col, resizer) {\\n  let x = 0;\\n  let w = 0;\\n  const mouseDownHandler = (e) => {\\n    e.stopPropagation();\\n    x = e.clientX;\\n    w = parseInt(window.getComputedStyle(col).width, 10);\\n    document.addEventListener(\\"mousemove\\", mouseMoveHandler);\\n    document.addEventListener(\\"mouseup\\", mouseUpHandler);\\n    resizer.classList.add(\\"resizing\\");\\n  };\\n  const mouseMoveHandler = (e) => {\\n    e.stopPropagation();\\n    const dx = e.clientX - x;\\n    col.style.width = `${w + dx}px`;\\n  };\\n  const mouseUpHandler = () => {\\n    resizer.classList.remove(\\"resizing\\");\\n    document.removeEventListener(\\"mousemove\\", mouseMoveHandler);\\n    document.removeEventListener(\\"mouseup\\", mouseUpHandler);\\n  };\\n  resizer.addEventListener(\\"mousedown\\", mouseDownHandler);\\n}\\nfunction createResizableTable(table2) {\\n  const tableHeight = table2.getBoundingClientRect().height;\\n  const cols = table2.querySelectorAll(\\"th\\");\\n  cols.forEach((col) => {\\n    const resizer = document.createElement(\\"div\\");\\n    resizer.classList.add(\\"resizer\\");\\n    resizer.style.height = `${tableHeight}px`;\\n    col.appendChild(resizer);\\n    createResizableColumn(col, resizer);\\n  });\\n}\\nfunction initializeTable() {\\n  table = document.querySelector(\\"table\\");\\n  if (table) {\\n    createResizableTable(table);\\n  }\\n}\\nonMount(() => {\\n  if (columns && columns.length > 0) {\\n    initializeTable();\\n  }\\n});\\nif (import.meta.hot) {\\n  import.meta.hot.accept(() => {\\n    initializeTable();\\n  });\\n}\\n<\/script>\\n\\n<thead class={cn(\\"text-xs text-gray-700 uppercase bg-white\\", theadStyle)}>\\n  <tr id=\\"header-row\\">\\n    {#if hasCheckBox}\\n      <th class={cn(\\"!p-4\\", thStyle)}>\\n        <Checkbox on:change={toggleSelectAll} checked={$selectAll} />\\n      </th>\\n    {/if}\\n    {#if hasRadioButton}\\n      <th class={cn(\\"!p-4\\", thStyle)}></th>\\n    {/if}\\n    {#if isDraggable}\\n      <th class={cn(\\"!p-4\\", thStyle)}>No. </th>\\n    {/if}\\n    {#each columns as column, index}\\n      <th\\n        id={`th-${index}`}\\n        data-column={index}\\n        scope=\\"col\\"\\n        class={cn(\\n          \\"px-6 py-4 cursor-pointer\\",\\n          {\\n            \\"border-b border-r\\": bordered,\\n            hidden:\\n              screenSize.isMobile &&\\n              mobileView.length > 0 &&\\n              !mobileView.includes(column.title),\\n          },\\n          thStyle\\n        )}\\n        on:click={() => column.sortable && sortData(column.key)}\\n      >\\n        <div class=\\"flex flex-row gap-2\\">\\n          <span class=\\"my-auto\\">{column.title}</span>\\n          {#if column.sortable}\\n            <img class=\\"my-auto\\" src={DownIcon} alt=\\"sort-icon\\" />\\n          {/if}\\n        </div>\\n      </th>\\n    {/each}\\n    {#if hasActions}\\n      <th class={cn(\\"!p-4\\", thStyle)}></th>\\n    {/if}\\n  </tr>\\n</thead>\\n\\n<style>\\n  thead th {\\n    position: relative;\\n    cursor: grab;\\n    -webkit-user-select: none;\\n       -moz-user-select: none;\\n            user-select: none;\\n  }\\n\\n  thead th:active {\\n    cursor: grabbing;\\n  }\\n\\n  .dragging {\\n    background-color: #f0f0f0;\\n  }\\n\\n  .resizer {\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    width: 5px;\\n    cursor: col-resize;\\n    -webkit-user-select: none;\\n       -moz-user-select: none;\\n            user-select: none;\\n  }\\n\\n  .resizer:hover,\\n  .resizer.resizing {\\n    background-color: #a0a0a0;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoHE,mBAAK,CAAC,gBAAG,CACP,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IACvB,CAEA,mBAAK,CAAC,gBAAE,OAAQ,CACd,MAAM,CAAE,QACV,CAEA,qCAAU,CACR,gBAAgB,CAAE,OACpB,CAEA,oCAAS,CACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,UAAU,CAClB,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IACvB,CAEA,oCAAQ,MAAM,CACd,QAAQ,qCAAU,CAChB,gBAAgB,CAAE,OACpB"}'
};
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectAll, $$unsubscribe_selectAll;
  let { theadStyle } = $$props;
  let { thStyle } = $$props;
  let { columns } = $$props;
  let { bordered } = $$props;
  let { hasCheckBox } = $$props;
  let { hasRadioButton } = $$props;
  let { hasActions } = $$props;
  let { isDraggable } = $$props;
  let { selectAll } = $$props;
  $$unsubscribe_selectAll = subscribe(selectAll, (value) => $selectAll = value);
  let { sortData } = $$props;
  let { toggleSelectAll } = $$props;
  let { mobileView = [] } = $$props;
  let { screenSize } = $$props;
  if ($$props.theadStyle === void 0 && $$bindings.theadStyle && theadStyle !== void 0) $$bindings.theadStyle(theadStyle);
  if ($$props.thStyle === void 0 && $$bindings.thStyle && thStyle !== void 0) $$bindings.thStyle(thStyle);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  if ($$props.bordered === void 0 && $$bindings.bordered && bordered !== void 0) $$bindings.bordered(bordered);
  if ($$props.hasCheckBox === void 0 && $$bindings.hasCheckBox && hasCheckBox !== void 0) $$bindings.hasCheckBox(hasCheckBox);
  if ($$props.hasRadioButton === void 0 && $$bindings.hasRadioButton && hasRadioButton !== void 0) $$bindings.hasRadioButton(hasRadioButton);
  if ($$props.hasActions === void 0 && $$bindings.hasActions && hasActions !== void 0) $$bindings.hasActions(hasActions);
  if ($$props.isDraggable === void 0 && $$bindings.isDraggable && isDraggable !== void 0) $$bindings.isDraggable(isDraggable);
  if ($$props.selectAll === void 0 && $$bindings.selectAll && selectAll !== void 0) $$bindings.selectAll(selectAll);
  if ($$props.sortData === void 0 && $$bindings.sortData && sortData !== void 0) $$bindings.sortData(sortData);
  if ($$props.toggleSelectAll === void 0 && $$bindings.toggleSelectAll && toggleSelectAll !== void 0) $$bindings.toggleSelectAll(toggleSelectAll);
  if ($$props.mobileView === void 0 && $$bindings.mobileView && mobileView !== void 0) $$bindings.mobileView(mobileView);
  if ($$props.screenSize === void 0 && $$bindings.screenSize && screenSize !== void 0) $$bindings.screenSize(screenSize);
  $$result.css.add(css);
  $$unsubscribe_selectAll();
  return `<thead class="${escape(null_to_empty(cn("text-xs text-gray-700 uppercase bg-white", theadStyle)), true) + " svelte-yevmqg"}"><tr id="header-row">${hasCheckBox ? `<th class="${escape(null_to_empty(cn("!p-4", thStyle)), true) + " svelte-yevmqg"}">${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: $selectAll }, {}, {})}</th>` : ``} ${hasRadioButton ? `<th class="${escape(null_to_empty(cn("!p-4", thStyle)), true) + " svelte-yevmqg"}"></th>` : ``} ${isDraggable ? `<th class="${escape(null_to_empty(cn("!p-4", thStyle)), true) + " svelte-yevmqg"}">No.</th>` : ``} ${each(columns, (column, index) => {
    return `<th${add_attribute("id", `th-${index}`, 0)}${add_attribute("data-column", index, 0)} scope="col" class="${escape(
      null_to_empty(cn(
        "px-6 py-4 cursor-pointer",
        {
          "border-b border-r": bordered,
          hidden: screenSize.isMobile && mobileView.length > 0 && !mobileView.includes(column.title)
        },
        thStyle
      )),
      true
    ) + " svelte-yevmqg"}"><div class="flex flex-row gap-2"><span class="my-auto">${escape(column.title)}</span> ${column.sortable ? `<img class="my-auto"${add_attribute("src", DownIcon, 0)} alt="sort-icon">` : ``}</div> </th>`;
  })} ${hasActions ? `<th class="${escape(null_to_empty(cn("!p-4", thStyle)), true) + " svelte-yevmqg"}"></th>` : ``}</tr> </thead>`;
});
const TablePagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isPaginated } = $$props;
  let { currentPage = 1 } = $$props;
  let { totalPages } = $$props;
  let { pageSize = 10 } = $$props;
  createEventDispatcher();
  if ($$props.isPaginated === void 0 && $$bindings.isPaginated && isPaginated !== void 0) $$bindings.isPaginated(isPaginated);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0) $$bindings.totalPages(totalPages);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0) $$bindings.pageSize(pageSize);
  return `${isPaginated ? `<div class="flex gap-4 justify-end mt-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "alternative",
      disabled: currentPage === 1
    },
    {},
    {
      default: () => {
        return `Previous`;
      }
    }
  )} <span class="w-[40px] py-2 center items-center align-middle text-center bg-black font-bold rounded-lg cursor-pointer">${escape(currentPage)}</span> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "dark",
      disabled: currentPage === totalPages
    },
    {},
    {
      default: () => {
        return `Next`;
      }
    }
  )}</div>` : ``}`;
});
const DotsHorizontalOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "dots horizontal outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"></path></svg>`} `;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedRows, $$unsubscribe_selectedRows;
  let { tdStyle } = $$props;
  let { trStyle } = $$props;
  let { classes } = $$props;
  let { keyField } = $$props;
  let { bordered } = $$props;
  let { hasCheckBox = false } = $$props;
  let { hasRadioButton = false } = $$props;
  let { hasActions = false } = $$props;
  let { columns } = $$props;
  let { isDraggable } = $$props;
  let { row } = $$props;
  let { index } = $$props;
  let { selectedRows } = $$props;
  $$unsubscribe_selectedRows = subscribe(selectedRows, (value) => $selectedRows = value);
  let { handleDragStart } = $$props;
  let { handleDrop } = $$props;
  let { toggleRowExpansion } = $$props;
  let { toggleRowSelection } = $$props;
  let { toggleRowSelectionRadio } = $$props;
  let { mobileView } = $$props;
  let { screenSize } = $$props;
  let { actionsContent } = $$props;
  if ($$props.tdStyle === void 0 && $$bindings.tdStyle && tdStyle !== void 0) $$bindings.tdStyle(tdStyle);
  if ($$props.trStyle === void 0 && $$bindings.trStyle && trStyle !== void 0) $$bindings.trStyle(trStyle);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0) $$bindings.classes(classes);
  if ($$props.keyField === void 0 && $$bindings.keyField && keyField !== void 0) $$bindings.keyField(keyField);
  if ($$props.bordered === void 0 && $$bindings.bordered && bordered !== void 0) $$bindings.bordered(bordered);
  if ($$props.hasCheckBox === void 0 && $$bindings.hasCheckBox && hasCheckBox !== void 0) $$bindings.hasCheckBox(hasCheckBox);
  if ($$props.hasRadioButton === void 0 && $$bindings.hasRadioButton && hasRadioButton !== void 0) $$bindings.hasRadioButton(hasRadioButton);
  if ($$props.hasActions === void 0 && $$bindings.hasActions && hasActions !== void 0) $$bindings.hasActions(hasActions);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  if ($$props.isDraggable === void 0 && $$bindings.isDraggable && isDraggable !== void 0) $$bindings.isDraggable(isDraggable);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.selectedRows === void 0 && $$bindings.selectedRows && selectedRows !== void 0) $$bindings.selectedRows(selectedRows);
  if ($$props.handleDragStart === void 0 && $$bindings.handleDragStart && handleDragStart !== void 0) $$bindings.handleDragStart(handleDragStart);
  if ($$props.handleDrop === void 0 && $$bindings.handleDrop && handleDrop !== void 0) $$bindings.handleDrop(handleDrop);
  if ($$props.toggleRowExpansion === void 0 && $$bindings.toggleRowExpansion && toggleRowExpansion !== void 0) $$bindings.toggleRowExpansion(toggleRowExpansion);
  if ($$props.toggleRowSelection === void 0 && $$bindings.toggleRowSelection && toggleRowSelection !== void 0) $$bindings.toggleRowSelection(toggleRowSelection);
  if ($$props.toggleRowSelectionRadio === void 0 && $$bindings.toggleRowSelectionRadio && toggleRowSelectionRadio !== void 0) $$bindings.toggleRowSelectionRadio(toggleRowSelectionRadio);
  if ($$props.mobileView === void 0 && $$bindings.mobileView && mobileView !== void 0) $$bindings.mobileView(mobileView);
  if ($$props.screenSize === void 0 && $$bindings.screenSize && screenSize !== void 0) $$bindings.screenSize(screenSize);
  if ($$props.actionsContent === void 0 && $$bindings.actionsContent && actionsContent !== void 0) $$bindings.actionsContent(actionsContent);
  $$unsubscribe_selectedRows();
  return `<tr tabindex="0"${add_attribute(
    "class",
    cn(
      "bg-white hover:bg-gray-50",
      classes,
      {
        "bg-blue-100 text-black": $selectedRows.has(row[keyField]),
        "border-b": bordered
      },
      trStyle
    ),
    0
  )}${add_attribute("draggable", row.draggable || isDraggable, 0)}>${hasCheckBox ? `<td tabindex="0"${add_attribute("class", cn("!p-4", tdStyle), 0)}>${validate_component(Checkbox, "Checkbox").$$render(
    $$result,
    {
      id: `checkbox-${row[keyField]}`,
      checked: $selectedRows.has(row[keyField]),
      role: "checkbox"
    },
    {},
    {}
  )}</td>` : ``} ${hasRadioButton ? `<td tabindex="0"${add_attribute("class", cn("!p-4", tdStyle), 0)}>${validate_component(Radio, "Radio").$$render(
    $$result,
    {
      name: "table-radio-button",
      checked: $selectedRows.has(row[keyField])
    },
    {},
    {}
  )}</td>` : ``} ${row.draggable || isDraggable ? `<td${add_attribute("class", cn("!p-4", tdStyle), 0)} tabindex="0"><img class="m-auto"${add_attribute("src", "/assets/svg/sort-icon.svg", 0)} alt=""></td>` : ``}  ${each(columns, (column) => {
    return `${!screenSize.isMobile || !mobileView.includes(column.key) ? `<td tabindex="0"${add_attribute("class", cn("px-6 py-2", { "border-r": bordered }, tdStyle), 0)}>${column.customRender ? `<!-- HTML_TAG_START -->${column.customRender(row[column.key])}<!-- HTML_TAG_END -->` : `${escape(row[column.key])}`} </td>` : ``}`;
  })} ${hasActions ? `<td tabindex="0"${add_attribute("class", cn("!p-4", tdStyle, { "border-r": bordered }), 0)}>${actionsContent ? `<!-- HTML_TAG_START -->${actionsContent}<!-- HTML_TAG_END -->` : `${validate_component(DotsHorizontalOutline, "DotsHorizontalOutline").$$render(
    $$result,
    {
      "data-testid": "dropdown-menu",
      triggeredBy: ".dots-menu",
      class: "dots-menu dark:text-white"
    },
    {},
    {}
  )} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      class: "shadow-none min-w-[200px]",
      triggeredBy: ".dots-menu"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `Edit`;
          }
        })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `Delete`;
          }
        })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `View`;
          }
        })}`;
      }
    }
  )}`}</td>` : ``}</tr> ${screenSize.isMobile && mobileView.length > 0 ? `<tr${add_attribute("class", cn("bg-white", trStyle), 0)}><td${add_attribute("colspan", columns.length + (hasCheckBox ? 1 : 0) + (hasRadioButton ? 1 : 0) + (hasActions ? 1 : 0), 0)}><div class="wrapper"><div${add_attribute("id", `swipe-container`, 0)} data-testid="swipe-container" class="swipe-container flex gap-1 swipe-column">${each(columns, (column, key) => {
    return `${mobileView.includes(column.key) ? `<div${add_attribute("class", cn("py-2", { "border-b": bordered }), 0)}><strong>${escape(column.title)}: </strong>${escape(row[column.key])} </div>` : ``}`;
  })}</div> <div id="button-container" class="button-container"><button class="bg-blue-700 text-white px-6" data-svelte-h="svelte-ibbyng">Edit</button> <button class="bg-red-700 text-white px-6" data-svelte-h="svelte-1rrd6zj">Delete</button></div></div></td></tr>` : ``}`;
});
const TableSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchQuery, $$unsubscribe_searchQuery;
  let { style = "" } = $$props;
  let { placeholder = "Search..." } = $$props;
  let { searchQuery } = $$props;
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.searchQuery === void 0 && $$bindings.searchQuery && searchQuery !== void 0) $$bindings.searchQuery(searchQuery);
  $$unsubscribe_searchQuery();
  return ` <div class="w-full my-5 text-white"><input${add_attribute("class", cn(`text-black border-slate-100 outline-none focus:outline-none focus:ring-0`, style), 0)} type="text"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", $searchQuery, 0)}></div>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let screenSize;
  let $sortedData, $$unsubscribe_sortedData;
  let currentPage = 1;
  let { searchQuery = writable("") } = $$props;
  let { isRounded = false } = $$props;
  let { isDraggable = false } = $$props;
  let { bordered = false } = $$props;
  let { classes = "" } = $$props;
  let { searchable = false } = $$props;
  let { paginated = {
    status: false,
    totalPages: 0,
    pageSize: 0
  } } = $$props;
  let { hasActions = false } = $$props;
  let { hasCheckBox = false } = $$props;
  let { hasRadioButton = false } = $$props;
  let { data = [] } = $$props;
  let { keyField = "id" } = $$props;
  let { mobileView = [] } = $$props;
  let { showTableHead = true } = $$props;
  let { actionsContent = null } = $$props;
  let { styles = {} } = $$props;
  let isMobile = false;
  let isTablet = false;
  let isDesktop = false;
  let { columns = [] } = $$props;
  let filteredColumns = [];
  let filteredData = writable(data);
  const { sortedData, selectedRows, selectAll, expandedRows, sortData, filterData, toggleRowSelectionRadio, toggleRowSelection, toggleSelectAll, toggleRowExpansion, handleDragStart, handleDrop } = createTableStore(data, keyField);
  $$unsubscribe_sortedData = subscribe(sortedData, (value) => $sortedData = value);
  const updateMedia = () => {
    if (typeof window !== "undefined") {
      isMobile = window.matchMedia("(max-width: 480px)").matches;
      isTablet = window.matchMedia("(max-width: 768px) and (min-width: 481px)").matches;
      isDesktop = window.matchMedia("(min-width: 769px)").matches;
    }
  };
  onDestroy(() => {
    searchQuery.set("");
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateMedia);
    }
  });
  if ($$props.searchQuery === void 0 && $$bindings.searchQuery && searchQuery !== void 0) $$bindings.searchQuery(searchQuery);
  if ($$props.isRounded === void 0 && $$bindings.isRounded && isRounded !== void 0) $$bindings.isRounded(isRounded);
  if ($$props.isDraggable === void 0 && $$bindings.isDraggable && isDraggable !== void 0) $$bindings.isDraggable(isDraggable);
  if ($$props.bordered === void 0 && $$bindings.bordered && bordered !== void 0) $$bindings.bordered(bordered);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0) $$bindings.classes(classes);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0) $$bindings.searchable(searchable);
  if ($$props.paginated === void 0 && $$bindings.paginated && paginated !== void 0) $$bindings.paginated(paginated);
  if ($$props.hasActions === void 0 && $$bindings.hasActions && hasActions !== void 0) $$bindings.hasActions(hasActions);
  if ($$props.hasCheckBox === void 0 && $$bindings.hasCheckBox && hasCheckBox !== void 0) $$bindings.hasCheckBox(hasCheckBox);
  if ($$props.hasRadioButton === void 0 && $$bindings.hasRadioButton && hasRadioButton !== void 0) $$bindings.hasRadioButton(hasRadioButton);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.keyField === void 0 && $$bindings.keyField && keyField !== void 0) $$bindings.keyField(keyField);
  if ($$props.mobileView === void 0 && $$bindings.mobileView && mobileView !== void 0) $$bindings.mobileView(mobileView);
  if ($$props.showTableHead === void 0 && $$bindings.showTableHead && showTableHead !== void 0) $$bindings.showTableHead(showTableHead);
  if ($$props.actionsContent === void 0 && $$bindings.actionsContent && actionsContent !== void 0) $$bindings.actionsContent(actionsContent);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0) $$bindings.styles(styles);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    screenSize = { isMobile, isTablet, isDesktop };
    {
      {
        searchQuery.subscribe((value) => {
          const filtered = data.filter((row) => {
            return columns.some((column) => {
              const cellValue = row[column.key] ?? "";
              return cellValue.toString().toLowerCase().includes(value.toLowerCase());
            });
          });
          filteredData.set(filtered);
          filterData(value);
        });
      }
    }
    filteredColumns = columns;
    $$rendered = `<div${add_attribute("class", cn(`inline-flex flex-col justify-center items-center bg-white`, { "p-3 rounded-md ": isRounded }, styles.container), 0)}>${searchable ? `${validate_component(TableSearch, "TableSearch").$$render(
      $$result,
      {
        style: "p-3 rounded-md w-full",
        placeholder: "Search...",
        searchQuery
      },
      {
        searchQuery: ($$value) => {
          searchQuery = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <table id="table"${add_attribute("class", cn("w-[100%] text-sm text-left text-gray-500 bg-white", styles.table), 0)}>${showTableHead ? `${validate_component(TableHead, "TableHead").$$render(
      $$result,
      {
        theadStyle: styles.thead,
        thStyle: styles.th,
        isDraggable,
        bordered,
        columns: filteredColumns,
        selectAll,
        sortData,
        toggleSelectAll,
        hasActions,
        hasCheckBox,
        hasRadioButton,
        mobileView,
        screenSize
      },
      {},
      {}
    )}` : ``} <tbody${add_attribute("class", cn(styles.tbody), 0)}>${each($sortedData || [], (row, index) => {
      return `${validate_component(TableRow, "TableRow").$$render(
        $$result,
        {
          tdStyle: styles.td,
          trStyle: styles.tr,
          row,
          index,
          columns: filteredColumns,
          selectedRows,
          handleDragStart,
          handleDrop,
          toggleRowSelection,
          toggleRowSelectionRadio,
          toggleRowExpansion,
          hasActions,
          classes,
          keyField,
          bordered,
          hasCheckBox,
          hasRadioButton,
          actionsContent,
          isDraggable,
          mobileView,
          screenSize
        },
        {},
        {}
      )} ${validate_component(ExpandedRow, "ExpandedRow").$$render(
        $$result,
        {
          tdStyle: styles.td,
          trStyle: styles.tr,
          hasActions: true,
          keyField,
          expandedRows,
          row,
          columns: filteredColumns
        },
        {},
        {}
      )}`;
    })}</tbody></table> ${paginated?.status ? `${validate_component(TablePagination, "TablePagination").$$render(
      $$result,
      {
        isPaginated: paginated.status,
        totalPages: +paginated.totalPages,
        pageSize: +paginated.pageSize,
        currentPage
      },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_sortedData();
  return $$rendered;
});
const OrderTableColumns = [
  {
    key: "orderId",
    title: "ORDER ID",
    sortable: false,
    customRender: (value) => {
      return `<div>
        <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
      </div>`;
    }
  },
  {
    key: "date",
    title: "date of purchase",
    sortable: false,
    customRender: (value) => {
      return `<div>
        <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
      </div>`;
    }
  },
  {
    key: "show",
    title: "EVENT",
    sortable: false,
    customRender: (value) => {
      return `<div class="flex items-center gap-6">
      <img src="${value.image}" alt="${value.name}" class="w-8 h-8 rounded-md" />
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value.name}</span>
    </div>`;
    }
  },
  {
    key: "customer",
    title: "customer",
    sortable: false,
    customRender: (value) => {
      return `<div>
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
    </div>`;
    }
  },
  {
    key: "no_tickets",
    title: "no. of tickets",
    sortable: false,
    customRender: (value) => {
      return `<div>
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
    </div>`;
    }
  },
  {
    key: "channel",
    title: "sales channel",
    sortable: false,
    customRender: (value) => {
      return `<div class="flex items-center gap-6">
      <img src="${value.image}" alt="${value.name}" class="w-4 h-4 rounded-md" />
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value.name}</span>
    </div>`;
    }
  },
  {
    key: "orderTotal",
    title: "order total",
    sortable: false,
    customRender: (value) => {
      return `<div>
      <span class="text-[#0E9F6E] font-normal text-sm md:pr-4">${value}</span>
    </div>`;
    }
  }
];
const EventsProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textColor;
  let valueColor;
  let gradientColor;
  let { events = [] } = $$props;
  let { variant = "top" } = $$props;
  function getGradientStyle(revenue) {
    return `linear-gradient(to right, ${gradientColor} ${revenue}%, transparent ${revenue}%)`;
  }
  if ($$props.events === void 0 && $$bindings.events && events !== void 0) $$bindings.events(events);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  textColor = variant === "top" ? "text-[#76A9FA]" : "text-red-500";
  valueColor = variant === "top" ? "text-[#1E429F]" : "text-red-700";
  gradientColor = variant === "top" ? "#EBF5FF" : "#FDF2F2";
  return `<div class="space-y-4 bg-white rounded-lg"><div class="space-y-3">${each(events, (event) => {
    return `<div class="relative py-2 pl-4 pr-1 rounded overflow-hidden grid grid-cols-6 items-center"${add_styles({
      "background": getGradientStyle(event.revenue)
    })}><span class="${"text-xs font-normal leading-[16px] col-span-2 truncate " + escape(textColor, true)}">${escape(event.date)}</span> <span class="text-sm text-gray-700 truncate leading-[14px] col-span-3">${escape(event.title)}</span> <span class="${"text-xs font-normal leading-[16px] flex justify-end col-span-1 " + escape(valueColor, true)}">${escape(event.revenue)}</span> </div>`;
  })}</div></div>`;
});
const OrderCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let openIndex = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="w-ful pt-4"><div class="flex gap-10 text-gray-600 bg-gray-50 items-center py-4 px-2 uppercase border-b border-gray-100" data-svelte-h="svelte-1khrc94"><h2 class="text-xs font-semibold text-gray-500">ORDER ID</h2> <h2 class="text-xs font-semibold text-gray-500">NO. OF TICKETS</h2> <h2 class="text-xs font-semibold text-gray-500">ORDER TOTAL</h2></div> ${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      flush: true,
      class: "divide-y divide-gray-200"
    },
    {},
    {
      default: () => {
        return `${each(data, (event, index) => {
          return `<div class="cursor-pointer" role="button" tabindex="0">${validate_component(AccordionItem, "AccordionItem").$$render(
            $$result,
            {
              paddingFlush: "py-5 " + (openIndex === index ? "p-0" : "") + " ",
              class: "relative " + (openIndex === index ? "border-l-4 border-l-primary-400 border-b-0 group-first:rounded-none " : ""),
              open: openIndex === index
            },
            {},
            {
              header: () => {
                return `<div class="${"grid grid-cols-12 items-center p-2 w-full " + escape(openIndex === index ? "pt-5 pl-1" : "", true)}"><div class="flex w-full text-gray-900 text-start text-sm font-medium col-span-4 text-nowrap">${escape(event.orderId)}</div> <div class="flex w-full text-start text-gray-500 text-sm font-medium col-span-4 text-nowrap">${escape(event.no_tickets)}</div> <div class="flex w-full text-sm font-medium col-span-4 text-nowrap text-green-500 ml-6">${escape(event.orderTotal)} </div></div> `;
              },
              default: () => {
                return `<div class="p-2 shadow-sm bg-white border-l-4 border-l-primary-400 group-first:rounded-none"><div class="grid grid-cols-2 gap-4"><div><p class="text-xs text-gray-500 font-semibold" data-svelte-h="svelte-eq7rgu">Date of Purchase</p> <div class="flex flex-col w-full md:w-96"><p class="text-sm text-gray-500 font-normal break-words mt-1">${escape(event.date)}</p> </div></div> <div><p class="text-xs text-gray-500 font-semibold" data-svelte-h="svelte-1iuhsfu">Event</p> <p class="text-sm text-gray-500 font-normal break-words mt-1">${escape(event.show.name)}</p> </div></div> <div class="grid grid-cols-2 gap-4 mt-6"><div><p class="text-xs text-gray-500 font-semibold" data-svelte-h="svelte-wem1bm">Customer</p> <p class="text-sm text-gray-500 font-normal break-words mt-1">${escape(event.customer)} </p></div> <div><p class="text-xs text-gray-500 font-semibold" data-svelte-h="svelte-oj5ccv">Sales Channel</p> <div class="flex gap-2"><img${add_attribute("src", event.channel.image, 0)} class="w-[20px] h-[20px]" alt="icon"> <p class="text-sm text-gray-500 font-normal break-words mt-1">${escape(event.channel.name)}</p> </div></div> </div></div> `;
              }
            }
          )} </div>`;
        })}`;
      }
    }
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredEvents;
  const labels = ["01 Jan", "05 Jan", "10 Jan", "15 Jan", "20 Jan", "25 Jan", "31 Jan"];
  const currentPeriodData = [5e3, 1e4, 8e3, 25e3, 3e3, 12e3, 5e3];
  const previousPeriodData = [4e3, 3e3, 3e3, 1e4, 4e3, 5e3, 7e3];
  let statsData = [
    {
      name: "Revenue",
      value: "$6,397",
      icon: "src/assets/svg/dollar.svg",
      percentage: 8
    },
    {
      name: "Ticket Sales",
      value: "100",
      icon: "src/assets/svg/ticket.svg",
      percentage: 1
    },
    {
      name: "Total events",
      value: "100",
      icon: "src/assets/svg/event.svg",
      percentage: 11
    }
  ];
  let events = [];
  const topEvents = [
    {
      date: "Jan 19, 2020",
      title: "The Chronicles from Your Journal",
      revenue: 100
    },
    {
      date: "Jan 20, 2020",
      title: "Insights from Your Diary",
      revenue: 75
    },
    {
      date: "Jan 24, 2020",
      title: "The Stories in Your Scribbles",
      revenue: 59
    },
    {
      date: "Feb 1, 2020",
      title: "Whispers from Your Pages",
      revenue: 40
    },
    {
      date: "Jan 19, 2020",
      title: "The Secrets in Your Jotter",
      revenue: 36
    }
  ];
  const underperformingEvents = [
    {
      date: "Feb 1, 2020",
      title: "The Reflections in Your Logbook",
      revenue: 20
    },
    {
      date: "Jan 24, 2020",
      title: "The Tales of Your Memoirs",
      revenue: 28
    },
    {
      date: "Jan 20, 2020",
      title: "Echoes from Your Notepad",
      revenue: 32
    },
    {
      date: "Jan 19, 2020",
      title: "The Secrets in Your Jotter",
      revenue: 36
    },
    {
      date: "Feb 1, 2020",
      title: "Whispers from Your Pages",
      revenue: 40
    }
  ];
  filteredEvents = events?.filter((event) => event?.show?.name?.toLowerCase());
  return `<div class="border border-gray-300 rounded-[8px] overflow-hidden"><div><div class="py-2 px-4" data-svelte-h="svelte-ot0tht"><h2 class="lg:font-normal lg:text-xl lg:leading-[30px] font-base font-medium leading-[24px]">Dashboard</h2> <p class="text-xs leading-[18px] text-gray-500 lg:block hidden">Last 30 days</p></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 border-t border-gray-300 bg-gray-50"><div class="flex flex-col gap-8 lg:col-span-8"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${validate_component(StatsCard, "StatsCard").$$render($$result, { stats: statsData }, {}, {})}</div> <div>${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Upcoming events",
      linkText: "See all",
      link: "/"
    },
    {},
    {
      default: () => {
        return `${`<div data-svelte-h="svelte-1csdr2k">loading ....</div>`}`;
      }
    }
  )}</div> <div>${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Revenue",
      linkText: "See all",
      subtitle: "Last 30 days",
      buttons: true
    },
    {},
    {
      default: () => {
        return `${validate_component(RevenueChart, "RevenueChart").$$render(
          $$result,
          {
            labels,
            currentPeriodData,
            previousPeriodData
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> <div>${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Recent Orders",
      linkText: "See all",
      link: "/"
    },
    {},
    {
      default: () => {
        return `${filteredEvents?.length === 0 ? `<div class="text-center text-gray-500 py-4" data-svelte-h="svelte-13geuk3">No events found.</div>` : `<div class="lg:block hidden">${validate_component(Table, "Table").$$render(
          $$result,
          {
            columns: OrderTableColumns,
            data: filteredEvents,
            bordered: false,
            isRounded: false,
            isDraggable: false,
            searchable: false,
            styles: {
              container: "w-full align-left whitespace-nowrap overflow-y-hidden overflow-x-scroll",
              thead: "text-xs font-semibold leading-[18px] text-gray-500 border-b border-gray-200  uppercase bg-gray-50 px-4 py-4 cursor-normal",
              tr: "text-sm text-gray-400 font-normal leading-[21px]",
              td: "text-sm border-b border-gray-200 !pr-0 ",
              th: "pr-0"
            },
            keyField: "id"
          },
          {},
          {}
        )}</div> <div class="lg:hidden">${validate_component(OrderCard, "OrderCard").$$render($$result, { data: filteredEvents }, {}, {})}</div>`}`;
      }
    }
  )}</div></div> <div class="flex flex-col gap-4 lg:col-span-4">${`<div data-svelte-h="svelte-1csdr2k">loading ....</div>`} <div>${validate_component(Card, "Card").$$render($$result, { title: "Top Events", buttons: true }, {}, {
    default: () => {
      return `${validate_component(EventsProgress, "EventsProgress").$$render($$result, { events: topEvents, variant: "top" }, {}, {})}`;
    }
  })}</div> <div>${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Underperforming Events",
      buttons: true
    },
    {},
    {
      default: () => {
        return `${validate_component(EventsProgress, "EventsProgress").$$render(
          $$result,
          {
            events: underperformingEvents,
            variant: "underperforming"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div></div></div></div></div>`;
});
export {
  Page as default
};
