interface ISuratKeteranganPindah {
  _id: any
  nomor_surat: string
  umum: {
    nik: string
    nama: string
    jenis_kelamin: string
    tempat_lahir: string
    tanggal_lahir: string
    nomor_kk: string
    kewarganegaraan: string
    agama: string
    status_perkawinan: string
    pekerjaan: string
    pendidikan_terakhir: string
    alamat_asal: string
  }
  pindah_ke: {
    alamat_pindah: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    tanggal_pindah: string
    alasan_pindah: string
  }
  pengikut: IPengikut[]
}

interface IPengikut {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
}

export const SuratKeteranganPindahField: ISuratKeteranganPindah = {
  _id: undefined,
  nomor_surat: "",
  umum: {
    nik: "",
    nama: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    nomor_kk: "",
    kewarganegaraan: "",
    agama: "",
    status_perkawinan: "",
    pekerjaan: "",
    pendidikan_terakhir: "",
    alamat_asal: "",
  },
  pindah_ke: {
    alamat_pindah: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    tanggal_pindah: "",
    alasan_pindah: "",
  },
  pengikut: [],
}

export type { ISuratKeteranganPindah }
