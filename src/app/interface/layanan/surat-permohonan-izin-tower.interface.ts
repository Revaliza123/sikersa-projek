interface ISuratIzinPermohonanTower {
  _id: any
  pemohon: {
    bentuk_usaha: string
    nama: string
    alamat: string
    no_telefon_hp: string
    NIK: string
    jabatan_dalam_perusahaan: string
    nama_perusahaan: string
    alamat_perusahaan: string
  }
  data_menara: {
    jalan_menara: string
    kelurahan_desa: string
    kecamatan: string
    status_penguasaan_atas_tanah: string
    luas_tanah: number
    luas_shelter: number
    tinnggi_menara: number
    klasifikasi_fungsi_menara: string
    keterangan: string
  }
}

export const SuratIzinPermohonanTowerField: ISuratIzinPermohonanTower = {
  _id: "pk",
  pemohon: {
    bentuk_usaha: "",
    nama: "",
    alamat: "",
    no_telefon_hp: "",
    NIK: "",
    jabatan_dalam_perusahaan: "",
    nama_perusahaan: "",
    alamat_perusahaan: "",
  },
  data_menara: {
    jalan_menara: "",
    kelurahan_desa: "",
    kecamatan: "",
    status_penguasaan_atas_tanah: "",
    luas_tanah: 0,
    luas_shelter: 0,
    tinnggi_menara: 0,
    klasifikasi_fungsi_menara: "",
    keterangan: "",
  },
}

export type { ISuratIzinPermohonanTower }
