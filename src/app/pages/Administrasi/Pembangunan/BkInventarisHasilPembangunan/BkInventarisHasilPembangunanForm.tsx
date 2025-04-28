import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
// import FormInputMask from "@app/components/Input/FormInputMask"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import { IFormDataContent } from "@app/interface/main"
import {
  BukuInventarisHasilHasilPembangunanField,
  IBukuInventarisHasilHasilPembangunan,
} from "@app/interface/administrasi/buku-inventaris-hasil-pembangunan.interface"
import InputFileUpload from "@app/modules/Form/InputFileUpload"

const validationSchema = Yup.object().shape({
  nama_proyek: Yup.string().required(),
  volume: Yup.number().required(),
  biaya: Yup.number().required(),
  lokasi: Yup.string().required(),
})

const BkInventarisHasilPembangunanForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuInventarisHasilHasilPembangunan
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuInventarisHasilHasilPembangunan>({
    // resolver: yupResolver(validationSchema),
  })

  const lampiran = useWatch({ control, name: "upload_lampiran_surat" })

  const onSubmitForm = (data: IBukuInventarisHasilHasilPembangunan) => {
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
        fields={BukuInventarisHasilHasilPembangunanField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <FormInputControl
              labelName="Nama Proyek/Kegiatan"
              required={true}
              register={register("nama_proyek")}
              isInvalid={!!errors?.nama_proyek}
              message={errors?.nama_proyek?.message}
              placeholder="Masukkan Proyek/Kegiatan"
            />

            <Row>
              <Col sm>
                <Form.Label>
                  {" "}
                  Volume <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  suffix="M3"
                  register={register("volume")}
                  field={"volume"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan volume"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  {" "}
                  Biaya <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("biaya")}
                  field={"biaya"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
            </Row>
            <FormInputControl
              labelName="Lokasi"
              required={true}
              register={register("lokasi")}
              isInvalid={!!errors?.lokasi}
              message={errors?.lokasi?.message}
              placeholder="Masukkan lokasi"
            />
            <FormInputControl
              labelName="Keterangan"
              as={"textarea"}
              rows={3}
              register={register("keterangan")}
              isInvalid={!!errors?.keterangan}
              message={errors?.keterangan?.message}
              placeholder="Masukkan keterangan"
            />

            <Row>
              <Col sm>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Upload Lampiran</Form.Label>
                  <InputFileUpload
                    setValue={setValue}
                    field="upload_lampiran_surat"
                    message={errors?.upload_lampiran_surat?.message}
                    isInvalid={!!errors?.upload_lampiran_surat?.message}
                    link={lampiran}></InputFileUpload>
                </Form.Group>
              </Col>
            </Row>
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

export default BkInventarisHasilPembangunanForm
