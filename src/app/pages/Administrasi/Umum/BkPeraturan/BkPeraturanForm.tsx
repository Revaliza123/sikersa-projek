import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import FormData from "@app/modules/Form/FormData"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"

import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import {
  BukuPeraturanDesaField,
  IBukuPeraturanDesa,
} from "@app/interface/administrasi/buku-peraturan-desa.interface"
import { IFormDataContent } from "@app/interface/main"
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import { API_PATH } from "@app/services/_path.service"

const validationSchema = Yup.object().shape({
  jenis_peraturan: Yup.string().required(),
  nomor_peraturan: Yup.string().required(),
  tanggal_peraturan: Yup.string().required(),
  tentang: Yup.string().required(),
  uraian_singkat: Yup.string().required(),
  tanggal_kesepakatan: Yup.string().required(),
  nomor_dilaporkan: Yup.string().required(),
  tanggal_dilaporkan: Yup.string().required(),
  upload_lampiran_surat: Yup.string(),
})

const BkPeraturanForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [fields] = useState<any>(BukuPeraturanDesaField)

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuPeraturanDiDesa
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuPeraturanDesa>({
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

            <FormInputControl
              type="date"
              labelName="Tanggal Kesepakatan"
              rows={3}
              required={true}
              register={register("tanggal_kesepakatan")}
              isInvalid={!!errors?.tanggal_kesepakatan}
              message={errors?.tanggal_kesepakatan?.message}
              placeholder="Pilih tanggal"
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
                  type="date"
                  labelName="Tanggal Dilaporkan"
                  required={true}
                  register={register("tanggal_dilaporkan")}
                  isInvalid={!!errors?.tanggal_dilaporkan}
                  message={errors?.tanggal_dilaporkan?.message}
                  placeholder="Masukkan tanggal dilaporkan"
                />
              </Col>
            </Row>

            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Lembaran"
                  required={true}
                  register={register("nomor_lembaran")}
                  isInvalid={!!errors?.nomor_lembaran}
                  message={errors?.nomor_lembaran?.message}
                  placeholder="Masukkan nomor lembaran"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="date"
                  labelName="Tanggal Lembaran"
                  required={true}
                  register={register("tanggal_lembaran")}
                  isInvalid={!!errors?.tanggal_lembaran}
                  message={errors?.tanggal_lembaran?.message}
                  placeholder="Masukkan tanggal dilaporkan"
                />
              </Col>
            </Row>

            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Berita Desa"
                  required={true}
                  register={register("nomor_berita_desa")}
                  isInvalid={!!errors?.nomor_berita_desa}
                  message={errors?.nomor_berita_desa?.message}
                  placeholder="Masukkan nomor berita"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="date"
                  labelName="Tanggal Berita Desa"
                  required={true}
                  register={register("tanggal_berita_desa")}
                  isInvalid={!!errors?.tanggal_berita_desa}
                  message={errors?.tanggal_berita_desa?.message}
                  placeholder="Masukkan tanggal berita"
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

export default BkPeraturanForm
