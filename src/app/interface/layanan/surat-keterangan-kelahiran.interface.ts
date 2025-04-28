import { initialLampiranExtend } from "@app/modules/Layanan/UploadLampiranExtend"

interface ISrtKeteranganKelahiranField {
  _id: string
  bayi_anak: {
    nomor_surat: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: string
    tempat_dilahirkan: string
    tempat_lahir: string
    tanggal_lahir: string
    jam_lahir: string
    zona_waktu: string
    anak_ke: string
    jenis_kelahiran: string
    penolong_kelahiran: string
    berat_bayi: number
    panjang_bayi: number
    akta_kelahiran: string
    nomor_akta_kelahiran: string
    tanggal_akta_kelahiran: string
    nomor_kartu_keluarga: string
    nama_kepala_keluarga: string
  }
  ibu: {
    nik: string
    nama_lengkap: string
    tanggal_lahir: string
    tempat_lahir: string
    agama: string
    umur: string
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
    kewarganegaraan: string
    kebangsaan: string
    tanggal_pencatatan_perkawinan: string
  }
  ayah: {
    nik: string
    nama_lengkap: string
    tanggal_lahir: string
    tempat_lahir: string
    agama: string
    umur: string
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
    kewarganegaraan: string
    kebangsaan: string
  }
  pelapor: {
    nik: string
    nama_lengkap: string
    umur: string
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
    umur: string
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
    umur: string
    pekerjaan: string
    provinsi: string
    kabupaten_kota: string
    kecamatan: string
    desa_kelurahan: string
    alamat_rumah: string
  }
  status: string
}

export const SrtKeteranganKelahiranField = {
  _id: "pk",
  bayi_anak: {
    nomor_surat: "",
    nik: "",
    nama_lengkap: "",
    jenis_kelamin: "Laki-Laki",
    tempat_dilahirkan: "",
    tempat_lahir: "",
    tanggal_lahir: 0,
    jam_lahir: "",
    zona_waktu: "",
    anak_ke: "",
    jenis_kelahiran: "",
    penolong_kelahiran: "",
    berat_bayi: 0,
    panjang_bayi: 0,
    akta_kelahiran: "",
    nomor_akta_kelahiran: "",
    tanggal_akta_kelahiran: "",
    nomor_kartu_keluarga: "",
    nama_kepala_keluarga: "",
  },
  ibu: {
    nik: "",
    nama_lengkap: "",
    tanggal_lahir: "",
    tempat_lahir: "",
    agama: "",
    umur: "",
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
    kewarganegaraan: "",
    kebangsaan: "Indonesia",
    tanggal_pencatatan_perkawinan: "",
  },
  ayah: {
    nik: "",
    nama_lengkap: "",
    tanggal_lahir: "",
    tempat_lahir: "",
    agama: "",
    umur: "",
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
    kewarganegaraan: "",
    kebangsaan: "Indonesia",
  },
  pelapor: {
    nik: "",
    nama_lengkap: "",
    umur: "",
    jenis_kelamin: "",
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
  },
  saksi_i: {
    nik: "",
    nama_lengkap: "",
    umur: "",
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
    umur: "",
    pekerjaan: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    desa_kelurahan: "",
    alamat_rumah: "",
  },
  status: "diajukan",
  ...initialLampiranExtend,
}

export type { ISrtKeteranganKelahiranField }
