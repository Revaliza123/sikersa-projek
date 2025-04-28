import { ACTION_COLUMN } from "../action-column.config"

export const BK_LETTER_C_TANAH_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama", accessor: "nama_wajib_iuran", disableFilters: true },
  {
    Header: "NIK Wajib Iuran",
    accessor: "nik_wajib_iuran",
    disableFilters: true,
  },
  { Header: "No. Buku", accessor: "no_buku", disableFilters: true },
  { Header: "Tanah Kering", accessor: "tanah_kering", disableFilters: true },
  { Header: "Tanah Sawah", accessor: "tanah_sawah", disableFilters: true },
  ...ACTION_COLUMN,
]
