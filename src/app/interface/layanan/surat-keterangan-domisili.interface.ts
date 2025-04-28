interface ISuratKeteranganDomisiliField {
  _id: any
  nomor_surat: string
  nik: string
  nama: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  rt: string
  rw: string
  dusun: string
  status_perkawinan: string
  agama: string
  pekerjaan: string
  lama_domisili: number
  keperluan: string
  upload_surat_pengantar_rtrw: string
  upload_fotocopy_ktp: string
  upload_fotocopy_kk: string
  upload_pas_foto_3x4: string
  upload_surat_permohonan_dokumen?: string
  upload_surat_kuasa?: string
}

export const SuratKeteranganDomisiliField: ISuratKeteranganDomisiliField = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  rt: "",
  rw: "",
  dusun: "",
  status_perkawinan: "",
  agama: "",
  pekerjaan: "",
  lama_domisili: 0,
  keperluan: "",
  upload_surat_pengantar_rtrw: "",
  upload_fotocopy_ktp: "",
  upload_fotocopy_kk: "",
  upload_pas_foto_3x4: "",
}

export type { ISuratKeteranganDomisiliField }
