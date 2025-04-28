import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputGroup from "@app/components/Input/FormInputGroup"
import { InputLocation } from "@app/components/Input/FormInputLocation"
import { FormInputNIK } from "@app/components/Input/FormInputNIK"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import moment from "moment"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"

interface IAyahForm {
  control: any
  register: any
  watch: any
  setError: any
  clearErrors: any
  errors: any
  handleCheckNik: any
}

export default function AyahForm({
  control,
  register,
  watch,
  setError,
  clearErrors,
  errors,
  handleCheckNik,
}: IAyahForm) {
  return (
    <>
      <FormInputNIK
        labelName={"NIK"}
        required={false}
        register={register("ayah.nik")}
        isInvalid={!!errors?.ayah?.nik}
        message={errors?.ayah?.nik?.message}
        placeholder={"Masukkan NIK"}
        fieldName={"ayah.nik"}
        control={control}
        setError={setError}
        clearErrors={clearErrors}
        onCheckNik={(e: any) => handleCheckNik(e, "ayah")}
        path={`${API_PATH().form.administrasi.bukuIndukPenduduk}/get-by-nik`}
      />

      <Row>
        <Col md={6} sm>
          <FormInputControl
            type="text"
            labelName="Nama Lengkap"
            required={false}
            register={register("ayah.nama_lengkap")}
            isInvalid={!!errors?.ayah?.nama_lengkap}
            message={errors?.ayah?.nama_lengkap?.message}
            placeholder="Masukkan data terkait"
          />
        </Col>
        <Col md={6} sm>
          <FormInputControl
            type="date"
            labelName="Tanggal Lahir"
            required={false}
            register={register("ayah.tanggal_lahir")}
            isInvalid={!!errors?.ayah?.tanggal_lahir}
            message={errors?.ayah?.tanggal_lahir?.message}
            placeholder="Masukkan data terkait"
            additionalOptions={{
              max: moment().format("yyyy-MM-DD"),
            }}
          />
        </Col>
        <Col md={6} sm>
          <FormInputGroup
            register={register("ayah.umur")}
            field={errors?.ayah?.umur}
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
              fieldName={`ayah.pekerjaan`}
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
            fieldName={`ayah.provinsi`}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.KabupatenKota
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`ayah.kabupaten_kota`}
            watcherParent={watch(`ayah.provinsi`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.Kecamatan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`ayah.kecamatan`}
            watcherParent={watch(`ayah.kabupaten_kota`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.DesaKelurahan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`ayah.desa_kelurahan`}
            watcherParent={watch(`ayah.kecamatan`)}
          />
        </Col>
      </Row>
      <FormInputControl
        as="textarea"
        labelName="Alamat"
        required={false}
        register={register("ayah.alamat_rumah")}
        isInvalid={!!errors?.ayah?.alamat_rumah}
        message={errors?.ayah?.alamat_rumah?.message}
        placeholder="Masukkan data terkait"
      />
    </>
  )
}
