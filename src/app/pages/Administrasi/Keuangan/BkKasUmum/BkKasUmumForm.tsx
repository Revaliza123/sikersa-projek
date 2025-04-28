import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import { IFormDataContent } from "@app/interface/main"
import { API_PATH } from "@app/services/_path.service"
import FormInputMask from "@app/components/Input/FormInputMask"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import {
  BkKasUmumField,
  IBkKasUmum,
} from "@app/interface/administrasi/buku-kas-umum.interface"
import InputFileUpload from "@app/modules/Form/InputFileUpload"

const validationSchema = Yup.object().shape({
  uraian: Yup.string().required(),
  tanggal: Yup.string().required(),
})

const BkKasUmumForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(API_PATH().form.administrasi.bukuKasUmum)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBkKasUmum>({
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
        fields={BkKasUmumField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <FormInputControl
                  type="date"
                  labelName="Tanggal RAB"
                  required={true}
                  register={register("tanggal")}
                  isInvalid={!!errors?.tanggal}
                  message={errors?.tanggal?.message}
                  placeholder="Masukkan tanggal"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Kode Rekening"
                  required={true}
                  register={register("kode_rekening")}
                  isInvalid={!!errors?.kode_rekening}
                  message={errors?.kode_rekening?.message}
                  placeholder="Masukkan kode"
                />
              </Col>
            </Row>
            <FormInputControl
              as="textarea"
              required={false}
              rows={3}
              labelName="Uraian"
              register={register("uraian")}
              isInvalid={!!errors?.uraian}
              message={errors?.uraian?.message}
              placeholder="Masukkan uraian"
            />
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Penerimaan <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("penerimaan")}
                    errors={errors}
                    control={control}
                    field={"penerimaan"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Pengeluaran <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pengeluaran")}
                    errors={errors}
                    control={control}
                    field={"pengeluaran"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>
            <FormInputControl
              labelName="Nomor Bukti"
              required={true}
              register={register("nomor_bukti")}
              isInvalid={!!errors?.nomor_bukti}
              message={errors?.nomor_bukti?.message}
              placeholder="Masukkan jenis"
            />
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Jumlah Pengeluaran Komulatif <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("jumlah_pengeluaran_komulatif")}
                    errors={errors}
                    control={control}
                    field={"jumlah_pengeluaran_komulatif"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Saldo <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("saldo")}
                    errors={errors}
                    control={control}
                    field={"saldo"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
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
              <Form.Label> Upload Lampiran </Form.Label>
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

export default BkKasUmumForm
