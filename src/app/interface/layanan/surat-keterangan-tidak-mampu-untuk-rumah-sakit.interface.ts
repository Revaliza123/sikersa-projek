import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganTidakMampuUntukRumahSakit {
  _id: string
  orang_tua: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: Date
    jenis_kelamin: string
    agama: string
    pekerjaan: string
    status_perkawinan: string
    alamat_rumah: string
    keperluan: string
  }
  anak: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: Date
    jenis_kelamin: string
    agama: string
    pekerjaan: string
  }
  status: string
}

export const SuratKeteranganTidakMampuUntukRumahSakitField: ISuratKeteranganTidakMampuUntukRumahSakit =
  {
    _id: "pk",
    orang_tua: {
      nomor_surat: "",
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: new Date(),
      jenis_kelamin: "",
      agama: "",
      pekerjaan: "",
      status_perkawinan: "",
      alamat_rumah: "",
      keperluan: "",
    },
    anak: {
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: new Date(),
      jenis_kelamin: "",
      agama: "",
      pekerjaan: "",
    },
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganTidakMampuUntukRumahSakit }
