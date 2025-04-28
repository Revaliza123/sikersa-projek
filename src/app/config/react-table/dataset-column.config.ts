import { ACTION_COLUMN } from "./action-column.config"

export const DATASET_COLUMNS = () => [
  { Header: "Name", accessor: "name", disableFilters: true },
  { Header: "Workspace", accessor: "workspace", disableFilters: true },
  { Header: "Created Update", accessor: "createdAt", disableFilters: true },
  { Header: "Last Update", accessor: "updatedAt", disableFilters: true },
  ...ACTION_COLUMN,
]
