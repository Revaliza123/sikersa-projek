interface IBukuRencanaKerjaPembangunan {
  _id: string
  nama_proyek: string
  lokasi: string
  sumber_biaya?: {
    pemerintah: number
    provinsi: number
    kab_kota: number
    swadaya: number
  }
  jumlah_biaya: number
  pelaksana: string
  manfaat: string
  keterangan: string
}

export const BukuRencanaKerjaPembangunanField = {
  _id: "pk",
  nama_proyek: "",
  lokasi: "",
  sumber_biaya: {
    pemerintah: 0,
    provinsi: 0,
    kab_kota: 0,
    swadaya: 0,
  },
  jumlah_biaya: 0,
  pelaksana: "",
  manfaat: "",
  keterangan: "",
}

export type { IBukuRencanaKerjaPembangunan }
