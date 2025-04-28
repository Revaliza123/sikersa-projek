import { ACTION_COLUMN } from "../action-column.config"

export const BK_TANAH_KAS_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Asal Tanah Kas Desa",
    accessor: "asal_tanah_kas_desa",
    disableFilters: true,
  },
  {
    Header: "Nomor Sertifikat",
    accessor: "nomor_sertifikat_buku_letter",
    disableFilters: true,
  },
  { Header: "Luas", accessor: "luas", disableFilters: true },
  { Header: "Kelas", accessor: "kelas", disableFilters: true },
  {
    Header: "Tanggal Perolehan",
    accessor: "perolehan_tkd/tanggal_perolehan",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]
