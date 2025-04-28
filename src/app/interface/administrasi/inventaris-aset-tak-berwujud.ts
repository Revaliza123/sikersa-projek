interface IInventarisAsetTakBerwujud {
  _id: string
  nama_jenis_barang?: string,
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
  nama_barang?: string,
  identitas_spesifikasi_barang?: string,
  sumber_dana?: string,
  tahun_pengadaan?: string,
  harga_perolehan?: string,
  masa_berlaku?: string,
  upload_lampiran?: string
}

export const InventarisAsetTakBerwujudField: IInventarisAsetTakBerwujud = {
  _id: '',
  nama_jenis_barang: "",
  kode_barang: {
    kode_golongan: "",
    kode_bidang: "",
    kode_kelompok_barang: "",
    kode_sub_kelompok_barang: "",
    kode_sub_sub_kelompok_barang: "",
  },
  kode_register: {
    kode_pengguna_barang: "",
    tahun_perolehan: 0,
    norut_pendaftaran: ""
  },
  final_kode: "",
  nama_barang: "",
  identitas_spesifikasi_barang: "",
  sumber_dana: "",
  tahun_pengadaan: "",
  harga_perolehan: "",
  masa_berlaku: "",
  upload_lampiran: ""
}

export type { IInventarisAsetTakBerwujud }

