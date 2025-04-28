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
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import {
  BkKasPembantuField,
  IBkKasPembantu,
} from "@app/interface/administrasi/buku-kas-pembantu.interface"
import { FormGroupTitle } from "@app/styled/typography.styled"

const validationSchema = Yup.object().shape({
  tanggal: Yup.string().required(),
})

const BkKasPembantuForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(API_PATH().form.administrasi.bukuKasPembantu)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBkKasPembantu>({
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
        fields={BkKasPembantuField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <FormInputControl
              type="date"
              labelName="Tanggal RAB"
              required={true}
              register={register("tanggal")}
              isInvalid={!!errors?.tanggal}
              message={errors?.tanggal?.message}
              placeholder="Masukkan tanggal"
            />

            <FormGroupTitle>Uraian: </FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Pajak <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("uraian.pajak")}
                    errors={errors}
                    control={control}
                    field={"uraian.pajak"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="RET"
                  required={true}
                  register={register("uraian.RET")}
                  isInvalid={!!errors?.uraian?.RET}
                  message={errors?.uraian?.RET?.message}
                  placeholder="Masukkan RET"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="PL"
                  required={true}
                  register={register("uraian.PL")}
                  isInvalid={!!errors?.uraian?.PL}
                  message={errors?.uraian?.PL?.message}
                  placeholder="Masukkan PL"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Pemotongan <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pemotongan")}
                    errors={errors}
                    control={control}
                    field={"pemotongan"}
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
                    Penyetoran <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("penyetoran")}
                    errors={errors}
                    control={control}
                    field={"penyetoran"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>

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

export default BkKasPembantuForm
