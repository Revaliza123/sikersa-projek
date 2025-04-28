import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratPernyataanTIdakKerjaDanTidakBerpenghasilan {
  _id: string
  nomor_surat: string
  nik: string
  nama_lengkap: string
  alamat_rumah: string
  pernyataan: string
  status: string
}

export const SuratPernyataanTidakBekerjaDanTIdakBerpenghasilanField: ISuratPernyataanTIdakKerjaDanTidakBerpenghasilan =
  {
    _id: "pk",
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    alamat_rumah: "",
    pernyataan: "",
    status: "diajukan",
    ...initialLampiranExtend,
  }

export type { ISuratPernyataanTIdakKerjaDanTidakBerpenghasilan }
