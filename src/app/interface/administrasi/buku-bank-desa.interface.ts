interface IBukuBankDesa {
  _id: any
  tanggal_transaksi: string
  uraian_transaksi: string
  bukti_transaksi: string
  pemasukan: {
    setoran: number
    bunga_bank: number
  }
  pengeluaran: {
    penarikan: number
    pajak: number
    biaya_administrasi: number
  }
  saldo: number
  lampiran: string
}

export const BukuBankDesaField = {
  _id: "pk",
  tanggal_transaksi: "",
  uraian_transaksi: "",
  bukti_transaksi: "",
  pemasukan: {
    setoran: 0,
    bunga_bank: 0,
  },
  pengeluaran: {
    penarikan: 0,
    pajak: 0,
    biaya_administrasi: 0,
  },
  saldo: 0,
  lampiran: "",
}

export type { IBukuBankDesa }
