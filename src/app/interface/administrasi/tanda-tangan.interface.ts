interface ITandaTangan {
  _id: string
  jabatan: string
  nama_lengkap: string
  nip: any
  status: string
  updatedAt: any
  createdAt: any
  urutan: any
  utama: string
}

export const TandaTanganField = {
  _id: "pk",
  jabatan: "",
  nama_lengkap: "",
  nip: null,
  status: "Ya",
  urutan: 0,
  utama: "tidak",
}

export type { ITandaTangan }
