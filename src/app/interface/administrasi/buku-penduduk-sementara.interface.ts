interface IBkPendudukSementara {
  id: any
  nama_lengkap: string
  jenis_kelamin: string
  nik: string
  tempat_lahir: string
  tanggal_lahir: string
  pekerjaan: string
  golongan_darah: string
  kebangsaan: string
  keturunan: string
  datang_dari: string
  maksud_tujuan_kedatangan: string
  nama_yang_didatangi: string
  alamat_yang_didatangi: string
  datang_tanggal: string
  pergi_tanggal: string
  keterangan: string
  umur: number
}

export const BkPendudukSementaraField = {
  id: "pk",
  nama_lengkap: "",
  jenis_kelamin: "",
  nik: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  pekerjaan: "",
  golongan_darah: "",
  kebangsaan: "",
  keturunan: "",
  datang_dari: "",
  maksud_tujuan_kedatangan: "",
  nama_yang_didatangi: "",
  alamat_yang_didatangi: "",
  datang_tanggal: "",
  pergi_tanggal: "",
  keterangan: "",
  umur: 0,
}

export type { IBkPendudukSementara }
