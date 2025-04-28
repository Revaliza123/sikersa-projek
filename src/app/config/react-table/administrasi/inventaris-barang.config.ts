import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_BARANG_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Barang",
    accessor: "nama_barang",
    disableFilters: true,
  },
  { Header: "Jumlah", accessor: "jumlah", disableFilters: true },
  {
    Header: "Satuan",
    accessor: "saturan",
    disableFilters: true,
  },
  { Header: "Identitas Spesifikasi Barang ", accessor: "identitas_spesifikasi_barang", disableFilters: true },
  ...ACTION_COLUMN,
]
