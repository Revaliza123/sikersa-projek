interface ISuratKeteranganTidakMemilikiJamkesmas {
  _id: any
  nama_lengkap: string
  nik: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  kewarganegaraan: string
  agama: string
  pekerjaan: string
  alamat: string
}

export const SuratKeteranganTidakMemilikiJamkesmasField: ISuratKeteranganTidakMemilikiJamkesmas =
  {
    _id: "pk",
    nama_lengkap: "",
    nik: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    alamat: "",
  }

export type { ISuratKeteranganTidakMemilikiJamkesmas }
