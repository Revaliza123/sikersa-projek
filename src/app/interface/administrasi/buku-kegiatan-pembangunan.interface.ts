interface IBukuKegiatanPembangunan {
  _id: any
  nama_proyek: string
  lokasi: string
  sifat_proyek: string
  volume: number
  waktu_pengerjaan: string
  besaran_biaya: {
    pemerintah: number
    provinsi: number
    kab_kota: number
    swadaya: number
  }
  pelaksana: string
  jumlah_biaya: number
  keterangan: string
  upload_lampiran_surat: string
}

export const BukuKegiatanPembangunanField = {
  _id: "pk",
  nama_proyek: "",
  lokasi: "",
  sifat_proyek: "",
  volume: 0,
  waktu_pengerjaan: "",
  besaran_biaya: {
    pemerintah: 0,
    provinsi: 0,
    kab_kota: 0,
    swadaya: 0,
  },
  pelaksana: "",
  jumlah_biaya: 0,
  keterangan: "",
  upload_lampiran_surat: "",
}

export type { IBukuKegiatanPembangunan }
