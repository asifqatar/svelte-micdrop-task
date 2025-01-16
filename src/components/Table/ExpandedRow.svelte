<script>
  import { cn } from "./../../utils/utils";

  export let tdStyle;
  export let trStyle;
  export let expandedRows;
  export let row;
  export let columns;
  export let hasActions;
  export let keyField;
</script>

{#if $expandedRows?.has(row[keyField])}
  <tr class={cn("bg-gray-100", trStyle)}>
    <td
      colspan={columns.length + (hasActions ? 2 : 1)}
      class={cn("px-6 py-4", tdStyle)}
    >
      <!-- Custom expanded content goes here -->
      <div>
        <!-- Example: Displaying additional row information -->
        <p>
          {@html row["extraInfo"] || "No additional information available."}
        </p>
      </div>
    </td>
  </tr>
{/if}
