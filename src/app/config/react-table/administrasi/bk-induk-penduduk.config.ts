import { ACTION_COLUMN } from "../action-column.config"

export const BK_INDUK_PENDUDUK_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true, show: true },
  {
    Header: "Nama",
    accessor: "nama_lengkap",
    disableFilters: true,
    show: true,
  },
  {
    Header: "No KK",
    accessor: "nomor_kk",
    disableFilters: true,
    show: true,
  },
  { Header: "NIK", accessor: "nik", disableFilters: true, show: true },
  {
    Header: "Jenis Kelamin",
    accessor: "jenis_kelamin",
    disableFilters: true,
    show: true,
  },
  {
    Header: "Tanggal Lahir",
    accessor: "tanggal_lahir",
    disableFilters: true,
    show: true,
  },
  { Header: "Umur", accessor: "umur", disableFilters: true, show: false },
  {
    Header: "Pendidikan",
    accessor: "pendidikan_terakhir",
    disableFilters: true,
    show: false,
  },
  {
    Header: "Pekerjaan",
    accessor: "pekerjaan",
    disableFilters: true,
    show: false,
  },
  {
    Header: "Status Perkawinan",
    accessor: "status_perkawinan",
    disableFilters: true,
    show: false,
  },
  {
    Header: "Golongan Darah",
    accessor: "golongan_darah",
    disableFilters: true,
    show: false,
  },
  {
    Header: "Kota Lahir",
    accessor: "tempat_lahir",
    disableFilters: true,
    show: false,
  },
  {
    Header: "Alamat",
    accessor: "alamat_rumah",
    disableFilters: true,
    show: false,
  },
  {
    Header: "RT",
    accessor: "rt",
    disableFilters: true,
    show: false,
  },
  {
    Header: "RW",
    accessor: "rw",
    disableFilters: true,
    show: false,
  },
  // { Header: 'Berkas', accessor: 'berkas', disableFilters: true },
  ...ACTION_COLUMN,
]
