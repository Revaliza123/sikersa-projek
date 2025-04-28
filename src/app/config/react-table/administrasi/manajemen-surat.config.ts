import { ACTION_COLUMN } from "../action-column.config"

export const MANAJEMEN_SURAT_COLUMN = () => [
  { Header: "No", accessor: "no", disableFilters: true, show: true },
  {
    Header: "Jenis layanan",
    accessor: "jenisLayanan",
    disableFilters: true,
    show: true,
  },
  {
    Header: "Kategori",
    accessor: "kategori",
    disableFilters: true,
    show: true,
  },
  {
    Header: "Keterangan",
    accessor: "deskripsi",
    disableFilters: true,
    show: true,
  },
  ...ACTION_COLUMN,
]
