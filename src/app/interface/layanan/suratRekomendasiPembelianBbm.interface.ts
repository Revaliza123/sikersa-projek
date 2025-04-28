import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratRekomendasiPembelianBbm {
  _id: "pk"
  pemohon: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    alamat_usaha: string
    konsumen_pengguna: string
    jenis_usaha: string
  }
  kebutuhan_bbm: {
    jenis_alat: string
    jumlah_alat: number
    fungsi_alat: string
    bbm_jenis_tertentu: string
    kebutuhan_bbm_tertentu: string
    waktu_operasi: string
    hari_operasi: string
    konsumsi_bbm: string
    alokasi_bensin: string
    premium: string
    solar: string
    tempat_pengambilan: string
    no_lembaga_penyalur: string
    lokasi: string
    alat_angkut: string
  }
  status: string
}

export const SuratRekomendasiPembelianBbmField: ISuratRekomendasiPembelianBbm =
  {
    _id: "pk",
    pemohon: {
      nomor_surat: "",
      nik: "",
      nama_lengkap: "",
      alamat_usaha: "",
      konsumen_pengguna: "",
      jenis_usaha: "",
    },
    kebutuhan_bbm: {
      jenis_alat: "",
      jumlah_alat: 0,
      fungsi_alat: "",
      bbm_jenis_tertentu: "",
      kebutuhan_bbm_tertentu: "",
      waktu_operasi: "",
      hari_operasi: "",
      konsumsi_bbm: "",
      alokasi_bensin: "",
      premium: "",
      solar: "",
      tempat_pengambilan: "",
      no_lembaga_penyalur: "",
      lokasi: "",
      alat_angkut: "",
    },
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratRekomendasiPembelianBbm }
