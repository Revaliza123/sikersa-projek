import { ACTION_COLUMN } from "../action-column.config"

export const PENGATURAN_LOGIN_SLIDER_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "File", accessor: "file", disableFilters: true, disableSort: true },
  { Header: "Title", accessor: "title", disableFilters: true },
  { Header: "Description", accessor: "description", disableFilters: true },
  { Header: "Number", accessor: "number", disableFilters: true },
  ...ACTION_COLUMN,
]
