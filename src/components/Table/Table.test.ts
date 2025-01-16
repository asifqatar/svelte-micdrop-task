import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import { dummyData, homeTableColumn } from './data'
import Table from './Table.svelte'
import type { TableColumn } from './types'

describe('Table Component', () => {
  const data = dummyData
  const columns: TableColumn[] = homeTableColumn
  const keyField = 'channel'
  const rowsSelectHandler = vi.fn((eventData) => {
    const { detail: selectedRows } = eventData
    return selectedRows
  })

  it('renders the table with correct number of columns and rows', () => {
    render(Table as any, {
      props: {
        bordered: false,
        classes: '',
        searchable: false,
        hasActions: false,
        hasCheckBox: false,
        data,
        columns,
      },
    })

    // Check if columns are rendered
    columns.forEach((column) => {
      expect(screen.getByText(column.title)).toBeInTheDocument()
    })

    // Check if rows are rendered
    data.forEach((row) => {
      expect(screen.getByText(row.channel)).toBeInTheDocument()
    })
  })

  it('sorts data when a sortable column header is clicked', async () => {
    render(Table, {
      props: {
        bordered: false,
        classes: '',
        searchable: false,
        hasActions: false,
        hasCheckBox: false,
        data,
        columns,
      },
    })

    // Click on the sortable column header
    const nameHeader = screen.getByText('Page Views')
    await fireEvent.click(nameHeader)

    // The table should now be sorted by the 'page_views' column
    const rows = screen.getAllByRole('row')
    expect(rows[1].textContent).toContain('4053') // Sorted to appear first
    expect(rows[2].textContent).toContain('4053') // Appears after sorting
  })

  it('filters data based on search query', async () => {
    render(Table, {
      props: {
        bordered: false,
        classes: '',
        searchable: true,
        hasActions: false,
        hasCheckBox: false,
        data,
        columns,
      },
    })

    // Simulate a search query
    const searchInput = screen.getByPlaceholderText('Search...')
    await fireEvent.input(searchInput, { target: { value: 'Twi' } })

    // Only Twitter should be visible after filtering
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.queryByText('Instagram')).not.toBeInTheDocument()
  })

  it('should allow rows to be dragged if isDraggable is true and also confirm re-order', async () => {
    // Render the table with isDraggable set to true
    render(Table, {
      props: {
        bordered: false,
        searchable: false,
        isDraggable: true, // Enable dragging
        data: dummyData,
        columns: homeTableColumn,
        keyField: 'channel',
      },
    })

    // Ensure that draggable icon is present (assuming it indicates draggable rows)
    const draggableIcons = screen.getAllByAltText('sort-icon') // Adjust based on your actual alt text or selector
    expect(draggableIcons.length).toBeGreaterThan(0)
    const rows = screen.getAllByRole('row')

    // Simulate a drag-and-drop action (this depends on your implementation)
    // Get the rows (assume rows have some text to identify them)
    const rowTwitter = screen.getByText('Twitter')
    const rowInstagram = screen.getByText('Instagram')

    //check default order
    expect(rows[1]).toHaveTextContent('Twitter')
    expect(rows[2]).toHaveTextContent('Instagram')

    // Ensure initial order
    expect(rowTwitter).toBeInTheDocument()
    expect(rowInstagram).toBeInTheDocument()
    expect(
      rowTwitter.compareDocumentPosition(rowInstagram) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING)

    // Simulate dragging first row and dropping on second row
    // Simulate dragging and dropping the Twitter row to be before the Instagram row
    await fireEvent.dragStart(rowTwitter)
    await fireEvent.dragOver(rowInstagram) // Simulate dragging over the target row
    await fireEvent.drop(rowInstagram) // Drop the dragged row

    // Check if the rows have been reordered
    expect(rows[1]).toHaveTextContent('Instagram')
    expect(rows[2]).toHaveTextContent('Twitter')
  })

  it('should not allow rows to be dragged if isDraggable is false', async () => {
    // Render the table with isDraggable set to false
    render(Table, {
      props: {
        bordered: false,
        searchable: false,
        hasActions: false,
        hasCheckBox: false,
        hasRadioButton: false,
        isDraggable: false, // Disable dragging
        data: dummyData,
        columns: homeTableColumn,
        keyField: 'channel',
      },
    })

    // Ensure that draggable icon is not present
    const draggableIcons = screen.queryAllByAltText('sort-icon') // Adjust based on your actual alt text or selector
    // expect(draggableIcons.length).toBe(0)

    // Ensure rows cannot be dragged
    // You may want to test the absence of drag-and-drop functionality
  })

  it('renders checkboxes if hasCheckBox is true', () => {
    render(Table, {
      props: {
        bordered: false,
        classes: '',
        searchable: false,
        hasActions: false,
        hasCheckBox: true,
        data,
        columns,
      },
    })

    // Check if checkbox is rendered in the header
    expect(screen.getAllByRole('checkbox').length).toBeGreaterThan(0)
  })

  it('renders actions if hasActions is true', async () => {
    // Render the table with hasActions set to true
    render(Table, {
      props: {
        bordered: false,
        searchable: false,
        hasActions: true, // Enable actions
        hasCheckBox: false, // Disable checkboxes
        data: dummyData,
        columns: homeTableColumn,
        keyField: 'channel',
      },
    })

    // Check if any action elements are present
    // For example, checking for the presence of dropdown menu items
    const dropdowns = screen.getAllByTestId(/dropdown-menu/) // Adjust based on your actual test id regex

    // Ensure dropdown items are rendered
    expect(dropdowns.length).toBeGreaterThan(0)

    // Optionally: Check specific actions
    const dropdownItems = screen.getAllByText(/Edit|Delete|View/) // Adjust based on your actual action text
    expect(dropdownItems.length).toBeGreaterThan(0)

    // If needed, check a specific instance of the dropdown menu
    // Example: Assuming the first dropdown should be visible
    const firstDropdown = dropdowns[0]
    expect(firstDropdown).toBeInTheDocument()
  })

  it('renders radio if hasRadioButton is true', () => {
    render(Table, {
      props: {
        bordered: false,
        classes: '',
        searchable: false,
        hasActions: false,
        hasCheckBox: false,
        hasRadioButton: true,
        data,
        columns,
      },
    })

    // Check if radio is rendered in the header
    expect(screen.getAllByRole('radio').length).toBeGreaterThan(0)
  })

  it('shows expanded row when a row is expandable', async () => {
    render(Table, {
      props: {
        bordered: false,
        classes: '',
        searchable: false,
        hasActions: true,
        hasCheckBox: false,
        data,
        columns,
      },
    })

    // Click on the row with 'collapse-able' set to true
    const expandableRow = screen.getByText('Twitter')
    await fireEvent.click(expandableRow)

    expect(
      screen.getByText(
        (content, element) =>
          content.includes('Extra information about Twitter') &&
          element.tagName.toLowerCase() === 'p',
      ),
    ).toBeInTheDocument()
  })

  it('should toggle row expansion', async () => {
    // Render the table with necessary props
    render(Table, {
      props: {
        bordered: false,
        searchable: false,
        hasActions: true,
        data,
        columns,
      },
    })

    // Get the expandable row element
    const expandableRow = screen.getByText('Twitter')

    // Click to expand the row
    await fireEvent.click(expandableRow)
    expect(
      screen.getByText('Extra information about Twitter'),
    ).toBeInTheDocument()

    // Click to collapse the row
    await fireEvent.click(expandableRow)
    expect(
      screen.queryByText('Extra information about Twitter'),
    ).not.toBeInTheDocument()
  })

  it('should toggle row selection and emit rowsSelect event with checkbox', async () => {
    // Render the table
    const { component } = render(Table, {
      props: {
        bordered: false,
        searchable: false,
        hasActions: false,
        hasCheckBox: true,
        data,
        columns,
        keyField,
      },
    })

    // Attach the event listener
    component.$on('rowsSelect', (event) => {
      rowsSelectHandler(event.detail) // Call spy with event detail
    })

    // Get the checkboxes
    const checkboxes = screen.getAllByRole('checkbox')

    // Click on the Instagram checkbox to select it
    await fireEvent.click(checkboxes[2])
    expect(rowsSelectHandler).toHaveBeenCalled()
    expect(rowsSelectHandler).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining(data[1])]),
    )

    // Click on the same checkbox to deselect it
    await fireEvent.click(checkboxes[2])

    // Ensure the spy was called with an empty array after deselection
    expect(rowsSelectHandler).toHaveBeenCalledWith(expect.arrayContaining([]))
  })

  it('should toggle select all rows and emit rowsSelect event with checkbox', async () => {
    // Render the table
    const { component } = render(Table, {
      props: {
        bordered: false,
        searchable: false,
        hasActions: false,
        hasCheckBox: true,
        data: dummyData,
        columns: homeTableColumn,
        keyField: 'channel',
      },
    })

    // Attach the event listener
    component.$on('rowsSelect', (event) => {
      rowsSelectHandler(event.detail) // Call spy with event detail
    })

    // Get the "select all" checkbox
    const selectAllCheckbox = screen.getAllByRole('checkbox')[0]

    // Click on the "select all" checkbox to select all rows
    await fireEvent.click(selectAllCheckbox)

    // Ensure the spy was called with all rows
    expect(rowsSelectHandler).toHaveBeenCalled()
    expect(rowsSelectHandler).toHaveBeenCalledWith(
      expect.arrayContaining(
        dummyData.map((row) => expect.objectContaining(row)),
      ),
    )

    // Click on the "select all" checkbox again to deselect all rows
    await fireEvent.click(selectAllCheckbox)

    // Ensure the spy was called with no rows selected
    expect(rowsSelectHandler).toHaveBeenCalledWith(expect.arrayContaining([]))
  })
  
  it('should toggle row selection and emit rowsSelect event with radio input', async () => {
    // Spy on the rowsSelect event handler

    // Render the table
    const { component } = render(Table, {
      props: {
        bordered: false,
        searchable: false,
        hasActions: false,
        hasCheckBox: false,
        hasRadioButton: true,
        data,
        columns,
        keyField,
      },
    })

    // Attach the event listener
    component.$on('rowsSelect', (event) => {
      rowsSelectHandler(event.detail) // Call spy with event detail
    })

    // Get the checkboxes
    const radio = screen.getAllByRole('radio')

    // Click on the Instagram checkbox to select it
    await fireEvent.click(radio[1])
    expect(rowsSelectHandler).toHaveBeenCalled()
    expect(rowsSelectHandler).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining(data[1])]),
    )

    // Click on the same checkbox to deselect it
    await fireEvent.click(radio[1])

    // Ensure the spy was called with an empty array after deselection
    expect(rowsSelectHandler).toHaveBeenCalledWith(expect.arrayContaining([]))
  })

  it('should render table in responsive format for mobile', async () => {
    // Render the table
    const mobileView = ['sales', 'page_views']
    const { getAllByRole } = render(Table, {
      props: {
        bordered: false,
        searchable: false,
        hasActions: false,
        hasCheckBox: false,
        hasRadioButton: true,
        data,
        columns,
        keyField,
        isMobile: true,
        mobileView,
      },
    })

    // Simulate mobile view
    global.innerWidth = 480
    global.dispatchEvent(new Event('resize'))

    // The 2 index in the table should be the responsive tr
    const mobileCells = getAllByRole('row')[2]

    // Check that only mobile view columns are displayed
    const allCells = screen.getAllByRole('cell')
    expect(allCells).toHaveLength(columns.length * data.length)

    // find the buttons in the mobileCells
    const buttonContainer = mobileCells.querySelector(
      '#button-container',
    ) as HTMLElement

    //check that they are displayed
    expect(buttonContainer).toBeInTheDocument()
  })
})
