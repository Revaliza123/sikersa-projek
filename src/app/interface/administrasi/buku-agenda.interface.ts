interface IBukuAgenda {
  _id?: string
  kode_persuratan: string
  tanggal_terima_kirim_surat: string
  jenis_surat: string
  nomor_surat_masuk: string
  tanggal_surat_masuk: string
  pengirim: string
  nomor_surat_keluar: string
  tanggal_surat_keluar: string
  ditujukan_kepada: string
  isi_singkat_surat: string
  upload_lampiran_surat: string
  keterangan?: string
}
export const BukuAgendaField = {
  _id: "pk",
  kode_persuratan: "",
  tanggal_terima_kirim_surat: "",
  jenis_surat: "",
  nomor_surat_masuk: "",
  tanggal_surat_masuk: "",
  pengirim: "",
  nomor_surat_keluar: "",
  tanggal_surat_keluar: "",
  ditujukan_kepada: "",
  isi_singkat_surat: "",
  upload_lampiran_surat: "",
  keterangan: "",
}

export type { IBukuAgenda }
