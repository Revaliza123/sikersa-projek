import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganDomisiliPerusahaanField {
  _id: string
  nomor_surat: string
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: Date
  agama: string
  kewarganegaraan: string
  alamat_rumah: string
  no_telepon_hp: string
  jabatan: string
  nama_perusahaan: string
  alamat_perusahaan: string
  no_telepon_perusahaan: string
  akta_pendirian: string
  bergerak_dalam_bidang: string
  jumlah_pegawai: number
  jam_kerja: string
  status: string
}

export const SuratKeteranganDomisiliPerusahaanField: ISuratKeteranganDomisiliPerusahaanField =
  {
    _id: "pk",
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    agama: "",
    kewarganegaraan: "",
    alamat_rumah: "",
    no_telepon_hp: "",
    jabatan: "",
    nama_perusahaan: "",
    alamat_perusahaan: "",
    no_telepon_perusahaan: "",
    akta_pendirian: "",
    bergerak_dalam_bidang: "",
    jumlah_pegawai: 0,
    jam_kerja: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganDomisiliPerusahaanField }
