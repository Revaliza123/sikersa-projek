import { ACTION_COLUMN } from "../action-column.config"

export const AKTIVASI_AKUN_DISETUJUI_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Username", accessor: "username", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "namaLengkap", disableFilters: true },
  { Header: "Email", accessor: "email", disableFilters: true },
  { Header: "No HP", accessor: "noHp", disableFilters: true },
  { Header: "Role", accessor: "role", disableFilters: true },
  { Header: "Wilayah", accessor: "wilayah", disableFilters: true },
  { Header: "Status", accessor: "status", disableFilters: true },
  ...ACTION_COLUMN,
]

export const AKTIVASI_AKUN_DITOLAK_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Username", accessor: "username", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "namaLengkap", disableFilters: true },
  { Header: "Email", accessor: "email", disableFilters: true },
  { Header: "No HP", accessor: "noHp", disableFilters: true },
  { Header: "Role", accessor: "role", disableFilters: true },
  { Header: "Wilayah", accessor: "wilayah", disableFilters: true },
  { Header: "Status", accessor: "status", disableFilters: true },
  { Header: "Alasan", accessor: "alasan", disableFilters: true },
  ...ACTION_COLUMN,
]

export const AKTIVASI_AKUN_AKTIF_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Username", accessor: "username", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "namaLengkap", disableFilters: true },
  { Header: "Email", accessor: "email", disableFilters: true },
  { Header: "No HP", accessor: "noHp", disableFilters: true },
  { Header: "Role", accessor: "role", disableFilters: true },
  { Header: "Wilayah", accessor: "wilayah", disableFilters: true },
  { Header: "Status", accessor: "status", disableFilters: true },
  ...ACTION_COLUMN,
]
