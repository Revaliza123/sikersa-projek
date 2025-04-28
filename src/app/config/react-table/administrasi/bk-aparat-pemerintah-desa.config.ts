import { ACTION_COLUMN } from "../action-column.config"

export const BK_APARAT_PEMERINTAH_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama", accessor: "nama", disableFilters: true },
  { Header: "Jabatan", accessor: "jabatan", disableFilters: true },
  {
    Header: "Tanggal Pengangkatan",
    accessor: "tanggal_keputusan_pengangkatan",
    disableFilters: true,
  },
  {
    Header: "Tanggal Pemberhentian",
    accessor: "tanggal_keputusan_pemberhentian",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
