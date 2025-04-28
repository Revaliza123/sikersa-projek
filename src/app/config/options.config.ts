export const OPTIONS_ICON_LIBRARY = () => {
  return [{ label: "Font Awesome", value: "fontawesome" }]
}

export const OPTIONS_ICON_TYPE = () => {
  return [
    { label: "Solid", value: "solid" },
    { label: "Regular", value: "regular" },
    { label: "Light", value: "light" },
    { label: "Duotone", value: "duotone" },
  ]
}

export const OPTIONS_COLOR_THEME = () => [
  { label: "Enamel Blue", name: "enamel-blue", color: "#5E5CE6" },
  { label: "Red", name: "red", color: "#F1416C" },
  { label: "Orange", name: "orange", color: "#F37916" },
  { label: "Green", name: "green", color: "#60BC57" },
  { label: "Blue", name: "blue", color: "#6F51FF" },
]

export const OPTIONS_GENDER = () => [
  { label: "Laki-Laki", value: "Laki-Laki" },
  { label: "Perempuan", value: "Perempuan" },
]

export const OPTIONS_ZONA_WAKTU = () => [
  { label: "WIB", value: "WIB" },
  { label: "WITA", value: "WITA" },
  { label: "WIT", value: "WIT" },
]

export const OPTIONS_HARI = () => [
  { label: "Senin", value: "Senin" },
  { label: "Selasa", value: "Selasa" },
  { label: "Rabu", value: "Rabu" },
  { label: "Kamis", value: "Kamis" },
  { label: "Jumat", value: "Jumat" },
  { label: "Sabtu", value: "Sabtu" },
  { label: "Minggu", value: "Minggu" },
]

export const OPTIONS_AGE_GROUP = () => [
  {
    label: "<17 tahun",
    value: JSON.stringify({
      range: {
        end: 17,
        field: "umur",
        start: 0,
      },
    }),
  },
  {
    label: "17 - 21 tahun",
    value: JSON.stringify({
      range: {
        end: 21,
        field: "umur",
        start: 17,
      },
    }),
  },
  {
    label: "22 - 30 tahun",
    value: JSON.stringify({
      range: {
        end: 30,
        field: "umur",
        start: 22,
      },
    }),
  },
  {
    label: "31 - 40 tahun",
    value: JSON.stringify({
      range: {
        end: 40,
        field: "umur",
        start: 31,
      },
    }),
  },

  {
    label: "41 - 55 tahun",
    value: JSON.stringify({
      range: {
        end: 45,
        field: "umur",
        start: 41,
      },
    }),
  },
  {
    label: "56 - 64 tahun",
    value: JSON.stringify({
      range: {
        end: 64,
        field: "umur",
        start: 56,
      },
    }),
  },
  {
    label: ">65 tahun",
    value: JSON.stringify({
      range: {
        end: 1000,
        field: "umur",
        start: 65,
      },
    }),
  },
]

export const OPTIONS_FONT = () => [
  { label: "Mini", value: "mini" },
  { label: "Tiny", value: "tiny" },
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
  { label: "Big", value: "big" },
  { label: "Huge", value: "huge" },
]

export const OPTION_PAGING_LIMIT = () => [
  { label: "10", value: 10 },
  { label: "15", value: 15 },
  { label: "20", value: 20 },
  { label: "25", value: 25 },
  { label: "50", value: 50 },
]

export const OPTIONS_PRODESKEL_WAJIB_PAJAK = () => [
  {
    label: "Wajib Pajak Badan/Perusahaan",
    value: "Wajib Pajak Badan/Perusahaan",
  },
  {
    label: "Wajib Pajak Bumi dan Bangunan",
    value: "Wajib Pajak Bumi dan Bangunan",
  },
  {
    label: "Wajib Pajak Kendaraan Bermotor",
    value: "Wajib Pajak Kendaraan Bermotor",
  },
  {
    label: "Wajib Pajak Penghasilan Perorangan",
    value: "Wajib Pajak Penghasilan Perorangan",
  },
  { label: "Wajib Retribusi Keamanan", value: "Wajib Retribusi Keamanan" },
  { label: "Wajib Retribusi Kebersihan", value: "Wajib Retribusi Kebersihan" },
]

