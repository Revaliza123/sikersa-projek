import { ACTION_COLUMN } from "../action-column.config"

export const BK_INVENTARIS_HASIL_PEMBANGUNAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Proyek",
    accessor: "nama_proyek",
    disableFilters: true,
  },
  { Header: "Volume", accessor: "volume", disableFilters: true },
  { Header: "Biaya", accessor: "biaya", disableFilters: true },
  { Header: "Lokasi", accessor: "lokasi", disableFilters: true },
  { Header: "Lampiran", accessor: "lampiran", disableFilters: true },
  { Header: "Keterangan", accessor: "keterangan", disableFilters: true },
  ...ACTION_COLUMN,
]
