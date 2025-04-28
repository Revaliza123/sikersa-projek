interface ISuratPermohonanIzinMendirikanBangunanUsaha {
  _id: any
  pemohon: {
    nama: string
    pekerjaan: string
    nama_perusahaan: string
    alamat_perusahaan: string
  }
  bangunan: {
    lokasi_kampung: string
    kelurahan_desa: string
    kecamatan: string
    kabupaten_kota: string
    bukti_pendirian_bangunan: string
    tahun_pendirian_tanah: string
    luas_tanah: string
    nama_pemilik_tanah: string
    bangunan_digunakan_untuk: string
    surat_izin_mendirikan_bangunan_lama: string
    konstruksi_bangunan_pondasi: string
    dinding: string
    rangka_atap: string
    atap: string
    kusen: string
    lantai: string
  }
}

export const SuratPermohonanIzinMendirikanBangunanField: ISuratPermohonanIzinMendirikanBangunanUsaha =
  {
    _id: "pk",
    pemohon: {
      nama: "",
      pekerjaan: "",
      nama_perusahaan: "",
      alamat_perusahaan: "",
    },
    bangunan: {
      lokasi_kampung: "",
      kelurahan_desa: "",
      kecamatan: "",
      kabupaten_kota: "",
      bukti_pendirian_bangunan: "",
      tahun_pendirian_tanah: "",
      luas_tanah: "",
      nama_pemilik_tanah: "",
      bangunan_digunakan_untuk: "",
      surat_izin_mendirikan_bangunan_lama: "",
      konstruksi_bangunan_pondasi: "",
      dinding: "",
      rangka_atap: "",
      atap: "",
      kusen: "",
      lantai: "",
    },
  }

export type { ISuratPermohonanIzinMendirikanBangunanUsaha }
