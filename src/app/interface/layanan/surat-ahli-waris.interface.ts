interface ISuratAhliWaris {
  _id: any
  umum: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: string
    tanggal_meninggal: string
    alamat_meninggal: string
    tanggal_dikuburkan: string
    alamat_dikuburkan: string
  }
  ahli_waris: {
    anggota_ahli_waris: IAnggotaAhliWaris[]
    ahli_waris_yang_diberi_kuasa: string
  }
}

interface IAnggotaAhliWaris {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
}

export const SuratAhliWarisField: ISuratAhliWaris = {
  _id: "pk",
  umum: {
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    jenis_kelamin: "",
    tanggal_meninggal: "",
    alamat_meninggal: "",
    tanggal_dikuburkan: "",
    alamat_dikuburkan: "",
  },
  ahli_waris: {
    anggota_ahli_waris: [],
    ahli_waris_yang_diberi_kuasa: "",
  },
}

export type { ISuratAhliWaris }
