interface IBukuAPBDField {
  _id: string
  tanggal_perdes: any
  nomer_perdes: string
  jenis_anggaran: string
  kode_rekening: string
  pendapatan: {
    pendapatan_asli_desa: number
    pendapatan_transfer: number
    pendapatan_lain_lain: number
  }
  belanja: {
    belanja_pegawai: number
    belanja_barang_dan_jasa: number
    belanja_modal: number
  }
  pembiayaan: {
    penerimaan_pembiayaan: number
    pengeluran_pembiayaan: number
  }
  keterangan: string
  upload_lampiran_surat: string
}

export const BukuAPBDField = {
  _id: "pk",
  tanggal_perdes: null,
  nomer_perdes: "",
  jenis_anggaran: "",
  kode_rekening: "",
  pendapatan: {
    pendapatan_asli_desa: 0,
    pendapatan_transfer: 0,
    pendapatan_lain_lain: 0,
  },
  belanja: {
    belanja_pegawai: 0,
    belanja_barang_dan_jasa: 0,
    belanja_modal: 0,
  },
  pembiayaan: {
    penerimaan_pembiayaan: 0,
    pengeluran_pembiayaan: 0,
  },
  keterangan: "",
  upload_lampiran_surat: "",
}

export type { IBukuAPBDField }
