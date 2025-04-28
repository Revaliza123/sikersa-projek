interface IBukuEkspedisi {
  _id: any
  tanggal_pengiriman: string
  tanggal_surat: string
  nomor_surat: string
  ditujukan_kepada: string
  isi_singkat_surat: string
  keterangan?: string
}

export const BukuEkspedisiField = {
  _id: "pk",
  tanggal_pengiriman: "",
  tanggal_surat: "",
  nomor_surat: "",
  ditujukan_kepada: "",
  isi_singkat_surat: "",
  keterangan: "",
}

export type { IBukuEkspedisi }
