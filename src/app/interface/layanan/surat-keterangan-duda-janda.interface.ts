interface ISuratKeteranganDudaJanda {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  umum: {
    jenis_kelamin: string
    tempat_lahir: string
    tanggal_lahir: string
    agama: string
    pekerjaan: string
    alamat: string
    nik_pasangan_tedahulu: string
    nama_pasangan_terdahulu: string
    keperluan: string
  }
  perkawinan: {
    akta_perkawinan: string
    nomor_akta_perkawinan: string
    tanggal_perkawinan: string
    lokasi_perkawinan: string
    status_perceraian: string
    akta_perceraian: string
    nomer_akta_perceraian: string
    tanggal_perceraian: string
    lokasi_perceraian: string
    tanggal_kematian: string
    tempat_kematian: string
  }
}

export const SuratKeteranganDudaJandaField: ISuratKeteranganDudaJanda = {
  _id: "pk",
  nomor_surat: "",
  nik: "",
  nama_lengkap: "",
  umum: {
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    pekerjaan: "",
    alamat: "",
    nik_pasangan_tedahulu: "",
    nama_pasangan_terdahulu: "",
    keperluan: "",
  },
  perkawinan: {
    akta_perkawinan: "",
    nomor_akta_perkawinan: "",
    tanggal_perkawinan: "",
    lokasi_perkawinan: "",
    status_perceraian: "",
    akta_perceraian: "",
    nomer_akta_perceraian: "",
    tanggal_perceraian: "",
    lokasi_perceraian: "",
    tanggal_kematian: "",
    tempat_kematian: "",
  },
}

export type { ISuratKeteranganDudaJanda }
