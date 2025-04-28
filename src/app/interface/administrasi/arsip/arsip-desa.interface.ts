interface IArsipDesa {
  _id?: string
  kepala_desa: string
  periode: string
  sub_category: {
    deskripsi: string
    file: string
    nama_file: string
    tanggal_upload: string
    upload_lampiran: string
  }[]
}
export const ArsipDesaField: IArsipDesa = {
  _id: "pk",
  kepala_desa: "",
  periode: "",
  sub_category: [
    {
      deskripsi: "",
      file: "",
      nama_file: "",
      tanggal_upload: "",
      upload_lampiran: "",
    },
  ],
}

export type { IArsipDesa }
