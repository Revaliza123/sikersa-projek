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
  SelectAktifAtauTidakAktif,
  SelectBaikAtauRusak,
  SelectPemerintahSwastaSwadaya,
} from "../DataPotensiDesaForm"
import { useDisableWhenDetailPath } from "../hooks/useDisableDetail"

export function DataPotensiSarana({
  activeForm,
  activeTabSaranaTransportasi,
  setActiveTabSaranaTransportasi,
  register,
  errors,
  control,
  watch,
}: {
  activeForm: string
  activeTabSaranaTransportasi: string
  setActiveTabSaranaTransportasi: (v: string) => void
  register: any
  errors: any
  control: any
  watch: any
}) {
  const { hideElement } = useDisableWhenDetailPath()

  const saranaPrasaranaKesehatanArray = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.kesehatan.prasarana_kesehatan",
  })

  const saranaSaranaKesehatanArray = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.kesehatan.sarana_kesehatan",
  })

  const saranaPendidikanArray = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.kesehatan.pendidikan.prasarana_dan_sarana_pendidikan",
  })

  const saranaHiburanDanWisataArray = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.kesehatan.hiburan_dan_wisata.prasarana_hiburan_dan_wisata",
  })

  const saranaJalanDesaKelurahanArray = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_desa_kelurahan",
  })

  const saranaJalanAntarDesaArray = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_antar_desa",
  })

  const saranaJalanKabupatenMelewatiDesa = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_kabupaten_melewati_desa",
  })

  const saranaJalanProvinsiMelewatiDesa = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_provinsi_melewati_desa",
  })

  const saranaPanjangJalanNegara = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.panjang_jalan_negara",
  })

  const saranaPrasaranaAngkutanDarat = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_angkutan_darat",
  })

  const saranaSaranaTransportasiDarat = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_darat",
  })

  const saranaJembatanDesaKelurahan = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jembatan_desa_kelurahan",
  })

  const saranaPrasaranaTransportasiLaut = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_laut",
  })

  const saranaSaranaTransportasiLaut = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_laut",
  })

  const saranaPrasaranaTransportasiUdara = useFieldArray({
    control,
    name: "potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_udara",
  })

  return (
    <div
      className={activeForm === "sarana-dan-prasarana" ? "d-block" : "d-none"}>
      <Tab.Container defaultActiveKey={activeTabSaranaTransportasi}>
        <Nav
          className="d-flex justify-content-center my-3"
          activeKey={activeTabSaranaTransportasi}
          onSelect={(selectedKey) =>
            setActiveTabSaranaTransportasi(selectedKey as string)
          }>
          <Nav.Item>
            <TabLink eventKey="transportasi">Transportasi</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="komunikasiDanInformasi">
              Komunikasi dan Informasi
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="airBersihDanSanitasi">
              Air Bersih dan Sanitasi
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="irigasi">Irigasi</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="pemerintahan">Pemerintahan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kemasyarakatanDesaKelurahan">
              Kemasyarakatan Desa Kelurahan
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="peribadatan">Peribadatan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="olahraga">Olahraga</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kesehatan">Kesehatan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="pendidikan">Pendidikan</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="energiDanPenerangan">
              Energi dan Penerangan
            </TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="hiburanDanWisata">Hiburan dan Wisata</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="kebersihan">Kebersihan</TabLink>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="transportasi">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "jalanDesaKelurahan",
                "jalanAntarDesa",
                "jalanKabupatenMelewatiDesa",
                "panjangJalanNegara",
                "jalanProvinsiMelewatiDesa",
                "prasaranaAngkutanDarat",
                "saranaTransportasiDarat",
                "prasaranaTransportasiLaut",
                "saranaTransportasiLaut",
                "prasaranaTransportasiUdara",
                "jembatanDesaKelurahan",
              ]}>
              <DataPotensiDesaAccordionItem eventKey={"jalanDesaKelurahan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jalan Desa Kelurahan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>kondisi jalan</th>
                        <th>baik</th>
                        <th>rusak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaJalanDesaKelurahanArray.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_desa_kelurahan?.[idx]?.sub_type
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_desa_kelurahan?.[idx]?.sub_type
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_desa_kelurahan.${idx}.sub_type`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_desa_kelurahan.${idx}.baik`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_desa_kelurahan?.[idx]?.baik
                                }
                                label={""}
                                suffix={"km"}
                                type="number"
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_desa_kelurahan.${idx}.rusak`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_desa_kelurahan?.[idx]?.rusak
                                }
                                label={""}
                                suffix={"km"}
                                type="number"
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  saranaJalanDesaKelurahanArray.remove(idx)
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
                              saranaJalanDesaKelurahanArray.append({
                                sub_type: "",
                                baik: 0,
                                rusak: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"jalanAntarDesa"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jalan Antar Desa</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>kondisi jalan</th>
                        <th>baik</th>
                        <th>rusak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaJalanAntarDesaArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.transportasi?.prasarana_transportasi_darat
                                  .jalan_antar_desa?.[idx]?.sub_type
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .jalan_antar_desa?.[idx]?.sub_type?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_antar_desa.${idx}.sub_type`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_antar_desa.${idx}.baik`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .jalan_antar_desa?.[idx]?.baik
                              }
                              label={""}
                              suffix={"km"}
                              type="number"
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_antar_desa.${idx}.rusak`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .jalan_antar_desa?.[idx]?.rusak
                              }
                              label={""}
                              suffix={"km"}
                              type="number"
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                saranaJalanAntarDesaArray.remove(idx)
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
                              saranaJalanAntarDesaArray.append({
                                sub_type: "",
                                baik: 0,
                                rusak: 0,
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
                eventKey={"jalanKabupatenMelewatiDesa"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Jalan Kabupaten Melewati Desa
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>kondisi jalan</th>
                        <th>baik</th>
                        <th>rusak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaJalanKabupatenMelewatiDesa.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_kabupaten_melewati_desa?.[idx]
                                    ?.sub_type
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_kabupaten_melewati_desa?.[idx]
                                    ?.sub_type?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_kabupaten_melewati_desa.${idx}.sub_type`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_kabupaten_melewati_desa.${idx}.baik`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_kabupaten_melewati_desa?.[idx]?.baik
                                }
                                label={""}
                                suffix={"km"}
                                type="number"
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_kabupaten_melewati_desa.${idx}.rusak`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_kabupaten_melewati_desa?.[idx]?.rusak
                                }
                                label={""}
                                suffix={"km"}
                                type="number"
                              />
                            </td>

                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  saranaJalanKabupatenMelewatiDesa.remove(idx)
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
                              saranaJalanKabupatenMelewatiDesa.append({
                                sub_type: "",
                                baik: 0,
                                rusak: 0,
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
                eventKey={"jalanProvinsiMelewatiDesa"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Jalan Provinsi Melewati Desa
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>kondisi jalan</th>
                        <th>baik</th>
                        <th>rusak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaJalanProvinsiMelewatiDesa.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_provinsi_melewati_desa?.[idx]
                                    ?.sub_type
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_provinsi_melewati_desa?.[idx]
                                    ?.sub_type?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_provinsi_melewati_desa.${idx}.sub_type`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_provinsi_melewati_desa.${idx}.baik`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_provinsi_melewati_desa?.[idx]?.baik
                                }
                                label={""}
                                suffix={"km"}
                                type="number"
                              />
                            </td>
                            <td>
                              <FormInputGroup
                                className=""
                                required={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jalan_provinsi_melewati_desa.${idx}.rusak`,
                                  { valueAsNumber: true }
                                )}
                                field={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .jalan_provinsi_melewati_desa?.[idx]?.rusak
                                }
                                label={""}
                                suffix={"km"}
                                type="number"
                              />
                            </td>

                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  saranaJalanProvinsiMelewatiDesa.remove(idx)
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
                              saranaJalanProvinsiMelewatiDesa.append({
                                sub_type: "",
                                baik: 0,
                                rusak: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"panjangJalanNegara"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Panjang Jalan Negara</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>kondisi jalan</th>
                        <th>baik</th>
                        <th>rusak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaPanjangJalanNegara.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.transportasi?.prasarana_transportasi_darat
                                  .panjang_jalan_negara?.[idx]?.sub_type
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .panjang_jalan_negara?.[idx]?.sub_type
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.panjang_jalan_negara.${idx}.sub_type`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.panjang_jalan_negara.${idx}.baik`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .panjang_jalan_negara?.[idx]?.baik
                              }
                              label={""}
                              suffix={"km"}
                              type="number"
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.panjang_jalan_negara.${idx}.rusak`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .panjang_jalan_negara?.[idx]?.rusak
                              }
                              label={""}
                              suffix={"km"}
                              type="number"
                            />
                          </td>

                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                saranaPanjangJalanNegara.remove(idx)
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
                              saranaPanjangJalanNegara.append({
                                sub_type: "",
                                baik: 0,
                                rusak: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"jembatanDesaKelurahan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Jembatan Desa Kelurahan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>kondisi jembatan</th>
                        <th>baik</th>
                        <th>rusak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaJembatanDesaKelurahan.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.transportasi?.prasarana_transportasi_darat
                                  ?.jembatan_desa_kelurahan?.[idx]
                                  ?.kondisi_jembatan
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  ?.jembatan_desa_kelurahan?.[idx]
                                  ?.kondisi_jembatan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jembatan_desa_kelurahan.${idx}.kondisi_jembatan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jembatan_desa_kelurahan.${idx}.baik`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  ?.jembatan_desa_kelurahan?.[idx]?.baik
                              }
                              label={""}
                              suffix={"km"}
                              type="number"
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.jembatan_desa_kelurahan.${idx}.rusak`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  ?.jembatan_desa_kelurahan?.[idx]?.rusak
                              }
                              label={""}
                              suffix={"km"}
                              type="number"
                            />
                          </td>

                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                saranaJembatanDesaKelurahan.remove(idx)
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
                              saranaJembatanDesaKelurahan.append({
                                kondisi_jembatan: "",
                                baik: 0,
                                rusak: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"prasaranaAngkutanDarat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Prasarana Angkutan Darat</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>kondisi prasarana</th>
                        <th>baik</th>
                        <th>rusak</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaPrasaranaAngkutanDarat.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.transportasi?.prasarana_transportasi_darat
                                  .prasarana_angkutan_darat?.[idx]?.sub_type
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .prasarana_angkutan_darat?.[idx]?.sub_type
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_angkutan_darat.${idx}.sub_type`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_angkutan_darat.${idx}.baik`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .prasarana_angkutan_darat?.[idx]?.baik
                              }
                              label={""}
                              suffix={"unit"}
                              type="number"
                            />
                          </td>
                          <td>
                            <FormInputGroup
                              className=""
                              required={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_angkutan_darat.${idx}.rusak`,
                                { valueAsNumber: true }
                              )}
                              field={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .prasarana_angkutan_darat?.[idx]?.rusak
                              }
                              label={""}
                              suffix={"unit"}
                              type="number"
                            />
                          </td>

                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                saranaPrasaranaAngkutanDarat.remove(idx)
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
                              saranaPrasaranaAngkutanDarat.append({
                                sub_type: "",
                                baik: 0,
                                rusak: 0,
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
                eventKey={"saranaTransportasiDarat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Sarana Transportasi Darat</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>sarana</th>
                        <th>keterangan</th>
                        <th>unit</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaSaranaTransportasiDarat.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .sarana_transportasi_darat?.[idx]?.sarana
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .sarana_transportasi_darat?.[idx]?.sarana
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_darat.${idx}.sarana`
                                )}
                              />
                            </td>
                            <td>
                              <SelectAdaAtauTidak
                                control={control}
                                errors={errors}
                                fieldName={`potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_darat.${idx}.keterangan`}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .sarana_transportasi_darat?.[idx]?.unit
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .sarana_transportasi_darat?.[idx]?.unit
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_darat.${idx}.unit`,
                                  { valueAsNumber: true }
                                )}
                                additionalOptions={{
                                  disabled:
                                    watch(
                                      `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_darat.${idx}.keterangan`
                                    ) === "tidak ada",
                                }}
                              />
                            </td>

                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  saranaSaranaTransportasiDarat.remove(idx)
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
                              saranaSaranaTransportasiDarat.append({
                                sarana: "",
                                keterangan: "ada",
                                unit: 0,
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
                eventKey={"prasaranaTransportasiLaut"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Prasarana Transportasi Laut
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>prasarana</th>
                        <th>unit</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaPrasaranaTransportasiLaut.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_laut?.[idx]
                                    ?.prasarana
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_laut?.[idx]
                                    ?.prasarana?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_laut.${idx}.prasarana`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_laut?.[idx]?.unit
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_laut?.[idx]?.unit
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_laut.${idx}.unit`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>

                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  saranaPrasaranaTransportasiLaut.remove(idx)
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
                              saranaPrasaranaTransportasiLaut.append({
                                prasarana: "",
                                unit: 0,
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

              <DataPotensiDesaAccordionItem eventKey={"saranaTransportasiLaut"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Sarana Transportasi Laut</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>sarana</th>
                        <th>keterangan</th>
                        <th>unit</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaSaranaTransportasiLaut.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.transportasi?.prasarana_transportasi_darat
                                  .sarana_transportasi_laut?.[idx]?.sarana
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .sarana_transportasi_laut?.[idx]?.sarana
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_laut.${idx}.sarana`
                              )}
                            />
                          </td>
                          <td>
                            <SelectAdaAtauTidak
                              control={control}
                              errors={errors}
                              fieldName={`potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_laut.${idx}.keterangan`}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.transportasi?.prasarana_transportasi_darat
                                  .sarana_transportasi_laut?.[idx]?.unit
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.transportasi?.prasarana_transportasi_darat
                                  .sarana_transportasi_laut?.[idx]?.unit
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_laut.${idx}.unit`,
                                { valueAsNumber: true }
                              )}
                              additionalOptions={{
                                disabled:
                                  watch(
                                    `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.sarana_transportasi_laut.${idx}.keterangan`
                                  ) === "tidak ada",
                              }}
                            />
                          </td>

                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() =>
                                saranaSaranaTransportasiLaut.remove(idx)
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
                              saranaSaranaTransportasiLaut.append({
                                sarana: "",
                                keterangan: "",
                                unit: 0,
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
                eventKey={"prasaranaTransportasiUdara"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Prasarana Transportasi Udara
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>prasarana</th>
                        <th>keterangan</th>
                        <th>unit</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaPrasaranaTransportasiUdara.fields.map(
                        (field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_udara?.[idx]
                                    ?.prasarana
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_udara?.[idx]
                                    ?.prasarana?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_udara.${idx}.prasarana`
                                )}
                              />
                            </td>
                            <td>
                              <SelectAdaAtauTidak
                                control={control}
                                errors={errors}
                                fieldName={`potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_udara.${idx}.keterangan`}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_udara?.[idx]?.unit
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.transportasi?.prasarana_transportasi_darat
                                    .prasarana_transportasi_udara?.[idx]?.unit
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_udara.${idx}.unit`,
                                  { valueAsNumber: true }
                                )}
                                additionalOptions={{
                                  disabled:
                                    watch(
                                      `potensi_sarana_dan_transportasi.transportasi.prasarana_transportasi_darat.prasarana_transportasi_udara.${idx}.keterangan`
                                    ) === "tidak ada",
                                }}
                              />
                            </td>

                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  saranaPrasaranaTransportasiUdara.remove(idx)
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
                              saranaPrasaranaTransportasiUdara.append({
                                prasarana: "",
                                keterangan: "",
                                unit: 0,
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

          <Tab.Pane eventKey="komunikasiDanInformasi">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "telepon",
                "kantorPos",
                "radioTv",
                "koranMajalahBuletin",
              ]}>
              <DataPotensiDesaAccordionItem eventKey={"telepon"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Telepon</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>telepon umum</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.telepon.telepon_umum`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>wartel</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.telepon.wartel`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>warnet</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.telepon.warnet`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pelanggan telkom</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.telepon.jumlah_pelanggan_telkom`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pelanggan gsm</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.telepon.jumlah_pelanggan_gsm`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pelanggan cdma</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.telepon.jumlah_pelanggan_cdma`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>sinyal telepon seluler handphone</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.telepon.sinyal_telepon_seluler_handphone`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"kantorPos"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kantor Pos</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>kantor pos</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.kantor_pos.kantor_pos`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kantor pos pembantu</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.kantor_pos.kantor_pos_pembantu`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>tukang pos</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.kantor_pos.tukang_pos`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"radioTv"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Radio TV</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>tv umum</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.radio_tv.tv_umum`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah radio</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.komunikasi_dan_informasi?.radio_tv
                                ?.jumlah_radio
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.komunikasi_dan_informasi?.radio_tv
                                ?.jumlah_radio?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.komunikasi_dan_informasi.radio_tv.jumlah_radio`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah tv</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.komunikasi_dan_informasi?.radio_tv?.jumlah_tv
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.komunikasi_dan_informasi?.radio_tv?.jumlah_tv
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.komunikasi_dan_informasi.radio_tv.jumlah_tv`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah parabola</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.komunikasi_dan_informasi?.radio_tv
                                ?.jumlah_parabola
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.komunikasi_dan_informasi?.radio_tv
                                ?.jumlah_parabola?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.komunikasi_dan_informasi.radio_tv.jumlah_parabola`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"koranMajalahBuletin"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Koran Majalah Buletin</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>koran surat kabar</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.koran_majalah_buletin.koran_surat_kabar`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>majalah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.koran_majalah_buletin.majalah`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>papan iklan reklame</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.koran_majalah_buletin.papan_iklan_reklame`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>papan pengumuman</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.komunikasi_dan_informasi.koran_majalah_buletin.papan_pengumuman`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="airBersihDanSanitasi">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["prasaranaAirBersih", "sanitasi"]}>
              <DataPotensiDesaAccordionItem eventKey={"prasaranaAirBersih"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Prasarana Air Bersih</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>jumlah sumur pompa</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_sumur_pompa`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_sumur_pompa
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah sumur gali</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_sumur_gali`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_sumur_gali
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah hidran umum</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_hidran_umum`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_hidran_umum
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pah</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_pah`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_pah
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah tangki air bersih</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_tangki_air_bersih`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_tangki_air_bersih
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah embung</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_embung`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_embung
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah mata air</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_mata_air`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_mata_air
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah bangunan pengolahan air bersih</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.prasarana_air_bersih.jumlah_bangunan_pengolahan_air_bersih`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.prasarana_air_bersih
                                ?.jumlah_bangunan_pengolahan_air_bersih
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"sanitasi"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Sanitasi</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>saluran drainase</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.saluran_drainase`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>sumur resapan air rumah tangga</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.sumur_resapan_air_rumah_tangga`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.sanitasi
                                ?.sumur_resapan_air_rumah_tangga
                            }
                            label={""}
                            suffix={"rumah"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah mck umum</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.jumlah_mck_umum`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.sanitasi
                                ?.jumlah_mck_umum
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pemilik jumlah jamban keluarga</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.pemilik_jumlah_jamban_keluarga`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.sanitasi
                                ?.pemilik_jumlah_jamban_keluarga
                            }
                            label={""}
                            suffix={"kk"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kondisi saluran drainase baik</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.kondisi_saluran_drainase_baik`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.sanitasi
                                ?.kondisi_saluran_drainase_baik
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kondisi saluran drainase rusak</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.kondisi_saluran_drainase_rusak`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.sanitasi
                                ?.kondisi_saluran_drainase_rusak
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kondisi saluran drainase mampet</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.kondisi_saluran_drainase_mampet`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.sanitasi
                                ?.kondisi_saluran_drainase_mampet
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kondisi saluran drainase kurang memadai</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.air_bersih_dan_sanitasi.sanitasi.kondisi_saluran_drainase_kurang_memadai`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.air_bersih_dan_sanitasi?.sanitasi
                                ?.kondisi_saluran_drainase_kurang_memadai
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="irigasi">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["prasaranaIrigasi", "kondisi"]}>
              <DataPotensiDesaAccordionItem eventKey={"prasaranaIrigasi"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Prasarana Irigasi</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>panjang saluran primer</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.prasarana_irigasi.panjang_saluran_primer`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.prasarana_irigasi
                                ?.panjang_saluran_primer
                            }
                            label={""}
                            suffix={"m"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>panjang saluran sekunder</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.prasarana_irigasi.panjang_saluran_sekunder`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.prasarana_irigasi
                                ?.panjang_saluran_sekunder
                            }
                            label={""}
                            suffix={"m"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>panjang saluran tersier</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.prasarana_irigasi.panjang_saluran_tersier`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.prasarana_irigasi
                                ?.panjang_saluran_tersier
                            }
                            label={""}
                            suffix={"m"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pintu sadap</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.prasarana_irigasi.jumlah_pintu_sadap`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.prasarana_irigasi?.jumlah_pintu_sadap
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pintu pembagi air</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.prasarana_irigasi.jumlah_pintu_pembagi_air`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.prasarana_irigasi
                                ?.jumlah_pintu_pembagi_air
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"kondisi"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kondisi</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>panjang saluran primer rusak</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.kondisi.panjang_saluran_primer_rusak`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.kondisi?.panjang_saluran_primer_rusak
                            }
                            label={""}
                            suffix={"m"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>panjang saluran sekunder rusak</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.kondisi.panjang_saluran_sekunder_rusak`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.kondisi
                                ?.panjang_saluran_sekunder_rusak
                            }
                            label={""}
                            suffix={"m"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>panjang saluran teriser rusak</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.kondisi.panjang_saluran_teriser_rusak`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.kondisi
                                ?.panjang_saluran_teriser_rusak
                            }
                            label={""}
                            suffix={"m"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pintu sadap rusak</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.kondisi.jumlah_pintu_sadap_rusak`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.kondisi?.jumlah_pintu_sadap_rusak
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pintu pembagi air rusak</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.irigasi.kondisi.jumlah_pintu_pembagi_air_rusak`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.irigasi?.kondisi
                                ?.jumlah_pintu_pembagi_air_rusak
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="pemerintahan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "pemerintahanDesaKelurahan",
                "badanPermusyawaratanDesaBpd",
                "dusunLingkunganAtauSebutanLain",
              ]}>
              <DataPotensiDesaAccordionItem
                eventKey={"pemerintahanDesaKelurahan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Pemerintahan Desa Kelurahan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>gedung kantor</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.gedung_kantor`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mb-0 fw-bold">keadaan</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>kondisi</td>
                        <td>
                          <SelectBaikAtauRusak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.kondisi`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah ruang kerja</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .keadaan?.jumlah_ruang_kerja
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .keadaan?.jumlah_ruang_kerja?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.jumlah_ruang_kerja`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>balai desa kelurahan sejenisnya</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.balai_desa_kelurahan_sejenisnya`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>listrik</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.listrik`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>air bersih</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.air_bersih`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>telepon</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.telepon`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>rumah dinas kepala desa lurah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.rumah_dinas_kepala_desa_lurah`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>rumah dinas perangkat desa kelurahan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.keadaan.rumah_dinas_perangkat_desa_kelurahan`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <h5>inventaris alat tulis kantor</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah mesin tik</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.jumlah_mesin_tik
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.jumlah_mesin_tik
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.inventaris_alat_tulis_kantor.jumlah_mesin_tik`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah meja</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.jumlah_meja
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.jumlah_meja
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.inventaris_alat_tulis_kantor.jumlah_meja`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah kursi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.jumlah_kursi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.jumlah_kursi
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.inventaris_alat_tulis_kantor.jumlah_kursi`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah almari arsip</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor
                                ?.jumlah_almari_arsip
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor
                                ?.jumlah_almari_arsip?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.inventaris_alat_tulis_kantor.jumlah_almari_arsip`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>komputer</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.komputer
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.komputer?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.inventaris_alat_tulis_kantor.komputer`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>mesin fax</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.mesin_fax
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.mesin_fax
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.inventaris_alat_tulis_kantor.mesin_fax`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kendaraan dinas</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.kendaraan_dinas
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.pemerintahan_desa_kelurahan
                                .inventaris_alat_tulis_kantor?.kendaraan_dinas
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.inventaris_alat_tulis_kantor.kendaraan_dinas`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td colSpan={2}>
                          <h5>administrasi pemerintahan desa</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>buku data peraturan desa</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_peraturan_desa`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku keputusan kepala desa</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_keputusan_kepala_desa`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi kependudukan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_administrasi_kependudukan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data inventaris</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_inventaris`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data aparat</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_aparat`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data tanah milik desa</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_tanah_milik_desa`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi pajak dan retribusi</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_administrasi_pajak_dan_retribusi`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data tanah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_tanah`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku laporan pengaduan masyarakat</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_laporan_pengaduan_masyarakat`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku agenda ekspedisi</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_agenda_ekspedisi`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku profil desa kelurahan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_profil_desa_kelurahan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data induk penduduk</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_induk_penduduk`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data mutasi penduduk</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_mutasi_penduduk`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku rekapitulasi jumlah penduduk akhir bulan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_rekapitulasi_jumlah_penduduk_akhir_bulan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku registrasi pelayanan penduduk</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_registrasi_pelayanan_penduduk`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data penduduk sementara</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_penduduk_sementara`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku anggaran penerimaan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_anggaran_penerimaan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          buku anggaran pengeluaran pegawai dan pembangunan
                        </td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_anggaran_pengeluaran_pegawai_dan_pembangunan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku kas umum</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_kas_umum`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku kas pembantu penerimaan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_kas_pembantu_penerimaan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          buku kas pembantu pengeluaran rutin dan pembangunan
                        </td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_kas_pembantu_pengeluaran_rutin_dan_pembangunan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku data lembaga kemasyarakatan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.pemerintahan_desa_kelurahan.administrasi_pemerintahan_desa.buku_data_lembaga_kemasyarakatan`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"badanPermusyawaratanDesaBpd"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Badan Permusyawaratan Desa BPD
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>gedung kantor</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.gedung_kantor`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>ruangan kerja</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.ruangan_kerja`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>balai BPD</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.balai_bpd`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kondisi</td>
                        <td>
                          <SelectBaikAtauRusak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.kondisi`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>listrik</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.listrik`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>air bersih</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.air_bersih`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>telepon</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.telepon`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h5>inventaris dan alat tulis kantor</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah mesin tik</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_mesin_tik
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_mesin_tik?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.inventaris_dan_alat_tulis_kantor.jumlah_mesin_tik`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah meja</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor?.jumlah_meja
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor?.jumlah_meja
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.inventaris_dan_alat_tulis_kantor.jumlah_meja`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah kursi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor?.jumlah_kursi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor?.jumlah_kursi
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.inventaris_dan_alat_tulis_kantor.jumlah_kursi`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah almari arsip</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_almari_arsip
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_almari_arsip?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.inventaris_dan_alat_tulis_kantor.jumlah_almari_arsip`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah komputer</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_komputer
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_komputer?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.inventaris_dan_alat_tulis_kantor.jumlah_komputer`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah mesin fax</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_jumlah_mesin_fax
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                .inventaris_dan_alat_tulis_kantor
                                ?.jumlah_jumlah_mesin_fax?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.inventaris_dan_alat_tulis_kantor.jumlah_jumlah_mesin_fax`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h6 className="mb-0 fw-bold">administrasi BPD</h6>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>buku administrasi keanggotaan bpd</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.administrasi_bpd.buku_administrasi_keanggotaan_bpd`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi kegiatan bpd</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                ?.administrasi_bpd
                                ?.buku_administrasi_kegiatan_bpd
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan?.badan_permusyawaratan_desa_bpd
                                ?.administrasi_bpd
                                ?.buku_administrasi_kegiatan_bpd?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.administrasi_bpd.buku_administrasi_kegiatan_bpd`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku kegiatan bpd</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.administrasi_bpd.buku_kegiatan_bpd`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku himpunan peraturan desa</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.badan_permusyawaratan_desa_bpd.administrasi_bpd.buku_himpunan_peraturan_desa`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"dusunLingkunganAtauSebutanLain"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Dusun Lingkungan atau Sebutan Lain
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>gedung kantor atau balai pertemuan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.dusun_lingkungan_atau_sebutan_lain.gedung_kantor_atau_balai_pertemuan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>alat tulis kantor</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.dusun_lingkungan_atau_sebutan_lain.alat_tulis_kantor`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>barang inventaris</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.pemerintahan.dusun_lingkungan_atau_sebutan_lain.barang_inventaris`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan
                                ?.dusun_lingkungan_atau_sebutan_lain
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan
                                ?.dusun_lingkungan_atau_sebutan_lain
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.dusun_lingkungan_atau_sebutan_lain.buku_administrasi`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jenis kegiatan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan
                                ?.dusun_lingkungan_atau_sebutan_lain
                                ?.jenis_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan
                                ?.dusun_lingkungan_atau_sebutan_lain
                                ?.jenis_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.dusun_lingkungan_atau_sebutan_lain.jenis_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pengurus</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan
                                ?.dusun_lingkungan_atau_sebutan_lain
                                ?.jumlah_pengurus
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.pemerintahan
                                ?.dusun_lingkungan_atau_sebutan_lain
                                ?.jumlah_pengurus?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.pemerintahan.dusun_lingkungan_atau_sebutan_lain.jumlah_pengurus`,
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

          <Tab.Pane eventKey="kemasyarakatanDesaKelurahan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={[
                "gedungKantor",
                "lkmdLkmAtauSebutanLain",
                "pkk",
                "karangTaruna",
                "rt",
                "rw",
                "lembagaAdat",
                "bumdes",
                "forumKomunikasiKaderPemberdayaanMasyarakat",
                "kantorGedungOrganisasiSosialKemasyarakatan",
                "kantorGedungOrganisasiProfesiYangAda",
              ]}>
              <DataPotensiDesaAccordionItem eventKey={"gedungKantor"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Gedung Kantor</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan gedung kantor</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.gedung_kantor.keterangan_gedung_kantor`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>peralatan kantor komputer fax</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.gedung_kantor.peralatan_kantor_komputer_fax`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>mesin tik</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.gedung_kantor.mesin_tik`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kardek</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.gedung_kantor.kardek`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi lembaga kemasyarakatan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.gedung_kantor
                                ?.buku_administrasi_lembaga_kemasyarakatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.gedung_kantor
                                ?.buku_administrasi_lembaga_kemasyarakatan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.gedung_kantor.buku_administrasi_lembaga_kemasyarakatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah meja dan kursi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.gedung_kantor
                                ?.jumlah_meja_dan_kursi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.gedung_kantor
                                ?.jumlah_meja_dan_kursi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.gedung_kantor.jumlah_meja_dan_kursi`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"lkmdLkmAtauSebutanLain"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">LKMD LKM atau Sebutan Lain</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>memiliki kantor sendiri</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.memiliki_kantor_sendiri`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>peralatan kantor komputer fax</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.peralatan_kantor_komputer_fax`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>mesin tik</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.mesin_tik`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kardek</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.kardek`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi lembaga kemasyarakatan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain
                                ?.buku_administrasi_lembaga_kemasyarakatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain
                                ?.buku_administrasi_lembaga_kemasyarakatan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.buku_administrasi_lembaga_kemasyarakatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah meja dan kursi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain
                                ?.jumlah_meja_dan_kursi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain
                                ?.jumlah_meja_dan_kursi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.jumlah_meja_dan_kursi`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain?.buku_administrasi
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.buku_administrasi`,
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.lkmd_lkm_atau_sebutan_lain?.jumlah_kegiatan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lkmd_lkm_atau_sebutan_lain.jumlah_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"pkk"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">PKK</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan pkk</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.keterangan_pkk`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>gedung kantor</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.gedung_kantor`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>peralatan kantor atk inventaris</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.peralatan_kantor_atk_inventaris`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan aktif</td>
                        <td>
                          <SelectAktifAtauTidakAktif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.kepengurusan_aktif`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi pkk</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.buku_administrasi_pkk`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi pkk jenis</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.pkk
                                ?.buku_administrasi_pkk_jenis
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.pkk
                                ?.buku_administrasi_pkk_jenis?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.buku_administrasi_pkk_jenis`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kegiatan</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.kegiatan`}
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.pkk
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.pkk
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.pkk.jumlah_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"karangTaruna"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Karang Taruna</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan karang taruna</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.karang_taruna.keterangan_karang_taruna`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.karang_taruna.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.karang_taruna
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.karang_taruna
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.karang_taruna.buku_administrasi`,
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.karang_taruna
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.karang_taruna
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.karang_taruna.jumlah_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"rt"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">RT</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan rt</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rt.keterangan_rt`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rt.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rt
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rt
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rt.buku_administrasi`,
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rt
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rt
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rt.jumlah_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"rw"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">RW</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan rw</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rw.keterangan_rw`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rw.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rw
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rw
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rw.buku_administrasi`,
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rw
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.rw
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.rw.jumlah_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"lembagaAdat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Lembaga Adat</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>memiliki kantor gedung menumpang</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lembaga_adat.memiliki_kantor_gedung_menumpang`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lembaga_adat.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.lembaga_adat
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.lembaga_adat
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lembaga_adat.buku_administrasi`,
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.lembaga_adat
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.lembaga_adat
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.lembaga_adat.jumlah_kegiatan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"bumdes"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">bumdes</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan bumdes</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.bumdes.keterangan_bumdes`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>memiliki kantor gedung menumpang</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.bumdes.memiliki_kantor_gedung_menumpang`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.bumdes.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.bumdes
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.bumdes
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.bumdes.buku_administrasi`,
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.bumdes
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan?.bumdes
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.bumdes.jumlah_kegiatan`,
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
                eventKey={"forumKomunikasiKaderPemberdayaanMasyarakat"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Forum Komunikasi Kader Pemberdayaan Masyarakat
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan forum</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.forum_komunikasi_kader_pemberdayaan_masyarakat.keterangan_forum`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kantor gedung menumpang</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.forum_komunikasi_kader_pemberdayaan_masyarakat.kantor_gedung_menumpang`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.forum_komunikasi_kader_pemberdayaan_masyarakat.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.forum_komunikasi_kader_pemberdayaan_masyarakat
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.forum_komunikasi_kader_pemberdayaan_masyarakat
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.forum_komunikasi_kader_pemberdayaan_masyarakat.buku_administrasi`,
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
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.forum_komunikasi_kader_pemberdayaan_masyarakat
                                ?.jumlah_kegiatan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.forum_komunikasi_kader_pemberdayaan_masyarakat
                                ?.jumlah_kegiatan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.forum_komunikasi_kader_pemberdayaan_masyarakat.jumlah_kegiatan`,
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
                eventKey={"kantorGedungOrganisasiSosialKemasyarakatan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Kantor Gedung Organisasi Sosial Kemasyarakatan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan kantor</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.kantor_gedung_organisasi_sosial_kemasyarakatan.keterangan_kantor`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>memiliki kantor gedung menumpang</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.kantor_gedung_organisasi_sosial_kemasyarakatan.memiliki_kantor_gedung_menumpang`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.kantor_gedung_organisasi_sosial_kemasyarakatan.kepengurusan`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem
                eventKey={"kantorGedungOrganisasiProfesiYangAda"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Kantor Gedung Organisasi Profesi yang Ada
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>keterangan kantor</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.kantor_gedung_organisasi_profesi_yang_ada.keterangan_kantor`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>memiliki kantor gedung menumpang</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.kantor_gedung_organisasi_profesi_yang_ada.memiliki_kantor_gedung_menumpang`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kepengurusan</td>
                        <td>
                          <SelectAktifAtauPasif
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.kantor_gedung_organisasi_profesi_yang_ada.kepengurusan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>buku administrasi</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.kantor_gedung_organisasi_profesi_yang_ada
                                ?.buku_administrasi
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kemasyarakatan_desa_kelurahan
                                ?.kantor_gedung_organisasi_profesi_yang_ada
                                ?.buku_administrasi?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kemasyarakatan_desa_kelurahan.kantor_gedung_organisasi_profesi_yang_ada.buku_administrasi`,
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

          <Tab.Pane eventKey="peribadatan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["peribadatan"]}>
              <DataPotensiDesaAccordionItem eventKey={"peribadatan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Peribadatan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>jumlah masjid</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_masjid
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_masjid?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.peribadatan.jumlah_masjid`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah langgar/surau/mushola</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_langgar_surau_mushola
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_langgar_surau_mushola
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.peribadatan.jumlah_langgar_surau_mushola`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah gereja kristen protestan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_gereja_kristen_protestan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_gereja_kristen_protestan
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.peribadatan.jumlah_gereja_kristen_protestan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah gereja katholik</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_gereja_katholik
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_gereja_katholik?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.peribadatan.jumlah_gereja_katholik`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah wihara</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_wihara
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_wihara?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.peribadatan.jumlah_wihara`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pura</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_pura
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_pura?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.peribadatan.jumlah_pura`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah klenteng</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_klenteng
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.peribadatan?.jumlah_klenteng?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.peribadatan.jumlah_klenteng`,
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

          <Tab.Pane eventKey="olahraga">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["olahraga"]}>
              <DataPotensiDesaAccordionItem eventKey={"olahraga"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Olahraga</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>lapangan sepak bola</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_sepak_bola
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_sepak_bola?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.lapangan_sepak_bola`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>lapangan bulu tangkis</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_bulu_tangkis
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_bulu_tangkis?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.lapangan_bulu_tangkis`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>meja pingpong</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.meja_piingpong
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.meja_piingpong?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.meja_piingpong`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>lapangan tenis</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_tenis
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_tenis?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.lapangan_tenis`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>lapangan voli</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_voli
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_voli?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.lapangan_voli`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>lapangan golf</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_golf
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_golf?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.lapangan_golf`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pacuan kuda</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.pacuan_kuda
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.pacuan_kuda?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.pacuan_kuda`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>arum jeram</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.olahraga.arum_jeram`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>lapangan basket</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_basket
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.lapangan_basket?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.lapangan_basket`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pusat kebugaran</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.pusat_kebugaran
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.olahraga?.pusat_kebugaran?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.olahraga.pusat_kebugaran`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>gelanggang remaja</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.olahraga.gelanggang_remaja`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="kesehatan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["prasaranaKesehatan", "saranaKesehatan"]}>
              <DataPotensiDesaAccordionItem eventKey={"prasaranaKesehatan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Prasarana Kesehatan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm align-middle">
                      <thead>
                        <tr>
                          <th>Prasarana</th>
                          <th>Jumlah</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {saranaPrasaranaKesehatanArray.fields.map(
                          (field, idx) => (
                            <tr key={field.id}>
                              <td>
                                <FormInputControl
                                  className="mb-0"
                                  isInvalid={
                                    !!(
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.prasarana_kesehatan?.[idx]
                                      ?.prasarana
                                  }
                                  message={
                                    (
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.prasarana_kesehatan?.[idx]
                                      .prasarana?.message
                                  }
                                  formGroup={false}
                                  register={register(
                                    `potensi_sarana_dan_transportasi.kesehatan.prasarana_kesehatan.${idx}.prasarana`
                                  )}
                                />
                              </td>
                              <td>
                                <FormInputControl
                                  type="number"
                                  className="mb-0"
                                  isInvalid={
                                    !!(
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.prasarana_kesehatan?.[idx]
                                      ?.unit
                                  }
                                  message={
                                    (
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.prasarana_kesehatan?.[idx]
                                      .unit?.message
                                  }
                                  formGroup={false}
                                  register={register(
                                    `potensi_sarana_dan_transportasi.kesehatan.prasarana_kesehatan.${idx}.unit`,
                                    { valueAsNumber: true }
                                  )}
                                />
                              </td>
                              <td style={{ width: 0 }} {...hideElement}>
                                <Button
                                  type="button"
                                  onClick={() =>
                                    saranaPrasaranaKesehatanArray.remove(idx)
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
                                saranaPrasaranaKesehatanArray.append({
                                  prasarana: "",
                                  unit: 0,
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
                  </div>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>

              <DataPotensiDesaAccordionItem eventKey={"saranaKesehatan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Sarana Kesehatan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm align-middle">
                      <thead>
                        <tr>
                          <th>Sarana</th>
                          <th>Jumlah</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {saranaSaranaKesehatanArray.fields.map((field, idx) => (
                          <tr key={field.id}>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.kesehatan?.sarana_kesehatan?.[idx]?.sarana
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.kesehatan?.sarana_kesehatan?.[idx].sarana
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.kesehatan.sarana_kesehatan.${idx}.sarana`
                                )}
                              />
                            </td>
                            <td>
                              <FormInputControl
                                type="number"
                                className="mb-0"
                                isInvalid={
                                  !!(
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.kesehatan?.sarana_kesehatan?.[idx]?.value
                                }
                                message={
                                  (
                                    errors?.potensi_sarana_dan_transportasi as any
                                  )?.kesehatan?.sarana_kesehatan?.[idx].value
                                    ?.message
                                }
                                formGroup={false}
                                register={register(
                                  `potensi_sarana_dan_transportasi.kesehatan.sarana_kesehatan.${idx}.value`,
                                  { valueAsNumber: true }
                                )}
                              />
                            </td>
                            <td style={{ width: 0 }} {...hideElement}>
                              <Button
                                type="button"
                                onClick={() =>
                                  saranaSaranaKesehatanArray.remove(idx)
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
                                saranaSaranaKesehatanArray.append({
                                  sarana: "",
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
                  </div>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="pendidikan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["prasaranaDanSaranaPendidikan"]}>
              <DataPotensiDesaAccordionItem
                eventKey={"prasaranaDanSaranaPendidikan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Prasarana dan Sarana Pendidikan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <thead>
                      <tr>
                        <th>pendidikan</th>
                        <th>sewa</th>
                        <th>milik sendiri</th>
                      </tr>
                    </thead>
                    <tbody>
                      {saranaPendidikanArray.fields.map((field, idx) => (
                        <tr key={field.id}>
                          <td>
                            <FormInputControl
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.kesehatan?.pendidikan
                                  ?.prasarana_dan_sarana_pendidikan?.[idx]
                                  ?.pendidikan
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.kesehatan?.pendidikan
                                  ?.prasarana_dan_sarana_pendidikan?.[idx]
                                  .pendidikan?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.kesehatan.pendidikan.prasarana_dan_sarana_pendidikan.${idx}.pendidikan`
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.kesehatan?.pendidikan
                                  ?.prasarana_dan_sarana_pendidikan?.[idx]?.sewa
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.kesehatan?.pendidikan
                                  ?.prasarana_dan_sarana_pendidikan?.[idx].sewa
                                  ?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.kesehatan.pendidikan.prasarana_dan_sarana_pendidikan.${idx}.sewa`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td>
                            <FormInputControl
                              type="number"
                              className="mb-0"
                              isInvalid={
                                !!(
                                  errors?.potensi_sarana_dan_transportasi as any
                                )?.kesehatan?.pendidikan
                                  ?.prasarana_dan_sarana_pendidikan?.[idx]
                                  ?.milik_sendiri
                              }
                              message={
                                (errors?.potensi_sarana_dan_transportasi as any)
                                  ?.kesehatan?.pendidikan
                                  ?.prasarana_dan_sarana_pendidikan?.[idx]
                                  .milik_sendiri?.message
                              }
                              formGroup={false}
                              register={register(
                                `potensi_sarana_dan_transportasi.kesehatan.pendidikan.prasarana_dan_sarana_pendidikan.${idx}.milik_sendiri`,
                                { valueAsNumber: true }
                              )}
                            />
                          </td>
                          <td style={{ width: 0 }} {...hideElement}>
                            <Button
                              type="button"
                              onClick={() => saranaPendidikanArray.remove(idx)}
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
                              saranaPendidikanArray.append({
                                pendidikan: "",
                                sewa: 0,
                                milik_sendiri: 0,
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

          <Tab.Pane eventKey="energiDanPenerangan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["prasaranaEnergiDanPenerangan"]}>
              <DataPotensiDesaAccordionItem
                eventKey={"prasaranaEnergiDanPenerangan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Prasarana Energi dan Penerangan
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>listrik pln</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.energi_dan_penerangan.prasarana_energi_dan_penerangan.listrik_pln`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.energi_dan_penerangan
                                ?.prasarana_energi_dan_penerangan?.listrik_pln
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>diesel umum</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.energi_dan_penerangan.prasarana_energi_dan_penerangan.diesel_umum`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.energi_dan_penerangan
                                ?.prasarana_energi_dan_penerangan?.diesel_umum
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>genset pribadi</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.energi_dan_penerangan.prasarana_energi_dan_penerangan.genset_pribadi`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.energi_dan_penerangan
                                ?.prasarana_energi_dan_penerangan
                                ?.genset_pribadi
                            }
                            label={""}
                            suffix={"unit"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>lampu minyak tanah jarak kelapa</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.energi_dan_penerangan.prasarana_energi_dan_penerangan.lampu_minyak_tanah_jarak_kelapa`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.energi_dan_penerangan
                                ?.prasarana_energi_dan_penerangan
                                ?.lampu_minyak_tanah_jarak_kelapa
                            }
                            label={""}
                            suffix={"keluarga"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>kayu bakar</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.energi_dan_penerangan.prasarana_energi_dan_penerangan.kayu_bakar`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.energi_dan_penerangan
                                ?.prasarana_energi_dan_penerangan?.kayu_bakar
                            }
                            label={""}
                            suffix={"keluarga"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>batu bara</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.energi_dan_penerangan.prasarana_energi_dan_penerangan.batu_bara`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.energi_dan_penerangan
                                ?.prasarana_energi_dan_penerangan?.batu_bara
                            }
                            label={""}
                            suffix={"keluarga"}
                            type="number"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>tanpa penerangan</td>
                        <td>
                          <FormInputGroup
                            className=""
                            required={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.energi_dan_penerangan.prasarana_energi_dan_penerangan.tanpa_penerangan`,
                              { valueAsNumber: true }
                            )}
                            field={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.energi_dan_penerangan
                                ?.prasarana_energi_dan_penerangan
                                ?.tanpa_penerangan
                            }
                            label={""}
                            suffix={"keluarga"}
                            type="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="hiburanDanWisata">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["prasaranaHiburanDanWisata"]}>
              <DataPotensiDesaAccordionItem
                eventKey={"prasaranaHiburanDanWisata"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">
                    Prasarana Hiburan dan Wisata
                  </h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm align-middle">
                      <thead>
                        <tr>
                          <th>prasarana</th>
                          <th>jumlah</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {saranaHiburanDanWisataArray.fields.map(
                          (field, idx) => (
                            <tr key={field.id}>
                              <td>
                                <FormInputControl
                                  className="mb-0"
                                  isInvalid={
                                    !!(
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.hiburan_dan_wisata
                                      ?.prasarana_hiburan_dan_wisata?.[idx]
                                      ?.prasarana
                                  }
                                  message={
                                    (
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.hiburan_dan_wisata
                                      ?.prasarana_hiburan_dan_wisata?.[idx]
                                      .prasarana?.message
                                  }
                                  formGroup={false}
                                  register={register(
                                    `potensi_sarana_dan_transportasi.kesehatan.hiburan_dan_wisata.prasarana_hiburan_dan_wisata.${idx}.prasarana`
                                  )}
                                />
                              </td>
                              <td>
                                <FormInputControl
                                  type="number"
                                  className="mb-0"
                                  isInvalid={
                                    !!(
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.hiburan_dan_wisata
                                      ?.prasarana_hiburan_dan_wisata?.[idx]
                                      ?.value
                                  }
                                  message={
                                    (
                                      errors?.potensi_sarana_dan_transportasi as any
                                    )?.kesehatan?.hiburan_dan_wisata
                                      ?.prasarana_hiburan_dan_wisata?.[idx]
                                      .value?.message
                                  }
                                  formGroup={false}
                                  register={register(
                                    `potensi_sarana_dan_transportasi.kesehatan.hiburan_dan_wisata.prasarana_hiburan_dan_wisata.${idx}.value`,
                                    { valueAsNumber: true }
                                  )}
                                />
                              </td>
                              <td style={{ width: 0 }} {...hideElement}>
                                <Button
                                  type="button"
                                  onClick={() =>
                                    saranaHiburanDanWisataArray.remove(idx)
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
                          <td colSpan={14}>
                            <Button
                              onClick={() =>
                                saranaHiburanDanWisataArray.append({
                                  prasarana: "",
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
                  </div>
                </DataPotensiDesaAccordionBody>
              </DataPotensiDesaAccordionItem>
            </DataPotensiDesaAccordion>
          </Tab.Pane>

          <Tab.Pane eventKey="kebersihan">
            <DataPotensiDesaAccordion
              alwaysOpen
              defaultActiveKey={["kebersihan"]}>
              <DataPotensiDesaAccordionItem eventKey={"kebersihan"}>
                <DataPotensiDesaAccordionHeader>
                  <h5 className="fw-bolder mb-0">Kebersihan</h5>
                </DataPotensiDesaAccordionHeader>
                <DataPotensiDesaAccordionBody>
                  <table className="table table-bordered table-sm align-middle">
                    <tbody>
                      <tr>
                        <td>tempat pembuangan sementara</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan
                                ?.tempat_pembuangan_sementara
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan
                                ?.tempat_pembuangan_sementara?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.tempat_pembuangan_sementara`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>tempat pembuangan akhir</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.tempat_pembuangan_akhir
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.tempat_pembuangan_akhir
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.tempat_pembuangan_akhir`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>alat penghancur sampah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kesehatan.kebersihan.alat_penghancur_sampah`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah gerobak sampah</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_gerobak_sampah
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_gerobak_sampah
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.jumlah_gerobak_sampah`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah tong sampah</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_tong_sampah
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_tong_sampah
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.jumlah_tong_sampah`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah truk pengangkut sampah</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan
                                ?.jumlah_truk_pengangkut_sampah
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan
                                ?.jumlah_truk_pengangkut_sampah?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.jumlah_truk_pengangkut_sampah`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah satgas kebersihan</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan
                                ?.jumlah_satgas_kebersihan
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan
                                ?.jumlah_satgas_kebersihan?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.jumlah_satgas_kebersihan`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah anggota satgas</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_anggota_satgas
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_anggota_satgas
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.jumlah_anggota_satgas`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>jumlah pemulung</td>
                        <td>
                          <FormInputControl
                            type="number"
                            className="mb-0"
                            isInvalid={
                              !!(errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_pemulung
                            }
                            message={
                              (errors?.potensi_sarana_dan_transportasi as any)
                                ?.kesehatan?.kebersihan?.jumlah_pemulung
                                ?.message
                            }
                            formGroup={false}
                            register={register(
                              `potensi_sarana_dan_transportasi.kesehatan.kebersihan.jumlah_pemulung`,
                              { valueAsNumber: true }
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>tempat pengelolaan sampah</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kesehatan.kebersihan.tempat_pengelolaan_sampah`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pengelolaan sampah lingkungan</td>
                        <td>
                          <SelectPemerintahSwastaSwadaya
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kesehatan.kebersihan.pengelolaan_sampah_lingkungan`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>pengelola sampah lainnya</td>
                        <td>
                          <SelectAdaAtauTidak
                            control={control}
                            errors={errors}
                            fieldName={`potensi_sarana_dan_transportasi.kebersihan.pengelola_sampah_lainnya`}
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