export const OPTIONS_PRODESKEL_LEMBAGA_PEMERINTAH = () => [
  { label: "Anggota BPD", value: "Anggota BPD" },
  {
    label: "Kepala Desa/LurahKepala Dusun/Lingkungan",
    value: "Kepala Desa/LurahKepala Dusun/Lingkungan",
  },
  { label: "Kepala Urusan", value: "Kepala Urusan" },
  { label: "Ketua BPD", value: "Ketua BPD" },
  {
    label: "Sekretaris BPDSekretaris Desa/Kelurahan",
    value: "Sekretaris BPDSekretaris Desa/Kelurahan",
  },
  { label: "Staf Desa/Kelurahan", value: "Staf Desa/Kelurahan" },
  { label: "Wakil Ketua BPD", value: "Wakil Ketua BPD" },
]

export const OPTIONS_PRODESKEL_LEMBAGA_KEMASYARAKATAN = () => [
  { label: "Anggota Karang Taruna", value: "Anggota Karang Taruna" },
  {
    label: "Anggota Lembaga Gotong royong",
    value: "Anggota Lembaga Gotong royong",
  },
  { label: "Anggota LKMD/K/LPM", value: "Anggota LKMD/K/LPM" },
  {
    label: "Anggota Organisasi Bapak-bapak",
    value: "Anggota Organisasi Bapak-bapak",
  },
  {
    label: "Anggota Organisasi keagamaan",
    value: "Anggota Organisasi keagamaan",
  },
  {
    label: "Anggota Organisasi Kelompok Tani/Nelayan",
    value: "Anggota Organisasi Kelompok Tani/Nelayan",
  },
  {
    label: "Anggota organisasi pemirsa/pendengar",
    value: "Anggota organisasi pemirsa/pendengar",
  },
  {
    label: "Anggota organisasi pencinta alam",
    value: "Anggota organisasi pencinta alam",
  },
  {
    label: "Anggota organisasi pengembangan ilmu pengetaahuan",
    value: "Anggota organisasi pengembangan ilmu pengetaahuan",
  },
  {
    label: "Anggota organisasi pensiunan",
    value: "Anggota organisasi pensiunan",
  },
  {
    label: "Anggota Organisasi Perempuan",
    value: "Anggota Organisasi Perempuan",
  },
  {
    label: "Anggota Organisasi Profesi guru",
    value: "Anggota Organisasi Profesi guru",
  },
  {
    label: "Anggota Organisasi profesi wartawan",
    value: "Anggota Organisasi profesi wartawan",
  },
  {
    label: "Anggota Organisasi profesi/tenaga medis",
    value: "Anggota Organisasi profesi/tenaga medis",
  },
  { label: "Anggota Pengurus RT", value: "Anggota Pengurus RT" },
  { label: "Anggota Pengurus RW", value: "Anggota Pengurus RW" },
  { label: "Anggota PKK", value: "Anggota PKK" },
  {
    label: "Anggota Satgas Kebakaran",
    value: "Anggota Satgas Kebakaran",
  },
  {
    label: "Anggota Satgas Kebersihan",
    value: "Anggota Satgas Kebersihan",
  },
  {
    label: "Anggota Tim Penanggulangan Bencana",
    value: "Anggota Tim Penanggulangan Bencana",
  },
  { label: "Anggota yayasan", value: "Anggota yayasan" },
  { label: "Pemilik yayasan", value: "Pemilik yayasan" },
  { label: "Pengurus Hansip/Linmas", value: "Pengurus Hansip/Linmas" },
  { label: "Pengurus Karang Taruna", value: "Pengurus Karang Taruna" },
  { label: "Pengurus Lembaga Adat", value: "Pengurus Lembaga Adat" },
  {
    label: "Pengurus Lembaga Gotong royong",
    value: "Pengurus Lembaga Gotong royong",
  },
  {
    label: "Pengurus lembaga pencinta alam",
    value: "Pengurus lembaga pencinta alam",
  },
  { label: "Pengurus LKMD/K/LPM", value: "Pengurus LKMD/K/LPM" },
  {
    label: "Pengurus Organisasi Bapak-bapak",
    value: "Pengurus Organisasi Bapak-bapak",
  },
  {
    label: "Pengurus Organisasi keagamaan",
    value: "Pengurus Organisasi keagamaan",
  },
  {
    label: "Pengurus Organisasi Kelompok Tani/Nelayan",
    value: "Pengurus Organisasi Kelompok Tani/Nelayan",
  },
  {
    label: "Pengurus organisasi pemirsa/pendengar",
    value: "Pengurus organisasi pemirsa/pendengar",
  },
  {
    label: "Pengurus organisasi pengembangan ilmu pengetahuan",
    value: "Pengurus organisasi pengembangan ilmu pengetahuan",
  },
  {
    label: "Pengurus organisasi pensiunan",
    value: "Pengurus organisasi pensiunan",
  },
  {
    label: "Pengurus Organisasi Perempuan",
    value: "Pengurus Organisasi Perempuan",
  },
  {
    label: "Pengurus Organisasi profesi dokter/tenaga medis",
    value: "Pengurus Organisasi profesi dokter/tenaga medis",
  },
  {
    label: "Pengurus Organisasi Profesi guru",
    value: "Pengurus Organisasi Profesi guru",
  },
  {
    label: "Pengurus Organisasi profesi wartawan",
    value: "Pengurus Organisasi profesi wartawan",
  },
  { label: "Pengurus PKK", value: "Pengurus PKK" },
  { label: "Pengurus Poskamling", value: "Pengurus Poskamling" },
  {
    label: "Pengurus Posko Penanggulangan Bencana",
    value: "Pengurus Posko Penanggulangan Bencana",
  },
  { label: "Pengurus Posyandu", value: "Pengurus Posyandu" },
  { label: "Pengurus Posyantekdes", value: "Pengurus Posyantekdes" },
  { label: "Pengurus RT", value: "Pengurus RT" },
  { label: "Pengurus RW", value: "Pengurus RW" },
  {
    label: "Pengurus Satgas Kebakaran",
    value: "Pengurus Satgas Kebakaran",
  },
  {
    label: "Pengurus Satgas Kebersihan",
    value: "Pengurus Satgas Kebersihan",
  },
  { label: "Pengurus yayasan", value: "Pengurus yayasan" },
]

