interface IInventarisGedungDanBangunan {
  _id: string
  nama_barang_jenis_barang: string // required
  kode_barang: string
  no_register: string
  kondisi_bangunan: string // required
  konstruksi_bangunan_bertingkat: string
  konstruksi_bangunan_beton: string
  lokasi: string
  tanggal_dokumen_gedung: string
  no_dokumen_gedung: string
  luas: number // required
  status_tanah: string
  no_kode_tanah: string
  asal_usul: string
  harga: number
  foto_1: string
  foto_2: string
  keterangan: string
}

export const InventarisGedungDanBangunanField: IInventarisGedungDanBangunan = {
  _id: "pk",
  nama_barang_jenis_barang: "",
  kode_barang: "",
  no_register: "",
  kondisi_bangunan: "",
  konstruksi_bangunan_bertingkat: "",
  konstruksi_bangunan_beton: "",
  lokasi: "",
  tanggal_dokumen_gedung: "",
  no_dokumen_gedung: "",
  luas: Number(undefined),
  status_tanah: "",
  no_kode_tanah: "",
  asal_usul: "",
  harga: Number(undefined),
  foto_1: "",
  foto_2: "",
  keterangan: "",
}

export type { IInventarisGedungDanBangunan }

// nama_barang_jenis_barang: "scanner",
// kode_barang: "12345",
// no_register: "1234",
// kondisi_bangunan: "baik",
// konstruksi_bangunan_bertingkat: "'baik",
// konstruksi_bangunan_beton: "baik",
// lokasi: "kantor desa",
// tanggal_dokumen_gedung: "12-03-2023",
// no_dokumen_gedung: "12345",
// luas: 230000,
// status_tanah: "luas",
// no_kode_tanah: "1234",
// asal_usul: "daerah asal",
// harga: 2039209,
// foto_1: ".png",
// foto_2: ".png",
// keterangan: "string"
