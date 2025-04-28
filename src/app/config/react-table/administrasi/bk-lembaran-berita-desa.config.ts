import { ACTION_COLUMN } from "../action-column.config"

export const BK_LEMBARAN_BERITA_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Jenis Peraturan",
    accessor: "jenis_peraturan",
    disableFilters: true,
  },
  {
    Header: "Nomor Ditetapkan",
    accessor: "nomor_peraturan",
    disableFilters: true,
  },
  {
    Header: "Tanggal Ditetapkan",
    accessor: "tanggal_peraturan",
    disableFilters: true,
  },
  { Header: "Tentang", accessor: "tentang", disableFilters: true },
  ...ACTION_COLUMN,
]
