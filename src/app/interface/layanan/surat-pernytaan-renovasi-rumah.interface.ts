import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratPernyataanRenovasiRumah {
  _id: string
  nik: string
  nomor_surat: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: Date
  alamat_rumah: string
  status: string
}

export const SuratPernyataanRenovasiRumah: ISuratPernyataanRenovasiRumah = {
  _id: "pk",
  nik: "",
  nomor_surat: "",
  nama_lengkap: "",
  jenis_kelamin: "",
  tempat_lahir: "",
  tanggal_lahir: new Date(),
  alamat_rumah: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratPernyataanRenovasiRumah }
