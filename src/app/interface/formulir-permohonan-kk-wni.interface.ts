interface IFormulirPermohonanKKWNI {
  _id: any
  nomor_surat: string
  nik: string
  nama: string
  nomor_kk: string
  nama_kepala_keluarga: string
  alasan_pemohon: string
  alamat_pemohon: string
  anggota_keluarga: IAnggotaKeluarga[]
}
export const FormulirPermohonanKKWNIField: IFormulirPermohonanKKWNI = {
  nomor_surat: "",
  nik: "",
  nama: "",
  nomor_kk: "",
  nama_kepala_keluarga: "",
  alasan_pemohon: "",
  alamat_pemohon: "",
  anggota_keluarga: [],
  _id: "pk",
}

interface IAnggotaKeluarga {
  kedudukan_dalam_keluarga: string
  nama: string
}

export type { IFormulirPermohonanKKWNI }
