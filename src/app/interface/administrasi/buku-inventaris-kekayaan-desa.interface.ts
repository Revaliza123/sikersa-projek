interface IBukuInventarisKekayaanDesa {
  jenis_barang: string
  nilai_beli: number
  asal_barang_bangunan: {
    dibeli_sendiri: number
    bantuan_pemerintah: number
    bantuan_provinsi: number
    bantuan_kabupaten_kota: number
    sumbangan: number
  }
  keadaan_barang_bangunan_awal_tahun: { baik: number; rusak: number }
  keadaan_barang_bangunan_akhir_tahun: { baik: number; rusak: number }
  penghapusan_barang_dan_bangunan: {
    rusak: number
    dijual: number
    disumbangkan: number
    tanggal_dihapus: string
  }
  keterangan: string
  // keadaan_baik_awal_tahun: number;
  // keadaan_rusak_awal_tahun: number;
  // tanggal_penghapusan: string;
  // keadaan_baik_akhir_tahun: number;
  // keadaan_rusak_akhir_tahun: number;
}

export const BukuInventarisKekayaanDesaField = {
  _id: "pk",
  jenis_barang: "",
  nilai_beli: 0,
  asal_barang_bangunan: {
    dibeli_sendiri: 0,
    bantuan_pemerintah: 0,
    bantuan_provinsi: 0,
    bantuan_kabupaten_kota: 0,
    sumbangan: 0,
  },
  keadaan_barang_bangunan_awal_tahun: { baik: 0, rusak: 0 },
  keadaan_barang_bangunan_akhir_tahun: { baik: 0, rusak: 0 },
  penghapusan_barang_dan_bangunan: {
    rusak: 0,
    dijual: 0,
    disumbangkan: 0,
    tanggal_dihapus: "",
  },
  keterangan: "",
  // keadaan_baik_awal_tahun: 0,
  // keadaan_rusak_awal_tahun: 0,
  // tanggal_penghapusan: '',
  // keadaan_baik_akhir_tahun: 0,
  // keadaan_rusak_akhir_tahun: 0,
}

export type { IBukuInventarisKekayaanDesa }
