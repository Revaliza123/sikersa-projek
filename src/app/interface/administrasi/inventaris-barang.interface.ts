interface IInventarisBarang {
  _id: string
  nama_barang?: string,
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
  jumlah?: number,
  satuan?: string,
  identitas_spesifikasi_barang?: string,
  sumber_dana?: string,
  kondisi?: string,
  harga_perolehan?: string,
  foto_aset?: string,
  keterangan?: string
}

export const InventarisBarangField: IInventarisBarang = {
  _id: '',
  nama_barang: "",
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
  jumlah: 0,
  satuan: "",
  identitas_spesifikasi_barang: "",
  sumber_dana: "",
  kondisi: "",
  harga_perolehan: "",
  foto_aset: "",
  keterangan: ""
}

export type { IInventarisBarang }

