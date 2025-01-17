import { SvelteComponent } from 'svelte'

export interface TableColumn {
  visible: boolean;
  key?: string
  title?: string
  sortable?: boolean
  width?: string
  customRender?: (value: any) => string
}

export interface TableProps {
  searchQuery?: string | number
  hasActions?: boolean
  bordered?: boolean
  classes?: string
  columns: TableColumn[]
  data?: any[]
  keyField?: string
  searchable?: boolean
  itemsPerPage?: number
  isResizable?: boolean
  paginated?: {
    status: boolean
    totalPages: string | number
    pageSize: string | number
  }
  hasCheckBox?: boolean
  hasRadioButton?: boolean
  isDraggable?: boolean
  isRounded?: boolean
  showTableHead?: boolean
  actionContent?: SvelteComponent | string
  screenSize?: {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
  }
  styles: {
    container?: string
    table?: string
    thead?: string
    tbody?: string
    tr?: string
    th?: string
    td?: string
  }
}
