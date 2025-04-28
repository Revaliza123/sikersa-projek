import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_BARANG_PERSEDIAAN = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Barang / Jenis Barang",
    accessor: "nama_barang_jenis_barang",
    disableFilters: true,
  },
  { Header: "Jumlah", accessor: "jumlah", disableFilters: true },
  { Header: "Sumber Dana ", accessor: "sumber_dana", disableFilters: true },
  {
    Header: "Harga Perolehan ",
    accessor: "harga_perolehan",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
