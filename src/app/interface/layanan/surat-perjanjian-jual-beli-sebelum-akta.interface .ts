import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratPerjanjianJualBeliSebelumAkta {
  _id: any
  pihak_pertama: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: Date
    umur: string
    pekerjaan: string
    alamat_rumah: string
  }
  pihak_kedua: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: Date
    umur: string
    pekerjaan: string
    alamat_rumah: string
  }
  perjanjian: {
    hari: string
    tanggal: Date
    persil: string
    no_kohir: string
    kelas: string
    blok: string
    luas_tanah: number
    batas_utara: string
    batas_timur: string
    batas_selatan: string
    batas_barat: string
    harga_tanah: string
  }
  status: string
}

export const SuratPerjanjianJualBeliSebelumAktatField: ISuratPerjanjianJualBeliSebelumAkta =
  {
    _id: "pk",
    pihak_pertama: {
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: new Date(),
      umur: "",
      pekerjaan: "",
      alamat_rumah: "",
    },
    pihak_kedua: {
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: new Date(),
      umur: "",
      pekerjaan: "",
      alamat_rumah: "",
    },
    perjanjian: {
      hari: "",
      tanggal: new Date(),
      persil: "",
      no_kohir: "",
      kelas: "",
      blok: "",
      luas_tanah: 0,
      batas_utara: "",
      batas_timur: "",
      batas_selatan: "",
      batas_barat: "",
      harga_tanah: "",
    },
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratPerjanjianJualBeliSebelumAkta }
