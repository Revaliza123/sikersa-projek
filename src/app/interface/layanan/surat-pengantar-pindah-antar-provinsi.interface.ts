interface ISuratPengantarPindahAntarProvinsi {
  _id: string
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
    tanggal_lahir: Date
  }
  pindah_ke: {
    alasan_pindah: string
    tanggal_pindah: Date
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
  pengikut: IPengikut[]
}

export const SuratPengantarPindahAntarProvinsiField: ISuratPengantarPindahAntarProvinsi =
  {
    _id: "pk",
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
      tanggal_lahir: new Date(),
    },
    pindah_ke: {
      alasan_pindah: "",
      tanggal_pindah: new Date(),
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

interface IPengikut {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  kedudukan_dalam_keluarga: string
}

export type { ISuratPengantarPindahAntarProvinsi }
