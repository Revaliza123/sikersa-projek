import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { IFormDataContent } from "@app/interface/main"
import {
  ITandaTangan,
  TandaTanganField,
} from "@app/interface/administrasi/tanda-tangan.interface"

const validationSchema = Yup.object().shape({
  nip: Yup.string(),
  nama_lengkap: Yup.string().required(),
  jabatan: Yup.string().required(),
  // urutan: Yup.number().required(),
  utama: Yup.string(),
})

const TandaTanganForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(API_PATH().form.administrasi.tandaTangan)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<ITandaTangan>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
    }

    console.log(params)
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
        fields={TandaTanganField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <FormInputControl
              labelName="NIP"
              required={false}
              register={register("nip")}
              isInvalid={!!errors?.nip}
              message={errors?.nip?.message}
              placeholder="Masukkan nip"
            />
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nama"
                  required={true}
                  register={register("nama_lengkap")}
                  isInvalid={!!errors?.nama_lengkap}
                  message={errors?.nama_lengkap?.message}
                  placeholder="Masukkan nama lengkap"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Jabatan"
                  required={true}
                  register={register("jabatan")}
                  isInvalid={!!errors?.jabatan}
                  message={errors?.jabatan?.message}
                  placeholder="Masukkan jabatan"
                />
              </Col>
            </Row>
            {/* <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>Bisa Tanda Tangan?</Form.Label>
                  <div className='my-2'>
                    <Form.Check
                      inline
                      label='Ya'
                      value='Ya'
                      type={'radio'}
                      {...register('status')}
                    />
                    <Form.Check
                      inline
                      label='Tidak'
                      value='Tidak'
                      type={'radio'}
                      {...register('status')}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col sm>
                <FormInputControl
                  type='number'
                  labelName='Urutan'
                  required={true}
                  register={register('urutan')}
                  isInvalid={!!errors?.urutan}
                  message={errors?.urutan?.message}
                  placeholder='Masukkan urutan'
                />
              </Col>
            </Row> */}
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>Jadikan tanda tangan utama?</Form.Label>
                  <div className="my-2">
                    <Form.Check
                      inline
                      label="Ya"
                      value={"ya"}
                      type={"radio"}
                      {...register("utama")}
                    />
                    <Form.Check
                      inline
                      label="Tidak"
                      value={"tidak"}
                      type={"radio"}
                      {...register("utama")}
                    />
                  </div>
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

export default TandaTanganForm
