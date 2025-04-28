interface IBkKartuTandaPendudukKK {
  _id: any
  anggota: IDataPerorangan[]
  jumlah: number
  kepala: IDataPerorangan[]
  nomor_kk: string
}

interface IDataPerorangan {
  _id: any
  kelahiran: {
    akta_kelahiran: string
    anak_ke: number
    berat_bayi: number
    jam_lahir: string
    jenis_kelahiran: string
    kedudukan_dalam_keluarga: string
    nama_ayah_kandung: string
    nama_ibu_kandung: string
    nik_ayah_kandung: string
    nik_ibu_kandung: string
    nomor_akta_kelahiran: string
    nomor_kk: string
    panjang_bayi: number
    penolong_kelahiran: string
    tanggal_akta_kelahiran: string
    tanggal_diterbitkan_ktp: string
    tanggal_lahir: string
    tempat_dilahirkan: string
    tempat_diterbitkan_ktp: string
    tempat_lahir: string
    waktu_lahir: string
  }
  kematian: {
    akta_kematian: string
    desa_kelurahan: string
    jam_kematian: string
    kabupaten_kota: string
    kecamatan: string
    nomor_akta_kematian: string
    provinsi: string
    sebab_kematian: string
    tanggal_akta_kematian: string
    tanggal_kematian: string
    tempat_kematian: string
    umur_saat_meninggal: number
    waktu_kematian: string
    yang_mengabarkan_kematian: string
  }
  lain_lain: {
    cacat_fisik: string
    cacat_mental: string
    jenis_penyandang_cacat: string
    kelainan: string
    keterangan: string
    pendapatan_per_bulan: number
  }
  nikah_cerai: {
    akta_perceraian: string
    akta_perkawinan: string
    lokasi_perceraian: string
    lokasi_perkawinan: string
    nomor_akta_perceraian: string
    nomor_akta_perkawinan: string
    status_perkawinan: string
    tanggal_perceraian: string
    tanggal_perkawinan: string
  }
  umum: {
    agama: string
    alamat_rumah: string
    dapat_membaca_huruf: string
    dusun: string
    golongan_darah: string
    jenis_kelamin: string
    jenis_perubahan: string
    kampung: string
    kebangsaan: string
    kewarganegaraan: string
    nama_lengkap: string
    nama_panggilan: string
    nik: string
    no_telepon_hp: string
    pekerjaan: string
    pendidikan_terakhir: string
    rt: string
    rw: string
    suku: string
  }
}

export const BkKartuTandaPendudukKKField = {
  _id: null,
  anggota: {
    _id: null,
    kelahiran: {
      akta_kelahiran: "",
      anak_ke: 0,
      berat_bayi: 0,
      jam_lahir: "",
      jenis_kelahiran: "",
      kedudukan_dalam_keluarga: "",
      nama_ayah_kandung: "",
      nama_ibu_kandung: "",
      nik_ayah_kandung: "",
      nik_ibu_kandung: "",
      nomor_akta_kelahiran: "",
      nomor_kk: "",
      panjang_bayi: 0,
      penolong_kelahiran: "",
      tanggal_akta_kelahiran: "",
      tanggal_diterbitkan_ktp: "",
      tanggal_lahir: "",
      tempat_dilahirkan: "",
      tempat_diterbitkan_ktp: "",
      tempat_lahir: "",
      waktu_lahir: "",
    },
    kematian: {
      akta_kematian: "",
      desa_kelurahan: "",
      jam_kematian: "",
      kabupaten_kota: "",
      kecamatan: "",
      nomor_akta_kematian: "",
      provinsi: "",
      sebab_kematian: "",
      tanggal_akta_kematian: "",
      tanggal_kematian: "",
      tempat_kematian: "",
      umur_saat_meninggal: 0,
      waktu_kematian: "",
      yang_mengabarkan_kematian: "",
    },
    lain_lain: {
      cacat_fisik: "",
      cacat_mental: "",
      jenis_penyandang_cacat: "",
      kelainan: "",
      keterangan: "",
      pendapatan_per_bulan: 0,
    },
    nikah_cerai: {
      akta_perceraian: "",
      akta_perkawinan: "",
      lokasi_perceraian: "",
      lokasi_perkawinan: "",
      nomor_akta_perceraian: "",
      nomor_akta_perkawinan: "",
      status_perkawinan: "",
      tanggal_perceraian: "",
      tanggal_perkawinan: "",
    },
    umum: {
      agama: "",
      alamat_rumah: "",
      dapat_membaca_huruf: "",
      dusun: "",
      golongan_darah: "",
      jenis_kelamin: "",
      jenis_perubahan: "",
      kampung: "",
      kebangsaan: "",
      kewarganegaraan: "",
      nama_lengkap: "",
      nama_panggilan: "",
      nik: "",
      no_telepon_hp: "",
      pekerjaan: "",
      pendidikan_terakhir: "",
      rt: "",
      rw: "",
      suku: "",
    },
  },
  jumlah: 0,
  kepala: {
    _id: null,
    kelahiran: {
      akta_kelahiran: "",
      anak_ke: 0,
      berat_bayi: 0,
      jam_lahir: "",
      jenis_kelahiran: "",
      kedudukan_dalam_keluarga: "",
      nama_ayah_kandung: "",
      nama_ibu_kandung: "",
      nik_ayah_kandung: "",
      nik_ibu_kandung: "",
      nomor_akta_kelahiran: "",
      nomor_kk: "",
      panjang_bayi: 0,
      penolong_kelahiran: "",
      tanggal_akta_kelahiran: "",
      tanggal_diterbitkan_ktp: "",
      tanggal_lahir: "",
      tempat_dilahirkan: "",
      tempat_diterbitkan_ktp: "",
      tempat_lahir: "",
      waktu_lahir: "",
    },
    kematian: {
      akta_kematian: "",
      desa_kelurahan: "",
      jam_kematian: "",
      kabupaten_kota: "",
      kecamatan: "",
      nomor_akta_kematian: "",
      provinsi: "",
      sebab_kematian: "",
      tanggal_akta_kematian: "",
      tanggal_kematian: "",
      tempat_kematian: "",
      umur_saat_meninggal: 0,
      waktu_kematian: "",
      yang_mengabarkan_kematian: "",
    },
    lain_lain: {
      cacat_fisik: "",
      cacat_mental: "",
      jenis_penyandang_cacat: "",
      kelainan: "",
      keterangan: "",
      pendapatan_per_bulan: 0,
    },
    nikah_cerai: {
      akta_perceraian: "",
      akta_perkawinan: "",
      lokasi_perceraian: "",
      lokasi_perkawinan: "",
      nomor_akta_perceraian: "",
      nomor_akta_perkawinan: "",
      status_perkawinan: "",
      tanggal_perceraian: "",
      tanggal_perkawinan: "",
    },
    umum: {
      agama: "",
      alamat_rumah: "",
      dapat_membaca_huruf: "",
      dusun: "",
      golongan_darah: "",
      jenis_kelamin: "",
      jenis_perubahan: "",
      kampung: "",
      kebangsaan: "",
      kewarganegaraan: "",
      nama_lengkap: "",
      nama_panggilan: "",
      nik: "",
      no_telepon_hp: "",
      pekerjaan: "",
      pendidikan_terakhir: "",
      rt: "",
      rw: "",
      suku: "",
    },
  },
  no_kk: "",
}

export type { IBkKartuTandaPendudukKK }
