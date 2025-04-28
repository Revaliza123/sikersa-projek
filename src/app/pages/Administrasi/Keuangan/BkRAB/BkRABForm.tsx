import { Button, ButtonCancel } from "@app/components"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputMask from "@app/components/Input/FormInputMask"
import {
  BkRencanaAnggaranBiayaField,
  IBkRencanaAnggaranBiaya,
} from "@app/interface/administrasi/buku-rencana-anggaran-biaya.interface"
import { IFormDataContent } from "@app/interface/main"
import FormData from "@app/modules/Form/FormData"
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import { API_PATH } from "@app/services/_path.service"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  jenis_RAB_APB_desa: Yup.string().required(),
  tanggal_RAB: Yup.string().required(),
  kegiatan: Yup.string().required(),
})

const BkRABForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuRencanaAnggaranBiaya
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBkRencanaAnggaranBiaya>({
    resolver: yupResolver(validationSchema),
  })

  const lampiran = useWatch({ control, name: "lampiran" })

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
        fields={BkRencanaAnggaranBiayaField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Jenis RAB"
                  required={true}
                  register={register("jenis_RAB_APB_desa")}
                  isInvalid={!!errors?.jenis_RAB_APB_desa}
                  message={errors?.jenis_RAB_APB_desa?.message}
                  placeholder="Masukkan jenis"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="date"
                  labelName="Tanggal RAB"
                  required={true}
                  register={register("tanggal_RAB")}
                  isInvalid={!!errors?.tanggal_RAB}
                  message={errors?.tanggal_RAB?.message}
                  placeholder="Masukkan tanggal"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Bidang"
                  required={false}
                  register={register("bidang")}
                  isInvalid={!!errors?.bidang}
                  message={errors?.bidang?.message}
                  placeholder="Masukkan jenis"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  required={true}
                  labelName="Kegiatan"
                  register={register("kegiatan")}
                  isInvalid={!!errors?.kegiatan}
                  message={errors?.kegiatan?.message}
                  placeholder="Masukkan kegiatan"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Jenis Barang"
                  required={false}
                  register={register("jenis_barang")}
                  isInvalid={!!errors?.jenis_barang}
                  message={errors?.jenis_barang?.message}
                  placeholder="Masukkan jenis"
                />
              </Col>
              <Col sm>
                <Form.Label>
                  {" "}
                  Harga Satuan <RequiredInfo />
                </Form.Label>
                <FormInputMask
                  prefix={"Rp "}
                  register={register("harga_satuan_barang")}
                  errors={errors}
                  control={control}
                  field={"harga_satuan_barang"}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  type="number"
                  required={false}
                  labelName="Volume Barang"
                  register={register("volume_barang")}
                  isInvalid={!!errors?.volume_barang}
                  message={errors?.volume_barang?.message}
                  placeholder="Masukkan volume"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Jenis Satuan"
                  required={false}
                  register={register("jenis_satuan_barang")}
                  isInvalid={!!errors?.jenis_satuan_barang}
                  message={errors?.jenis_satuan_barang?.message}
                  placeholder="Masukkan jenis"
                />
              </Col>
            </Row>
            <FormInputControl
              as="textarea"
              required={false}
              rows={3}
              labelName="Keterangan"
              register={register("keterangan")}
              isInvalid={!!errors?.keterangan}
              message={errors?.keterangan?.message}
              placeholder="Masukkan keterangan"
            />

            <Form.Group className="position-relative mb-3">
              <Form.Label>Upload Lampiran</Form.Label>
              <InputFileUpload
                setValue={setValue}
                field="lampiran"
                message={errors?.lampiran?.message}
                isInvalid={!!errors?.lampiran?.message}
                link={lampiran}></InputFileUpload>
            </Form.Group>
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

export default BkRABForm
