import { ACTION_COLUMN } from "../action-column.config"

export const BK_KADER_PEMBERDAYAAN_MASYARAKAT_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama", accessor: "nama", disableFilters: true },
  { Header: "Umur", accessor: "umur", disableFilters: true },
  { Header: "Jenis Kelamin", accessor: "jenis_kelamin", disableFilters: true },
  { Header: "Pendidikan/Kursus", accessor: "pendidikan", disableFilters: true },
  { Header: "Bidang", accessor: "bidang", disableFilters: true },
  ...ACTION_COLUMN,
]
