interface IBukuLetterCTanah {
  _id: any
  pemilik: {
    nik_wajib_iuran: string
    nama_wajib_iuran: string
    tempat_tinggal: string
    no_buku: string
  }
  sawah: ISawah[]
  tanah_kering: ITanahKering[]
}

interface ITanahKering {
  no_bagian_persil: string
  kelas_desa: string
  luas_milik_ha: number
  luas_milik_da: number
  iuran_r: number
  iuran_s: number
  tanggal_perubahan: string
  sebab_perubahan: string
}

interface ISawah {
  no_bagian_persil: string
  kelas_desa: string
  luas_milik_ha: number
  luas_milik_da: number
  iuran_r: number
  iuran_s: number
  tanggal_perubahan: string
  sebab_perubahan: string
}

export const BukuLetterCTanahField = {
  _id: "pk",
  pemilik: {
    nik_wajib_iuran: "",
    nama_wajib_iuran: "",
    tempat_tinggal: "",
    no_buku: "",
  },
  sawah: [
    {
      no_bagian_persil: "",
      kelas_desa: "",
      luas_milik_ha: 0,
      luas_milik_da: 0,
      iuran_r: 0,
      iuran_s: 0,
      tanggal_perubahan: "",
      sebab_perubahan: "",
    },
  ],
  tanah_kering: [
    {
      no_bagian_persil: "",
      kelas_desa: "",
      luas_milik_ha: 0,
      luas_milik_da: 0,
      iuran_r: 0,
      iuran_s: 0,
      tanggal_perubahan: "",
      sebab_perubahan: "",
    },
  ],
}

export type { IBukuLetterCTanah }

// pemilik: {
//   nik_wajib_iuran: "31250192001",
//     nama_wajib_iuran: "susianti",
//       tempat_tinggal: "desa jadi",
//         no_buku: "34"
// },
// sawah: {
//   no_bagian_persil: "157",
//     kelas_desa: "iv",
//       luas_milik_ha: 0.12,
//         luas_milik_da: 120,
//           iuran_r: 50000,
//             iuran_s: 50,
//               tanggal_perubahan: "2022-07-01",
//                 sebab_perubahan: "jual beli dari kartadiwirya"
// },
// tanah_kering: {
//   no_bagian_persil: "157",
//     kelas_desa: "iv",
//       luas_milik_ha: 0.12,
//         luas_milik_da: 120,
//           iuran_r: 50000,
//             iuran_s: 50,
//               tanggal_perubahan: "2022-07-01",
//                 sebab_perubahan: "jual beli dari kartadiwirya"
// },
