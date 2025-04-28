import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

export interface IFormulirPindahDatangPengikut {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  kedudukan_dalam_keluarga: string
  masa_berlaku_ktp: string
}
export interface IFormulirPindahDatang {
  _id: string
  daerah_asal: {
    nomor_surat: string
    nomor_kk: string
    nama_kepala_keluarga: string
    alamat_rumah: string
    rt: string
    rw: string
    provinsi: string
    kabupaten: string
    kecamatan: string
    desa_kelurahan: string
    kode_pos?: string
    nik: string
    nama_lengkap: string
  }
  pindah_ke: {
    alasan_pindah: string
    tanggal_pindah: string
    alamat_tujuan: string
    provinsi: string
    kabupaten: string
    kecamatan: string
    desa_kelurahan: string
    klarifikasi_pindah: string
    jenis_kepindahan: string
    status_kk_tidak_pindah?: string
    status_kk_pindah?: string
    keluarga_yang_pindah: number
  }
  pengikut: IFormulirPindahDatangPengikut[]
  status: string
}

export const FormulirPindahDatangFields: IFormulirPindahDatang = {
  _id: "pk",
  daerah_asal: {
    nomor_surat: "",
    nomor_kk: "",
    nama_kepala_keluarga: "",
    alamat_rumah: "",
    rt: "",
    rw: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    desa_kelurahan: "",
    kode_pos: "",
    nik: "",
    nama_lengkap: "",
  },
  pindah_ke: {
    alasan_pindah: "",
    tanggal_pindah: "",
    alamat_tujuan: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    desa_kelurahan: "",
    klarifikasi_pindah: "",
    jenis_kepindahan: "",
    status_kk_tidak_pindah: "",
    status_kk_pindah: "",
    keluarga_yang_pindah: 0,
  },
  pengikut: [
    {
      nik: "",
      masa_berlaku_ktp: "",
      nama_lengkap: "",
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      kedudukan_dalam_keluarga: "",
    },
  ],
  status: "diajukan",
  ...initialLampiranExtend,
}
