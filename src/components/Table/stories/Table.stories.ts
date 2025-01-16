import { convertToDate } from './../../../utils/utils'
import data from './../../../utils/data/table/bookingsTable.json'
import type { BookingData } from './../../../utils/data/table/types'
import type { Meta, StoryObj } from '@storybook/svelte'
import Table from '../Table.svelte'
import { basicTableColumn, dummyData, homeTableColumn } from '../data'

// Prepare the data
const bookingData = data.map((item: BookingData) => ({
  id: item.id,
  name: item.name,
  ethnicity: item.ethnicity,
  gender: item.gender === 0 ? 'Male' : 'Female',
  location: item.listPosition,
  tier: item.tier,
  lastBookedDate: convertToDate(item.lastBookedDate),
  'collapse-able': item.tier === 1 || item.tier === 3, // Example logic,
  extraInfo: `Extra information about ${item.name}`, // Additional data for collapsible row
}))

const meta: Meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    hasActions: { control: 'boolean' },
    bordered: { control: 'boolean' },
    classes: { control: 'text' },
    searchable: { control: 'boolean' },
    hasCheckBox: { control: 'boolean' },
    paginated: {
      control: 'object',
      description: 'Controls pagination settings',
      defaultValue: {
        status: false,
        totalPages: 0,
        pageSize: 0,
      },
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: '{ status: false, totalPages: 0, pageSize: 0 }',
        },
      },
      fields: {
        status: {
          control: 'boolean',
          description: 'Enable or disable pagination',
          defaultValue: false,
          table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
          },
        },
        totalPages: {
          control: 'number',
          description: 'Total number of pages',
          defaultValue: 0,
          table: {
            type: { summary: 'number' },
            defaultValue: { summary: '0' },
          },
        },
        pageSize: {
          control: 'number',
          description: 'Number of items per page',
          defaultValue: 0,
          table: {
            type: { summary: 'number' },
            defaultValue: { summary: '0' },
          },
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<Table>

export const Default: Story = {
  args: {
    keyField: 'id',
    searchable: false,
    paginated: {
      status: false,
      totalPages: 0,
      pageSize: 0,
    },
    hasActions: false,
    hasCheckBox: false,
    bordered: false,
    isDraggable: false,
    classes: '',
    columns: basicTableColumn,
    data: bookingData,
  },
}

export const View2_With_Checkbox_and_Actions: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    hasCheckBox: true,
    hasActions: true,
    columns: homeTableColumn,
    data: dummyData,
  },
}

export const View4_With_Custom_Column_Renderer: Story = {
  args: {
    keyField: 'id',
    searchable: false,
    paginated: {
      status: false,
      totalPages: 0,
      pageSize: 0,
    },
    hasActions: false,
    hasCheckBox: false,
    bordered: false,
    isDraggable: false,
    classes: '',
    columns: basicTableColumn,
    data: bookingData,
  },
}

export const View5and6_With_Custom_Actions: Story = {
  render: (args) => ({
    Component: Table,
    props: {
      ...args,
      actionsContent: `
        <div class="flex space-x-2">
          <Button class="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
        </div>
      `,
    },
  }),
  args: {
    keyField: 'channel',
    hasCheckBox: true,
    hasActions: true,
    columns: homeTableColumn,
    data: dummyData,
  },
}

export const View11Draggable: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    isDraggable: true,
    hasCheckBox: false,
    hasActions: true,
    columns: homeTableColumn,
    data: dummyData,
  },
}

export const View15_Fully_Controllable_UI: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    searchable: false,
    paginated: {
      status: false,
      totalPages: 0,
      pageSize: 0,
    },
    hasActions: false,
    hasCheckBox: false,
    bordered: false,
    isDraggable: false,
    classes: '',
    columns: homeTableColumn,
    data: dummyData,
  },
}

export const View16WithCheckbox: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    hasCheckBox: true,
    hasActions: true,
    columns: homeTableColumn,
    data: dummyData,
  },
}

export const View17WithRadioButton: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    hasRadioButton: true,
    hasActions: false,
    columns: homeTableColumn,
    data: dummyData,
  },
}
export const View32_Swipeable: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    hasRadioButton: true,
    hasActions: false,
    columns: homeTableColumn,
    data: dummyData,
    isMobile: true,
    mobileView: ['sales', 'page_views'],
  },
}

export const TableLibrary4and5: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    hasCheckBox: false,
    hasRadioButton: true,
    hasActions: false,
    isDraggable: false,
    isRounded: false,
    mobileView: ['sales', 'tickets_sold'],
    paginated: {
      status: false,
      totalPages: 0,
      pageSize: 0,
    },
    columns: homeTableColumn,
    data: dummyData,
  },
}

export const TableLibrary8_With_Pagination: Story = {
  render: (args) => ({
    Component: Table,
    props: args,
  }),
  args: {
    keyField: 'channel',
    hasCheckBox: true,
    hasActions: true,
    paginated: {
      status: true,
      totalPages: 8,
      pageSize: 4,
    },
    columns: homeTableColumn,
    data: dummyData,
  },
}
