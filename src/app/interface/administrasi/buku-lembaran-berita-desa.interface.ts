interface IBukuLembaranBeritaDesa {
  _id: any
  jenis_peraturan: string
  nomor_peraturan: string | null
  tanggal_peraturan: string | null
  tentang: string
  uraian_singkat: string
  kategori: string
  nomor_diundangkan: string | null
  tanggal_diundangkan: string | null
  keterangan: string
}

export const BukuLembaranBeritaDesaField = {
  _id: "pk",
  jenis_peraturan: "",
  nomor_peraturan: null,
  tanggal_peraturan: null,
  tentang: "",
  uraian_singkat: "",
  kategori: "",
  nomor_diundangkan: null,
  tanggal_diundangkan: null,
  keterangan: "",
}

export type { IBukuLembaranBeritaDesa }
