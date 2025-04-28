import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganPerbedaanIdentitas {
  _id: any
  nomor_surat: string

  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: any
  agama: string
  pekerjaan: string
  alamat_rumah: string

  nama_sebelum: string
  nama_sesudah: string
  dasar_perubahan_nama: string
  tanggal_perubahan_nama: any

  tempat_lahir_sebelum: string
  tempat_lahir_sesudah: string
  dasar_perubahan_tempat_lahir: string
  tanggal_perubahan_tempat_lahir: any

  tanggal_lahir_sebelum: any
  tanggal_lahir_sesudah: any
  dasar_perubahan_tanggal_lahir: string
  tanggal_perubahan_tanggal_lahir: any

  pendidikan_sebelum: string
  pendidikan_sesudah: string
  dasar_perubahan_pendidikan: string
  tanggal_perubahan_pendidikan: any

  pekerjaan_sebelum: string
  pekerjaan_sesudah: string
  dasar_perubahan_pekerjaan: string
  tanggal_perubahan_pekerjaan: any

  agama_sebelum: string
  agama_sesudah: string
  dasar_perubahan_agama: string
  tanggal_perubahan_agama: any
  status: string
}

export const SuratKeteranganPerbedaanIdentitasField: ISuratKeteranganPerbedaanIdentitas =
  {
    _id: "pk",
    nomor_surat: "",

    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    pekerjaan: "",
    alamat_rumah: "",

    nama_sebelum: "",
    nama_sesudah: "",
    dasar_perubahan_nama: "",
    tanggal_perubahan_nama: "",

    tempat_lahir_sebelum: "",
    tempat_lahir_sesudah: "",
    dasar_perubahan_tempat_lahir: "",
    tanggal_perubahan_tempat_lahir: "",

    tanggal_lahir_sebelum: "",
    tanggal_lahir_sesudah: "",
    dasar_perubahan_tanggal_lahir: "",
    tanggal_perubahan_tanggal_lahir: "",

    pendidikan_sebelum: "",
    pendidikan_sesudah: "",
    dasar_perubahan_pendidikan: "",
    tanggal_perubahan_pendidikan: "",

    pekerjaan_sebelum: "",
    pekerjaan_sesudah: "",
    dasar_perubahan_pekerjaan: "",
    tanggal_perubahan_pekerjaan: "",

    agama_sebelum: "",
    agama_sesudah: "",
    dasar_perubahan_agama: "",
    tanggal_perubahan_agama: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganPerbedaanIdentitas }
