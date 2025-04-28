export interface ISDGSKuesioner<
  T = ISDGSKuesionerIndividuDetail | ISDGSKuisionerKeluargaDetail,
> {
  // _id?: string,
  createdBy: string
  nikId: string
  sdgs: T
  workspaceId: string
  username?: string
  password?: string
}

export interface ISDGSKuesionerIndividuDetailPenghasilanDari {
  diekspor: string
  jumlah: number | string
  penghasilan_setahun: number | string
  sumber_penghasilan: string
}
export interface ISDGSKuesionerIndividuDetail {
  agama: string
  akses_internet_yang_diperoleh_melalui: string
  alamat_email_pribadi: string
  alamat_facebook_pribadi: string
  alamat_instagram_pribadi: string
  alamat_twitter_pribadi: string
  apakah_ada_penanganan_psikososia_keluarga_terdampak_bencana_penyuluhan_konseling_terapi: string
  apakah_aktif_menggunakan_internet_selama_sebulan_terakhir: string
  apakah_anda_terkena_dampak_bencana: string
  apakah_dalam_setahun_terakhir_ini_ibu_melahirkan: string
  apakah_menerima_pemenuhan_kebutuhan_dasar_saat_bencana_makanan_pakaian_tempat_tinggal: string
  bagaimana_keterbukaan_desa_terhadap_masukan_yang_telah_disampaikan: string
  bagaimana_pelayanan_desa_yang_diperoleh: string
  bahasa_digunakan_dilembaga_formal_sekolah_tempat_kerja_tuliskan: string
  bahasa_digunakan_dirumah_dan_permukiman_tuliskan: string
  berapa_kali_fasilitas_kesehatan_berikut_didatangi_setahun_terakhir_untuk_pengobatan_perawatan: {
    apotik: number
    poliklinik_atau_balai_pengobatan: number
    polindes: number
    posbindu: number
    poskesdes: number
    posyandu: number
    puskesmas_dengan_rawat_inap: number
    puskesmas_pembantu: number
    puskesmas_tanpa_rawat_inap: number
    rumah_bersalin: number
    rumah_sakit: number
    rumah_sakit_bersalin: number
    tempat_praktik_dokter: number
    tempat_praktik_dukun_bayi_atau_bersalin_atau_paraji: number
    tempat_praktik_idan: number
    toko_khusus_obat_atau_jamu: number
  }
  berapa_tahun_bapak_ibu_mengenyam_pendidikan_dasar_sd_smp_sma: number | string
  berapa_usia_saat_pertama_kali_menikah_tahun: number | string
  dalam_setahun_terakhir_apakah_pernah_memperoleh_pelayanan_desa: string
  dalam_setahun_terakhir_apakah_pernah_menyampaikan_masukan_saran_kepada_pihak_desa: string
  dalam_setahun_terakhir_apakah_terjadi_bencana: string
  desa: string
  disabilitas: {
    cacat_eks_sakit_kusta_pernah_sakit_kusta_dan_dinyatakan_sembuh_oleh_dokter: string
    cacat_ganda_cacat_fisik_mental_cacat_fisik_dan_cacat_mental: string
    dipasung: string
    tunadaksa_cacat_tubuh_kelumpuhan_kelainan_ketidaklengkapan_anggota_gerak: string
    tunagrahita_cacat_mental_keterbelakangan_mental: string
    tunalaras_eks_sakit_jiwa_gangguan_mengendalikan_emosi_dan_kontrol_sosial: string
    tunanetra_buta: string
    tunarungu_tuli: string
    tunarungu_wicara_tuli_bisu: string
    tunawicara_bisu: string
  }
  jaminan_sosial_kesehatan: string
  jaminan_sosial_ketenagakerjaan: string
  jenis_kelamin: string
  kabupaten_kota: string
  kecamatan: string
  kecepatan_akses_internet: string
  kerja_bakti_setahun_terakhir_jumlah: number | string
  kondisi_pekerjaan: string
  menolong_warga_yang_kecelakaan_setahun_terakhir_jumlah: number | string
  menolong_warga_yang_mengalami_kematian_keluarga_setahun_terakhir_jumlah:
    | number
    | string
  menolong_warga_yang_sedang_sakit_setahun_terakhir_jumlah: number | string
  nama: string
  nik: string
  nomor_hp: string
  nomor_kartu_keluarga: string
  nomor_untuk_whatsapp: string
  pekerjaan_utama: string
  pekerjaan_utama_lainnya: string
  pendidikan_tertinggi_yang_ditamatkan: string
  penghasilan_setahun_terakhir: number
  penghasilan_setahun_terakhir_dari: ISDGSKuesionerIndividuDetailPenghasilanDari[]
  penyakit_yang_diderita_setahun_terakhir: {
    campak: string
    covid: string
    demam_berdarah: string
    diabetes_kencing_manis_gula: string
    diekspor: string
    difteri: string
    flu_burung_atau_sars: string
    gizi_buruk_atau_marasmus_dan_kwasiorkor: string
    hepatitis_b: string
    hepatitis_e: string
    jantung: string
    kanker: string
    kolera: string
    lainnya: string
    leptospirosis: string
    lumpuh: string
    malaria: string
    muntaber_atau_diare: string
    tbc_paru_paru: string
  }
  pestarakyat_adat_setahun_terakhir_jumlah: number | string
  provinsi: string
  rt: string
  rw: string
  siskamling_setahun_terakhir_jumlah: number | string
  status_pernikahan: string
  suku_bangsa: string
  tanggal_lahir: string
  tempat_lahir: string
  usia: number | string
  warganegara: string
}

export const SDGsKuesionerIndividuField: ISDGSKuesionerIndividuDetail = {
  agama: "",
  akses_internet_yang_diperoleh_melalui: "",
  alamat_email_pribadi: "",
  alamat_facebook_pribadi: "",
  alamat_instagram_pribadi: "",
  alamat_twitter_pribadi: "",
  apakah_ada_penanganan_psikososia_keluarga_terdampak_bencana_penyuluhan_konseling_terapi:
    "",
  apakah_aktif_menggunakan_internet_selama_sebulan_terakhir: "",
  apakah_anda_terkena_dampak_bencana: "",
  apakah_dalam_setahun_terakhir_ini_ibu_melahirkan: "",
  apakah_menerima_pemenuhan_kebutuhan_dasar_saat_bencana_makanan_pakaian_tempat_tinggal:
    "",
  bagaimana_keterbukaan_desa_terhadap_masukan_yang_telah_disampaikan: "",
  bagaimana_pelayanan_desa_yang_diperoleh: "",
  bahasa_digunakan_dilembaga_formal_sekolah_tempat_kerja_tuliskan: "",
  bahasa_digunakan_dirumah_dan_permukiman_tuliskan: "",
  berapa_kali_fasilitas_kesehatan_berikut_didatangi_setahun_terakhir_untuk_pengobatan_perawatan:
    {
      apotik: 0,
      poliklinik_atau_balai_pengobatan: 0,
      polindes: 0,
      posbindu: 0,
      poskesdes: 0,
      posyandu: 0,
      puskesmas_dengan_rawat_inap: 0,
      puskesmas_pembantu: 0,
      puskesmas_tanpa_rawat_inap: 0,
      rumah_bersalin: 0,
      rumah_sakit: 0,
      rumah_sakit_bersalin: 0,
      tempat_praktik_dokter: 0,
      tempat_praktik_dukun_bayi_atau_bersalin_atau_paraji: 0,
      tempat_praktik_idan: 0,
      toko_khusus_obat_atau_jamu: 0,
    },
  berapa_tahun_bapak_ibu_mengenyam_pendidikan_dasar_sd_smp_sma: "0",
  berapa_usia_saat_pertama_kali_menikah_tahun: "0",
  dalam_setahun_terakhir_apakah_pernah_memperoleh_pelayanan_desa: "",
  dalam_setahun_terakhir_apakah_pernah_menyampaikan_masukan_saran_kepada_pihak_desa:
    "",
  dalam_setahun_terakhir_apakah_terjadi_bencana: "",
  desa: "",
  disabilitas: {
    cacat_eks_sakit_kusta_pernah_sakit_kusta_dan_dinyatakan_sembuh_oleh_dokter:
      "",
    cacat_ganda_cacat_fisik_mental_cacat_fisik_dan_cacat_mental: "",
    dipasung: "",
    tunadaksa_cacat_tubuh_kelumpuhan_kelainan_ketidaklengkapan_anggota_gerak:
      "",
    tunagrahita_cacat_mental_keterbelakangan_mental: "",
    tunalaras_eks_sakit_jiwa_gangguan_mengendalikan_emosi_dan_kontrol_sosial:
      "",
    tunanetra_buta: "",
    tunarungu_tuli: "",
    tunarungu_wicara_tuli_bisu: "",
    tunawicara_bisu: "",
  },
  jaminan_sosial_kesehatan: "",
  jaminan_sosial_ketenagakerjaan: "",
  jenis_kelamin: "",
  kabupaten_kota: "",
  kecamatan: "",
  kecepatan_akses_internet: "",
  kerja_bakti_setahun_terakhir_jumlah: "0",
  kondisi_pekerjaan: "",
  menolong_warga_yang_kecelakaan_setahun_terakhir_jumlah: "0",
  menolong_warga_yang_mengalami_kematian_keluarga_setahun_terakhir_jumlah: "0",
  menolong_warga_yang_sedang_sakit_setahun_terakhir_jumlah: "0",
  nama: "",
  nik: "",
  nomor_hp: "",
  nomor_kartu_keluarga: "",
  nomor_untuk_whatsapp: "",
  pekerjaan_utama: "",
  pekerjaan_utama_lainnya: "",
  pendidikan_tertinggi_yang_ditamatkan: "",
  penghasilan_setahun_terakhir: 0,
  penghasilan_setahun_terakhir_dari: [
    {
      diekspor: "",
      jumlah: 0,
      penghasilan_setahun: 0,
      sumber_penghasilan: "",
    },
  ],
  penyakit_yang_diderita_setahun_terakhir: {
    campak: "",
    covid: "",
    demam_berdarah: "",
    diabetes_kencing_manis_gula: "",
    diekspor: "",
    difteri: "",
    flu_burung_atau_sars: "",
    gizi_buruk_atau_marasmus_dan_kwasiorkor: "",
    hepatitis_b: "",
    hepatitis_e: "",
    jantung: "",
    kanker: "",
    kolera: "",
    lainnya: "",
    leptospirosis: "",
    lumpuh: "",
    malaria: "",
    muntaber_atau_diare: "",
    tbc_paru_paru: "",
  },
  pestarakyat_adat_setahun_terakhir_jumlah: "0",
  provinsi: "",
  rt: "",
  rw: "",
  siskamling_setahun_terakhir_jumlah: "0",
  status_pernikahan: "",
  suku_bangsa: "",
  tanggal_lahir: "",
  tempat_lahir: "",
  usia: 0,
  warganegara: "",
}

export interface ISDGSKuisionerKeluargaDetail {
  alamat: string
  apotik: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  atap: string
  bantuan_lainnya: string
  bantuan_pendidikan_anak: string
  bantuan_presiden: string
  bantuan_sosial_tunai: string
  bantuan_umkm: string
  bantuan_untuk_pekerja: string
  bidan: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  blt_dana_desa: string
  desa: string
  dinding_sebagian_besar_rumah: string
  dokter_spesialis: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  dokter_umum: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  dukun: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  energi_untuk_memasak: 0
  fasilitas_buang_air_besar: string
  fasilitas_mck: string
  jendela: string
  jenis_lantai_tempat_tinggal_terluas: string
  jumlah_anggota_keluarga: string
  jumlah_anggota_keluarga_menggunakan_transportasi_umum_bulan_sebelumnya: string
  jumlah_anggota_keluarga_menggunakan_transportasi_umum_sebulan_terakhir: string
  kabupaten_kota: string
  kecamatan: string
  lahan: string
  lantai: string
  luas_tempat_tinggal: string
  nama: string
  nik: string
  nomor_hp: string
  nomor_kartu_keluarga: string
  nomor_telepon_kabel_rumah: string
  paud: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  pemanfaat_penerima_program_pemerintah: string
  pendidikan_keagamaan_lain: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  penerangan_rumah: string
  perguruan_tinggi: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  pertaniantujuan_lahan_pertanian: {
    biaya: string
    jenis: string
    kemudahan: string
    transport_umum: string
    waktu: string
  }
  pesantren: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  poliklinik: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  polindes: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  poskesdes: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  posyandu: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  program_keluarga_harapan: string
  provinsi: string
  puskesmas: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  puskesmas_pembantu_putsu: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  rata_rata_pengeluaran_satu_keluarga_satu_bulan: string
  rt: string
  rumah_berada_di_sutet: string
  rumah_di_bantaran_sungai: string
  rumah_di_lereng_bukit_gunung: string
  rumah_sakit: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  rumah_sakit_bersalin: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  rw: string
  sd_mi_sederajat: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  secara_keseluruhan_kondisi_rumah: string
  seminari: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  sma_ma_sederajat: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  smp_mts_sederajat: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  status_lahan_tempat_tinggal: string
  sumber_air_mandi_terbanyak: 0
  sumber_air_minum_terbanyak: string
  sumber_kayu_bakar: string
  tempat_pembuangan_limbah_cair: string
  tempat_pembuangan_sampah: 0
  tempat_tinggal_yang_ditempati: string
  tenaga_kesehatan: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  tk_ra: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  toko_obat: {
    jarak: string
    kemudahan: string
    waktu: string
  }
  tujuan_beribadah: {
    biaya: string
    jenis: string
    kemudahan: string
    transport_umum: string
    waktu: string
  }
  tujuan_berobat: {
    biaya: string
    jenis: string
    kemudahan: string
    transport_umum: string
    waktu: string
  }
  tujuan_lokasi_pekerjaan_umum: {
    biaya: string
    jenis: string
    kemudahan: string
    transport_umum: string
    waktu: string
  }
  tujuan_rekreasi_terdekat: {
    biaya: string
    jenis: string
    kemudahan: string
    transport_umum: string
    waktu: string
  }
  tujuan_sekolah: {
    biaya: string
    jenis: string
    kemudahan: string
    transport_umum: string
    waktu: string
  }
}

export const SDGsKuisionerKeluragaField: ISDGSKuisionerKeluargaDetail = {
  alamat: "",
  apotik: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  atap: "",
  bantuan_lainnya: "",
  bantuan_pendidikan_anak: "",
  bantuan_presiden: "",
  bantuan_sosial_tunai: "",
  bantuan_umkm: "",
  bantuan_untuk_pekerja: "",
  bidan: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  blt_dana_desa: "",
  desa: "",
  dinding_sebagian_besar_rumah: "",
  dokter_spesialis: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  dokter_umum: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  dukun: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  energi_untuk_memasak: 0,
  fasilitas_buang_air_besar: "",
  fasilitas_mck: "",
  jendela: "",
  jenis_lantai_tempat_tinggal_terluas: "",
  jumlah_anggota_keluarga: "",
  jumlah_anggota_keluarga_menggunakan_transportasi_umum_bulan_sebelumnya: "",
  jumlah_anggota_keluarga_menggunakan_transportasi_umum_sebulan_terakhir: "",
  kabupaten_kota: "",
  kecamatan: "",
  lahan: "",
  lantai: "",
  luas_tempat_tinggal: "",
  nama: "",
  nik: "",
  nomor_hp: "",
  nomor_kartu_keluarga: "",
  nomor_telepon_kabel_rumah: "",
  paud: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  pemanfaat_penerima_program_pemerintah: "",
  pendidikan_keagamaan_lain: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  penerangan_rumah: "",
  perguruan_tinggi: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  pertaniantujuan_lahan_pertanian: {
    biaya: "",
    jenis: "",
    kemudahan: "",
    transport_umum: "",
    waktu: "",
  },
  pesantren: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  poliklinik: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  polindes: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  poskesdes: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  posyandu: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  program_keluarga_harapan: "",
  provinsi: "",
  puskesmas: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  puskesmas_pembantu_putsu: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  rata_rata_pengeluaran_satu_keluarga_satu_bulan: "",
  rt: "",
  rumah_berada_di_sutet: "",
  rumah_di_bantaran_sungai: "",
  rumah_di_lereng_bukit_gunung: "",
  rumah_sakit: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  rumah_sakit_bersalin: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  rw: "",
  sd_mi_sederajat: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  secara_keseluruhan_kondisi_rumah: "",
  seminari: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  sma_ma_sederajat: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  smp_mts_sederajat: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  status_lahan_tempat_tinggal: "",
  sumber_air_mandi_terbanyak: 0,
  sumber_air_minum_terbanyak: "",
  sumber_kayu_bakar: "",
  tempat_pembuangan_limbah_cair: "",
  tempat_pembuangan_sampah: 0,
  tempat_tinggal_yang_ditempati: "",
  tenaga_kesehatan: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  tk_ra: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  toko_obat: {
    jarak: "",
    kemudahan: "",
    waktu: "",
  },
  tujuan_beribadah: {
    biaya: "",
    jenis: "",
    kemudahan: "",
    transport_umum: "",
    waktu: "",
  },
  tujuan_berobat: {
    biaya: "",
    jenis: "",
    kemudahan: "",
    transport_umum: "",
    waktu: "",
  },
  tujuan_lokasi_pekerjaan_umum: {
    biaya: "",
    jenis: "",
    kemudahan: "",
    transport_umum: "",
    waktu: "",
  },
  tujuan_rekreasi_terdekat: {
    biaya: "",
    jenis: "",
    kemudahan: "",
    transport_umum: "",
    waktu: "",
  },
  tujuan_sekolah: {
    biaya: "",
    jenis: "",
    kemudahan: "",
    transport_umum: "",
    waktu: "",
  },
}

export interface ISDGSKuesionerRukunTetanggaDetail {
  Jumlah_Menara_Base_Transceiver_Station: number
  agen_pengerahan_tki_ke_luar_negeri: {
    jumlah_orang: number
    jumlah_perusahaan: number
  }
  alamat: string
  angin_puyuh_putting_beliung_topan: {
    banyak_kejadian: number
    bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir: string
    korban_jiwa: number
    pengungsi: number
    warga_terdampak: number
  }
  banjir: {
    banyak_kejadian_banjir: number
    bencana_banjir_setahun_terakhir: string
    korban_jiwa_banjir: number
    pengungsi_banjir: number
    warga_terdampak_banjir: number
  }
  banjir_bandang: {
    banyak_kejadian_banjir_bandang: number
    bencana_banjir_bandang_setahun_terakhir: string
    korban_jiwa_banjir_bandang: number
    pengungsi_banjir_bandang: number
    warga_terdampak_banjir_bandang: number
  }
  bendahara_rt: {
    menjabat_bendahara_rt_sejak_tahun: string
    nama_bendahara_rt: string
    nik_bendahara_rt: string
    no_hp: string
  }
  bendahara_rw: {
    menjabat_bendahara_rw_sejak_tahun: string
    nama_bendahara_rw: string
    nik_bendahara_rw: string
    no_hp: string
  }
  campak: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_campak: string
  }
  chikungunya: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_chikungunya: string
  }
  covid_19: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_covid_19: string
  }
  danau_waduk_situ_bendungan_digunakan: string
  demam_berdarah: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_demam_berdarah: string
  }
  dermaga_laut_sungai: string
  desa: string
  difteri: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_difteri: string
  }
  embung_digunakan: string
  flu_burung_sars: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_flu_burung_sars: string
  }
  fungsi_hutan: {
    hutan_desa: number
    konservasi: number
    lindung: number
    produksi: number
  }
  gelombang_pasang_laut: {
    banyak_kejadian_gelombang_pasang_laut: number
    bencana_gelombang_pasang_laut_setahun_terakhir: string
    korban_jiwa_gelombang_pasang_laut: number
    pengungsi_gelombang_pasang_laut: number
    warga_terdampak_gelombang_pasang_laut: number
  }
  gempa_bumi: {
    banyak_kejadian_gempa_bumi: number
    bencana_gempa_bumi_setahun_terakhir: string
    korban_jiwa_gempa_bumi: number
    pengungsi_gempa_bumi: number
    warga_terdampak_gempa_bumi: number
  }
  gizi_buruk_marasmus_dan_kwasiorkor: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_gizi_buruk_marasmus_dan_kwasiorkor: string
  }
  gunung_meletus: {
    banyak_kejadian_gunung_meletus: number
    bencana_gunung_meletus_setahun_terakhir: string
    korban_jiwa_gunung_meletus: number
    pengungsi_gunung_meletus: number
    warga_terdampak_gunung_meletus: number
  }
  hepatitis_b: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_hepatitis_b: string
  }
  hepatitis_e: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_hepatitis_e: string
  }
  industri_menurut_bahan_baku_utama: [
    {
      jenis_industri: string
      jumlah_industri_kecil_dan_rumah_tangga: number
      jumlah_industri_sedang_dan_besar: number
      jumlah_manajemen: number
      jumlah_pekerja: number
    },
  ]
  jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih: string
  jam_operasi_angkutan_umum: string
  jarak_pub_diskotik_tempat_karaoke_terdekat: number
  jenis_penggunaan_danau_waduk_situ_bendungan: [string]
  jenis_penggunaan_embung: [string]
  jenis_penggunaan_saluran_irigasi: [string]
  jenis_penggunaan_sungai: [string]
  jumlah_embung: number
  jumlah_fasilitas_umum_fasilitas_sosial_yang_ditinggali_penduduk: {
    kolong_jembatan: number
    pasar: number
    pelabuhan: number
    stasiun: number
    terminal: number
  }
  jumlah_lokasi_permukiman_khusus: {
    apartemen: number
    asrama_barak_militer: number
    kos_kosan: number
    lp_rutan: number
    permukiman_perumahan_mewah: number
    rumah_susun: number
    sekolah_berasrama: number
  }
  jumlah_lokasi_permukiman_liar: string
  jumlah_mata_air: number
  jumlah_penduduk_luar_desa_yang_masuk_dan_menetap_di_desa_selama_setahun_terakhir: string
  jumlah_penduduk_yang_keluar_dari_desa_selama_setahun_terakhir: string
  jumlah_warga_di_lereng_puncak: number
  jumlah_warga_di_wilayah_pesisir: number
  jumlah_warga_yang_tinggal_di_atas_air: number
  jumlah_warga_yang_tinggal_di_dalam_hutan: string
  jumlah_warga_yang_tinggal_di_sekitar_hutan: string
  kabupaten_kota: string
  kantor_pos_pos_pembantu_rumah_pos: string
  kebakaran_hutan_lahan: {
    banyak_kejadian_kebakaran_hutan_lahan: number
    bencana_kebakaran_hutan_lahan_setahun_terakhir: string
    korban_jiwa_kebakaran_hutan_lahan: number
    pengungsi_kebakaran_hutan_lahan: number
    warga_terdampak_kebakaran_hutan_lahan: number
  }
  keberadaan_koperasi: {
    jumlah_koperasi_industri_kecil_dan_kerajinan_rakyat_usaha_mikro: number
    jumlah_koperasi_lainnya: number
    jumlah_koperasi_serba_usaha: number
    jumlah_koperasi_simpan_pinjam: number
    jumlah_kud: number
    jumlah_kud_yang_melakukan_kegiatan_lainnya: number
    jumlah_kud_yang_membeli_menjual_hasil_produksi_pertanian: number
    jumlah_kud_yang_menyediakan_kredit_usaha: number
  }
  keberadaan_lembaga_keagamaan: [
    {
      fasilitas: string
      jumlah_anggota: number
      jumlah_pengurus: number
      nama_lembaga_keagamaan: string
    },
  ]
  keberadaan_lembaga_kemasyarakatan_desa: [
    {
      fasilitas: string
      jumlah_anggota: number
      jumlah_kelompok_lembaga: number
      jumlah_pengurus: number
      nama_lembaga_kemasyarakatan_desa: string
    },
  ]
  keberadaan_pangkalan_agen_penjual_lpg: string
  keberadaan_pangkalan_agen_penjual_minyak_tanah: string
  keberadaan_pub_diskotik_tempat_karaoke: string
  keberadaan_sarana_kesehatan: [
    {
      jumlah_bidan: number
      jumlah_dokter: number
      jumlah_pegawai_lain: number
      jumlah_tenaga_kesehatan: number
      kondisi_bangunan: string
      nama_sarana_kesehatan: string
      pemilik: string
      sarana_kesehatan: string
    },
  ]
  keberadaan_sarana_pendidikan: [
    {
      jenjang_pendidikan: string
      jumlah_guru: number
      jumlah_murid: number
      jumlah_pegawai: number
      kondisi_bangunan: string
      nama_sarana_pendidikan: string
      pemilik: string
    },
  ]
  keberadaan_sumber_limbah_dari_pabrik_industry_usaha: string
  keberadaan_sumber_limbah_dari_rumah_tangga: string
  keberadaan_sumber_limbah_lainnya: string
  keberadaan_trayek_angkutan_umum: string
  kecamatan: string
  kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir: {
    jumlah_anggota_hansip_limnas_yang_ditambahkan: number
    jumlah_anggota_limnas_hansip: number
    jumlah_kegiatan_pembangunan_pemeliharaan_pos_keamanan_lingkungan: number
    jumlah_kegiatan_pembentukan_pengaturan_regu_keamanan: number
    jumlah_korban_bunuh_diri_termasuk_percobaan_bunuh_diri_yang_terjadi_selama_setahun_terakhir: string
    jumlah_lokalisasi_lokasi_tempat_mangkal_pekerja_seks_komersial: number
    jumlah_lokasi_berkumpul_mangkal_anak_jalanan_selain_rumah_singgah: string
    jumlah_pos_polisi: {
      yang_Digunakan: string
      yang_Tidak_Digunakan: string
    }
    jumlah_tempat_mangkal_gelandangan_pengemis: string
    kemudahan_untuk_mencapai_pos_polisi_terdekat: string
    pelaporan_tamu_yang_menginap_lebih_dari_24_jam_ke_aparat_lingkungan: string
    pengaktifan_sistem_keamanan_lingkungan_berasal_dari_inisiatif_warga: string
    perkiraan_jarak_ke_pos_polisi_terdekat: string
  }
  kejadian_perkelahian_massal_setahun_terakhir: [
    {
      jenis_perkelahian_massal: string
      jumlah_kejadian: number
      korban_luka_luka: number
      korban_tewas: number
      penyebab_utama: string
      penyelesaian: string
      pihak_pendamai_utama: string
    },
  ]
  kekeringan_lahan: {
    banyak_kejadian_kekeringan_lahan_jumlah: number
    bencana_kekeringan_lahan_setahun_terakhir: string
    korban_jiwa_kekeringan_lahan_jiwa: number
    pengungsi_kekeringan_lahan_jiwa: number
    warga_terdampak_kekeringan_lahan_jiwa: number
  }
  kelompok_usaha_bersama: string
  ketergantungan_warga_terhadap_hutan: string
  ketersediaan_sumur_bor_sawah_dan_pompa_air_untuk_lahan_pertanian: string
  ketua_rt: {
    menjabat_ketua_rt_sejak_tahun: string
    nama_ketua_rt: string
    nik_ketua_rt: string
    no_hp: string
  }
  ketua_rw: {
    menjabat_ketua_rw_sejak_tahun: string
    nama_ketua_rw: string
    nik_ketua_rw: string
    no_hp: string
  }
  kios_sarana_produksi_petani_nelayan: {
    milik_bumdes: number
    milik_kud: number
    milik_selain_kud_dan_bumdes: number
  }
  kolera: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_kolera: string
  }
  kondisi_danau_waduk_situ_bendungan: string
  kondisi_embung: string
  kondisi_mangrove: string
  kondisi_saluran_irigasi: string
  kondisi_sungai: string
  kredit_ketahanan_pangan_dan_enegi: string
  kredit_usaha_kecil: string
  kredit_usaha_rakyat: string
  layanan_pos_keliling: string
  leptospirosis: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_chikungunya: string
  }
  lokasi_rt_terletak_di_pulau: string
  luas_lahan_menurut_jenis_penggunaan_lahan: {
    areal_hutan: number
    fasilitas_umum: number
    huma_ladang: number
    kebun: number
    kolam_tebat_empang: number
    lahan_gembala_ternak: number
    lahan_industri: number
    lahan_lainnya: number
    lahan_perkantoran: number
    lahan_pertambangan: number
    lahan_pertanian_non_sawah_lainnya: number
    lahan_pertokoan: number
    lahan_perumahan: number
    lahan_perusahaan_perkebunan: number
    lahan_sawah_irigasi: number
    lahan_sawah_non_irigasi: number
    tambak: number
  }
  malaria: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_malaria: string
  }
  mitigasi_bencana: {
    pembuatan_perawatan_normalisasi: string
    perlengkapan_keselamatan: string
    rambu_rambu_dan_jalur_evakuasi_bencana: string
    sistem_peringatan_dini_bencana_alam: string
    sistem_peringatan_dini_khusus_tsunami: string
  }
  muntaber_diare: {
    jumlah_meninggal: number
    jumlah_penderita: number
    kejadian_muntaber_diare: string
  }
  nama_danau_waduk_situ: {
    danau_1: string
    danau_2: string
    danau_3: string
  }
  nama_ketua_rt: string
  nama_sungai_yang_melintasi: {
    sungai_1: string
    sungai_2: string
    sungai_3: string
  }
  nomor_hp: string
  operasional_angkutan_umum: string
  panjang_garis_pantai: number
  panjang_jalan: {
    jalan_aspal: number
    jalan_diperkeras: number
    jalan_lainnya: number
    jalan_papan_di_atas_air: number
    jalan_setapak: number
    jalan_tanah: number
  }
  pemanfaatan_embung: {
    jumlah_petani_yang_memanfaatkan_embung: number
    total_lahan_yang_memperoleh_manfaat_embung: number
  }
  pemanfaatan_laut_perikanan_budidaya: string
  pemanfaatan_laut_perikanan_tangkap: string
  pemanfaatan_laut_tambak_garam: string
  pemanfaatan_laut_transportasi_umum: string
  pemanfaatan_laut_wisata_bahari: string
  pemanfaatan_sumur_bor: {
    jumlah_petani_yang_memanfaatkan_sumur_bor: number
    total_lahan_yang_memanfaatkan_sumur_bor_dan_pompa_air: number
  }
  penanaman_mangrove: string
  penanaman_pemeliharaan_pepohonan_di_lahan_kritis: string
  pencemaran_air_setahun_terakhir: {
    lokasi_limbah: string
    pencemaran_air: string
    pengaduan_warga: string
    sumber_pencemaran: [string]
  }
  pencemaran_tanah_setahun_terakhir: {
    lokasi_limbah: string
    pencemaran_tanah: string
    pengaduan_warga: string
    sumber_pencemaran: [string]
  }
  pencemaran_udara_setahun_terakhir: {
    keberadaan_lokasi_penggalian_golongan_c: string
    kebiasaan_masyarakat_membakar_ladang_kebun_di_desa_kelurahan_untuk_proses_usaha_pertanian: string
    lokasi_limbah: string
    pencemaran_tanah: string
    pengaduan_warga: string
    pengolahan_daur_ulang_sampah_limbah: string
    sumber_pencemaran: [string]
  }
  penerangan_di_jalan_utama: string
  penyakit_lainnya: {
    jumlah_meninggal: number
    jumlah_penderita: number
    jumlah_warga_peserta_jaminan_sosial_kesehatan: number
    jumlah_warga_peserta_jaminan_sosial_ketenagakerjaan: number
    kejadian_penyakit_lain: string
    nama_penyakit: string
  }
  perpustakaan_atau_taman_bacaan: string
  perusahaan_agen_jasa_ekspedisi_dokumen_swasta: string
  prasarana_transportasi_antar_rt: string
  program_siaran_tv_radio_yang_diterima: {
    radio_komunitas: {
      dapat_diterima: string
      perlu_parabola: string
    }
    radio_swasta: {
      dapat_diterima: string
      perlu_parabola: string
    }
    rr: {
      dapat_diterima: string
      perlu_parabola: string
    }
    rri_daerah: {
      dapat_diterima: string
      perlu_parabola: string
    }
    tv_luar_negeri: {
      dapat_diterima: string
      perlu_parabola: string
    }
    tv_swasta: {
      dapat_diterima: string
      perlu_parabola: string
    }
    tvri: {
      dapat_diterima: string
      perlu_parabola: string
    }
    tvri_daerah: {
      dapat_diterima: string
      perlu_parabola: string
    }
  }
  provinsi: string
  reboisasi_hutan: string
  rt: string
  rw: string
  saluran_irigasi_digunakan: string
  sarana_ekonomi_yang_tersedia: [
    {
      jenis_industri: string
      jumlah: number
      kemudahan_untuk_mencapai: string
      kondisi: string
    },
  ]
  sekertaris_rt: {
    menjabat_sekretaris_rt_sejak_tahun: string
    nama_sekretaris_rt: string
    nik_sekretaris_rt: string
    no_hp: string
  }
  sekertaris_rw: {
    menjabat_sekretaris_rw_sejak_tahun: string
    nama_sekretaris_rw: string
    nik_sekretaris_rw: string
    no_hp: string
  }
  sinyal_operator: {
    bakrie_telecom_internet: string
    bakrie_telecom_operator: string
    hutchison_3_internet: string
    hutchison_3_operator: string
    indosat_internet: string
    indosat_operator: string
    psn_byru_internet: string
    psn_byru_operator: string
    smartfren_internet: string
    smartfren_operator: string
    telkomsel_internet: string
    telkomsel_operator: string
    xl_axis_internet: string
    xl_axis_operator: string
  }
  situs_cagar_budaya: {
    alam_lingkungan_hidup: string
    keberadaan_suku_terasing: string
    kehamilan: string
    kehidupan_warga: string
    kelahiran: string
    kematian: string
    nama_kearifan_lokal_adat: string
    pekerjaan_pencaharian: string
    perkawinan: string
    perkiraan_jumlah_jiwa: string
    perkiraan_jumlah_keluarga: string
    ruang_publik_terbuka_yang_peruntukan_utamanya_sebagai_tempat_bagi_warga_desa_kelurahan_untuk_bersantai_bermain_tanpa_perlu_membayar: string
    situs_cagar_budaya_1: string
    situs_cagar_budaya_2: string
    situs_cagar_budaya_3: string
  }
  sumber_limbah_berlokasi_di: string
  sungai_digunakan: string
  tanah_longsor: {
    banyak_kejadian_tanah_longsor: number
    bencana_tanah_longsor_setahun_terakhir: string
    korban_jiwa_tanah_longsor: number
    pengungsi_banjir: number
    warga_terdampak_tanah_longsor: number
  }
  tata_ruang_industri: {
    jumlah_lingkungan_industri_kecil: number
    jumlah_perkampungan_industri_kecil: number
    jumlah_sentra_industri: number
  }
  tempat_ibadah: {
    gereja_katolik: number
    gereja_kristen: number
    kapel: number
    kelenteng: number
    lainnya: string
    masjid: number
    musala_surau_langgar: number
    pura: number
    wihara: number
  }
  tindak_kejahatan_yang_terjadi_selama_setahun_terakhir: [
    {
      jenis_kejahatan: string
      jumlah_kasus: number
      jumlah_kasus_selesai_ditangani: number
      jumlah_kasus_tidak_bisa_ditangani: number
      korban_luka_luka: number
      korban_tewas: number
    },
  ]
  topografi_terluas_wilayah_rt: string
  tsunami: {
    banyak_kejadian_tsunami: number
    bencana_tsunami_setahun_terakhir: string
    korban_jiwa_tsunami: number
    pengungsi_tsunami: number
    warga_terdampak_tsunami: number
  }
  wilayah_desa_di_dalam_hutan: number
  wilayah_desa_di_tepi_hutan: number
}

export const SDGSKuesionerRukunTetanggaField: ISDGSKuesionerRukunTetanggaDetail =
  {
    Jumlah_Menara_Base_Transceiver_Station: 0,
    agen_pengerahan_tki_ke_luar_negeri: {
      jumlah_orang: 0,
      jumlah_perusahaan: 0,
    },
    alamat: "",
    angin_puyuh_putting_beliung_topan: {
      banyak_kejadian: 0,
      bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir: "",
      korban_jiwa: 0,
      pengungsi: 0,
      warga_terdampak: 0,
    },
    banjir: {
      banyak_kejadian_banjir: 0,
      bencana_banjir_setahun_terakhir: "",
      korban_jiwa_banjir: 0,
      pengungsi_banjir: 0,
      warga_terdampak_banjir: 0,
    },
    banjir_bandang: {
      banyak_kejadian_banjir_bandang: 0,
      bencana_banjir_bandang_setahun_terakhir: "",
      korban_jiwa_banjir_bandang: 0,
      pengungsi_banjir_bandang: 0,
      warga_terdampak_banjir_bandang: 0,
    },
    bendahara_rt: {
      menjabat_bendahara_rt_sejak_tahun: "",
      nama_bendahara_rt: "",
      nik_bendahara_rt: "",
      no_hp: "",
    },
    bendahara_rw: {
      menjabat_bendahara_rw_sejak_tahun: "",
      nama_bendahara_rw: "",
      nik_bendahara_rw: "",
      no_hp: "",
    },
    campak: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_campak: "",
    },
    chikungunya: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_chikungunya: "",
    },
    covid_19: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_covid_19: "",
    },
    danau_waduk_situ_bendungan_digunakan: "",
    demam_berdarah: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_demam_berdarah: "",
    },
    dermaga_laut_sungai: "",
    desa: "",
    difteri: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_difteri: "",
    },
    embung_digunakan: "",
    flu_burung_sars: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_flu_burung_sars: "",
    },
    fungsi_hutan: {
      hutan_desa: 0,
      konservasi: 0,
      lindung: 0,
      produksi: 0,
    },
    gelombang_pasang_laut: {
      banyak_kejadian_gelombang_pasang_laut: 0,
      bencana_gelombang_pasang_laut_setahun_terakhir: "",
      korban_jiwa_gelombang_pasang_laut: 0,
      pengungsi_gelombang_pasang_laut: 0,
      warga_terdampak_gelombang_pasang_laut: 0,
    },
    gempa_bumi: {
      banyak_kejadian_gempa_bumi: 0,
      bencana_gempa_bumi_setahun_terakhir: "",
      korban_jiwa_gempa_bumi: 0,
      pengungsi_gempa_bumi: 0,
      warga_terdampak_gempa_bumi: 0,
    },
    gizi_buruk_marasmus_dan_kwasiorkor: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_gizi_buruk_marasmus_dan_kwasiorkor: "",
    },
    gunung_meletus: {
      banyak_kejadian_gunung_meletus: 0,
      bencana_gunung_meletus_setahun_terakhir: "",
      korban_jiwa_gunung_meletus: 0,
      pengungsi_gunung_meletus: 0,
      warga_terdampak_gunung_meletus: 0,
    },
    hepatitis_b: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_hepatitis_b: "",
    },
    hepatitis_e: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_hepatitis_e: "",
    },
    industri_menurut_bahan_baku_utama: [
      {
        jenis_industri: "",
        jumlah_industri_kecil_dan_rumah_tangga: 0,
        jumlah_industri_sedang_dan_besar: 0,
        jumlah_manajemen: 0,
        jumlah_pekerja: 0,
      },
    ],
    jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih: "",
    jam_operasi_angkutan_umum: "",
    jarak_pub_diskotik_tempat_karaoke_terdekat: 0,
    jenis_penggunaan_danau_waduk_situ_bendungan: [""],
    jenis_penggunaan_embung: [""],
    jenis_penggunaan_saluran_irigasi: [""],
    jenis_penggunaan_sungai: [""],
    jumlah_embung: 0,
    jumlah_fasilitas_umum_fasilitas_sosial_yang_ditinggali_penduduk: {
      kolong_jembatan: 0,
      pasar: 0,
      pelabuhan: 0,
      stasiun: 0,
      terminal: 0,
    },
    jumlah_lokasi_permukiman_khusus: {
      apartemen: 0,
      asrama_barak_militer: 0,
      kos_kosan: 0,
      lp_rutan: 0,
      permukiman_perumahan_mewah: 0,
      rumah_susun: 0,
      sekolah_berasrama: 0,
    },
    jumlah_lokasi_permukiman_liar: "",
    jumlah_mata_air: 0,
    jumlah_penduduk_luar_desa_yang_masuk_dan_menetap_di_desa_selama_setahun_terakhir:
      "",
    jumlah_penduduk_yang_keluar_dari_desa_selama_setahun_terakhir: "",
    jumlah_warga_di_lereng_puncak: 0,
    jumlah_warga_di_wilayah_pesisir: 0,
    jumlah_warga_yang_tinggal_di_atas_air: 0,
    jumlah_warga_yang_tinggal_di_dalam_hutan: "",
    jumlah_warga_yang_tinggal_di_sekitar_hutan: "",
    kabupaten_kota: "",
    kantor_pos_pos_pembantu_rumah_pos: "",
    kebakaran_hutan_lahan: {
      banyak_kejadian_kebakaran_hutan_lahan: 0,
      bencana_kebakaran_hutan_lahan_setahun_terakhir: "",
      korban_jiwa_kebakaran_hutan_lahan: 0,
      pengungsi_kebakaran_hutan_lahan: 0,
      warga_terdampak_kebakaran_hutan_lahan: 0,
    },
    keberadaan_koperasi: {
      jumlah_koperasi_industri_kecil_dan_kerajinan_rakyat_usaha_mikro: 0,
      jumlah_koperasi_lainnya: 0,
      jumlah_koperasi_serba_usaha: 0,
      jumlah_koperasi_simpan_pinjam: 0,
      jumlah_kud: 0,
      jumlah_kud_yang_melakukan_kegiatan_lainnya: 0,
      jumlah_kud_yang_membeli_menjual_hasil_produksi_pertanian: 0,
      jumlah_kud_yang_menyediakan_kredit_usaha: 0,
    },
    keberadaan_lembaga_keagamaan: [
      {
        fasilitas: "",
        jumlah_anggota: 0,
        jumlah_pengurus: 0,
        nama_lembaga_keagamaan: "",
      },
    ],
    keberadaan_lembaga_kemasyarakatan_desa: [
      {
        fasilitas: "",
        jumlah_anggota: 0,
        jumlah_kelompok_lembaga: 0,
        jumlah_pengurus: 0,
        nama_lembaga_kemasyarakatan_desa: "",
      },
    ],
    keberadaan_pangkalan_agen_penjual_lpg: "",
    keberadaan_pangkalan_agen_penjual_minyak_tanah: "",
    keberadaan_pub_diskotik_tempat_karaoke: "",
    keberadaan_sarana_kesehatan: [
      {
        jumlah_bidan: 0,
        jumlah_dokter: 0,
        jumlah_pegawai_lain: 0,
        jumlah_tenaga_kesehatan: 0,
        kondisi_bangunan: "",
        nama_sarana_kesehatan: "",
        pemilik: "",
        sarana_kesehatan: "",
      },
    ],
    keberadaan_sarana_pendidikan: [
      {
        jenjang_pendidikan: "",
        jumlah_guru: 0,
        jumlah_murid: 0,
        jumlah_pegawai: 0,
        kondisi_bangunan: "",
        nama_sarana_pendidikan: "",
        pemilik: "",
      },
    ],
    keberadaan_sumber_limbah_dari_pabrik_industry_usaha: "",
    keberadaan_sumber_limbah_dari_rumah_tangga: "",
    keberadaan_sumber_limbah_lainnya: "",
    keberadaan_trayek_angkutan_umum: "",
    kecamatan: "",
    kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir: {
      jumlah_anggota_hansip_limnas_yang_ditambahkan: 0,
      jumlah_anggota_limnas_hansip: 0,
      jumlah_kegiatan_pembangunan_pemeliharaan_pos_keamanan_lingkungan: 0,
      jumlah_kegiatan_pembentukan_pengaturan_regu_keamanan: 0,
      jumlah_korban_bunuh_diri_termasuk_percobaan_bunuh_diri_yang_terjadi_selama_setahun_terakhir:
        "",
      jumlah_lokalisasi_lokasi_tempat_mangkal_pekerja_seks_komersial: 0,
      jumlah_lokasi_berkumpul_mangkal_anak_jalanan_selain_rumah_singgah: "",
      jumlah_pos_polisi: {
        yang_Digunakan: "",
        yang_Tidak_Digunakan: "",
      },
      jumlah_tempat_mangkal_gelandangan_pengemis: "",
      kemudahan_untuk_mencapai_pos_polisi_terdekat: "",
      pelaporan_tamu_yang_menginap_lebih_dari_24_jam_ke_aparat_lingkungan: "",
      pengaktifan_sistem_keamanan_lingkungan_berasal_dari_inisiatif_warga: "",
      perkiraan_jarak_ke_pos_polisi_terdekat: "",
    },
    kejadian_perkelahian_massal_setahun_terakhir: [
      {
        jenis_perkelahian_massal: "",
        jumlah_kejadian: 0,
        korban_luka_luka: 0,
        korban_tewas: 0,
        penyebab_utama: "",
        penyelesaian: "",
        pihak_pendamai_utama: "",
      },
    ],
    kekeringan_lahan: {
      banyak_kejadian_kekeringan_lahan_jumlah: 0,
      bencana_kekeringan_lahan_setahun_terakhir: "",
      korban_jiwa_kekeringan_lahan_jiwa: 0,
      pengungsi_kekeringan_lahan_jiwa: 0,
      warga_terdampak_kekeringan_lahan_jiwa: 0,
    },
    kelompok_usaha_bersama: "",
    ketergantungan_warga_terhadap_hutan: "",
    ketersediaan_sumur_bor_sawah_dan_pompa_air_untuk_lahan_pertanian: "",
    ketua_rt: {
      menjabat_ketua_rt_sejak_tahun: "",
      nama_ketua_rt: "",
      nik_ketua_rt: "",
      no_hp: "",
    },
    ketua_rw: {
      menjabat_ketua_rw_sejak_tahun: "",
      nama_ketua_rw: "",
      nik_ketua_rw: "",
      no_hp: "",
    },
    kios_sarana_produksi_petani_nelayan: {
      milik_bumdes: 0,
      milik_kud: 0,
      milik_selain_kud_dan_bumdes: 0,
    },
    kolera: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_kolera: "",
    },
    kondisi_danau_waduk_situ_bendungan: "",
    kondisi_embung: "",
    kondisi_mangrove: "",
    kondisi_saluran_irigasi: "",
    kondisi_sungai: "",
    kredit_ketahanan_pangan_dan_enegi: "",
    kredit_usaha_kecil: "",
    kredit_usaha_rakyat: "",
    layanan_pos_keliling: "",
    leptospirosis: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_chikungunya: "",
    },
    lokasi_rt_terletak_di_pulau: "",
    luas_lahan_menurut_jenis_penggunaan_lahan: {
      areal_hutan: 0,
      fasilitas_umum: 0,
      huma_ladang: 0,
      kebun: 0,
      kolam_tebat_empang: 0,
      lahan_gembala_ternak: 0,
      lahan_industri: 0,
      lahan_lainnya: 0,
      lahan_perkantoran: 0,
      lahan_pertambangan: 0,
      lahan_pertanian_non_sawah_lainnya: 0,
      lahan_pertokoan: 0,
      lahan_perumahan: 0,
      lahan_perusahaan_perkebunan: 0,
      lahan_sawah_irigasi: 0,
      lahan_sawah_non_irigasi: 0,
      tambak: 0,
    },
    malaria: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_malaria: "",
    },
    mitigasi_bencana: {
      pembuatan_perawatan_normalisasi: "",
      perlengkapan_keselamatan: "",
      rambu_rambu_dan_jalur_evakuasi_bencana: "",
      sistem_peringatan_dini_bencana_alam: "",
      sistem_peringatan_dini_khusus_tsunami: "",
    },
    muntaber_diare: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      kejadian_muntaber_diare: "",
    },
    nama_danau_waduk_situ: {
      danau_1: "",
      danau_2: "",
      danau_3: "",
    },
    nama_ketua_rt: "",
    nama_sungai_yang_melintasi: {
      sungai_1: "",
      sungai_2: "",
      sungai_3: "",
    },
    nomor_hp: "",
    operasional_angkutan_umum: "",
    panjang_garis_pantai: 0,
    panjang_jalan: {
      jalan_aspal: 0,
      jalan_diperkeras: 0,
      jalan_lainnya: 0,
      jalan_papan_di_atas_air: 0,
      jalan_setapak: 0,
      jalan_tanah: 0,
    },
    pemanfaatan_embung: {
      jumlah_petani_yang_memanfaatkan_embung: 0,
      total_lahan_yang_memperoleh_manfaat_embung: 0,
    },
    pemanfaatan_laut_perikanan_budidaya: "",
    pemanfaatan_laut_perikanan_tangkap: "",
    pemanfaatan_laut_tambak_garam: "",
    pemanfaatan_laut_transportasi_umum: "",
    pemanfaatan_laut_wisata_bahari: "",
    pemanfaatan_sumur_bor: {
      jumlah_petani_yang_memanfaatkan_sumur_bor: 0,
      total_lahan_yang_memanfaatkan_sumur_bor_dan_pompa_air: 0,
    },
    penanaman_mangrove: "",
    penanaman_pemeliharaan_pepohonan_di_lahan_kritis: "",
    pencemaran_air_setahun_terakhir: {
      lokasi_limbah: "",
      pencemaran_air: "",
      pengaduan_warga: "",
      sumber_pencemaran: [""],
    },
    pencemaran_tanah_setahun_terakhir: {
      lokasi_limbah: "",
      pencemaran_tanah: "",
      pengaduan_warga: "",
      sumber_pencemaran: [""],
    },
    pencemaran_udara_setahun_terakhir: {
      keberadaan_lokasi_penggalian_golongan_c: "",
      kebiasaan_masyarakat_membakar_ladang_kebun_di_desa_kelurahan_untuk_proses_usaha_pertanian:
        "",
      lokasi_limbah: "",
      pencemaran_tanah: "",
      pengaduan_warga: "",
      pengolahan_daur_ulang_sampah_limbah: "",
      sumber_pencemaran: [""],
    },
    penerangan_di_jalan_utama: "",
    penyakit_lainnya: {
      jumlah_meninggal: 0,
      jumlah_penderita: 0,
      jumlah_warga_peserta_jaminan_sosial_kesehatan: 0,
      jumlah_warga_peserta_jaminan_sosial_ketenagakerjaan: 0,
      kejadian_penyakit_lain: "",
      nama_penyakit: "",
    },
    perpustakaan_atau_taman_bacaan: "",
    perusahaan_agen_jasa_ekspedisi_dokumen_swasta: "",
    prasarana_transportasi_antar_rt: "",
    program_siaran_tv_radio_yang_diterima: {
      radio_komunitas: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
      radio_swasta: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
      rr: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
      rri_daerah: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
      tv_luar_negeri: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
      tv_swasta: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
      tvri: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
      tvri_daerah: {
        dapat_diterima: "",
        perlu_parabola: "",
      },
    },
    provinsi: "",
    reboisasi_hutan: "",
    rt: "",
    rw: "",
    saluran_irigasi_digunakan: "",
    sarana_ekonomi_yang_tersedia: [
      {
        jenis_industri: "",
        jumlah: 0,
        kemudahan_untuk_mencapai: "",
        kondisi: "",
      },
    ],
    sekertaris_rt: {
      menjabat_sekretaris_rt_sejak_tahun: "",
      nama_sekretaris_rt: "",
      nik_sekretaris_rt: "",
      no_hp: "",
    },
    sekertaris_rw: {
      menjabat_sekretaris_rw_sejak_tahun: "",
      nama_sekretaris_rw: "",
      nik_sekretaris_rw: "",
      no_hp: "",
    },
    sinyal_operator: {
      bakrie_telecom_internet: "",
      bakrie_telecom_operator: "",
      hutchison_3_internet: "",
      hutchison_3_operator: "",
      indosat_internet: "",
      indosat_operator: "",
      psn_byru_internet: "",
      psn_byru_operator: "",
      smartfren_internet: "",
      smartfren_operator: "",
      telkomsel_internet: "",
      telkomsel_operator: "",
      xl_axis_internet: "",
      xl_axis_operator: "",
    },
    situs_cagar_budaya: {
      alam_lingkungan_hidup: "",
      keberadaan_suku_terasing: "",
      kehamilan: "",
      kehidupan_warga: "",
      kelahiran: "",
      kematian: "",
      nama_kearifan_lokal_adat: "",
      pekerjaan_pencaharian: "",
      perkawinan: "",
      perkiraan_jumlah_jiwa: "",
      perkiraan_jumlah_keluarga: "",
      ruang_publik_terbuka_yang_peruntukan_utamanya_sebagai_tempat_bagi_warga_desa_kelurahan_untuk_bersantai_bermain_tanpa_perlu_membayar:
        "",
      situs_cagar_budaya_1: "",
      situs_cagar_budaya_2: "",
      situs_cagar_budaya_3: "",
    },
    sumber_limbah_berlokasi_di: "",
    sungai_digunakan: "",
    tanah_longsor: {
      banyak_kejadian_tanah_longsor: 0,
      bencana_tanah_longsor_setahun_terakhir: "",
      korban_jiwa_tanah_longsor: 0,
      pengungsi_banjir: 0,
      warga_terdampak_tanah_longsor: 0,
    },
    tata_ruang_industri: {
      jumlah_lingkungan_industri_kecil: 0,
      jumlah_perkampungan_industri_kecil: 0,
      jumlah_sentra_industri: 0,
    },
    tempat_ibadah: {
      gereja_katolik: 0,
      gereja_kristen: 0,
      kapel: 0,
      kelenteng: 0,
      lainnya: "",
      masjid: 0,
      musala_surau_langgar: 0,
      pura: 0,
      wihara: 0,
    },
    tindak_kejahatan_yang_terjadi_selama_setahun_terakhir: [
      {
        jenis_kejahatan: "",
        jumlah_kasus: 0,
        jumlah_kasus_selesai_ditangani: 0,
        jumlah_kasus_tidak_bisa_ditangani: 0,
        korban_luka_luka: 0,
        korban_tewas: 0,
      },
    ],
    topografi_terluas_wilayah_rt: "",
    tsunami: {
      banyak_kejadian_tsunami: 0,
      bencana_tsunami_setahun_terakhir: "",
      korban_jiwa_tsunami: 0,
      pengungsi_tsunami: 0,
      warga_terdampak_tsunami: 0,
    },
    wilayah_desa_di_dalam_hutan: 0,
    wilayah_desa_di_tepi_hutan: 0,
  }

export interface ISDGSKuesionerDesaDetail {
  anggaran_pembelanjaan_desa_tahun_sebelumnya: {
    anggaran_pengeluaran: number
    belanja_modal: number
    bidang_pelaksanaan_pembangunan_desa: number
    bidang_pemberdayaan_masyarakat: number
    bidang_pembinaan_masyarakat: number
    bidang_penyelenggaraan_pemerintahan_desa: number
    lainnya: number
    penyertaan_modal_ke_bumdes: number
  }
  anggaran_pendapatan_desa_tahun_sebelumnya: {
    alokasi_dana_desa: number
    anggaran_pendapatan: number
    bagian_dari_pajak_dan_retribusi_daerah: number
    bantuan_keuangan_dari_apbd_kabupaten_kota: number
    bantuan_keuangan_dari_apbd_provinsi: number
    dana_desa_dari_apbn: number
    hibah_dan_sumbangan_pihak_ketiga: number
    lain_pendapatan_desa_yang_sah: number
    pendapatan_asli_desa: number
  }
  apakah_data_sdgs_desa_sudah_digunakan_untuk_rkpdes_dan_apbdes_setahun_terakhir: string
  badan_usaha_milik_desa: {
    email: string
    facebook: string
    instagram: string
    nama_bumdes: string
    twitter: string
    web_desa: string
    youtube: string
  }
  desa: string
  email_desa: string
  facebook: string
  fasilitas_internet: string
  foto_balai_desa: string
  instagram: string
  jam_kerja_di_kantor_desa: string
  jumlah_penduduk_yang_belum_merekam_ektp: number
  jumlah_penduduk_yang_belum_tercatat_di_kk: number
  jumlah_petugas_statistik_desa: string
  jumlah_rt: string
  jumlah_rw: string
  jumlah_surat_keterangan_tidak_mampu_miskin_setahun_terakhir: number
  jumlah_warga_di_lereng_puncak: number
  kabupaten_kota: string
  kantor_kepala_desa_balai_desa: string
  kecamatan: string
  kecepatan_akses_internet: string
  kepemilikan_kantor_kepala_desa_balai_desa: string
  kerja_sama_desa: [
    {
      jumlah_pemanfaat: number
      lingkup_kerja_sama: string
      nilai_kerja_sama: number
      pihak_yang_diajak_kerja_sama: string
      tahun_kerja_sama_berakhir: string
    },
  ]
  ketersediaan_data_sdgs_desa_tahunan: string
  ketersediaan_data_statistik_desa: string
  ketinggian_lokasi: number
  keuntungan_bersih_setahun_terakhir: number
  keuntungan_kotor_belum_dikurangi_pajak_setahun_terakhir: number
  komputer_pc_laptop: string
  koordinat_bujur: number
  koordinat_lintang: number
  lembaga_kemasyarakatan_desa: [
    {
      jumlah_anggota: number
      jumlah_pengurus: number
      nama_lembaga: string
    },
  ]
  lingkungan: {
    apakah_ada_populasi_satwa_terancam_punah_saat_ini: [string]
    hutan_konservasi_di_desa: string
    jumlah_kejadian_penangkapan_ikan_ilegal: number
    jumlah_omset_wisata_tahun_sebelumnya: number
    jumlah_satwa_terancam_punah_setahun_terakhir: number
    jumlah_satwa_terancam_punah_tahun_sebelumnya: number
    jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_setahun_terakhir: number
    jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_tahun_sebelumnya: number
    kawasan_konservasi_perairan: string
    luas_kawasan_konservasi_perairan: number
    luas_kerusakan_hutan_konservasi_setahun_terakhir: number
    luas_kerusakan_hutan_konservasi_tahun_sebelumnya: number
    total_keuntungan_wisata_tahun_sebelumnya: number
  }
  lintang_selatan: number
  lintang_utara: number
  lokasi_desa_terletak_di_pulau: string
  lokasi_kantor: string
  luas_lahan_hutan: number
  luas_lahan_perkebunan: number
  luas_lahan_pertanian: number
  luas_wilayah_desa: string
  modal_awal: {
    dari_pemerintah_desa: number
    dari_pihak_lain: number
    dari_warga_desa: number
  }
  musyawarah_desa: [
    {
      ada_dokumen_musyawarah: string
      agenda_musyawarah: string
      bulan_ke: string
      unsur_masyarakat_yang_hadir: [string]
    },
  ]
  nilai_aset: number
  nilai_aset_desa: [
    {
      aset: string
      nilai_rp: number
      volume: number
    },
  ]
  no_sk_bupati_gubernur_tentang_peta_desa: string
  no_sk_pendirian_desa: string
  omzet_setahun_terakhir: number
  pelayanan_desa_setahun_terakhir: string
  pemerintahan_desa: [
    {
      jabatan: string
      jenis_kelamin: string
      menjabat_sejak_tahun: string
      nama: string
      nik: string
      no_hp: string
    },
  ]
  pendamping_desa: {
    jenis_kelamin: string
    nama: string
    no_hp: string
    status_terakhir_idm_desa: string
  }
  pengadaan_dan_publikasi: {
    jumlah_pengadaan_barang_dan_jasa_setahun_terakhir: number
    jumlah_publikasi_terbuka: number
  }
  pengurus_bumdes: [
    {
      jabatan: string
      nama: string
      nik: string
      nomor_hp: string
    },
  ]
  penyelenggaran_pemerintahan_utamanya_dilaksanakan_di: string
  peta_desa: string
  posyandu: {
    apakah_posyandu_menangani_kesehatan_jiwa: string
    jumlah_balita_terdaftar: number
    jumlah_bayi_mendapat_asi_eksklusif: number
    jumlah_bayi_meninggal: number
    jumlah_ibu_hamil_terdaftar: number
    jumlah_ibu_melahirkan: number
    jumlah_ibu_meninggal_karena_melahirkan: number
    jumlah_ibu_terdaftar: number
    jumlah_posyandu_di_desa: number
  }
  provinsi: string
  regulasi: [
    {
      bulan_ke: string
      jenis_peraturan: string
      nomor_dokumen: string
      peraturan: string
      tahun: string
    },
  ]
  rkp_desa: string
  rpjm_desa_berlaku_sampai_tahun: string
  sistem_informasi_desa: string
  sistem_keuangan_desa: string
  sk_pendirian_desa: string
  status_pemerintahan: string
  sumbangan_diberikan_kepada_paddesa: number
  topografi_terluas_wilayah: string
  transportasi: [
    {
      biaya: number
      dari_kantor_kepala_desa_ke: string
      jarak_tempuh: number
      jenis_angkutan_umum_yang_ada: string
      sarana_transportasi_yang_biasa_digunakan: string
      waktu_tempuh: number
    },
  ]
  twitter: string
  unit_usaha_bumdes: [
    {
      aset_unit_usaha_tahun_lalu: number
      jumlah_pekerja: number
      jumlah_unit_usaha: number
      keuntungan_bersih_tahun_lalu: number
      nama_unit_usaha: string
      omset_tahun_lalu: number
    },
  ]
  web_desa: string
  youtube: string
}

export const SDGSKuesionerDesaField: ISDGSKuesionerDesaDetail = {
  anggaran_pembelanjaan_desa_tahun_sebelumnya: {
    anggaran_pengeluaran: 0,
    belanja_modal: 0,
    bidang_pelaksanaan_pembangunan_desa: 0,
    bidang_pemberdayaan_masyarakat: 0,
    bidang_pembinaan_masyarakat: 0,
    bidang_penyelenggaraan_pemerintahan_desa: 0,
    lainnya: 0,
    penyertaan_modal_ke_bumdes: 0,
  },
  anggaran_pendapatan_desa_tahun_sebelumnya: {
    alokasi_dana_desa: 0,
    anggaran_pendapatan: 0,
    bagian_dari_pajak_dan_retribusi_daerah: 0,
    bantuan_keuangan_dari_apbd_kabupaten_kota: 0,
    bantuan_keuangan_dari_apbd_provinsi: 0,
    dana_desa_dari_apbn: 0,
    hibah_dan_sumbangan_pihak_ketiga: 0,
    lain_pendapatan_desa_yang_sah: 0,
    pendapatan_asli_desa: 0,
  },
  apakah_data_sdgs_desa_sudah_digunakan_untuk_rkpdes_dan_apbdes_setahun_terakhir:
    "",
  badan_usaha_milik_desa: {
    email: "",
    facebook: "",
    instagram: "",
    nama_bumdes: "",
    twitter: "",
    web_desa: "",
    youtube: "",
  },
  desa: "",
  email_desa: "",
  facebook: "",
  fasilitas_internet: "",
  foto_balai_desa: "",
  instagram: "",
  jam_kerja_di_kantor_desa: "",
  jumlah_penduduk_yang_belum_merekam_ektp: 0,
  jumlah_penduduk_yang_belum_tercatat_di_kk: 0,
  jumlah_petugas_statistik_desa: "",
  jumlah_rt: "",
  jumlah_rw: "",
  jumlah_surat_keterangan_tidak_mampu_miskin_setahun_terakhir: 0,
  jumlah_warga_di_lereng_puncak: 0,
  kabupaten_kota: "",
  kantor_kepala_desa_balai_desa: "",
  kecamatan: "",
  kecepatan_akses_internet: "",
  kepemilikan_kantor_kepala_desa_balai_desa: "",
  kerja_sama_desa: [
    {
      jumlah_pemanfaat: 0,
      lingkup_kerja_sama: "",
      nilai_kerja_sama: 0,
      pihak_yang_diajak_kerja_sama: "",
      tahun_kerja_sama_berakhir: "",
    },
  ],
  ketersediaan_data_sdgs_desa_tahunan: "",
  ketersediaan_data_statistik_desa: "",
  ketinggian_lokasi: 0,
  keuntungan_bersih_setahun_terakhir: 0,
  keuntungan_kotor_belum_dikurangi_pajak_setahun_terakhir: 0,
  komputer_pc_laptop: "",
  koordinat_bujur: 0,
  koordinat_lintang: 0,
  lembaga_kemasyarakatan_desa: [
    {
      jumlah_anggota: 0,
      jumlah_pengurus: 0,
      nama_lembaga: "",
    },
  ],
  lingkungan: {
    apakah_ada_populasi_satwa_terancam_punah_saat_ini: [""],
    hutan_konservasi_di_desa: "",
    jumlah_kejadian_penangkapan_ikan_ilegal: 0,
    jumlah_omset_wisata_tahun_sebelumnya: 0,
    jumlah_satwa_terancam_punah_setahun_terakhir: 0,
    jumlah_satwa_terancam_punah_tahun_sebelumnya: 0,
    jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_setahun_terakhir: 0,
    jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_tahun_sebelumnya: 0,
    kawasan_konservasi_perairan: "",
    luas_kawasan_konservasi_perairan: 0,
    luas_kerusakan_hutan_konservasi_setahun_terakhir: 0,
    luas_kerusakan_hutan_konservasi_tahun_sebelumnya: 0,
    total_keuntungan_wisata_tahun_sebelumnya: 0,
  },
  lintang_selatan: 0,
  lintang_utara: 0,
  lokasi_desa_terletak_di_pulau: "",
  lokasi_kantor: "",
  luas_lahan_hutan: 0,
  luas_lahan_perkebunan: 0,
  luas_lahan_pertanian: 0,
  luas_wilayah_desa: "",
  modal_awal: {
    dari_pemerintah_desa: 0,
    dari_pihak_lain: 0,
    dari_warga_desa: 0,
  },
  musyawarah_desa: [
    {
      ada_dokumen_musyawarah: "",
      agenda_musyawarah: "",
      bulan_ke: "",
      unsur_masyarakat_yang_hadir: [""],
    },
  ],
  nilai_aset: 0,
  nilai_aset_desa: [
    {
      aset: "",
      nilai_rp: 0,
      volume: 0,
    },
  ],
  no_sk_bupati_gubernur_tentang_peta_desa: "",
  no_sk_pendirian_desa: "",
  omzet_setahun_terakhir: 0,
  pelayanan_desa_setahun_terakhir: "",
  pemerintahan_desa: [
    {
      jabatan: "",
      jenis_kelamin: "",
      menjabat_sejak_tahun: "",
      nama: "",
      nik: "",
      no_hp: "",
    },
  ],
  pendamping_desa: {
    jenis_kelamin: "",
    nama: "",
    no_hp: "",
    status_terakhir_idm_desa: "",
  },
  pengadaan_dan_publikasi: {
    jumlah_pengadaan_barang_dan_jasa_setahun_terakhir: 0,
    jumlah_publikasi_terbuka: 0,
  },
  pengurus_bumdes: [
    {
      jabatan: "",
      nama: "",
      nik: "",
      nomor_hp: "",
    },
  ],
  penyelenggaran_pemerintahan_utamanya_dilaksanakan_di: "",
  peta_desa: "",
  posyandu: {
    apakah_posyandu_menangani_kesehatan_jiwa: "",
    jumlah_balita_terdaftar: 0,
    jumlah_bayi_mendapat_asi_eksklusif: 0,
    jumlah_bayi_meninggal: 0,
    jumlah_ibu_hamil_terdaftar: 0,
    jumlah_ibu_melahirkan: 0,
    jumlah_ibu_meninggal_karena_melahirkan: 0,
    jumlah_ibu_terdaftar: 0,
    jumlah_posyandu_di_desa: 0,
  },
  provinsi: "",
  regulasi: [
    {
      bulan_ke: "",
      jenis_peraturan: "",
      nomor_dokumen: "",
      peraturan: "",
      tahun: "",
    },
  ],
  rkp_desa: "",
  rpjm_desa_berlaku_sampai_tahun: "",
  sistem_informasi_desa: "",
  sistem_keuangan_desa: "",
  sk_pendirian_desa: "",
  status_pemerintahan: "",
  sumbangan_diberikan_kepada_paddesa: 0,
  topografi_terluas_wilayah: "",
  transportasi: [
    {
      biaya: 0,
      dari_kantor_kepala_desa_ke: "",
      jarak_tempuh: 0,
      jenis_angkutan_umum_yang_ada: "",
      sarana_transportasi_yang_biasa_digunakan: "",
      waktu_tempuh: 0,
    },
  ],
  twitter: "",
  unit_usaha_bumdes: [
    {
      aset_unit_usaha_tahun_lalu: 0,
      jumlah_pekerja: 0,
      jumlah_unit_usaha: 0,
      keuntungan_bersih_tahun_lalu: 0,
      nama_unit_usaha: "",
      omset_tahun_lalu: 0,
    },
  ],
  web_desa: "",
  youtube: "",
}
