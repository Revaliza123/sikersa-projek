interface IBukuInventarisHasilHasilPembangunan {
  _id: any
  nama_proyek: string
  volume: number
  biaya: number
  lokasi: string
  keterangan: string
  upload_lampiran_surat: string
}

export const BukuInventarisHasilHasilPembangunanField = {
  _id: "pk",
  nama_proyek: "",
  volume: 0,
  biaya: 0,
  lokasi: "",
  keterangan: "",
  upload_lampiran_surat: "",
}

export type { IBukuInventarisHasilHasilPembangunan }
