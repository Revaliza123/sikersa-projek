/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import SelectStatic from "@app/components/Select/SelectStatic"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import { yearOptions } from "@app/helper/time.helper"
import {
  DataPokokDesaField,
  IDataPokokDesa,
} from "@app/interface/data-pokok-desa.interface"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { postByController } from "@app/services/main.service"
import {
  AccordionBody,
  AccordionBodyFooter,
  AccordionHeader,
  AccordionItem,
} from "@app/styled/accordion.styled"
import { DFlex } from "@app/styled/flex.styled"
import {
  CardBodyFlat,
  CardFooterFlat,
  CardHeaderFlat,
} from "@app/styled/title.styled"
import { BULAN } from "@assets/dummy/form-options.dummy"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { get } from "lodash"
import React, { useState } from "react"
import { Card, Col, Form, ProgressBar, Table } from "react-bootstrap"
import BsAccordion from "react-bootstrap/Accordion"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import styled from "styled-components"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  bulan: Yup.string().required(),
  tahun: Yup.number().required(),
  kategori: Yup.string().required(),

  // informasi_desa: Yup.object().shape({
  //   kode_desa: Yup.string().required(),
  //   nama_desa: Yup.string().required(),
  //   kecamatan: Yup.string().required(),
  //   kabupaten_kota: Yup.string().required(),
  //   provinsi: Yup.string().required(),
  // }),

  // personil_desa: Yup.object().shape({
  //   nama_kepala_desa: Yup.string().required(),
  //   pangkat_kepala_desa: Yup.string().required(),
  //   nip_kepala_desa: Yup.string().required(),
  //   nama_sekretaris_desa: Yup.string().required(),
  //   pangkat_sekretaris_desa: Yup.string().required(),
  //   nip_sekretaris_desa: Yup.string().required(),
  // })
})

type CategoryTypes =
  | "form-category"
  | "informasi-desa"
  | "personil-desa"
  | "data-umum"
  | "keuangan"
  | "kelembagaan"

const ProgressBarForm = styled(ProgressBar)`
  background: var(--black-25);
  border: 1px solid var(--black-150);
  height: 1.25rem;

  .progress-bar {
    border-radius: 3px;
  }
`

