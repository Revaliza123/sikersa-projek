import { ACTION_COLUMN } from "../action-column.config"

export const BK_PENDUDUK_SEMENTARA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "NIK", accessor: "nik", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "nama_lengkap", disableFilters: true },
  // { Header: 'Umur', accessor: 'umur', disableFilters: true },
  { Header: "Jenis Kelamin", accessor: "jenis_kelamin", disableFilters: true },
  { Header: "Datang Dari", accessor: "datang_dari", disableFilters: true },
  {
    Header: "Tanggal Datang",
    accessor: "tanggal_datang",
    disableFilters: true,
  },
  {
    Header: "Nama yang Didatangi",
    accessor: "nama_yang_didatangi",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
