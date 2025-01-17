<script lang="ts">
  import { cn } from "./../../utils/utils";
  import { Checkbox } from "flowbite-svelte";
  import { onMount } from "svelte";
  import type { TableProps } from "./types";
  import DownIcon from "./../../assets/svg/arrow-down.svg";

  export let theadStyle;
  export let thStyle;
  export let columns;
  export let bordered: TableProps["bordered"];
  export let hasCheckBox: TableProps["hasCheckBox"];
  export let hasRadioButton: TableProps["hasRadioButton"];
  export let hasActions: TableProps["hasActions"];
  export let isDraggable: TableProps["isDraggable"];
  export let selectAll;
  export let sortData;
  export let toggleSelectAll;
  export let mobileView = [];
  export let screenSize: TableProps["screenSize"];
  export let isResizable: TableProps["isResizable"];


  let table;

  function createResizableColumn(col, resizer) {
    let x = 0;
    let w = 0;

    const mouseDownHandler = (e) => {
      e.stopPropagation();
      x = e.clientX;
      w = parseInt(window.getComputedStyle(col).width, 10);

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
      resizer.classList.add("resizing");
    };

    const mouseMoveHandler = (e) => {
      e.stopPropagation();
      const dx = e.clientX - x;
      col.style.width = `${w + dx}px`;
    };

    const mouseUpHandler = () => {
      resizer.classList.remove("resizing");
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    resizer.addEventListener("mousedown", mouseDownHandler);
  }

  function createResizableTable(table) {
    const tableHeight = table.getBoundingClientRect().height;
    const cols = table.querySelectorAll("th");
    cols.forEach((col) => {
      const resizer = document.createElement("div");
      resizer.classList.add("resizer");
      resizer.style.height = `${tableHeight}px`;

      col.appendChild(resizer);
      createResizableColumn(col, resizer);
    });
  }

  function initializeTable() {
    table = document.querySelector("table");
    if (table) {
      createResizableTable(table);
    }
  }

  onMount(() => {
    if (columns && columns.length > 0) {
      if (isResizable) {
        initializeTable();
      }
    }
  });

  if ((import.meta as any).hot) {
    (import.meta as any).hot.accept(() => {
      initializeTable();
    });
  }
</script>

<thead class={cn("text-xs text-gray-700 uppercase bg-white", theadStyle)}>
  <tr id="header-row">
    {#if hasCheckBox}
      <th class={cn("!p-4", thStyle)}>
        <Checkbox on:change={toggleSelectAll} checked={$selectAll} />
      </th>
    {/if}
    {#if hasRadioButton}
      <th class={cn("!p-4", thStyle)}></th>
    {/if}
    {#if isDraggable}
      <th class={cn("!p-4", thStyle)}>No. </th>
    {/if}
    {#each columns as column, index}
      <th
        id={`th-${index}`}
        data-column={index}
        scope="col"
        class={cn(
          "px-6 py-4 cursor-pointer",
          {
            "border-b border-r": bordered,
            hidden:
              screenSize.isMobile &&
              mobileView.length > 0 &&
              !mobileView.includes(column.title),
          },
          thStyle
        )}
        on:click={() => column.sortable && sortData(column.key)}
      >
        <div class="flex flex-row gap-2">
          <span class="my-auto">{column.title}</span>
          {#if column.sortable}
            <img class="my-auto" src={DownIcon} alt="sort-icon" />
          {/if}
        </div>
      </th>
    {/each}
    {#if hasActions}
      <th class={cn("!p-4", thStyle)}></th>
    {/if}
  </tr>
</thead>

<style>
  thead th {
    position: relative;
    cursor: grab;
    user-select: none;
  }

  thead th:active {
    cursor: grabbing;
  }

  .dragging {
    background-color: #f0f0f0;
  }

  .resizer {
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    cursor: col-resize;
    user-select: none;
  }

  .resizer:hover,
  .resizer.resizing {
    background-color: #a0a0a0;
  }
</style>
