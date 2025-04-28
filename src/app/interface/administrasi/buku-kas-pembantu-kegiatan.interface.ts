interface IBkKasPembantuKegiatan {
  tanggal: string
  penerimaan_kegiatan: {
    dari_bendahara: number
    swadaya_masyarakat: number
  }
  pengeluaran_kegiatan: {
    belanja_barang_dan_jasa: number
    belanja_modal: number
  }
  nomor_bukti: string
  jumlah_pengembalian_ke_bendahara: number
  keterangan: string
  lampiran: string
  saldo: number
}

export const BkKasPembantuKegiatanField = {
  _id: "pk",
  tanggal: "",
  penerimaan_kegiatan: {
    dari_bendahara: 0,
    swadaya_masyarakat: 0,
  },
  pengeluaran_kegiatan: {
    belanja_barang_dan_jasa: 0,
    belanja_modal: 0,
  },
  nomor_bukti: "",
  jumlah_pengembalian_ke_bendahara: 0,
  keterangan: "",
  lampiran: "",
  saldo: 0,
}

export type { IBkKasPembantuKegiatan }
