interface IInventarisPeralatanDanMesin {
  _id: string
  kode_barang: string
  no_register: string
  nama_barang_jenis_barang: string
  jumlah: number
  tahun_pengadaan: string
  merk: string
  spesifikasi: string
  sumber_dana: string
  harga_perolehan: number
  status_barang: string
  jumlah_kondisi_baik: number
  lokasi_kondisi_baik: string
  foto: string
  keterangan: string
}

export const InventarisPeralatanDanMesinField: IInventarisPeralatanDanMesin = {
  _id: "pk",
  kode_barang: "",
  no_register: "",
  nama_barang_jenis_barang: "",
  jumlah: Number(undefined),
  tahun_pengadaan: "",
  merk: "",
  spesifikasi: "",
  sumber_dana: "",
  harga_perolehan: Number(undefined),
  status_barang: "",
  jumlah_kondisi_baik: Number(undefined),
  lokasi_kondisi_baik: "",
  foto: "",
  keterangan: "",
}

export type { IInventarisPeralatanDanMesin }

// "kode_barang": "3.06.01.01.0086",
// "no_register": "12345",
// "nama_barang_jenis_barang": "scanner",
// "jumlah": 2,
// "tahun_pengadaan": "2020",
// "merk": "polytron",
// "spesifikasi": "polytron",
// "sumber_dana": "pbh",
// "harga_perolehan": 5200000,
// "status_barang": "baik",
// "jumlah_kondisi_baik": 3,
// "lokasi_kondisi_baik": "kantor desa",
// "foto": ".png",
// "keterangan": "string"
