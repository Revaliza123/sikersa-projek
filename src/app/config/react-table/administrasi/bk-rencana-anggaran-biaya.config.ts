import { ACTION_COLUMN } from "../action-column.config"

export const BK_RENCANA_ANGGARAN_BIAYA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Jenis RAB APPB Desa",
    accessor: "jenis_RAB_APB_desa",
    disableFilters: true,
  },
  { Header: "Tanggal RAB", accessor: "tanggal_RAB", disableFilters: true },
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
