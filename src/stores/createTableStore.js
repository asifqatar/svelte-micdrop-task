import { createEventDispatcher } from 'svelte';
import { writable, get } from 'svelte/store';

export function createTableStore(data, keyField) {
  const dispatch = createEventDispatcher();

  const selectedRows = writable(new Set());
  const expandedRows = writable(new Set());
  const selectAll = writable(false);
  const sortedData = writable([...data]);

  let dragIndex = null;

  const toggleRowSelection = (id) => {
    selectedRows.update((currentSelection) => {
      const updatedSelection = new Set(currentSelection);
      if (updatedSelection.has(id)) {
        updatedSelection.delete(id);
      } else {
        updatedSelection.add(id);
      }

      const selectedData = data.filter((row) => updatedSelection.has(row[keyField]));
      dispatch('rowsSelect', selectedData);

      selectAll.set(updatedSelection.size === data.length);
      return updatedSelection;
    });
  };

  const toggleSelectAll = () => {
    selectAll.update((currentValue) => {
      const isSelectingAll = !currentValue;
      const updatedSelection = isSelectingAll
        ? new Set(data.map((row) => row[keyField]))
        : new Set();

      selectedRows.set(updatedSelection);

      const selectedData = isSelectingAll ? data : [];
      dispatch('rowsSelect', selectedData);

      return isSelectingAll;
    });
  };

  const toggleRowSelectionRadio = (id) => {
    selectedRows.update(() => {
      const updatedSelection = new Set([id]);

      const selectedData = data.filter((row) => updatedSelection.has(row[keyField]));
      dispatch('rowsSelect', selectedData);

      selectAll.set(false); 
      return updatedSelection;
    });
  };

  const sortData = (columnKey) => {
    sortedData.update((currentData) =>
      [...currentData].sort((rowA, rowB) => (rowA[columnKey] > rowB[columnKey] ? 1 : -1))
    );
  };

  const filterData = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    sortedData.set(
      data.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(lowerCaseSearchTerm)
        )
      )
    );
  };

  const toggleRowExpansion = (id) => {
    expandedRows.update((currentExpanded) => {
      const updatedExpanded = new Set(currentExpanded);
      if (updatedExpanded.has(id)) {
        updatedExpanded.delete(id);
      } else {
        updatedExpanded.add(id);
      }
      return updatedExpanded;
    });
  };

  const handleDragStart = (startIndex) => {
    dragIndex = startIndex;
  };

  const handleDrop = (endIndex) => {
    if (dragIndex !== null && dragIndex !== endIndex) {
      sortedData.update((currentData) => {
        const reorderedData = [...currentData];
        const [movedRow] = reorderedData.splice(dragIndex, 1);
        reorderedData.splice(endIndex, 0, movedRow);
        return reorderedData;
      });

      dispatch('rowsReordered', get(sortedData));
    }
    dragIndex = null;
  };

  return {
    sortedData,
    selectedRows,
    selectAll,
    expandedRows,
    toggleRowSelection,
    toggleRowSelectionRadio,
    toggleSelectAll,
    toggleRowExpansion,
    sortData,
    filterData,
    handleDragStart,
    handleDrop,
  };
}
