import { ACTION_COLUMN } from "../action-column.config"

export const IZIN_TOWER_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama", accessor: "nama", disableFilters: true },
  { Header: "Bentuk Usaha", accessor: "bentukUsaha", disableFilters: true },
  {
    Header: "Nama Perusahaan",
    accessor: "namaPerusahaan",
    disableFilters: true,
  },
  {
    Header: "Alamat Perusahaan",
    accessor: "alamatPerusahaan",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]

export interface IIzinTower {
  bentukUsaha: string
  nik: string
  nama: string
  alamat: string
  noTelp: string
  jabatan: string
  namaPerusahaan: string
  alamatPerusahaan: string
  [key: string]: any
}

export const izinTowerField: IIzinTower = {
  bentukUsaha: "",
  nik: "",
  nama: "",
  alamat: "",
  noTelp: "",
  jabatan: "",
  namaPerusahaan: "",
  alamatPerusahaan: "",
}
