interface IInventarisTanah {
  _id: string
  nama_barang_jenis_barang: string
  kode_barang: {
    kode_golongan?: string,
    kode_bidang?: string
    kode_kelompok_barang?: string
    kode_sub_kelompok_barang?: string
    kode_sub_sub_kelompok_barang?: string
  },
  kode_register: {
    kode_pengguna_barang?: string
    tahun_perolehan?: number,
    norut_pendaftaran?: string
  }
  final_kode?: string,
  nama_wajib_kode_barang: string
  no_nama_wajib: string
  nama_wajib_tempat_tinggal: string
  jenis_lahan: string
  luas: number
  no_persil: string
  kelas_desa: string
  lokasi: string
  hak_status_tanah: string
  tanggal_sertfikat: string
  no_sertifikat: string
  penggunaan: string
  asal_usul: string
  harga: number
  koordinat: string
  foto_1: string
  foto_2: string
  keterangan: string
}

export const InventarisTanahField: IInventarisTanah = {
  _id: "pk",
  nama_barang_jenis_barang: "",
  kode_barang: {
    kode_golongan: "",
    kode_bidang: "",
    kode_kelompok_barang: "",
    kode_sub_kelompok_barang: "",
    kode_sub_sub_kelompok_barang: ""
  },
  kode_register: {
    kode_pengguna_barang: "",
    tahun_perolehan: 0,
    norut_pendaftaran: ""
  },
  final_kode: "",
  nama_wajib_kode_barang: "",
  no_nama_wajib: "",
  nama_wajib_tempat_tinggal: "",
  jenis_lahan: "",
  luas: Number(undefined),
  no_persil: "",
  kelas_desa: "",
  lokasi: "",
  hak_status_tanah: "",
  tanggal_sertfikat: "",
  no_sertifikat: "",
  penggunaan: "",
  asal_usul: "",
  harga: Number(undefined),
  koordinat: "",
  foto_1: "",
  foto_2: "",
  keterangan: "",
}

export type { IInventarisTanah }

// nama_barang_jenis_barang: "bengkok",
// nama_wajib_kode_barang: "0038",
// no_nama_wajib: "38",
// nama_wajib_tempat_tinggal: "kopo",
// jenis_lahan: "darat",
// luas: 213,
// no_persil: "217",
// kelas_desa: "D III",
// lokasi: "blok simpang",
// hak_status_tanah: "milik desa",
// tanggal_sertfikat: "12-03-2023",
// no_sertifikat: "123/12039/002",
// penggunaan: "pertanian padi",
// asal_usul: "kohir no 1 c",
// harga: 184000,
// koordinat: "106.9053 BT / -6.663134 LS",
// foto_1: ".png",
// foto_2: ".png",
// keterangan: ""
