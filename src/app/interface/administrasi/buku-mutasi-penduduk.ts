interface IBkMutasiPenduduk {
  _id: any
  jenis_kelamin: string
  jenis_mutasi: string
  nama_lengkap: string
  nik: string
  tempat_tanggal_lahir: string
  Datang?: string
  Meninggal?: string
  Pindah?: string
  umur?: number
}

export const BkMutasiPendudukField = {
  _id: "pk",
  jenis_kelamin: "",
  jenis_mutasi: "",
  nama_lengkap: "",
  nik: "",
  tempat_tanggal_lahir: "",
  umur: 0,
}

export type { IBkMutasiPenduduk }
