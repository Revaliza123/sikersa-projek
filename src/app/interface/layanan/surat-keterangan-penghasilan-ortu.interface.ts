interface ISuratKeteranganPenghasilanOrtu {
  _id: any
  pemohon: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    jenis_kelamin: string
    pekerjaan: string
    alamat: string
  }
  ayah: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    pekerjaan: string
    alamat: string
  }
  ibu: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    pekerjaan: string
    alamat: string
  }
}

export const SuratKeteranganPenghasilanOrtuField: ISuratKeteranganPenghasilanOrtu =
  {
    _id: "pk",
    pemohon: {
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "",
      pekerjaan: "",
      alamat: "",
    },
    ayah: {
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      pekerjaan: "",
      alamat: "",
    },
    ibu: {
      nik: "",
      nama_lengkap: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      pekerjaan: "",
      alamat: "",
    },
  }

export type { ISuratKeteranganPenghasilanOrtu }
