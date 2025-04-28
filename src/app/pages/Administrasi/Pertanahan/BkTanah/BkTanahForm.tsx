import { Button, ButtonCancel } from "@app/components"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import {
  BukuTanahDesaField,
  IBukuTanahDesa,
} from "@app/interface/administrasi/buku-tanah-desa.interface"
import { IFormDataContent } from "@app/interface/main"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, InputGroup, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  pemilik: Yup.object().shape({
    nik: Yup.string().min(16).max(16).required(),
    nama_perorangan_badan_hukum: Yup.string().required(),
    // alamat: Yup.string().required(),
    // pekerjaan: Yup.string().required(),
    keterangan: Yup.string(),
  }),
  tanah: Yup.object().shape({
    // nama_di_sppt: Yup.string().required(),
    // nomor_sppt: Yup.string().required(),
    // batas_utara: Yup.string().required(),
    // batas_timur: Yup.string().required(),
    // batas_selatan: Yup.string().required(),
    luas_tanah: Yup.string().required(),
    status_hak_tanah: Yup.string().required(),
    penggunaan_tanah: Yup.string().required(),
    // koordinat_latitude: Yup.number(),
    // koordinat_longitude: Yup.number(),
  }),
})

const BkTanahDesaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(API_PATH().form.administrasi.bukuTanahDiDesa)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuTanahDesa>({
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
        fields={BukuTanahDesaField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="NIK"
                  required={false}
                  register={register("pemilik.nik")}
                  isInvalid={!!errors?.pemilik?.nik}
                  message={errors?.pemilik?.nik?.message}
                  placeholder="Masukkan nik"
                  maxlength={16}
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Nama Perorangan/Badan Hukum"
                  required={true}
                  register={register("pemilik.nama_perorangan_badan_hukum")}
                  isInvalid={!!errors?.pemilik?.nama_perorangan_badan_hukum}
                  message={
                    errors?.pemilik?.nama_perorangan_badan_hukum?.message
                  }
                  placeholder="Masukkan data terkait"
                />
              </Col>
            </Row>
            <FormInputControl
              as="textarea"
              required={false}
              rows={3}
              labelName="Keterangan"
              register={register("pemilik.keterangan")}
              isInvalid={!!errors?.pemilik?.keterangan}
              message={errors?.pemilik?.keterangan?.message}
              placeholder="Masukkan keterangan"
            />

            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    Luas Tanah <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      formGroup={false}
                      labelName="Luas Tanah"
                      required={true}
                      register={register("tanah.luas_tanah")}
                      isInvalid={!!errors?.tanah?.luas_tanah}
                      message={errors?.tanah?.luas_tanah?.message}
                      placeholder="Masukkan luas tanah"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <SelectAsyncDynamic
                    required={true}
                    labelName="Status Hak Tanah"
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`tanah.status_hak_tanah`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "status_hak_tanah",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <SelectAsyncDynamic
                    required={true}
                    labelName="Penggunaan Tanah"
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`tanah.penggunaan_tanah`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "penggunaan_tanah",
                          field: "category",
                        },
                      ],
                    }}
                  />
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

export default BkTanahDesaForm
