import { ACTION_COLUMN } from "../action-column.config"

export const BK_PERATURAN_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Jenis Peraturan",
    accessor: "jenis_peraturan",
    disableFilters: true,
    minWidth: "200px",
  },
  {
    Header: "Nomor dan Tanggal Peraturan",
    accessor: "nomor_peraturan",
    disableFilters: true,
    minWidth: "250px",
  },
  {
    Header: "Tentang",
    accessor: "tentang",
    disableFilters: true,
    minWidth: "300px",
  },
  {
    Header: "Uraian Singkat",
    accessor: "uraian_singkat",
    disableFilters: true,
    minWidth: "300px",
  },
  {
    Header: "Tanggal Kesepakatan",
    accessor: "tanggal_kesepakatan",
    disableFilters: true,
    minWidth: "200px",
  },
  {
    Header: "Nomor dan Tanggal Dilaporkan",
    accessor: "nomor_dilaporkan",
    disableFilters: true,
    minWidth: "300px",
  },
  { Header: "Lampiran", accessor: "lampiran", disableFilters: true },
  {
    Header: "Ket.",
    accessor: "keterangan",
    disableFilters: true,
    width: "300px",
  },
  ...ACTION_COLUMN,
]
