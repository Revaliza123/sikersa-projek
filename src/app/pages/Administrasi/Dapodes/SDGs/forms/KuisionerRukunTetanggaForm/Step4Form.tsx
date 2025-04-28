import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  ketua_rt: Yup.object().shape({
    nama_ketua_rt: Yup.string().required(),
    nik_ketua_rt: Yup.string().required(),
    no_hp: Yup.string().required(),
    menjabat_ketua_rt_sejak_tahun: Yup.string().required(),
  }),
  sekertaris_rt: Yup.object().shape({
    nama_sekretaris_rt: Yup.string().required(),
    nik_sekretaris_rt: Yup.string().required(),
    no_hp: Yup.string().required(),
    menjabat_sekretaris_rt_sejak_tahun: Yup.string().required(),
  }),
  bendahara_rt: Yup.object().shape({
    nama_bendahara_rt: Yup.string().required(),
    nik_bendahara_rt: Yup.string().required(),
    no_hp: Yup.string().required(),
    menjabat_bendahara_rt_sejak_tahun: Yup.string().required(),
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
    console.log("submit stepfour", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>DESKRIPSI PENGURUS RT</h5>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"36. Ketua RT"}
                fieldName={"ketua_rt"}
                required={true}
                options={[
                  {
                    label: "Nama Ketua RT",
                    value: "nama_ketua_rt",
                    fieldName: "nama_ketua_rt",
                  },
                  {
                    label: "NIK Ketua RT",
                    value: "nik_ketua_rt",
                    fieldName: "nik_ketua_rt",
                  },
                  { label: "No HP", value: "no_hp", fieldName: "no_hp" },
                  {
                    label: "Menjabat Ketua RT sejak tahun",
                    value: "menjabat_ketua_rt_sejak_tahun",
                    fieldName: "menjabat_ketua_rt_sejak_tahun",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"37. Sekretaris RT"}
                fieldName={"sekertaris_rt"}
                required={true}
                options={[
                  {
                    label: "Nama Sekertaris RT",
                    value: "nama_sekretaris_rt",
                    fieldName: "nama_sekretaris_rt",
                  },
                  {
                    label: "NIK Sekertaris RT",
                    value: "nik_sekretaris_rt",
                    fieldName: "nik_sekretaris_rt",
                  },
                  { label: "No HP", value: "no_hp", fieldName: "no_hp" },
                  {
                    label: "Menjabat Sekertaris RT sejak tahun",
                    value: "menjabat_sekretaris_rt_sejak_tahun",
                    fieldName: "menjabat_sekretaris_rt_sejak_tahun",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"38. Bendahara RT"}
                fieldName={"bendahara_rt"}
                required={true}
                options={[
                  {
                    label: "Nama Bendahara RT",
                    value: "nama_bendahara_rt",
                    fieldName: "nama_bendahara_rt",
                  },
                  {
                    label: "NIK Bendahara RT",
                    value: "nik_bendahara_rt",
                    fieldName: "nik_bendahara_rt",
                  },
                  { label: "No HP", value: "no_hp", fieldName: "no_hp" },
                  {
                    label: "Menjabat Bendahara RT sejak tahun",
                    value: "menjabat_bendahara_rt_sejak_tahun",
                    fieldName: "menjabat_bendahara_rt_sejak_tahun",
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
