import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import {
  BukuAgendaField,
  IBukuAgenda,
} from "@app/interface/administrasi/buku-agenda.interface"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import { IFormDataContent } from "@app/interface/main"
import { API_PATH } from "@app/services/_path.service"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import { omit } from "lodash"

const BkAgendaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const validationSchema = Yup.object().shape({
    kode_persuratan: Yup.string().required(),
    tanggal_terima_kirim_surat: Yup.string().required(),
    jenis_surat: Yup.string().required(),
    /** SURAT MASUK */
    nomor_surat_masuk: Yup.string().when('jenis_surat', {
      is: 'Surat Masuk',
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    tanggal_surat_masuk: Yup.string().when('jenis_surat', {
      is: 'Surat Masuk',
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    pengirim: Yup.string().when('jenis_surat', {
      is: 'Surat Masuk',
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    /** SURAT KELUAR */
    nomor_surat_keluar: Yup.string().when('jenis_surat', {
      is: 'Surat Keluar',
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.nullable().notRequired(),
    }),
    tanggal_surat_keluar: Yup.string().when('jenis_surat', {
      is: 'Surat Keluar',
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    ditujukan_kepada: Yup.string().when('jenis_surat', {
      is: 'Surat Keluar',
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.nullable().notRequired(),
    }),
    isi_singkat_surat: Yup.string().required(),
    upload_lampiran_surat: Yup.string(),
  });

  const [fields] = useState<any>(BukuAgendaField)
  const [path] = useState<string>(API_PATH().form.administrasi.bukuAgenda)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuAgenda>({
    // resolver: yupResolver(validationSchema),
  })

  const watchJenisSurat = useWatch({ control, name: "jenis_surat" })

  const onSubmitForm = (data: any) => {
    let params = {
      ...data,
    }

    if (params?.jenis_surat == "Surat Masuk") {
      params = omit(params, [
        "nomor_surat_keluar",
        "tanggal_surat_keluar",
        "ditujukan_kepada",
      ])
    } else {
      params = omit(params, [
        "nomor_surat_masuk",
        "tanggal_surat_masuk",
        "pengirim",
      ])
    }

    setDataParams(params)
  }

  const handleClickHide = (e: any) => {
    if (onCancel) {
      onCancel(e)
    }
  }

  console.log(errors)

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={fields}
        path={path}
        // customLabel='state'
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Jenis Peraturan <RequiredInfo />
                  </Form.Label>
                  <SelectAsyncDynamic
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`kode_persuratan`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "kode_persuratan",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Terima/Kirim Surat"
                  type="date"
                  required={true}
                  register={register("tanggal_terima_kirim_surat")}
                  isInvalid={!!errors?.tanggal_terima_kirim_surat}
                  message={errors?.tanggal_terima_kirim_surat?.message}
                  placeholder="Masukkan tanggal terima/kirim surat"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Jenis Surat <RequiredInfo />
                  </Form.Label>
                  <SelectAsyncDynamic
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`jenis_surat`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "jenis_surat",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            {watchJenisSurat == "Surat Masuk" && (
              <>
                <Row>
                  <Col sm>
                    <FormInputControl
                      labelName="Nomor surat masuk"
                      required={true}
                      register={register("nomor_surat_masuk")}
                      isInvalid={!!errors?.nomor_surat_masuk}
                      message={errors?.nomor_surat_masuk?.message}
                      placeholder="Masukkan nomor surat masuk"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <FormInputControl
                      labelName="Tanggal surat masuk"
                      type="date"
                      required={true}
                      register={register("tanggal_surat_masuk")}
                      isInvalid={!!errors?.tanggal_surat_masuk}
                      message={errors?.tanggal_surat_masuk?.message}
                      placeholder="Masukkan tanggal surat masuk"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <FormInputControl
                      labelName="Pengirim"
                      required={true}
                      register={register("pengirim")}
                      isInvalid={!!errors?.pengirim}
                      message={errors?.pengirim?.message}
                      placeholder="Masukkan pengirim"
                    />
                  </Col>
                </Row>
              </>
            )}

            {watchJenisSurat == "Surat Keluar" && (
              <>
                <Row>
                  <Col sm>
                    <FormInputControl
                      labelName="Nomor surat keluar"
                      required={true}
                      register={register("nomor_surat_keluar")}
                      isInvalid={!!errors?.nomor_surat_keluar}
                      message={errors?.nomor_surat_keluar?.message}
                      placeholder="Masukkan nomor surat keluar"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <FormInputControl
                      labelName="Tanggal surat keluar"
                      type="date"
                      required={true}
                      register={register("tanggal_surat_keluar")}
                      isInvalid={!!errors?.tanggal_surat_keluar}
                      message={errors?.tanggal_surat_keluar?.message}
                      placeholder="Masukkan tanggal surat keluar"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <FormInputControl
                      labelName="Ditujukan kepada"
                      required={true}
                      register={register("ditujukan_kepada")}
                      isInvalid={!!errors?.ditujukan_kepada}
                      message={errors?.ditujukan_kepada?.message}
                      placeholder="Masukkan ditujukan kepada"
                    />
                  </Col>
                </Row>
              </>
            )}

            <FormInputControl
              labelName="Isi Singkat"
              as={"textarea"}
              rows={3}
              required={true}
              register={register("isi_singkat_surat")}
              isInvalid={!!errors?.isi_singkat_surat}
              message={errors?.isi_singkat_surat?.message}
              placeholder="Masukkan isi singkat"
            />
            <Form.Group className="position-relative mb-3">
              <Form.Label>Upload Lampiran Surat</Form.Label>
              <InputFileUpload
                setValue={setValue}
                field="upload_lampiran_surat"
                message={errors?.upload_lampiran_surat?.message}
                isInvalid={
                  !!errors?.upload_lampiran_surat?.message
                }></InputFileUpload>
            </Form.Group>
            <FormInputControl
              labelName="Keterangan"
              as={"textarea"}
              rows={3}
              required={false}
              register={register("keterangan")}
              isInvalid={!!errors?.keterangan}
              message={errors?.keterangan?.message}
              placeholder="Masukkan keterangan"
            />
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
    </>
  )
}

export default BkAgendaForm
