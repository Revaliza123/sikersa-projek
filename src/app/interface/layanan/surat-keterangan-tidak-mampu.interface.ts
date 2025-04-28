interface ISuratKeteranganTidakMampu {
  _id: any
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  agama: string
  status_perkawinan: string
  pekerjaan: string
  pendidikan_terakhir: string
  kewarganegaraan: string
  nik: string
  nomor_kk: string
  alamat: string
}

export const SuratKeteranganTidakMampuField: ISuratKeteranganTidakMampu = {
  _id: "pk",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  agama: "",
  status_perkawinan: "",
  pekerjaan: "",
  pendidikan_terakhir: "",
  kewarganegaraan: "",
  nik: "",
  nomor_kk: "",
  alamat: "",
}

export type { ISuratKeteranganTidakMampu }
