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
  BukuKeputusanKepalaDesaField,
  IBukuKeputusanKepalaDesa,
} from "@app/interface/administrasi/buku-keputusan-kepala-desa.interface"
import { API_PATH } from "@app/services/_path.service"
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import { IFormDataContent } from "@app/interface/main"

const validationSchema = Yup.object().shape({
  nomor_keputusan: Yup.string().required(),
  nomor_dilaporkan: Yup.string().required(),
  tanggal_dilaporkan: Yup.string().required(),
  tanggal_keputusan: Yup.string().required(),
  tentang: Yup.string().required(),
  uraian_singkat: Yup.string().required(),
  upload_lampiran_surat: Yup.string(),
})

const BkKeputusanKadesForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [fields] = useState<any>(BukuKeputusanKepalaDesaField)
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKeputusanKepalaDesa
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuKeputusanKepalaDesa>({
    // resolver: yupResolver(validationSchema),
  })

  const uploadLampiranSurat = useWatch({
    control,
    name: "upload_lampiran_surat",
  })

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
    }

    setDataParams(params)
  }

  const handleClickHide = (e: any) => {
    if (onCancel) {
      onCancel(e)
    }
  }

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
                <FormInputControl
                  labelName="Nomor Keputusan"
                  required={true}
                  register={register("nomor_keputusan")}
                  isInvalid={!!errors?.nomor_keputusan}
                  message={errors?.nomor_keputusan?.message}
                  placeholder="Masukkan nomor keputusan"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Keputusan"
                  type="date"
                  required={true}
                  register={register("tanggal_keputusan")}
                  isInvalid={!!errors?.tanggal_keputusan}
                  message={errors?.tanggal_keputusan?.message}
                  placeholder="Masukkan tanggal keputusan"
                />
              </Col>
            </Row>
            <FormInputControl
              labelName="Tentang"
              as={"textarea"}
              rows={3}
              required={true}
              register={register("tentang")}
              isInvalid={!!errors?.tentang}
              message={errors?.tentang?.message}
              placeholder="Masukkan tentang"
            />
            <FormInputControl
              labelName="Uraian Singkat"
              as={"textarea"}
              rows={3}
              required={true}
              register={register("uraian_singkat")}
              isInvalid={!!errors?.uraian_singkat}
              message={errors?.uraian_singkat?.message}
              placeholder="Masukkan uraian singkat"
            />
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Dilaporkan"
                  required={true}
                  register={register("nomor_dilaporkan")}
                  isInvalid={!!errors?.nomor_dilaporkan}
                  message={errors?.nomor_dilaporkan?.message}
                  placeholder="Masukkan nomor dilaporkan"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Dilaporkan"
                  type="date"
                  required={true}
                  register={register("tanggal_dilaporkan")}
                  isInvalid={!!errors?.tanggal_dilaporkan}
                  message={errors?.tanggal_dilaporkan?.message}
                  placeholder="Masukkan tanggal dilaporkan"
                />
              </Col>
            </Row>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Upload Lampiran Surat</Form.Label>
              <InputFileUpload
                setValue={setValue}
                field="upload_lampiran_surat"
                message={errors?.upload_lampiran_surat?.message}
                isInvalid={!!errors?.upload_lampiran_surat?.message}
                link={uploadLampiranSurat}></InputFileUpload>
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

export default BkKeputusanKadesForm
