import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganBedaLuasTanah {
  _id: string
  nomor_surat: string
  nik: string
  nama_lengkap: string
  lokasi_tanah: string
  nomor_akta: string
  sppt_pbb: string
  nama_sebelum: string
  nama_sesudah: string
  luas_sebelum: number
  luas_sesudah: number
  no_kohir: string
  status: string
}

export const SuratKeteranganBedaLuasTanah: ISuratKeteranganBedaLuasTanah = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  lokasi_tanah: "",
  nomor_akta: "",
  sppt_pbb: "",
  nama_sebelum: "",
  nama_sesudah: "",
  luas_sebelum: 0,
  luas_sesudah: 0,
  no_kohir: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganBedaLuasTanah }
