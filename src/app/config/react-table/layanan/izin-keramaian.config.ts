import { ACTION_COLUMN } from "../action-column.config"

export const IZIN_KERAMAIAN_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "namaLengkap", disableFilters: true },
  // { Header: 'Tempat/Tanggal Lahir', accessor: 'ttl', disableFilters: true },
  // { Header: 'Pekerjaan', accessor: 'pekerjaan', disableFilters: true },
  // { Header: 'NIK', accessor: 'nik', disableFilters: true },
  // { Header: 'Alamat', accessor: 'alamat', disableFilters: true },
  { Header: "Hari/Tanggal", accessor: "hariTanggal", disableFilters: true },
  { Header: "Waktu", accessor: "waktu", disableFilters: true },
  { Header: "Tempat", accessor: "tempat", disableFilters: true },
  { Header: "Hiburan", accessor: "hiburan", disableFilters: true },
  ...ACTION_COLUMN,
]

export interface IIzinKeramaian {
  namaLengkap: string
  ttl: string
  pekerjaan: string
  nik: string
  alamat: string
  hariTanggal: string
  waktu: string
  tempat: string
  hiburan: string
  [key: string]: any
}

export const izinKeramaianField: IIzinKeramaian = {
  namaLengkap: "",
  ttl: "",
  pekerjaan: "",
  nik: "",
  alamat: "",
  hariTanggal: "",
  waktu: "",
  tempat: "",
  hiburan: "",
}
