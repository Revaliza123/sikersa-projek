interface IPelayananPosyandu {
  _id: any
  no_surat: string
  nama_lengkap: string
  nik: string
  nama_penerima_surat: string
  alamat_penerima_surat: string
  perihal: string
  isi_surat: string
}

export const PelayananPosyanduField: IPelayananPosyandu = {
  _id: "pk",
  no_surat: "",
  nama_penerima_surat: "",
  alamat_penerima_surat: "",
  perihal: "",
  isi_surat: "",
  nama_lengkap: "",
  nik: "",
}

export type { IPelayananPosyandu }
