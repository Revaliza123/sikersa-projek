import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

export interface ISuratKeteranganTerdaftarDtksAnggotaKeluarga {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  kedudukan_dalam_keluarga: string
  id_dtks: string
}

export interface ISuratKeteranganTerdaftarDtks {
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
    id_dtks: string
  }
  anggota_keluarga: ISuratKeteranganTerdaftarDtksAnggotaKeluarga[]
  status: string
}

export const SuratKeteranganTerdaftarDtksField: ISuratKeteranganTerdaftarDtks =
  {
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
      id_dtks: "",
    },
    anggota_keluarga: [
      {
        nik: "",
        nama_lengkap: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        kedudukan_dalam_keluarga: "",
        id_dtks: "",
      },
    ],
    status: "diajukan",
    ...initialLampiranExtend,
  }
