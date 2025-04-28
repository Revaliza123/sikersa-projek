interface IBukuKeputusanKepalaDesa {
  _id?: any
  nomor_keputusan?: string
  tanggal_keputusan?: string
  tentang?: string
  nomor_dilaporkan?: string
  tanggal_dilaporkan?: string
  keterangan?: string
  upload_lampiran_surat?: string
  uraian_singkat?: string
}

export const BukuKeputusanKepalaDesaField = {
  _id: "pk",
  nomor_keputusan: "",
  tanggal_keputusan: "",
  tentang: "",
  nomor_dilaporkan: "",
  tanggal_dilaporkan: "",
  keterangan: "",
  upload_lampiran_surat: "",
  uraian_singkat: "",
}

export type { IBukuKeputusanKepalaDesa }
