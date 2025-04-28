export interface ISuratKeterangPindahWNIAntarKecamatanAnggotaKeluarga {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  kedudukan_dalam_keluarga: string
}
export interface ISuratKeterangPindahWNIAntarKecamatan {
  daerah_asal: {
    nomor_surat: string
    nomor_kk: string
    nama_kepala_keluarga: string
    alamat_rumah: string
    rt: string
    rw: string
    provinsi: string
    kabupaten: string
    kecamatan: string
    desa_kelurahan: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: string
    agama: string
    tempat_lahir: string
    tanggal_lahir: string
  }
  pindah_ke: {
    alasan_pindah: string
    tanggal_pindah: string
    alamat_tujuan: string
    provinsi: string
    kabupaten: string
    kecamatan: string
    desa_kelurahan: string
    klarifikasi_pindah: string
    jenis_kepindahan: string
    status_kk_tidak_pindah: string
    status_kk_pindah: string
    keluarga_yang_pindah: number
  }
  pengikut: ISuratKeterangPindahWNIAntarKecamatanAnggotaKeluarga[]
}

export const SuratKeterangPindahWNIAntarKecamatanFields: ISuratKeterangPindahWNIAntarKecamatan =
  {
    daerah_asal: {
      nomor_surat: "",
      nomor_kk: "",
      nama_kepala_keluarga: "",
      alamat_rumah: "",
      rt: "",
      rw: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      desa_kelurahan: "",
      nik: "",
      nama_lengkap: "",
      jenis_kelamin: "",
      agama: "",
      tempat_lahir: "",
      tanggal_lahir: "",
    },
    pindah_ke: {
      alasan_pindah: "",
      tanggal_pindah: "",
      alamat_tujuan: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      desa_kelurahan: "",
      klarifikasi_pindah: "",
      jenis_kepindahan: "",
      status_kk_tidak_pindah: "",
      status_kk_pindah: "",
      keluarga_yang_pindah: 0,
    },
    pengikut: [
      {
        nik: "",
        nama_lengkap: "",
        jenis_kelamin: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        kedudukan_dalam_keluarga: "",
      },
    ],
  }
