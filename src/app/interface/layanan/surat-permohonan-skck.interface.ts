import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratPermohonanSKCK {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  agama: string
  status_perkawinan: string
  pekerjaan: string
  alamat_rumah: string
  status: string
}

export const SuratPermohonanSKCKField: ISuratPermohonanSKCK = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  jenis_kelamin: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  agama: "",
  status_perkawinan: "",
  pekerjaan: "",
  alamat_rumah: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratPermohonanSKCK }
