import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganUsaha {
  _id: string
  nomor_surat: string
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: Date
  agama: string
  kewarganegaraan: string
  jenis_usaha: string
  alamat_rumah: string
  alamat_usaha: string
  keperluan: string
  status: string
}

export const SuratKeteranganUsahaField: ISuratKeteranganUsaha = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  jenis_kelamin: "",
  tempat_lahir: "",
  tanggal_lahir: new Date(),
  agama: "",
  kewarganegaraan: "",
  jenis_usaha: "",
  alamat_rumah: "",
  alamat_usaha: "",
  keperluan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganUsaha }
