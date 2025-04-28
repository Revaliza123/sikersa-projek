import { Button, ButtonCancel } from "@app/components"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import {
  BkPendudukSementaraField,
  IBkPendudukSementara,
} from "@app/interface/administrasi/buku-penduduk-sementara.interface"
import { IFormDataContent } from "@app/interface/main"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import moment from "moment"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  nama_lengkap: Yup.string().required(),
  jenis_kelamin: Yup.string().required(),
  nik: Yup.string().test("custom-rule", "Invalid value", (value) => {
    if (!value) {
      return false
    }
    return value.length === 16 || value.includes("-") || value.includes("0")
  }),
  tempat_lahir: Yup.string().required(),
  tanggal_lahir: Yup.string().required(),
  pekerjaan: Yup.string().required(),
  // golongan_darah: Yup.string().required(),
  kebangsaan: Yup.string().required(),
  keturunan: Yup.string().required(),
  datang_dari: Yup.string().required(),
  maksud_tujuan_kedatangan: Yup.string().required(),
  nama_yang_didatangi: Yup.string().required(),
  alamat_yang_didatangi: Yup.string().required(),
  datang_tanggal: Yup.string().required(),
  pergi_tanggal: Yup.string().required(),
})

const BkPendudukSementaraForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuPendudukSementara
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBkPendudukSementara>({
    // resolver: yupResolver(validationSchema),
  })

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
        fields={BkPendudukSementaraField}
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
                  register={register("nik")}
                  isInvalid={!!errors?.nik}
                  message={errors?.nik?.message}
                  placeholder="Masukkan NIK"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Nama Lengkap"
                  required={true}
                  register={register("nama_lengkap")}
                  isInvalid={!!errors?.nama_lengkap}
                  message={errors?.nama_lengkap?.message}
                  placeholder="Masukkan name lengkap"
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
                <Form.Group>
                  <Form.Label>
                    Jenis Kelamin <RequiredInfo />
                  </Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Laki-Laki"
                      value="Laki-Laki"
                      type={"radio"}
                      isInvalid={!!errors?.jenis_kelamin}
                      {...register("jenis_kelamin")}
                    />
                    <Form.Check
                      inline
                      label="Perempuan"
                      value="Perempuan"
                      type={"radio"}
                      isInvalid={!!errors?.jenis_kelamin}
                      {...register("jenis_kelamin")}
                    />
                  </div>
                  {errors?.jenis_kelamin && (
                    <div className="invalid-feedback d-block">
                      {errors?.jenis_kelamin?.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <SelectAsyncDynamic
                    labelName="Golongan Darah"
                    // required={true}
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`golongan_darah`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "golongan_darah",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Kebangsaan"
                  required={false}
                  register={register("kebangsaan")}
                  isInvalid={!!errors?.kebangsaan}
                  message={errors?.kebangsaan?.message}
                  placeholder="Masukkan kebangsaan"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Keturunan / Suku"
                  required={false}
                  register={register("keturunan")}
                  isInvalid={!!errors?.keturunan}
                  message={errors?.keturunan?.message}
                  placeholder="Masukkan keturunan"
                />
              </Col>
            </Row>
            <FormInputControl
              labelName="Datang Dari"
              required={true}
              register={register("datang_dari")}
              isInvalid={!!errors?.datang_dari}
              message={errors?.datang_dari?.message}
              placeholder="Masukkan datang dari"
            />
            <Form.Group className="mb-4">
              <SelectAsyncDynamic
                labelName="Pekerjaan"
                required={false}
                isClearable={false}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                fieldName={`pekerjaan`}
                pathServiceName={`${API_PATH().master}/get-all`}
                queryParams={{
                  filter: [
                    {
                      value: "pekerjaan",
                      field: "category",
                    },
                  ],
                  size: 120,
                }}
              />
            </Form.Group>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nama yang Didatangi"
                  required={true}
                  register={register("nama_yang_didatangi")}
                  isInvalid={!!errors?.nama_yang_didatangi}
                  message={errors?.nama_yang_didatangi?.message}
                  placeholder="Masukkan nama yang didatangi"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Maksud dan Tujuan Kedatangan"
                  required={true}
                  register={register("maksud_tujuan_kedatangan")}
                  isInvalid={!!errors?.maksud_tujuan_kedatangan}
                  message={errors?.maksud_tujuan_kedatangan?.message}
                  placeholder="Masukkan datang dari"
                />
              </Col>
            </Row>

            <FormInputControl
              labelName="Alamat yang Didatangi"
              as={"textarea"}
              rows={3}
              required={true}
              register={register("alamat_yang_didatangi")}
              isInvalid={!!errors?.alamat_yang_didatangi}
              message={errors?.alamat_yang_didatangi?.message}
              placeholder="Masukkan alamat yang didatangi"
            />
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Datang"
                  type="date"
                  required={true}
                  register={register("datang_tanggal")}
                  isInvalid={!!errors?.datang_tanggal}
                  message={errors?.datang_tanggal?.message}
                  placeholder="Masukkan nama yang didatangi"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Pergi Tanggal"
                  type="date"
                  required={true}
                  register={register("pergi_tanggal")}
                  isInvalid={!!errors?.pergi_tanggal}
                  message={errors?.pergi_tanggal?.message}
                  placeholder="Masukkan alamat yang didatangi"
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

export default BkPendudukSementaraForm
