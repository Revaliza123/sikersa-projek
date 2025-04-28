interface IInventarisAsetTetapLainnya {
  _id: string
  kode_barang: string
  nama_barang_jenis_barang: string // required
  jumlah: number // required
  tahun_pengadaan: string // required
  merk: string
  spesifikasi: string
  sumber_dana: string
  harga_perolehan: number
  status_barang: string
  kondisi_barang: string
  lokasi: string
  foto: string
  keterangan: string
}

export const InventarisAsetTetapLainnyaField: IInventarisAsetTetapLainnya = {
  _id: "pk",
  kode_barang: "",
  nama_barang_jenis_barang: "",
  jumlah: Number(undefined),
  tahun_pengadaan: "",
  merk: "",
  spesifikasi: "",
  sumber_dana: " ",
  harga_perolehan: Number(undefined),
  status_barang: "",
  kondisi_barang: "",
  lokasi: "",
  foto: "",
  keterangan: "",
}

export type { IInventarisAsetTetapLainnya }

// kode_barang: "12345",
// nama_barang_jenis_barang: "Rutilahu",
// jumlah: 250,
// tahun_pengadaan: "2020",
// merk: "polytron",
// spesifikasi: "polytron",
// sumber_dana: "Dana desa",
// harga_perolehan: 15000000,
// status_barang: "sudah jalan",
// kondisi_barang: "baik",
// lokasi: "Kp. Bojong Nangka",
// foto: "",
// keterangan: ""
