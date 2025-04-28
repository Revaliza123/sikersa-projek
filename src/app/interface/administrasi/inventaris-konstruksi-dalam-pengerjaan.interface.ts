interface IInventarisKonstruksiDalamPengerjaan {
  _id: string
  nama_barang_jenis_barang: string
  bangunan: string
  konstruksi_bangunan_bertingkat: string
  konstruksi_bangunan_beton: string
  luas_lantai: number
  lokasi: string
  tanggal_dokumen: string
  no_dokumen: string
  tanggal_mulai: string
  status_tanah: string
  no_kode_tanah: string
  asal_usul_pembiayaan: string
  nilai_kontrak: number
  foto: string
  keterangan: string
}

export const InventarisKonstruksiDalamPengerjaanField: IInventarisKonstruksiDalamPengerjaan =
  {
    _id: "pk",
    nama_barang_jenis_barang: "",
    bangunan: "",
    konstruksi_bangunan_bertingkat: "",
    konstruksi_bangunan_beton: "",
    luas_lantai: Number(undefined),
    lokasi: "",
    tanggal_dokumen: "",
    no_dokumen: "",
    tanggal_mulai: "",
    status_tanah: "",
    no_kode_tanah: "",
    asal_usul_pembiayaan: "",
    nilai_kontrak: Number(undefined),
    foto: "",
    keterangan: "",
  }

export type { IInventarisKonstruksiDalamPengerjaan }

// "nama_barang_jenis_barang": "Rutilahu",
// "bangunan": "pendek",
// "konstruksi_bangunan_bertingkat": "iya",
// "konstruksi_bangunan_beton": "iya",
// "luas_lantai": 250,
// "lokasi": "Kp. Bojong Nangka",
// "tanggal_dokumen": "12-02-2023",
// "no_dokumen": "123/123",
// "tanggal_mulai": "12-02-2023",
// "status_tanah": "sudah jalan",
// "no_kode_tanah": "123/123",
// "asal_usul_pembiayaan": "pembiayaan",
// "nilai_kontrak": 12500000,
// "foto": ".png",
// "keterangan": "string"
