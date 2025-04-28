import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganSpptBelumTerbit {
  _id: any
  nomor_surat: string
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: Date
  pekerjaan: string
  alamat_rumah: string
  luas_tanah: number
  lokasi_tanah: string
  akta_jual_beli: string
  keperluan: string
  status: string
}

export const SuratKeteranganSpptBelumTerbitField: ISuratKeteranganSpptBelumTerbit =
  {
    _id: "pk",
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    pekerjaan: "",
    alamat_rumah: "",
    luas_tanah: 0,
    lokasi_tanah: "",
    akta_jual_beli: "",
    keperluan: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratKeteranganSpptBelumTerbit }
