import {
  IUploadLampiranExtend,
  initialLampiranExtend,
} from "@app/modules/Layanan/UploadLampiranExtend"

export interface IFormulirPermohonanKKWNIAnggotaKeluarga {
  nik: string
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  agama: string
  pendidikan: string
  pekerjaan: string
  status_perkawinan: string
  kedudukan_dalam_keluarga: string
  kewarganegaraan: string
  nama_ayah_kandung: string
  nama_ibu_kandung: string
  no_paspor: string
  no_kitas: string
}

export interface IFormulirPermohonanKKWNI extends IUploadLampiranExtend {
  _id: string
  umum: {
    nik: string
    nama_kepala_keluarga: string
    alamat_rumah: string
    rt: string
    rw: string
    provinsi: string
    kabupaten: string
    kecamatan: string
    kelurahan_desa: string
    kode_pos: string
  }
  anggota_keluarga: IFormulirPermohonanKKWNIAnggotaKeluarga[]
  status: string
}

export const FormulirPermohonanKKWNIFields: IFormulirPermohonanKKWNI = {
  _id: "pk",
  umum: {
    nik: "",
    nama_kepala_keluarga: "",
    alamat_rumah: "",
    rt: "",
    rw: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan_desa: "",
    kode_pos: "",
  },
  anggota_keluarga: [
    {
      nik: "",
      nama_lengkap: "",
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      agama: "",
      pendidikan: "",
      pekerjaan: "",
      status_perkawinan: "",
      kedudukan_dalam_keluarga: "",
      kewarganegaraan: "",
      nama_ayah_kandung: "",
      nama_ibu_kandung: "",
      no_paspor: "",
      no_kitas: "",
    },
  ],
  status: "diajukan",
  ...initialLampiranExtend,
}
