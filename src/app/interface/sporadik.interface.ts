interface ISporadik {
  _id: any
  umum: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    bertindak_atas_nama: string
    tempat_lahir: string
    tanggal_lahir: string
    pekerjaan: string
    alamat: string
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
    jalan: string
    rt_rw: string
    penggunaan_tanah: string
    ukuran_p_tanah: number
    ukuran_l_tanah: number
    luas_tanah: number
    luas_asal_tanah: number
    riwayat_tanah: string
  }
  saksi: {
    nama_lengkap_saksi1: string
    umur_saksi1: number
    pekerjaan_saksi1: string
    alamat_saksi1: string
    nama_lengkap_saksi2: string
    umur_saksi2: number
    pekerjaan_saksi2: string
    alamat_saksi2: string
  }
}
export const SporadikField: ISporadik = {
  _id: "pk",
  umum: {
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    bertindak_atas_nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    pekerjaan: "",
    alamat: "",
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
    jalan: "",
    rt_rw: "",
    penggunaan_tanah: "",
    ukuran_p_tanah: 0,
    ukuran_l_tanah: 0,
    luas_tanah: 0,
    luas_asal_tanah: 0,
    riwayat_tanah: "",
  },
  saksi: {
    nama_lengkap_saksi1: "",
    umur_saksi1: 0,
    pekerjaan_saksi1: "",
    alamat_saksi1: "",
    nama_lengkap_saksi2: "",
    umur_saksi2: 0,
    pekerjaan_saksi2: "",
    alamat_saksi2: "",
  },
}

export type { ISporadik }
