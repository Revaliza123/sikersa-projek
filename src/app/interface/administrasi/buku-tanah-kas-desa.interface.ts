interface IBukuTanahKasDesa {
  _id: any
  asal_tanah_kas_desa: string
  nomor_sertifikat_buku_letter: string
  luas: 0
  kelas: string
  perolehan_tkd: {
    asal_milik_desa: 0
    bantuan_pemerintah: 0
    bantuan_provinsi: 0
    bantuan_kabupaten_kota: 0
    lain_lain: 0
    tanggal_perolehan: string
  }
  jenis_tkd: {
    sawah: 0
    tegal: 0
    kebun: 0
    tambak_kolam: 0
    tanah_kering_darat: 0
  }
  patok_tanda_batas: {
    ada: 0
    tidak_ada: 0
  }
  papan_nama: {
    ada: 0
    tidak_ada: 0
  }
  lokasi: string
  peruntukan: string
  mutasi: string
  keterangan: string
}

export const BukuTanahKasDesaField = {
  _id: "pk",
  asal_tanah_kas_desa: "",
  nomor_sertifikat_buku_letter: "",
  luas: 0,
  kelas: "",
  perolehan_tkd: {
    asal_milik_desa: 0,
    bantuan_pemerintah: 0,
    bantuan_provinsi: 0,
    bantuan_kabupaten_kota: 0,
    lain_lain: 0,
    tanggal_perolehan: "",
  },
  jenis_tkd: {
    sawah: 0,
    tegal: 0,
    kebun: 0,
    tambak_kolam: 0,
    tanah_kering_darat: 0,
  },
  patok_tanda_batas: {
    ada: 0,
    tidak_ada: 0,
  },
  papan_nama: {
    ada: 0,
    tidak_ada: 0,
  },
  lokasi: "",
  peruntukan: "",
  mutasi: "",
  keterangan: "",
}

export type { IBukuTanahKasDesa }
