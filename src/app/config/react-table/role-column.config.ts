import { ACTION_COLUMN } from "./action-column.config"

export const ROLE_COLUMNS = () => [
  { Header: "Name", accessor: "name", disableFilters: true },
  { Header: "Level", accessor: "level", disableFilters: true },
  { Header: "Last Update", accessor: "updatedAt", disableFilters: true },
  ...ACTION_COLUMN,
]
