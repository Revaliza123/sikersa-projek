import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganBelumPernahNikah {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  agama: string
  kebangsaan: string
  pekerjaan: string
  alamat_rumah: string
  keperluan: string
  status: string
}
export const SuratKeteranganBelumPernahNikahField: ISuratKeteranganBelumPernahNikah =
  {
    _id: "pk",
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    kebangsaan: "Indonesia",
    pekerjaan: "",
    alamat_rumah: "",
    keperluan: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganBelumPernahNikah }
