import { ACTION_COLUMN } from "./action-column.config"

export const VISUALIZATION_COLUMNS = () => [
  { Header: "Type", accessor: "type", disableFilters: true, width: "100" },
  { Header: "Title", accessor: "title", disableFilters: true },
  { Header: "Data Source", accessor: "datasource", disableFilters: true },
  { Header: "Case", accessor: "case", disableFilters: true },
  { Header: "Creator", accessor: "creator", disableFilters: true },
  { Header: "Last Update", accessor: "updatedAt", disableFilters: true },
  ...ACTION_COLUMN,
]
