import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputGroup from "@app/components/Input/FormInputGroup"
import { InputLocation } from "@app/components/Input/FormInputLocation"
import { FormInputNIK } from "@app/components/Input/FormInputNIK"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"

interface ISaksi1Form {
  control: any
  register: any
  watch: any
  setError: any
  clearErrors: any
  errors: any
  handleCheckNik: any
}

export default function Saksi1Form({
  control,
  register,
  watch,
  setError,
  clearErrors,
  errors,
  handleCheckNik,
}: ISaksi1Form) {
  return (
    <>
      <FormInputNIK
        labelName={"NIK"}
        required={false}
        register={register("saksi_i.nik")}
        isInvalid={!!errors?.saksi_i?.nik}
        message={errors?.saksi_i?.nik?.message}
        placeholder={"Masukkan NIK"}
        fieldName={"saksi_i.nik"}
        control={control}
        setError={setError}
        clearErrors={clearErrors}
        onCheckNik={(e: any) => handleCheckNik(e, "saksi_i")}
        path={`${API_PATH().form.administrasi.bukuIndukPenduduk}/get-by-nik`}
      />

      <FormInputControl
        type="text"
        labelName="Nama Lengkap"
        required={false}
        register={register("saksi_i.nama_lengkap")}
        isInvalid={!!errors?.saksi_i?.nama_lengkap}
        message={errors?.saksi_i?.nama_lengkap?.message}
        placeholder="Masukkan data terkait"
      />

      <Row>
        <Col md={6} sm>
          <FormInputGroup
            register={register("saksi_i.umur")}
            field={errors?.saksi_i?.umur}
            label={"Umur"}
            suffix={"Tahun"}
            type="number"
            placeholder="Masukkan umur"
          />
        </Col>
        <Col md={6} sm>
          <Form.Group>
            <SelectAsyncDynamic
              labelName="Pekerjaan"
              isClearable={false}
              errors={errors}
              control={control}
              labelField={"name"}
              valueField={"name"}
              fieldName={`saksi_i.pekerjaan`}
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
        </Col>

        <Col md={6} sm>
          <InputLocation.Provinsi
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`saksi_i.provinsi`}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.KabupatenKota
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`saksi_i.kabupaten_kota`}
            watcherParent={watch(`saksi_i.provinsi`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.Kecamatan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`saksi_i.kecamatan`}
            watcherParent={watch(`saksi_i.kabupaten_kota`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.DesaKelurahan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`saksi_i.desa_kelurahan`}
            watcherParent={watch(`saksi_i.kecamatan`)}
          />
        </Col>
      </Row>
      <FormInputControl
        as="textarea"
        labelName="Alamat"
        required={false}
        register={register("saksi_i.alamat_rumah")}
        isInvalid={!!errors?.saksi_i?.alamat_rumah}
        message={errors?.saksi_i?.alamat_rumah?.message}
        placeholder="Masukkan data terkait"
      />
    </>
  )
}
