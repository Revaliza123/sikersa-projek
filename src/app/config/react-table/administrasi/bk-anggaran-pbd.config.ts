import { ACTION_COLUMN } from "../action-column.config"

export const BK_APBD_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Jenis Anggaran",
    accessor: "jenis_anggaran",
    disableFilters: true,
  },
  { Header: "Nomor Perdes", accessor: "nomer_perdes", disableFilters: true },
  {
    Header: "Tanggal Perdes",
    accessor: "tanggal_perdes",
    disableFilters: true,
  },
  { Header: "Lampiran", accessor: "lampiran", disableFilters: true },
  { Header: "Keterangan", accessor: "keterangan", disableFilters: true },
  ...ACTION_COLUMN,
]
