interface IBkRencanaAnggaranBiaya {
  _id: any
  jenis_RAB_APB_desa: string
  tanggal_RAB: string
  bidang: string
  kegiatan: string
  jenis_barang: string
  volume_barang: 0
  harga_satuan_barang: 0
  keterangan: string
  jenis_satuan_barang: string
  lampiran: string
}

export const BkRencanaAnggaranBiayaField = {
  _id: "pk",
  jenis_RAB_APB_desa: "",
  tanggal_RAB: "",
  bidang: "",
  kegiatan: "",
  jenis_barang: "",
  volume_barang: 0,
  harga_satuan_barang: 0,
  keterangan: "",
  jenis_satuan_barang: "",
  lampiran: "",
}

export type { IBkRencanaAnggaranBiaya }
