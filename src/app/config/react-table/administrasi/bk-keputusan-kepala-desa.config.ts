import { ACTION_COLUMN } from "../action-column.config"

export const BK_KEPUTUSAN_KEPALA_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nomor Keputusan",
    accessor: "nomor_keputusan",
    disableFilters: true,
  },
  {
    Header: "Tanggal Keputusan",
    accessor: "tanggal_keputusan",
    disableFilters: true,
  },
  { Header: "Tentang", accessor: "tentang", disableFilters: true },
  { Header: "Lampiran", accessor: "lampiran", disableFilters: true },
  ...ACTION_COLUMN,
]
