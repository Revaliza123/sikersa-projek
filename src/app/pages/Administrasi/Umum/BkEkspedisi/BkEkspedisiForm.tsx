import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import {
  BukuEkspedisiField,
  IBukuEkspedisi,
} from "@app/interface/administrasi/buku-ekspedisi.interface"
import { IFormDataContent } from "@app/interface/main"
import { API_PATH } from "@app/services/_path.service"

const validationSchema = Yup.object().shape({
  tanggal_pengiriman: Yup.string().required(),
  tanggal_surat: Yup.string().required(),
  nomor_surat: Yup.string().required(),
  ditujukan_kepada: Yup.string().required(),
  isi_singkat_surat: Yup.string().required(),
})

const BkEkspedisiForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [fields] = useState<any>(BukuEkspedisiField)
  const [path] = useState<string>(API_PATH().form.administrasi.bukuEkspedisi)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    // control,
    formState: { errors },
  } = useForm<IBukuEkspedisi>({
    // resolver: yupResolver(validationSchema),
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
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Tangal Pengiriman"
                  type="date"
                  required={true}
                  register={register("tanggal_pengiriman")}
                  isInvalid={!!errors?.tanggal_pengiriman}
                  message={errors?.tanggal_pengiriman?.message}
                  placeholder="Masukkan tanggal pengiriman"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Surat"
                  type="date"
                  required={true}
                  register={register("tanggal_surat")}
                  isInvalid={!!errors?.tanggal_surat}
                  message={errors?.tanggal_surat?.message}
                  placeholder="Masukkan tanggal surat"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor surat"
                  required={true}
                  register={register("nomor_surat")}
                  isInvalid={!!errors?.nomor_surat}
                  message={errors?.nomor_surat?.message}
                  placeholder="Masukkan nomor surat"
                />
              </Col>
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
            <FormInputControl
              labelName="Isi Singkat Surat"
              as={"textarea"}
              rows={3}
              required={true}
              register={register("isi_singkat_surat")}
              isInvalid={!!errors?.isi_singkat_surat}
              message={errors?.isi_singkat_surat?.message}
              placeholder="Masukkan isi singkat surat"
            />
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

export default BkEkspedisiForm
