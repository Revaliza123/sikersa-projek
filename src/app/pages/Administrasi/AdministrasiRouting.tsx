import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Error404 from "@app/components/Error/Error404"
import TopBarLoader from "@app/components/Loader/TopBarLoader"
import DataPokokDesaForm from "./Dapodes/DataPokokDesa/DataPokokDesaForm"
import AdmBerandaPage from "../Beranda/BerandaPage"

/** PAGE */

/** === UMUM == */
const BkAgendaPage = React.lazy(
  () => import("@app/pages/Administrasi/Umum/BkAgenda/BkAgendaPage")
)
const BkAparatPemerintahPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Umum/BkAparatPemerintah/BkAparatPemerintahPage"
    )
)

const BkAparatRTPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Umum/BkAparatRT/BkAparatRTPage"
    )
)

const BkEkspedisiPage = React.lazy(
  () => import("@app/pages/Administrasi/Umum/BkEkspedisi/BkEkspedisiPage")
)
const BkInventasisKekayaanPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Umum/BkInventasisKekayaan/BkInventasisKekayaanPage"
    )
)
const BkKeputusanKadesPage = React.lazy(
  () =>
    import("@app/pages/Administrasi/Umum/BkKeputusanKades/BkKeputusanKadesPage")
)
const BkLembaranBeritaPage = React.lazy(
  () =>
    import("@app/pages/Administrasi/Umum/BkLembaranBerita/BkLembaranBeritaPage")
)
const BkPeraturanPage = React.lazy(
  () => import("@app/pages/Administrasi/Umum/BkPeraturan/BkPeraturanPage")
)

/** === TANAH === */
const BkTanahPage = React.lazy(
  () => import("@app/pages/Administrasi/Pertanahan/BkTanah/BkTanahPage")
)
const BkTanahKasPage = React.lazy(
  () => import("@app/pages/Administrasi/Pertanahan/BkTanahKas/BkTanahKasPage")
)
const BKLetterCTanahPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Pertanahan/BKLetterCTanah/BKLetterCTanahPage"
    )
)

/** === PENDUDUK === */
const BkIndukPendudukPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Penduduk/BkIndukPenduduk/BkIndukPendudukPage"
    )
)
const BkIndukPendudukImportKKPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Penduduk/BkIndukPenduduk/BkIndukPendudukImportKK"
    )
)
const BkKTPdanKKPage = React.lazy(
  () => import("@app/pages/Administrasi/Penduduk/BkKTPdanKK/BkKTPdanKKPage")
)
const BkMutasiPendudukPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Penduduk/BkMutasiPenduduk/BkMutasiPendudukPage"
    )
)
const BkPendudukSementaraPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Penduduk/BkPendudukSementara/BkPendudukSementaraPage"
    )
)
const BkRekapitulasiJmlPendudukPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Penduduk/BkRekapitulasiJmlPenduduk/BkRekapitulasiJmlPendudukPage"
    )
)

/** === KEUANGAN === */
const BkAPBDesPage = React.lazy(
  () => import("@app/pages/Administrasi/Keuangan/BkAPBDes/BkAPBDesPage")
)
const BkBankDesaPage = React.lazy(
  () => import("@app/pages/Administrasi/Keuangan/BkBankDesa/BkBankDesaPage")
)
const BkKasPembantuPage = React.lazy(
  () =>
    import("@app/pages/Administrasi/Keuangan/BkKasPembantu/BkKasPembantuPage")
)
const BkKasPembantuKegiatanPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Keuangan/BkKasPembantuKegiatan/BkKasPembantuKegiatanPage"
    )
)
const BkKasUmumPage = React.lazy(
  () => import("@app/pages/Administrasi/Keuangan/BkKasUmum/BkKasUmumPage")
)
const BkRABPage = React.lazy(
  () => import("@app/pages/Administrasi/Keuangan/BkRAB/BkRABPage")
)

/** === PEMBANGUNAN === */
const BkInventarisHasilPembangunanPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Pembangunan/BkInventarisHasilPembangunan/BkInventarisHasilPembangunanPage"
    )
)
const BkKaderPemberdayaanMasPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Pembangunan/BkKaderPemberdayaanMas/BkKaderPemberdayaanMasPage"
    )
)
const BkKegiatanPembangunanPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Pembangunan/BkKegiatanPembangunan/BkKegiatanPembangunanPage"
    )
)
const BkRencanaKerjaPembangunanPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Pembangunan/BkRencanaKerjaPembangunan/BkRencanaKerjaPembangunanPage"
    )
)

