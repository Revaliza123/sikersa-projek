interface ISuratKepemilikanRumah {
  _id: any
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  agama: string
  status_perkawinan: string
  pekerjaan: string
  alamat: string
}
export const SuratKepemilikanRumahField: ISuratKepemilikanRumah = {
  _id: "pk",
  nik: "",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  agama: "",
  status_perkawinan: "",
  pekerjaan: "",
  alamat: "",
}

export type { ISuratKepemilikanRumah }
