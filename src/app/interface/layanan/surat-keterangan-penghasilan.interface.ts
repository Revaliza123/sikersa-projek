interface ISuratKeteranganPenghasilan {
  _id: any
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  agama: string
  status_perkawinan: string
  pekerjaan: string
  pendidikan_terakhir: string
  alamat: string
  status: string
}

export const SuratKeteranganPenghasilanField: ISuratKeteranganPenghasilan = {
  _id: "pk",
  nik: "",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  agama: "",
  status_perkawinan: "",
  pekerjaan: "",
  pendidikan_terakhir: "",
  alamat: "",
  status: "diajukan",
}

export type { ISuratKeteranganPenghasilan }
