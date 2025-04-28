interface ISuratKuasa {
  _id: any
  status: string
}

export const SuratKuasaField: ISuratKuasa = {
  _id: "pk",
  status: "diajukan",
}

export type { ISuratKuasa }
