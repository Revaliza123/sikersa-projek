import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import {
  BukuAparatPemerintahDesaField,
  IBukuAparatPemerintahDesa,
} from "@app/interface/administrasi/buku-aparat-pemerintah-desa.interface"
import { IFormDataContent } from "@app/interface/main"
import { API_PATH } from "@app/services/_path.service"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import moment from "moment"

const validationSchema = Yup.object().shape({
  nik: Yup.string().min(16).max(16).required(),
  nama: Yup.string().required(),
  tempat_lahir: Yup.string().required(),
  tanggal_lahir: Yup.string().required(),
  jenis_kelamin: Yup.string().required(),
  agama: Yup.string().required(),
  pendidikan_terakhir: Yup.string().required(),
  jabatan: Yup.string().required(),
  posisi: Yup.string(),
})

const BkAparatPemerintahDesaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [fields] = useState<any>(BukuAparatPemerintahDesaField)
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuAparatPemerintahDesa
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuAparatPemerintahDesa>({
    // resolver: yupResolver(validationSchema),
  })

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
      //  : '',
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
                <FormInputControl
                  labelName="NIK"
                  required={true}
                  register={register("nik")}
                  isInvalid={!!errors?.nik}
                  message={errors?.nik?.message}
                  placeholder="Masukkan NIK"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Nama"
                  required={true}
                  register={register("nama")}
                  isInvalid={!!errors?.nama}
                  message={errors?.nama?.message}
                  placeholder="Masukkan nama"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="NIAP/NIKD/NIPD"
                  required={false}
                  register={register("niap_nikd_nipd")}
                  isInvalid={!!errors?.niap_nikd_nipd}
                  message={errors?.niap_nikd_nipd?.message}
                  placeholder="Masukkan NIAP/NIKD/NIPD"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="NIP"
                  required={false}
                  register={register("nip")}
                  isInvalid={!!errors?.nip}
                  message={errors?.nip?.message}
                  placeholder="Masukkan NIP"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Tempat Lahir"
                  required={true}
                  register={register("tempat_lahir")}
                  isInvalid={!!errors?.tempat_lahir}
                  message={errors?.tempat_lahir?.message}
                  placeholder="Masukkan tempat lahir"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Lahir"
                  type="date"
                  required={true}
                  register={register("tanggal_lahir")}
                  isInvalid={!!errors?.tanggal_lahir}
                  message={errors?.tanggal_lahir?.message}
                  placeholder="Masukkan tanggal lahir"
                  additionalOptions={{
                    max: moment().format("yyyy-MM-DD"),
                  }}
                />
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Jenis kelamin <RequiredInfo />
                  </Form.Label>
                  <SelectAsyncDynamic
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`jenis_kelamin`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "jenis_kelamin",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Agama <RequiredInfo />
                  </Form.Label>
                  <SelectAsyncDynamic
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`agama`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "agama",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Pendidikan terakhir <RequiredInfo />
                  </Form.Label>
                  <SelectAsyncDynamic
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`pendidikan_terakhir`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "pendidikan_terakhir",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Pangkat Golongan"
                  required={false}
                  register={register("pangkat_golongan")}
                  isInvalid={!!errors?.pangkat_golongan}
                  message={errors?.pangkat_golongan?.message}
                  placeholder="Masukkan pangkat golongan"
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
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>Posisi</Form.Label>
                  <SelectAsyncDynamic
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`posisi`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "posisi",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Keputusan Pengangkatan"
                  required={false}
                  register={register("nomor_keputusan_pengangkatan")}
                  isInvalid={!!errors?.nomor_keputusan_pengangkatan}
                  message={errors?.nomor_keputusan_pengangkatan?.message}
                  placeholder="Masukkan nomor keputusan pengangkatan"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Keputusan Pengangkatan"
                  type="date"
                  required={false}
                  register={register("tanggal_keputusan_pengangkatan")}
                  isInvalid={!!errors?.tanggal_keputusan_pengangkatan}
                  message={errors?.tanggal_keputusan_pengangkatan?.message}
                  placeholder="Masukkan tanggal keputusan pengangkatan"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Keputusan Pemberhentian"
                  required={false}
                  register={register("nomor_keputusan_pemberhentian")}
                  isInvalid={!!errors?.nomor_keputusan_pemberhentian}
                  message={errors?.nomor_keputusan_pemberhentian?.message}
                  placeholder="Masukkan nomor keputusan pemberhentian"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Keputusan Pemberhentian"
                  type="date"
                  required={false}
                  register={register("tanggal_keputusan_pemberhentian")}
                  isInvalid={!!errors?.tanggal_keputusan_pemberhentian}
                  message={errors?.tanggal_keputusan_pemberhentian?.message}
                  placeholder="Masukkan tanggal keputusan pemberhentian"
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

export default BkAparatPemerintahDesaForm
