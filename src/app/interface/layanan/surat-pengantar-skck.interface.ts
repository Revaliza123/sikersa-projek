import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratPengantarSKCK {
  _id: any
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  agama: string
  pekerjaan: string
  pendidikan_terakhir: string
  kewarganegaraan: string
  nik: string
  alamat: string
  keperluan: string
  status: string
}

export const SuratPengantarSKCKField: ISuratPengantarSKCK = {
  _id: "pk",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  agama: "",
  pekerjaan: "",
  pendidikan_terakhir: "",
  kewarganegaraan: "",
  nik: "",
  alamat: "",
  keperluan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratPengantarSKCK }
