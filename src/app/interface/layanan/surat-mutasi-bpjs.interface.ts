import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratMutasiBpjs {
  _id: string
  pemohon: {
    nomor_surat: string
    lampiran: string
    hal: string
    nik: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: Date
    jenis_kelamin: string
    pekerjaan: string
    alamat_rumah: string
    keperluan: string
  }
  anggota_keluarga: IAnggotaKeluarga[]
  status: "diajukan"
}

export const SuratMutasiBpjsField: ISuratMutasiBpjs = {
  _id: "pk",
  pemohon: {
    nomor_surat: "",
    lampiran: "",
    hal: "",
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    jenis_kelamin: "",
    pekerjaan: "",
    alamat_rumah: "",
    keperluan: "",
  },
  anggota_keluarga: [
    {
      nik: "",
      nama_lengkap: "",
      kedudukan_dalam_keluarga: "",
      nomor_kartu: "",
    },
  ],
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISuratMutasiBpjs }

interface IAnggotaKeluarga {
  nik: string
  nama_lengkap: string
  kedudukan_dalam_keluarga: string
  nomor_kartu: string
}
