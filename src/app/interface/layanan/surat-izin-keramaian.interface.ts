import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratIzinKeramaian {
  _id: any
  pemohon: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: Date
    jenis_kelamin: string
    pekerjaan: string
    alamat_rumah: string
  }
  kegiatan: {
    kegiatan_berupa: string
    hari: string
    tanggal: Date
    waktu_acara: string
    lokasi_acara: string
  }
  status: string
}

export const SuratIzinKeramaianField: ISuratIzinKeramaian = {
  _id: "pk",
  pemohon: {
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    jenis_kelamin: "",
    pekerjaan: "",
    alamat_rumah: "",
  },
  kegiatan: {
    kegiatan_berupa: "",
    hari: "",
    tanggal: new Date(),
    waktu_acara: "",
    lokasi_acara: "",
  },
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratIzinKeramaian }
