import { ACTION_COLUMN } from "../action-column.config"

export const BK_KEGIATAN_PEMBANGUNAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama Proyek", accessor: "nama_proyek", disableFilters: true },
  { Header: "Sifat Proyek", accessor: "sifat_proyek", disableFilters: true },
  { Header: "Biaya", accessor: "jumlah_biaya", disableFilters: true },
  { Header: "Lokasi Pengerjaan", accessor: "lokasi", disableFilters: true },
  {
    Header: "Waktu Pengerjaan",
    accessor: "waktu_pengerjaan",
    disableFilters: true,
  },
  { Header: "Pelaksana", accessor: "pelaksana", disableFilters: true },
  { Header: "Lampiran", accessor: "lampiran", disableFilters: true },
  ...ACTION_COLUMN,
]
