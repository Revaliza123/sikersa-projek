interface ISuratKeteranganKepemilikanTanah {
  _id: any
  pemilik: {
    nomor_surat: string
    nik: string
    nama_pemilik: string
    pekerjaan: string
  }
  tanah: {
    nama_di_sppt: string
    tahun_sppt: string
    nomor_sppt: string
    batas_utara: string
    batas_timur: string
    batas_selatan: string
    batas_barat: string
    luas_tanah: number
    luas_asal_tanah: number
    penggunaan_tanah: string
  }
}
export const SuratKeteranganKepemilikanTanahField: ISuratKeteranganKepemilikanTanah =
  {
    _id: "pk",
    pemilik: {
      nomor_surat: "",
      nik: "",
      nama_pemilik: "",
      pekerjaan: "",
    },
    tanah: {
      nama_di_sppt: "",
      tahun_sppt: "",
      nomor_sppt: "",
      batas_utara: "",
      batas_timur: "",
      batas_selatan: "",
      batas_barat: "",
      luas_tanah: 0,
      luas_asal_tanah: 0,
      penggunaan_tanah: "",
    },
  }

export type { ISuratKeteranganKepemilikanTanah }
