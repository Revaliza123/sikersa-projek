interface IBukuKaderPemberdayaanMasyarakat {
  _id: any
  nik: string
  nama: string
  umur: string
  jenis_kelamin: string
  pendidikan: string
  bidang: string
  alamat: string
  keterangan: string
}

export const BukuKaderPemberdayaanMasyarakatField = {
  _id: "pk",
  nik: "",
  nama: "",
  umur: "",
  jenis_kelamin: "",
  pendidikan: "",
  bidang: "",
  alamat: "",
  keterangan: "",
}

export type { IBukuKaderPemberdayaanMasyarakat }
