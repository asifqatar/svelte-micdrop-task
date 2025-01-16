import { writable, get } from 'svelte/store'
import { createEventDispatcher } from 'svelte'

export function createTableStore(initialData, keyField) {
  const dispatcher = createEventDispatcher()

  const sortedData = writable([...initialData])
  const selectedRows = writable(new Set())
  const selectAll = writable(false)
  const expandedRows = writable(new Set())
  let draggedRowIndex = null
  let sortOrders = {} // Track sort order for each column

  const sortData = (key) => {
    sortedData.update((current) => {
      return [...current].sort((a, b) => (a[key] > b[key] ? 1 : -1))
    })
  }

  const filterData = (query) => {
    sortedData.set(
      initialData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase()),
        ),
      ),
    )
  }

  const toggleRowSelection = (rowKey) => {
    selectedRows.update((current) => {
      const updated = new Set(current)
      const selectedRow = initialData.find((row) => row[keyField] === rowKey)

      if (updated.has(rowKey)) {
        updated.delete(rowKey)
      } else {
        updated.add(rowKey)
      }

      const selectedData = initialData.filter((row) =>
        updated.has(row[keyField]),
      )
      dispatcher('rowsSelect', selectedData)

      selectAll.set(updated.size === initialData.length)
      return updated
    })
  }

  const toggleSelectAll = () => {
    selectAll.update((value) => {
      const newValue = !value
      const updated = newValue
        ? new Set(initialData.map((row) => row[keyField]))
        : new Set()

      selectedRows.set(updated)
      const selectedData = newValue ? initialData : []
      dispatcher('rowsSelect', selectedData)

      return newValue
    })
  }

  const toggleRowExpansion = (rowKey) => {
    expandedRows.update((current) => {
      const updated = new Set(current)
      if (updated.has(rowKey)) {
        updated.delete(rowKey)
      } else {
        updated.add(rowKey)
      }
      return updated
    })
  }

  const handleDragStart = (index) => {
    draggedRowIndex = index
  }

  const handleDrop = (index) => {
    const droppedIndex = draggedRowIndex
    if (droppedIndex !== null && droppedIndex !== index) {
      sortedData.update((rows) => {
        const updatedRows = [...rows]
        const [movedRow] = updatedRows.splice(droppedIndex, 1)
        updatedRows.splice(index, 0, movedRow)
        return updatedRows
      })
      dispatcher('rowsReordered', get(sortedData))
    }
    draggedRowIndex = null
  }

  const toggleRowSelectionRadio = (rowKey) => {
    selectedRows.update((current) => {
      const updated = new Set() // Create a new set to ensure only one row is selected
      const selectedRow = initialData.find((row) => row[keyField] === rowKey)

      if (selectedRow) {
        updated.add(rowKey) // Add the selected row key to the set
      }

      const selectedData = initialData.filter((row) =>
        updated.has(row[keyField]),
      )
      dispatcher('rowsSelect', selectedData) // Dispatch the selected row data

      selectAll.set(false) // Since only one row can be selected, `selectAll` should be false
      return updated
    })
  }

  return  {
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
    handleDrop,
  }
}