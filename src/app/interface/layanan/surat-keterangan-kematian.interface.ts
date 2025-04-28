import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISuratKeteranganKematian {
  _id: any
  nomor_surat: string
  umum: {
    nik: string
    nama_lengkap: string
    jenis_kelamin: string
    tempat_lahir: string
    tanggal_lahir: string
    anak_ke: string
    kewarganegaraan: string
    agama: string
    status_perkawinan: string
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
    nomor_kk: string
    nama_kepala_keluarga: string
  }
  kematian: {
    tempat_kematian: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    tanggal_kematian: string
    hari: string
    jam_kematian: string
    zona_waktu: string
    umur_saat_meninggal: number
    sebab_kematian: string
    yang_mengabarkan_kematian: string
    akta_kematian: string
    nomor_akta_kematian: string
    tanggal_akta_kematian: string
  }
  ayah: {
    nik: string
    nama_lengkap: string
    tanggal_lahir: string
    umur: number
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
  }
  ibu: {
    nik: string
    nama_lengkap: string
    tanggal_lahir: string
    umur: number
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
  }
  pelapor: {
    nik: string
    nama_lengkap: string
    hubungan_dengan_yang_meninggal: string
    tempat_lahir: string
    tanggal_lahir: string
    umur: number
    jenis_kelamin: string
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
  }
  saksi_i: {
    nik: string
    nama_lengkap: string
    umur: number
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
  }
  saksi_ii: {
    nik: string
    nama_lengkap: string
    umur: number
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
  }
  status: string
  // upload_surat_pengantar_rtrw: string;
  // upload_ktp_asli_yang_meninggal: string;
  // upload_kk_yang_meninggal: string;
  // upload_surat_keterangan_kematian: string;
  // upload_fotocopy_ktp_pemohon: string;
  // upload_surat_tanda_melapor_diri_wna?: string;
  // upload_surat_rekomendasi_wna?: string;
}
export const SrtKeteranganKematianField: ISuratKeteranganKematian = {
  nomor_surat: "",
  umum: {
    nik: "",
    nama_lengkap: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    anak_ke: "",
    kewarganegaraan: "",
    agama: "",
    status_perkawinan: "",
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
    nomor_kk: "",
    nama_kepala_keluarga: "",
  },
  kematian: {
    tempat_kematian: "",
    hari: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    tanggal_kematian: "",
    jam_kematian: "",
    zona_waktu: "",
    umur_saat_meninggal: 0,
    sebab_kematian: "",
    yang_mengabarkan_kematian: "",
    akta_kematian: "",
    nomor_akta_kematian: "",
    tanggal_akta_kematian: "",
  },
  ayah: {
    nik: "",
    nama_lengkap: "",
    tanggal_lahir: "",
    umur: 0,
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
  },
  ibu: {
    nik: "",
    nama_lengkap: "",
    tanggal_lahir: "",
    umur: 0,
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
  },
  pelapor: {
    nik: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    umur: 0,
    jenis_kelamin: "",
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
    hubungan_dengan_yang_meninggal: "",
  },
  saksi_i: {
    nik: "",
    nama_lengkap: "",
    umur: 0,
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
  },
  saksi_ii: {
    nik: "",
    nama_lengkap: "",
    umur: 0,
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
  },
  _id: "pk",
  status: "diajukan",
  ...initialLampiranExtend,
  // upload_surat_pengantar_rtrw: '',
  // upload_ktp_asli_yang_meninggal: '',
  // upload_kk_yang_meninggal: '',
  // upload_surat_keterangan_kematian: '',
  // upload_fotocopy_ktp_pemohon: '',
}

export type { ISuratKeteranganKematian }
