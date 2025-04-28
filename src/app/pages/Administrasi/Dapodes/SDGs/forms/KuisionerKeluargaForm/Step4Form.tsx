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
  paud: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  pendidikan_keagamaan_lain: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  perguruan_tinggi: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  pesantren: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  sd_mi_sederajat: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  seminari: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  sma_ma_sederajat: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  smp_mts_sederajat: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  tk_ra: Yup.object().shape({
    jarak: Yup.string().required(),
    kemudahan: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
})

export function Step4Form() {
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
          <h5>AKSES PENDIDIKAN TERDEKAT</h5>
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
                labelName={"34. PAUD"}
                fieldName={"paud"}
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
                labelName={"35. TK/RA"}
                fieldName={"tk_ra"}
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
                labelName={"36. SD/MI atau sederajat"}
                fieldName={"sd_mi_sederajat"}
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
                labelName={"37. SMP/MTs atau sederajat"}
                fieldName={"smp_mts_sederajat"}
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
                labelName={"38. SMA/MA atau sederajat"}
                fieldName={"sma_ma_sederajat"}
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
                labelName={"39. Perguruan Tinggi"}
                fieldName={"perguruan_tinggi"}
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
                labelName={"40. Pesantren"}
                fieldName={"pesantren"}
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
                labelName={"41. Seminari"}
                fieldName={"seminari"}
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
                labelName={"42. Pendidikan keagamaan lainnya"}
                fieldName={"pendidikan_keagamaan_lain"}
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
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
