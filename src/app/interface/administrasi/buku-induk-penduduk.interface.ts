interface IBukuIndukPenduduk {
  id: string
  umum: IIBukuIndukPendudukUmum
  kelahiran: IIBukuIndukPendudukKelahiran
  kematian: IIBukuIndukPendudukKematian
  nikah_cerai: IIBukuIndukPendudukNikahCerai
  lain_lain: IIBukuIndukPendudukLainLain
}

export const BukuIndukPendudukField: IBukuIndukPenduduk = {
  id: "pk",
  umum: {
    nik: "",
    nama_lengkap: "",
    nama_panggilan: "",
    jenis_kelamin: "",
    agama: "",
    golongan_darah: "",
    pendidikan_terakhir: "",
    pekerjaan: "",
    no_telepon_hp: "",
    alamat_rumah: "",
    rt: "",
    rw: "",
    kampung: "",
    dusun: "",
    dapat_membaca_huruf: "",
    kewarganegaraan: "",
    kebangsaan: "",
    suku: "",
    jenis_perubahan: "-",
    penambahan: "",
    pengurangan: "",
    pergi_tanggal: "",
    pergi_ke: "",
    datang_tanggal: "",
    datang_ke: "",
    // umur: 0,
    // provinsi: '',
    // kabupaten_kota: '',
    // kecamatan: '',
    // desa_kelurahan: '',
  },
  kelahiran: {
    tempat_dilahirkan: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jam_lahir: "",
    waktu_lahir: "",
    anak_ke: "",
    jenis_kelahiran: "",
    penolong_kelahiran: "",
    berat_bayi: 0,
    panjang_bayi: 0,
    akta_kelahiran: "",
    nomor_akta_kelahiran: "",
    tanggal_akta_kelahiran: "",
    tempat_diterbitkan_ktp: "",
    tanggal_diterbitkan_ktp: "",
    nomor_kk: "",
    kedudukan_dalam_keluarga: "",
    nik_ibu_kandung: "",
    nama_ibu_kandung: "",
    nik_ayah_kandung: "",
    nama_ayah_kandung: "",
  },
  kematian: {
    tempat_kematian: "",
    desa_kelurahan: "",
    kecamatan: "",
    kabupaten_kota: "",
    provinsi: "",
    tanggal_kematian: "",
    jam_kematian: "",
    waktu_kematian: "",
    umur_saat_meninggal: 0,
    sebab_kematian: "",
    yang_mengabarkan_kematian: "",
    akta_kematian: "",
    nomor_akta_kematian: "",
    tanggal_akta_kematian: "",
  },
  nikah_cerai: {
    status_perkawinan: "",
    akta_perkawinan: "",
    nomor_akta_perkawinan: "",
    tanggal_perkawinan: "",
    lokasi_perkawinan: "",
    akta_perceraian: "",
    nomor_akta_perceraian: "",
    tanggal_perceraian: "",
    lokasi_perceraian: "",
  },
  lain_lain: {
    kelainan: "",
    jenis_penyandang_cacat: "",
    cacat_fisik: "",
    cacat_mental: "-",
    pendapatan_per_bulan: 0,
    keterangan: "",
  },
}

interface IIBukuIndukPendudukUmum {
  nik: string
  nama_lengkap: string
  nama_panggilan: string
  jenis_kelamin: string
  agama: string
  golongan_darah: string
  pendidikan_terakhir: string
  pekerjaan: string
  pekerjaan_lainnya?: string
  no_telepon_hp: string
  alamat_rumah: string
  rt: string
  rw: string
  kampung: string
  dusun: string
  dapat_membaca_huruf: string
  kewarganegaraan: string
  kebangsaan: string
  suku: string
  jenis_perubahan: string
  penambahan: string
  pengurangan: string
  umur?: number
  pergi_tanggal?: string
  pergi_ke?: string
  datang_tanggal?: string
  datang_ke?: string
  // provinsi: string;
  // kabupaten_kota: string;
  // kecamatan: string;
  // desa_kelurahan: string;
}
interface IIBukuIndukPendudukKelahiran {
  tempat_dilahirkan: string
  tempat_lahir: string
  tanggal_lahir: string
  jam_lahir: string
  waktu_lahir: string
  anak_ke: string
  jenis_kelahiran: string
  penolong_kelahiran: string
  berat_bayi: number
  panjang_bayi: number
  akta_kelahiran: string
  nomor_akta_kelahiran: string
  tanggal_akta_kelahiran: string
  tempat_diterbitkan_ktp: string
  tanggal_diterbitkan_ktp: string
  nomor_kk: string
  kedudukan_dalam_keluarga: string
  nik_ibu_kandung: string
  nama_ibu_kandung: string
  nik_ayah_kandung: string
  nama_ayah_kandung: string
  zona_waktu?: string
}
interface IIBukuIndukPendudukKematian {
  tempat_kematian: string
  desa_kelurahan: string
  kecamatan: string
  kabupaten_kota: string
  provinsi: string
  tanggal_kematian: string
  jam_kematian: string
  waktu_kematian: string
  umur_saat_meninggal: number
  sebab_kematian: string
  yang_mengabarkan_kematian: string
  akta_kematian: string
  nomor_akta_kematian: string
  tanggal_akta_kematian: string
  zona_waktu?: string
}
interface IIBukuIndukPendudukNikahCerai {
  status_perkawinan: string
  akta_perkawinan: string
  nomor_akta_perkawinan: string
  tanggal_perkawinan: string
  lokasi_perkawinan: string
  akta_perceraian: string
  nomor_akta_perceraian: string
  tanggal_perceraian: string
  lokasi_perceraian: string
}
interface IIBukuIndukPendudukLainLain {
  kelainan: string
  jenis_penyandang_cacat: string
  cacat_fisik: string
  cacat_mental: "-"
  pendapatan_per_bulan: number
  keterangan: string
}

export type { IBukuIndukPenduduk }
