import { ACTION_COLUMN } from "../action-column.config"

export const PRODESKEL_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nomor KK", accessor: "nomorKK", disableFilters: true },
  {
    Header: "Nama Kepala Keluarga",
    accessor: "namaKepalaKeluarga",
    disableFilters: true,
  },
  { Header: "Bulan", accessor: "bulan", disableFilters: true },
  { Header: "Tahun", accessor: "tahun", disableFilters: true },
  { Header: "Nama Pengisi", accessor: "namaPengisi", disableFilters: true },
  ...ACTION_COLUMN,
]
