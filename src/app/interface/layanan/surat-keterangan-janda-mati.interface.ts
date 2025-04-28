import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganJandaMati {
  _id: string
  nomor_surat: string
  nik: string
  nomor_kk: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: Date
  agama: string
  kewarganegaraan: string
  pekerjaan: string
  nama_suami: string
  tanggal_kematian: string
  alamat_rumah: string
  keperluan: string
  status: string
}

export const SuratKeteranganJandaMati: ISuratKeteranganJandaMati = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nomor_kk: "",
  nama_lengkap: "",
  jenis_kelamin: "",
  tempat_lahir: "",
  tanggal_lahir: new Date(),
  agama: "",
  kewarganegaraan: "",
  pekerjaan: "",
  nama_suami: "",
  tanggal_kematian: "",
  alamat_rumah: "",
  keperluan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganJandaMati }
