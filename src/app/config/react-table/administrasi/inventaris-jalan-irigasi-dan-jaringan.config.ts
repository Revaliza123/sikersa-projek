import { ACTION_COLUMN } from "../action-column.config"

export const INVENTARIS_JALAN_IRIGASI_DAN_JARINGAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama / Jenis Pembangunan",
    accessor: "nama_jenis_pembangunan",
    disableFilters: true,
  },
  { Header: "Volume (M2)", accessor: "volume", disableFilters: true },
  { Header: "Satuan", accessor: "satuan_volume", disableFilters: true },
  {
    Header: "Letak / Lokasi Alamat",
    accessor: "lokasi_jalan",
    disableFilters: true,
  },
  { Header: "Sumber Dana", accessor: "sumber_dana", disableFilters: true },
  {
    Header: "Nilai Pembangunan",
    accessor: "nilai_pembangunan",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