/** === DAPODES === */
const DataPerkembanganDesaPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Dapodes/DataPerkembanganDesa/DataPerkembanganDesaPage"
    )
)
const DataPokokDesaPage = React.lazy(
  () =>
    import("@app/pages/Administrasi/Dapodes/DataPokokDesa/DataPokokDesaPage")
)
const DataPotensiDesaPage = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Dapodes/DataPotensiDesa/DataPotensiDesaPage"
    )
)
const DataPotensiDesaForm = React.lazy(
  () =>
    import(
      "@app/pages/Administrasi/Dapodes/DataPotensiDesa/DataPotensiDesaForm"
    )
)

const IDMPage = React.lazy(
  () => import("@app/pages/Administrasi/Dapodes/IDM/IDMPage")
)
const SDGsPage = React.lazy(
  () => import("@app/pages/Administrasi/Dapodes/SDGs/SDGsPage")
)
const ProdeskelPage = React.lazy(
  () => import("@app/pages/Administrasi/Dapodes/Prodeskel/ProdeskelPage")
)
const TandaTanganPage = React.lazy(
  () => import("@app/pages/Administrasi/Pengaturan/TandaTangan/TandaTanganPage")
)

/** === ARSIP === */
// const ArsipPage = React.lazy(
//   () => import("@app/pages/Administrasi/Arsip/ArsipPage")
// )
// const ArsipFilePage = React.lazy(
//   () => import("@app/pages/Administrasi/Arsip/ArsipFilePage")
// )

// /** === INVENTARIS === */
// const InventarisPeralatanDanMesinPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisPeralatanDanMesin/InventarisPeralatanDanMesinPage"
//     )
// )
// const InventarisGedungDanBangunanPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisGedungDanBangunan/InventarisGedungDanBangunanPage"
//     )
// )
// const InventarisJalanIrigasiDanJaringanPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisJalanIrigasiDanJaringan/InventarisJalanIrigasiDanJaringanPage"
//     )
// )
// const InventarisAsetTetapLainnyaPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisAsetTetapLainnya/InventarisAsetTetapLainnyaPage"
//     )
// )
// const InventarisKonstruksiDalamPengerjaanPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisKonstruksiDalamPengerjaan/InventarisKonstruksiDalamPengerjaanPage"
//     )
// )
// const InventarisTanahPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisTanah/InventarisTanahPage"
//     )
// )
// const InventarisPersediaanPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisPersediaan/InventarisPersediaanPage"
//     )
// )
// const InventarisAsetTakBerwujudPage = React.lazy(
//   () =>
//     import(
//       "@app/pages/Administrasi/Inventaris/InventarisAsetTakBerwujud/InventarisAsetTakBerwujudPage"
//     )
// )

// const AdmBerandaPage = React.lazy(() => import("./Beranda/BerandaPage"))

// const PengaturanAplikasi = React.lazy(
//   () => import("@app/pages/Administrasi/Pengaturan/Aplikasi/PengaturanAplikasi")
// )

// const ManajemenSurat = React.lazy(
//   () => import("@app/pages/Administrasi/ManajemenSurat/ManajemenSuratPage")
// )
// const ManajemenSuratForm = React.lazy(
//   () => import("@app/pages/Administrasi/ManajemenSurat/ManajemenSuratForm")
// )
// const LoginSliderPage = React.lazy(
//   () => import("@app/pages/Administrasi/Pengaturan/LoginSlider/LoginSliderPage")
// )

