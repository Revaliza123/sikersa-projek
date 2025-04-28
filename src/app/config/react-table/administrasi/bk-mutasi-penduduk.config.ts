import { ACTION_COLUMN } from "../action-column.config"

export const BK_MUTASI_PENDUDUK_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Lengkap",
    accessor: "nama_lengkap",
    disableFilters: true,
  },
  {
    Header: "Tempat & Tanggal Lahir",
    accessor: "tempat_tanggal_lahir",
    disableFilters: true,
  },
  { Header: "Umur", accessor: "umur", disableFilters: true },
  { Header: "Jenis Kelamin", accessor: "jenis_kelamin", disableFilters: true },
  { Header: "Mutasi", accessor: "jenis_mutasi", disableFilters: true },
  { Header: "Tanggal Datang", accessor: "datang", disableFilters: true },
  { Header: "Tanggal Pergi", accessor: "pindah", disableFilters: true },
  { Header: "Tanggal Kematian", accessor: "meninggal", disableFilters: true },
  ...ACTION_COLUMN,
]
