import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratTaksiranHargaTanah {
  _id: any
  nomor_surat: string
  pemilik: {
    nik: string
    nama_lengkap: string
    tanggal_kepemilikan: string
    alamat_rumah: string
    rt: string
    rw: string
    pekerjaan: string
    no_sertifikat: string
    kegunaan_tanah: string
    harga_tanah: number
    harga_bangunan: number
    jumlah: number
  }
  tanah: {
    patok_tanah: string
    no_kohir: string
    persil: string
    kelas: string
    blok: string
    luas: string
    batas_utara: string
    batas_timur: string
    batas_selatan: string
    batas_barat: string
  }
  status: string
}

export const SuratTaksiranHargaTanah: ISuratTaksiranHargaTanah = {
  _id: "pk",
  nomor_surat: "",
  pemilik: {
    nik: "",
    nama_lengkap: "",
    tanggal_kepemilikan: "",
    alamat_rumah: "",
    rt: "",
    rw: "",
    pekerjaan: "",
    no_sertifikat: "",
    kegunaan_tanah: "",
    harga_tanah: 0,
    harga_bangunan: 0,
    jumlah: 0,
  },
  tanah: {
    patok_tanah: "",
    no_kohir: "",
    persil: "",
    kelas: "",
    blok: "",
    luas: "",
    batas_utara: "",
    batas_timur: "",
    batas_selatan: "",
    batas_barat: "",
  },
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratTaksiranHargaTanah }
