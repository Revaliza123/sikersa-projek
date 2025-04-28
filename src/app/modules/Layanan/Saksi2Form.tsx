import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputGroup from "@app/components/Input/FormInputGroup"
import { InputLocation } from "@app/components/Input/FormInputLocation"
import { FormInputNIK } from "@app/components/Input/FormInputNIK"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"

interface ISaksi2Form {
  control: any
  register: any
  watch: any
  setError: any
  clearErrors: any
  errors: any
  handleCheckNik: any
}

export default function Saksi2Form({
  control,
  register,
  watch,
  setError,
  clearErrors,
  errors,
  handleCheckNik,
}: ISaksi2Form) {
  return (
    <>
      <FormInputNIK
        labelName={"NIK"}
        required={false}
        register={register("saksi_ii.nik")}
        isInvalid={!!errors?.saksi_ii?.nik}
        message={errors?.saksi_ii?.nik?.message}
        placeholder={"Masukkan NIK"}
        fieldName={"saksi_ii.nik"}
        control={control}
        setError={setError}
        clearErrors={clearErrors}
        onCheckNik={(e: any) => handleCheckNik(e, "saksi_ii")}
        path={`${API_PATH().form.administrasi.bukuIndukPenduduk}/get-by-nik`}
      />

      <FormInputControl
        type="text"
        labelName="Nama Lengkap"
        required={false}
        register={register("saksi_ii.nama_lengkap")}
        isInvalid={!!errors?.saksi_ii?.nama_lengkap}
        message={errors?.saksi_ii?.nama_lengkap?.message}
        placeholder="Masukkan data terkait"
      />

      <Row>
        <Col md={6} sm>
          <FormInputGroup
            register={register("saksi_ii.umur")}
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
              fieldName={`saksi_ii.pekerjaan`}
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
            fieldName={`saksi_ii.provinsi`}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.KabupatenKota
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`saksi_ii.kabupaten_kota`}
            watcherParent={watch(`saksi_ii.provinsi`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.Kecamatan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`saksi_ii.kecamatan`}
            watcherParent={watch(`saksi_ii.kabupaten_kota`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.DesaKelurahan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`saksi_ii.desa_kelurahan`}
            watcherParent={watch(`saksi_ii.kecamatan`)}
          />
        </Col>
      </Row>
      <FormInputControl
        as="textarea"
        labelName="Alamat"
        required={false}
        register={register("saksi_ii.alamat_rumah")}
        isInvalid={!!errors?.saksi_ii?.alamat_rumah}
        message={errors?.saksi_ii?.alamat_rumah?.message}
        placeholder="Masukkan data terkait"
      />
    </>
  )
}
