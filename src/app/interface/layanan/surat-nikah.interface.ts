import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratPengantarNikah {
  _id: any
  nik: string
  nama_lengkap: string
  tempat_lahir: string
  tanggal_lahir: string
  umum: {
    nomor_surat: string
    bin_binti: string
    jenis_kelamin: string
    kewarganegaraan: string
    agama: string
    pekerjaan: string
    dusun: string
    status_perkawinan: string
  }
  ayah: {
    nik: string
    nama_ayah: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    kewarganegaraan: string
    agama: string
    pekerjaan: string
    alamat: string
    yang_bertandatangan: string
  }
  ibu: {
    nik: string
    nama_ibu: string
    nama_lengkap: string
    tempat_lahir: string
    tanggal_lahir: string
    kewarganegaraan: string
    agama: string
    pekerjaan: string
    alamat: string
  }
  calon_suami_istri: {
    nik: string
    nama_calon_suami: string
    nama_calon_istri: string
    bin_binti: string
    pekerjaan: string
    tempat_lahir: string
    tanggal_lahir: string
    kewarganegaraan: string
    agama: string
    alamat: string
  }
  lainnya: {
    tanggal_akad_nikah: string
    tanggal_resepsi: string
    tempat_akad: string
    jam_akad: string
  }
  status: string
  // upload_surat_pengantar_rtrw: string;
  // upload_fotocopy_ktp: string;
  // upload_fotocopy_kk: string;
  // upload_fotocopy_akta_lahir: string;
  // upload_fotocopy_ijazah_terakhir: string;
  // upload_fotocopy_surat_pernyataan_belum_menikah: string;
  // upload_pas_foto_2x3: string;
  // upload_pas_foto_4x6: string;
}

export const SuratNikahField: ISuratPengantarNikah = {
  _id: "pk",
  nik: "",
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  umum: {
    nomor_surat: "",
    bin_binti: "",
    jenis_kelamin: "",
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    dusun: "",
    status_perkawinan: "",
  },
  ayah: {
    nik: "",
    nama_ayah: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    alamat: "",
    yang_bertandatangan: "",
  },
  ibu: {
    nik: "",
    nama_ibu: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    kewarganegaraan: "",
    agama: "",
    pekerjaan: "",
    alamat: "",
  },
  calon_suami_istri: {
    nik: "",
    nama_calon_suami: "",
    nama_calon_istri: "",
    bin_binti: "",
    pekerjaan: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    kewarganegaraan: "",
    agama: "",
    alamat: "",
  },
  lainnya: {
    tanggal_akad_nikah: "",
    tanggal_resepsi: "",
    tempat_akad: "",
    jam_akad: "",
  },
  status: "diajukan",
  ...initialLampiranExtend,
  // upload_surat_pengantar_rtrw: '',
  // upload_fotocopy_ktp: '',
  // upload_fotocopy_kk: '',
  // upload_fotocopy_akta_lahir: '',
  // upload_fotocopy_ijazah_terakhir: '',
  // upload_fotocopy_surat_pernyataan_belum_menikah: '',
  // upload_pas_foto_2x3: '',
  // upload_pas_foto_4x6: '',
}

export type { ISuratPengantarNikah }
