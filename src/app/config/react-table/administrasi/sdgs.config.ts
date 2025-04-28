import { ACTION_COLUMN } from "../action-column.config"

export const SDGS_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Kategori", accessor: "category", disableFilters: true },
  {
    Header: "Nama",
    accessor: "nama",
    disableFilters: true,
  },
  { Header: "NIK", accessor: "nik", disableFilters: true },
  {
    Header: "Nomor KK",
    accessor: "nomor_kartu_keluarga",
    disableFilters: true,
  },
  { Header: "Desa", accessor: "desa", disableFilters: true },
  { Header: "RT", accessor: "rt", disableFilters: true },
  { Header: "RW", accessor: "rw", disableFilters: true },
  { Header: "Tanggal upload", accessor: "createdAt", disableFilters: true },
  { Header: "Tanggal Diubah", accessor: "updatedAt", disableFilters: true },
  { Header: "Status", accessor: "status", disableFilters: true },
  ...ACTION_COLUMN,
]