export default function DataPokokDesa() {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [setDataSelected] = useState<any>()
  const [stepForm, setStepForm] = useState<number>(1)
  const [activeKey] = useState<any>("0")
  const [category, setCategory] = useState<CategoryTypes>("form-category")
  const source = axios.CancelToken.source()
  const [primaryKey] = useState<string>("_id")
  const [searchParams, setSearchParams] = useSearchParams()
  const [fields] = useState<any>(DataPokokDesaField)
  const [path] = useState<string>(API_PATH().form.administrasi.dataPokokDesa)

  const { workspace } = useSelector((state: any) => state.app)
  /** DATA RESP */
  const [respData, setRespData] = useState<any>([])

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IDataPokokDesa>({
    // resolver: yupResolver(validationSchema),
  })

  const KATEGORI_DAPODES = [
    { value: "informasi-desa", label: "Informasi Desa" },
    { value: "personil-desa", label: "Personil Desa" },
    { value: "data-umum", label: "Data Umum" },
    { value: "keuangan", label: "Keuangan" },
    { value: "kelembagaan", label: "Kelembagaan" },
  ]
  const [months] = useState<any>(BULAN)
  const [years] = useState<any>(yearOptions(2019))

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
    }

    setDataParams(params)
    setTimeout(() => {
      navigate(
        `/${workspace?.alias}/administrasi/data/pokok-desa?month=${data?.bulan}&year=${data?.tahun}`
      )
    }, 1000)
  }

  const handleCancel = () => {
    navigate(`/${workspace?.alias}/administrasi/data/pokok-desa`)
  }

  const onNextForm = (step: number) => {
    setStepForm(step)
  }

  const onSelectCategory = (selected: any) => {
    if (selected) getAllData(selected)
  }

  /** GET DATA */
  const getAllData = async (selected: any) => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      const params = {
        keyword: "DESC",
        orderBy: "created_at",
        page: 1,
        size: 10,
        filter: [
          {
            field: "bulan",
            value: selected?.bulan,
          },
          {
            field: "tahun",
            value: selected?.tahun,
          },
        ],
      }

      const req: any = await postByController(
        path + "/get-all",
        params,
        source.token
      )
      const results = req?.data
      const dataLength = results ? results.length : 0

      if (dataLength > 0) {
        let data = results.map((d: any) => {
          d.id = get(d, primaryKey)
          return d
        })[0]

        setRespData(data)
        searchParams.delete("id")
        searchParams.append("id", data?.id)
        setSearchParams(searchParams)
      } else {
        setRespData([])
      }

      if (selected?.kategori) setCategory(selected?.kategori)
    } catch (err: any) {
      setRespData([])
      if (selected?.kategori) setCategory(selected?.kategori)
    }
  }

  const onSubmitFormError = (data: any) => {
    console.log("error", data)
  }

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={fields}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form
          noValidate
          onSubmit={handleSubmit(onSubmitForm, onSubmitFormError)}>
          {/* === form select kategori === */}
          {category == "form-category" && (
            <div className="mb-3">
              <Card>
                <CardHeaderFlat>Tambah Data</CardHeaderFlat>

                <CardBodyFlat className="text-center">
                  <div className="mb-3">
                    Isi data berikut ini sebelum melanjutkan ke proses
                    selanjutnya
                  </div>

                  <div className="px-md-8 px-2">
                    <Form.Group className="row mb-3" controlId="level">
                      <Form.Label className="col-form-label col-sm-2 text-start">
                        Bulan <RequiredInfo />
                      </Form.Label>
                      <Col sm={10}>
                        <SelectStatic
                          className={"text-start"}
                          control={control}
                          errors={errors}
                          fieldName={"bulan"}
                          options={months}
                          placeholder="Pilih Bulan"></SelectStatic>
                        <Form.Control.Feedback type="invalid">
                          {(errors as any)?.bulan?.message}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3" controlId="level">
                      <Form.Label className="col-form-label col-sm-2 text-start">
                        Tahun <RequiredInfo />
                      </Form.Label>
                      <Col sm={10}>
                        <SelectStatic
                          className={"text-start"}
                          control={control}
                          errors={errors}
                          fieldName={"tahun"}
                          options={years}
                          placeholder="Pilih Tahun"></SelectStatic>
                        <Form.Control.Feedback type="invalid">
                          {(errors as any)?.tahun?.message}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3" controlId="level">
                      <Form.Label className="col-form-label col-sm-2 text-start">
                        Kategori <RequiredInfo />
                      </Form.Label>
                      <Col sm={10}>
                        <SelectStatic
                          className={"text-start"}
                          control={control}
                          errors={errors}
                          fieldName={"kategori"}
                          options={KATEGORI_DAPODES}
                          placeholder="Pilih Kategori"></SelectStatic>
                        <Form.Control.Feedback type="invalid">
                          {(errors as any)?.kategori?.message}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Group>
                  </div>
                </CardBodyFlat>

                <CardFooterFlat className="text-end">
                  <Button
                    type="button"
                    variant="primary btn-submit"
                    isLoading={loading}
                    onClick={() => onSelectCategory(control?._formValues)}>
                    Selanjutnya
                  </Button>
                </CardFooterFlat>
              </Card>
            </div>
          )}

          {/* === form informasi desa === */}
          {category == "informasi-desa" && (
            <div className="mb-3">
              <Card>
                <CardHeaderFlat>Informasi Desa</CardHeaderFlat>

                <CardBodyFlat className="text-center p-0">
                  <Table className="mb-0 mt--1" responsive bordered>
                    <tbody
                      className="text-start"
                      style={{ verticalAlign: "middle" }}>
                      <tr>
                        <td style={{ width: 10 }} className="text-center">
                          1
                        </td>
                        <td colSpan={3}>Kode Pokok Desa</td>
                        <td style={{ width: 306 }}>
                          <FormInputControl
                            type="text"
                            required={true}
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.kode_desa")}
                            isInvalid={
                              errors?.informasi_desa?.kode_desa as
                                | boolean
                                | undefined
                            }
                            message={errors?.informasi_desa?.kode_desa?.message}
                            placeholder=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td colSpan={3}>Nama Desa / Kelurahan</td>
                        <td>
                          <FormInputControl
                            type="text"
                            required={true}
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.nama_desa")}
                            isInvalid={
                              errors?.informasi_desa?.nama_desa as
                                | boolean
                                | undefined
                            }
                            message={errors?.informasi_desa?.nama_desa?.message}
                            placeholder=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={3}>Kecamatan</td>
                        <td>
                          <FormInputControl
                            type="text"
                            required={true}
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.kecamatan")}
                            isInvalid={
                              errors?.informasi_desa?.kecamatan as
                                | boolean
                                | undefined
                            }
                            message={errors?.informasi_desa?.kecamatan?.message}
                            placeholder=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td colSpan={3}>Kabupaten / Kota</td>
                        <td>
                          <FormInputControl
                            type="text"
                            required={true}
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.kabupaten_kota")}
                            isInvalid={
                              errors?.informasi_desa?.kabupaten_kota as
                                | boolean
                                | undefined
                            }
                            message={
                              errors?.informasi_desa?.kabupaten_kota?.message
                            }
                            placeholder=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td colSpan={3}>Provinsi</td>
                        <td>
                          <FormInputControl
                            type="text"
                            required={true}
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.provinsi")}
                            isInvalid={
                              errors?.informasi_desa?.provinsi as
                                | boolean
                                | undefined
                            }
                            message={errors?.informasi_desa?.provinsi?.message}
                            placeholder=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Langtitude</td>
                        <td style={{ width: 306 }}>
                          <FormInputControl
                            type="text"
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.longitude")}
                            isInvalid={
                              errors?.informasi_desa?.longitude as
                                | boolean
                                | undefined
                            }
                            message={errors?.informasi_desa?.longitude?.message}
                            placeholder=""
                          />
                        </td>
                        <td>Latitude</td>
                        <td>
                          <FormInputControl
                            type="text"
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.latitude")}
                            isInvalid={
                              errors?.informasi_desa?.latitude as
                                | boolean
                                | undefined
                            }
                            message={errors?.informasi_desa?.latitude?.message}
                            placeholder=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan={2} style={{ verticalAlign: "top" }}>
                          7
                        </td>
                        <td>Sebelah Utara</td>
                        <td>
                          <FormInputControl
                            type="text"
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.sebelah_utara")}
                            isInvalid={
                              errors?.informasi_desa?.sebelah_utara as
                                | boolean
                                | undefined
                            }
                            message={
                              errors?.informasi_desa?.sebelah_utara?.message
                            }
                            placeholder=""
                          />
                        </td>
                        <td>Sebelah Barat</td>
                        <td>
                          <FormInputControl
                            type="text"
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.sebelah_barat")}
                            isInvalid={
                              errors?.informasi_desa?.sebelah_barat as
                                | boolean
                                | undefined
                            }
                            message={
                              errors?.informasi_desa?.sebelah_barat?.message
                            }
                            placeholder=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sebelah Selatan</td>
                        <td>
                          <FormInputControl
                            type="text"
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register(
                              "informasi_desa.sebelah_selatan"
                            )}
                            isInvalid={
                              errors?.informasi_desa?.sebelah_selatan as
                                | boolean
                                | undefined
                            }
                            message={
                              errors?.informasi_desa?.sebelah_selatan?.message
                            }
                            placeholder=""
                          />
                        </td>
                        <td>Sebelah Timur</td>
                        <td>
                          <FormInputControl
                            type="text"
                            className="mb-0"
                            classNameLabel="d-none"
                            register={register("informasi_desa.sebelah_timur")}
                            isInvalid={
                              errors?.informasi_desa?.sebelah_timur as
                                | boolean
                                | undefined
                            }
                            message={
                              errors?.informasi_desa?.sebelah_timur?.message
                            }
                            placeholder=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBodyFlat>

                <CardFooterFlat className="text-end border-0">
                  <DFlex className="col-50 float-end">
                    <Button
                      onClick={handleCancel}
                      className="me-2"
                      type="button"
                      variant="">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      variant="primary btn-submit"
                      isLoading={loading}>
                      Simpan
                    </Button>
                  </DFlex>
                </CardFooterFlat>
              </Card>
            </div>
          )}

          {category == "personil-desa" && (
            <>
              {/* === form personil desa === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">
                      Personil Desa (Lurah)
                    </AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Nama</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                required={true}
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.nama_kepala_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa?.nama_kepala_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.nama_kepala_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Pangkat / Gol</td>
                            <td>
                              <FormInputControl
                                type="text"
                                required={true}
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pangkat_kepala_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa?.pangkat_kepala_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.pangkat_kepala_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>NIP</td>
                            <td>
                              <FormInputControl
                                type="text"
                                required={true}
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.nip_kepala_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa?.nip_kepala_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.nip_kepala_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Pendidikan Terakhir</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pendidikan_terakhir_kepala_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.pendidikan_terakhir_kepala_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa
                                    ?.pendidikan_terakhir_kepala_desa?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Pelatihan yang pernah diikuti</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pelatihan_kepala_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.pelatihan_kepala_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.pelatihan_kepala_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Jenis Kelamin</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.jenis_kelamin_kepala_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.jenis_kelamin_kepala_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa
                                    ?.jenis_kelamin_kepala_desa?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              {/* === form sekretaris desa === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">
                      Sekretaris Desa
                    </AccordionHeader>
                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Nama</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                required={true}
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.nama_sekretaris_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.nama_sekretaris_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.nama_sekretaris_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Pangkat / Gol</td>
                            <td>
                              <FormInputControl
                                type="text"
                                required={true}
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pangkat_sekretaris_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.pangkat_sekretaris_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.pangkat_sekretaris_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>NIP</td>
                            <td>
                              <FormInputControl
                                type="text"
                                required={true}
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.nip_sekretaris_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa?.nip_sekretaris_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.nip_sekretaris_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Pendidikan Terakhir</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pendidikan_terakhir_sekretaris_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.pendidikan_terakhir_sekretaris_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa
                                    ?.pendidikan_terakhir_sekretaris_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Pelatihan yang pernah diikuti</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pelatihan_sekretaris_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.pelatihan_sekretaris_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa
                                    ?.pelatihan_sekretaris_desa?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Jenis Kelamin</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.jenis_kelamin_sekretaris_desa"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.jenis_kelamin_sekretaris_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa
                                    ?.jenis_kelamin_sekretaris_desa?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              {/* === form ketua BPD === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">Ketua BPD</AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Nama</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.nama_ketua_bpd"
                                )}
                                isInvalid={
                                  errors?.personil_desa?.nama_ketua_bpd as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.nama_ketua_bpd?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Pendidikan Terakhir</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pendidikan_terakhir_ketua_bpd"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.pendidikan_terakhir_ketua_bpd as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa
                                    ?.pendidikan_terakhir_ketua_bpd?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Pelatihan yang pernah diikuti</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.pelatihan_ketua_bpd"
                                )}
                                isInvalid={
                                  errors?.personil_desa?.pelatihan_ketua_bpd as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.pelatihan_ketua_bpd
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Jenis Kelamin</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "personil_desa.jenis_kelamin_ketua_bpd"
                                )}
                                isInvalid={
                                  errors?.personil_desa
                                    ?.jenis_kelamin_ketua_bpd as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.personil_desa?.jenis_kelamin_ketua_bpd
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              <DFlex className="float-end">
                <Button
                  onClick={handleCancel}
                  className="me-2"
                  type="button"
                  variant="">
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="primary btn-submit"
                  isLoading={loading}>
                  Simpan
                </Button>
              </DFlex>
            </>
          )}

          {category == "data-umum" && (
            <>
              {stepForm === 1 && (
                <>
                  <div className="mb-3">
                    <ProgressBarForm
                      className="mb-1"
                      now={20}></ProgressBarForm>
                    <span>Halaman 1 dari ke 5</span>
                  </div>

                  {/* === form data umum === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Data Umum
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>Tipologi Desa / Kelurahan</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.tipologi_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.tipologi_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.tipologi_desa?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Klarifikasi Desa / Kelurahan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.klasifikasi_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.klasifikasi_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.klasifikasi_desa
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Kategori Desa / Kelurahan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.kategori_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.kategori_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.kategori_desa?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                  Komoditas Unggulan Berdasarkan Luas Tanam
                                </td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.komoditas_unggulan_berdasarkan_luas_tanam"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.komoditas_unggulan_berdasarkan_luas_tanam as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.komoditas_unggulan_berdasarkan_luas_tanam
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>
                                  Komoditas Unggulan Berdasarkan Nilai Ekonomi
                                </td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.komoditas_unggulan_berdasarkan_nilai_ekonomi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.komoditas_unggulan_berdasarkan_nilai_ekonomi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.komoditas_unggulan_berdasarkan_nilai_ekonomi
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  {/* === form luas wilayah === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Luas Wilayah
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>Lahan Sawah</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.luas_lahan_sawah"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.luas_lahan_sawah as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_lahan_sawah
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Lahan Ladang</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.luas_lahan_ladang"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.luas_lahan_ladang as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_lahan_ladang
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Lahan Perkebunan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.luas_lahan_perkebunan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.luas_lahan_perkebunan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_lahan_perkebunan
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Lahan Pertenakan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.luas_lahan_peternakan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.luas_lahan_peternakan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_lahan_peternakan
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Hutan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register("data_umum.luas_hutan")}
                                    isInvalid={
                                      errors?.data_umum?.luas_hutan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_hutan?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Waduk / Danau / Situ</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register("data_umum.luas_waduk")}
                                    isInvalid={
                                      errors?.data_umum?.luas_waduk as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_waduk?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Lahan Lainnya</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.luas_lahan_lainnya"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.luas_lahan_lainnya as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_lahan_lainnya
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Jumlah Sertifikat Tanah</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_sertifikat_tanah"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_sertifikat_tanah as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_sertifikat_tanah
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Luas Tanah Memiliki Sertifikat Tanah</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.luas_tanah_memliki_sertifikat_tanah"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.luas_tanah_memliki_sertifikat_tanah as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.luas_tanah_memliki_sertifikat_tanah
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>Luas Tanah Kas Desa</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.luas_tanah_kas_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.luas_tanah_kas_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.luas_tanah_kas_desa
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  {/* === form Orbitasi (Jarak dari Pusat Pemerintahan) === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Orbitasi (Jarak dari Pusat Pemerintahan)
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>Jarak dari pusat pemerintahan kecamatan</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jarak_dari_pusat_pemerintahan_kecamatan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jarak_dari_pusat_pemerintahan_kecamatan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jarak_dari_pusat_pemerintahan_kecamatan
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Jarak dari pusat pemerintahan kota</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jarak_dari_pusat_pemerintahan_kota"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jarak_dari_pusat_pemerintahan_kota as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jarak_dari_pusat_pemerintahan_kota
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Jarak dari kota / ibukota kabupaten</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jarak_dari_kota_kabupaten"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jarak_dari_kota_kabupaten as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jarak_dari_kota_kabupaten?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Jarak dari ibukota provinsi</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jarak_dari_ibukota_provinsi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jarak_dari_ibukota_provinsi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jarak_dari_ibukota_provinsi?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  <DFlex className="col-50 float-end">
                    <Button
                      onClick={handleCancel}
                      className="me-2"
                      type="button"
                      variant="">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      variant="primary btn-submit"
                      isLoading={loading}
                      onClick={() => onNextForm(2)}>
                      Selanjutnya
                    </Button>
                  </DFlex>
                </>
              )}

              {stepForm === 2 && (
                <>
                  <div className="mb-3">
                    <ProgressBarForm
                      className="mb-1"
                      now={40}></ProgressBarForm>
                    <span>Halaman 2 dari ke 5</span>
                  </div>

                  {/* === form Jumlah Kepala Keluarga === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Jumlah Kepala Keluarga
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>Keluarga Pra Sejahtera</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.keluarga_pra_sejahtera"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.keluarga_pra_sejahtera as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.keluarga_pra_sejahtera
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Keluarga Sejahtera I</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.keluarga_sejahtera_I"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.keluarga_sejahtera_I as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.keluarga_sejahtera_I
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Keluarga Sejahtera II</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.keluarga_sejahtera_II"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.keluarga_sejahtera_II as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.keluarga_sejahtera_II
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Keluarga Sejahtera III</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.keluarga_sejahtera_III"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.keluarga_sejahtera_III as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.keluarga_sejahtera_III
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Keluarga Sejahtera III Plus</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.keluarga_sejahtera_III_plus"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.keluarga_sejahtera_III_plus as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.keluarga_sejahtera_III_plus?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  {/* === form Jumlah Penduduk === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Jumlah Penduduk
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>Laki - Laki</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_laki_laki"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_laki_laki as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_laki_laki
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Perempuan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_perempuan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_perempuan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_perempuan
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Usia 0 - 17</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_usia_0_17"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_usia_0_17 as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_usia_0_17
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Usia 18 - 56</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_usia_18_56"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_usia_18_56 as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_usia_18_56
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Usia 56 ke - atas</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_usia_56_ke_atas"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_usia_56_ke_atas as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_usia_56_ke_atas
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  <DFlex className="col-50 float-end">
                    <Button
                      className="me-2"
                      type="button"
                      variant=""
                      onClick={() => onNextForm(1)}>
                      Sebelumnya
                    </Button>
                    <Button
                      type="submit"
                      variant="primary btn-submit"
                      isLoading={loading}
                      onClick={() => onNextForm(3)}>
                      Selanjutnya
                    </Button>
                  </DFlex>
                </>
              )}

              {stepForm === 3 && (
                <>
                  <div className="mb-3">
                    <ProgressBarForm
                      className="mb-1"
                      now={60}></ProgressBarForm>
                    <span>Halaman 3 dari ke 5</span>
                  </div>

                  {/* === form Rasio Pendidikan dan Kesehatan === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Rasio Pendidikan dan Kesehatan
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>TK</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_murid_guru_tk"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.rasio_murid_guru_tk as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.rasio_murid_guru_tk
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>SD</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_murid_guru_sd"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.rasio_murid_guru_sd as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.rasio_murid_guru_sd
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>SMP</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_murid_guru_smp"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_smp as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.rasio_murid_guru_smp
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>SMA / Sederajat</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_murid_guru_sma"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_sma as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.rasio_murid_guru_sma
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Akademi</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_murid_guru_akademi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_akademi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_akademi?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Sarjana</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_murid_guru_sarjana"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_sarjana as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_sarjana?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Pasca Sarjana</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_murid_guru_pasca_sarjana"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_pasca_sarjana as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.rasio_murid_guru_pasca_sarjana
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Dokter Umum</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_penduduk_dokter_umum"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_penduduk_dokter_umum as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.rasio_penduduk_dokter_umum?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Dokter Spesialis</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_penduduk_dokter_spesialis"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_penduduk_dokter_spesialis as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.rasio_penduduk_dokter_spesialis
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>Bidan / Dukun Bayi</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_penduduk_bidan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_penduduk_bidan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.rasio_penduduk_bidan
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>Mantri Kesehatan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_penduduk_mantri"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_penduduk_mantri as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.rasio_penduduk_mantri
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>Perawat</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.rasio_penduduk_perawat"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.rasio_penduduk_perawat as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.rasio_penduduk_perawat
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  {/* === form Tingkat Pendidikan Masyarakat === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Tingkat Pendidikan Masyarakat
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>TK</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_tk"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_lulusan_tk as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_tk
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>SD</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_sd"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_lulusan_sd as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_sd
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>SMP</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_smp"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_lulusan_smp as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_smp
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>SMA / Sederajat</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_sma"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_lulusan_sma as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_sma
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Akademi</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_akademi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_lulusan_akademi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_akademi
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Sarjana S1</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_s1"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_lulusan_s1 as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_s1
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Sarjana S2</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_s2"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_lulusan_s2 as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_s2
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Sarjana S3</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_s3"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_lulusan_s3 as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_lulusan_s3
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Pondok Pesantren</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_pondok_pesantren"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_lulusan_pondok_pesantren as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jumlah_lulusan_pondok_pesantren
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>Pendidikan Keagamaan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_pendidikan_agama"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_lulusan_pendidikan_agama as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jumlah_lulusan_pendidikan_agama
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>Sekolah Luar Biasa</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_lulusan_sekolah_luar_biasa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_lulusan_sekolah_luar_biasa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jumlah_lulusan_sekolah_luar_biasa
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>Kursus Keterampilan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_kursus_keterampilan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_kursus_keterampilan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.jumlah_kursus_keterampilan?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>13</td>
                                <td>Tidak Lulus</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_tidak_lulus"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.jumlah_tidak_lulus as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_tidak_lulus
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td>Tidak Bersekolah</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.jumlah_tidak_bersekolah"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.jumlah_tidak_bersekolah as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.jumlah_tidak_bersekolah
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  <DFlex className="col-50 float-end">
                    <Button
                      className="me-2"
                      type="button"
                      variant=""
                      onClick={() => onNextForm(2)}>
                      Sebelumnya
                    </Button>
                    <Button
                      type="submit"
                      variant="primary btn-submit"
                      isLoading={loading}
                      onClick={() => onNextForm(4)}>
                      Selanjutnya
                    </Button>
                  </DFlex>
                </>
              )}

              {stepForm === 4 && (
                <>
                  <div className="mb-3">
                    <ProgressBarForm
                      className="mb-1"
                      now={80}></ProgressBarForm>
                    <span>Halaman 4 dari ke 5</span>
                  </div>

                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionHeader className="v2">
                          Sarana dan Prasarana
                        </AccordionHeader>

                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  1
                                </td>
                                <td>Puskesmas</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_puskesmas"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_puskesmas as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_puskesmas
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Puskesmas Pembantu</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_puskesmas_pembantu"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_puskesmas_pembantu as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_puskesmas_pembantu?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Poskesdes</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_poskesdes"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_poskesdes as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_poskesdes
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Posyandu dan Polindes</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_posyandu"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_posyandu as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_posyandu
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Perpustakaan Desa</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_perpustakaan_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_perpustakaan_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_perpustakaan_desa?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Gedung Sekolah Paud</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_gedung_sekolah_paud"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_paud as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_paud?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Gedung Sekolah TK</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_gedung_sekolah_tk"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_tk as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_tk?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Gedung Sekolah SD</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_gedung_sekolah_sd"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_sd as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_sd?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Gedung Sekolah SMP</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_gedung_sekolah_smp"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_smp as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_smp?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>Gedung Sekolah SMA</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_gedung_sekolah_sma"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_sma as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_gedung_sekolah_sma?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>Gedung Perguruan Tinggi</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_gedung_perguruan_tinggi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_gedung_perguruan_tinggi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_gedung_perguruan_tinggi
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>Masjid</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_masjid"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_masjid as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_masjid
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>13</td>
                                <td>Mushola</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_mushola"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_mushola as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_mushola
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td>Gereja</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_gereja"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_gereja as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_gereja
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>15</td>
                                <td>Pura</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_pura"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_pura as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_pura?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>16</td>
                                <td>Vihara</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_vihara"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_vihara as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_vihara
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>17</td>
                                <td>Klenteng</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_klenteng"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_klenteng as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_klenteng
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>18</td>
                                <td>Olahraga</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_olahraga"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_olahraga as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_olahraga
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>19</td>
                                <td>Kesenian Budaya</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_kesenian_budaya"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_kesenian_budaya as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_kesenian_budaya?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>20</td>
                                <td>Balai Pertemuan</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_balai_pertemuan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_balai_pertemuan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_balai_pertemuan?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>21</td>
                                <td>Sumur Desa</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_sumur_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_sumur_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_sumur_desa
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>22</td>
                                <td>Pasar Desa</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_pasar_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_pasar_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_pasar_desa
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>23</td>
                                <td>Lainnya</td>
                                <td>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_lainnya"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_lainnya as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_lainnya
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  <DFlex className="col-50 float-end">
                    <Button
                      className="me-2"
                      type="button"
                      variant=""
                      onClick={() => onNextForm(3)}>
                      Sebelumnya
                    </Button>
                    <Button
                      type="submit"
                      variant="primary btn-submit"
                      isLoading={loading}
                      onClick={() => onNextForm(5)}>
                      Selanjutnya
                    </Button>
                  </DFlex>
                </>
              )}

              {stepForm === 5 && (
                <>
                  <div className="mb-3">
                    <ProgressBarForm
                      className="mb-1"
                      now={100}></ProgressBarForm>
                    <span>Halaman 5 dari ke 5</span>
                  </div>

                  {/* === form Sarana dan Prasarana === */}
                  <div className="mb-3">
                    <BsAccordion defaultActiveKey={activeKey}>
                      <AccordionItem eventKey="0">
                        <AccordionBody>
                          <Table className="mb-0 mt--1" responsive bordered>
                            <tbody
                              className="text-start"
                              style={{ verticalAlign: "middle" }}>
                              <tr>
                                <td
                                  style={{ width: 10 }}
                                  className="text-center">
                                  24
                                </td>
                                <td>Jalan Desa (Aspal / Beton)</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_jalan_desa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_jalan_desa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_jalan_desa
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>25</td>
                                <td>Jalan Kabupaten (Aspal / Beton)</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_jalan_kabupaten"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_jalan_kabupaten as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_jalan_kabupaten?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>26</td>
                                <td>Jalan Provinsi (Aspal / Beton)</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_jalan_provinsi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_jalan_provinsi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_jalan_provinsi?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>27</td>
                                <td>Tambatan Perahu</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_tambatan_perahu"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_tambatan_perahu as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_tambatan_perahu?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>28</td>
                                <td>Perahu Motor</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_perahu_motor"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_perahu_motor as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_perahu_motor
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>29</td>
                                <td>Lapangan Terbang</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_lapangan_terbang"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_lapangan_terbang as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_lapangan_terbang?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>30</td>
                                <td>Jembatan Besi</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_jembatan_besi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_jembatan_besi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_jembatan_besi
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>31</td>
                                <td>Hidran Umum</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_hidran_umum"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_hidran_umum as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_hidran_umum
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>32</td>
                                <td>Penampung Air Hujan</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_penampung_air_hujan"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_penampung_air_hujan as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_penampung_air_hujan?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>33</td>
                                <td>PAMSIMAS</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_pamsimas"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_pamsimas as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_pamsimas
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>34</td>
                                <td>Pengolahan Air Bersih</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_pengolahan_air_bersih"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_pengolahan_air_bersih as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_pengolahan_air_bersih
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>35</td>
                                <td>Sumur Galian</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_sumur_gali"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_sumur_gali as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_sumur_gali
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>36</td>
                                <td>Sumur Pompa</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_sumur_pompa"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_sumur_pompa as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_sumur_pompa
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>37</td>
                                <td>Tangki Air Bersih</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_tangki_air"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_tangki_air as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_tangki_air
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>38</td>
                                <td>MCK Umum</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_mck_umum"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_mck_umum as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_mck_umum
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>39</td>
                                <td>Jamban Keluarga</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_jamban_keluarga"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_jamban_keluarga as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_jamban_keluarga?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>40</td>
                                <td>Saluran Drainase</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_saluran_drainase"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_saluran_drainase as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_saluran_drainase?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>41</td>
                                <td>Pintu Air</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_pintu_air"
                                    )}
                                    isInvalid={
                                      errors?.data_umum?.prasarana_pintu_air as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum?.prasarana_pintu_air
                                        ?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>42</td>
                                <td>Saluran Irigasi</td>
                                <td style={{ width: 306 }}>
                                  <FormInputControl
                                    type="text"
                                    className="mb-0"
                                    classNameLabel="d-none"
                                    register={register(
                                      "data_umum.prasarana_saluran_irigasi"
                                    )}
                                    isInvalid={
                                      errors?.data_umum
                                        ?.prasarana_saluran_irigasi as
                                        | boolean
                                        | undefined
                                    }
                                    message={
                                      errors?.data_umum
                                        ?.prasarana_saluran_irigasi?.message
                                    }
                                    placeholder=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          {/* <AccordionBodyFooter className='text-end'>
                            <a className='primary' href=''>
                              Selanjutnya
                            </a>
                          </AccordionBodyFooter> */}
                        </AccordionBody>
                      </AccordionItem>
                    </BsAccordion>
                  </div>

                  <DFlex className="col-50 float-end">
                    <Button
                      className="me-2"
                      type="button"
                      variant=""
                      onClick={() => onNextForm(4)}>
                      Sebelumnya
                    </Button>
                    <Button
                      type="submit"
                      variant="primary btn-submit"
                      isLoading={loading}>
                      Simpan
                    </Button>
                  </DFlex>
                </>
              )}
            </>
          )}

          {category == "keuangan" && (
            <>
              {/* === form Keuangan === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">Keuangan</AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Pendapatan Desa / Kelurahan</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("keuangan.pendapatan_desa")}
                                isInvalid={
                                  errors?.keuangan?.pendapatan_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_desa?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Pendapatan Asli Desa / Kelurahan</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_asli_desa"
                                )}
                                isInvalid={
                                  errors?.keuangan?.pendapatan_asli_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_asli_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Pungutan / Retribusi</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_pungutan"
                                )}
                                isInvalid={
                                  errors?.keuangan?.pendapatan_pungutan as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_pungutan?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Hasil Bumdes</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_hasil_usaha"
                                )}
                                isInvalid={
                                  errors?.keuangan?.pendapatan_hasil_usaha as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_hasil_usaha
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Hibah / Swadaya</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("keuangan.pendapatan_hibah")}
                                isInvalid={
                                  errors?.keuangan?.pendapatan_hibah as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_hibah?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Pendapatan Lainnya</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_lainnya"
                                )}
                                isInvalid={
                                  errors?.keuangan?.pendapatan_lainnya as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_lainnya?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Bantuan yang Diterima Desa / Kelurahan</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_bantuan_yang_diterima"
                                )}
                                isInvalid={
                                  errors?.keuangan
                                    ?.pendapatan_bantuan_yang_diterima as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan
                                    ?.pendapatan_bantuan_yang_diterima?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Pemerintah</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_bantuan_pemerintah"
                                )}
                                isInvalid={
                                  errors?.keuangan
                                    ?.pendapatan_bantuan_pemerintah as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan
                                    ?.pendapatan_bantuan_pemerintah?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Provinsi</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_bantuan_provinsi"
                                )}
                                isInvalid={
                                  errors?.keuangan
                                    ?.pendapatan_bantuan_provinsi as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_bantuan_provinsi
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Kabupaten / Kota</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_bantuan_kabupaten"
                                )}
                                isInvalid={
                                  errors?.keuangan
                                    ?.pendapatan_bantuan_kabupaten as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_bantuan_kabupaten
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>Bantuan Lain Tidak Mengikat</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.pendapatan_bantuan_lainnya"
                                )}
                                isInvalid={
                                  errors?.keuangan
                                    ?.pendapatan_bantuan_lainnya as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.pendapatan_bantuan_lainnya
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>SILPA / SIKPA</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("keuangan.silpa_sikpa")}
                                isInvalid={
                                  errors?.keuangan?.silpa_sikpa as
                                    | boolean
                                    | undefined
                                }
                                message={errors?.keuangan?.silpa_sikpa?.message}
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>Dana Cadangan</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("keuangan.dana_cadangan")}
                                isInvalid={
                                  errors?.keuangan?.dana_cadangan as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.dana_cadangan?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>Belanja Desa / Kelurahan</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("keuangan.belanja_desa")}
                                isInvalid={
                                  errors?.keuangan?.belanja_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.belanja_desa?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>Belanja Rutin</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.belanja_rutin_desa"
                                )}
                                isInvalid={
                                  errors?.keuangan?.belanja_rutin_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.belanja_rutin_desa?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>Belanja Tidak Rutin</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "keuangan.belanja_tidak_rutin_desa"
                                )}
                                isInvalid={
                                  errors?.keuangan?.belanja_tidak_rutin_desa as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.keuangan?.belanja_tidak_rutin_desa
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      <AccordionBodyFooter>
                        <DFlex className="col-50 justify-content-end">
                          <Button
                            onClick={handleCancel}
                            className="me-2"
                            type="button"
                            variant="">
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            variant="primary btn-submit"
                            isLoading={loading}>
                            Simpan
                          </Button>
                        </DFlex>
                      </AccordionBodyFooter>
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>
            </>
          )}

          {category == "kelembagaan" && (
            <>
              {/* === form LPM === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">
                      LPM (Lembaga Pemberdayaan Masyarakat)
                    </AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Jumlah Pengurus</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_pengurus_lpm"
                                )}
                                isInvalid={
                                  errors?.kelembagaan?.jumlah_pengurus_lpm as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_pengurus_lpm
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jumlah Anggota</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_anggota_lpm"
                                )}
                                isInvalid={
                                  errors?.kelembagaan?.jumlah_anggota_lpm as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_anggota_lpm
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Jumlah Kegiatan Per Bulan</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_kegiatan_per_bulan_lpm"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_kegiatan_per_bulan_lpm as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_kegiatan_per_bulan_lpm?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Jumlah Dana yang Dikelola</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_dana_yang_dikelola_lpm"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_dana_yang_dikelola_lpm as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_dana_yang_dikelola_lpm?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              {/* === form Lembaga Adat === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">
                      Lembaga Adat
                    </AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Pemangku Adat</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("kelembagaan.pemangku_adat")}
                                isInvalid={
                                  errors?.kelembagaan?.pemangku_adat as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.pemangku_adat?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Kepengurusan Adat</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.kepengurusan_adat"
                                )}
                                isInvalid={
                                  errors?.kelembagaan?.kepengurusan_adat as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.kepengurusan_adat
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Simbol Adat</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("kelembagaan.simbol_adat")}
                                isInvalid={
                                  errors?.kelembagaan?.simbol_adat as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.simbol_adat?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Kegiatan Adat</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("kelembagaan.kegiatan_adat")}
                                isInvalid={
                                  errors?.kelembagaan?.kegiatan_adat as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.kegiatan_adat?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              {/* === form TP PKK === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">TP PKK</AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Jumlah Pengurus</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_pengurus_pkk"
                                )}
                                isInvalid={
                                  errors?.kelembagaan?.jumlah_pengurus_pkk as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_pengurus_pkk
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jumlah Anggota</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_anggota_pkk"
                                )}
                                isInvalid={
                                  errors?.kelembagaan?.jumlah_anggota_pkk as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_anggota_pkk
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Jumlah Kegiatan Per Bulan</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_kegiatan_per_bulan_pkk"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_kegiatan_per_bulan_pkk as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_kegiatan_per_bulan_pkk?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Jumlah Buku Administrasi yang Dikelola</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_buku_administrasi_yang_dikelola_pkk"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_buku_administrasi_yang_dikelola_pkk as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_buku_administrasi_yang_dikelola_pkk
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Jumlah Dana yang Dikelola</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_dana_yang_dikelola_pkk"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_dana_yang_dikelola_pkk as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_dana_yang_dikelola_pkk?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              {/* === form BUMDes === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">BUMDes</AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Jumlah BUMDes</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("kelembagaan.jumlah_bumdes")}
                                isInvalid={
                                  errors?.kelembagaan?.jumlah_bumdes as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_bumdes?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jumlah Modal Dasar BUMDes</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_modal_besar_bumdes"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_modal_besar_bumdes as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_modal_besar_bumdes
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Jumlah Keuangan yang Dikelola BUMDes</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_keuangan_yang_dikelola_bumdes"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_keuangan_yang_dikelola_bumdes as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_keuangan_yang_dikelola_bumdes
                                    ?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              {/* === form Karang Taruna === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">
                      Karang Taruna
                    </AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Jenis Kegiatan</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jenis_kegiatan_karangtaruna"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jenis_kegiatan_karangtaruna as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jenis_kegiatan_karangtaruna?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jumlah Pengurus</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_pengurus_karangtaruna"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_pengurus_karangtaruna as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_pengurus_karangtaruna?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Jumlah Anggota</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_anggota_karangtaruna"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_anggota_karangtaruna as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_anggota_karangtaruna?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              {/* === form RT / RW === */}
              <div className="mb-3">
                <BsAccordion defaultActiveKey={activeKey}>
                  <AccordionItem eventKey="0">
                    <AccordionHeader className="v2">RT / RW</AccordionHeader>

                    <AccordionBody>
                      <Table className="mb-0 mt--1" responsive bordered>
                        <tbody
                          className="text-start"
                          style={{ verticalAlign: "middle" }}>
                          <tr>
                            <td style={{ width: 10 }} className="text-center">
                              1
                            </td>
                            <td>Jumlah RW</td>
                            <td style={{ width: 306 }}>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("kelembagaan.jumlah_rw")}
                                isInvalid={
                                  errors?.kelembagaan?.jumlah_rw as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_rw?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jumlah RT</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register("kelembagaan.jumlah_rt")}
                                isInvalid={
                                  errors?.kelembagaan?.jumlah_rt as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan?.jumlah_rt?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              Jumlah Bantuan yang Diterima RW Dalam Sebulan
                            </td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_bantuan_yang_diterima_rw"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_bantuan_yang_diterima_rw as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_bantuan_yang_diterima_rw?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              Jumlah Bantuan yang Diterima RT Dalam Sebulan
                            </td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.jumlah_bantuan_yang_diterima_rt"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.jumlah_bantuan_yang_diterima_rt as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.jumlah_bantuan_yang_diterima_rt?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Lembaga Kemasyarakatan Lainnya</td>
                            <td>
                              <FormInputControl
                                type="text"
                                className="mb-0"
                                classNameLabel="d-none"
                                register={register(
                                  "kelembagaan.lembaga_kemasyarakatan_lainnya"
                                )}
                                isInvalid={
                                  errors?.kelembagaan
                                    ?.lembaga_kemasyarakatan_lainnya as
                                    | boolean
                                    | undefined
                                }
                                message={
                                  errors?.kelembagaan
                                    ?.lembaga_kemasyarakatan_lainnya?.message
                                }
                                placeholder=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <AccordionBodyFooter className='text-end'>
                        <a className='primary' href=''>
                          Selanjutnya
                        </a>
                      </AccordionBodyFooter> */}
                    </AccordionBody>
                  </AccordionItem>
                </BsAccordion>
              </div>

              <DFlex className="col-50 float-end">
                <Button
                  onClick={handleCancel}
                  className="me-2"
                  type="button"
                  variant="">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary btn-submit"
                  isLoading={loading}>
                  Simpan
                </Button>
              </DFlex>
            </>
          )}
        </Form>
      </FormData>
    </>
  )
}
