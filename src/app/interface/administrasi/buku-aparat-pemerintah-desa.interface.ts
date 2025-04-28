interface IBukuAparatPemerintahDesa {
  nik: string
  nama: string
  niap_nikd_nipd?: string
  nip?: string
  tempat_lahir: string
  tanggal_lahir: string
  jenis_kelamin: string
  agama: string
  pendidikan_terakhir: string
  pangkat_golongan?: string
  jabatan: string
  posisi: string
  nomor_keputusan_pengangkatan?: string
  tanggal_keputusan_pengangkatan?: string
  nomor_keputusan_pemberhentian?: string
  tanggal_keputusan_pemberhentian?: string
  keterangan?: string
}

export const BukuAparatPemerintahDesaField = {
  _id: "pk",
  nik: "",
  nama: "",
  niap_nikd_nipd: "",
  nip: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  agama: "",
  pendidikan_terakhir: "",
  pangkat_golongan: "",
  jabatan: "",
  posisi: "",
  nomor_keputusan_pengangkatan: "",
  tanggal_keputusan_pengangkatan: "",
  nomor_keputusan_pemberhentian: "",
  tanggal_keputusan_pemberhentian: "",
  keterangan: "",
}

export type { IBukuAparatPemerintahDesa }
