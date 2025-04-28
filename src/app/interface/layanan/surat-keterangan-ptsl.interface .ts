import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganPTSL {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: Date
  pekerjaan: string
  alamat_rumah: string
  no_sertifikat: string
  nomor_c: string
  persil: string
  luas_tanah: number
  lokasi_tanah: string
  keperluan: string
  status: string
}

export const SuratKeteranganPtslField: ISuratKeteranganPTSL = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: new Date(),
  pekerjaan: "",
  alamat_rumah: "",
  no_sertifikat: "",
  nomor_c: "",
  persil: "",
  luas_tanah: 0,
  lokasi_tanah: "",
  keperluan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganPTSL }
