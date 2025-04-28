import { ACTION_COLUMN } from "../action-column.config"

export const SRT_KETERANGAN_BELUM_PERNAH_NIKAH_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "namaLengkap", disableFilters: true },
  { Header: "Nama Pasangan", accessor: "namaPasangan", disableFilters: true },
  { Header: "Nomor Surat", accessor: "noSurat", disableFilters: true },
  { Header: "Tanggal Nikah", accessor: "tanggalNikah", disableFilters: true },
  ...ACTION_COLUMN,
]
