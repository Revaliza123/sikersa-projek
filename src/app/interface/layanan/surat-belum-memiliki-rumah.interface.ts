interface ISuratBelumMemilikiRumah {
  _id: any
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  pekerjaan: string
  agama: string
  nik: string
  nomor_kk: string
  alamat: string
}
export const SuratBelumMemilikiRumahField: ISuratBelumMemilikiRumah = {
  _id: "pk",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  pekerjaan: "",
  agama: "",
  nik: "",
  nomor_kk: "",
  alamat: "",
}

export type { ISuratBelumMemilikiRumah }
