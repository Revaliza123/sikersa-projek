import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganIzinOrangTua {
  _id: string
  pemberi_izin: {
    nik: string
    nama_lengkap: string
    jenis_kelamin: string
    tempat_lahir: string
    tanggal_lahir: Date
    kewarganegaraan: string
    agama: string
    pekerjaan: string
    alamat_rumah: string
    selaku: string
    keperluan: string
  }
  diberi_izin: {
    nik: string
    nama_lengkap: string
    jenis_kelamin: string
    tempat_lahir: string
    tanggal_lahir: Date
    kewarganegaraan: string
    agama: string
    pekerjaan: string
    alamat_rumah: string
  }
  status: string
}

export const SuratKeteranganIzinOrangTuaField: ISuratKeteranganIzinOrangTua = {
  _id: "pk",
  pemberi_izin: {
    nik: "",
    nama_lengkap: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    alamat_rumah: "",
    selaku: "",
    keperluan: "",
  },
  diberi_izin: {
    nik: "",
    nama_lengkap: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    alamat_rumah: "",
  },
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratKeteranganIzinOrangTua }
