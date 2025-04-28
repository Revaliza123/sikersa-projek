import { ACTION_COLUMN } from "../action-column.config"

export const BK_KAS_PEMBANTU_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Tanggal",
    accessor: "tanggal",
    disableFilters: true,
  },
  {
    Header: "Keterangan",
    accessor: "keterangan",
    disableFilters: true,
  },
  {
    Header: "Lampiran",
    accessor: "lampiran",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
