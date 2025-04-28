import { Button } from "@app/components"
import { FormInputControl, FormInputGroup } from "../DataPotensiDesaForm"
import React from "react"
import { Nav, Tab } from "react-bootstrap"
import { useFieldArray } from "react-hook-form"
import { TabLink } from "@app/styled/tab.styled"
import {
  DataPotensiDesaAccordion,
  DataPotensiDesaAccordionBody,
  DataPotensiDesaAccordionHeader,
  DataPotensiDesaAccordionItem,
} from "../DataPotensiDesaStyled"
import TrashIcon from "@app/components/Icons/TrashIcon"
import {
  SelectAdaAtauTidak,
  SelectAktifAtauPasif,
  SelectBaikAtauRusak,
  // SelectAktifAtauTidakAktif,
  // SelectBaikAtauTidak,
  // SelectBulan,
  SelectKesuburanTanah,
  SelectKualitasAirMinum,
  // SelectPendidikan,
  SelectPotensi,
  // SelectTerdaftarAtauTerakreditasi,
  SelectYaAtauTidak,
} from "../DataPotensiDesaForm"
import { useDisableWhenDetailPath } from "../hooks/useDisableDetail"

export function DataPotensiSumberDayaAlam({
  activeForm,
  activeTabSda,
  setActiveTabSda,
  register,
  errors,
  control,
  watch,
}: {
  activeForm: string
  activeTabSda: string
  setActiveTabSda: (v: string) => void
  register: any
  errors: any
  control: any
  watch: any
}) {
  const { hideElement } = useDisableWhenDetailPath()
  /** sda - potensi umum */
  const sdaTanahSawahArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.tanah_sawah",
  })

  const sdaTanahKeringArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.tanah_kering",
  })

  const sdaTanahBasahArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.tanah_basah",
  })

  const sdaTanahPerkebunanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.tanah_perkebunan",
  })

  const sdaTanahFasilitasUmumArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.tanah_fasilitas_umum",
  })

  const sdaTanahHutanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.tanah_hutan",
  })

  const sdaTopografiArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.topografi",
  })

  const sdaJenisKesuburanTanahArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.lahan",
  })

  const sdaKualitasUdaraArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.kualitas_udara",
  })

  const sdaRuangPublikTamanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.ruang_publik_taman",
  })

  const sdaPotensiWisataArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.potensi_wisata",
  })

  const sdaLuasPerkebunanMenurutKomoditasArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.perkebunan.luas_perkebunan_menurut_komoditas",
  })

  const sdaJenisDanDepositBahanGalianArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.bahan_galian.jenis_dan_deposit_bahan_galian",
  })

  const sdaProduksiBahanGalianArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.bahan_galian.produksi_bahan_galian",
  })

  const sdaKepemilikanDanPengelolaanBahanGalianArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.bahan_galian.kepemilikan_dan_pengelolaan_bahan_galian",
  })

  const sdaLuasTanamanBuahArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.pertanian.luas_tanaman_buah",
  })

  const sdaHasilHutanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.kehutanan.hasil_hutan",
  })

  const sdaKondisiHutanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.kehutanan.kondisi_hutan",
  })

  const sdaDampakPengolahanHutanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.kehutanan.dampak_pengolahan_hutan",
  })

  const sdaJenisPopulasiTernakArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.peternakan.jenis_populasi_ternak",
  })

  const sdaProduksiPeternakanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.peternakan.produksi_peternakan",
  })

  const sdaKetersediaanHijauanPakanTernakArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.peternakan.ketersediaan_hijauan_pakan_ternak",
  })

  const sdaPemilikUsahaPengolahanHasilTernakArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.peternakan.pemilik_usaha_pengolahan_hasil_ternak",
  })

  const sdaKetersediaanLahanPemeliharaanTernakArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.peternakan.ketersediaan_lahan_pemeliharaan_ternak",
  })

  const sdaJenisDanAlatProduksiBudidayaIkanLautDanPayauArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.perikanan.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau",
  })

  const sdaJenisDanSaranaProduksiBudidayaIkanAirTawarArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.perikanan.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar",
  })

  const sdaJenisIkanDanProduksiArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.perikanan.jenis_ikan_dan_produksi",
  })

  const sdaPotensiAirDanSumberDayaAirArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.sumber_daya_air.potensi_air_dan_sumber_daya_air",
  })

  const sdaSumberAirBersihArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.sumber_daya_air.sumber_air_bersih",
  })

  const sdaKualitasAirMinumArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.sumber_daya_air.kualitas_air_minum",
  })

  const sdaAirPanasArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.sumber_daya_air.air_panas",
  })

  const sdaLuasTanamanPanganMenurutKomoditasArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.pertanian.luas_tanaman_pangan_menurut_komoditas",
  })

  const sdaLuasTanamanApotikHidupArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.pertanian.tanaman_apotik_hidup",
  })

  const sdaDanauWadukSituArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.pemanfaatan",
  })

  const sdaRawaArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_alam.sumber_daya_air.rawa.pemanfaatan",
  })

  return (
    <div className={activeForm === "sumber-daya-alam" ? "d-block" : "d-none"}>
      <Tab.Container defaultActiveKey={activeTabSda}>
        <Nav
          className="d-flex justify-content-center my-3"
          activeKey={activeTabSda}
          onSelect={(selectedKey) => setActiveTabSda(selectedKey as string)}>
          <Nav.Item>
            <TabLink eventKey="potensiUmum">Potensi Umum</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="pertanian">Pertanian</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="perkebunan">Perkebunan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kehutanan">Kehutanan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="peternakan">Peternakan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="perikanan">Perikanan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="bahanGalian">Bahan Galian</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="sumberDayaAir">Sumber Daya Air</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kualitasUdara">Kualitas Udara</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kebisingan">Kebisingan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="ruangPublikTaman">Ruang Publik Taman</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="potensiWisata">Potensi Wisata</TabLink>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="potensiUmum">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "batasWilayah",
                "luasWilayah",
                "penetapanBatas",
                "tanahSawah",
                "tanahKering",
                "tanahBasah",
                "tanahPerkebunan",
                "tanahFasilitasUmum",
                "tanahHutan",
                "topografi",
                "iklim",
                "jenisKesuburanTanah",
                "letak",
                "orbitasi",
              ]}>
              {/* BATAS WILAYAH */}
              <DataPotensiDesaAccordionItem eventKey={"batasWilayah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Batas dan Peta wilayah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Batas Wilayah</th>
                        <th>Desa/kelurahan</th>
                        <th>Kecamatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sebelah utara</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_utara_desa
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_utara_desa?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_utara_desa"
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah?.sebelah_utara_kec
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah?.sebelah_utara_kec
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_utara_kec"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sebelah selatan</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_selatan_desa
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_selatan_desa?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_selatan_desa"
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_selatan_kec
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_selatan_kec?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_selatan_kec"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sebelah timur</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_timur_desa
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_timur_desa?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_timur_desa"
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah?.sebelah_timur_kec
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah?.sebelah_timur_kec
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_timur_kec"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sebelah barat</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_barat_desa
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah
                                ?.sebelah_barat_desa?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_barat_desa"
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah?.sebelah_barat_kec
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.batas_wilayah?.sebelah_barat_kec
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.batas_wilayah.sebelah_barat_kec"
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th colSpan={3}>Penetapan Batas dan Peta Wilayah</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Penetapan Batas</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.potensi_umum.penetapan_batas_wilayah.penetapan_batas"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dasar Hukum (Nomor Perdes)</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.penetapan_batas_wilayah
                                ?.dasar_hukum?.perdes
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.penetapan_batas_wilayah
                                ?.dasar_hukum?.perdes?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.penetapan_batas_wilayah.dasar_hukum.perdes"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dasar Hukum (Nomor Perda)</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.penetapan_batas_wilayah
                                ?.dasar_hukum?.perda
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.penetapan_batas_wilayah
                                ?.dasar_hukum?.perda?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.penetapan_batas_wilayah.dasar_hukum.perda"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Peta Wilayah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.potensi_umum.penetapan_batas_wilayah.peta_wilayah"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* LUAS WILAYAH  */}
              <DataPotensiDesaAccordionItem eventKey={"luasWilayah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Luas Wilayah Menurut Penggunaan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Luas tanah sawah</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.luas_wilayah.luas_tanah_sawah`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.luas_wilayah?.luas_tanah_sawah
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah kering</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.luas_wilayah.luas_tanah_kering`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.luas_wilayah?.luas_tanah_kering
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah basah</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.luas_wilayah.luas_tanah_basah`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.luas_wilayah?.luas_tanah_basah
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah perkebunan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.luas_wilayah.luas_tanah_perkebunan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.luas_wilayah
                                ?.luas_tanah_perkebunan
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas fasilitas umum</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.luas_wilayah.luas_fasilitas_umum`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.luas_wilayah
                                ?.luas_fasilitas_umum
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah hutan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.luas_wilayah.luas_tanah_hutan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.luas_wilayah?.luas_tanah_hutan
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Total luas</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.luas_wilayah.total_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.luas_wilayah?.total_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* TANAH SAWAH  */}
              <DataPotensiDesaAccordionItem eventKey={"tanahSawah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tanah Sawah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      {sdaTanahSawahArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_sawah?.[idx]?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_sawah?.[idx]?.key
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_sawah.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_sawah.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_sawah?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaTanahSawahArray.remove(idx)}
                              variant="danger"
                              className="text-white"
                              {...hideElement}>
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaTanahSawahArray.append({ key: "", luas: 0 })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* TANAH KERING  */}
              <DataPotensiDesaAccordionItem eventKey={"tanahKering"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tanah Kering</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      {sdaTanahKeringArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_kering?.[idx]?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_kering?.[idx]?.key
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_kering.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_kering.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_kering?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaTanahKeringArray.remove(idx)}
                              variant="danger"
                              className="text-white"
                              {...hideElement}>
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaTanahKeringArray.append({ key: "", luas: 0 })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* TANAH BASAH  */}
              <DataPotensiDesaAccordionItem eventKey={"tanahBasah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tanah Basah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      {sdaTanahBasahArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_basah?.[idx]?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_basah?.[idx]?.key
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_basah.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_basah.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_basah?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaTanahBasahArray.remove(idx)}
                              variant="danger"
                              className="text-white"
                              {...hideElement}>
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaTanahBasahArray.append({ key: "", luas: 0 })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* TANAH PERKEBUNAN  */}
              <DataPotensiDesaAccordionItem eventKey={"tanahPerkebunan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tanah Perkebunan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      {sdaTanahPerkebunanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_perkebunan?.[idx]?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_perkebunan?.[idx]?.key
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_perkebunan.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_perkebunan.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_perkebunan?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaTanahPerkebunanArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaTanahPerkebunanArray.append({
                                key: "",
                                luas: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* TANAH FASILITAS UMUM  */}
              <DataPotensiDesaAccordionItem eventKey={"tanahFasilitasUmum"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tanah Fasilitas Umum</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      {sdaTanahFasilitasUmumArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_fasilitas_umum?.[idx]
                                  ?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_fasilitas_umum?.[idx]
                                  ?.key?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_fasilitas_umum.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_fasilitas_umum.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_fasilitas_umum?.[idx]
                                  ?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaTanahFasilitasUmumArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaTanahFasilitasUmumArray.append({
                                key: "",
                                luas: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* TANAH HUTAN  */}
              <DataPotensiDesaAccordionItem eventKey={"tanahHutan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tanah Hutan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      {sdaTanahHutanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_hutan?.[idx]?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_hutan?.[idx]?.key
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_hutan.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.tanah_hutan.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.tanah_hutan?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaTanahHutanArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaTanahHutanArray.append({ key: "", luas: 0 })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* IKLIM  */}
              <DataPotensiDesaAccordionItem eventKey={"iklim"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Iklim</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Curah hujan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.iklim.curah_hujan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.iklim?.curah_hujan
                            }
                            label={""}
                            suffix={"mm"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah bulan hujan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.iklim.jumlah_bulan_hujan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.iklim?.jumlah_bulan_hujan
                            }
                            label={""}
                            suffix={"bulan"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kelembapan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.iklim?.kelembapan
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.iklim?.kelembapan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.iklim.kelembapan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Suhu rata-rata harian</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.iklim.suhu_rata_rata_harian`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.iklim?.suhu_rata_rata_harian
                            }
                            label={""}
                            suffix={"oC"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tinggi tempat dari permukaan laut</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.iklim.tinggi_tempat_dari_permukaan_laut`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.iklim
                                ?.tinggi_tempat_dari_permukaan_laut
                            }
                            label={""}
                            suffix={"mdl"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* JENIS KESUBURAN TANAH  */}
              <DataPotensiDesaAccordionItem eventKey={"jenisKesuburanTanah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jenis Kesuburan Tanah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Warna tanah</td>
                        <td>
                          <SelectKesuburanTanah
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.warna_tanah`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tekstur tanah</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.jenis_kesuburan_tanah
                                ?.tekstur_tanah
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.jenis_kesuburan_tanah
                                ?.tekstur_tanah?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.tekstur_tanah"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tingkat kemiringan tanah</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.tingkat_kemiringan_tanah`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.jenis_kesuburan_tanah
                                ?.tingkat_kemiringan_tanah
                            }
                            label={""}
                            suffix={"derajat"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah erosi ringan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.luas_tanah_erosi_ringan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.jenis_kesuburan_tanah
                                ?.luas_tanah_erosi_ringan
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah erosi sedang</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.luas_tanah_erosi_sedang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.jenis_kesuburan_tanah
                                ?.luas_tanah_erosi_sedang
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah erosi berat</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.luas_tanah_erosi_berat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.jenis_kesuburan_tanah
                                ?.luas_tanah_erosi_berat
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Luas tanah tidak ada erosi</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.luas_tanah_tidak_ada_erosi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.jenis_kesuburan_tanah
                                ?.luas_tanah_tidak_ada_erosi
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      {sdaJenisKesuburanTanahArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.jenis_kesuburan_tanah
                                  ?.lahan?.[idx]?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.jenis_kesuburan_tanah
                                  ?.lahan?.[idx]?.key?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.lahan.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.jenis_kesuburan_tanah.lahan.${idx}.value`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.jenis_kesuburan_tanah
                                  ?.lahan?.[idx]?.value
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaJenisKesuburanTanahArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaJenisKesuburanTanahArray.append({
                                key: "",
                                value: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* TOPOGRAFI  */}
              <DataPotensiDesaAccordionItem eventKey={"topografi"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Topografi</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      {sdaTopografiArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.topografi?.[idx]?.key
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.topografi?.[idx]?.key?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.topografi.${idx}.key`
                              )}
                            />
                          </td>
                          <td>
                            <SelectYaAtauTidak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.potensi_umum.topografi.${idx}.keterangan`}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_umum.topografi.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_umum?.topografi?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                              additionalOptions={{
                                disabled:
                                  watch(
                                    `potensi_sumber_daya_alam.potensi_umum.topografi.${idx}.keterangan`
                                  ) === "tidak",
                              }}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaTopografiArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={4}>
                          <Button
                            onClick={() =>
                              sdaTopografiArray.append({
                                key: "",
                                keterangan: "ya",
                                luas: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* LETAK  */}
              <DataPotensiDesaAccordionItem eventKey={"letak"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Letak</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th></th>
                        <th>keterangan</th>
                        <th>luas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Desa / Kelurahan Kawasan Perkantoran</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_perkantoran_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_perkantoran_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_kawasan_perkantoran_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_perkantoran_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Kawasan Pertokoan / Bisnis</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_pertokoan_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_pertokoan_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_kawasan_pertokoan_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_pertokoan_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Dataran Kawasan Campuran</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_campuran_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_campuran_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_kawasan_campuran_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_campuran_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Kawasan Industri</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_industri_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_industri_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_kawasan_industri_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_industri_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Kepulauan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kepulauan_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kepulauan_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_kepulauan_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kepulauan_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Pantai Pesisir</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_pantai_pesisir_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_pantai_pesisir_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_pantai_pesisir_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_pantai_pesisir_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Kawasan Hutan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_hutan_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_hutan_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_kawasan_hutan_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_hutan_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Taman Suaka</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_taman_suaka_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_taman_suaka_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_taman_suaka_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_taman_suaka_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Kawasan Wisata</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_wisata_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_wisata_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_kawasan_wisata_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_kawasan_wisata_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Perbatasan Negara Lain</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_negara_lain_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_negara_lain_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_perbatasan_negara_lain_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_negara_lain_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Perbatasan Provinsi Lain</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_provinsi_lain_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_provinsi_lain_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_perbatasan_provinsi_lain_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_provinsi_lain_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Perbatasan Kabupaten Lain</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_kabupaten_lain_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_kabupaten_lain_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_perbatasan_kabupaten_lain_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_kabupaten_lain_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Perbatasan Kecamatan Lain</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_kecamatan_lain_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_kecamatan_lain_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_perbatasan_kecamatan_lain_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_perbatasan_kecamatan_lain_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Bantaran Sungai</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_bantaran_sungai_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_bantaran_sungai_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_bantaran_sungai_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_bantaran_sungai_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Rawan Banjir</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_rawan_banjir_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_rawan_banjir_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_rawan_banjir_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_rawan_banjir_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Bebas Banjir</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_bebas_banjir_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_bebas_banjir_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_bebas_banjir_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_bebas_banjir_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Potensial Tsunami</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_potensial_tsunami_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_potensial_tsunami_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_potensial_tsunami_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_potensial_tsunami_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Desa / Kelurahan Potensial Tsunami</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_rawan_jalur_gempa_keterangan`}
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_rawan_jalur_gempa_luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.letak
                                ?.desa_kelurahan_rawan_jalur_gempa_luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.letak.desa_kelurahan_rawan_jalur_gempa_keterangan`
                                ) === "tidak",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* ORBITASI  */}
              <DataPotensiDesaAccordionItem eventKey={"orbitasi"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Orbitasi</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Jarak ibukota kecamatan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.jarak_ibukota_kecamatan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.jarak_ibukota_kecamatan
                            }
                            label={""}
                            suffix={"Km"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Lama jarak tempuh ibukota kecamatan dengan motor
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.lama_jarak_tempuh_ibukota_kecamatan_dengan_motor`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.lama_jarak_tempuh_ibukota_kecamatan_dengan_motor
                            }
                            label={""}
                            suffix={"Jam"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Lama jarak tempuh ibukota kecamatan dengan nonmotor
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.lama_jarak_tempuh_ibukota_kecamatan_dengan_nonmotor`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.lama_jarak_tempuh_ibukota_kecamatan_dengan_nonmotor
                            }
                            label={""}
                            suffix={"Jam"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Keterangan kendaraan umum ibukota kecamatan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_kecamatan_keterangan"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah kendaraan umum ibukota kecamatan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_kecamatan_jumlah`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.kendaraan_umum_ibukota_kecamatan_jumlah
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_kecamatan_keterangan`
                                ) === "tidak ada",
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Jarak ibukota kabupaten</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.jarak_ibukota_kabupaten`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.jarak_ibukota_kabupaten
                            }
                            label={""}
                            suffix={"Km"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Lama jarak tempuh ibukota kabupaten dengan motor
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.lama_jarak_tempuh_ibukota_kabupaten_dengan_motor`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.lama_jarak_tempuh_ibukota_kabupaten_dengan_motor
                            }
                            label={""}
                            suffix={"Jam"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Lama jarak tempuh ibukota kabupaten dengan nonmotor
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.lama_jarak_tempuh_ibukota_kabupaten_dengan_nonmotor`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.lama_jarak_tempuh_ibukota_kabupaten_dengan_nonmotor
                            }
                            label={""}
                            suffix={"Jam"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>keterangan kendaraan umum ibukota kabupaten</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_kabupaten_keterangan"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah kendaraan umum ibukota kabupaten</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_kabupaten_jumlah`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.kendaraan_umum_ibukota_kabupaten_jumlah
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_kabupaten_keterangan`
                                ) === "tidak ada",
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Jarak ibukota provinsi</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.jarak_ibukota_provinsi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi?.jarak_ibukota_provinsi
                            }
                            label={""}
                            suffix={"Km"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Lama jarak tempuh ibukota provinsi dengan motor</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.lama_jarak_tempuh_ibukota_provinsi_dengan_motor`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.lama_jarak_tempuh_ibukota_provinsi_dengan_motor
                            }
                            label={""}
                            suffix={"Jam"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Lama jarak tempuh ibukota provinsi dengan nonmotor
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.lama_jarak_tempuh_ibukota_provinsi_dengan_nonmotor`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.lama_jarak_tempuh_ibukota_provinsi_dengan_nonmotor
                            }
                            label={""}
                            suffix={"Jam"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>keterangan kendaraan umum ibukota provinsi</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_provinsi_keterangan"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah kendaraan umum ibukota provinsi</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_provinsi_jumlah`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.potensi_umum?.orbitasi
                                ?.kendaraan_umum_ibukota_provinsi_jumlah
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                            additionalOptions={{
                              disabled:
                                watch(
                                  `potensi_sumber_daya_alam.potensi_umum.orbitasi.kendaraan_umum_ibukota_provinsi_keterangan`
                                ) === "tidak ada",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="pertanian">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "pemilikanLahanPertanian",
                "pemilikanLahanBuah",
                "luasTanamanBuah",
                "pemasaranHasil",
                "luasTanamanPanganMenurutKomoditas",
                "tanamanApotikHidup",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"pemilikanLahanPertanian"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemilikan Lahan Pertanian</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Jumlah keluarga memiliki pertanian</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_pertanian
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_pertanian?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_memiliki_pertanian`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga tidak memiliki perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_tidak_memiliki
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_tidak_memiliki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_tidak_memiliki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jumlah keluarga memiliki perkebunan kurang dari 10Ha
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_kurang_10ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_kurang_10ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_memiliki_kurang_10ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 10-50Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_10_50ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_10_50ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_memiliki_10_50ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 50-100Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_50_100ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_50_100ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_memiliki_50_100ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 100-500Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_100_500ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_100_500ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_memiliki_100_500ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 500-1000Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_500_1000ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_500_1000ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_memiliki_500_1000ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jumlah keluarga memiliki perkebunan lebih dari 1000Ha
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_lebih_1000ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_keluarga_memiliki_lebih_1000ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_keluarga_memiliki_lebih_1000ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah total keluarga petani</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_total_keluarga_petani
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_pertanian
                                ?.jumlah_total_keluarga_petani?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_pertanian.jumlah_total_keluarga_petani`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"luasTanamanPanganMenurutKomoditas"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Luas Tanaman Pangan Menurut Komoditas
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <th>komoditas</th>
                        <th>luas</th>
                        <th>jumlah produksi</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaLuasTanamanPanganMenurutKomoditasArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian
                                    ?.luas_tanaman_pangan_menurut_komoditas?.[
                                    idx
                                  ]?.komoditas
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian
                                    ?.luas_tanaman_pangan_menurut_komoditas?.[
                                    idx
                                  ]?.komoditas?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.pertanian.luas_tanaman_pangan_menurut_komoditas.${idx}.komoditas`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sumber_daya_alam.pertanian.luas_tanaman_pangan_menurut_komoditas.${idx}.luas`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian
                                    ?.luas_tanaman_pangan_menurut_komoditas?.[
                                    idx
                                  ]?.luas
                                }
                                label={""}
                                suffix={"Ha"}
                                type="number"
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sumber_daya_alam.pertanian.luas_tanaman_pangan_menurut_komoditas.${idx}.jumlah_produksi`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian
                                    ?.luas_tanaman_pangan_menurut_komoditas?.[
                                    idx
                                  ]?.jumlah_produksi
                                }
                                label={""}
                                suffix={"Ton/ha"}
                                type="number"
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaLuasTanamanPanganMenurutKomoditasArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={6}>
                          <Button
                            onClick={() =>
                              sdaLuasTanamanPanganMenurutKomoditasArray.append({
                                komoditas: "",
                                luas: 0,
                                jumlah_produksi: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"pemilikanLahanBuah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemilikan Lahan Buah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_perkebunan
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_perkebunan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_memiliki_perkebunan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga tidak memiliki perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_tidak_memiliki
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_tidak_memiliki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_tidak_memiliki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jumlah keluarga memiliki perkebunan kurang dari 10Ha
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_kurang_10ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_kurang_10ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_memiliki_kurang_10ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 10-50Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_10_50ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_10_50ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_memiliki_10_50ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 50-100Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_50_100ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_50_100ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_memiliki_50_100ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 100-500Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_100_500ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_100_500ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_memiliki_100_500ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 500-1000Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_500_1000ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_500_1000ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_memiliki_500_1000ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jumlah keluarga memiliki perkebunan lebih dari 1000Ha
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_lebih_1000ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_keluarga_memiliki_lebih_1000ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_keluarga_memiliki_lebih_1000ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah total keluarga yang memiliki perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_total_keluarga_perkebunan
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.pertanian?.pemilikan_lahan_buah
                                ?.jumlah_total_keluarga_perkebunan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.pertanian.pemilikan_lahan_buah.jumlah_total_keluarga_perkebunan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"luasTanamanBuah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Luas Tanaman Buah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>komoditas</th>
                        <th>luas</th>
                        <th>jumlah produksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaLuasTanamanBuahArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.pertanian?.luas_tanaman_buah?.[idx]
                                  ?.komoditas
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.pertanian?.luas_tanaman_buah?.[idx]
                                  ?.komoditas?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.pertanian.luas_tanaman_buah.${idx}.komoditas`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.pertanian.luas_tanaman_buah.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.pertanian?.luas_tanaman_buah?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.pertanian.luas_tanaman_buah.${idx}.jumlah_produksi`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.pertanian?.luas_tanaman_buah?.[idx]
                                  ?.jumlah_produksi
                              }
                              label={""}
                              suffix={"Ton/ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaLuasTanamanBuahArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={4}>
                          <Button
                            onClick={() =>
                              sdaLuasTanamanBuahArray.append({
                                komoditas: "",
                                luas: 0,
                                jumlah_produksi: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"pemasaranHasil"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemasaran Hasil</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Dijual langsung ke konsumen</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.pertanian.pemasaran_hasil.dijual_langsung_ke_konsumen"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke pasar hewan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.pertanian.pemasaran_hasil.dijual_ke_pasar_hewan"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui KUD</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.pertanian.pemasaran_hasil.dijual_melalui_kud"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui tengkulak</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.pertanian.pemasaran_hasil.dijual_melalui_tengkulak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui pengecer</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.pertanian.pemasaran_hasil.dijual_melalui_pengecer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke lumbung desa</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.pertanian.pemasaran_hasil.dijual_ke_lumbung_desa"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tidak dijual</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.pertanian.pemasaran_hasil.tidak_dijual"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"tanamanApotikHidup"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">tanaman apotik hidup</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <th>tanaman</th>
                        <th>luas</th>
                        <th>hasil panen</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaLuasTanamanApotikHidupArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian?.tanaman_apotik_hidup?.[idx]
                                    ?.tanaman
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian?.tanaman_apotik_hidup?.[idx]
                                    ?.tanaman?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.pertanian.tanaman_apotik_hidup.${idx}.tanaman`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sumber_daya_alam.pertanian.tanaman_apotik_hidup.${idx}.luas`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian?.tanaman_apotik_hidup?.[idx]
                                    ?.luas
                                }
                                label={""}
                                suffix={"Ha"}
                                type="number"
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sumber_daya_alam.pertanian.tanaman_apotik_hidup.${idx}.hasil_panen`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.pertanian?.tanaman_apotik_hidup?.[idx]
                                    ?.hasil_panen
                                }
                                label={""}
                                suffix={"Ton/ha"}
                                type="number"
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaLuasTanamanApotikHidupArray.remove(idx)
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={6}>
                          <Button
                            onClick={() =>
                              sdaLuasTanamanApotikHidupArray.append({
                                tanaman: "",
                                luas: 0,
                                hasil_panen: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="perkebunan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "pemilihanLahanPerkebunan",
                "luasPerkebunanMenurutKomoditas",
                "pemasaranHasilPerkebunan",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"pemilihanLahanPerkebunan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemilikan Lahan Perkebunan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_perkebunan
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_perkebunan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_memiliki_perkebunan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga tidak memiliki perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_tidak_memiliki
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_tidak_memiliki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_tidak_memiliki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jumlah keluarga memiliki perkebunan kurang dari 10Ha
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_kurang_10ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_kurang_10ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_memiliki_kurang_10ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 10-50Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_10_50ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_10_50ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_memiliki_10_50ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 50-100Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_50_100ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_50_100ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_memiliki_50_100ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 100-500Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_100_500ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_100_500ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_memiliki_100_500ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah keluarga memiliki perkebunan 500-1000Ha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_500_1000ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_500_1000ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_memiliki_500_1000ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jumlah keluarga memiliki perkebunan lebih dari 1000Ha
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_lebih_1000ha
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_keluarga_memiliki_lebih_1000ha?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_keluarga_memiliki_lebih_1000ha`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah total keluarga yang memiliki perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_total_keluarga_perkebunan
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.jumlah_total_keluarga_perkebunan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.jumlah_total_keluarga_perkebunan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jumlah kepemilikan usaha perkebunan milik negara
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.kepemilikan_usaha_perkebunan_milik_negara
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.kepemilikan_usaha_perkebunan_milik_negara
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.kepemilikan_usaha_perkebunan_milik_negara`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Total luas perkebunan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.total_luas_pekerbunan
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.perkebunan?.pemilihan_lahan_perkebunan
                                ?.total_luas_pekerbunan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.perkebunan.pemilihan_lahan_perkebunan.total_luas_pekerbunan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"luasPerkebunanMenurutKomoditas"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Luas Perkebunan Menurut Komoditas
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <th rowSpan={2}>jenis</th>
                        <th colSpan={2}>swasta/negara</th>
                        <th colSpan={2}>rakyat</th>
                        <th></th>
                      </tr>
                      <tr className="text-center align-middle">
                        <th>luas (ha)</th>
                        <th>luas (kW/ha)</th>
                        <th>luas (ha)</th>
                        <th>luas (kw/ha)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaLuasPerkebunanMenurutKomoditasArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.komoditas
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.komoditas?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perkebunan.luas_perkebunan_menurut_komoditas.${idx}.komoditas`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.swasta_luas
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.swasta_luas?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perkebunan.luas_perkebunan_menurut_komoditas.${idx}.swasta_luas`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.swasta_hasil
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.swasta_hasil?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perkebunan.luas_perkebunan_menurut_komoditas.${idx}.swasta_hasil`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.rakyat_luas
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.rakyat_luas?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perkebunan.luas_perkebunan_menurut_komoditas.${idx}.rakyat_luas`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.rakyat_hasil
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perkebunan
                                    ?.luas_perkebunan_menurut_komoditas?.[idx]
                                    ?.rakyat_hasil?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perkebunan.luas_perkebunan_menurut_komoditas.${idx}.rakyat_hasil`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaLuasPerkebunanMenurutKomoditasArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={6}>
                          <Button
                            onClick={() =>
                              sdaLuasPerkebunanMenurutKomoditasArray.append({
                                komoditas: "",
                                swasta_luas: 0,
                                swasta_hasil: 0,
                                rakyat_luas: 0,
                                rakyat_hasil: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"pemasaranHasilPerkebunan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemasaran Hasil Perkebunan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Dijual langsung ke konsumen</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perkebunan.pemasaran_hasil_perkebunan.dijual_langsung_ke_konsumen"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke pasar hewan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perkebunan.pemasaran_hasil_perkebunan.dijual_ke_pasar_hewan"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui KUD</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perkebunan.pemasaran_hasil_perkebunan.dijual_melalui_kud"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui tengkulak</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perkebunan.pemasaran_hasil_perkebunan.dijual_melalui_tengkulak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui pengecer</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perkebunan.pemasaran_hasil_perkebunan.dijual_melalui_pengecer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke lumbung desa</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perkebunan.pemasaran_hasil_perkebunan.dijual_ke_lumbung_desa"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tidak dijual</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perkebunan.pemasaran_hasil_perkebunan.tidak_dijual"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="kehutanan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "luasLahanMenurutPemilikan",
                "hasilHutan",
                "kondisiHutan",
                "dampakPengolahanHutan",
                "mekanismePemasaranHasilHutan",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"luasLahanMenurutPemilikan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Luas Lahan Menurut Pemilikan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Milik negara</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.kehutanan.luas_lahan_menurut_pemilikan.milik_negara`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kehutanan?.luas_lahan_menurut_pemilikan
                                ?.milik_negara
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Milik adat/ulayat</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.kehutanan.luas_lahan_menurut_pemilikan.milik_adat_ulayat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kehutanan?.luas_lahan_menurut_pemilikan
                                ?.milik_adat_ulayat
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Perhutani instansi sektoral</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.kehutanan.luas_lahan_menurut_pemilikan.perhutani_instansi_sektoral`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kehutanan?.luas_lahan_menurut_pemilikan
                                ?.perhutani_instansi_sektoral
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Milik masyarakat perorangan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.kehutanan.luas_lahan_menurut_pemilikan.milik_masyarakat_perorangan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kehutanan?.luas_lahan_menurut_pemilikan
                                ?.milik_masyarakat_perorangan
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.kehutanan.luas_lahan_menurut_pemilikan.total`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kehutanan?.luas_lahan_menurut_pemilikan?.total
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"hasilHutan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Hasil hutan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Komoditas</th>
                        <th>Satuan</th>
                        <th>Nilai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaHasilHutanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.hasil_hutan?.[idx]?.komoditas
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.hasil_hutan?.[idx]?.komoditas
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kehutanan.hasil_hutan.${idx}.komoditas`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.hasil_hutan?.[idx]?.satuan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.hasil_hutan?.[idx]?.satuan
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kehutanan.hasil_hutan.${idx}.satuan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.hasil_hutan?.[idx]?.value
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.hasil_hutan?.[idx]?.value
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kehutanan.hasil_hutan.${idx}.value`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaHasilHutanArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={4}>
                          <Button
                            onClick={() =>
                              sdaHasilHutanArray.append({
                                komoditas: "",
                                satuan: "",
                                value: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"kondisiHutan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kondisi Hutan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Hutan</th>
                        <th>Baik</th>
                        <th>Rusak</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaKondisiHutanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.kondisi_hutan?.[idx]?.hutan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.kondisi_hutan?.[idx]?.hutan
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kehutanan.kondisi_hutan.${idx}.hutan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.kehutanan.kondisi_hutan.${idx}.baik`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.kondisi_hutan?.[idx]?.baik
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.kehutanan.kondisi_hutan.${idx}.rusak`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.kondisi_hutan?.[idx]?.rusak
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.kehutanan.kondisi_hutan.${idx}.total`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kehutanan?.kondisi_hutan?.[idx]?.total
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaKondisiHutanArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={5}>
                          <Button
                            onClick={() =>
                              sdaKondisiHutanArray.append({
                                hutan: "",
                                baik: 0,
                                rusak: 0,
                                total: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"dampakPengolahanHutan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Dampak Pengolahan Hutan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Dampak</th>
                        <th>Ya/Tidak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaDampakPengolahanHutanArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.kehutanan?.dampak_pengolahan_hutan?.[idx]
                                    ?.dampak
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.kehutanan?.dampak_pengolahan_hutan?.[idx]
                                    ?.dampak?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.kehutanan.dampak_pengolahan_hutan.${idx}.dampak`
                                )}
                              />
                            </td>
                            <td>
                              <SelectYaAtauTidak
                                control={control}
                                errors={errors}
                                fieldName={`potensi_sumber_daya_alam.kehutanan.dampak_pengolahan_hutan.${idx}.dampak`}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaDampakPengolahanHutanArray.remove(idx)
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaDampakPengolahanHutanArray.append({
                                dampak: "",
                                value_string: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"mekanismePemasaranHasilHutan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Mekanisme Pemasaran Hasil Hutan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Dijual langsung ke konsumen</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kehutanan.mekanisme_pemasaran_hasil_hutan.dijual_langsung_ke_konsumen"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke pasar hewan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kehutanan.mekanisme_pemasaran_hasil_hutan.dijual_ke_pasar"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui KUD</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kehutanan.mekanisme_pemasaran_hasil_hutan.dijual_melalui_kud"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui tengkulak</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kehutanan.mekanisme_pemasaran_hasil_hutan.dijual_melalui_tengkulak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui pengecer</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kehutanan.mekanisme_pemasaran_hasil_hutan.dijual_melalui_pengecer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke lumbung desa</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kehutanan.mekanisme_pemasaran_hasil_hutan.dijual_ke_lumbung_desa_kel"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tidak dijual</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kehutanan.mekanisme_pemasaran_hasil_hutan.tidak_dijual"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="peternakan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "jenisPopulasiTernak",
                "produksiPeternakan",
                "ketersediaanHijauanPakanTernak",
                "pemilikUsahaPengolahanHasilTernak",
                "pemasaranHasilTernak",
                "ketersediaanLahanPemeliharaanTernak",
              ]}>
              <DataPotensiDesaAccordionItem eventKey={"jenisPopulasiTernak"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jenis Populasi Ternak</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Jenis ternak</th>
                        <th>Jumlah pemilik</th>
                        <th>Perkiraan jumlah populasi</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaJenisPopulasiTernakArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.jenis_populasi_ternak?.[idx]
                                  ?.jenis_ternak
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.jenis_populasi_ternak?.[idx]
                                  ?.jenis_ternak?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.peternakan.jenis_populasi_ternak.${idx}.jenis_ternak`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.jenis_populasi_ternak?.[idx]
                                  ?.jumlah_pemilik
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.jenis_populasi_ternak?.[idx]
                                  ?.jumlah_pemilik?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.peternakan.jenis_populasi_ternak.${idx}.jumlah_pemilik`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.jenis_populasi_ternak?.[idx]
                                  ?.perkiraan_jumlah_populasi
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.jenis_populasi_ternak?.[idx]
                                  ?.perkiraan_jumlah_populasi?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.peternakan.jenis_populasi_ternak.${idx}.perkiraan_jumlah_populasi`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaJenisPopulasiTernakArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={4}>
                          <Button
                            onClick={() =>
                              sdaJenisPopulasiTernakArray.append({
                                jenis_ternak: "",
                                jumlah_pemilik: 0,
                                perkiraan_jumlah_populasi: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"produksiPeternakan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Produksi Peternakan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Jenis produksi</th>
                        <th>Satuan</th>
                        <th>Nilai</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaProduksiPeternakanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.produksi_peternakan?.[idx]
                                  ?.jenis_produksi
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.produksi_peternakan?.[idx]
                                  ?.jenis_produksi?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.peternakan.produksi_peternakan.${idx}.jenis_produksi`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.produksi_peternakan?.[idx]
                                  ?.satuan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.produksi_peternakan?.[idx]
                                  ?.satuan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.peternakan.produksi_peternakan.${idx}.satuan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.produksi_peternakan?.[idx]
                                  ?.value
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.peternakan?.produksi_peternakan?.[idx]
                                  ?.value?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.peternakan.produksi_peternakan.${idx}.value`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaProduksiPeternakanArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={4}>
                          <Button
                            onClick={() =>
                              sdaProduksiPeternakanArray.append({
                                jenis_produksi: "",
                                satuan: "",
                                value: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"ketersediaanHijauanPakanTernak"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Ketersediaan Hijauan Pakan Ternak
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Ketersediaan pakan ternak</th>
                        <th>Satuan</th>
                        <th>Nilai</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaKetersediaanHijauanPakanTernakArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_hijauan_pakan_ternak?.[idx]
                                    ?.ketersediaan_pakan_ternak
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_hijauan_pakan_ternak?.[idx]
                                    ?.ketersediaan_pakan_ternak?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.peternakan.ketersediaan_hijauan_pakan_ternak.${idx}.ketersediaan_pakan_ternak`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_hijauan_pakan_ternak?.[idx]
                                    ?.satuan
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_hijauan_pakan_ternak?.[idx]
                                    ?.satuan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.peternakan.ketersediaan_hijauan_pakan_ternak.${idx}.satuan`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_hijauan_pakan_ternak?.[idx]
                                    ?.value
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_hijauan_pakan_ternak?.[idx]
                                    ?.value?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.peternakan.ketersediaan_hijauan_pakan_ternak.${idx}.value`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaKetersediaanHijauanPakanTernakArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={4}>
                          <Button
                            onClick={() =>
                              sdaKetersediaanHijauanPakanTernakArray.append({
                                ketersediaan_pakan_ternak: "",
                                satuan: "ha",
                                value: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"pemilikUsahaPengolahanHasilTernak"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Pemilik usaha pengolahan hasil ternak
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Hasil ternak</th>
                        <th>Jumlah pemilik usaha</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaPemilikUsahaPengolahanHasilTernakArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.pemilik_usaha_pengolahan_hasil_ternak?.[
                                    idx
                                  ]?.hasil_ternak
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.pemilik_usaha_pengolahan_hasil_ternak?.[
                                    idx
                                  ]?.hasil_ternak?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.peternakan.pemilik_usaha_pengolahan_hasil_ternak.${idx}.hasil_ternak`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.pemilik_usaha_pengolahan_hasil_ternak?.[
                                    idx
                                  ]?.jumlah_pemilik_usaha
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.pemilik_usaha_pengolahan_hasil_ternak?.[
                                    idx
                                  ]?.jumlah_pemilik_usaha?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.peternakan.pemilik_usaha_pengolahan_hasil_ternak.${idx}.jumlah_pemilik_usaha`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaPemilikUsahaPengolahanHasilTernakArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaPemilikUsahaPengolahanHasilTernakArray.append({
                                hasil_ternak: "",
                                jumlah_pemilik_usaha: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"pemasaranHasilTernak"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemasaran Hasil Ternak</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Dijual langsung ke konsumen</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.peternakan.pemasaran_hasil_ternak.dijual_langsung_ke_konsumen"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke pasar hewan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.peternakan.pemasaran_hasil_ternak.dijual_ke_pasar"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui KUD</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.peternakan.pemasaran_hasil_ternak.dijual_melalui_kud"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui tengkulak</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.peternakan.pemasaran_hasil_ternak.dijual_melalui_tengkulak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui pengecer</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.peternakan.pemasaran_hasil_ternak.dijual_melalui_pengecer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke lumbung desa</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.peternakan.pemasaran_hasil_ternak.dijual_ke_lumbung_desa_kel"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tidak dijual</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.peternakan.pemasaran_hasil_ternak.tidak_dijual"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"ketersediaanLahanPemeliharaanTernak"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Ketersediaan Lahan Pemeliharaan Ternak
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>ketersediaan lahan</th>
                        <th>luas lahan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaKetersediaanLahanPemeliharaanTernakArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_lahan_pemeliharaan_ternak?.[
                                    idx
                                  ]?.ketersediaan_lahan
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_lahan_pemeliharaan_ternak?.[
                                    idx
                                  ]?.ketersediaan_lahan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.peternakan.ketersediaan_lahan_pemeliharaan_ternak.${idx}.ketersediaan_lahan`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sumber_daya_alam.peternakan.ketersediaan_lahan_pemeliharaan_ternak.${idx}.value`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.peternakan
                                    ?.ketersediaan_lahan_pemeliharaan_ternak?.[
                                    idx
                                  ]?.value
                                }
                                label={""}
                                suffix={"Ha"}
                                type="number"
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaKetersediaanLahanPemeliharaanTernakArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaKetersediaanLahanPemeliharaanTernakArray.append(
                                {
                                  ketersediaan_lahan: "",
                                  value: 0,
                                }
                              )
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="perikanan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "jenisDanAlatProduksiBudidayaIkanLautDanPayau",
                "jenisDanAlatProduksiBudidayaIkanLautDanPayau",
                "jenisIkanDanProduksi",
                "pemasaranHasilPerikanan",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"jenisDanAlatProduksiBudidayaIkanLautDanPayau"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Jenis dan Alat Produksi Budidaya Ikan Laut dan Payau
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Alat produksi</th>
                        <th>Jumlah</th>
                        <th>Satuan jumlah</th>
                        <th>Jumlah produksi</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaJenisDanAlatProduksiBudidayaIkanLautDanPayauArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau?.[
                                    idx
                                  ]?.alat_produksi
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau?.[
                                    idx
                                  ]?.alat_produksi?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau.${idx}.alat_produksi`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau?.[
                                    idx
                                  ]?.jumlah
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau?.[
                                    idx
                                  ]?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau?.[
                                    idx
                                  ]?.satuan_jumlah
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau?.[
                                    idx
                                  ]?.satuan_jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau.${idx}.satuan_jumlah`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau.${idx}.jumlah_produksi`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_alat_produksi_budidaya_ikan_laut_dan_payau?.[
                                    idx
                                  ]?.jumlah_produksi
                                }
                                label={""}
                                suffix={"Ton/thn"}
                                type="number"
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaJenisDanAlatProduksiBudidayaIkanLautDanPayauArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={5}>
                          <Button
                            onClick={() =>
                              sdaJenisDanAlatProduksiBudidayaIkanLautDanPayauArray.append(
                                {
                                  alat_produksi: "",
                                  jumlah: 0,
                                  satuan_jumlah: "",
                                  jumlah_produksi: 0,
                                }
                              )
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"jenisDanSaranaProduksiBudidayaIkanAirTawar"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Jenis dan Sarana Produksi Budidaya Ikan Air Tawar
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Alat produksi</th>
                        <th>Jumlah</th>
                        <th>Satuan jumlah</th>
                        <th>Jumlah produksi</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaJenisDanSaranaProduksiBudidayaIkanAirTawarArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar?.[
                                    idx
                                  ]?.sarana_produksi
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar?.[
                                    idx
                                  ]?.sarana_produksi?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar.${idx}.sarana_produksi`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar?.[
                                    idx
                                  ]?.jumlah
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar?.[
                                    idx
                                  ]?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar?.[
                                    idx
                                  ]?.satuan_jumlah
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar?.[
                                    idx
                                  ]?.satuan_jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar.${idx}.satuan_jumlah`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sumber_daya_alam.perikanan.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar.${idx}.jumlah_produksi`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.perikanan
                                    ?.jenis_dan_sarana_produksi_budidaya_ikan_air_tawar?.[
                                    idx
                                  ]?.jumlah_produksi
                                }
                                label={""}
                                suffix={"Ton/thn"}
                                type="number"
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaJenisDanSaranaProduksiBudidayaIkanAirTawarArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={5}>
                          <Button
                            onClick={() =>
                              sdaJenisDanSaranaProduksiBudidayaIkanAirTawarArray.append(
                                {
                                  sarana_produksi: "",
                                  jumlah: 0,
                                  satuan_jumlah: "",
                                  jumlah_produksi: 0,
                                }
                              )
                            }
                            type="button"
                            variant="link">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"jenisIkanDanProduksi"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jenis Ikan dan Produksi</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Jenis ikan</th>
                        <th>Jumlah produksi</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaJenisIkanDanProduksiArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.perikanan?.jenis_ikan_dan_produksi?.[idx]
                                  ?.jenis_ikan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.perikanan?.jenis_ikan_dan_produksi?.[idx]
                                  ?.jenis_ikan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.perikanan.jenis_ikan_dan_produksi.${idx}.jenis_ikan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.perikanan?.jenis_ikan_dan_produksi?.[idx]
                                  ?.jumlah_produksi
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.perikanan?.jenis_ikan_dan_produksi?.[idx]
                                  ?.jumlah_produksi?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.perikanan.jenis_ikan_dan_produksi.${idx}.jumlah_produksi`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaJenisIkanDanProduksiArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaJenisIkanDanProduksiArray.append({
                                jenis_ikan: "",
                                jumlah_produksi: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"pemasaranHasilPerikanan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemasaran Hasil Perikanan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Dijual langsung ke konsumen</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perikanan.pemasaran_hasil_perikanan.dijual_langsung_ke_konsumen"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke pasar hewan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perikanan.pemasaran_hasil_perikanan.dijual_ke_pasar"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui KUD</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perikanan.pemasaran_hasil_perikanan.dijual_melalui_kud"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui tengkulak</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perikanan.pemasaran_hasil_perikanan.dijual_melalui_tengkulak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui pengecer</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perikanan.pemasaran_hasil_perikanan.dijual_melalui_pengecer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke lumbung desa</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perikanan.pemasaran_hasil_perikanan.dijual_ke_lumbung_desa_kel"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tidak dijual</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.perikanan.pemasaran_hasil_perikanan.tidak_dijual"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="bahanGalian">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "jenisDanDepositBahanGalian",
                "produksiBahanGalian",
                "kepemilikanDanPengelolaanBahanGalian",
                "pemasaranHasilGalian",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"jenisDanDepositBahanGalian"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Jenis dan Deposit Bahan Galian
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <td>Jenis bahah galian</td>
                        <td>Deposit</td>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaJenisDanDepositBahanGalianArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.bahan_galian
                                    ?.jenis_dan_deposit_bahan_galian?.[idx]
                                    ?.jenis_bahan_galian
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.bahan_galian
                                    ?.jenis_dan_deposit_bahan_galian?.[idx]
                                    ?.jenis_bahan_galian?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.bahan_galian.jenis_dan_deposit_bahan_galian.${idx}.jenis_bahan_galian`
                                )}
                              />
                            </td>
                            <td>
                              <SelectYaAtauTidak
                                control={control}
                                errors={errors}
                                fieldName={`potensi_sumber_daya_alam.bahan_galian.jenis_dan_deposit_bahan_galian.${idx}.deposit`}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaJenisDanDepositBahanGalianArray.remove(idx)
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaJenisDanDepositBahanGalianArray.append({
                                jenis_bahan_galian: "",
                                deposit: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"produksiBahanGalian"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Produksi Bahan Galian</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <td>Jenis bahah galian</td>
                        <td>Produksi</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaProduksiBahanGalianArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.bahan_galian?.produksi_bahan_galian?.[idx]
                                  ?.jenis_bahan_galian
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.bahan_galian?.produksi_bahan_galian?.[idx]
                                  ?.jenis_bahan_galian?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.bahan_galian.produksi_bahan_galian.${idx}.jenis_bahan_galian`
                              )}
                            />
                          </td>
                          <td>
                            <SelectPotensi
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.bahan_galian.produksi_bahan_galian.${idx}.produksi`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaProduksiBahanGalianArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaProduksiBahanGalianArray.append({
                                jenis_bahan_galian: "",
                                produksi: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"kepemilikanDanPengelolaanBahanGalian"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Kepemilikan dan Pengelolaan Bahan Galian
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <td>Jenis bahan galian</td>
                        <td>Pengelola/pemilik</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaKepemilikanDanPengelolaanBahanGalianArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.bahan_galian
                                    ?.kepemilikan_dan_pengelolaan_bahan_galian?.[
                                    idx
                                  ]?.jenis_bahan_galian
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.bahan_galian
                                    ?.kepemilikan_dan_pengelolaan_bahan_galian?.[
                                    idx
                                  ]?.jenis_bahan_galian?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.bahan_galian.kepemilikan_dan_pengelolaan_bahan_galian.${idx}.jenis_bahan_galian`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.bahan_galian
                                    ?.kepemilikan_dan_pengelolaan_bahan_galian?.[
                                    idx
                                  ]?.pengelola_pemilik
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.bahan_galian
                                    ?.kepemilikan_dan_pengelolaan_bahan_galian?.[
                                    idx
                                  ]?.pengelola_pemilik?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.bahan_galian.kepemilikan_dan_pengelolaan_bahan_galian.${idx}.pengelola_pemilik`
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaKepemilikanDanPengelolaanBahanGalianArray.remove(
                                    idx
                                  )
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaKepemilikanDanPengelolaanBahanGalianArray.append(
                                {
                                  jenis_bahan_galian: "",
                                  pengelola_pemilik: "",
                                }
                              )
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"pemasaranHasilGalian"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemasaran Hasil Galian</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Dijual langsung ke konsumen</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.bahan_galian.pemasaran_hasil_galian.dijual_langsung_ke_konsumen"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke pasar hewan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.bahan_galian.pemasaran_hasil_galian.dijual_ke_pasar_hewan"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui KUD</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.bahan_galian.pemasaran_hasil_galian.dijual_melalui_kud"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui tengkulak</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.bahan_galian.pemasaran_hasil_galian.dijual_melalui_tengkulak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual melalui pengecer</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.bahan_galian.pemasaran_hasil_galian.dijual_melalui_pengecer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dijual ke lumbung desa</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.bahan_galian.pemasaran_hasil_galian.dijual_ke_lumbung_desa"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tidak dijual</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.bahan_galian.pemasaran_hasil_galian.tidak_dijual"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="sumberDayaAir">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "potensiAirDanSumberDayaAir",
                "sumberAirBersih",
                "kualitasAirMinum",
                "sungai",
                "rawaDanWaduk",
                "danauWadukSitu",
                "airPanas",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"potensiAirDanSumberDayaAir"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Potensi Air dan Sumber Daya Air
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <td>Jenis</td>
                        <td>Satuan</td>
                        <td>Potensi</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaPotensiAirDanSumberDayaAirArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.sumber_daya_air
                                    ?.potensi_air_dan_sumber_daya_air?.[idx]
                                    ?.jenis
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.sumber_daya_air
                                    ?.potensi_air_dan_sumber_daya_air?.[idx]
                                    ?.jenis?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.sumber_daya_air.potensi_air_dan_sumber_daya_air.${idx}.jenis`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_alam as any)
                                    ?.sumber_daya_air
                                    ?.potensi_air_dan_sumber_daya_air?.[idx]
                                    ?.satuan
                                }
                                message={
                                  (errors?.potensi_sumber_daya_alam as any)
                                    ?.sumber_daya_air
                                    ?.potensi_air_dan_sumber_daya_air?.[idx]
                                    ?.satuan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_alam.sumber_daya_air.potensi_air_dan_sumber_daya_air.${idx}.satuan`
                                )}
                              />
                            </td>
                            <td>
                              <SelectPotensi
                                control={control}
                                errors={errors}
                                fieldName={`potensi_sumber_daya_alam.sumber_daya_air.potensi_air_dan_sumber_daya_air.${idx}.potensi`}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdaPotensiAirDanSumberDayaAirArray.remove(idx)
                                }
                                variant="danger"
                                className="text-white">
                                <TrashIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                      <tr {...hideElement}>
                        <td colSpan={4}>
                          <Button
                            onClick={() =>
                              sdaPotensiAirDanSumberDayaAirArray.append({
                                jenis: "",
                                satuan: "",
                                potensi: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"sumberAirBersih"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Sumber Air Bersih</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <td>Jenis</td>
                        <td>Jumlah</td>
                        <td>Pemanfaat</td>
                        <td>Kondisi</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaSumberAirBersihArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.sumber_air_bersih?.[idx]
                                  ?.jenis
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.sumber_air_bersih?.[idx]
                                  ?.jenis?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.sumber_air_bersih.${idx}.jenis`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.sumber_air_bersih?.[idx]
                                  ?.jumlah
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.sumber_air_bersih?.[idx]
                                  ?.jumlah?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.sumber_air_bersih.${idx}.jumlah`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.sumber_air_bersih?.[idx]
                                  ?.pemanfaat
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.sumber_air_bersih?.[idx]
                                  ?.pemanfaat?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.sumber_air_bersih.${idx}.pemanfaat`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <SelectBaikAtauRusak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.sumber_daya_air.sumber_air_bersih.${idx}.kondisi`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaSumberAirBersihArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={5}>
                          <Button
                            onClick={() =>
                              sdaSumberAirBersihArray.append({
                                jenis: "",
                                jumlah: 0,
                                pemanfaat: 0,
                                kondisi: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"kualitasAirMinum"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kualitas Air Minum</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <td>Jenis</td>
                        <td>Kualitas</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaKualitasAirMinumArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.kualitas_air_minum?.[idx]
                                  ?.jenis
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.kualitas_air_minum?.[idx]
                                  ?.jenis?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.kualitas_air_minum.${idx}.jenis`
                              )}
                            />
                          </td>
                          <td>
                            <SelectKualitasAirMinum
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.sumber_daya_air.kualitas_air_minum.${idx}.kualitas`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaKualitasAirMinumArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaKualitasAirMinumArray.append({
                                jenis: "",
                                kualitas: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"sungai"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Sungai</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Jumlah sungai</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.sumber_daya_air?.sungai?.jumlah_sungai
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.sumber_daya_air?.sungai?.jumlah_sungai
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_alam.sumber_daya_air.sungai.jumlah_sungai`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kondisi tercemar</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.sungai.kondisi_tercemar`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kondisi ppendangkalan pengendapan lumpur tinggi</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.sungai.kondisi_pendangkalan_pengendapan_lumpur_tinggi`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kondisi keruh</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.sungai.kondisi_keruh`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kondisi jernih</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.sungai.kondisi_jernih`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kondisi berkurangnya biota sungai</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.sungai.kondisi_berkurangnya_biota_sungai`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kondisi kering</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.sungai.kondisi_kering`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"rawaDanWaduk"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Rawa</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>luas rawa</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.sumber_daya_air.rawa.luas_rawa`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.sumber_daya_air?.rawa?.luas_rawa
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      {sdaRawaArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.rawa?.pemanfaatan?.[idx]
                                  ?.nama_pemanfaatan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.rawa?.pemanfaatan?.[idx]
                                  ?.nama_pemanfaatan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.rawa.pemanfaatan.${idx}.nama_pemanfaatan`
                              )}
                            />
                          </td>
                          <td>
                            <SelectAdaAtauTidak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.sumber_daya_air.rawa.pemanfaatan.${idx}.termanfaatkan`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaRawaArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaRawaArray.append({
                                nama_pemanfaatan: "",
                                termanfaatkan: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"danauWadukSitu"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Pemanfaatan dan kondisi danau/waduk/situ
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>luas</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.luas`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.sumber_daya_air
                                ?.pemanfaatan_dan_kondisi_danau_waduk_situ?.luas
                            }
                            label={""}
                            suffix={"Ha"}
                            type="number"
                          />
                        </td>
                      </tr>
                      {sdaDanauWadukSituArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air
                                  ?.pemanfaatan_dan_kondisi_danau_waduk_situ
                                  ?.pemanfaatan?.[idx]?.nama_pemanfaatan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air
                                  ?.pemanfaatan_dan_kondisi_danau_waduk_situ
                                  ?.pemanfaatan?.[idx]?.nama_pemanfaatan
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.pemanfaatan.${idx}.nama_pemanfaatan`
                              )}
                            />
                          </td>
                          <td>
                            <SelectAdaAtauTidak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.pemanfaatan.${idx}.termanfaatkan`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaDanauWadukSituArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={3}>
                          <Button
                            onClick={() =>
                              sdaDanauWadukSituArray.append({
                                nama_pemanfaatan: "",
                                termanfaatkan: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mt-2 mb-0 fw-bold">Kondisi</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>tercemar</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.kondisi.tercemar`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pendangkalan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.kondisi.pendangkalan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>keruh</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.kondisi.keruh`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>berlumpur</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sumber_daya_alam.sumber_daya_air.pemanfaatan_dan_kondisi_danau_waduk_situ.kondisi.berlumpur`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"airPanas"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Air Panas</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <th rowSpan={2}>sumber</th>
                        <th rowSpan={2}>jumlah lokasi</th>
                        <th rowSpan={2}>pemanfaatan</th>
                        <th colSpan={3}>kepemilikan/pengelolaan</th>
                        <th rowSpan={2}></th>
                      </tr>
                      <tr className="text-center align-middle">
                        <th>kepemilikan pemda</th>
                        <th>kepemilikan swasta</th>
                        <th>kepemilikan adat perorangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaAirPanasArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]?.sumber
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]?.sumber
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.air_panas.${idx}.sumber`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.jumlah_lokasi
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.jumlah_lokasi?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.air_panas.${idx}.jumlah_lokasi`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.pemanfaatan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.pemanfaatan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.air_panas.${idx}.pemanfaatan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.kepemilikan_pemda
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.kepemilikan_pemda?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.air_panas.${idx}.kepemilikan_pemda`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.kepemilikan_swasta
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.kepemilikan_swasta?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.air_panas.${idx}.kepemilikan_swasta`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.kepemilikan_adat_perorangan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.sumber_daya_air?.air_panas?.[idx]
                                  ?.kepemilikan_adat_perorangan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.sumber_daya_air.air_panas.${idx}.kepemilikan_adat_perorangan`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaAirPanasArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={7}>
                          <Button
                            onClick={() =>
                              sdaAirPanasArray.append({
                                sumber: "",
                                jumlah_lokasi: 0,
                                pemanfaatan: "",
                                kepemilikan_pemda: 0,
                                kepemilikan_swasta: 0,
                                kepemilikan_adat_perorangan: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="kualitasUdara">
            {/* KUALITAS UDARA  */}
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["kualitasUdara"]}>
              <DataPotensiDesaAccordionItem eventKey={"kualitasUdara"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kualitas Udara</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <th rowSpan={2}>sumber</th>
                        <th rowSpan={2}>jumlah lokasi</th>
                        <th rowSpan={2}>polutan pencemar</th>
                        <th rowSpan={2}>efek terhadap kesehatan</th>
                        <th colSpan={3}>kepemilikan</th>
                        <th rowSpan={2}></th>
                      </tr>
                      <tr className="text-center align-middle">
                        <th>pemda</th>
                        <th>swasta</th>
                        <th>perorangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaKualitasUdaraArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.sumber
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.sumber?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kualitas_udara.${idx}.sumber`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]
                                  ?.jumlah_lokasi_sumber_pencemar
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]
                                  ?.jumlah_lokasi_sumber_pencemar?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kualitas_udara.${idx}.jumlah_lokasi_sumber_pencemar`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.polutan_pencemar
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.polutan_pencemar
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kualitas_udara.${idx}.polutan_pencemar`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]
                                  ?.efek_terhadap_kesehatan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]
                                  ?.efek_terhadap_kesehatan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kualitas_udara.${idx}.efek_terhadap_kesehatan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.kepemilikan_pemda
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.kepemilikan_pemda
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kualitas_udara.${idx}.kepemilikan_pemda`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.kepemilikan_swasta
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]?.kepemilikan_swasta
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kualitas_udara.${idx}.kepemilikan_swasta`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]
                                  ?.kepemilikan_perorangan
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.kualitas_udara?.[idx]
                                  ?.kepemilikan_perorangan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.kualitas_udara.${idx}.kepemilikan_perorangan`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaKualitasUdaraArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={8}>
                          <Button
                            onClick={() =>
                              sdaKualitasUdaraArray.append({
                                sumber: "",
                                jumlah_lokasi_sumber_pencemar: 0,
                                polutan_pencemar: "",
                                efek_terhadap_kesehatan: "",
                                kepemilikan_pemda: 0,
                                kepemilikan_swasta: 0,
                                kepemilikan_perorangan: 0,
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="kebisingan">
            {/* KEBISINGAN  */}
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["kebisingan"]}>
              <DataPotensiDesaAccordionItem eventKey={"kebisingan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kebisingan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Dampak ekses kebisingan tertinggi</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kebisingan.kebisingan_tinggi_ekses_dampak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sumber kebisingan tertinggi</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.kebisingan_tinggi_sumber
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.kebisingan_tinggi_sumber?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.kebisingan_tinggi_sumber"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Efek terhadap penduduk kebisingan tertinggi</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan
                                ?.kebisingan_tinggi_efek_thd_penduduk
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan
                                ?.kebisingan_tinggi_efek_thd_penduduk?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.kebisingan_tinggi_efek_thd_penduduk"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dampak ekses kebisingan sedang</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kebisingan.kebisingan_sedang_ekses_dampak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sumber kebisingan sedang</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.kebisingan_sedang_sumber
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.kebisingan_sedang_sumber?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.kebisingan_sedang_sumber"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Efek terhadap penduduk kebisingan sedang</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan
                                ?.kebisingan_sedang_efek_thd_penduduk
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan
                                ?.kebisingan_sedang_efek_thd_penduduk?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.kebisingan_sedang_efek_thd_penduduk"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dampak ekses kebisingan ringan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kebisingan.kebisingan_ringan_ekses_dampak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sumber kebisingan ringan</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.kebisingan_ringan_sumber
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.kebisingan_ringan_sumber?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.kebisingan_ringan_sumber"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Efek terhadap penduduk kebisingan ringan</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan
                                ?.kebisingan_ringan_efek_thd_penduduk
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan
                                ?.kebisingan_ringan_efek_thd_penduduk?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.kebisingan_ringan_efek_thd_penduduk"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dampak ekses kebisingan ringan</td>
                        <td>
                          <SelectYaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName="potensi_sumber_daya_alam.kebisingan.tidak_bising_ekses_dampak"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sumber kebisingan ringan</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.tidak_bising_sumber
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.tidak_bising_sumber?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.tidak_bising_sumber"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Efek terhadap penduduk kebisingan ringan</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.tidak_bising_efek_thd_penduduk
                            }
                            message={
                              (errors?.potensi_sumber_daya_alam as any)
                                ?.kebisingan?.tidak_bising_efek_thd_penduduk
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_alam.kebisingan.tidak_bising_efek_thd_penduduk"
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="ruangPublikTaman">
            {/* RUANG PUBLIK TAMAN  */}
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["ruangPublikTaman"]}>
              <DataPotensiDesaAccordionItem eventKey={"ruangPublikTaman"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Ruang Publik Taman</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <th>ruang publik</th>
                        <th>keberadaan</th>
                        <th>luas</th>
                        <th>tingkat pemanfaatan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaRuangPublikTamanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.ruang_publik_taman?.[idx]?.ruang_publik
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.ruang_publik_taman?.[idx]?.ruang_publik
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.ruang_publik_taman.${idx}.ruang_publik`
                              )}
                            />
                          </td>
                          <td>
                            <SelectAdaAtauTidak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.ruang_publik_taman.${idx}.keberadaan`}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={true}
                              register={register(
                                `potensi_sumber_daya_alam.ruang_publik_taman.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.ruang_publik_taman?.[idx]?.luas
                              }
                              label={""}
                              suffix={"m2"}
                              type="number"
                            />
                          </td>
                          <td>
                            <SelectAktifAtauPasif
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.ruang_publik_taman.${idx}.tingkat_pemanfaatan`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdaRuangPublikTamanArray.remove(idx)
                              }
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={5}>
                          <Button
                            onClick={() =>
                              sdaRuangPublikTamanArray.append({
                                ruang_publik: "",
                                keberadaan: "ada",
                                luas: 0,
                                tingkat_pemanfaatan: "aktif",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="potensiWisata">
            {/* POTENSI WISATA  */}
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["potensiWisata"]}>
              <DataPotensiDesaAccordionItem eventKey={"potensiWisata"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Potensi wisata</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr className="text-center align-middle">
                        <th>lokasi</th>
                        <th>keberadaan</th>
                        <th>luas</th>
                        <th>tingkat pemanfaatan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdaPotensiWisataArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_wisata?.[idx]?.lokasi
                              }
                              message={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_wisata?.[idx]?.lokasi?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_wisata.${idx}.lokasi`
                              )}
                            />
                          </td>
                          <td>
                            <SelectAdaAtauTidak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.potensi_wisata.${idx}.keberadaan`}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sumber_daya_alam.potensi_wisata.${idx}.luas`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sumber_daya_alam as any)
                                  ?.potensi_wisata?.[idx]?.luas
                              }
                              label={""}
                              suffix={"Ha"}
                              type="number"
                            />
                          </td>
                          <td>
                            <SelectAktifAtauPasif
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sumber_daya_alam.potensi_wisata.${idx}.tingkat_pemanfaatan`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdaPotensiWisataArray.remove(idx)}
                              variant="danger"
                              className="text-white">
                              <TrashIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr {...hideElement}>
                        <td colSpan={5}>
                          <Button
                            onClick={() =>
                              sdaPotensiWisataArray.append({
                                lokasi: "",
                                keberadaan: "ya",
                                luas: 0,
                                tingkat_pemanfaatan: "",
                              })
                            }
                            type="button"
                            variant="link"
                            className="text-primary w-100">
                            Tambah data
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}
