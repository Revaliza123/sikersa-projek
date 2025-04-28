import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganJompo {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: Date
  agama: string
  kewarganegaraan: string
  pekerjaan: string
  alamat_rumah: string
  status: string
}

export const SuratKeteranganJompoField: ISuratKeteranganJompo = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  jenis_kelamin: "",
  tempat_lahir: "",
  tanggal_lahir: new Date(),
  agama: "",
  kewarganegaraan: "",
  pekerjaan: "",
  alamat_rumah: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganJompo }
