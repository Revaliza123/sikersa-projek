import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganKelakuanBaik {
  _id: any
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  agama: string
  kewarganegaraan: string
  pekerjaan: string
  nik: string
  alamat_rumah: string
  nomor_surat: string
  keperluan: string
  status: string
}

export const SuratKeteranganKelakuanBaikField: ISuratKeteranganKelakuanBaik = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  jenis_kelamin: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  kewarganegaraan: "",
  agama: "",
  pekerjaan: "",
  alamat_rumah: "",
  keperluan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganKelakuanBaik }
