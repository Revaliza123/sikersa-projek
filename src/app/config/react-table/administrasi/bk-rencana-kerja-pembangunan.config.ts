import { ACTION_COLUMN } from "../action-column.config"

export const BK_RENCANA_KERJA_PEMBANGUNAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama Proyek", accessor: "nama_proyek", disableFilters: true },
  { Header: "Lokasi", accessor: "lokasi", disableFilters: true },
  { Header: "Biaya", accessor: "jumlah_biaya", disableFilters: true },
  { Header: "Pelaksana", accessor: "pelaksana", disableFilters: true },
  ...ACTION_COLUMN,
]
