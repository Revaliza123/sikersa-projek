interface IBkKasUmum {
  _id: any
  tanggal: string
  kode_rekening: string
  uraian: string
  penerimaan: number
  pengeluaran: number
  nomor_bukti: string
  keterangan: string
  jumlah_pengeluaran_komulatif: number
  saldo: number
  lampiran?: string
}

export const BkKasUmumField = {
  _id: "pk",
  tanggal: "",
  kode_rekening: "",
  uraian: "",
  penerimaan: 0,
  pengeluaran: 0,
  nomor_bukti: "",
  keterangan: "",
  lampiran: "",
  jumlah_pengeluaran_komulatif: 0,
  saldo: 0,
}

export type { IBkKasUmum }
