import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKehilangan {
  _id: any
  nomor_surat: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  agama: string
  pekerjaan: string
  status_perkawinan: string
  nik: string
  alamat_rumah: string
  barang_kehilangan: string
  tanggal_kehilangan: string
  lokasi_kehilangan: string
  status: string
}

export const SuratKehilanganField: ISuratKehilangan = {
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
  barang_kehilangan: "",
  tanggal_kehilangan: "",
  lokasi_kehilangan: "",
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKehilangan }
