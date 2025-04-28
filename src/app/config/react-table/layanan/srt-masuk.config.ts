import { ACTION_COLUMN } from "../action-column.config"

export const SRT_MASUK_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama", accessor: "nama", disableFilters: true },
  { Header: "NIK", accessor: "nik", disableFilters: true },
  {
    Header: "Tanggal Pelapor",
    accessor: "tanggalPelapor",
    disableFilters: true,
  },
  { Header: "Jenis Layanan", accessor: "jenisLayanan", disableFilters: true },
  { Header: "Keterangan", accessor: "keterangan", disableFilters: true },
  { Header: "Status", accessor: "status", disableFilters: true },
  ...ACTION_COLUMN,
]
