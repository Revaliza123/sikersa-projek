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
  // SelectAktifAtauPasif,
  SelectAktifAtauTidakAktif,
  // SelectBaikAtauTidak,
  // SelectBulan,
  // SelectKesuburanTanah,
  // SelectKualitasAirMinum,
  SelectPendidikan,
  // SelectPotensi,
  SelectTerdaftarAtauTerakreditasi,
  // SelectYaAtauTidak
} from "../DataPotensiDesaForm"
import { useDisableWhenDetailPath } from "../hooks/useDisableDetail"

export function DataPotensiKelembagaan({
  activeForm,
  activeTabKelembagaan,
  setActiveTabKelembagaan,
  register,
  errors,
  control,
  // watch,
}: {
  activeForm: string
  activeTabKelembagaan: string
  setActiveTabKelembagaan: (v: string) => void
  register: any
  errors: any
  control: any
  // watch: any,
}) {
  const { hideElement } = useDisableWhenDetailPath()
  const kelembagaanTingkatPendidikanAparatArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_pemerintahan.tingkat_pendidikan_aparat",
  })

  const kelembagaanPendidikanAnggotaBpdArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_pemerintahan.pendidikan_anggota_bpd",
  })

  const kelembagaanLembagaKemasyarakatanArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_kemasyarakatan",
  })

  const kelembagaanTingkatPartisipasiPolitikArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.tingkat_partisipasi_politik",
  })

  const kelembagaanPendidikanFormalArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal",
  })

  const kelembagaanPendidikanFormalKeagamaanArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan",
  })

  const kelembagaanPendidikanNonFormalArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal",
  })

  const kelembagaanLembagaEkonomiUnitUsahaArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.lembaga_ekonomi_unit_usaha",
  })

  const kelembagaanJasaLembagaKeuanganArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.jasa_lembaga_keuangan",
  })

  const kelembagaanIndustriKecilMenengahArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.industri_kecil_menengah",
  })

  const kelembagaanUsahaJasaPerdaganganArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_perdagangan",
  })

  const kelembagaanUsahaJasaHiburanArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hiburan",
  })

  const kelembagaanUsahaJasaGasListrikBbmAirArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_gas_listrik_bbm_air",
  })

  const kelembagaanUsahaJasaKeterampilanArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_keterampilan",
  })

  const kelembagaanUsahaJasaHukumKonsultansiArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hukum_konsultansi",
  })

  const kelembagaanUsahaJasaPenginapanArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_penginapan",
  })

  const kelembagaanSimbolAdatArray = useFieldArray({
    control,
    name: "potensi_kelembagaan.lembaga_adat.simbol_adat",
  })

  return (
    <div className={activeForm === "kelembagaan" ? "d-block" : "d-none"}>
      <Tab.Container defaultActiveKey={activeTabKelembagaan}>
        <Nav
          className="d-flex justify-content-center my-3"
          activeKey={activeTabKelembagaan}
          onSelect={(selectedKey) =>
            setActiveTabKelembagaan(selectedKey as string)
          }>
          <Nav.Item>
            <TabLink eventKey="lembagaPemerintahan">
              Lembaga Pemerintahan
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="lembagaKemasyarakatan">
              Lembaga Kemasyarakatan
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="tingkatPartisipasiPolitik">
              Tingkat Partisipasi Politik
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="lembagaEkonomi">Lembaga Ekonomi</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="lembagaPendidikan">Lembaga Pendidikan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="lembagaAdat">Lembaga Adat</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="lembagaKeamanan">Lembaga Keamanan</TabLink>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="lembagaPemerintahan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "pemerintahDesaKelurahan",
                "tingkatPendidikanAparat",
                "badanPermusyawaratanDesa",
                "pendidikanAnggotaBpd",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"pemerintahDesaKelurahan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pemerintah Desa Kelurahan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  {/* DASAR HUKUM */}
                  <h6 className="mb-0 fw-bold">Dasar hukum</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>dasar hukum pembentukan pemerintah desa kel</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan
                                ?.pemerintah_desa_kelurahan?.dasar_hukum
                                ?.dasar_hukum_pembentukan_pemerintah_desa_kel
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan
                                ?.pemerintah_desa_kelurahan?.dasar_hukum
                                ?.dasar_hukum_pembentukan_pemerintah_desa_kel
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_pemerintahan.pemerintah_desa_kelurahan.dasar_hukum.dasar_hukum_pembentukan_pemerintah_desa_kel`
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>dasar hukum pembentukan bpd</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan
                                ?.pemerintah_desa_kelurahan?.dasar_hukum
                                ?.dasar_hukum_pembentukan_bpd
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan
                                ?.pemerintah_desa_kelurahan?.dasar_hukum
                                ?.dasar_hukum_pembentukan_bpd?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_pemerintahan.pemerintah_desa_kelurahan.dasar_hukum.dasar_hukum_pembentukan_bpd`
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* APARAT PEMERINTAHAN DESA */}
                  <h6 className="mb-0 fw-bold">Aparat pemerintahan desa</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>jumlah aparat pemerintahan desa kelurahan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.aparat_pemerintahan_desa
                                ?.jumlah_aparat_pemerintahan_desa_kel
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.aparat_pemerintahan_desa
                                ?.jumlah_aparat_pemerintahan_desa_kel?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_pemerintahan.aparat_pemerintahan_desa.jumlah_aparat_pemerintahan_desa_kel`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah perangkat desa kelurahan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.aparat_pemerintahan_desa
                                ?.jumlah_perangkat_desa_kelurahan
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.aparat_pemerintahan_desa
                                ?.jumlah_perangkat_desa_kelurahan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_pemerintahan.aparat_pemerintahan_desa.jumlah_perangkat_desa_kelurahan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                    {/* nested kepala desa here */}
                  </table>

                  {/* dusun_lingkungan */}
                  <h6 className="mb-0 fw-bold">Dusun lingkungan</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>jumlah staf</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.dusun_lingkungan
                                ?.jumlah_staf
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.dusun_lingkungan
                                ?.jumlah_staf?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_pemerintahan.dusun_lingkungan.jumlah_staf`
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah dusun</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.dusun_lingkungan
                                ?.jumlah_dusun
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan?.dusun_lingkungan
                                ?.jumlah_dusun?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_pemerintahan.dusun_lingkungan.jumlah_dusun`
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                    {/* nested kepala_dusun_lingkungan here */}
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"tingkatPendidikanAparat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tingkat Pendidikan Aparat</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  {/* TINGKAT PENDIDIKAN BPD */}
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>pemerintah desa</th>
                        <th>pendidikan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanTingkatPendidikanAparatArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pemerintahan
                                    ?.tingkat_pendidikan_aparat?.[idx]
                                    ?.pemerintah_desa
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pemerintahan
                                    ?.tingkat_pendidikan_aparat?.[idx]
                                    ?.pemerintah_desa?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pemerintahan.tingkat_pendidikan_aparat.${idx}.pemerintah_desa`
                                )}
                              />
                            </td>
                            <td>
                              <SelectPendidikan
                                control={control}
                                errors={errors}
                                fieldName={`potensi_kelembagaan.lembaga_pemerintahan.tingkat_pendidikan_aparat.${idx}.pendidikan`}
                              />
                            </td>

                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanTingkatPendidikanAparatArray.remove(
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
                              kelembagaanTingkatPendidikanAparatArray.append({
                                pemerintah_desa: "",
                                pendidikan: "",
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
                eventKey={"badanPermusyawaratanDesa"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Badan Permusyawaratan Desa</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Keberadaan BPD</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_pemerintahan.badan_permusyawaratan_desa.keberadaan_bpd`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kepengurusan BPD</td>
                        <td>
                          <SelectAktifAtauTidakAktif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_pemerintahan.badan_permusyawaratan_desa.kepengurusan_bpd`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah anggota BPD</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan
                                ?.badan_permusyawaratan_desa.jumlah_anggota_bpd
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_pemerintahan
                                ?.badan_permusyawaratan_desa.jumlah_anggota_bpd
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_pemerintahan.badan_permusyawaratan_desa.jumlah_anggota_bpd`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"pendidikanAnggotaBpd"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pendidikan Anggota BPD</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>anggota bpd</th>
                        <th>pendidikan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanPendidikanAnggotaBpdArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pemerintahan
                                    ?.pendidikan_anggota_bpd?.[idx]?.anggota_bpd
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pemerintahan
                                    ?.pendidikan_anggota_bpd?.[idx]?.anggota_bpd
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pemerintahan.pendidikan_anggota_bpd.${idx}.anggota_bpd`
                                )}
                              />
                            </td>
                            <td>
                              <SelectPendidikan
                                control={control}
                                errors={errors}
                                fieldName={`potensi_kelembagaan.lembaga_pemerintahan.pendidikan_anggota_bpd.${idx}.pendidikan`}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanPendidikanAnggotaBpdArray.remove(
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
                              kelembagaanPendidikanAnggotaBpdArray.append({
                                anggota_bpd: "",
                                pendidikan: "",
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

          <Tab.Pane eventKey="lembagaKemasyarakatan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["lembagaKemasyarakatan"]}>
              <DataPotensiDesaAccordionItem eventKey={"lembagaKemasyarakatan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Lembaga Kemasyarakatan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>nama lembaga kemasyarakatan</th>
                        <th>jumlah</th>
                        <th>dasar hukum pembentukan</th>
                        <th>jumlah pengurus</th>
                        <th>alamat kantor</th>
                        <th>jenis ruang lingkup kegiatan</th>
                        <th>ruang lingkup kegiatan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanLembagaKemasyarakatanArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.nama_lembaga_kemasyarakatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.nama_lembaga_kemasyarakatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_kemasyarakatan.${idx}.nama_lembaga_kemasyarakatan`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]?.jumlah
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_kemasyarakatan.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.dasar_hukum_pembentukan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.dasar_hukum_pembentukan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_kemasyarakatan.${idx}.dasar_hukum_pembentukan`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.jumlah_pengurus
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.jumlah_pengurus?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_kemasyarakatan.${idx}.jumlah_pengurus`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.alamat_kantor
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.alamat_kantor?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_kemasyarakatan.${idx}.alamat_kantor`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.jenis_ruang_lingkup_kegiatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.jenis_ruang_lingkup_kegiatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_kemasyarakatan.${idx}.jenis_ruang_lingkup_kegiatan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.ruang_lingkup_kegiatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_kemasyarakatan?.[idx]
                                    ?.ruang_lingkup_kegiatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_kemasyarakatan.${idx}.ruang_lingkup_kegiatan`
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanLembagaKemasyarakatanArray.remove(
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
                        <td colSpan={8}>
                          <Button
                            onClick={() =>
                              kelembagaanLembagaKemasyarakatanArray.append({
                                nama_lembaga_kemasyarakatan: "",
                                jumlah: 0,
                                dasar_hukum_pembentukan: "",
                                jumlah_pengurus: 0,
                                alamat_kantor: "",
                                jenis_ruang_lingkup_kegiatan: 0,
                                ruang_lingkup_kegiatan: "",
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

          <Tab.Pane eventKey="tingkatPartisipasiPolitik">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["tingkatPartisipasiPolitik"]}>
              <DataPotensiDesaAccordionItem
                eventKey={"tingkatPartisipasiPolitik"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Tingkat Partisipasi Politik
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>nama lembaga politik</th>
                        <th>jumlah pengurus</th>
                        <th>jumlah anggota</th>
                        <th>jumlah pemilih pemilu terakhir</th>
                        <th>alamat sekretariat kantor</th>
                        <th>dasar hukum pembentukan</th>
                        <th>jenis ruang lingkup kegiatan</th>
                        <th>ruang lingkup kegiatan</th>
                        <th>organisasi underbow</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanTingkatPartisipasiPolitikArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.nama_lembaga_politik
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.nama_lembaga_politik?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.nama_lembaga_politik`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jumlah_pengurus
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jumlah_pengurus?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.jumlah_pengurus`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jumlah_anggota
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jumlah_anggota?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.jumlah_anggota`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jumlah_pemilih_pemilu_terakhir
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jumlah_pemilih_pemilu_terakhir?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.jumlah_pemilih_pemilu_terakhir`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.alamat_sekretariat_kantor
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.alamat_sekretariat_kantor?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.alamat_sekretariat_kantor`
                                )}
                              />
                            </td>
                            <td>
                              <SelectAdaAtauTidak
                                control={control}
                                errors={errors}
                                fieldName={`potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.dasar_hukum_pembentukan`}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jenis_ruang_lingkup_kegiatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.jenis_ruang_lingkup_kegiatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.jenis_ruang_lingkup_kegiatan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.ruang_lingkup_kegiatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.ruang_lingkup_kegiatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.ruang_lingkup_kegiatan`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.organisasi_underbow
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.tingkat_partisipasi_politik?.[idx]
                                    ?.organisasi_underbow?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.tingkat_partisipasi_politik.${idx}.organisasi_underbow`
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanTingkatPartisipasiPolitikArray.remove(
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
                        <td colSpan={10}>
                          <Button
                            onClick={() =>
                              kelembagaanTingkatPartisipasiPolitikArray.append({
                                nama_lembaga_politik: "",
                                jumlah_pengurus: 0,
                                jumlah_anggota: 0,
                                jumlah_pemilih_pemilu_terakhir: 0,
                                alamat_sekretariat_kantor: "",
                                dasar_hukum_pembentukan: "",
                                jenis_ruang_lingkup_kegiatan: 0,
                                ruang_lingkup_kegiatan: "",
                                organisasi_underbow: "",
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

          <Tab.Pane eventKey="lembagaEkonomi">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "lembagaEkonomiUnitUsaha",
                "jasaLembagaKeuangan",
                "industriKecilMenengah",
                "usahaJasaPengangkutan",
                "usahaJasaPerdagangan",
                "usahaJasaHiburan",
                "usahaJasaGasListrikBbmAir",
                "usahaJasaKeterampilan",
                "usahaJasaHukumKonsultansi",
                "usahaJasaPenginapan",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"lembagaEkonomiUnitUsaha"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Lembaga Ekonomi Unit Usaha</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>lembaga</th>
                        <th>jumlah</th>
                        <th>jumlah kegiatan</th>
                        <th>jumlah pengurus anggota</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanLembagaEkonomiUnitUsahaArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]?.lembaga
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]?.lembaga
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.lembaga_ekonomi_unit_usaha.${idx}.lembaga`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]?.jumlah
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.lembaga_ekonomi_unit_usaha.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]
                                    ?.jumlah_kegiatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]
                                    ?.jumlah_kegiatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.lembaga_ekonomi_unit_usaha.${idx}.jumlah_kegiatan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]
                                    ?.jumlah_pengurus_anggota
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.lembaga_ekonomi_unit_usaha?.[idx]
                                    ?.jumlah_pengurus_anggota?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.lembaga_ekonomi_unit_usaha.${idx}.jumlah_pengurus_anggota`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanLembagaEkonomiUnitUsahaArray.remove(
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
                              kelembagaanLembagaEkonomiUnitUsahaArray.append({
                                lembaga: "",
                                jumlah: 0,
                                jumlah_kegiatan: 0,
                                jumlah_pengurus_anggota: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"jasaLembagaKeuangan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jasa Lembaga Keuangan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>lembaga</th>
                        <th>jumlah</th>
                        <th>jumlah kegiatan</th>
                        <th>jumlah pengurus</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanJasaLembagaKeuanganArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.lembaga
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.lembaga?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.jasa_lembaga_keuangan.${idx}.lembaga`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.jasa_lembaga_keuangan.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.jumlah_kegiatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.jumlah_kegiatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.jasa_lembaga_keuangan.${idx}.jumlah_kegiatan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.jumlah_pengurus
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.jasa_lembaga_keuangan?.[
                                    idx
                                  ]?.jumlah_pengurus?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.jasa_lembaga_keuangan.${idx}.jumlah_pengurus`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanJasaLembagaKeuanganArray.remove(
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
                              kelembagaanJasaLembagaKeuanganArray.append({
                                lembaga: "",
                                jumlah: 0,
                                jumlah_kegiatan: 0,
                                jumlah_pengurus: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"industriKecilMenengah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Industri Kecil Menengah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>industri</th>
                        <th>jumlah</th>
                        <th>jumlah kegiatan</th>
                        <th>jumlah pengurus</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanIndustriKecilMenengahArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]?.industri
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]?.industri
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.industri_kecil_menengah.${idx}.industri`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]?.jumlah
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.industri_kecil_menengah.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]
                                    ?.jumlah_kegiatan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]
                                    ?.jumlah_kegiatan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.jasa_lembaga_keuangan.${idx}.jumlah_kegiatan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]
                                    ?.jumlah_pengurus
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.industri_kecil_menengah?.[idx]
                                    ?.jumlah_pengurus?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.industri_kecil_menengah.${idx}.jumlah_pengurus`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanIndustriKecilMenengahArray.remove(
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
                              kelembagaanIndustriKecilMenengahArray.append({
                                industri: "",
                                jumlah: 0,
                                jumlah_kegiatan: 0,
                                jumlah_pengurus: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"usahaJasaPengangkutan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usaha Jasa Pengangkutan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  {/* JUMLAH PEMILIK ANGKUTAN DESA PERKOTAAN */}
                  <h6 className="mb-1 fw-bolder text-capitalize">
                    Jumlah pemilik angkutan desa perkotaan
                  </h6>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>Usaha jasa pengangkutan</th>
                        <th>Jumlah pemilik</th>
                        <th>Kapasitas</th>
                        <th>Tenaga kerja</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>jumlah pemilik angkutan desa/perkotaan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_angkutan_desa_perkotaan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.jumlah_pemilik_angkutan_desa_perkotaan
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_angkutan_desa_perkotaan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.kapasitas_angkutan_desa_perkotaan
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_angkutan_desa_perkotaan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.tenaga_kerja_angkutan_desa_perkotaan
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>angkutan antar kota/provinsi</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_angkutan_antar_kota_provinsi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.jumlah_pemilik_angkutan_antar_kota_provinsi
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_angkutan_antar_kota_provinsi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.kapasitas_angkutan_antar_kota_provinsi
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_angkutan_antar_kota_provinsi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.tenaga_kerja_angkutan_antar_kota_provinsi
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mb-1 fw-bolder text-capitalize">
                    Angkutan sungai
                  </h6>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>Usaha jasa pengangkutan</th>
                        <th>Jumlah pemilik</th>
                        <th>Kapasitas</th>
                        <th>Tenaga kerja</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>jumlah pemilik perahu motor atau sejenisnya</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_perahu_motor_atau_sejenisnya`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.jumlah_pemilik_perahu_motor_atau_sejenisnya
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_perahu_motor_atau_sejenisnya`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.kapasitas_perahu_motor_atau_sejenisnya
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_perahu_motor_atau_sejenisnya`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.tenaga_kerja_perahu_motor_atau_sejenisnya
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemilik jetboat</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai?.jumlah_pemilik_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai?.kapasitas_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai?.tenaga_kerja_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemilik angkutan jetboat</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_angkutan_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.jumlah_pemilik_angkutan_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_angkutan_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai?.kapasitas_angkutan_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_angkutan_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai?.tenaga_kerja_angkutan_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemilik angkutan lebih dari 10 orang</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_angkutan_lebih_dari_10_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.jumlah_pemilik_angkutan_lebih_dari_10_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_angkutan_lebih_dari_10_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.kapasitas_angkutan_lebih_dari_10_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_angkutan_lebih_dari_10_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.tenaga_kerja_angkutan_lebih_dari_10_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemilik angkutan kurang dari 10 orang</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_angkutan_kurang_dari_10_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.jumlah_pemilik_angkutan_kurang_dari_10_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_angkutan_kurang_dari_10_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.kapasitas_angkutan_kurang_dari_10_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_angkutan_kurang_dari_10_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.tenaga_kerja_angkutan_kurang_dari_10_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemilik angkutan antara 10-100 orang</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.jumlah_pemilik_angkutan_antara_10_100_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.jumlah_pemilik_angkutan_antara_10_100_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.kapasitas_angkutan_antara_10_100_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.kapasitas_angkutan_antara_10_100_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_sungai.tenaga_kerja_angkutan_antara_10_100_orang`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_sungai
                                ?.tenaga_kerja_angkutan_antara_10_100_orang
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mb-1 fw-bolder text-capitalize">
                    Angkutan laut
                  </h6>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>Usaha jasa pengangkutan</th>
                        <th>Jumlah pemilik</th>
                        <th>Kapasitas</th>
                        <th>Tenaga kerja</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>jumlah pemilik jetboat</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.jumlah_pemilik_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.jumlah_pemilik_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.kapasitas_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.kapasitas_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.tenaga_kerja_jetboat`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.tenaga_kerja_jetboat
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemilik perahu ferry</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.jumlah_pemilik_perahu_ferry`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.jumlah_pemilik_perahu_ferry
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.kapasitas_perahu_ferry`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.kapasitas_perahu_ferry
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.tenaga_kerja_perahu_ferry`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.tenaga_kerja_perahu_ferry
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemilik jet foil</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.jumlah_pemilik_jet_foil`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.jumlah_pemilik_jet_foil
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.kapasitas_jet_foil`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.kapasitas_jet_foil
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_laut.tenaga_kerja_jet_foil`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_laut?.tenaga_kerja_jet_foil
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mb-1 fw-bolder text-capitalize">
                    Angkutan udara
                  </h6>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>Usaha jasa pengangkutan</th>
                        <th>Jumlah pemilik</th>
                        <th>Kapasitas</th>
                        <th>Tenaga kerja</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>jumlah pemilik pesawat helikopter</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_udara.jumlah_pemilik_pesawat_helikopter`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_udara
                                ?.jumlah_pemilik_pesawat_helikopter
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_udara.kapasitas_pesawat_helikopter`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_udara?.kapasitas_pesawat_helikopter
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.angkutan_udara.tenaga_kerja_pesawat_helikopter`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.angkutan_udara
                                ?.tenaga_kerja_pesawat_helikopter
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mb-1 fw-bolder text-capitalize">
                    Ekspedisi dan pengiriman
                  </h6>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>Usaha jasa pengangkutan</th>
                        <th>Jumlah pemilik</th>
                        <th>Kapasitas</th>
                        <th>Tenaga kerja</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>jumlah pemilik usaha ekspedisi</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.ekspedisi_dan_pengiriman.jumlah_pemilik_usaha_ekspedisi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.ekspedisi_dan_pengiriman
                                ?.jumlah_pemilik_usaha_ekspedisi
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.ekspedisi_dan_pengiriman.kapasitas_usaha_ekspedisi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.ekspedisi_dan_pengiriman
                                ?.kapasitas_usaha_ekspedisi
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_pengangkutan.ekspedisi_dan_pengiriman.tenaga_kerja_usaha_ekspedisi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_ekonomi?.usaha_jasa_pengangkutan
                                ?.ekspedisi_dan_pengiriman
                                ?.tenaga_kerja_usaha_ekspedisi
                            }
                            label={""}
                            suffix={"orang"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"usahaJasaPerdagangan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usaha Jasa Perdagangan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>usaha</th>
                        <th>jumlah</th>
                        <th>jenis produk</th>
                        <th>jumlah tenaga kerja</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanUsahaJasaPerdaganganArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.usaha
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.usaha?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_perdagangan.${idx}.usaha`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_perdagangan.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.jenis_produk
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.jenis_produk?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_perdagangan.${idx}.jenis_produk`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.jumlah_tenaga_kerja
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_perdagangan?.[
                                    idx
                                  ]?.jumlah_tenaga_kerja?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_perdagangan.${idx}.jumlah_tenaga_kerja`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanUsahaJasaPerdaganganArray.remove(
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
                              kelembagaanUsahaJasaPerdaganganArray.append({
                                usaha: "",
                                jumlah: 0,
                                jenis_produk: 0,
                                jumlah_tenaga_kerja: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"usahaJasaHiburan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usaha Jasa Hiburan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>usaha</th>
                        <th>jumlah</th>
                        <th>jenis produk</th>
                        <th>jumlah tenaga kerja</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanUsahaJasaHiburanArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.usaha
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.usaha?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hiburan.${idx}.usaha`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hiburan.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.jenis_produk
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.jenis_produk?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hiburan.${idx}.jenis_produk`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.jumlah_tenaga_kerja
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_hiburan?.[idx]
                                    ?.jumlah_tenaga_kerja?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hiburan.${idx}.jumlah_tenaga_kerja`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanUsahaJasaHiburanArray.remove(idx)
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
                              kelembagaanUsahaJasaHiburanArray.append({
                                usaha: "",
                                jumlah: 0,
                                jenis_produk: 0,
                                jumlah_tenaga_kerja: 0,
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
                eventKey={"usahaJasaGasListrikBbmAir"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Usaha Jasa Gas Listrik BBM Air
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>usaha</th>
                        <th>jumlah</th>
                        <th>jenis produk</th>
                        <th>jumlah tenaga kerja</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanUsahaJasaGasListrikBbmAirArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.usaha
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.usaha?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_gas_listrik_bbm_air.${idx}.usaha`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_gas_listrik_bbm_air.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.jenis_produk
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.jenis_produk?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_gas_listrik_bbm_air.${idx}.jenis_produk`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.jumlah_tenaga_kerja
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_gas_listrik_bbm_air?.[idx]
                                    ?.jumlah_tenaga_kerja?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_gas_listrik_bbm_air.${idx}.jumlah_tenaga_kerja`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanUsahaJasaGasListrikBbmAirArray.remove(
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
                              kelembagaanUsahaJasaGasListrikBbmAirArray.append({
                                usaha: "",
                                jumlah: 0,
                                jenis_produk: 0,
                                jumlah_tenaga_kerja: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"usahaJasaKeterampilan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usaha Jasa Keterampilan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>usaha</th>
                        <th>jumlah</th>
                        <th>jenis produk</th>
                        <th>jumlah tenaga kerja</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanUsahaJasaKeterampilanArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]?.usaha
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]?.usaha
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_keterampilan.${idx}.usaha`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]?.jumlah
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_keterampilan.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]
                                    ?.jenis_produk
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]
                                    ?.jenis_produk?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_keterampilan.${idx}.jenis_produk`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]
                                    ?.jumlah_tenaga_kerja
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_keterampilan?.[idx]
                                    ?.jumlah_tenaga_kerja?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_keterampilan.${idx}.jumlah_tenaga_kerja`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanUsahaJasaKeterampilanArray.remove(
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
                              kelembagaanUsahaJasaKeterampilanArray.append({
                                usaha: "",
                                jumlah: 0,
                                jenis_produk: 0,
                                jumlah_tenaga_kerja: 0,
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
                eventKey={"usahaJasaHukumKonsultansi"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Usaha Jasa Hukum Konsultansi
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>usaha</th>
                        <th>jumlah</th>
                        <th>jenis produk</th>
                        <th>jumlah tenaga kerja</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanUsahaJasaHukumKonsultansiArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]?.usaha
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]?.usaha
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hukum_konsultansi.${idx}.usaha`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]
                                    ?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]
                                    ?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hukum_konsultansi.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]
                                    ?.jenis_produk
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]
                                    ?.jenis_produk?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hukum_konsultansi.${idx}.jenis_produk`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]
                                    ?.jumlah_tenaga_kerja
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi
                                    ?.usaha_jasa_hukum_konsultansi?.[idx]
                                    ?.jumlah_tenaga_kerja?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_hukum_konsultansi.${idx}.jumlah_tenaga_kerja`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanUsahaJasaHukumKonsultansiArray.remove(
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
                              kelembagaanUsahaJasaHukumKonsultansiArray.append({
                                usaha: "",
                                jumlah: 0,
                                jenis_produk: 0,
                                jumlah_tenaga_kerja: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"usahaJasaPenginapan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usaha Jasa Penginapan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th>usaha</th>
                        <th>jumlah</th>
                        <th>jenis produk</th>
                        <th>jumlah tenaga kerja</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanUsahaJasaPenginapanArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.usaha
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.usaha?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_penginapan.${idx}.usaha`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_penginapan.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.jenis_produk
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.jenis_produk?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_penginapan.${idx}.jenis_produk`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.jumlah_tenaga_kerja
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_ekonomi?.usaha_jasa_penginapan?.[
                                    idx
                                  ]?.jumlah_tenaga_kerja?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_ekonomi.usaha_jasa_penginapan.${idx}.jumlah_tenaga_kerja`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanUsahaJasaPenginapanArray.remove(
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
                              kelembagaanUsahaJasaPenginapanArray.append({
                                usaha: "",
                                jumlah: 0,
                                jenis_produk: 0,
                                jumlah_tenaga_kerja: 0,
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

          <Tab.Pane eventKey="lembagaPendidikan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "pendidikanFormal",
                "pendidikanFormalKeagamaan",
                "pendidikanNonFormal",
              ]}>
              <DataPotensiDesaAccordionItem eventKey={"pendidikanFormal"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pendidikan Formal</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th rowSpan={2}>nama</th>
                        <th rowSpan={2}>jumlah</th>
                        <th rowSpan={2}>status</th>
                        <th colSpan={3}>kepemilikan</th>
                        <th rowSpan={2}>jumlah tenaga pengajar</th>
                        <th rowSpan={2}>jumlah siswa</th>
                        <th rowSpan={2}></th>
                      </tr>
                      <tr>
                        <th>pemerintah</th>
                        <th>swasta</th>
                        <th>desa kelurahan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanPendidikanFormalArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.nama
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.nama?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.nama`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.jumlah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <SelectTerdaftarAtauTerakreditasi
                                control={control}
                                errors={errors}
                                fieldName={`potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.status`}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.kepemilikan?.pemerintah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.kepemilikan?.pemerintah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.kepemilikan.pemerintah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.kepemilikan?.swasta
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.kepemilikan?.swasta?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.kepemilikan.swasta`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.kepemilikan?.desa_kelurahan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.kepemilikan?.desa_kelurahan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.kepemilikan.desa_kelurahan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.jumlah_tenaga_pengajar
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.jumlah_tenaga_pengajar?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.jumlah_tenaga_pengajar`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.jumlah_siswa
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan?.pendidikan_formal?.[
                                    idx
                                  ]?.jumlah_siswa?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal.${idx}.jumlah_siswa`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanPendidikanFormalArray.remove(idx)
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
                        <td colSpan={9}>
                          <Button
                            onClick={() =>
                              kelembagaanPendidikanFormalArray.append({
                                nama: "",
                                jumlah: 0,
                                status: "",
                                kepemilikan: {
                                  pemerintah: 0,
                                  swasta: 0,
                                  desa_kelurahan: 0,
                                },
                                jumlah_tenaga_pengajar: 0,
                                jumlah_siswa: 0,
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
                eventKey={"pendidikanFormalKeagamaan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Pendidikan Formal Keagamaan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th rowSpan={2}>nama</th>
                        <th rowSpan={2}>jumlah</th>
                        <th rowSpan={2}>status</th>
                        <th colSpan={3}>kepemilikan</th>
                        <th rowSpan={2}>jumlah tenaga pengajar</th>
                        <th rowSpan={2}>jumlah siswa</th>
                        <th rowSpan={2}></th>
                      </tr>
                      <tr>
                        <th>pemerintah</th>
                        <th>swasta</th>
                        <th>lainnya</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanPendidikanFormalKeagamaanArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]?.nama
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]?.nama
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.nama`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]?.jumlah
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <SelectTerdaftarAtauTerakreditasi
                                control={control}
                                errors={errors}
                                fieldName={`potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.status`}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.kepemilikan?.pemerintah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.kepemilikan?.pemerintah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.kepemilikan.pemerintah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.kepemilikan?.swasta
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.kepemilikan?.swasta?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.kepemilikan.swasta`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.kepemilikan?.lainnya
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.kepemilikan?.lainnya?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.kepemilikan.lainnya`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.jumlah_tenaga_pengajar
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.jumlah_tenaga_pengajar?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.jumlah_tenaga_pengajar`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.jumlah_siswa
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_formal_keagamaan?.[idx]
                                    ?.jumlah_siswa?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_formal_keagamaan.${idx}.jumlah_siswa`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanPendidikanFormalKeagamaanArray.remove(
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
                        <td colSpan={8}>
                          <Button
                            onClick={() =>
                              kelembagaanPendidikanFormalKeagamaanArray.append({
                                nama: "",
                                jumlah: 0,
                                status: "",
                                kepemilikan: {
                                  pemerintah: 0,
                                  swasta: 0,
                                },
                                jumlah_tenaga_pengajar: 0,
                                jumlah_siswa: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"pendidikanNonFormal"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pendidikan Non-formal</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle text-center">
                    <thead>
                      <tr>
                        <th rowSpan={2}>nama</th>
                        <th rowSpan={2}>jumlah</th>
                        <th rowSpan={2}>status</th>
                        <th colSpan={3}>kepemilikan</th>
                        <th rowSpan={2}>jumlah tenaga pengajar</th>
                        <th rowSpan={2}>jumlah siswa</th>
                        <th rowSpan={2}></th>
                      </tr>
                      <tr>
                        <th>pemerintah</th>
                        <th>yayasan</th>
                        <th>lainnya</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanPendidikanNonFormalArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.nama
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.nama
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.nama`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.jumlah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.jumlah
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.jumlah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <SelectTerdaftarAtauTerakreditasi
                                control={control}
                                errors={errors}
                                fieldName={`potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.status`}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.kepemilikan
                                    ?.pemerintah
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.kepemilikan
                                    ?.pemerintah?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.kepemilikan.pemerintah`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.kepemilikan
                                    ?.yayasan
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.kepemilikan
                                    ?.yayasan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.kepemilikan.yayasan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.kepemilikan
                                    ?.lainnya
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.kepemilikan
                                    ?.lainnya?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.kepemilikan.lainnya`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]
                                    ?.jumlah_tenaga_pengajar
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]
                                    ?.jumlah_tenaga_pengajar?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.jumlah_tenaga_pengajar`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.jumlah_siswa
                                }
                                message={
                                  (errors?.potensi_kelembagaan as any)
                                    ?.lembaga_pendidikan
                                    ?.pendidikan_non_formal?.[idx]?.jumlah_siswa
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_kelembagaan.lembaga_pendidikan.pendidikan_non_formal.${idx}.jumlah_siswa`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  kelembagaanPendidikanNonFormalArray.remove(
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
                        <td colSpan={8}>
                          <Button
                            onClick={() =>
                              kelembagaanPendidikanNonFormalArray.append({
                                nama: "",
                                jumlah: 0,
                                status: "",
                                kepemilikan: {
                                  pemerintah: 0,
                                  yayasan: 0,
                                  lainnya: 0,
                                },
                                jumlah_tenaga_pengajar: 0,
                                jumlah_siswa: 0,
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

          <Tab.Pane eventKey="lembagaAdat">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "keberadaanLembagaAdat",
                "simbolAdat",
                "jenisKegiatanAdat",
              ]}>
              <DataPotensiDesaAccordionItem eventKey={"keberadaanLembagaAdat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Keberadaan Lembaga Adat</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>pemangku adat</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.keberadaan_lembaga_adat.pemangku_adat`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan adat</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.keberadaan_lembaga_adat.kepengurusan_adat`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"simbolAdat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Simbol Adat</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>simbol adat</th>
                        <th>keberadaan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelembagaanSimbolAdatArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_kelembagaan as any)
                                  ?.lembaga_adat?.simbol_adat?.[idx]
                                  ?.simbol_adat
                              }
                              message={
                                (errors?.potensi_kelembagaan as any)
                                  ?.lembaga_adat?.simbol_adat?.[idx]
                                  ?.simbol_adat?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_kelembagaan.lembaga_adat.simbol_adat.${idx}.simbol_adat`
                              )}
                            />
                          </td>
                          <td>
                            <SelectAdaAtauTidak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_kelembagaan.lembaga_adat.simbol_adat.${idx}.keberadaan`}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                kelembagaanSimbolAdatArray.remove(idx)
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
                              kelembagaanSimbolAdatArray.append({
                                simbol_adat: "",
                                keberadaan: "",
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

              <DataPotensiDesaAccordionItem eventKey={"jenisKegiatanAdat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jenis Kegiatan Adat</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>musyawarah adat</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.musyawarah_adat`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>sanksi adat</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.sanksi_adat`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat perkawinan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_perkawinan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat kematian</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_kematian`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat kelahiran</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_kelahiran`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat bercocok tanam</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_bercocok_tanam`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat perikanan laut</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_perikanan_laut`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat kehutanan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_kehutanan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat sda</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_sda`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat pembangunan rumah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_pembangunan_rumah`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>upacara adat penyelesaian masalah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_adat.jenis_kegiatan_adat.upacara_adat_penyelesaian_masalah`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="lembagaKeamanan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "hansipDanLinmas",
                "satpamSwakarsa",
                "tniPolriTrantiblinmas",
              ]}>
              <DataPotensiDesaAccordionItem eventKey={"hansipDanLinmas"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Hansip dan Linmas</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keberadaan hansip linmas</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_keamanan.hansip_dan_linmas.keberadaan_hansip_linmas`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah anggota hansip</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.hansip_dan_linmas
                                ?.jumlah_anggota_hansip
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.hansip_dan_linmas
                                ?.jumlah_anggota_hansip?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.hansip_dan_linmas.jumlah_anggota_hansip`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah anggota linmas</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.hansip_dan_linmas
                                ?.jumlah_anggota_linmas
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.hansip_dan_linmas
                                ?.jumlah_anggota_linmas?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.hansip_dan_linmas.jumlah_anggota_linmas`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pelaksanaan siskamling</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_kelembagaan.lembaga_keamanan.hansip_dan_linmas.pelaksanaan_siskamling`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pos siskamling</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.hansip_dan_linmas
                                ?.jumlah_pos_siskamling
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.hansip_dan_linmas
                                ?.jumlah_pos_siskamling?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.hansip_dan_linmas.jumlah_pos_siskamling`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"satpamSwakarsa"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Satpam Swakarsa</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keberadaan satpam swakarsa</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.keberadaan_satpam_swakarsa
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.keberadaan_satpam_swakarsa?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.satpam_swakarsa.keberadaan_satpam_swakarsa`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah anggota</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.jumlah_anggota
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.jumlah_anggota?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.satpam_swakarsa.jumlah_anggota`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>nama organisasi induk</td>
                        <td>
                          <FormInputControl
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.nama_organisasi_induk
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.nama_organisasi_induk?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.satpam_swakarsa.nama_organisasi_induk`
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pemilik organisasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.pemilik_organisasi
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.pemilik_organisasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.satpam_swakarsa.pemilik_organisasi`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>organisasi keamanan lain</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.organisasi_keamanan_lain
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.satpam_swakarsa
                                ?.organisasi_keamanan_lain?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.satpam_swakarsa.organisasi_keamanan_lain`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"tniPolriTrantiblinmas"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    TNI, Polri dan Trantiblinmas
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <h6 className="mb-0 fw-bold">TNI</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>mitra koramil TNI</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas?.tni
                                ?.mitra_koramil_tni
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas?.tni
                                ?.mitra_koramil_tni?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.tni_polri_trantiblinmas.tni.mitra_koramil_tni`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah anggota</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas?.tni
                                ?.jumlah_anggota
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas?.tni
                                ?.jumlah_anggota?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.tni_polri_trantiblinmas.tni.jumlah_anggota`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah kegiatan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas?.tni
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas?.tni
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.tni_polri_trantiblinmas.tni.jumlah_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mb-0 fw-bold mt-3">Polri</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>babinkamtibmas polri</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas
                                ?.polri?.babinkamtibmas_polri
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas
                                ?.polri?.babinkamtibmas_polri?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.tni_polri_trantiblinmas.polri.babinkamtibmas_polri`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah anggota</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas
                                ?.polri?.jumlah_anggota
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas
                                ?.polri?.jumlah_anggota?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.tni_polri_trantiblinmas.polri.jumlah_anggota`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah kegiatan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas
                                ?.polri?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_kelembagaan as any)
                                ?.lembaga_keamanan?.tni_polri_trantiblinmas
                                ?.polri?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_kelembagaan.lembaga_keamanan.tni_polri_trantiblinmas.polri.jumlah_kegiatan`,
                              { valueAsNumber: true }
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
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}
