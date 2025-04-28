import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganPernahNikah {
  _id: any
  umum: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    jenis_kelamin: string
    kewarganegaraan: string
    agama: string
    pekerjaan: string
    alamat_rumah: string
  }
  pasangan: {
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    jenis_kelamin: string
    kewarganegaraan: string
    agama: string
    pekerjaan: string
    alamat_rumah: string
  }
  perkawinan: {
    nomor_kk: string
    hari_pernikahan: string
    tanggal_pernikahan: string
    lokasi_pernikahan: string
    keperluan: string
  }
  status: string
}

export const SuratKeteranganPernahNikahField: ISuratKeteranganPernahNikah = {
  _id: "pk",
  umum: {
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    alamat_rumah: "",
  },
  pasangan: {
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    alamat_rumah: "",
  },
  perkawinan: {
    nomor_kk: "",
    hari_pernikahan: "",
    tanggal_pernikahan: "",
    lokasi_pernikahan: "",
    keperluan: "",
  },
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganPernahNikah }
