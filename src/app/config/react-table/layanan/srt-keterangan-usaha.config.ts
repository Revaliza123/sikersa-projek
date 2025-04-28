import { ACTION_COLUMN } from "../action-column.config"

export const SURAT_KETERANGAN_USAHA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "namaLengkap", disableFilters: true },
  { Header: "Nomor Surat", accessor: "nomorSurat", disableFilters: true },
  { Header: "Nama Usaha", accessor: "namaUsaha", disableFilters: true },
  { Header: "Alamat Usaha", accessor: "alamatUsaha", disableFilters: true },
  { Header: "Lama Usaha", accessor: "lamaUsaha", disableFilters: true },
  ...ACTION_COLUMN,
]
