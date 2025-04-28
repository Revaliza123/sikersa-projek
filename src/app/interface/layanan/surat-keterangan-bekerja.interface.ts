import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganBekerja {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: Date
  status_perkawinan: string
  kewarganegaraan: string
  agama: string
  pekerjaan: string
  alamat_rumah: string
  tempat_bekerja: string
  keperluan: string
  status: string
}

export const SuratKeteranganBekerjaField: ISuratKeteranganBekerja = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  jenis_kelamin: "",
  tempat_lahir: "",
  tanggal_lahir: new Date(),
  status_perkawinan: "",
  kewarganegaraan: "",
  agama: "",
  pekerjaan: "",
  alamat_rumah: "",
  tempat_bekerja: "",
  keperluan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganBekerja }
