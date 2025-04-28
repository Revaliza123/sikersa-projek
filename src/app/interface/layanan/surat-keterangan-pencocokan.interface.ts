interface ISuratKeteranganPencocokan {
  _id: any
  pemilik: {
    nomor_surat: string
    nik: string
    nama_pemilik: string
    pekerjaan: string
    alamat: string
    status_hak_tanah: string
    sejak_tahun: string
    petugas_pemeriksa: string
    hasil_pencocokan: string
  }
  tanah: {
    nama_di_sppt: string
    tahun_sppt: string
    nomor_sppt: string
    batas_utara: string
    batas_timur: string
    batas_selatan: string
    batas_barat: string
    dusun: string
    luas_tanah: number
    penggunaan_tanah: string
    keterangan: string
  }
}

export const SuratKeteranganPencocokanField: ISuratKeteranganPencocokan = {
  _id: "pk",
  pemilik: {
    nomor_surat: "",
    nik: "",
    nama_pemilik: "",
    pekerjaan: "",
    alamat: "",
    status_hak_tanah: "",
    sejak_tahun: "",
    petugas_pemeriksa: "",
    hasil_pencocokan: "",
  },
  tanah: {
    nama_di_sppt: "",
    tahun_sppt: "",
    nomor_sppt: "",
    batas_utara: "",
    batas_timur: "",
    batas_selatan: "",
    batas_barat: "",
    dusun: "",
    luas_tanah: 0,
    penggunaan_tanah: "",
    keterangan: "",
  },
}

export type { ISuratKeteranganPencocokan }
