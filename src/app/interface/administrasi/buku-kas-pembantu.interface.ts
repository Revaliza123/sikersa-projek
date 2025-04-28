interface IBkKasPembantu {
  _id: any
  tanggal: string
  uraian: {
    pajak: number
    RET: number
    PL: number
  }
  pemotongan: number
  penyetoran: number
  keterangan: string
  lampiran: string
  saldo: number
}

export const BkKasPembantuField = {
  _id: "pk",
  tanggal: "",
  uraian: {
    pajak: 0,
    RET: 0,
    PL: 0,
  },
  pemotongan: 0,
  penyetoran: 0,
  keterangan: "",
  lampiran: "",
  saldo: 0,
}

export type { IBkKasPembantu }
