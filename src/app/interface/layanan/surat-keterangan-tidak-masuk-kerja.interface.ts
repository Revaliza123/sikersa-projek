import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganTidakMasukKerja {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: Date
  alamat_rumah: string
  hari_izin: string
  tanggal_izin: Date
  keperluan: string
  status: string
}

export const SuratKeteranganTidakMasukKerjaField: ISuratKeteranganTidakMasukKerja =
  {
    _id: "pk",
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    alamat_rumah: "",
    hari_izin: "",
    tanggal_izin: new Date(),
    keperluan: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganTidakMasukKerja }
