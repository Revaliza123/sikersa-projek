import { ACTION_COLUMN } from "../action-column.config"

export const PERIZINAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true, width: "5%" },
  {
    Header: "Jenis Surat",
    accessor: "jenisSurat",
    disableFilters: true,
    width: "90%",
  },
  ...ACTION_COLUMN,
]
