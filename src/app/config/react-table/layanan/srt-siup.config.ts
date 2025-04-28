import { ACTION_COLUMN } from "../action-column.config"

export const SRT_SIUP_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama", accessor: "pemilik.nama", disableFilters: true },
  {
    Header: "Nama Perusahaan",
    accessor: "perusahaan.nama",
    disableFilters: true,
  },
  {
    Header: "Alamat Perusahaan",
    accessor: "perusahaan.alamat",
    disableFilters: true,
  },
  {
    Header: "Akta Pendirian",
    accessor: "legalitas.aktaPendirian.nomorTanggalAkta",
    disableFilters: true,
  },
  ...ACTION_COLUMN,
]

export interface ISrtSIUP {
  pemilik: {
    nama?: string
    alamat?: string
    ttl?: string
    telp?: number
    nik?: number
    kewarganegaraan?: string
  }
  perusahaan: {
    nama?: string
    alamat?: string
    telp?: number
    provinsi?: string
    kota?: string
    kecamatan?: string
    kelurahan?: string
    status?: "PMA" | "PMDN" | "Lain-lain" | string
    kodepos?: number
  }
  legalitas: {
    bentukPerusahaan?: string
    aktaPendirian?: {
      nomorTanggalAkta?: string
      nomorTanggalPengesahan?: string
    }
    aktaPerubahan?: {
      nomorTanggalAkta?: string
      nomorTanggalPengesahan?: string
    }
  }
  kekayaanBersihDanSaham: {
    nilaiKekayaanBersih?: string
    saham?: {
      totalNilaiSaham?: number
      komposisiSahamNasional?: number
      komposisiSahamAsing?: number
    }
  }
  kegiatanUsaha: {
    kelembagaan?: string
    kegiatanUsaha?: string
    barangJasaDaganganUtama?: string
  }
  [key: string]: any
}

export const suratIMBField: ISrtSIUP = {
  pemilik: {
    nama: "",
    alamat: "",
    ttl: "",
    telp: 0,
    nik: 0,
    kewarganegaraan: "",
  },
  perusahaan: {
    nama: "",
    alamat: "",
    telp: 0,
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    status: "",
    kodepos: 0,
  },
  legalitas: {
    bentukPerusahaan: "",
    aktaPendirian: {
      nomorTanggalAkta: "",
      nomorTanggalPengesahan: "",
    },
    aktaPerubahan: {
      nomorTanggalAkta: "",
      nomorTanggalPengesahan: "",
    },
  },
  kekayaanBersihDanSaham: {
    nilaiKekayaanBersih: "",
    saham: {
      totalNilaiSaham: 0,
      komposisiSahamNasional: 0,
      komposisiSahamAsing: 0,
    },
  },
  kegiatanUsaha: {
    kelembagaan: "",
    kegiatanUsaha: "",
    barangJasaDaganganUtama: "",
  },
}
