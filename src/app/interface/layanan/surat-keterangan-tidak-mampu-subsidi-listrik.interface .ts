import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganTidakMampuUntukSubsidiListrik {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  pekerjaan: string
  alamat_rumah: string
  id_dtks: string
  keperluan: string
  status: string
}

export const SuratKeteranganTidakMampuUntukSubsidiListrikField: ISuratKeteranganTidakMampuUntukSubsidiListrik =
  {
    _id: "pk",
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    pekerjaan: "",
    alamat_rumah: "",
    id_dtks: "",
    keperluan: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganTidakMampuUntukSubsidiListrik }
