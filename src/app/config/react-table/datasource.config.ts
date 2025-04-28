import { ACTION_COLUMN } from "./action-column.config"

export const DATASOURCE_COLUMNS = () => [
  { Header: "Name", accessor: "name", disableFilters: true },
  { Header: "Database", accessor: "database", disableFilters: true },
  { Header: "Index", accessor: "index", disableFilters: true },
  { Header: "Connection", accessor: "connection", disableFilters: true },
  { Header: "Last Update", accessor: "updatedAt", disableFilters: true },
  ...ACTION_COLUMN,
]