export const OPTIONS_PRODESKEL_LEMBAGA_EKONOMI = () => [
  { label: "Angkutan Darat", value: "Angkutan Darat" },
  { label: "Angkutan Laut", value: "Angkutan Laut" },
  { label: "Angkutan Sungai", value: "Angkutan Sungai" },
  { label: "Angkutan Udara", value: "Angkutan Udara" },
  { label: "Asrama", value: "Asrama" },
  {
    label: "Bank Perkreditan Rakyat",
    value: "Bank Perkreditan Rakyat",
  },
  { label: "Bioskop", value: "Bioskop" },
  { label: "Film Keliling", value: "Film Keliling" },
  { label: "Group Lawak", value: "Group Lawak" },
  { label: "Group Musik/Band", value: "Group Musik/Band" },
  {
    label: "Group Vokal/Paduan Suara",
    value: "Group Vokal/Paduan Suara",
  },
  { label: "Home Stay", value: "Home Stay" },
  { label: "Hotel", value: "Hotel" },
  {
    label: "Industri Alat Pertanian",
    value: "Industri Alat Pertanian",
  },
  {
    label: "Industri Alat Rumah Tangga",
    value: "Industri Alat Rumah Tangga",
  },
  { label: "Industri Farmasi", value: "Industri Farmasi" },
  { label: "Industri Karoseri", value: "Industri Karoseri" },
  {
    label: "Industri Kerajinan Tangan",
    value: "Industri Kerajinan Tangan",
  },
  { label: "Industri Pakaian", value: "Industri Pakaian" },
  {
    label: "Industri Perakitan Elektronik",
    value: "Industri Perakitan Elektronik",
  },
  {
    label: "Industri Usaha Bahan Bangunan",
    value: "Industri Usaha Bahan Bangunan",
  },
  { label: "Industri Usaha Makanan", value: "Industri Usaha Makanan" },
  { label: "Jaipongan", value: "Jaipongan" },
  {
    label: "Jasa Ekspedisi/Pengiriman Barang",
    value: "Jasa Ekspedisi/Pengiriman Barang",
  },
  { label: "Kelompok Simpan Pinjam", value: "Kelompok Simpan Pinjam" },
  { label: "Konsultan Manajemen", value: "Konsultan Manajemen" },
  { label: "Konsultan Teknis", value: "Konsultan Teknis" },
  { label: "Kontrakan Rumah", value: "Kontrakan Rumah" },
  { label: "Koperasi", value: "Koperasi" },
  {
    label: "Lembaga Keuangan Bukan Bank",
    value: "Lembaga Keuangan Bukan Bank",
  },
  {
    label: "Lembaga Perkreditan Rakyat",
    value: "Lembaga Perkreditan Rakyat",
  },
  { label: "Losmen", value: "Losmen" },
  { label: "Mess", value: "Mess" },
  { label: "Notaris", value: "Notaris" },
  {
    label: "Pedagang Pengumpul/Tengkulak",
    value: "Pedagang Pengumpul/Tengkulak",
  },
  { label: "Pegadaian", value: "Pegadaian" },
  {
    label: "Pejabat Pembuat Akta Tanah",
    value: "Pejabat Pembuat Akta Tanah",
  },
  { label: "Pengacara/Advokat", value: "Pengacara/Advokat" },
  { label: "Pengijon", value: "Pengijon" },
  { label: "Pengolahan Kayu", value: "Pengolahan Kayu" },
  {
    label: "Penitipan Kendaraan Bermotor",
    value: "Penitipan Kendaraan Bermotor",
  },
  { label: "Persewaan Kamar", value: "Persewaan Kamar" },
  { label: "Restoran", value: "Restoran" },
  { label: "Sandiwara/Drama", value: "Sandiwara/Drama" },
  { label: "Toko/ Swalayan", value: "Toko/ Swalayan" },
  { label: "Town House", value: "Town House" },
  { label: "Tukang Batu", value: "Tukang Batu" },
  { label: "Tukang Besi", value: "Tukang Besi" },
  { label: "Tukang Cukur", value: "Tukang Cukur" },
  { label: "Tukang Jahit/Bordir", value: "Tukang Jahit/Bordir" },
  { label: "Tukang Kayu", value: "Tukang Kayu" },
  { label: "Tukang Pijat/Urut", value: "Tukang Pijat/Urut" },
  {
    label: "Tukang Service Elektronik",
    value: "Tukang Service Elektronik",
  },
  { label: "Tukang Sumur", value: "Tukang Sumur" },
  { label: "Tukang Sumur", value: "Tukang Sumur" },
  {
    label: "Unit Usaha Simpan Pinjam",
    value: "Unit Usaha Simpan Pinjam",
  },
  {
    label: "Usaha Air Minum Dalam Kemasan",
    value: "Usaha Air Minum Dalam Kemasan",
  },
  { label: "Usaha Asuransi", value: "Usaha Asuransi" },
  { label: "Usaha Minuman", value: "Usaha Minuman" },
  { label: "Usaha Pasar Harian", value: "Usaha Pasar Harian" },
  {
    label: "Usaha Pasar Hasil Bumi Dan Tambang",
    value: "Usaha Pasar Hasil Bumi Dan Tambang",
  },
  { label: "Usaha Pasar Mingguan", value: "Usaha Pasar Mingguan" },
  { label: "Usaha Pasar Ternak", value: "Usaha Pasar Ternak" },
  {
    label: "Usaha Pengecer Gas Dan Bahan Bakar Minyak",
    value: "Usaha Pengecer Gas Dan Bahan Bakar Minyak",
  },
  {
    label: "Usaha Pengolahan dan Penjualan Hasil Hutan",
    value: "Usaha Pengolahan dan Penjualan Hasil Hutan",
  },
  {
    label: "Usaha Penyewaan Alat Pesta",
    value: "Usaha Penyewaan Alat Pesta",
  },
  {
    label: "Usaha Perdagangan Antar Pulau",
    value: "Usaha Perdagangan Antar Pulau",
  },
  { label: "Usaha Perikanan", value: "Usaha Perikanan" },
  { label: "Usaha Perkebunan", value: "Usaha Perkebunan" },
  {
    label: "Usaha Persewaan Tenaga Listrik",
    value: "Usaha Persewaan Tenaga Listrik",
  },
  { label: "Usaha Peternakan", value: "Usaha Peternakan" },
  { label: "Villa", value: "Villa" },
  {
    label: "Warung Kelontongan/Kios",
    value: "Warung Kelontongan/Kios",
  },
  { label: "Wayang Orang/Golek", value: "Wayang Orang/Golek" },
  { label: "Wisma", value: "Wisma" },
]

export const OPTIONS_PRODESKEL_AKSEPTOR_KB = () => [
  { label: "KB Alamiah/Kalender", value: "KB Alamiah/Kalender" },
  { label: "Kondom", value: "Kondom" },
  { label: "Obat Tradisional", value: "Obat Tradisional" },
  { label: "Pil", value: "Pil" },
  { label: "Spiral", value: "Spiral" },
  { label: "Suntik", value: "Suntik" },
  { label: "Susuk KB (Implant)", value: "Susuk KB (Implant)" },
  {
    label: "Tidak Menggunakan kontrasepsi",
    value: "Tidak Menggunakan kontrasepsi",
  },
  { label: "Tidak Menjawab", value: "Tidak Menjawab" },
  { label: "Tubektomi", value: "Tubektomi" },
  { label: "Vasektomi", value: "Vasektomi" },
]

export const OPTIONS_PRODESKEL_MATA_PENCAHARIAN_POKOK = () => [
  {
    label: "Ahli Pengobatan Alternatif",
    value: "Ahli Pengobatan Alternatif",
  },
  { label: "Akuntan", value: "Akuntan" },
  {
    label: "Anggota kabinet kementrian",
    value: "Anggota kabinet kementrian",
  },
  { label: "Anggota Legislatif", value: "Anggota Legislatif" },
  {
    label: "Anggota mahkamah konstitusi",
    value: "Anggota mahkamah konstitusi",
  },
  { label: "Apoteker", value: "Apoteker" },
  { label: "Arsitektur/Desainer", value: "Arsitektur/Desainer" },
  { label: "Belum Bekerja", value: "Belum Bekerja" },
  { label: "Biarawati", value: "Biarawati" },
  { label: "Bidan swasta", value: "Bidan swasta" },
  { label: "Bupati/walikota", value: "Bupati/walikota" },
  { label: "Buruh Harian Lepas", value: "Buruh Harian Lepas" },
  {
    label: "Buruh jasa perdagangan hasil bumi",
    value: "Buruh jasa perdagangan hasil bumi",
  },
  { label: "Buruh Migran", value: "Buruh Migran" },
  { label: "Buruh Tani", value: "Buruh Tani" },
  {
    label: "Buruh usaha hotel dan penginapan lainnya",
    value: "Buruh usaha hotel dan penginapan lainnya",
  },
  {
    label: "Buruh usaha jasa hiburan dan pariwisata",
    value: "Buruh usaha jasa hiburan dan pariwisata",
  },
  {
    label: "Buruh usaha jasa informasi dan komunikasi",
    value: "Buruh usaha jasa informasi dan komunikasi",
  },
  {
    label: "Buruh usaha jasa transportasi dan perhubungan",
    value: "Buruh usaha jasa transportasi dan perhubungan",
  },
  { label: "Dokter swasta", value: "Dokter swasta" },
  { label: "Dosen swasta", value: "Dosen swasta" },
  { label: "Dukun Tradisional", value: "Dukun Tradisional" },
  {
    label: "Dukun/paranormal/supranatural",
    value: "Dukun/paranormal/supranatural",
  },
  { label: "Duta besar", value: "Duta besar" },
  { label: "Gubernur", value: "Gubernur" },
  { label: "Guru swasta", value: "Guru swasta" },
  { label: "Ibu Rumah Tangga", value: "Ibu Rumah Tangga" },
  {
    label: "Jasa Konsultansi Manajemen dan Teknis",
    value: "Jasa Konsultansi Manajemen dan Teknis",
  },
  {
    label: "Jasa pengobatan alternatif",
    value: "Jasa pengobatan alternatif",
  },
  {
    label: "Jasa penyewaan peralatan pesta",
    value: "Jasa penyewaan peralatan pesta",
  },
  { label: "Juru Masak", value: "Juru Masak" },
  { label: "Karyawan Honorer", value: "Karyawan Honorer" },
  {
    label: "Karyawan Perusahaan Pemerintah",
    value: "Karyawan Perusahaan Pemerintah",
  },
  {
    label: "Karyawan Perusahaan Swasta",
    value: "Karyawan Perusahaan Swasta",
  },
  { label: "Kepala Daerah", value: "Kepala Daerah" },
  {
    label: "Konsultan Manajemen dan Teknis",
    value: "Konsultan Manajemen dan Teknis",
  },
  { label: "Kontraktor", value: "Kontraktor" },
  { label: "Montir", value: "Montir" },
  { label: "Nelayan", value: "Nelayan" },
  { label: "Notaris", value: "Notaris" },
  {
    label: "Pedagang barang kelontong",
    value: "Pedagang barang kelontong",
  },
  { label: "Pedagang Keliling", value: "Pedagang Keliling" },
  { label: "Pegawai Negeri Sipil", value: "Pegawai Negeri Sipil" },
  { label: "Pelajar", value: "Pelajar" },
  { label: "Pelaut", value: "Pelaut" },
  { label: "Pembantu rumah tangga", value: "Pembantu rumah tangga" },
  { label: "Pemilik perusahaan", value: "Pemilik perusahaan" },
  {
    label: "Pemilik usaha hotel dan penginapan lainnya",
    value: "Pemilik usaha hotel dan penginapan lainnya",
  },
  {
    label: "Pemilik usaha informasi dan komunikasi",
    value: "Pemilik usaha informasi dan komunikasi",
  },
  {
    label: "Pemilik usaha jasa hiburan dan pariwisata",
    value: "Pemilik usaha jasa hiburan dan pariwisata",
  },
  {
    label: "Pemilik usaha jasa transportasi dan perhubungan",
    value: "Pemilik usaha jasa transportasi dan perhubungan",
  },
  { label: "Pemilik usaha warung", value: "Pemilik usaha warung" },
  {
    label: "rumah makan dan restoran",
    value: "rumah makan dan restoran",
  },
  { label: "Pemuka Agama", value: "Pemuka Agama" },
  { label: "Pemulung", value: "Pemulung" },
  { label: "Penambang", value: "Penambang" },
  { label: "Peneliti", value: "Peneliti" },
  { label: "Pengacara", value: "Pengacara" },
  { label: "Pengrajin", value: "Pengrajin" },
  {
    label: "Pengrajin industri rumah tangga lainnya",
    value: "Pengrajin industri rumah tangga lainnya",
  },
  { label: "Pengusaha kecil", value: "Pengusaha kecil" },
  { label: "menengah dan besar", value: "menengah dan besar" },
  {
    label: "Pengusaha perdagangan hasil bumi",
    value: "Pengusaha perdagangan hasil bumi",
  },
  { label: "Penyiar radio", value: "Penyiar radio" },
  { label: "Perangkat Desa", value: "Perangkat Desa" },
  { label: "Perawat swasta", value: "Perawat swasta" },
  { label: "Petani", value: "Petani" },
  { label: "Peternak", value: "Peternak" },
  { label: "Pialang", value: "Pialang" },
  { label: "Pilot", value: "Pilot" },
  { label: "POLRI", value: "POLRI" },
  { label: "Presiden", value: "Presiden" },
  { label: "Pskiater/Psikolog", value: "Pskiater/Psikolog" },
  { label: "Purnawirawan/Pensiunan", value: "Purnawirawan/Pensiunan" },
  { label: "Satpam/Security", value: "Satpam/Security" },
  { label: "Seniman/artis", value: "Seniman/artis" },
  { label: "Sopir", value: "Sopir" },
  {
    label: "Tidak Mempunyai Pekerjaan Tetap",
    value: "Tidak Mempunyai Pekerjaan Tetap",
  },
  { label: "TNI", value: "TNI" },
  { label: "Tukang Anyaman", value: "Tukang Anyaman" },
  { label: "Tukang Batu", value: "Tukang Batu" },
  { label: "Tukang Cuci", value: "Tukang Cuci" },
  { label: "Tukang Cukur", value: "Tukang Cukur" },
  { label: "Tukang Gigi", value: "Tukang Gigi" },
  { label: "Tukang Jahit", value: "Tukang Jahit" },
  { label: "Tukang Kayu", value: "Tukang Kayu" },
  { label: "Tukang Kue", value: "Tukang Kue" },
  { label: "Tukang Las", value: "Tukang Las" },
  { label: "Tukang Listrik", value: "Tukang Listrik" },
  { label: "Tukang Rias", value: "Tukang Rias" },
  { label: "Tukang Sumur", value: "Tukang Sumur" },
  {
    label: "Usaha jasa pengerah tenaga kerja",
    value: "Usaha jasa pengerah tenaga kerja",
  },
  { label: "Wakil bupati", value: "Wakil bupati" },
  { label: "Wakil Gubernur", value: "Wakil Gubernur" },
  { label: "Wakil presiden", value: "Wakil presiden" },
  { label: "Wartawan", value: "Wartawan" },
  { label: "Wiraswasta", value: "Wiraswasta" },
]

export const OPTIONS_BULAN = () => [
  { value: 1, label: "Januari" },
  { value: 2, label: "Februari" },
  { value: 3, label: "Maret" },
  { value: 4, label: "April" },
  { value: 5, label: "Mei" },
  { value: 6, label: "Juni" },
  { value: 7, label: "Juli" },
  { value: 8, label: "Agustus" },
  { value: 9, label: "September" },
  { value: 10, label: "Oktober" },
  { value: 11, label: "November" },
  { value: 12, label: "Desember" },
]

export const OPTIONS_BULAN_OBJECT: any = {
  1: { value: 1, label: "Januari" },
  2: { value: 2, label: "Februari" },
  3: { value: 3, label: "Maret" },
  4: { value: 4, label: "April" },
  5: { value: 5, label: "Mei" },
  6: { value: 6, label: "Juni" },
  7: { value: 7, label: "Juli" },
  8: { value: 8, label: "Agustus" },
  9: { value: 9, label: "September" },
  10: { value: 10, label: "Oktober" },
  11: { value: 11, label: "November" },
  12: { value: 12, label: "Desember" },
}

export const OPTIONS_HUBUNGAN_KELUARGA = () => [
  { value: "Adik", label: "Adik" },
  { value: "Cucu", label: "Cucu" },
  { value: "Kakek", label: "Kakek" },
  { value: "Mertua", label: "Mertua" },
  { value: "Tante", label: "Tante" },
  { value: "Anak Angkat", label: "Anak Angkat" },
  { value: "Famili lain", label: "Famili lain" },
  { value: "Kepala Keluarga", label: "Kepala Keluarga" },
  { value: "Nenek", label: "Nenek" },
  { value: "Teman", label: "Teman" },
  { value: "Anak Kandung", label: "Anak Kandung" },
  { value: "Ibu", label: "Ibu" },
  { value: "Keponakan", label: "Keponakan" },
  { value: "Paman", label: "Paman" },
  { value: "Anak Tiri", label: "Anak Tiri" },
  { value: "Istri", label: "Istri" },
  { value: "Lainnya", label: "Lainnya" },
  { value: "Sepupu", label: "Sepupu" },
  { value: "Ayah", label: "Ayah" },
  { value: "Kakak", label: "Kakak" },
  { value: "Menantu", label: "Menantu" },
  { value: "Suami", label: "Suami" },
]

export const OPTIONS_KODE_PENGGUNA_BARANG = () => [
  { value: "01", label: "PEMERINTAH DESA" },
  { value: "02", label: "BADAN PERMUSYAWATAN DESA" },
  { value: "03", label: "PKK" },
  { value: "04", label: "LKMD" },
  { value: "05", label: "KARANG TARUNA" },
  { value: "06", label: "RW" },
]
