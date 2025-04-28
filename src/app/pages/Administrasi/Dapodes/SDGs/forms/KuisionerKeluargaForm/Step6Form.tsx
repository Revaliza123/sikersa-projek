import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  bidan: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  dokter_spesialis: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  dokter_umum: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  dukun: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  tenaga_kesehatan: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
})

export function Step6Form() {
  const { updateFormData, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()
  const { workspace } = useSelector((state: any) => state.app)

  // set location form from current workspace
  useEffect(() => {
    const {
      desakelurahan_details: {
        nama_kelurahan,
        nama_kecamatan,
        nama_kota,
        nama_provinsi,
      },
    } = workspace
    methods.setValue("provinsi", nama_provinsi)
    methods.setValue("kabupaten_kota", nama_kota)
    methods.setValue("kecamatan", nama_kecamatan)
    methods.setValue("desa", nama_kelurahan)
  }, [])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>AKSES TENAGA KESEHATAN TERDEKAT</h5>
          <Row className="mb-2">
            <Col sm>
              <p className="fw-bold mb-1">Note:</p>
              <p className="fw-bold mb-1">
                45 menit = 0.75 jam, 30 menit = 0.5 jam, 15 menit = 0.25 jam,
                &lt;5 menit = 0 jam
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"53. Dokter spesialis"}
                fieldName={"dokter_spesialis"}
                required={false}
                options={[
                  { label: "Jarak (km)", value: "jarak", fieldName: "jarak" },
                  {
                    label: "Waktu Tempuh (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"54. Dokter umum"}
                fieldName={"dokter_umum"}
                required={true}
                options={[
                  { label: "Jarak (km)", value: "jarak", fieldName: "jarak" },
                  {
                    label: "Waktu Tempuh (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"55. Bidan"}
                fieldName={"bidan"}
                required={true}
                options={[
                  { label: "Jarak (km)", value: "jarak", fieldName: "jarak" },
                  {
                    label: "Waktu Tempuh (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"56. Tenaga Kesehatan"}
                fieldName={"tenaga_kesehatan"}
                required={false}
                options={[
                  { label: "Jarak (km)", value: "jarak", fieldName: "jarak" },
                  {
                    label: "Waktu Tempuh (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"57. Dukun"}
                fieldName={"dukun"}
                required={false}
                options={[
                  { label: "Jarak (km)", value: "jarak", fieldName: "jarak" },
                  {
                    label: "Waktu Tempuh (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
