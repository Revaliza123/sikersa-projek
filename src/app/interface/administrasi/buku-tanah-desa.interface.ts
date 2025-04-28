interface IBukuTanahDesa {
  _id: any
  pemilik: {
    nik: string
    nama_perorangan_badan_hukum: string
    alamat: string
    pekerjaan: string
    keterangan: string
  }
  tanah: {
    nama_di_sppt: string
    nomor_sppt: string
    batas_utara: string
    batas_timur: string
    batas_selatan: string
    batas_barat: string
    luas_tanah: null
    status_hak_tanah: string
    penggunaan_tanah: string
    koordinat_latitude: number | null
    koordinat_longitude: number | null
  }
}

export const BukuTanahDesaField = {
  _id: "pk",
  pemilik: {
    nik: "",
    nama_perorangan_badan_hukum: "",
    alamat: "",
    pekerjaan: "",
    keterangan: "",
  },
  tanah: {
    nama_di_sppt: "",
    nomor_sppt: "",
    batas_utara: "",
    batas_timur: "",
    batas_selatan: "",
    batas_barat: "",
    luas_tanah: null,
    status_hak_tanah: "",
    penggunaan_tanah: "",
    koordinat_latitude: null,
    koordinat_longitude: null,
  },
}

export type { IBukuTanahDesa }
