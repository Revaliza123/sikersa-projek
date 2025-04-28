import { ACTION_COLUMN } from "../action-column.config"

export const BK_TANAH_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Perorangan/Badan Hukum",
    accessor: "pemilik/nama_perorangan_badan_hukum",
    disableFilters: true,
  },
  { Header: "Luas Tanah", accessor: "tanah/luas_tanah", disableFilters: true },
  {
    Header: "Status Hak Tanah",
    accessor: "tanah/status_hak_tanah",
    disableFilters: true,
  },
  {
    Header: "Penggunaan Tanah",
    accessor: "tanah/penggunaan_tanah",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
