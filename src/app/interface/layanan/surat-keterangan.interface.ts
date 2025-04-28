import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeterangan {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: Date
  alamat_rumah: string
  keperluan: string
  status: string
}

export const SuratKeteranganField: ISuratKeterangan = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: new Date(),
  alamat_rumah: "",
  keperluan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeterangan }
