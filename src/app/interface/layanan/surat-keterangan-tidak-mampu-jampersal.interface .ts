import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganTidakMampuUntukJampersal {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: Date
  jenis_kelamin: string
  pekerjaan: string
  alamat_rumah: string
  id_dtks: string
  keperluan: string
  status: string
}

export const SuratKeteranganTidakMampuUntukJampersalField: ISuratKeteranganTidakMampuUntukJampersal =
  {
    _id: "pk",
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    jenis_kelamin: "",
    pekerjaan: "",
    alamat_rumah: "",
    id_dtks: "",
    keperluan: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganTidakMampuUntukJampersal }
