import { Button } from "@app/components"
import { FormInputControl } from "../DataPotensiDesaForm"
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
import { useDisableWhenDetailPath } from "../hooks/useDisableDetail"

export function DataPotensiSumberDayaManusia({
  activeForm,
  activeTabSdm,
  setActiveTabSdm,
  register,
  errors,
  control,
  // watch,
}: {
  activeForm: string
  activeTabSdm: string
  setActiveTabSdm: (v: string) => void
  register: any
  errors: any
  control: any
  // watch: any,
}) {
  const { hideElement } = useDisableWhenDetailPath()
  const sdmPendidikanArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_manusia.pendidikan",
  })

  const sdmMataPencaharianPokokArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_manusia.mata_pencaharian_pokok",
  })

  const sdmEtnisArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_manusia.etnis",
  })

  const sdmCacatMentalDanFisikArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_manusia.cacat_mental_dan_fisik",
  })

  const sdmKualitasAngkatanKerjaArray = useFieldArray({
    control,
    name: "potensi_sumber_daya_manusia.kualitas_angkatan_kerja",
  })

  return (
    <div
      className={activeForm === "sumber-daya-manusia" ? "d-block" : "d-none"}>
      <Tab.Container defaultActiveKey={activeTabSdm}>
        <Nav
          className="d-flex justify-content-center my-3"
          activeKey={activeTabSdm}
          onSelect={(selectedKey) => setActiveTabSdm(selectedKey as string)}>
          <Nav.Item>
            <TabLink eventKey="jumlah">Jumlah</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="usia">Usia</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="pendidikan">Pendidikan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="mata_pencaharian_pokok">
              Mata Pencaharian Pokok
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="agama_aliran_kepercayaan">
              Agama Aliran Kepercayaan
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kewarganegaraan">Kewarganegaraan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="etnis">Etnis</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="cacat_mental_dan_fisik">
              Cacat Mental dan Fisik
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="tenaga_kerja">Tenaga Kerja</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kualitas_angkatan_kerja">
              Kualitas Angkatan Kerja
            </TabLink>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="jumlah">
            <DataPotensiDesaAccordion alwaysOpen defaultActiveKey={["jumlah"]}>
              <DataPotensiDesaAccordionItem eventKey={"jumlah"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jumlah</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>Jumlah laki-laki</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.jumlah.jumlah_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah perempuan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.jumlah.jumlah_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah total</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_total
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_total?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.jumlah.jumlah_total",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah kepala keluarga</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_kepala_keluarga
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.jumlah_kepala_keluarga
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.jumlah.jumlah_kepala_keluarga",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kepadatan penduduk</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.kepadatan_penduduk
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.jumlah?.batas_wilayah?.kepadatan_penduduk
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.jumlah.kepadatan_penduduk",
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

          <Tab.Pane eventKey="usia">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "usia_0_18_tahun",
                "usia_19_37_tahun",
                "usia_38_56_tahun",
                "usia_57_75+_tahun",
              ]}>
              {/* USIA 0-18 TAHUN */}
              <DataPotensiDesaAccordionItem eventKey={"usia_0_18_tahun"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usia 0-18 tahun</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Usia</th>
                        <th>Laki-laki</th>
                        <th>Perempuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Usia 0-12 bulan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun
                                ?.usia_0_12_bulan_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_0_12_bulan_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_0_12_bulan_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun
                                ?.usia_0_12_bulan_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_0_12_bulan_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_0_12_bulan_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 1 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_1_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_1_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_1_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_1_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_1_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_1_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 2 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_2_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_2_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_2_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_2_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_2_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_2_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 3 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_3_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_3_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_3_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_3_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_3_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_3_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 4 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_4_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_4_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_4_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_4_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_4_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_4_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 5 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_5_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_5_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_5_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_5_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_5_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_5_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 6 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_6_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_6_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_6_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_6_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_6_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_6_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 7 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_7_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_7_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_7_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_7_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_7_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_7_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 8 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_8_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_8_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_8_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_8_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_8_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_8_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 9 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_9_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_9_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_9_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_9_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_9_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_9_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 10 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_10_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_10_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_10_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_10_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_10_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_10_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 11 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_11_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_11_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_11_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_11_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_11_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_11_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 12 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_12_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_12_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_12_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_12_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_12_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_12_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 13 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_13_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_13_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_13_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_13_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_13_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_13_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 14 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_14_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_14_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_14_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_14_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_14_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_14_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 15 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_15_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_15_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_15_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_15_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_15_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_15_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 16 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_16_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_16_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_16_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_16_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_16_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_16_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 17 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_17_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_17_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_17_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_17_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_17_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_17_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 18 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_18_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_18_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_18_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_0_18_tahun?.usia_18_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_0_18_tahun?.usia_18_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_0_18_tahun.usia_18_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* USIA 19-37 TAHUN */}
              <DataPotensiDesaAccordionItem eventKey={"usia_19_37_tahun"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usia 19-37 tahun</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Usia</th>
                        <th>Laki-laki</th>
                        <th>Perempuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Usia 19 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_19_bulan_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_19_bulan_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_19_bulan_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun?.usia_19_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_19_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_19_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 20 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_20_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_20_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_20_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_20_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_20_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_20_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 21 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_21_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_21_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_21_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_21_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_21_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_21_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 22 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_22_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_22_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_22_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_22_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_22_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_22_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 23 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_23_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_23_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_23_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_23_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_23_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_23_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 24 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_24_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_24_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_24_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_24_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_24_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_24_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 25 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_25_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_25_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_25_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_25_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_25_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_25_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 26 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_26_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_26_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_26_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_26_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_26_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_26_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 27 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_27_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_27_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_27_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_27_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_27_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_27_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 28 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_28_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_28_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_28_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_28_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_28_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_28_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 29 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_29_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_29_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_29_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_29_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_29_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_29_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 30 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_30_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_30_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_30_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_30_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_30_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_30_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 31 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_31_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_31_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_31_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_31_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_31_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_31_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 32 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_32_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_32_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_32_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_32_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_32_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_32_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 33 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_33_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_33_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_33_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_33_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_33_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_33_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 34 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_34_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_34_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_34_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_34_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_34_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_34_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 35 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_35_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_35_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_35_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_35_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_35_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_35_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 36 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_36_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_36_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_36_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_36_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_36_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_36_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 37 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_37_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_37_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_37_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_19_37_tahun
                                ?.usia_37_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_19_37_tahun?.usia_37_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_19_37_tahun.usia_37_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* USIA 38-56 TAHUN */}
              <DataPotensiDesaAccordionItem eventKey={"usia_38_56_tahun"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usia 38-56 tahun</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Usia</th>
                        <th>Laki-laki</th>
                        <th>Perempuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Usia 38 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_38_bulan_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_38_bulan_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_38_bulan_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun?.usia_38_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_38_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_38_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 39 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_39_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_39_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_39_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_39_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_39_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_39_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 40 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_40_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_40_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_40_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_40_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_40_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_40_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 41 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_41_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_41_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_41_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_41_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_41_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_41_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 42 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_42_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_42_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_42_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_42_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_42_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_42_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 43 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_43_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_43_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_43_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_43_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_43_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_43_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 44 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_44_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_44_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_44_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_44_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_44_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_44_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 45 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_45_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_45_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_45_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_45_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_45_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_45_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 46 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_46_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_46_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_46_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_46_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_46_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_46_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 47 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_47_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_47_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_47_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_47_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_47_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_47_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 48 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_48_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_48_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_48_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_48_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_48_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_48_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 49 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_49_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_49_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_49_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_49_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_49_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_49_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 50 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_50_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_50_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_50_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_50_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_50_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_50_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 51 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_51_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_51_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_51_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_51_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_51_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_51_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 52 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_52_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_52_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_52_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_52_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_52_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_52_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 53 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_53_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_53_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_53_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_53_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_53_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_53_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 54 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_54_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_54_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_54_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_54_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_54_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_54_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 55 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_55_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_55_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_55_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_55_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_55_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_55_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 56 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_56_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_56_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_56_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.usia_38_56_tahun
                                ?.usia_56_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)?.usia
                                ?.usia_38_56_tahun?.usia_56_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_38_56_tahun.usia_56_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              {/* USIA 57-75+ TAHUN */}
              <DataPotensiDesaAccordionItem eventKey={"usia_57_75+_tahun"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Usia 57-75+ tahun</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Usia</th>
                        <th>Laki-laki</th>
                        <th>Perempuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Usia 57 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_57_bulan_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_57_bulan_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_57_bulan_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]?.usia_57_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]?.usia_57_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_57_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 58 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_58_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_58_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_58_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_58_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_58_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_58_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 59 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_59_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_59_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_59_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_59_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_59_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_59_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 60 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_60_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_60_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_60_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_60_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_60_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_60_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 61 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_61_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_61_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_61_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_61_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_61_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_61_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 62 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_62_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_62_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_62_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_62_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_62_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_62_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 63 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_63_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_63_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_63_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_63_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_63_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_63_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 64 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_64_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_64_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_64_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_64_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_64_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_64_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 65 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_65_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_65_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_65_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_65_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_65_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_65_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 66 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_66_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_66_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_66_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_66_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_66_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_66_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 67 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_67_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_67_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_67_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_67_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_67_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_67_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 68 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_68_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_68_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_68_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_68_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_68_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_68_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 69 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_69_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_69_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_69_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_69_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_69_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_69_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 70 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_70_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_70_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_70_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_70_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_70_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_70_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 71 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_71_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_71_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_71_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_71_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_71_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_71_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 72 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_72_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_72_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_72_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_72_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_72_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_72_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 73 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_73_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_73_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_73_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_73_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_73_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_73_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 74 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_74_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_74_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_74_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_74_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_74_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_74_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia 75 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_75_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_75_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_75_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_75_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_75_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_75_tahun_perempuan",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Usia lebih dari 75 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_lebih_dari_75_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_lebih_dari_75_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_lebih_dari_75_tahun_laki_laki",
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_lebih_dari_75_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.usia?.["usia_57_75+_tahun"]
                                ?.usia_lebih_dari_75_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              "potensi_sumber_daya_manusia.usia.usia_57_75+_tahun.usia_lebih_dari_75_tahun_perempuan",
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

          <Tab.Pane eventKey="pendidikan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["pendidikan"]}>
              <DataPotensiDesaAccordionItem eventKey={"pendidikan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Pendidikan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Tingkatan</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdmPendidikanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.pendidikan?.[idx]?.tingkatan
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.pendidikan?.[idx]?.tingkatan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.pendidikan.${idx}.tingkatan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.pendidikan?.[idx]?.jumlah_laki_laki
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.pendidikan?.[idx]?.jumlah_laki_laki?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.pendidikan.${idx}.jumlah_laki_laki`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.pendidikan?.[idx]?.jumlah_perempuan
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.pendidikan?.[idx]?.jumlah_perempuan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.pendidikan.${idx}.jumlah_perempuan`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdmPendidikanArray.remove(idx)}
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
                              sdmPendidikanArray.append({
                                tingkatan: "",
                                jumlah_laki_laki: 0,
                                jumlah_perempuan: 0,
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

          <Tab.Pane eventKey="mata_pencaharian_pokok">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["mataPencaharianPokok"]}>
              <DataPotensiDesaAccordionItem eventKey={"mataPencaharianPokok"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Mata Pencaharian Pokok</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Pekerjaan</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdmMataPencaharianPokokArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.mata_pencaharian_pokok?.[idx]?.pekerjaan
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.mata_pencaharian_pokok?.[idx]?.pekerjaan
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.mata_pencaharian_pokok.${idx}.pekerjaan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.mata_pencaharian_pokok?.[idx]
                                  ?.jumlah_laki_laki
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.mata_pencaharian_pokok?.[idx]
                                  ?.jumlah_laki_laki?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.mata_pencaharian_pokok.${idx}.jumlah_laki_laki`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.mata_pencaharian_pokok?.[idx]
                                  ?.jumlah_perempuan
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.mata_pencaharian_pokok?.[idx]
                                  ?.jumlah_perempuan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.mata_pencaharian_pokok.${idx}.jumlah_perempuan`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdmMataPencaharianPokokArray.remove(idx)
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
                              sdmMataPencaharianPokokArray.append({
                                pekerjaan: "",
                                jumlah_laki_laki: 0,
                                jumlah_perempuan: 0,
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

          <Tab.Pane eventKey="agama_aliran_kepercayaan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["agamaAliranKepercayaan"]}>
              <DataPotensiDesaAccordionItem eventKey={"agamaAliranKepercayaan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Agama Aliran Kepercayaan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Agama/aliran kepercayaan</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Islam</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.islam_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.islam_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.islam_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.islam_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.islam_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.islam_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kristen</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.kristen_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.kristen_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.kristen_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.kristen_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.kristen_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.kristen_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Katholik</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.katholik_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.katholik_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.katholik_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.katholik_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.katholik_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.katholik_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Hindu</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.hindu_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.hindu_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.hindu_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.hindu_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.hindu_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.hindu_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Buddha</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.budha_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.budha_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.budha_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.budha_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.budha_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.budha_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Kepercayaan kepada Tuhan</td>
                        <td colSpan={2}>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.kepercayaan_kepada_tuhan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan
                                ?.kepercayaan_kepada_tuhan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.kepercayaan_kepada_tuhan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah</td>
                        <td colSpan={2}>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan?.jumlah
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.agama_aliran_kepercayaan?.jumlah?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.agama_aliran_kepercayaan.jumlah`,
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

          <Tab.Pane eventKey="kewarganegaraan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["kewarganegaraan"]}>
              <DataPotensiDesaAccordionItem eventKey={"kewarganegaraan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kewarganegaraan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Kewarganegaraan</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>WNI</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wni_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wni_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.wni_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wni_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wni_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.wni_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>WNA</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wna_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wna_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.wna_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wna_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.wna_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.wna_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dwi kewarganegaraan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan
                                ?.dwi_kewarganegaraan_jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan
                                ?.dwi_kewarganegaraan_jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.dwi_kewarganegaraan_jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan
                                ?.dwi_kewarganegaraan_jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan
                                ?.dwi_kewarganegaraan_jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.dwi_kewarganegaraan_jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.kewarganegaraan?.jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.kewarganegaraan.jumlah_perempuan`,
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

          <Tab.Pane eventKey="etnis">
            <DataPotensiDesaAccordion alwaysOpen defaultActiveKey={["etnis"]}>
              <DataPotensiDesaAccordionItem eventKey={"etnis"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Etnis</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Suku</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdmEtnisArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.etnis?.[idx]?.suku
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.etnis?.[idx]?.suku?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.etnis.${idx}.suku`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.etnis?.[idx]?.jumlah_laki_laki
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.etnis?.[idx]?.jumlah_laki_laki?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.etnis.${idx}.jumlah_laki_laki`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.etnis?.[idx]?.jumlah_perempuan
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.etnis?.[idx]?.jumlah_perempuan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.etnis.${idx}.jumlah_perempuan`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => sdmEtnisArray.remove(idx)}
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
                              sdmEtnisArray.append({
                                suku: "",
                                jumlah_laki_laki: 0,
                                jumlah_perempuan: 0,
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

          <Tab.Pane eventKey="cacat_mental_dan_fisik">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["cacatMentalDanFisik"]}>
              <DataPotensiDesaAccordionItem eventKey={"cacatMentalDanFisik"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Cacat Mental dan Fisik</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Cacat</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {sdmCacatMentalDanFisikArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.cacat_mental_dan_fisik?.[idx]?.cacat
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.cacat_mental_dan_fisik?.[idx]?.cacat
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.cacat_mental_dan_fisik.${idx}.cacat`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.cacat_mental_dan_fisik?.[idx]
                                  ?.jumlah_laki_laki
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.cacat_mental_dan_fisik?.[idx]
                                  ?.jumlah_laki_laki?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.cacat_mental_dan_fisik.${idx}.jumlah_laki_laki`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(errors?.potensi_sumber_daya_manusia as any)
                                  ?.cacat_mental_dan_fisik?.[idx]
                                  ?.jumlah_perempuan
                              }
                              message={
                                (errors?.potensi_sumber_daya_manusia as any)
                                  ?.cacat_mental_dan_fisik?.[idx]
                                  ?.jumlah_perempuan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sumber_daya_manusia.cacat_mental_dan_fisik.${idx}.jumlah_perempuan`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                sdmCacatMentalDanFisikArray.remove(idx)
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
                              sdmCacatMentalDanFisikArray.append({
                                cacat: "",
                                jumlah_laki_laki: 0,
                                jumlah_perempuan: 0,
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

          <Tab.Pane eventKey="tenaga_kerja">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["tenagaKerja"]}>
              <DataPotensiDesaAccordionItem eventKey={"tenagaKerja"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Tenaga Kerja</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Angkatan kerja</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Penduduk usia 18-56 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_18_56_tahun_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_18_56_tahun_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Penduduk usia 18-56 tahun bekerja</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_bekerja_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_bekerja_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_18_56_tahun_bekerja_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_bekerja_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_bekerja_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_18_56_tahun_bekerja_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Penduduk usia 18-56 tahun tidak bekerja</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_tidak_bekerja_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_tidak_bekerja_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_18_56_tahun_tidak_bekerja_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_tidak_bekerja_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_18_56_tahun_tidak_bekerja_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_18_56_tahun_tidak_bekerja_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Penduduk usia 0-6 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_0_6_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_0_6_tahun_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_0_6_tahun_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_0_6_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_0_6_tahun_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_0_6_tahun_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Penduduk masih sekolah 7-18 tahun</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_masih_sekolah_7_18_tahun_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_masih_sekolah_7_18_tahun_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_masih_sekolah_7_18_tahun_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_masih_sekolah_7_18_tahun_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_masih_sekolah_7_18_tahun_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_masih_sekolah_7_18_tahun_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Penduduk usia 56 tahun keatas</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_56_tahun_keatas_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_56_tahun_keatas_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_56_tahun_keatas_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_56_tahun_keatas_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja
                                ?.penduduk_usia_56_tahun_keatas_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.penduduk_usia_56_tahun_keatas_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Angkatan kerja</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.angkatan_kerja_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.angkatan_kerja_laki_laki
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.angkatan_kerja_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.angkatan_kerja_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.angkatan_kerja_perempuan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.angkatan_kerja_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Jumlah</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.jumlah_laki_laki
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.jumlah_laki_laki?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.jumlah_laki_laki`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.jumlah_perempuan
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.jumlah_perempuan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.jumlah_perempuan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Total jumlah</td>
                        <td colSpan={2}>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.total_jumlah
                            }
                            message={
                              (errors?.potensi_sumber_daya_manusia as any)
                                ?.tenaga_kerja?.total_jumlah?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sumber_daya_manusia.tenaga_kerja.total_jumlah`,
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

          <Tab.Pane eventKey="kualitas_angkatan_kerja">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["kualitasAngkatanKerja"]}>
              <DataPotensiDesaAccordionItem eventKey={"kualitasAngkatanKerja"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kualitas Angkatan Kerja</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>Angkatan kerja</th>
                        <th>Jumlah laki-laki</th>
                        <th>Jumlah perempuan</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sdmKualitasAngkatanKerjaArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_manusia as any)
                                    ?.kualitas_angkatan_kerja?.[idx]
                                    ?.angkatan_kerja
                                }
                                message={
                                  (errors?.potensi_sumber_daya_manusia as any)
                                    ?.kualitas_angkatan_kerja?.[idx]
                                    ?.angkatan_kerja?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_manusia.kualitas_angkatan_kerja.${idx}.angkatan_kerja`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_manusia as any)
                                    ?.kualitas_angkatan_kerja?.[idx]
                                    ?.jumlah_laki_laki
                                }
                                message={
                                  (errors?.potensi_sumber_daya_manusia as any)
                                    ?.kualitas_angkatan_kerja?.[idx]
                                    ?.jumlah_laki_laki?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_manusia.kualitas_angkatan_kerja.${idx}.jumlah_laki_laki`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(errors?.potensi_sumber_daya_manusia as any)
                                    ?.kualitas_angkatan_kerja?.[idx]
                                    ?.jumlah_perempuan
                                }
                                message={
                                  (errors?.potensi_sumber_daya_manusia as any)
                                    ?.kualitas_angkatan_kerja?.[idx]
                                    ?.jumlah_perempuan?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sumber_daya_manusia.kualitas_angkatan_kerja.${idx}.jumlah_perempuan`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  sdmKualitasAngkatanKerjaArray.remove(idx)
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
                              sdmKualitasAngkatanKerjaArray.append({
                                angkatan_kerja: "",
                                jumlah_laki_laki: 0,
                                jumlah_perempuan: 0,
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
