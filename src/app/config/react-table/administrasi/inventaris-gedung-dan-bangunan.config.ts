import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_GEDUNG_DAN_BANGUNAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Barang / Jenis Barang",
    accessor: "nama_barang_jenis_barang",
    disableFilters: true,
  },
  {
    Header: "Kondisi Bangunan (B,KB,RB)",
    accessor: "kondisi_bangunan",
    disableFilters: true,
  },
  { Header: "Letak / Lokasi Alamat", accessor: "lokasi", disableFilters: true },
  { Header: "Luas (M2) ", accessor: "luas", disableFilters: true },
  { Header: "Status Tanah ", accessor: "status_tanah", disableFilters: true },
  { Header: "Harga", accessor: "harga", disableFilters: true },
  ...ACTION_COLUMN,
]
