/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import {
  DFlex,
  DFlexJustifyBetween,
  DFlexJustifyEnd,
} from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import {
  Accordion,
  Col,
  Form,
  InputGroup,
  Modal,
  Nav,
  Row,
  Tab,
  useAccordionButton,
} from "react-bootstrap"
import { useFieldArray, useForm } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import { TabLink } from "@app/styled/tab.styled"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import { IFormDataContent } from "@app/interface/main"
import { API_PATH } from "@app/services/_path.service"
import {
  BukuLetterCTanahField,
  IBukuLetterCTanah,
} from "@app/interface/administrasi/buku-letter-c-tanah.interface"
import styled from "styled-components"
import TrashIcon from "@app/components/Icons/TrashIcon"
import ChevronRightIcon from "@app/components/Icons/ChevronRightIcon"
import { useSearchParams } from "react-router-dom"
import { FormInputNIK } from "@app/components/Input/FormInputNIK"
import { get } from "lodash"

const validationSchema = Yup.object().shape({
  pemilik: Yup.object().shape({
    nik_wajib_iuran: Yup.string().required(),
    nama_wajib_iuran: Yup.string().required(),
    tempat_tinggal: Yup.string(),
    no_buku: Yup.string().required(),
  }),
  sawah: Yup.array().of(
    Yup.object().shape({
      no_bagian_persil: Yup.string().required(),
      kelas_desa: Yup.string().required(),
      luas_milik_ha: Yup.number().required(),
      luas_milik_da: Yup.number().required(),
      iuran_r: Yup.number().required(),
      iuran_s: Yup.number().required(),
      tanggal_perubahan: Yup.string(),
      sebab_perubahan: Yup.string(),
    })
  ),
  tanah_kering: Yup.array().of(
    Yup.object().shape({
      no_bagian_persil: Yup.string().required(),
      kelas_desa: Yup.string().required(),
      luas_milik_ha: Yup.number().required(),
      luas_milik_da: Yup.number().required(),
      iuran_r: Yup.number().required(),
      iuran_s: Yup.number().required(),
      tanggal_perubahan: Yup.string(),
      sebab_perubahan: Yup.string(),
    })
  ),
})

const multiInitialField: any = {
  // Sawah & Tanah Kering
  no_bagian_persil: "",
  kelas_desa: "",
  luas_milik_ha: 0,
  luas_milik_da: 0,
  iuran_r: 0,
  iuran_s: 0,
  tanggal_perubahan: "",
  sebab_perubahan: "",
}

const BkLetterCTanahForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()
  const [tabActive, setTabActive] = useState<string>("formPemilik")
  const [searchParams, setSearchParams] = useSearchParams()
  const [path] = useState<string>(API_PATH().form.administrasi.bukuLetterCTanah)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    watch,
    formState: { errors },
    getValues,
    clearErrors,
  } = useForm<IBukuLetterCTanah>({
    // resolver: yupResolver(validationSchema),
    mode: "onChange",
  })

  const {
    fields: fieldsSawah,
    append: appendSawah,
    remove: removeSawah,
  } = useFieldArray({
    name: "sawah",
    control,
  })

  const {
    fields: fieldsTanahKering,
    append: appendTanahKering,
    remove: removeTanahKering,
  } = useFieldArray({
    name: "tanah_kering",
    control,
  })

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
    }

    setDataParams(params)
  }

  const onNavTab = (selected: string) => {
    setTabActive(selected)
  }

  const handleAddMulti = (type: "tanah_kering" | "sawah") => {
    if (type === "tanah_kering") {
      appendTanahKering(multiInitialField)
    } else {
      appendSawah(multiInitialField)
    }
  }

  const handleClickRemove = (type: "tanah_kering" | "sawah", index: number) => {
    if (type === "tanah_kering") {
      removeTanahKering(index)
    } else {
      removeSawah(index)
    }
  }

  const handleClickHide = (e: any) => {
    if (onCancel) {
      onCancel(e)
    }
  }

  const handleCheckNik = (e: any) => {
    ;[
      ["pemilik.nama_wajib_iuran", "umum.nama_lengkap"],
      ["pemilik.tempat_tinggal", [`umum.alamat_rumah`, `umum.rt`, `umum.rw`]],
    ].forEach((c: any) => {
      if (Object.keys(getValues()).includes(c[0])) {
        setValue(c[0], get(e, c[1]))
      }
    })
  }

  useEffect(() => {
    const id = searchParams.get("id")
    if (!id) {
      setValue("sawah", [BukuLetterCTanahField.sawah[0]])
      setValue("tanah_kering", [BukuLetterCTanahField.tanah_kering[0]])
    }
  }, [])

  return (
    <>
      <Tab.Container defaultActiveKey={tabActive}>
        <Nav
          className="px-3 mt-3"
          activeKey={tabActive}
          onSelect={(selectedKey) => onNavTab(selectedKey as string)}>
          <Nav.Item>
            <TabLink eventKey="formPemilik">Pemilik</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="formTanahSawah">Tanah Sawah</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="formTanahKering">Tanah Kering</TabLink>
          </Nav.Item>
        </Nav>

        <FormData
          setError={setError}
          setValue={setValue}
          dataParams={dataParams}
          fields={BukuLetterCTanahField}
          path={path}
          // customLabel='state'
          onLoading={setLoading}
          onGetDataResult={setDataSelected}>
          <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey="formPemilik">
                  <Row>
                    <Col sm={12}>
                      <FormInputNIK
                        labelName={"NIK"}
                        required={false}
                        register={register("pemilik.nik_wajib_iuran")}
                        isInvalid={!!errors?.pemilik?.nik_wajib_iuran}
                        message={errors?.pemilik?.nik_wajib_iuran?.message}
                        placeholder={"Masukkan NIK"}
                        fieldName={"pemilik.nik_wajib_iuran"}
                        control={control}
                        setError={setError}
                        clearErrors={clearErrors}
                        onCheckNik={(e: any) => handleCheckNik(e)}
                        path={`${API_PATH().form.administrasi.bukuIndukPenduduk}/get-by-nik`}
                      />
                    </Col>
                    <Col sm={12}>
                      <FormInputControl
                        labelName="Nama Wajib Iuran"
                        required={true}
                        register={register("pemilik.nama_wajib_iuran")}
                        isInvalid={!!errors?.pemilik?.nama_wajib_iuran}
                        message={errors?.pemilik?.nama_wajib_iuran?.message}
                        placeholder="Input Nama Wajib Iuran"
                        // maxlength={16}
                      />
                    </Col>
                    <Col sm={12}>
                      <FormInputControl
                        labelName="Tempat Tinggal"
                        required={false}
                        register={register("pemilik.tempat_tinggal")}
                        isInvalid={!!errors?.pemilik?.tempat_tinggal}
                        message={errors?.pemilik?.tempat_tinggal?.message}
                        placeholder="Input Tempat Tinggal"
                        // maxlength={16}
                      />
                    </Col>
                    <Col sm={12}>
                      <FormInputControl
                        labelName="No. Buku"
                        required={true}
                        register={register("pemilik.no_buku")}
                        isInvalid={!!errors?.pemilik?.no_buku}
                        message={errors?.pemilik?.no_buku?.message}
                        placeholder="Input No. Buku"
                        // maxlength={16}
                      />
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="formTanahSawah">
                  {fieldsSawah?.map((item: any, index: number) => (
                    <CustomAccordion defaultActiveKey="0" key={index}>
                      <Accordion.Item eventKey="0">
                        <CustomAccordionHeader>
                          <DFlexJustifyBetween className="w-100">
                            <CustomAccordionToggle eventKey="0">
                              <h6 className="m-0">
                                Tanah Sawah{" "}
                                <span className="text-primary">
                                  {index + 1}
                                </span>
                              </h6>
                            </CustomAccordionToggle>
                            <DFlex>
                              <span
                                className="me-2 text-danger cursor-pointer"
                                onClick={() =>
                                  handleClickRemove("sawah", index)
                                }>
                                <TrashIcon />
                              </span>
                              <span className="icon">
                                <ChevronRightIcon width={24} height={24} />
                              </span>
                            </DFlex>
                          </DFlexJustifyBetween>
                        </CustomAccordionHeader>
                        <Accordion.Collapse eventKey="0">
                          <Row>
                            <Col sm={6}>
                              <FormInputControl
                                labelName="No. Persil dan Huruf Bagian Persil"
                                required={true}
                                register={register(
                                  `sawah.${index}.no_bagian_persil`
                                )}
                                isInvalid={
                                  !!errors?.sawah?.[index]?.no_bagian_persil
                                }
                                message={
                                  errors?.sawah?.[index]?.no_bagian_persil
                                    ?.message
                                }
                                placeholder="Input No Persil"
                              />
                            </Col>
                            <Col sm={6}>
                              <FormInputControl
                                labelName="Kelas Desa"
                                required={true}
                                register={register(`sawah.${index}.kelas_desa`)}
                                isInvalid={!!errors?.sawah?.[index]?.kelas_desa}
                                message={
                                  errors?.sawah?.[index]?.kelas_desa?.message
                                }
                                placeholder="Input Kelas Desa"
                              />
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  Luas Milik <RequiredInfo />
                                </Form.Label>
                                <InputGroup>
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `sawah.${index}.luas_milik_ha`
                                    )}
                                    isInvalid={
                                      !!errors?.sawah?.[index]?.luas_milik_ha
                                    }
                                    message={
                                      errors?.sawah?.[index]?.luas_milik_ha
                                        ?.message
                                    }
                                    placeholder="Input Luas Milik"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>
                                    ha
                                  </CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <InputGroup className="mt-3">
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `sawah.${index}.luas_milik_da`
                                    )}
                                    isInvalid={
                                      !!errors?.sawah?.[index]?.luas_milik_da
                                    }
                                    message={
                                      errors?.sawah?.[index]?.luas_milik_da
                                        ?.message
                                    }
                                    placeholder="Input Luas Milik"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>
                                    da
                                  </CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  Iuran Pajak <RequiredInfo />
                                </Form.Label>
                                <InputGroup>
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `sawah.${index}.iuran_r`
                                    )}
                                    isInvalid={
                                      !!errors?.sawah?.[index]?.iuran_r
                                    }
                                    message={
                                      errors?.sawah?.[index]?.iuran_r?.message
                                    }
                                    placeholder="Input Iuran Pajak"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>
                                    Ra
                                  </CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <InputGroup className="mt-3">
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `sawah.${index}.iuran_s`
                                    )}
                                    isInvalid={
                                      !!errors?.sawah?.[index]?.iuran_s
                                    }
                                    message={
                                      errors?.sawah?.[index]?.iuran_s?.message
                                    }
                                    placeholder="Input Iuran Pajak"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>S</CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={12}>
                              <FormInputControl
                                labelName="Tanggal Perubahan"
                                required={false}
                                register={register(
                                  `sawah.${index}.tanggal_perubahan`
                                )}
                                isInvalid={
                                  !!errors?.sawah?.[index]?.tanggal_perubahan
                                }
                                message={
                                  errors?.sawah?.[index]?.tanggal_perubahan
                                    ?.message
                                }
                                placeholder="Input Tanggal Perubahan"
                                type="date"
                              />
                            </Col>
                            <Col sm={12}>
                              <FormInputControl
                                labelName="Sebab Perubahan"
                                required={false}
                                register={register(
                                  `sawah.${index}.sebab_perubahan`
                                )}
                                isInvalid={
                                  !!errors?.sawah?.[index]?.sebab_perubahan
                                }
                                message={
                                  errors?.sawah?.[index]?.sebab_perubahan
                                    ?.message
                                }
                                placeholder="Input Sebab Perubahan"
                                as={"textarea"}
                                rows={5}
                              />
                            </Col>
                          </Row>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </CustomAccordion>
                  ))}
                  <DFlexJustifyEnd
                    onClick={() => handleAddMulti("sawah")}
                    className="text-primary cursor-pointer">
                    + Tambah Tanah Sawah
                  </DFlexJustifyEnd>
                </Tab.Pane>
                <Tab.Pane eventKey="formTanahKering">
                  {fieldsTanahKering?.map((item: any, index: number) => (
                    <CustomAccordion defaultActiveKey="0" key={index}>
                      <Accordion.Item eventKey="0">
                        <CustomAccordionHeader>
                          <DFlexJustifyBetween className="w-100">
                            <CustomAccordionToggle eventKey="0">
                              <h6 className="m-0">
                                Tanah Kering{" "}
                                <span className="text-primary">
                                  {index + 1}
                                </span>
                              </h6>
                            </CustomAccordionToggle>
                            <DFlex>
                              <span
                                className="me-2 text-danger cursor-pointer"
                                onClick={() =>
                                  handleClickRemove("tanah_kering", index)
                                }>
                                <TrashIcon />
                              </span>
                              <span className="icon">
                                <ChevronRightIcon width={24} height={24} />
                              </span>
                            </DFlex>
                          </DFlexJustifyBetween>
                        </CustomAccordionHeader>
                        <Accordion.Collapse eventKey="0">
                          <Row>
                            <Col sm={6}>
                              <FormInputControl
                                labelName="No. Persil dan Huruf Bagian Persil"
                                required={true}
                                register={register(
                                  `tanah_kering.${index}.no_bagian_persil`
                                )}
                                isInvalid={
                                  !!errors?.tanah_kering?.[index]
                                    ?.no_bagian_persil
                                }
                                message={
                                  errors?.tanah_kering?.[index]
                                    ?.no_bagian_persil?.message
                                }
                                placeholder="Input No Persil"
                              />
                            </Col>
                            <Col sm={6}>
                              <FormInputControl
                                labelName="Kelas Desa"
                                required={true}
                                register={register(
                                  `tanah_kering.${index}.kelas_desa`
                                )}
                                isInvalid={
                                  !!errors?.tanah_kering?.[index]?.kelas_desa
                                }
                                message={
                                  errors?.tanah_kering?.[index]?.kelas_desa
                                    ?.message
                                }
                                placeholder="Input Kelas Desa"
                              />
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  Luas Milik <RequiredInfo />
                                </Form.Label>
                                <InputGroup>
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `tanah_kering.${index}.luas_milik_ha`
                                    )}
                                    isInvalid={
                                      !!errors?.tanah_kering?.[index]
                                        ?.luas_milik_ha
                                    }
                                    message={
                                      errors?.tanah_kering?.[index]
                                        ?.luas_milik_ha?.message
                                    }
                                    placeholder="Input Luas Milik"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>
                                    ha
                                  </CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <InputGroup className="mt-3">
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `tanah_kering.${index}.luas_milik_da`
                                    )}
                                    isInvalid={
                                      !!errors?.tanah_kering?.[index]
                                        ?.luas_milik_da
                                    }
                                    message={
                                      errors?.tanah_kering?.[index]
                                        ?.luas_milik_da?.message
                                    }
                                    placeholder="Input Luas Milik"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>
                                    da
                                  </CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  Iuran Pajak <RequiredInfo />
                                </Form.Label>
                                <InputGroup>
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `tanah_kering.${index}.iuran_r`
                                    )}
                                    isInvalid={
                                      !!errors?.tanah_kering?.[index]?.iuran_r
                                    }
                                    message={
                                      errors?.tanah_kering?.[index]?.iuran_r
                                        ?.message
                                    }
                                    placeholder="Input Iuran Pajak"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>
                                    Ra
                                  </CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group className="mb-3">
                                <InputGroup className="mt-3">
                                  <FormInputControl
                                    required={true}
                                    register={register(
                                      `tanah_kering.${index}.iuran_s`
                                    )}
                                    isInvalid={
                                      !!errors?.tanah_kering?.[index]?.iuran_s
                                    }
                                    message={
                                      errors?.tanah_kering?.[index]?.iuran_s
                                        ?.message
                                    }
                                    placeholder="Input Iuran Pajak"
                                    formGroup={false}
                                    className="border-end-0 rounded-0 rounded-start"
                                  />
                                  <CustomInputGroupText>S</CustomInputGroupText>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={12}>
                              <FormInputControl
                                labelName="Tanggal Perubahan"
                                required={false}
                                register={register(
                                  `tanah_kering.${index}.tanggal_perubahan`
                                )}
                                isInvalid={
                                  !!errors?.tanah_kering?.[index]
                                    ?.tanggal_perubahan
                                }
                                message={
                                  errors?.tanah_kering?.[index]
                                    ?.tanggal_perubahan?.message
                                }
                                placeholder="Input Tanggal Perubahan"
                                type="date"
                              />
                            </Col>
                            <Col sm={12}>
                              <FormInputControl
                                labelName="Sebab Perubahan"
                                required={false}
                                register={register(
                                  `tanah_kering.${index}.sebab_perubahan`
                                )}
                                isInvalid={
                                  !!errors?.tanah_kering?.[index]
                                    ?.sebab_perubahan
                                }
                                message={
                                  errors?.tanah_kering?.[index]?.sebab_perubahan
                                    ?.message
                                }
                                placeholder="Input Sebab Perubahan"
                                as={"textarea"}
                                rows={5}
                              />
                            </Col>
                          </Row>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </CustomAccordion>
                  ))}
                  <DFlexJustifyEnd
                    onClick={() => handleAddMulti("tanah_kering")}
                    className="text-primary cursor-pointer">
                    + Tambah Tanah Kering
                  </DFlexJustifyEnd>
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>

            <Modal.Footer>
              <DFlex className="col-50">
                <ButtonCancel onClick={handleClickHide} />
                <Button
                  type="submit"
                  variant="primary btn-submit"
                  isLoading={loading}>
                  {dataSelected?.id ? "Simpan Perubahan" : "Simpan"}
                </Button>
              </DFlex>
            </Modal.Footer>
          </Form>
        </FormData>
      </Tab.Container>
    </>
  )
}

export default BkLetterCTanahForm

const CustomAccordionToggle = ({ children, eventKey, callback }: any) => {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  )

  return (
    <div onClick={decoratedOnClick} className="w-100 cursor-pointer py-2">
      {children}
    </div>
  )
}

const CustomInputGroupText = styled(InputGroup.Text)`
  border-color: var(--black-75) !important;
  border-radius: 0 0.25rem 0.25rem 0 !important;
  border-left: 0 !important;
  background-color: transparent !important;
`

const CustomAccordion = styled(Accordion)`
  margin-bottom: 2rem;

  .icon {
    transform: rotate(90deg);
  }

  .accordion-item {
    border-radius: 0.5rem !important;
    overflow: hidden;
    border: 2px solid var(--black-100) !important;
    &:hover {
      color: var(--black-800) !important;
    }
  }

  .accordion-collapse {
    border-radius: 0 0 0.5rem 0.5rem !important;
    padding: 1rem;
    padding-bottom: 0;
    border-top: 2px solid var(--black-100) !important;
  }
`

const CustomAccordionHeader = styled.div`
  overflow: hidden;
  background-color: var(--black-25) !important;
  padding: 0 1rem;
`
