import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputGroup from "@app/components/Input/FormInputGroup"
import { InputLocation } from "@app/components/Input/FormInputLocation"
import { FormInputNIK } from "@app/components/Input/FormInputNIK"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import moment from "moment"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"

interface IIbuForm {
  control: any
  register: any
  watch: any
  setError: any
  clearErrors: any
  errors: any
  handleCheckNik: any
}

export default function IbuForm({
  control,
  register,
  watch,
  setError,
  clearErrors,
  errors,
  handleCheckNik,
}: IIbuForm) {
  return (
    <>
      <FormInputNIK
        labelName={"NIK"}
        required={false}
        register={register("ibu.nik")}
        isInvalid={!!errors?.ibu?.nik}
        message={errors?.ibu?.nik?.message}
        placeholder={"Masukkan NIK"}
        fieldName={"ibu.nik"}
        control={control}
        setError={setError}
        clearErrors={clearErrors}
        onCheckNik={(e: any) => handleCheckNik(e, "ibu")}
        path={`${API_PATH().form.administrasi.bukuIndukPenduduk}/get-by-nik`}
      />

      <Row>
        <Col md={6} sm>
          <FormInputControl
            type="text"
            labelName="Nama Lengkap"
            required={false}
            register={register("ibu.nama_lengkap")}
            isInvalid={!!errors?.ibu?.nama_lengkap}
            message={errors?.ibu?.nama_lengkap?.message}
            placeholder="Masukkan data terkait"
          />
        </Col>
        <Col md={6} sm>
          <FormInputControl
            type="date"
            labelName="Tanggal Lahir"
            required={false}
            register={register("ibu.tanggal_lahir")}
            isInvalid={!!errors?.ibu?.tanggal_lahir}
            message={errors?.ibu?.tanggal_lahir?.message}
            placeholder="Masukkan data terkait"
            additionalOptions={{
              max: moment().format("yyyy-MM-DD"),
            }}
          />
        </Col>
        <Col md={6} sm>
          <FormInputGroup
            register={register("ibu.umur")}
            field={errors?.ibu?.umur}
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
              fieldName={`ibu.pekerjaan`}
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
            fieldName={`ibu.provinsi`}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.KabupatenKota
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`ibu.kabupaten_kota`}
            watcherParent={watch(`ibu.provinsi`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.Kecamatan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`ibu.kecamatan`}
            watcherParent={watch(`ibu.kabupaten_kota`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.DesaKelurahan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`ibu.desa_kelurahan`}
            watcherParent={watch(`ibu.kecamatan`)}
          />
        </Col>
      </Row>
      <FormInputControl
        as="textarea"
        labelName="Alamat (Kampung)"
        required={false}
        register={register("ibu.alamat_rumah")}
        isInvalid={!!errors?.ibu?.alamat_rumah}
        message={errors?.ibu?.alamat_rumah?.message}
        placeholder="Masukkan data terkait"
      />
    </>
  )
}
