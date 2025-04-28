import { ACTION_COLUMN } from "../action-column.config"

export const BR_COLUMN = () => [
  { Header: "No", accessor: "no", disableFilters: true, width: 10 },
  { Header: "Nama Surat", accessor: "nama", disableFilters: true },
  { Header: "Banyak Data", accessor: "data", disableFilters: true },
  ...ACTION_COLUMN,
]
