import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  ketua_rw: Yup.object().shape({
    nama_ketua_rw: Yup.string(),
    nik_ketua_rw: Yup.string(),
    no_hp: Yup.string(),
    menjabat_ketua_rw_sejak_tahun: Yup.string(),
  }),
  sekertaris_rw: Yup.object().shape({
    nama_sekretaris_rw: Yup.string(),
    nik_sekretaris_rw: Yup.string(),
    no_hp: Yup.string(),
    menjabat_sekretaris_rw_sejak_tahun: Yup.string(),
  }),
  bendahara_rw: Yup.object().shape({
    nama_bendahara_rw: Yup.string(),
    nik_bendahara_rw: Yup.string(),
    no_hp: Yup.string(),
    menjabat_bendahara_rw_sejak_tahun: Yup.string(),
  }),
})

export function Step3Form() {
  const { updateFormData, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepthree", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>DESKRIPSI PENGURUS RW</h5>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"33. Ketua RW"}
                fieldName={"ketua_rw"}
                required={false}
                options={[
                  {
                    label: "Nama Ketua RW",
                    value: "nama_ketua_rw",
                    fieldName: "nama_ketua_rw",
                  },
                  {
                    label: "NIK Ketua RW",
                    value: "nik_ketua_rw",
                    fieldName: "nik_ketua_rw",
                  },
                  { label: "No HP", value: "no_hp", fieldName: "no_hp" },
                  {
                    label: "Menjabat Ketua RW sejak tahun",
                    value: "menjabat_ketua_rw_sejak_tahun",
                    fieldName: "menjabat_ketua_rw_sejak_tahun",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"34. Sekretaris RW"}
                fieldName={"sekertaris_rw"}
                required={false}
                options={[
                  {
                    label: "Nama Sekertaris RW",
                    value: "nama_sekretaris_rw",
                    fieldName: "nama_sekretaris_rw",
                  },
                  {
                    label: "NIK Sekertaris RW",
                    value: "nik_sekretaris_rw",
                    fieldName: "nik_sekretaris_rw",
                  },
                  { label: "No HP", value: "no_hp", fieldName: "no_hp" },
                  {
                    label: "Menjabat Sekertaris RW sejak tahun",
                    value: "menjabat_sekretaris_rw_sejak_tahun",
                    fieldName: "menjabat_sekretaris_rw_sejak_tahun",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"35. Bendahara RW"}
                fieldName={"bendahara_rw"}
                required={false}
                options={[
                  {
                    label: "Nama Bendahara RW",
                    value: "nama_bendahara_rw",
                    fieldName: "nama_bendahara_rw",
                  },
                  {
                    label: "NIK Bendahara RW",
                    value: "nik_bendahara_rw",
                    fieldName: "nik_bendahara_rw",
                  },
                  { label: "No HP", value: "no_hp", fieldName: "no_hp" },
                  {
                    label: "Menjabat Bendahara RW sejak tahun",
                    value: "menjabat_bendahara_rw_sejak_tahun",
                    fieldName: "menjabat_bendahara_rw_sejak_tahun",
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
