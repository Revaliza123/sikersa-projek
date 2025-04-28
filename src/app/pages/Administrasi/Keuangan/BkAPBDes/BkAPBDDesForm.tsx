import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import { FormGroupTitle } from "@app/styled/typography.styled"
import {
  BukuAPBDField,
  IBukuAPBDField,
} from "@app/interface/administrasi/buku-apbd.interface"
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import { API_PATH } from "@app/services/_path.service"
import { IFormDataContent } from "@app/interface/main"
// import FormInputMask from "@app/components/Input/FormInputMask"
import RequiredInfo from "@app/components/Info/RequiredInfo"

const validationSchema = Yup.object().shape({
  nomer_perdes: Yup.string().required(),
  jenis_anggaran: Yup.string().required(),
  pendapatan: Yup.object().shape({
    pendapatan_asli_desa: Yup.number().required(),
    pendapatan_transfer: Yup.number().required(),
    pendapatan_lain_lain: Yup.number().required(),
  }),
  belanja: Yup.object().shape({
    belanja_pegawai: Yup.number().required(),
    belanja_barang_dan_jasa: Yup.number().required(),
    belanja_modal: Yup.number().required(),
  }),
  pembiayaan: Yup.object().shape({
    penerimaan_pembiayaan: Yup.number().required(),
    pengeluran_pembiayaan: Yup.number().required(),
  }),
})

const BkAPBDDesaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuAnggaranPendapatanDanBelanjaDesa
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuAPBDField>({
    mode: "onChange",
    // resolver: yupResolver(validationSchema),
  })

  const lampiran = useWatch({ control, name: "upload_lampiran_surat" })

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
    }

    setDataParams(params)
  }

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={BukuAPBDField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Perdes"
                  required={true}
                  register={register("nomer_perdes")}
                  isInvalid={!!errors?.nomer_perdes}
                  message={errors?.nomer_perdes?.message}
                  placeholder="Masukan nomor perdes"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Kode Rekening"
                  required={false}
                  register={register("kode_rekening")}
                  isInvalid={!!errors?.kode_rekening}
                  message={errors?.kode_rekening?.message}
                  placeholder="Masukan kode rekening"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Perdes"
                  type="date"
                  required={false}
                  register={register("tanggal_perdes")}
                  isInvalid={!!errors?.tanggal_perdes}
                  message={errors?.tanggal_perdes?.message}
                  placeholder="Pilih tanggal perdes"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Jenis Anggaran"
                  required={true}
                  register={register("jenis_anggaran")}
                  isInvalid={!!errors?.jenis_anggaran}
                  message={errors?.jenis_anggaran?.message}
                  placeholder="Masukan jenis anggaran"
                />
              </Col>
            </Row>
            <Row>
              <FormGroupTitle>Pendapatan: </FormGroupTitle>
              <Col sm>
                <Form.Label>
                  Pendapatan Asli Desa
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("pendapatan.pendapatan_asli_desa")}
                  errors={errors}
                  control={control}
                  field={"pendapatan.pendapatan_asli_desa"}
                  placeholder={"Masukan pendapatan"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  Pendapatan Transfer
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("pendapatan.pendapatan_transfer")}
                  errors={errors}
                  control={control}
                  field={"pendapatan.pendapatan_transfer"}
                  placeholder={"Masukan pendapatan"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  Pendapatan Lain-Lain
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("pendapatan.pendapatan_lain_lain")}
                  errors={errors}
                  control={control}
                  field={"pendapatan.pendapatan_lain_lain"}
                  placeholder={"Masukan pendapatan"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
            </Row>
            <Row>
              <FormGroupTitle>Belanja: </FormGroupTitle>
              <Col sm>
                <Form.Label>
                  Belanja Pegawai
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("belanja.belanja_pegawai")}
                  errors={errors}
                  control={control}
                  field={"belanja.belanja_pegawai"}
                  placeholder={"Masukan nominal belanja"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  Belanja Barang Dan Jasa
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("belanja.belanja_barang_dan_jasa")}
                  errors={errors}
                  control={control}
                  field={"belanja.belanja_barang_dan_jasa"}
                  placeholder={"Masukan nominal belanja"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  Belanja Modal
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("belanja.belanja_modal")}
                  errors={errors}
                  control={control}
                  field={"belanja.belanja_modal"}
                  placeholder={"Masukan nominal belanja"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
            </Row>
            <Row>
              <FormGroupTitle>Pembiayaan: </FormGroupTitle>
              <Col sm>
                <Form.Label>
                  Penerimaan Pembiayaan
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("pembiayaan.penerimaan_pembiayaan")}
                  errors={errors}
                  control={control}
                  field={"pembiayaan.penerimaan_pembiayaan"}
                  placeholder={"Masukan nominal pembiayaan"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  Pengeluaran Pembiayaan
                  <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("pembiayaan.pengeluran_pembiayaan")}
                  errors={errors}
                  control={control}
                  field={"pembiayaan.pengeluran_pembiayaan"}
                  placeholder={"Masukan nominal pembiayaan"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
            </Row>
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
            <Row>
              <Col sm>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Upload Lampiran APBD Desa</Form.Label>
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
              <ButtonCancel onClick={onCancel} />
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

export default BkAPBDDesaForm
