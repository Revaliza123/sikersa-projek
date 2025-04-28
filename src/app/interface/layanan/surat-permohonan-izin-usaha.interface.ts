interface ISuratPermohonanIzinUsaha {
  _id: any
  pemilik_pengurus_penanggungjawab: {
    nama_lengkap: string
    nik: string
    paspor: string
    tempat_lahir: string
    tanggal_lahir: string
    kewarganegaraan: string
    alamat_tempat_tinggal: string
    nomor_telpon_fax: string
  }
  indentias_perusahaan: {
    nama_perusahaan: string
    nomor_telp_fax: string
    status: string
    alamat_perusahaan: string
    kelurahan: string
    kecamatan: string
    kota: string
    provinsi: string
    kode_pos: string
  }
  legalitas_perusahaan: {
    bentuk_perusahaan: string
    nomor_tgl_akta_pendirian: string
    nomor_tgl_akta_pengesahan_pendirian: string
    nomor_tgl_akta_perubahan: string
    nomor_tgl_akta_pengesahan_perubahan: string
  }
  kekayaan_bersih_dan_saham: {
    nilai_kekayaan_bersih_perusahaan: string
    total_nilai_saham: number
    komposisi_saham_nasional: string
    komposisi_saham_asing: string
  }
  kegiatan_usaha: {
    kelembagaan: string
    kegiatan_usaha: string
    barang_jasa_dagangan_utama: string
  }
}

export const SuratPermohonanIzinUsahaField: ISuratPermohonanIzinUsaha = {
  _id: "pk",
  pemilik_pengurus_penanggungjawab: {
    nama_lengkap: "",
    nik: "",
    paspor: "",
    tanggal_lahir: "",
    tempat_lahir: "",
    kewarganegaraan: "",
    alamat_tempat_tinggal: "",
    nomor_telpon_fax: "",
  },
  indentias_perusahaan: {
    nama_perusahaan: "",
    nomor_telp_fax: "",
    status: "",
    alamat_perusahaan: "",
    kelurahan: "",
    kecamatan: "",
    kota: "",
    provinsi: "",
    kode_pos: "",
  },
  legalitas_perusahaan: {
    bentuk_perusahaan: "",
    nomor_tgl_akta_pendirian: "",
    nomor_tgl_akta_pengesahan_pendirian: "",
    nomor_tgl_akta_pengesahan_perubahan: "",
    nomor_tgl_akta_perubahan: "",
  },
  kekayaan_bersih_dan_saham: {
    nilai_kekayaan_bersih_perusahaan: "",
    total_nilai_saham: 0,
    komposisi_saham_nasional: "",
    komposisi_saham_asing: "",
  },
  kegiatan_usaha: {
    kelembagaan: "",
    kegiatan_usaha: "",
    barang_jasa_dagangan_utama: "",
  },
}

export type { ISuratPermohonanIzinUsaha }
