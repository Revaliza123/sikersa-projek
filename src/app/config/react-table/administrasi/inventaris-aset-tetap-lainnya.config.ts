import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_ASET_TETAP_LAINNYA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Barang / Jenis Barang",
    accessor: "nama_barang_jenis_barang",
    disableFilters: true,
  },
  { Header: "Jumlah", accessor: "jumlah", disableFilters: true },
  {
    Header: "Tahun Pengadaan",
    accessor: "tahun_pengadaan",
    disableFilters: true,
  },
  { Header: "Sumber Dana", accessor: "sumber_dana", disableFilters: true },
  {
    Header: "Harga Perolehan",
    accessor: "harga_perolehan",
    disableFilters: true,
  },
  { Header: "Lokasi", accessor: "lokasi", disableFilters: true },
  ...ACTION_COLUMN,
]
