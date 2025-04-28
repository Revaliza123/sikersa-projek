export interface IProdeskel {
  _id: string
  alamat: string
  anggota_keluarga: {
    agama: string
    akseptor_kb: string
    cacat_fisik: string
    cacat_mental: string
    "etnis_/_suku": string
    golongan_darah: string
    hubungan_keluarga: string
    jenis_kelamin: string
    kependudukan_sebagai_wajib_pajak: string
    kewarganegaraan: string
    lembaga_ekonomi_yang_diikuti: string
    lembaga_kemasyarakatan_yang_diikuti: string
    lembaga_pemerintahan_yang_diikuti: string
    mata_pencaharian_pokok: string
    "nama_bapak_/_ibu": string
    nama_lengkap: string
    nik: string
    no_urut: number
    nomor_akte_kelahiran: string
    pendidikan_terakhir: string
    status_perkawinan: string
    tanggal_lahir: string
    tanggal_pencatatan: string
    tempat_lahir: string
  }[]
  bulan: number
  jabatan: string
  kode_keluarga: string
  nama_dusun: string
  nama_kepala_keluarga: string
  nama_pengisi: string
  pekerjaan: string
  rt: string
  rw: string
  sumber_data: string
  tahun: number
  check_nomor_kk?: string
}

export const ProdeskelField: IProdeskel = {
  _id: "",
  alamat: "",
  anggota_keluarga: [],
  bulan: 0,
  jabatan: "",
  kode_keluarga: "",
  nama_dusun: "",
  nama_kepala_keluarga: "",
  nama_pengisi: "",
  pekerjaan: "",
  rt: "",
  rw: "",
  sumber_data: "",
  tahun: 0,
}
