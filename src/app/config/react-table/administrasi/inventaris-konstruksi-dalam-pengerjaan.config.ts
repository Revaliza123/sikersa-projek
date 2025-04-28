import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_KONSTRUKSI_DALAM_PENGERJAAN = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Barang / Jenis Barang",
    accessor: "nama_barang_jenis_barang",
    disableFilters: true,
  },
  { Header: "Luas Lantai (M2)", accessor: "luas_lantai", disableFilters: true },
  { Header: "Letak/Lokasi Alamat", accessor: "lokasi", disableFilters: true },
  { Header: "Status Tanah", accessor: "status_tanah", disableFilters: true },
  {
    Header: "Asal Usul Pembiayaan",
    accessor: "asal_usul_pembiayaan",
    disableFilters: true,
  },
  {
    Header: "Nilai Kontrak (Ribuan Rp)",
    accessor: "nilai_kontrak",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
