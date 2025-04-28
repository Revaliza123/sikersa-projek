import { ACTION_COLUMN } from "../action-column.config"

export const BK_EKSPEDISI_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Tanggal Pengiriman",
    accessor: "tanggal_pengiriman",
    disableFilters: true,
  },
  { Header: "Nomor Surat", accessor: "nomor_surat", disableFilters: true },
  {
    Header: "Ditunjukan Kepada",
    accessor: "ditujukan_kepada",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
