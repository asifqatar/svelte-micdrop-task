<script lang="ts">
  import { createTableStore } from "./../../stores/tableStore";
  import { onDestroy, onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import type { TableColumn, TableProps } from "./types";

  import { cn } from "./../../utils/utils";
  import ExpandedRow from "./ExpandedRow.svelte";
  import TableHead from "./TableHead.svelte";
  import TablePagination from "./TablePagination.svelte";
  import TableRow from "./TableRow.svelte";
  import TableSearch from "./TableSearch.svelte";

  let currentPage = 1;
  export let searchQuery: Writable<string> = writable("");

  export let isRounded: TableProps["isRounded"] = false;
  export let isDraggable: TableProps["isDraggable"] = false;
  export let bordered: TableProps["bordered"] = false;
  export let classes: TableProps["classes"] = "";
  export let searchable: TableProps["searchable"] = false;
  export let paginated: TableProps["paginated"] = {
    status: false,
    totalPages: 0,
    pageSize: 0,
  };
  export let hasActions: TableProps["hasActions"] = false;
  export let hasCheckBox: TableProps["hasCheckBox"] = false;
  export let hasRadioButton: TableProps["hasRadioButton"] = false;
  export let data: any[] = [];
  export let keyField: TableProps["keyField"] = "id";
  export let mobileView: string[] = [];
  export let showTableHead: TableProps["showTableHead"] = true;
  export let actionsContent: TableProps["actionContent"] = null;
  export let styles: TableProps["styles"] = {};

  // Variables to handle device screen sizes
  let isMobile = false;
  let isTablet = false;
  let isDesktop = false;
  export let columns: TableColumn[] = []; // Ensure it's initialized
  let filteredColumns = []; // Initialize filteredColumns

  // Create a local writable store for filtered data
  let filteredData: Writable<any[]> = writable(data);

  // Create table store
  const {
    sortedData,
    selectedRows,
    selectAll,
    expandedRows,
    sortData,
    filterData,
    toggleRowSelectionRadio,
    toggleRowSelection,
    toggleSelectAll,
    toggleRowExpansion,
    handleDragStart,
    handleDrop,
  } = createTableStore(data, keyField);

  // Update screen sizes if window is available (browser only)
  const updateMedia = () => {
    if (typeof window !== "undefined") {
      isMobile = window.matchMedia("(max-width: 480px)").matches;
      isTablet = window.matchMedia(
        "(max-width: 768px) and (min-width: 481px)"
      ).matches;
      isDesktop = window.matchMedia("(min-width: 769px)").matches;
    }
  };

  $: screenSize = {
    isMobile,
    isTablet,
    isDesktop,
  };

  $: {
    searchQuery.subscribe((value) => {
      const filtered = data.filter((row) => {
        return columns.some((column) => {
          const cellValue = row[column.key] ?? "";
          return cellValue
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase());
        });
      });
      filteredData.set(filtered);
      filterData(value);
    });
  }

  $: filteredColumns = columns;

  // Update on mount
  onMount(() => {
    sortedData.set([...data]);

    // Update media on mount if we're in the browser
    if (typeof window !== "undefined") {
      updateMedia();
      window.addEventListener("resize", updateMedia);
    }
  });

  // Clean up event listener on destroy
  onDestroy(() => {
    searchQuery.set("");

    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateMedia);
    }
  });
</script>

<div
  class={cn(
    `inline-flex flex-col justify-center items-center bg-white`,
    {
      "p-3 rounded-md ": isRounded,
    },
    styles.container
  )}
>
  {#if searchable}
    <TableSearch
      style="p-3 rounded-md w-full"
      placeholder="Search..."
      bind:searchQuery
    />
  {/if}

  <table
    id="table"
    class={cn(
      "w-[100%] text-sm text-left text-gray-500 bg-white",
      styles.table
    )}
  >
    {#if showTableHead}
      <TableHead
        theadStyle={styles.thead}
        thStyle={styles.th}
        {isDraggable}
        {bordered}
        columns={filteredColumns}
        {selectAll}
        {sortData}
        {toggleSelectAll}
        {hasActions}
        {hasCheckBox}
        {hasRadioButton}
        {mobileView}
        {screenSize}
      />
    {/if}

    <tbody class={cn(styles.tbody)}>
      {#each $sortedData || [] as row, index}
        <TableRow
          tdStyle={styles.td}
          trStyle={styles.tr}
          {row}
          {index}
          columns={filteredColumns}
          {selectedRows}
          {handleDragStart}
          {handleDrop}
          {toggleRowSelection}
          {toggleRowSelectionRadio}
          {toggleRowExpansion}
          {hasActions}
          {classes}
          {keyField}
          {bordered}
          {hasCheckBox}
          {hasRadioButton}
          {actionsContent}
          {isDraggable}
          {mobileView}
          {screenSize}
        />

        <ExpandedRow
          tdStyle={styles.td}
          trStyle={styles.tr}
          hasActions
          {keyField}
          {expandedRows}
          {row}
          columns={filteredColumns}
        />
      {/each}
    </tbody>
  </table>

  {#if paginated?.status}
    <TablePagination
      isPaginated={paginated.status}
      totalPages={+paginated.totalPages}
      pageSize={+paginated.pageSize}
      on:pageChange={(event) => {}}
      bind:currentPage
    />
  {/if}
</div>
