import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

export interface ISuratKeteranganRumahTanggaAnggotaKeluarga {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  kedudukan_dalam_keluarga: string
  pekerjaan: string
  anak_ke: string
  keterangan: string
}

export interface ISuratKeteranganRumahTangga {
  _id: string
  nomor_surat: string
  pemohon: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    jenis_kelamin: string
    agama: string
    pekerjaan: string
    alamat_rumah: string
    akta_nikah: string
    nomor_kk: string
  }
  istri: {
    nik: string
    nama_lengkap: string
    pekerjaan: string
  }
  anggota_keluarga: ISuratKeteranganRumahTanggaAnggotaKeluarga[]
  status: string
}

export const SuratKeteranganRumahTanggaFields: ISuratKeteranganRumahTangga = {
  _id: "pk",
  nomor_surat: "",
  pemohon: {
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    agama: "",
    pekerjaan: "",
    alamat_rumah: "",
    akta_nikah: "",
    nomor_kk: "",
  },
  istri: {
    nik: "",
    nama_lengkap: "",
    pekerjaan: "",
  },
  anggota_keluarga: [
    {
      nik: "",
      nama_lengkap: "",
      kedudukan_dalam_keluarga: "",
      anak_ke: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "",
      pekerjaan: "",
      keterangan: "",
    },
  ],
  status: "diajukan",
  ...initialLampiranExtend,
}