export default function AdministrasiRouting() {
  return (
    <Routes>
      <Route path="">
        <Route path="" element={<Navigate to={"beranda"} />}></Route>
        <Route
          path="beranda"
          element={
            <React.Suspense fallback={<TopBarLoader />}>
              <AdmBerandaPage />
            </React.Suspense>
          }></Route>

        {/* BUKU  */}
        <Route path="buku">
          {/* KEUANGAN  */}
          <Route
            path="anggaran-pendapatan-dan-belanja-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkAPBDesPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="rencana-anggaran-biaya"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkRABPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="kas-pembantu-kegiatan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkKasPembantuKegiatanPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="kas-umum"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkKasUmumPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="kas-pembantu"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkKasPembantuPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="bank-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkBankDesaPage />{" "}
              </React.Suspense>
            }
          />

          {/* PEMBANGUNAN  */}
          <Route
            path="inventaris-hasil-dan-hasil-pembangunan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkInventarisHasilPembangunanPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="kader-pemberdayaan-masyarakat"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkKaderPemberdayaanMasPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="kegiatan-pembangunan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkKegiatanPembangunanPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="rencana-kerja-pembangunan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkRencanaKerjaPembangunanPage />{" "}
              </React.Suspense>
            }
          />

          {/* PENDUDUK  */}
          <Route path="induk-penduduk">
            <Route
              path=""
              element={
                <React.Suspense fallback={<TopBarLoader />}>
                  {" "}
                  <BkIndukPendudukPage />{" "}
                </React.Suspense>
              }
            />
            <Route
              path="import-kartu-keluarga"
              element={
                <React.Suspense fallback={<TopBarLoader />}>
                  {" "}
                  <BkIndukPendudukImportKKPage />{" "}
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="ktp-dan-kartu-keluarga"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkKTPdanKKPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="mutasi-penduduk"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkMutasiPendudukPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="penduduk-sementara"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkPendudukSementaraPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="rekapitulasi-jumlah-penduduk"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkRekapitulasiJmlPendudukPage />{" "}
              </React.Suspense>
            }
          />

          {/* UMUM */}
          <Route
            path="agenda"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkAgendaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="aparat-pemerintah-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkAparatPemerintahPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="aparat-rt"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkAparatRTPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="ekspedisi"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkEkspedisiPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="inventaris-kekayaan-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkInventasisKekayaanPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="keputusan-kepala-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkKeputusanKadesPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="lembaran-dan-berita-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkLembaranBeritaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="peraturan-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkPeraturanPage />{" "}
              </React.Suspense>
            }
          />

          {/* PERTANAHAN */}
          <Route
            path="tanah-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkTanahPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="tanah-kas-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BkTanahKasPage />{" "}
              </React.Suspense>
            }
          />

          <Route
            path="letter-c-tanah"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <BKLetterCTanahPage />{" "}
              </React.Suspense>
            }
          />

          {/* DAPODES  */}
          <Route
            path="perkembangan-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <DataPerkembanganDesaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="pokok-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <DataPokokDesaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="potensi-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <DataPotensiDesaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="idm"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <IDMPage />{" "}
              </React.Suspense>
            }
          />

          {/* PENGATURAN  */}
        </Route>

        {/* Inventaris */}
        {/* <Route path="inventaris">
          <Route
            path="tanah"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisTanahPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="peralatan-dan-mesin"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisPeralatanDanMesinPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="gedung-dan-bangunan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisGedungDanBangunanPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="jalan-irigasi-dan-jaringan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisJalanIrigasiDanJaringanPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="aset-tetap-lainnya"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisAsetTetapLainnyaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="konstruksi-dalam-pengerjaan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisKonstruksiDalamPengerjaanPage />{" "}
              </React.Suspense>
            }
          />

          <Route
            path="persediaan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisPersediaanPage />{" "}
              </React.Suspense>
            }
          />

          <Route
            path="inventaris-aset-tak-berwujud"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <InventarisAsetTakBerwujudPage />{" "}
              </React.Suspense>
            }
          />
        </Route> */}

        {/* DAPODES  */}
        <Route path="data">
          <Route
            path="sdgs"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <SDGsPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="perkembangan-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <DataPerkembanganDesaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="pokok-desa"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <DataPokokDesaPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="pokok-desa/tambah-data"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <DataPokokDesaForm />{" "}
              </React.Suspense>
            }
          />
          <Route path="potensi-desa">
            <Route
              path=""
              element={
                <React.Suspense fallback={<TopBarLoader />}>
                  {" "}
                  <DataPotensiDesaPage />
                </React.Suspense>
              }
            />

            <Route
              path="tambah-data"
              element={
                <React.Suspense fallback={<TopBarLoader />}>
                  {" "}
                  <DataPotensiDesaForm />
                </React.Suspense>
              }
            />

            <Route
              path="edit/:id"
              element={
                <React.Suspense fallback={<TopBarLoader />}>
                  {" "}
                  <DataPotensiDesaForm />
                </React.Suspense>
              }
            />

            <Route
              path="detail/:id"
              element={
                <React.Suspense fallback={<TopBarLoader />}>
                  {" "}
                  <DataPotensiDesaForm />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="idm"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <IDMPage />{" "}
              </React.Suspense>
            }
          />
          {/* <Route
            path="prodeskel"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <ProdeskelPage />{" "}
              </React.Suspense>
            }
          /> */}
        </Route>

        {/* Arsip  */}
        {/* <Route path="arsip">
          <Route
            path=""
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                <ArsipPage />
              </React.Suspense>
            }
          />
          <Route
            path=":folder"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                <ArsipFilePage />
              </React.Suspense>
            }
          />
        </Route> */}

        {/* PENGATURAN  */}
        {/* <Route path="pengaturan">
          <Route
            path="tanda-tangan"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <TandaTanganPage />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="aplikasi"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <PengaturanAplikasi />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="login-slider"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <LoginSliderPage />{" "}
              </React.Suspense>
            }
          />
        </Route> */}

        {/* CUSTOM SURAT */}
        {/* <Route path="manajemen-surat">
          <Route
            path=""
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <ManajemenSurat />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="add"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <ManajemenSuratForm />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="edit/:id"
            element={
              <React.Suspense fallback={<TopBarLoader />}>
                {" "}
                <ManajemenSuratForm />{" "}
              </React.Suspense>
            }
          />
        </Route> */}

        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  )
}
