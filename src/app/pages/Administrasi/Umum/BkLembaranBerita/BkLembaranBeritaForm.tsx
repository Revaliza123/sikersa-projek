import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import FormData from "@app/modules/Form/FormData"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

import RequiredInfo from "@app/components/Info/RequiredInfo"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import {
  BukuLembaranBeritaDesaField,
  IBukuLembaranBeritaDesa,
} from "@app/interface/administrasi/buku-lembaran-berita-desa.interface"
import { IFormDataContent } from "@app/interface/main"
import { API_PATH } from "@app/services/_path.service"

const validationSchema = Yup.object().shape({
  jenis_peraturan: Yup.string().required(),
  nomor_peraturan: Yup.string().required(),
  tanggal_peraturan: Yup.string().required(),
  tentang: Yup.string().required(),
  uraian_singkat: Yup.string().required(),
  kategori: Yup.string().required(),
  nomor_diundangkan: Yup.string().required(),
  tanggal_diundangkan: Yup.string().required(),
})

const BkLembaranBeritaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuLembaranDesaDanBeritaDesa
  )

  const [fields] = useState<any>(BukuLembaranBeritaDesaField)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuLembaranBeritaDesa>({
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
                  <SelectAsyncDynamic
                    labelName="Jenis Peraturan"
                    required={true}
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`jenis_peraturan`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "jenis_peraturan",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Peraturan"
                  required={true}
                  register={register("nomor_peraturan")}
                  isInvalid={!!errors?.nomor_peraturan}
                  message={errors?.nomor_peraturan?.message}
                  placeholder="Masukkan nomor peraturan"
                />
              </Col>
            </Row>

            <FormInputControl
              type="date"
              labelName="Tanggal Peraturan"
              rows={3}
              required={true}
              register={register("tanggal_peraturan")}
              isInvalid={!!errors?.tanggal_peraturan}
              message={errors?.tanggal_peraturan?.message}
              placeholder="Pilih tanggal"
            />

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

            <Form.Group className="mb-3">
              <Form.Label>
                {" "}
                Kategori <RequiredInfo />
              </Form.Label>
              <SelectAsyncDynamic
                isClearable={false}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                fieldName={`kategori`}
                pathServiceName={`${API_PATH().master}/get-all`}
                queryParams={{
                  filter: [
                    {
                      value: "kategori",
                      field: "category",
                    },
                  ],
                }}
              />
            </Form.Group>

            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Diundangkan"
                  required={true}
                  register={register("nomor_diundangkan")}
                  isInvalid={!!errors?.nomor_diundangkan}
                  message={errors?.nomor_diundangkan?.message}
                  placeholder="Masukkan nomor dilaporkan"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Diundangkan"
                  type="date"
                  required={true}
                  register={register("tanggal_diundangkan")}
                  isInvalid={!!errors?.tanggal_diundangkan}
                  message={errors?.tanggal_diundangkan?.message}
                  placeholder="Masukkan tanggal dilaporkan"
                />
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

export default BkLembaranBeritaForm
