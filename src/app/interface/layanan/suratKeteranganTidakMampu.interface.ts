import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

export interface ISuratKeteranganTidakMampuAnggotaKeluarga {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  kedudukan_dalam_keluarga: string
}

export interface ISuratKeteranganTidakMampu {
  _id: string
  nomor_surat: string
  pemohon: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    jenis_kelamin: string
    pekerjaan: string
    alamat_rumah: string
    keperluan: string
  }
  anggota_keluarga: ISuratKeteranganTidakMampuAnggotaKeluarga[]
}

export const SuratKeteranganTidakMampuField: ISuratKeteranganTidakMampu = {
  _id: "pk",
  nomor_surat: "",
  pemohon: {
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    pekerjaan: "",
    alamat_rumah: "",
    keperluan: "",
  },
  anggota_keluarga: [
    {
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "",
      kedudukan_dalam_keluarga: "",
    },
  ],
  ...initialLampiranExtend,
}
