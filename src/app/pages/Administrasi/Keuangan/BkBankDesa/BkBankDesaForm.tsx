import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import { FormGroupTitle } from "@app/styled/typography.styled"
import {
  BukuBankDesaField,
  IBukuBankDesa,
} from "@app/interface/administrasi/buku-bank-desa.interface"
import { IFormDataContent } from "@app/interface/main"
import FormInputMask from "@app/components/Input/FormInputMask"
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import { API_PATH } from "@app/services/_path.service"

const validationSchema = Yup.object().shape({
  tanggal_transaksi: Yup.string().required(),
  uraian_transaksi: Yup.string().required(),
})

const BkBankDesaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(API_PATH().form.administrasi.bukuBankDesa)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuBankDesa>({
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
        fields={BukuBankDesaField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <FormInputControl
              labelName="Tanggal"
              type="date"
              required={true}
              register={register("tanggal_transaksi")}
              isInvalid={!!errors?.tanggal_transaksi}
              message={errors?.tanggal_transaksi?.message}
              placeholder="Tanggal"
            />

            <FormInputControl
              as={"textarea"}
              labelName="Keterangan"
              required={true}
              register={register("uraian_transaksi")}
              isInvalid={!!errors?.uraian_transaksi}
              message={errors?.uraian_transaksi?.message}
              placeholder="Uraian"
            />

            <FormGroupTitle>Pemasukan: </FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label> Setoran</Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pemasukan.setoran")}
                    errors={errors}
                    control={control}
                    field={"pemasukan.setoran"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group>
                  <Form.Label> Bunga Bank </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pemasukan.bunga_bank")}
                    errors={errors}
                    control={control}
                    field={"pemasukan.bunga_bank"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <FormGroupTitle>Pengeluaran: </FormGroupTitle>
              <Col sm>
                <Form.Group>
                  <Form.Label> Penarikan</Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pengeluaran.penarikan")}
                    errors={errors}
                    control={control}
                    field={"pengeluaran.penarikan"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group>
                  <Form.Label> Pajak </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pengeluaran.pajak")}
                    errors={errors}
                    control={control}
                    field={"pengeluaran.pajak"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group>
                  <Form.Label> Biaya Administrasi</Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pengeluaran.biaya_administrasi")}
                    errors={errors}
                    control={control}
                    field={"pengeluaran.biaya_administrasi"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label> Saldo</Form.Label>
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

            <FormInputControl
              labelName="Nomor Bukti"
              required={false}
              register={register("bukti_transaksi")}
              isInvalid={!!errors?.bukti_transaksi}
              message={errors?.bukti_transaksi?.message}
              placeholder="Bukti"
            />
            <Form.Group className="position-relative mb-3">
              <Form.Label>
                Upload Lampiran <RequiredInfo />
              </Form.Label>
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

export default BkBankDesaForm
