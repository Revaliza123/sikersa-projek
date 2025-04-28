import { ACTION_COLUMN } from "../action-column.config"

export const PENGATURAN_TANDA_TANGAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "NIP",
    accessor: "nip",
    disableFilters: true,
  },
  {
    Header: "Nama",
    accessor: "nama",
    disableFilters: true,
  },
  { Header: "Jabatan", accessor: "jabatan", disableFilters: true },
  // {
  //   Header: 'Bisa Tanda Tangan',
  //   accessor: 'ttd',
  //   disableFilters: true,
  // },
  {
    Header: "Tanda Tangan Utama?",
    accessor: "utama",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
