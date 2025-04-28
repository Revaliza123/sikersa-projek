import { ACTION_COLUMN } from "../action-column.config"

export const SRT_IMB_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama", accessor: "nama", disableFilters: true },
  {
    Header: "Nama Perusahaan",
    accessor: "namaPerusahaan",
    disableFilters: true,
  },
  {
    Header: "Alamat Bangunan",
    accessor: "alamatBangunan",
    disableFilters: true,
  },
  {
    Header: "Tahun pendirian",
    accessor: "tahunPendirian",
    disableFilters: true,
  },
  { Header: "Luas tanah", accessor: "luasTanah", disableFilters: true },
  ...ACTION_COLUMN,
]

export interface ISuratIMB {
  nama: string
  alamat: string
  pekerjaan: string
  namaPerusahaan: string
  alamatBangunan: string
  lokasiKampung: string
  lokasiKelurahana: string
  lokasiKecamatan: string
  lokasiKabupaten: string
  tahunPendirian: number
  buktiSuratTanah: string
  luasTanah: number
  penggunaanBangunan: string
  namaPemilikTanah: string
  imbLama?: string
  konstruksiPondasi: string
  konstruksiDinding: string
  konstruksiRankaAtap: string
  konstruksiAtap: string
  konstruksiKusen: string
  konstruksiLantai: string
  [key: string]: any
}

export const suratIMBField: ISuratIMB = {
  nama: "",
  alamat: "",
  pekerjaan: "",
  namaPerusahaan: "",
  alamatBangunan: "",
  lokasiKampung: "",
  lokasiKelurahana: "",
  lokasiKecamatan: "",
  lokasiKabupaten: "",
  tahunPendirian: 0,
  buktiSuratTanah: "",
  luasTanah: 0,
  penggunaanBangunan: "",
  namaPemilikTanah: "",
  imbLama: "",
  konstruksiPondasi: "",
  konstruksiDinding: "",
  konstruksiRankaAtap: "",
  konstruksiAtap: "",
  konstruksiKusen: "",
  konstruksiLantai: "",
}
