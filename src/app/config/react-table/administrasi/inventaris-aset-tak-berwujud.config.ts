import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_ASET_TAK_BERWUJUD = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Barang / Jenis Barang",
    accessor: "nama_barang_jenis_barang",
    disableFilters: true,
  },
  { Header: "Masa Berlaku", accessor: "masa_berlaku", disableFilters: true },
  { Header: "Sumber Dana ", accessor: "sumber_dana", disableFilters: true },
  {
    Header: "Harga Perolehan ",
    accessor: "harga_perolehan",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
