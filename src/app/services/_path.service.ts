export const API_PATH = () => {
  return {
    account: "/apps/user",
    workspace: "/apps/workspace",
    dataset: "/main/dataset",
    icon: "/main/icon",
    master: "/apps/option",
    image:'/apps/sikersa',
    form: {
      mainForm: "/apps/form",
      administrasi: {
        bukuPeraturanDiDesa: "/apps/peraturan-desa",
        bukuInventarisKekayaanDesa: "/apps/form/buku_inventaris_kekayaan_desa",
        bukuIndukPenduduk: "/apps/buku-induk-penduduk",
        bukuPendudukSementara: "/apps/buku-penduduk-sementara",
        bukuKeputusanKepalaDesa: "/apps/form/buku_keputusan_kepala_desa",
        bukuMutasiPenduduk: "/apps/buku-mutasi-penduduk",

        bukuKartuTandaPendudukKK: "/apps/administrasi",

        bukuAnggaranPendapatanDanBelanjaDesa:
          "/apps/form/buku_anggaran_pendapatan_dan_belanja_desa",
        bukuLembaranDesaDanBeritaDesa:
          "/apps/form/buku_lembaran_desa_dan_berita_desa",
        bukuAgenda: "/apps/form/buku_agenda",
        bukuTanahDiDesa: "/apps/form/buku_tanah_di_desa",
        bukuTanahKasDesa: "/apps/form/buku_tanah_kas_desa",
        bukuEkspedisi: "/apps/form/buku_ekspedisi",
        bukuAparatPemerintahDesa: "/apps/form/buku_aparat_pemerintah_desa",
        bukuLetterCTanah: "/apps/form/letter_c_tanah",

        /** KEUANGAN */
        bukuRencanaAnggaranBiaya: "/apps/form/buku_rencana_anggaran_biaya",
        bukuKasUmum: "/apps/form/buku_kas_umum",
        bukuKasPembantu: "/apps/form/buku_kas_pembantu",
        bukuKasPembantuKegiatan: "/apps/form/buku_kas_pembantu_kegiatan",
        bukuBankDesa: "/apps/form/buku_bank_desa",

        /** PEMBANGUNAN */
        bukuRencanaKerjaPembangunan:
          "/apps/form/buku_rencana_kerja_pembangunan",
        bukuKaderPemberdayaanMasyarakat:
          "/apps/form/buku_kader_pemberdayaan_masyarakat",
        bukuInventarisHasilHasilPembangunan:
          "/apps/form/buku_inventaris_hasil_hasil_pembangunan",
        bukuKegiatanPembangunan: "/apps/form/buku_kegiatan_pembangunan",

        /** PENGATURAN */
        tandaTangan: "/apps/tanda-tangan",

        /** INVENTARIS KEKAYAAN DESA */
        inventarisTanah: "/apps/form/tanah",
        inventarisPeralatanDanMesin: "/apps/form/peralatan_dan_mesin",
        inventarisGedungDanBangunan: "/apps/form/gedung_dan_bangunan",
        inventarisJalanIrigasiDanJaringan:
          "/apps/form/jalan_irigasi_dan_jaringan",
        inventarisAsetTetapLainnya: "/apps/form/aset_tetap_lainnya",
        inventarisKonstruksiDalamPengerjaan:
          "/apps/form/konstruksi_dalam_pengerjaan",

        /** PENGATURAN */
        loginSlider: "apps/SliderLogin",

        /** DAPODES */
        dataPokokDesa: "/apps/dapodes/data_pokok_desa",
        dataPotensiDesa: "/apps/dapodes/data_potensi_desa",
        prodeskel: "/apps/prodeskel",

        /** ARSIP */
        arsip: "/apps/arsipDesa",
      },
      layanan_warga: {
        suratMasuk: "apps/suratMasuk",
        suratKeteranganUsaha: "apps/form/surat_keterangan_usaha",
        suratKeteranganTempatUsaha: "apps/form/surat_keterangan_tempat_usaha",
        suratPermohonanIMB:
          "apps/form/surat_permohonan_izin_mendirikan_bangunan_IMB",
        suratPermohonanSKCK: "apps/form/surat_keterangan_catatan_kepolisian",
        suratPengantarSKCK: "apps/form/surat_pengantar_skck",
        suratKehilangan: "apps/form/surat_kehilangan",
        suratKeteranganDomisili: "apps/form/surat_keterangan_domisili",
        suratDomisiliSementara: "apps/form/surat_domisili_sementara",
        suratKeteranganAksesJalan: "apps/form/surat_keterangan_akses_jalan",
        suratPengantarNikah: "apps/form/surat_pengantar_nikah",
        suratKeteranganKematian: "apps/form/surat_keterangan_kematian",
        suratKeteranganPenguburan: "apps/form/surat_keterangan_penguburan",
        suratPermohonanIzinUsaha: "apps/form/surat_permohonan_izin_usaha_SIUP",
        suratIzinKeramaian: "apps/form/surat_permohonan_izin_keramaian",
        suratIzinPermohonanTower: "apps/form/surat_permohonan_izin_tower",
        suratPelayananPosyandu: "apps/form/pelayanan_posyandu",
        suratKeteranganPernahNikah: "apps/form/surat_keterangan_telah_menikah",
        suratKeteranganBelumPernahNikah:
          "apps/form/surat_keterangan_belum_nikah",
        suratKeteranganDudaJanda: "apps/form/surat_keterangan_duda_atau_janda",
        suratAhliWaris: "apps/form/surat_ahli_waris",
        suratKeteranganPenghasilanOrtu:
          "apps/form/surat_keterangan_penghasilan_orang_tua",
        SPTJMKebenaranSuamiIstri:
          "apps/form/sptjm_kebenaran_sebagai_pasangan_suami_istri",
        suratKeteranganPenghasilan: "apps/form/surat_keterangan_penghasilan",
        sporadik: "apps/form/sporadik",
        suratKeteranganKepemilikanTanah:
          "apps/form/surat-keterangan-kepemilikan-tanah",
        suratBelumMemilikiRumah: "apps/form/surat-belum-memiliki-rumah",
        suratKepemilikanRumah: "apps/form/surat-kepemilikan-rumah",
        formulirPermohonanKKBaruWNI: "apps/form/surat_permohonan_kk_baru",
        suratKeteranganPencocokan:
          "apps/form/surat/surat_keterangan_pencocokan",
        suratKeteranganTidakMemilikiJamkesmas:
          "/apps/form/surat_keterangan_tidak_memiliki_jamkesmas",
        suratKeteranganTidakMampu: "/apps/form/surat_keterangan_tidak_mampu",
        suratKeteranganPindah: "/apps/form/surat_keterangan_pindah",
        suratKeteranganPerbedaanIdentitas:
          "/apps/form/surat_keterangan_perbedaan_identitas",
        pengaturanSurat: "/apps/pengaturan-surat",
        suratDomisiliPerusahaan: "/apps/form/surat_domisili_perusahaan",
        suratKeteranganKelahiran: "/apps/form/surat_keterangan_kelahiran",
        suratKeteranganJandaMati: "/apps/form/surat_keterangan_janda_mati",
        suratKeteranganDudaMati: "/apps/form/surat_keterangan_duda_mati",
        suratPernyataanRenovasiRumah:
          "/apps/form/surat_pernyataan_renovasi_rumah",
        suratKeterangan: "/apps/form/surat_keterangan",
        suratKeteranganPtsl: "/apps/form/surat_keterangan_ptsl",
        suratKeteranganTidakMampuUntukSubsidiListrik:
          "/apps/form/surat_keterangan_tidak_mampu_untuk_subsidi_listrik",
        suratKeteranganTidakMampuUntukPengadilan:
          "/apps/form/surat_keterangan_tidak_mampu_untuk_pengadilan",
        suratKeteranganTidakMampuUntukKua:
          "/apps/form/surat_keterangan_tidak_mampu_untuk_kua",
        suratKeteranganTidakMampuUntukJampersal:
          "/apps/form/surat_keterangan_tidak_mampu_untuk_jampersal",
        suratKeteranganJompo: "/apps/form/surat_keterangan_jompo",
        suratKeteranganBekerja: "/apps/form/surat_keterangan_bekerja",
        suratKeteranganTidakMasukKerja:
          "/apps/form/surat_keterangan_tidak_masuk_kerja",
        suratPernyataanHibahSepihak:
          "/apps/form/surat_pernyataan_hibah_sepihak",
        suratAhliWarisBiasa: "apps/form/surat_ahli_waris_biasa",
        suratKeteranganIzinOrangTua:
          "apps/form/surat_keterangan_izin_orang_tua",
        suratKeteranganTidakMampuUntukRumahSakit:
          "apps/form/surat_keterangan_tidak_mampu_untuk_rumah_sakit",
        suratPengantarPindahAntarKabupatenKota:
          "/apps/form/surat_pengantar_pindah_antar_kabupaten_kota",
        formulirPindahDatang: "/apps/form/formulir_pindah_datang",
        formulirPindahKeluar: "/apps/form/formulir_pindah_keluar",
        suratKeteranganTidakMampuUntukBpjs:
          "/apps/form/surat_keterangan_tidak_mampu_untuk_bpjs",
        suratKeteranganTidakMampuUntukSekolah:
          "apps/form/surat_keterangan_tidak_mampu_untuk_sekolah",
        suratKeteranganTerdaftarDtks:
          "apps/form/surat_keterangan_terdaftar_dtks",
        suratPernyataanTidakBekerjaDanTidakMemilikiPenghasilan:
          "/apps/form/surat_pernyataan_tidak_berkerja_tidak_memiliki_penghasilan",
        suratMutasiBpjs: "/apps/form/surat_mutasi_bpjs",
        suratPengantarPindahAntarKecamatan:
          "/apps/form/surat_pengantar_pindah_antar_kecamatan",
        suratPengantarPindah: "/apps/form/surat_pengantar_pindah",
        suratKeteranganRumahTangga: "/apps/form/surat_keterangan_rumah_tangga",
        suratKeteranganSpptBelumTerbit:
          "/apps/form/surat_keterangan_sppt_belum_terbit",
        suratPerjanjianJualBeliSebelumAkta:
          "/apps/form/surat_perjanjian_jual_beli_sebelum_akta",
        suratKeteranganIbuKandung: "apps/form/surat_keterangan_ibu_kandung",
        suratKeteranganBerkelakuanBaik:
          "apps/form/surat_keterangan_berkelakuan_baik",
        suratKeteranganGhaib: "apps/form/surat_keterangan_ghaib",
        suratKeteranganBedaLuasTanah:
          "apps/form/surat_keterangan_beda_luas_tanah",
        suratRekomendasiPembelianBbm:
          "apps/form/surat_rekomendasi_pembelian_bbm",
        suratTaksiranHargaTanah: "apps/form/surat_taksiran_harga_tanah",
        suratPengantarPindahAntarProvinsi:
          "apps/form/surat_pengantar_pindah_antar_provinsi",
        suratKeteranganTidakMampuMaskin:
          "apps/form/surat_keterangan_tidak_mampu_maskin",
        suratKeteranganSerbaguna: "apps/form/surat_keterangan_serbaguna",
      },
      persediaan_barang: {
        golongan_barang: "/apps/persediaanBarang/golongan-barang",
        bidang_barang: "/apps/persediaanBarang/bidang-barang",
        kelompok_barang: "/apps/persediaanBarang/kelompok-barang",
        sub_kelompok_barang: "/apps/persediaanBarang/sub-kelompok-barang",
        sub_sub_kelompok_barang: "/apps/persediaanBarang/sub-sub-kelompok-barang",
      },
      buku_tambah_inventaris_barang_persediaan: '/apps/form/buku_tambah_inventaris_barang_persediaan',
      aset_tak_berwujud: 'apps/form/aset_tak_berwujud'
    },
    iconAms: {
      getAll: "icon/get",
      getById: "icon/getById",
      insert: "icon/insert",
      update: "icon/update",
      delete: "icon/delete",
    },
    summary: {
      administrasi: {
        peraturanDesa: "analytics/administrasi/PeraturanDesa",
        keputusanKepalaDesa: "analytics/administrasi/KeputusanKepalaDesa",
        inventarisDanKekayaanDesa:
          "analytics/administrasi/InventarisDanKekayaanDesa",
        aparatPemerintahDesa: "analytics/administrasi/AparatPemerintahDesa",
        tanahDesa: "analytics/administrasi/TanahDesa",
        tanahKasDesa: "analytics/administrasi/TanahKasDesa",
        agenda: "analytics/administrasi/Agenda",
        lembaranDesaDanBeritaDesa:
          "analytics/administrasi/LembaranDesaDanBeritaDesa",
        indukPenduduk: "analytics/administrasi/IndukPenduduk",
        pendudukSementara: "analytics/administrasi/PendudukSementara",
        mutasiPenduduk: "analytics/administrasi/MutasiPenduduk",
        rekapitulasiJumlahPenduduk:
          "analytics/administrasi/RekapitulasiJumlahPenduduk",
        rekapitulasiPenduduk: "analytics/administrasi/RekapitulasiPenduduk",
        anggaranPendapatanDanBelanjaDesa:
          "analytics/administrasi/AnggaranPendapatanDanBelanjaDesa",
        rencanaAnggaranBiaya: "analytics/administrasi/RencanaAnggaranBiaya",
        kasPembantuKegiatan: "analytics/administrasi/KasPembantuKegiatan",
        kasUmum: "analytics/administrasi/KasUmum",
        kasPembantu: "analytics/administrasi/KasPembantu",
        bankDesa: "analytics/administrasi/BankDesa",
        ekspedisi: "analytics/administrasi/Ekspedisi",
        jumlahPendudukBerdasarkanGender:
          "analytics/administrasi/JumlahPendudukBerdasarkanGender",
      },
      kependudukan: {
        jumlahPendudukBerdasarkanGenderDusun:
          "analytics/kependudukan/JumlahPendudukBerdasarkanGenderDusun",
        jumlahPendudukBerdasarkanGender:
          "analytics/kependudukan/JumlahPendudukBerdasarkanGender",
        statusPerkawinanPenduduk:
          "analytics/kependudukan/StatusPerkawinanPenduduk",
        JumlahPendudukBerdasarkanPekerjaan:
          "analytics/kependudukan/JumlahPendudukBerdasarkanPekerjaan",
        jumlahPendudukAgama: "analytics/kependudukan/JumlahPendudukAgama",
        jumlahGolonganDarah: "analytics/kependudukan/JumlahGolonganDarah",
        jumlahPendudukKewarganegaraan:
          "analytics/kependudukan/JumlahPendudukKewarganegaraan",
      },
      layananWarga: {
        diajukan: "analytics/layananWarga/Diajukan",
        diverifikasi: "analytics/layananWarga/Diverifikasi",
        ditolak: "analytics/layananWarga/Ditolak",
        totalPengajuan: "analytics/layananWarga/TotalPengajuan",
        selesai: "analytics/layananWarga/Selesai",
        aktivasiAkun: "analytics/layananWarga/AktivasiAkun",
        kependudukan: "analytics/layananWarga/Kependudukan",
        pernikahan: "analytics/layananWarga/Pernikahan",
        perizinan: "analytics/layananWarga/Perizinan",
        kesehatan: "analytics/layananWarga/Kesehatan",
        sosial: "analytics/layananWarga/Sosial",
        nonPerizinan: "analytics/layananWarga/NonPerizinan",
        pertanahan: "analytics/layananWarga/Pertanahan",
        jumlahSurat: "analytics/Surat/JumlahSurat",
      },
      dataDesaKependudukan: {
        jumlahRT: "analytics/DataDesaKependudukan/JumlahRT",
        jumlahRW: "analytics/DataDesaKependudukan/JumlahRW",
        jumlahKK: "analytics/DataDesaKependudukan/JumlahKK",
        jumlahNIK: "analytics/DataDesaKependudukan/JumlahNIK",
        jumlahNIKBerdasarkanRW:
          "analytics/DataDesaKependudukan/JumlahNIKBerdasarkanRW",
        jumlahNIKBerdasarkanJenisKelamin:
          "analytics/DataDesaKependudukan/JumlahNIKBerdasarkanJenisKelamin",
        jumlahNIKBerdasarkanStatusPerkawinan:
          "analytics/DataDesaKependudukan/JumlahNIKBerdasarkanStatusPerkawinan",
        jumlahNIKBerdasarkanPekerjaan:
          "analytics/DataDesaKependudukan/JumlahNIKBerdasarkanPekerjaan",
        jumlahNIKBerdasarkanAgama:
          "analytics/DataDesaKependudukan/JumlahNIKBerdasarkanAgama",
        jumlahNIKBerdasarkanKewarganegaraan:
          "analytics/DataDesaKependudukan/JumlahNIKBerdasarkanKewarganegaraan",
        jumlahNIKBerdasarkanGolonganDarah:
          "analytics/DataDesaKependudukan/JumlahNIKBerdasarkanGolonganDarah",
        jumlahPendudukMenurutUsia:
          "analytics/kependudukan/JumlahPendudukMenurutUsia",
        kategoriUsia: "analytics/kependudukan/KategoriUsia",
        statusPerkawinanBerdasarkanJenisKelamin:
          "analytics/kependudukan/StatusPerkawinanBerdasarkanJenisKelamin",
        jumlahPendudukBerdasarkanWilayahRTdanRW:
          "analytics/kependudukan/JumlahPendudukBerdasarkanWilayahRTdanRW",
        jumlahRTBerdasarkanRW: "analytics/kependudukan/JumlahRTBerdasarkanRW",
      },
      pendidikan: {
        proporsiPendudukBerdasarkanPendidikanTerakhir:
          "analytics/Pendidikan/ProporsiPendudukBerdasarkanPendidikanTerakhir",
        jenisKelaminBerdasarkanPendidikanTerakhir:
          "analytics/Pendidikan/JenisKelaminBerdasarkanPendidikanTerakhir",
        jenisPekerjaanBerdasarkanPendidikanTerakhir:
          "analytics/Pendidikan/JenisPekerjaanBerdasarkanPendidikanTerakhir",
        kategoriUmurBerdasarkanPendidikanTerakhir:
          "analytics/Pendidikan/KategoriUmurBerdasarkanPendidikanTerakhir",
        JenisKelaminBerdasarkanPendidikanTerakhir_LakiLaki:
          "analytics/Pendidikan/Pie/PieLakiLakiBerdasarkanPendidikanTerakhir",
        JenisKelaminBerdasarkanPendidikanTerakhir_Perempuan:
          "analytics/Pendidikan/Pie/PiePerempuanBerdasarkanPendidikanTerakhir",
      },
      wilayah: {
        jumlahPendudukWilayah: "analytics/Wilayah/JumlahPendudukWilayah",
        jumlahPendudukPendidikan: "analytics/Wilayah/JumlahPendudukPendidikan",
        jumlahPendudukPekerjaan: "analytics/Wilayah/JumlahPendudukPekerjaan",
        jumlahPendudukAgama: "analytics/Wilayah/JumlahPendudukAgama",
      },
      sdgs: {
        exportFilterStatus: "analytics/export/AdministrasiUmumLocal",
      },
    },
    role: "/main/role",
    downloadSurat: "download/v1/generate",
    downloadSuratv2: "download/v2/generate",
    downloadSuratWord: "download/v1/generate_word",
    downloadBuku: {
      layananMasyarakat: {
        suratMasuk: "download/v2/generate/surat_masuk",
      },
      administrasi: {
        /** UMUM */
        bukuPeraturanDiDesa: "download/v2/generate/buku_peraturan_di_desa",
        bukuInventarisKekayaanDesa:
          "download/v2/generate/buku_inventaris_kekayaan_desa",
        bukuKeputusanKepalaDesa:
          "download/v2/generate/buku_keputusan_kepala_desa",
        bukuAnggaranPendapatanDanBelanjaDesa:
          "download/v3/generate/buku_anggaran_pendapatan_dan_belanja_desa",
        bukuLembaranDesaDanBeritaDesa:
          "download/v2/generate/buku_lembaran_desa_dan_berita_desa",
        bukuAgenda: "download/v2/generate/buku_agenda",
        bukuTanahDiDesa: "download/v2/generate/buku_tanah_di_desa",
        bukuTanahKasDesa: "download/v2/generate/buku_tanah_kas_desa",
        bukuEkspedisi: "download/v2/generate/buku_ekspedisi",
        bukuLetterCTanah: "download/v2/generate/letter_c_tanah",
        bukuAparatPemerintahDesa:
          "download/v2/generate/buku_aparat_pemerintah_desa",
        dataPokokDesa: "download/v2/generate/data_pokok_desa",

        /** PENDUDUK */
        bukuIndukPenduduk: "download/v2/generate/buku_induk_penduduk",
        bukuIndukPendudukByFilter:
          "download/v2/generateCustomTable/buku_induk_penduduk",
        bukuPendudukSementara: "download/v2/generate/buku_penduduk_sementara",
        bukuMutasiPenduduk: "download/v2/generate/buku_mutasi_penduduk",
        bukuKartuTandaPendudukKK:
          "download/v2/generate/buku_kartu_tanda_penduduk_dan_buku_kartu_keluarga",

        /** KEUANGAN */
        bukuRencanaAnggaranBiaya:
          "download/v2/generate/buku_rencana_anggaran_biaya",
        bukuKasUmum: "download/v2/generate/buku_kas_umum",
        bukuKasPembantu: "download/v2/generate/buku_kas_pembantu",
        bukuKasPembantuKegiatan:
          "download/v2/generate/buku_kas_pembantu_kegiatan",
        bukuBankDesa: "download/v2/generate/buku_bank_desa",

        /** PEMBANGUNAN */
        bukuRencanaKerjaPembangunan:
          "download/v2/generate/buku_rencana_kerja_pembangunan",
        bukuKaderPemberdayaanMasyarakat:
          "download/v2/generate/buku_kader_pemberdayaan_masyarakat",
        bukuInventarisHasilHasilPembangunan:
          "download/v2/generate/buku_inventaris_hasil_hasil_pembangunan",
        bukuKegiatanPembangunan:
          "download/v2/generate/buku_kegiatan_pembangunan",

        /** INVENTARIS KEKAYAAN DESA */
        inventarisTanah: "download/v2/generate/tanah",
        inventarisPeralatanDanMesin: "download/v2/generate/peralatan_dan_mesin",
        inventarisGedungDanBangunan: "download/v2/generate/gedung_dan_bangunan",
        inventarisJalanIrigasiDanJaringan:
          "download/v2/generate/jalan_irigasi_dan_jaringan",
        inventarisAsetTetapLainnya: "download/v2/generate/aset_tetap_lainnya",
        inventarisKonstruksiDalamPengerjaan:
          "download/v2/generate/konstruksi_dalam_pengerjaan",

        /** PENGATURAN */
      },
      dapodes: {
        statistic: "download/v2/generate",
      },
    },
    import: {
      administrasi: {
        /** UMUM */
        bukuPeraturanDiDesa: "import/import/buku_peraturan_di_desa",
        bukuInventarisKekayaanDesa:
          "import/import/buku_inventaris_kekayaan_desa",
        bukuKeputusanKepalaDesa: "import/import/buku_keputusan_kepala_desa",
        bukuAnggaranPendapatanDanBelanjaDesa:
          "import/import/buku_anggaran_pendapatan_dan_belanja_desa",
        bukuLembaranDesaDanBeritaDesa:
          "import/import/buku_lembaran_desa_dan_berita_desa",
        bukuAgenda: "import/import/buku_agenda",
        bukuTanahDiDesa: "import/import/buku_tanah_di_desa",
        bukuTanahKasDesa: "import/import/buku_tanah_kas_desa",
        bukuEkspedisi: "import/import/buku_ekspedisi",
        bukuAparatPemerintahDesa: "import/import/buku_aparat_pemerintah_desa",
        bukuLetterCTanah: "import/import/letter_c_tanah",
        dataPokokDesa: "import/import/data_pokok_desa",

        /** PENDUDUK */
        bukuIndukPenduduk: "import/import/buku_induk_penduduk",
        bukuPendudukSementara: "import/import/buku_penduduk_sementara",
        bukuMutasiPenduduk: "import/import/buku_mutasi_penduduk",
        bukuKKImage: "import",

        /** KEUANGAN */
        bukuRencanaAnggaranBiaya: "import/import/buku_rencana_anggaran_biaya",
        bukuKasUmum: "import/import/buku_kas_umum",
        bukuKasPembantu: "import/import/buku_kas_pembantu",
        bukuKasPembantuKegiatan: "import/import/buku_kas_pembantu_kegiatan",
        bukuBankDesa: "import/import/buku_bank_desa",

        /** PEMBANGUNAN */
        bukuRencanaKerjaPembangunan:
          "import/import/buku_rencana_kerja_pembangunan",
        bukuKaderPemberdayaanMasyarakat:
          "import/import/buku_kader_pemberdayaan_masyarakat",
        bukuInventarisHasilHasilPembangunan:
          "import/import/buku_inventaris_hasil_hasil_pembangunan",
        bukuKegiatanPembangunan: "import/import/buku_kegiatan_pembangunan",

        /** INVENTARIS KEKAYAAN DESA */
        inventarisTanah: "import/import/tanah",
        inventarisPeralatanDanMesin: "import/import/peralatan_dan_mesin",
        inventarisGedungDanBangunan: "import/import/gedung_dan_bangunan",
        inventarisJalanIrigasiDanJaringan:
          "import/import/jalan_irigasi_dan_jaringan",
        inventarisAsetTetapLainnya: "import/import/aset_tetap_lainnya",
        inventarisKonstruksiDalamPengerjaan:
          "import/import/konstruksi_dalam_pengerjaan",

        dapodes: {
          sdgs: "import/import",
          sdgsNikNotRegister: "import/download_nik",
          sdgsImportValidate: "import/validate/sdgs",
          sdgsImportDownload: "import/downloadNewData",
          sdgsImportReplacer: "import/replace/sdgs",
        },
      },
    },
    sdgs: "/apps/sdgs",
    sdgsAccount: {
      checkLogin: "/adm-location/sdgsAccount/check_login",
    },
    admLocation: {
      province: "/location/sikersa/spatial/province",
      city: "/location/sikersa/spatial/kabupaten",
      district: "/location/sikersa/spatial/kecamatan",
      subdistrict: "/location/sikersa/spatial/desa",
      detailProvince: "/adm-location/province/detailProvince",
      detailCity: "/adm-location/city/detailCity",
      detailDistrict: "/adm-location/district/detailDistrict",
      detailSubdistrict: "/adm-location/subdistrict/detailSubdistrict",
    },
    logger: {
      store: "logger/logger/store",
    },
    preview: {
      surat: "download/v1/preview",
    },
    analytics: {
      SdgsKeluarga: {
        JumlahKK: "analytics/SdgsKeluarga/JumlahKK",
        JumlahKKBerdasarkanRW: "analytics/SdgsKeluarga/JumlahKKBerdasarkanRW",
        JumlahKKBerdasarkanJenisLantaiTempatTinggal:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanJenisLantaiTempatTinggal",
        JumlahKKBerdasarkanStatusLahanTempatTinggal:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanStatusLahanTempatTinggal",
        JumlahKKBerdasarkanDindingSebagianBesarRumah:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanDindingSebagianBesarRumah",
        JumlahKKBerdasarkanEnergiUntukMemasak:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanEnergiUntukMemasak",
        JumlahKKBerdasarkanPeneranganRumah:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanPeneranganRumah",
        JumlahKKBerdasarkanFasilitasMCK:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanFasilitasMCK",
        JumlahKKBerdasarkanTempatPembuanganSampah:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanTempatPembuanganSampah",
        JumlahKKBerdasarkanSumberAirMinumTerbanyak:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanSumberAirMinumTerbanyak",
        JumlahKKBerdasarkanAirMandiTerbanyak:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanAirMandiTerbanyak",
        JumlahKKBerdasarkanKondisiRumah:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanKondisiRumah",
        JumlahKKBerdasarkanPemanfaatProgramPemerintah:
          "analytics/SdgsKeluarga/JumlahKKBerdasarkanPemanfaatProgramPemerintah",
      },
      SdgsIndividu: {
        JumlahRT: "analytics/SdgsIndividu/JumlahRT",
        JumlahRW: "analytics/SdgsIndividu/JumlahRW",
        JumlahPendudukBerdasarkanStatusPerkawinan:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanStatusPerkawinan",
        JumlahPendudukBerdasarkanAgama:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanAgama",
        JumlahPendudukBerdasarkanKewarganegaraan:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanKewarganegaraan",
        JumlahPendudukBerdasarkanKondisiPekerjaan:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanKondisiPekerjaan",
        JumlahPendudukBerdasarkanPekerjaanUtama:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanPekerjaanUtama",
        JumlahPendudukBerdasarkanSumberPenghasilan:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanSumberPenghasilan",
        JumlahPendudukBerdasarkanJaminanSosialKetenagakerjaan:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanJaminanSosialKetenagakerjaan",
        JumlahPendudukBerdasarkanJaminanSosialKesehatan:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanJaminanSosialKesehatan",
        JumlahPendudukBerdasarkanPendidikanTertinggiYangDItamatkan:
          "analytics/SdgsIndividu/JumlahPendudukBerdasarkanPendidikanTertinggiYangDItamatkan",
        JumlahPenduduk: "analytics/SdgsIndividu/JumlahPenduduk",
        JumlahNIKBerdasarkanRW: "analytics/SdgsIndividu/JumlahNIKBerdasarkanRW",
        JumlahNIKBerdasarkanJenisKelamin:
          "analytics/SdgsIndividu/JumlahNIKBerdasarkanJenisKelamin",
        JumlahNIKBerdasarkanKategoriUmurDanJenisKelamin:
          "analytics/SdgsIndividu/JumlahNIKBerdasarkanKategoriUmurDanJenisKelamin",
      },
    },
    landingPage: "/apps/landingPage",
    manajemenSurat: "/apps/ManagementSurat",
  }
}
