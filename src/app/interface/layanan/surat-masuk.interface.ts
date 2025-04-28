interface ISuratMasuk {
  _id: any
  collection: string
  jenis_layanan: string
  keterangan: string
  nama: string
  nik: string
  status: string
  id_tanda_tangan: string
}

export const SuratMasukField = {
  _id: null,
  collection: "",
  jenis_layanan: "",
  keterangan: "",
  nama: "",
  nik: "",
  status: "",
  id_tanda_tangan: "",
}

export type { ISuratMasuk }
