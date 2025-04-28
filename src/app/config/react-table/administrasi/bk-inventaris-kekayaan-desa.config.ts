import { ACTION_COLUMN } from "../action-column.config"

export const BK_INVENTARIS_KEKAYAAN_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Jenis Barang", accessor: "jenis_barang", disableFilters: true },
  { Header: "Nilai Beli ", accessor: "nilai_beli", disableFilters: true },
  {
    Header: "Keadaan Baik Awal Tahun",
    accessor: "keadaan_barang_bangunan_awal_tahun/baik",
    disableFilters: true,
  },
  {
    Header: "Keadaan Rusak Awal Tahun",
    accessor: "keadaan_barang_bangunan_awal_tahun/rusak",
    disableFilters: true,
  },
  {
    Header: "Tanggal Penghapusan",
    accessor: "penghapusan_barang_dan_bangunan/tanggal_dihapus",
    disableFilters: true,
  },
  {
    Header: "Keadaan Baik Akhir Tahun",
    accessor: "keadaan_barang_bangunan_akhir_tahun/baik",
    disableFilters: true,
  },
  {
    Header: "Keadaan Rusak Akhir Tahun",
    accessor: "keadaan_barang_bangunan_akhir_tahun/rusak",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
