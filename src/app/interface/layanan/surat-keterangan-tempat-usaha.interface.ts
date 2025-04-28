import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganTempatUsaha {
  _id: any
  nomor_surat: string
  NIK: string
  nama: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  pekerjaan: string
  alamat: string
  nama_usaha: string
  lama_usaha: string
  alamat_usaha: string
  status: string
}

export const SuratKeteranganTempatUsahaField: ISuratKeteranganTempatUsaha = {
  _id: "pk",
  nomor_surat: "",
  NIK: "",
  nama: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  pekerjaan: "",
  alamat: "",
  lama_usaha: "",
  alamat_usaha: "",
  nama_usaha: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganTempatUsaha }
