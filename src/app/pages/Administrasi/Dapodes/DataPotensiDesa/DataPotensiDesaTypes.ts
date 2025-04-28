import { ACTION_COLUMN } from "@app/config/react-table/action-column.config"

export interface IDataPotensiDesa {
  _id: "pk"
  desa: string
  kecamatan: string
  kab_kota: string
  provinsi: string
  bulan: string
  tahun: string
  nama_pengisi: string
  pekerjaan: string
  jabatan: string
  kepala_desa: string
  sumber_data: Record<string, any>[]
  potensi_sumber_daya_alam: {
    potensi_umum: {
      batas_wilayah: {
        sebelah_utara_desa: string
        sebelah_utara_kec: string
        sebelah_selatan_desa: string
        sebelah_selatan_kec: string
        sebelah_timur_desa: string
        sebelah_timur_kec: string
        sebelah_barat_desa: string
        sebelah_barat_kec: string
      }
      penetapan_batas_wilayah: {
        penetapan_batas: string
        dasar_hukum: {
          perdes: string
          perda: string
        }
        peta_wilayah: string
      }
      luas_wilayah: {
        luas_tanah_sawah: number
        luas_tanah_kering: number
        luas_tanah_basah: number
        luas_tanah_perkebunan: number
        luas_fasilitas_umum: number
        luas_tanah_hutan: number
        total_luas: number
      }
      tanah_sawah: {
        key: string
        luas: number
      }[]
      tanah_kering: {
        key: string
        luas: number
      }[]
      tanah_basah: {
        key: string
        luas: number
      }[]
      tanah_perkebunan: {
        key: string
        luas: number
      }[]
      tanah_fasilitas_umum: {
        key: string
        luas: number
      }[]
      tanah_hutan: {
        key: string
        luas: number
      }[]
      iklim: {
        curah_hujan: number
        jumlah_bulan_hujan: string
        kelembapan: number
        suhu_rata_rata_harian: number
        tinggi_tempat_dari_permukaan_laut: number
      }
      jenis_kesuburan_tanah: {
        warna_tanah: string
        tekstur_tanah: string
        tingkat_kemiringan_tanah: number
        luas_tanah_erosi_ringan: number
        luas_tanah_erosi_sedang: number
        luas_tanah_erosi_berat: number
        luas_tanah_tidak_ada_erosi: number
        lahan: {
          key: string
          value: number
        }[]
      }
      topografi: {
        key: string
        keterangan: string
        luas: number
      }[]
      letak: {
        desa_kelurahan_kawasan_perkantoran_keterangan: string
        desa_kelurahan_kawasan_perkantoran_luas: number
        desa_kelurahan_kawasan_pertokoan_keterangan: string
        desa_kelurahan_kawasan_pertokoan_luas: number
        desa_kelurahan_kawasan_campuran_keterangan: string
        desa_kelurahan_kawasan_campuran_luas: number
        desa_kelurahan_kawasan_industri_keterangan: string
        desa_kelurahan_kawasan_industri_luas: number
        desa_kelurahan_kepulauan_keterangan: string
        desa_kelurahan_kepulauan_luas: number
        desa_kelurahan_pantai_pesisir_keterangan: string
        desa_kelurahan_pantai_pesisir_luas: number
        desa_kelurahan_kawasan_hutan_keterangan: string
        desa_kelurahan_kawasan_hutan_luas: number
        desa_kelurahan_taman_suaka_keterangan: string
        desa_kelurahan_taman_suaka_luas: number
        desa_kelurahan_kawasan_wisata_keterangan: string
        desa_kelurahan_kawasan_wisata_luas: number
        desa_kelurahan_perbatasan_negara_lain_keterangan: string
        desa_kelurahan_perbatasan_negara_lain_luas: number
        desa_kelurahan_perbatasan_provinsi_lain_keterangan: string
        desa_kelurahan_perbatasan_provinsi_lain_luas: number
        desa_kelurahan_perbatasan_kabupaten_lain_keterangan: string
        desa_kelurahan_perbatasan_kabupaten_lain_luas: number
        desa_kelurahan_perbatasan_kecamatan_lain_keterangan: string
        desa_kelurahan_perbatasan_kecamatan_lain_luas: number
        desa_kelurahan_bantaran_sungai_keterangan: string
        desa_kelurahan_bantaran_sungai_luas: number
        desa_kelurahan_rawan_banjir_keterangan: string
        desa_kelurahan_rawan_banjir_luas: number
        desa_kelurahan_bebas_banjir_keterangan: string
        desa_kelurahan_bebas_banjir_luas: number
        desa_kelurahan_potensial_tsunami_keterangan: string
        desa_kelurahan_potensial_tsunami_luas: number
        desa_kelurahan_rawan_jalur_gempa_keterangan: string
        desa_kelurahan_rawan_jalur_gempa_luas: number
      }
      orbitasi: {
        jarak_ibukota_kecamatan: number
        lama_jarak_tempuh_ibukota_kecamatan_dengan_motor: number
        lama_jarak_tempuh_ibukota_kecamatan_dengan_nonmotor: number
        kendaraan_umum_ibukota_kecamatan_keterangan: string
        kendaraan_umum_ibukota_kecamatan_jumlah: number
        jarak_ibukota_kabupaten: number
        lama_jarak_tempuh_ibukota_kabupaten_dengan_motor: number
        lama_jarak_tempuh_ibukota_kabupaten_dengan_nonmotor: number
        kendaraan_umum_ibukota_kabupaten_keterangan: string
        kendaraan_umum_ibukota_kabupaten_jumlah: number
        jarak_ibukota_provinsi: number
        lama_jarak_tempuh_ibukota_provinsi_dengan_motor: number
        lama_jarak_tempuh_ibukota_provinsi_dengan_nonmotor: number
        kendaraan_umum_ibukota_provinsi_keterangan: string
        kendaraan_umum_ibukota_provinsi_jumlah: number
      }
    }
    pertanian: {
      pemilikan_lahan_pertanian: {
        jumlah_keluarga_memiliki_pertanian: number
        jumlah_keluarga_tidak_memiliki: number
        jumlah_keluarga_memiliki_kurang_10ha: number
        jumlah_keluarga_memiliki_10_50ha: number
        jumlah_keluarga_memiliki_50_100ha: number
        jumlah_keluarga_memiliki_100_500ha: number
        jumlah_keluarga_memiliki_500_1000ha: number
        jumlah_keluarga_memiliki_lebih_1000ha: number
        jumlah_total_keluarga_petani: number
      }
      luas_tanaman_pangan_menurut_komoditas: {
        komoditas: string
        luas: number
        jumlah_produksi: number
      }[]
      pemilikan_lahan_buah: {
        jumlah_keluarga_memiliki_perkebunan: number
        jumlah_keluarga_tidak_memiliki: number
        jumlah_keluarga_memiliki_kurang_10ha: number
        jumlah_keluarga_memiliki_10_50ha: number
        jumlah_keluarga_memiliki_50_100ha: number
        jumlah_keluarga_memiliki_100_500ha: number
        jumlah_keluarga_memiliki_500_1000ha: number
        jumlah_keluarga_memiliki_lebih_1000ha: number
        jumlah_total_keluarga_perkebunan: number
      }
      luas_tanaman_buah: {
        komoditas: string
        luas: number
        jumlah_produksi: number
      }[]
      pemasaran_hasil: {
        dijual_langsung_ke_konsumen: string
        dijual_ke_pasar: string
        dijual_melalui_kud: string
        dijual_melalui_tengkulak: string
        dijual_melalui_pengecer: string
        dijual_ke_lumbung_desa: string
        tidak_dijual: string
      }
      tanaman_apotik_hidup: {
        tanaman: string
        luas: number
        hasil_panen: number
      }[]
    }
    perkebunan: {
      pemilihan_lahan_perkebunan: {
        jumlah_keluarga_memiliki_perkebunan: number
        jumlah_keluarga_tidak_memiliki: number
        jumlah_keluarga_memiliki_kurang_10ha: number
        jumlah_keluarga_memiliki_10_50ha: number
        jumlah_keluarga_memiliki_50_100ha: number
        jumlah_keluarga_memiliki_100_500ha: number
        jumlah_keluarga_memiliki_500_1000ha: number
        jumlah_keluarga_memiliki_lebih_1000ha: number
        jumlah_total_keluarga_perkebunan: number
        kepemilikan_usaha_perkebunan_milik_negara: number
        total_luas_pekerbunan: number
      }
      luas_perkebunan_menurut_komoditas: {
        komoditas: string
        swasta_luas: number
        swasta_hasil: number
        rakyat_luas: number
        rakyat_hasil: number
      }[]
      pemasaran_hasil_perkebunan: {
        dijual_langsung_ke_konsumen: string
        dijual_ke_pasar_hewan: string
        dijual_melalui_kud: string
        dijual_melalui_tengkulak: string
        dijual_melalui_pengecer: string
        dijual_ke_lumbung_desa: string
        tidak_dijual: string
      }
    }
    kehutanan: {
      luas_lahan_menurut_pemilikan: {
        milik_negara: number
        milik_adat_ulayat: number
        perhutani_instansi_sektoral: number
        milik_masyarakat_perorangan: number
        total: number
      }
      hasil_hutan: {
        komoditas: string
        satuan: string
        value: number
      }[]
      kondisi_hutan: {
        hutan: string
        baik: number
        rusak: number
        total: number
      }[]
      dampak_pengolahan_hutan: {
        dampak: string
        value_string: string
      }[]
      mekanisme_pemasaran_hasil_hutan: {
        dijual_langsung_ke_konsumen: string
        dijual_ke_pasar: string
        dijual_melalui_kud: string
        dijual_melalui_tengkulak: string
        dijual_melalui_pengecer: string
        dijual_ke_lumbung_desa_kel: string
        tidak_dijual: string
      }
    }
    peternakan: {
      jenis_populasi_ternak: {
        jenis_ternak: string
        jumlah_pemilik: number
        perkiraan_jumlah_populasi: number
      }[]
      produksi_peternakan: {
        jenis_produksi: string
        satuan: string
        value: number
      }[]
      ketersediaan_hijauan_pakan_ternak: {
        ketersediaan_pakan_ternak: string
        satuan: string
        value: number
      }[]
      pemilik_usaha_pengolahan_hasil_ternak: {
        hasil_ternak: string
        jumlah_pemilik_usaha: number
      }[]
      pemasaran_hasil_ternak: {
        dijual_langsung_ke_konsumen: string
        dijual_ke_pasar: string
        dijual_melalui_kud: string
        dijual_melalui_tengkulak: string
        dijual_melalui_pengecer: string
        dijual_ke_lumbung_desa_kel: string
        tidak_dijual: string
      }
      ketersediaan_lahan_pemeliharaan_ternak: {
        ketersediaan_lahan: string
        value: number
      }[]
    }
    perikanan: {
      jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau: {
        alat_produksi: string
        jumlah: number
        satuan_jumlah: string
        jumlah_produksi: number
      }[]
      jenis_dan_sarana_produksi_budidaya_ikan_air_tawar: {
        sarana_produksi: string
        jumlah: number
        satuan_jumlah: string
        jumlah_produksi: number
      }[]
      jenis_ikan_dan_produksi: {
        jenis_ikan: string
        jumlah_produksi: number
      }[]
      pemasaran_hasil_perikanan: {
        dijual_langsung_ke_konsumen: string
        dijual_ke_pasar: string
        dijual_melalui_kud: string
        dijual_melalui_tengkulak: string
        dijual_melalui_pengecer: string
        dijual_ke_lumbung_desa_kel: string
        tidak_dijual: string
      }
    }
    bahan_galian: {
      jenis_dan_deposit_bahan_galian: {
        jenis_bahan_galian: string
        deposit: string
      }[]
      produksi_bahan_galian: {
        jenis_bahan_galian: string
        produksi: string
      }[]
      kepemilikan_dan_pengelolaan_bahan_galian: {
        jenis_bahan_galian: string
        pengelola_pemilik: string
      }[]
      pemasaran_hasil_galian: {
        dijual_langsung_ke_konsumen: string
        dijual_ke_pasar: string
        dijual_melalui_kud: string
        dijual_melalui_tengkulak: string
        dijual_melalui_pengecer: string
        dijual_ke_perusahaan: string
        dijual_ke_lumbung_desa_kel: string
        tidak_dijual: string
      }
    }
    sumber_daya_air: {
      potensi_air_dan_sumber_daya_air: {
        jenis: string
        satuan: string
        potensi: string
      }[]
      sumber_air_bersih: {
        jenis: string
        jumlah: number
        pemanfaat: number
        kondisi: string
      }[]
      kualitas_air_minum: {
        jenis: string
        kualitas: string
      }[]
      sungai: {
        jumlah_sungai: number
        kondisi_tercemar: string
        kondisi_pendangkalan_pengendapan_lumpur_tinggi: string
        kondisi_keruh: string
        kondisi_jernih: string
        kondisi_berkurangnya_biota_sungai: string
        kondisi_kering: string
      }
      rawa: {
        luas_rawa: number
        pemanfaatan: {
          nama_pemanfaatan: string
          termanfaatkan: string
        }[]
      }
      pemanfaatan_dan_kondisi_danau_waduk_situ: {
        kondisi: {
          berlumpur: string
          keruh: string
          pendangkalan: string
          tercemar: string
        }
        luas: number
        pemanfaatan: {
          nama_pemanfaatan: string
          termanfaatkan: string
        }[]
      }
      air_panas: {
        sumber: string
        jumlah_lokasi: number
        pemanfaatan: string
        kepemilikan_pemda: number
        kepemilikan_swasta: number
        kepemilikan_adat_perorangan: number
      }[]
    }
    kualitas_udara: {
      sumber: string
      jumlah_lokasi_sumber_pencemar: number
      polutan_pencemar: string
      efek_terhadap_kesehatan: string
      kepemilikan_pemda: number
      kepemilikan_swasta: number
      kepemilikan_perorangan: number
    }[]
    kebisingan: {
      kebisingan_tinggi_ekses_dampak: string
      kebisingan_tinggi_sumber: "kendaraan bermotor"
      kebisingan_tinggi_efek_thd_penduduk: string
      kebisingan_sedang_ekses_dampak: string
      kebisingan_sedang_sumber: "kendaraan_bermotor"
      kebisingan_sedang_efek_thd_penduduk: string
      kebisingan_ringan_ekses_dampak: string
      kebisingan_ringan_sumber: string
      kebisingan_ringan_efek_thd_penduduk: string
      tidak_bising_ekses_dampak: string
      tidak_bising_sumber: "kendaraan_bermotor"
      tidak_bising_efek_thd_penduduk: string
    }
    ruang_publik_taman: {
      ruang_publik: string
      keberadaan: string
      luas: number
      tingkat_pemanfaatan: string
    }[]
    potensi_wisata: {
      lokasi: string
      keberadaan: string
      luas: number
      tingkat_pemanfaatan: string
    }[]
  }
  potensi_sumber_daya_manusia: {
    jumlah: {
      jumlah_laki_laki: number
      jumlah_perempuan: number
      jumlah_total: number
      jumlah_kepala_keluarga: number
      kepadatan_penduduk: number
    }
    usia: {
      usia_0_18_tahun: {
        usia_0_12_bulan_laki_laki: number
        usia_0_12_bulan_perempuan: number
        usia_1_tahun_laki_laki: number
        usia_1_tahun_perempuan: number
        usia_2_tahun_laki_laki: number
        usia_2_tahun_perempuan: number
        usia_3_tahun_laki_laki: number
        usia_3_tahun_perempuan: number
        usia_4_tahun_laki_laki: number
        usia_4_tahun_perempuan: number
        usia_5_tahun_laki_laki: number
        usia_5_tahun_perempuan: number
        usia_6_tahun_laki_laki: number
        usia_6_tahun_perempuan: number
        usia_7_tahun_laki_laki: number
        usia_7_tahun_perempuan: number
        usia_8_tahun_laki_laki: number
        usia_8_tahun_perempuan: number
        usia_9_tahun_laki_laki: number
        usia_9_tahun_perempuan: number
        usia_10_tahun_laki_laki: number
        usia_10_tahun_perempuan: number
        usia_11_tahun_laki_laki: number
        usia_11_tahun_perempuan: number
        usia_12_tahun_laki_laki: number
        usia_12_tahun_perempuan: number
        usia_13_tahun_laki_laki: number
        usia_13_tahun_perempuan: number
        usia_14_tahun_laki_laki: number
        usia_14_tahun_perempuan: number
        usia_15_tahun_laki_laki: number
        usia_15_tahun_perempuan: number
        usia_16_tahun_laki_laki: number
        usia_16_tahun_perempuan: number
        usia_17_tahun_laki_laki: number
        usia_17_tahun_perempuan: number
        usia_18_tahun_laki_laki: number
        usia_18_tahun_perempuan: number
      }
      usia_19_37_tahun: {
        usia_19_bulan_laki_laki: number
        usia_19_perempuan: number
        usia_20_tahun_laki_laki: number
        usia_20_tahun_perempuan: number
        usia_21_tahun_laki_laki: number
        usia_21_tahun_perempuan: number
        usia_22_tahun_laki_laki: number
        usia_22_tahun_perempuan: number
        usia_23_tahun_laki_laki: number
        usia_23_tahun_perempuan: number
        usia_24_tahun_laki_laki: number
        usia_24_tahun_perempuan: number
        usia_25_tahun_laki_laki: number
        usia_25_tahun_perempuan: number
        usia_26_tahun_laki_laki: number
        usia_26_tahun_perempuan: number
        usia_27_tahun_laki_laki: number
        usia_27_tahun_perempuan: number
        usia_28_tahun_laki_laki: number
        usia_28_tahun_perempuan: number
        usia_29_tahun_laki_laki: number
        usia_29_tahun_perempuan: number
        usia_30_tahun_laki_laki: number
        usia_30_tahun_perempuan: number
        usia_31_tahun_laki_laki: number
        usia_31_tahun_perempuan: number
        usia_32_tahun_laki_laki: number
        usia_32_tahun_perempuan: number
        usia_33_tahun_laki_laki: number
        usia_33_tahun_perempuan: number
        usia_34_tahun_laki_laki: number
        usia_34_tahun_perempuan: number
        usia_35_tahun_laki_laki: number
        usia_35_tahun_perempuan: number
        usia_36_tahun_laki_laki: number
        usia_36_tahun_perempuan: number
        usia_37_tahun_laki_laki: number
        usia_37_tahun_perempuan: number
      }
      usia_38_56_tahun: {
        usia_38_bulan_laki_laki: number
        usia_38_perempuan: number
        usia_39_tahun_laki_laki: number
        usia_39_tahun_perempuan: number
        usia_40_tahun_laki_laki: number
        usia_40_tahun_perempuan: number
        usia_41_tahun_laki_laki: number
        usia_41_tahun_perempuan: number
        usia_42_tahun_laki_laki: number
        usia_42_tahun_perempuan: number
        usia_43_tahun_laki_laki: number
        usia_43_tahun_perempuan: number
        usia_44_tahun_laki_laki: number
        usia_44_tahun_perempuan: number
        usia_45_tahun_laki_laki: number
        usia_45_tahun_perempuan: number
        usia_46_tahun_laki_laki: number
        usia_46_tahun_perempuan: number
        usia_47_tahun_laki_laki: number
        usia_47_tahun_perempuan: number
        usia_48_tahun_laki_laki: number
        usia_48_tahun_perempuan: number
        usia_49_tahun_laki_laki: number
        usia_49_tahun_perempuan: number
        usia_50_tahun_laki_laki: number
        usia_50_tahun_perempuan: number
        usia_51_tahun_laki_laki: number
        usia_51_tahun_perempuan: number
        usia_52_tahun_laki_laki: number
        usia_52_tahun_perempuan: number
        usia_53_tahun_laki_laki: number
        usia_53_tahun_perempuan: number
        usia_54_tahun_laki_laki: number
        usia_54_tahun_perempuan: number
        usia_55_tahun_laki_laki: number
        usia_55_tahun_perempuan: number
        usia_56_tahun_laki_laki: number
        usia_56_tahun_perempuan: number
      }
      "usia_57_75+_tahun": {
        usia_57_bulan_laki_laki: number
        usia_57_perempuan: number
        usia_58_tahun_laki_laki: number
        usia_58_tahun_perempuan: number
        usia_59_tahun_laki_laki: number
        usia_59_tahun_perempuan: number
        usia_60_tahun_laki_laki: number
        usia_60_tahun_perempuan: number
        usia_61_tahun_laki_laki: number
        usia_61_tahun_perempuan: number
        usia_62_tahun_laki_laki: number
        usia_62_tahun_perempuan: number
        usia_63_tahun_laki_laki: number
        usia_63_tahun_perempuan: number
        usia_64_tahun_laki_laki: number
        usia_64_tahun_perempuan: number
        usia_65_tahun_laki_laki: number
        usia_65_tahun_perempuan: number
        usia_66_tahun_laki_laki: number
        usia_66_tahun_perempuan: number
        usia_67_tahun_laki_laki: number
        usia_67_tahun_perempuan: number
        usia_68_tahun_laki_laki: number
        usia_68_tahun_perempuan: number
        usia_69_tahun_laki_laki: number
        usia_69_tahun_perempuan: number
        usia_70_tahun_laki_laki: number
        usia_70_tahun_perempuan: number
        usia_71_tahun_laki_laki: number
        usia_71_tahun_perempuan: number
        usia_72_tahun_laki_laki: number
        usia_72_tahun_perempuan: number
        usia_73_tahun_laki_laki: number
        usia_73_tahun_perempuan: number
        usia_74_tahun_laki_laki: number
        usia_74_tahun_perempuan: number
        usia_75_tahun_laki_laki: number
        usia_75_tahun_perempuan: number
        usia_lebih_dari_75_tahun_laki_laki: number
        usia_lebih_dari_75_tahun_perempuan: number
      }
    }
    pendidikan: {
      tingkatan: string
      jumlah_laki_laki: number
      jumlah_perempuan: number
    }[]
    mata_pencaharian_pokok: {
      pekerjaan: string
      jumlah_laki_laki: number
      jumlah_perempuan: number
    }[]
    agama_aliran_kepercayaan: {
      islam_jumlah_laki_laki: number
      islam_jumlah_perempuan: number
      kristen_jumlah_laki_laki: number
      kristen_jumlah_perempuan: number
      katholik_jumlah_laki_laki: number
      katholik_jumlah_perempuan: number
      hindu_jumlah_laki_laki: number
      hindu_jumlah_perempuan: number
      budha_jumlah_laki_laki: number
      budha_jumlah_perempuan: number
      kepercayaan_kepada_tuhan: number
      jumlah: number
    }
    kewarganegaraan: {
      wni_jumlah_laki_laki: number
      wni_jumlah_perempuan: number
      wna_jumlah_laki_laki: number
      wna_jumlah_perempuan: number
      dwi_kewarganegaraan_jumlah_laki_laki: number
      dwi_kewarganegaraan_jumlah_perempuan: number
      jumlah_laki_laki: number
      jumlah_perempuan: number
    }
    etnis: {
      suku: string
      jumlah_laki_laki: number
      jumlah_perempuan: number
    }[]
    cacat_mental_dan_fisik: {
      cacat: string
      jumlah_laki_laki: number
      jumlah_perempuan: number
    }[]
    tenaga_kerja: {
      penduduk_usia_18_56_tahun_laki_laki: number
      penduduk_usia_18_56_tahun_perempuan: number
      penduduk_usia_18_56_tahun_bekerja_laki_laki: number
      penduduk_usia_18_56_tahun_bekerja_perempuan: number
      penduduk_usia_18_56_tahun_tidak_bekerja_laki_laki: number
      penduduk_usia_18_56_tahun_tidak_bekerja_perempuan: number
      penduduk_usia_0_6_tahun_laki_laki: number
      penduduk_usia_0_6_tahun_perempuan: number
      penduduk_masih_sekolah_7_18_tahun_laki_laki: number
      penduduk_masih_sekolah_7_18_tahun_perempuan: number
      penduduk_usia_56_tahun_keatas_laki_laki: number
      penduduk_usia_56_tahun_keatas_perempuan: number
      angkatan_kerja_laki_laki: number
      angkatan_kerja_perempuan: number
      jumlah_laki_laki: number
      jumlah_perempuan: number
      total_jumlah: number
    }
    kualitas_angkatan_kerja: {
      angkatan_kerja: string
      jumlah_laki_laki: number
      jumlah_perempuan: number
    }[]
  }
  potensi_kelembagaan: {
    lembaga_pemerintahan: {
      pemerintah_desa_kelurahan: {
        dasar_hukum: {
          dasar_hukum_pembentukan_pemerintah_desa_kel: string
          dasar_hukum_pembentukan_bpd: string
        }
      }
      aparat_pemerintahan_desa: {
        jumlah_aparat_pemerintahan_desa_kel: string
        jumlah_perangkat_desa_kelurahan: string
        kepala_pemerintahan_desa: {
          kepala_desa_lurah: string
          sekretaris_desa_kelurahan: string
          kepala_urusan_pemerintahan: {
            keberadaan: string
            kepengurusan: string
          }[]
          kepala_urusan_pembangunan: {
            keberadaan: string
            kepengurusan: string
          }[]
          kepala_urusan_pemberdayaan_masyarakat: {
            keberadaan: string
            kepengurusan: string
          }[]
          kepala_urusan_kesejahteraan_rakyat: {
            keberadaan: string
            kepengurusan: string
          }[]
          kepala_urusan_umum: {
            keberadaan: string
            kepengurusan: string
          }[]
          kepala_urusan_keuangan: {
            keberadaan: string
            kepengurusan: string
          }[]
        }[]
      }
      dusun_lingkungan: {
        jumlah_staf: string
        jumlah_dusun: string
        kepala_dusun_lingkungan: {
          kepala_dusun_lainnya: {
            keberadaan: string
            kepengurusan: string
          }[]
        }[]
      }
      tingkat_pendidikan_aparat: {
        pemerintah_desa: string
        pendidikan: string
      }[]
      badan_permusyawaratan_desa: {
        keberadaan_bpd: string
        kepengurusan_bpd: string
        jumlah_anggota_bpd: number
      }
      pendidikan_anggota_bpd: {
        anggota_bpd: string
        pendidikan: string
      }[]
    }
    lembaga_kemasyarakatan: {
      nama_lembaga_kemasyarakatan: string
      jumlah: number
      dasar_hukum_pembentukan: string
      jumlah_pengurus: number
      alamat_kantor: string
      jenis_ruang_lingkup_kegiatan: number
      ruang_lingkup_kegiatan: string
    }[]
    tingkat_partisipasi_politik: {
      nama_lembaga_politik: string
      jumlah_pengurus: number
      jumlah_anggota: number
      jumlah_pemilih_pemilu_terakhir: number
      alamat_sekretariat_kantor: string
      dasar_hukum_pembentukan: string
      jenis_ruang_lingkup_kegiatan: number
      ruang_lingkup_kegiatan: string
      organisasi_underbow: string
    }[]
    lembaga_ekonomi: {
      lembaga_ekonomi_unit_usaha: {
        lembaga: string
        jumlah: number
        jumlah_kegiatan: number
        jumlah_pengurus_anggota: number
      }[]
      jasa_lembaga_keuangan: {
        lembaga: string
        jumlah: number
        jumlah_kegiatan: number
        jumlah_pengurus: number
      }[]
      industri_kecil_menengah: {
        industri: string
        jumlah: number
        jumlah_kegiatan: number
        jumlah_pengurus: number
      }[]
      usaha_jasa_pengangkutan: {
        angkutan_sungai: {
          jumlah_pemilik_angkutan_desa_perkotaan: number
          kapasitas_angkutan_desa_perkotaan: number
          tenaga_kerja_angkutan_desa_perkotaan: number
          jumlah_pemilik_angkutan_antar_kota_provinsi: number
          kapasitas_angkutan_antar_kota_provinsi: number
          tenaga_kerja_angkutan_antar_kota_provinsi: number
          jumlah_pemilik_perahu_motor_atau_sejenisnya: number
          kapasitas_perahu_motor_atau_sejenisnya: number
          tenaga_kerja_perahu_motor_atau_sejenisnya: number
          jumlah_pemilik_jetboat: number
          kapasitas_jetboat: number
          tenaga_kerja_jetboat: number
          jumlah_pemilik_angkutan_jetboat: number
          kapasitas_angkutan_jetboat: number
          tenaga_kerja_angkutan_jetboat: number
          jumlah_pemilik_angkutan_lebih_dari_10_orang: number
          kapasitas_angkutan_lebih_dari_10_orang: number
          tenaga_kerja_angkutan_lebih_dari_10_orang: number
          jumlah_pemilik_angkutan_kurang_dari_10_orang: number
          kapasitas_angkutan_kurang_dari_10_orang: number
          tenaga_kerja_angkutan_kurang_dari_10_orang: number
          jumlah_pemilik_angkutan_antara_10_100_orang: number
          kapasitas_angkutan_antara_10_100_orang: number
          tenaga_kerja_angkutan_antara_10_100_orang: number
        }
        angkutan_laut: {
          jumlah_pemilik_jetboat: number
          kapasitas_jetboat: number
          tenaga_kerja_jetboat: number
          jumlah_pemilik_perahu_ferry: number
          kapasitas_perahu_ferry: number
          tenaga_kerja_perahu_ferry: number
          jumlah_pemilik_jet_foil: number
          kapasitas_jet_foil: number
          tenaga_kerja_jet_foil: number
        }
        angkutan_udara: {
          jumlah_pemilik_pesawat_helikopter: number
          kapasitas_pesawat_helikopter: number
          tenaga_kerja_pesawat_helikopter: number
        }
        ekspedisi_dan_pengiriman: {
          jumlah_pemilik_usaha_ekspedisi: number
          kapasitas_usaha_ekspedisi: number
          tenaga_kerja_usaha_ekspedisi: number
        }
        // "jumlah_pemilik_angkutan_desa_perkotaan": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "angkutan_antar_kota_provinsi": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "sungai_pemilik_perahu_motor": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "sungai_pemilik_jetboat": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "sungai_angkutan_jetboat": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "sungai_angkutan_lebih_10_orang": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "sungai_angkutan_kurang_10_orang": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "sungai_angkutan_10_100_orang": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "laut_pemilik_jetboat": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "laut_pemilik_perahu_ferry": {
        //     "jumlah_pemilik": number,
        //     "kapasitas": number,
        //     "tenaga_kerja": number
        //   },
        // "laut_jet_foil": {
        //   "jumlah_pemilik": number,
        //   "kapasitas": number,
        //   "tenaga_kerja": number
        // },
        // "udara_pemilik_pesawat_helikopter": {
        //   "jumlah_pemilik": number,
        //   "kapasitas": number,
        //   "tenaga_kerja": number
        // },
        // "ekspedisi_pemilik_usaha": {
        //   "jumlah_pemilik": number,
        //   "kapasitas": number,
        //   "tenaga_kerja": number
        // },
      }
      usaha_jasa_perdagangan: {
        usaha: string
        jumlah: number
        jenis_produk: number
        jumlah_tenaga_kerja: number
      }[]
      usaha_jasa_hiburan: {
        usaha: string
        jumlah: number
        jenis_produk: number
        jumlah_tenaga_kerja: number
      }[]
      usaha_jasa_gas_listrik_bbm_air: {
        usaha: string
        jumlah: number
        jenis_produk: number
        jumlah_tenaga_kerja: number
      }[]
      usaha_jasa_keterampilan: {
        usaha: string
        jumlah: number
        jenis_produk: number
        jumlah_tenaga_kerja: number
      }[]
      usaha_jasa_hukum_konsultansi: {
        usaha: string
        jumlah: number
        jenis_produk: number
        jumlah_tenaga_kerja: number
      }[]
      usaha_jasa_penginapan: {
        usaha: string
        jumlah: number
        jenis_produk: number
        jumlah_tenaga_kerja: number
      }[]
    }
    lembaga_pendidikan: {
      pendidikan_formal: {
        nama: string
        jumlah: number
        status: string
        kepemilikan: {
          pemerintah: number
          swasta: number
          desa_kelurahan: number
        }
        jumlah_tenaga_pengajar: number
        jumlah_siswa: number
      }[]
      pendidikan_formal_keagamaan: {
        nama: string
        jumlah: number
        status: string
        kepemilikan: {
          pemerintah: number
          swasta: number
        }
        jumlah_tenaga_pengajar: number
        jumlah_siswa: number
      }[]
      pendidikan_non_formal: {
        nama: string
        jumlah: number
        status: string
        kepemilikan: {
          pemerintah: number
          yayasan: number
          lainnya: number
        }
        jumlah_tenaga_pengajar: number
        jumlah_siswa: number
      }[]
    }
    lembaga_adat: {
      keberadaan_lembaga_adat: {
        pemangku_adat: string
        kepengurusan_adat: string
      }
      simbol_adat: {
        simbol_adat: string
        keberadaan: string
      }[]
      jenis_kegiatan_adat: {
        musyawarah_adat: string
        sanksi_adat: string
        upacara_adat_perkawinan: string
        upacara_adat_kematian: string
        upacara_adat_kelahiran: string
        upacara_adat_bercocok_tanam: string
        upacara_adat_perikanan_laut: string
        upacara_adat_kehutanan: string
        upacara_adat_sda: string
        upacara_adat_pembangunan_rumah: string
        upacara_adat_penyelesaian_masalah: string
      }
    }
    lembaga_keamanan: {
      hansip_dan_linmas: {
        keberadaan_hansip_linmas: string
        jumlah_anggota_hansip: number
        jumlah_anggota_linmas: number
        pelaksanaan_siskamling: string
        jumlah_pos_siskamling: number
      }
      satpam_swakarsa: {
        keberadaan_satpam_swakarsa: number
        jumlah_anggota: number
        nama_organisasi_induk: string
        pemilik_organisasi: number
        organisasi_keamanan_lain: number
      }
      tni_polri_trantiblinmas: {
        tni: {
          mitra_koramil_tni: number
          jumlah_anggota: number
          jumlah_kegiatan: number
        }
        polri: {
          babinkamtibmas_polri: number
          jumlah_anggota: number
          jumlah_kegiatan: number
        }
      }
    }
  }
  potensi_sarana_dan_transportasi: {
    transportasi: {
      prasarana_transportasi_darat: {
        jalan_desa_kelurahan: {
          sub_type: string
          baik: number
          rusak: number
        }[]
        jalan_antar_desa: {
          sub_type: string
          baik: number
          rusak: number
        }[]
        jalan_kabupaten_melewati_desa: {
          sub_type: string
          baik: number
          rusak: number
        }[]
        jalan_provinsi_melewati_desa: {
          sub_type: string
          baik: number
          rusak: number
        }[]
        panjang_jalan_negara: {
          sub_type: string
          baik: number
          rusak: number
        }[]
        jembatan_desa_kelurahan: {
          kondisi_jembatan: string
          baik: number
          rusak: number
        }[]
        prasarana_angkutan_darat: {
          sub_type: string
          baik: number
          rusak: number
        }[]
        sarana_transportasi_darat: {
          sarana: string
          keterangan: string
          unit: number
        }[]
        prasarana_transportasi_laut: {
          prasarana: string
          unit: number
        }[]
        sarana_transportasi_laut: {
          sarana: string
          keterangan: string
          unit: number
        }[]
        prasarana_transportasi_udara: {
          prasarana: string
          keterangan: string
          unit: number
        }[]
      }
    }
    komunikasi_dan_informasi: {
      telepon: {
        telepon_umum: string
        wartel: string
        warnet: string
        jumlah_pelanggan_telkom: string
        jumlah_pelanggan_gsm: string
        jumlah_pelanggan_cdma: string
        sinyal_telepon_seluler_handphone: string
      }
      kantor_pos: {
        kantor_pos: string
        kantor_pos_pembantu: string
        tukang_pos: string
      }
      radio_tv: {
        tv_umum: string
        jumlah_radio: number
        jumlah_tv: number
        jumlah_parabola: number
      }
      koran_majalah_buletin: {
        koran_surat_kabar: string
        majalah: string
        papan_iklan_reklame: string
        papan_pengumuman: string
      }
    }
    air_bersih_dan_sanitasi: {
      prasarana_air_bersih: {
        jumlah_sumur_pompa: number
        jumlah_sumur_gali: number
        jumlah_hidran_umum: number
        jumlah_pah: number
        jumlah_tangki_air_bersih: number
        jumlah_embung: number
        jumlah_mata_air: number
        jumlah_bangunan_pengolahan_air_bersih: number
      }
      sanitasi: {
        saluran_drainase: string
        sumur_resapan_air_rumah_tangga: number
        jumlah_mck_umum: number
        pemilik_jumlah_jamban_keluarga: number
        kondisi_saluran_drainase_baik: number
        kondisi_saluran_drainase_rusak: number
        kondisi_saluran_drainase_mampet: number
        kondisi_saluran_drainase_kurang_memadai: number
      }
    }
    irigasi: {
      prasarana_irigasi: {
        panjang_saluran_primer: number
        panjang_saluran_sekunder: number
        panjang_saluran_tersier: number
        jumlah_pintu_sadap: number
        jumlah_pintu_pembagi_air: number
      }
      kondisi: {
        panjang_saluran_primer_rusak: number
        panjang_saluran_sekunder_rusak: number
        panjang_saluran_teriser_rusak: number
        jumlah_pintu_sadap_rusak: number
        jumlah_pintu_pembagi_air_rusak: number
      }
    }
    pemerintahan: {
      pemerintahan_desa_kelurahan: {
        gedung_kantor: string
        keadaan: {
          kondisi: string
          jumlah_ruang_kerja: number
          balai_desa_kelurahan_sejenisnya: string
          listrik: string
          air_bersih: string
          telepon: string
          rumah_dinas_kepala_desa_lurah: string
          rumah_dinas_perangkat_desa_kelurahan: string
        }
        inventaris_alat_tulis_kantor: {
          jumlah_mesin_tik: number
          jumlah_meja: number
          jumlah_kursi: number
          jumlah_almari_arsip: number
          komputer: number
          mesin_fax: number
          kendaraan_dinas: number
        }
        administrasi_pemerintahan_desa: {
          buku_data_peraturan_desa: string
          buku_keputusan_kepala_desa: string
          buku_administrasi_kependudukan: string
          buku_data_inventaris: string
          buku_data_aparat: string
          buku_data_tanah_milik_desa: string
          buku_administrasi_pajak_dan_retribusi: string
          buku_data_tanah: string
          buku_laporan_pengaduan_masyarakat: string
          buku_agenda_ekspedisi: string
          buku_profil_desa_kelurahan: string
          buku_data_induk_penduduk: string
          buku_data_mutasi_penduduk: string
          buku_rekapitulasi_jumlah_penduduk_akhir_bulan: string
          buku_registrasi_pelayanan_penduduk: string
          buku_data_penduduk_sementara: string
          buku_anggaran_penerimaan: string
          buku_anggaran_pengeluaran_pegawai_dan_pembangunan: string
          buku_kas_umum: string
          buku_kas_pembantu_penerimaan: string
          buku_kas_pembantu_pengeluaran_rutin_dan_pembangunan: string
          buku_data_lembaga_kemasyarakatan: string
        }
      }
      badan_permusyawaratan_desa_bpd: {
        gedung_kantor: string
        ruangan_kerja: string
        balai_bpd: string
        kondisi: string
        listrik: string
        air_bersih: string
        telepon: string
        inventaris_dan_alat_tulis_kantor: {
          jumlah_mesin_tik: number
          jumlah_meja: number
          jumlah_kursi: number
          jumlah_almari_arsip: number
          jumlah_komputer: number
          jumlah_jumlah_mesin_fax: number
        }
        administrasi_bpd: {
          buku_administrasi_keanggotaan_bpd: string
          buku_administrasi_kegiatan_bpd: number
          buku_kegiatan_bpd: string
          buku_himpunan_peraturan_desa: string
        }
      }
      dusun_lingkungan_atau_sebutan_lain: {
        gedung_kantor_atau_balai_pertemuan: string
        alat_tulis_kantor: string
        barang_inventaris: string
        buku_administrasi: number
        jenis_kegiatan: number
        jumlah_pengurus: number
      }
    }
    kemasyarakatan_desa_kelurahan: {
      gedung_kantor: {
        keterangan_gedung_kantor: string
        peralatan_kantor_komputer_fax: string
        mesin_tik: string
        kardek: string
        buku_administrasi_lembaga_kemasyarakatan: number
        jumlah_meja_dan_kursi: number
      }
      lkmd_lkm_atau_sebutan_lain: {
        memiliki_kantor_sendiri: string
        peralatan_kantor_komputer_fax: string
        mesin_tik: string
        kardek: string
        buku_administrasi_lembaga_kemasyarakatan: number
        jumlah_meja_dan_kursi: number
        buku_administrasi: number
        jumlah_kegiatan: number
      }
      pkk: {
        keterangan_pkk: string
        gedung_kantor: string
        peralatan_kantor_atk_inventaris: string
        kepengurusan: string
        kepengurusan_aktif: string
        buku_administrasi_pkk: string
        buku_administrasi_pkk_jenis: number
        kegiatan: string
        jumlah_kegiatan: number
      }
      karang_taruna: {
        keterangan_karang_taruna: string
        kepengurusan: string
        buku_administrasi: number
        jumlah_kegiatan: number
      }
      rt: {
        keterangan_rt: string
        kepengurusan: string
        buku_administrasi: number
        jumlah_kegiatan: number
      }
      rw: {
        keterangan_rw: string
        kepengurusan: string
        buku_administrasi: number
        jumlah_kegiatan: number
      }
      lembaga_adat: {
        memiliki_kantor_gedung_menumpang: string
        kepengurusan: string
        buku_administrasi: number
        jumlah_kegiatan: number
      }
      bumdes: {
        keterangan_bumdes: string
        memiliki_kantor_gedung_menumpang: string
        kepengurusan: string
        buku_administrasi: number
        jumlah_kegiatan: number
      }
      forum_komunikasi_kader_pemberdayaan_masyarakat: {
        keterangan_forum: string
        kantor_gedung_menumpang: string
        kepengurusan: string
        buku_administrasi: number
        jumlah_kegiatan: number
      }
      kantor_gedung_organisasi_sosial_kemasyarakatan: {
        keterangan_kantor: string
        memiliki_kantor_gedung_menumpang: string
        kepengurusan: string
      }
      kantor_gedung_organisasi_profesi_yang_ada: {
        keterangan_kantor: string
        memiliki_kantor_gedung_menumpang: string
        kepengurusan: string
        buku_administrasi: number
      }
    }
    peribadatan: {
      jumlah_masjid: number
      jumlah_langgar_surau_mushola: number
      jumlah_gereja_kristen_protestan: number
      jumlah_gereja_katholik: number
      jumlah_wihara: number
      jumlah_pura: number
      jumlah_klenteng: number
    }
    olahraga: {
      lapangan_sepak_bola: number
      lapangan_bulu_tangkis: number
      meja_piingpong: number
      lapangan_tenis: number
      lapangan_voli: number
      lapangan_golf: number
      pacuan_kuda: number
      arum_jeram: string
      lapangan_basket: number
      pusat_kebugaran: number
      gelanggang_remaja: string
    }
    kesehatan: {
      prasarana_kesehatan: {
        prasarana: string
        unit: number
      }[]
      sarana_kesehatan: {
        sarana: string
        value: number
      }[]
      pendidikan: {
        prasarana_dan_sarana_pendidikan: {
          pendidikan: string
          sewa: number
          milik_sendiri: number
        }[]
      }
      energi_dan_penerangan: {
        prasarana_energi_dan_penerangan: {
          listrik_pln: number
          diesel_umum: number
          genset_pribadi: number
          lampu_minyak_tanah_jarak_kelapa: number
          kayu_bakar: number
          batu_bara: number
          tanpa_penerangan: number
        }
      }
      hiburan_dan_wisata: {
        prasarana_hiburan_dan_wisata: {
          prasarana: string
          value: number
        }[]
      }
      kebersihan: {
        tempat_pembuangan_sementara: number
        tempat_pembuangan_akhir: number
        alat_penghancur_sampah: string
        jumlah_gerobak_sampah: number
        jumlah_tong_sampah: number
        jumlah_truk_pengangkut_sampah: number
        jumlah_satgas_kebersihan: number
        jumlah_anggota_satgas: number
        jumlah_pemulung: number
        tempat_pengelolaan_sampah: string
        pengelolaan_sampah_lingkungan: string
        pengelola_sampah_lainnya: string
      }
    }
  }
}

export const DATA_POTENSI_DESA_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true, show: true },
  {
    Header: "Nama pengisi",
    accessor: "namaPengisi",
    disableFilters: false,
    show: true,
  },
  {
    Header: "Bulan",
    accessor: "bulan",
    disableFilters: false,
    show: true,
  },
  {
    Header: "Tahun",
    accessor: "tahun",
    disableFilters: false,
    show: true,
  },
  ...ACTION_COLUMN,
]
