interface IInventarisJalanIrigasiDanJaringan {
  _id: string
  nama_jenis_pembangunan: string // required
  no_kode_inv: string
  no_register: string
  volume: number
  satuan_volume: string
  lokasi_jalan: string
  lokasi_rt: string
  lokasi_rw: string
  sumber_dana: string // required
  tahun_pengadaan: string // required
  nilai_pembangunan: number // required
  kondisi: string
  koordinat: string
  foto_1: string
  foto_2: string
  keterangan: string
}

export const InventarisJalanIrigasiDanJaringanField: IInventarisJalanIrigasiDanJaringan =
  {
    _id: "pk",
    nama_jenis_pembangunan: "",
    no_kode_inv: "",
    no_register: "",
    volume: Number(undefined),
    satuan_volume: "",
    lokasi_jalan: "",
    lokasi_rt: "",
    lokasi_rw: "",
    sumber_dana: "",
    tahun_pengadaan: "",
    nilai_pembangunan: Number(undefined),
    kondisi: "",
    koordinat: "",
    foto_1: "",
    foto_2: "",
    keterangan: "",
  }

export type { IInventarisJalanIrigasiDanJaringan }

// "nama_jenis_pembangunan": "Rutilahu",
// "no_kode_inv": "12345",
// "no_register": "12345",
// "volume": 250,
// "satuan_volume": "unit",
// "lokasi_jalan": "Kp. Bojong Nangka",
// "lokasi_rt": "003",
// "lokasi_rw": "013",
// "sumber_dana": "Dana desa",
// "tahun_pengadaan": "2020",
// "nilai_pembangunan": 15000000,
// "kondisi": "baik",
// "koordinat": "106.9053 BT / -6.663134 LS",
// "foto_1": ".png",
// "foto_2": ".png",
// "keterangan": "string"
