import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratAhliWarisBiasa {
  _id: string
  umum: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    nomor_kk: string
    alamat_rumah: string
    tanggal_meninggal: string
    jenis_kelamin: string
  }
  ahli_waris: IAhliWarisBiasa[]
  status: string
}

export const SuratAhliWarisBiasaField: ISuratAhliWarisBiasa = {
  _id: "pk",
  umum: {
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    nomor_kk: "",
    alamat_rumah: "",
    tanggal_meninggal: "",
    jenis_kelamin: "",
  },
  ahli_waris: [
    {
      nik: "",
      nama_lengkap: "",
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      kedudukan_dalam_keluarga: "",
      keterangan: "",
      alamat_rumah: "",
    },
  ],
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratAhliWarisBiasa }

interface IAhliWarisBiasa {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  kedudukan_dalam_keluarga: string
  keterangan: string
  alamat_rumah: string
}
