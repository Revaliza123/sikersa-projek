import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputGroup from "@app/components/Input/FormInputGroup"
import { InputLocation } from "@app/components/Input/FormInputLocation"
import { FormInputNIK } from "@app/components/Input/FormInputNIK"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"

interface IPelaporForm {
  control: any
  register: any
  watch: any
  setError: any
  clearErrors: any
  errors: any
  handleCheckNik: any
  showHubunganDenganYangMeninggal?: boolean
}

export default function PelaporForm({
  control,
  register,
  watch,
  setError,
  clearErrors,
  errors,
  handleCheckNik,
  showHubunganDenganYangMeninggal = false,
}: IPelaporForm) {
  return (
    <>
      <FormInputNIK
        labelName={"NIK"}
        required={true}
        register={register("pelapor.nik")}
        isInvalid={!!errors?.pelapor?.nik}
        message={errors?.pelapor?.nik?.message}
        placeholder={"Masukkan NIK"}
        fieldName={"pelapor.nik"}
        control={control}
        setError={setError}
        clearErrors={clearErrors}
        onCheckNik={(e: any) => handleCheckNik(e, "pelapor")}
        path={`${API_PATH().form.administrasi.bukuIndukPenduduk}/get-by-nik`}
      />

      <Row>
        <Col md={6} sm>
          <FormInputControl
            type="text"
            labelName="Nama Lengkap"
            required={true}
            register={register("pelapor.nama_lengkap")}
            isInvalid={!!errors?.pelapor?.nama_lengkap}
            message={errors?.pelapor?.nama_lengkap?.message}
            placeholder="Masukkan data terkait"
          />
        </Col>

        <Col md={6}>
          <FormInputControl
            type="text"
            labelName="Tempat lahir"
            required={true}
            register={register("pelapor.tempat_lahir")}
            isInvalid={!!errors?.pelapor?.tempat_lahir}
            message={errors?.pelapor?.tempat_lahir?.message}
            placeholder="Masukkan data terkait"
          />
        </Col>
        <Col md={6}>
          <FormInputControl
            type="date"
            labelName="Tanggal lahir"
            required={true}
            register={register("pelapor.tanggal_lahir")}
            isInvalid={!!errors?.pelapor?.tanggal_lahir}
            message={errors?.pelapor?.tanggal_lahir?.message}
            placeholder="Masukkan data terkait"
          />
        </Col>

        <Col md={6} sm>
          <FormInputGroup
            register={register("pelapor.umur")}
            field={errors?.pelapor?.umur}
            label={"Umur"}
            suffix={"Tahun"}
            type="number"
            placeholder="Masukkan umur"
          />
        </Col>
        <Col md={6} sm>
          <Form.Group className="mb-3">
            <Form.Label>Jenis Kelamin</Form.Label>
            <SelectAsyncDynamic
              isClearable={false}
              errors={errors}
              control={control}
              labelField={"name"}
              valueField={"name"}
              fieldName={`pelapor.jenis_kelamin`}
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
        <Col md={6} sm>
          <Form.Group className="mb-3">
            <Form.Label>Pekerjaan</Form.Label>
            <SelectAsyncDynamic
              isClearable={false}
              errors={errors}
              control={control}
              labelField={"name"}
              valueField={"name"}
              fieldName={`pelapor.pekerjaan`}
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
            fieldName={`pelapor.provinsi`}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.KabupatenKota
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`pelapor.kabupaten_kota`}
            watcherParent={watch(`pelapor.provinsi`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.Kecamatan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`pelapor.kecamatan`}
            watcherParent={watch(`pelapor.kabupaten_kota`)}
          />
        </Col>
        <Col md={6} sm>
          <InputLocation.DesaKelurahan
            className="mb-3"
            control={control}
            errors={errors}
            required={true}
            fieldName={`pelapor.desa_kelurahan`}
            watcherParent={watch(`pelapor.kecamatan`)}
          />
        </Col>
      </Row>
      {showHubunganDenganYangMeninggal && (
        <FormInputControl
          type="text"
          labelName="Hubungan Dengan yang Meninggal"
          required={true}
          register={register("pelapor.hubungan_dengan_yang_meninggal")}
          isInvalid={!!errors?.pelapor?.hubungan_dengan_yang_meninggal}
          message={errors?.pelapor?.hubungan_dengan_yang_meninggal?.message}
          placeholder="Masukkan data terkait"
        />
      )}
      <FormInputControl
        as="textarea"
        labelName="Alamat"
        required={true}
        register={register("pelapor.alamat_rumah")}
        isInvalid={!!errors?.pelapor?.alamat_rumah}
        message={errors?.pelapor?.alamat_rumah?.message}
        placeholder="Masukkan data terkait"
      />
    </>
  )
}
