interface IBukuPeraturanDesa {
  jenis_peraturan: string
  nomor_peraturan: string
  tanggal_peraturan: string
  tentang: string
  uraian_singkat: string
  tanggal_kesepakatan: string
  nomor_dilaporkan: string
  tanggal_dilaporkan: string
  nomor_lembaran: string
  tanggal_lembaran: string
  nomor_berita_desa: string
  tanggal_berita_desa: string
  upload_lampiran_surat: string
  keterangan: string
}
export const BukuPeraturanDesaField = {
  id: "pk",
  tanggal_dilaporkan: "",
  nomor_lembaran: "",
  tanggal_lembaran: "",
  nomor_berita_desa: "",
  tanggal_berita_desa: "",
  keterangan: "",
  jenis_peraturan: "",
  nomor_peraturan: "",
  tanggal_peraturan: "",
  tentang: "",
  uraian_singkat: "",
  tanggal_kesepakatan: "",
  nomor_dilaporkan: "",
  upload_lampiran_surat: "",
}

export type { IBukuPeraturanDesa }
