import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_TANAH_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Barang / Jenis Barang",
    accessor: "nama_barang_jenis_barang",
    disableFilters: true,
  },
  { Header: "Jenis Lahan", accessor: "jenis_lahan", disableFilters: true },
  { Header: "Luas (M2)", accessor: "luas", disableFilters: true },
  { Header: "Lokasi", accessor: "lokasi", disableFilters: true },
  { Header: "Pengunaan", accessor: "penggunaan", disableFilters: true },
  { Header: "Harga (Ribuan)", accessor: "harga", disableFilters: true },
  ...ACTION_COLUMN,
]
