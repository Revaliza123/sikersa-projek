import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Input, TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { SDGSKuesionerDesaField } from "@app/interface/sdgs-kuesioner.interface"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  badan_usaha_milik_desa: Yup.object().shape({
    nama_bumdes: Yup.string(),
    email: Yup.string(),
    web_desa: Yup.string(),
    facebook: Yup.string(),
    twitter: Yup.string(),
    instagram: Yup.string(),
    youtube: Yup.string(),
  }),
  modal_awal: Yup.object().shape({
    dari_pemerintah_desa: Yup.number().default(0),
    dari_warga_desa: Yup.number().default(0),
    dari_pihak_lain: Yup.number().default(0),
  }),
  omzet_setahun_terakhir: Yup.number().default(0),
  keuntungan_bersih_setahun_terakhir: Yup.number().default(0),
  keuntungan_kotor_belum_dikurangi_pajak_setahun_terakhir:
    Yup.number().default(0),
  nilai_aset: Yup.number().default(0),
  sumbangan_diberikan_kepada_paddesa: Yup.number().default(0),
})

export function Step10Form() {
  const { updateFormData, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized || SDGSKuesionerDesaField,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>BADAN USAHA MILIK DESA</h5>
          <Row>
            <Col sm>
              <Input
                labelName={"63. Nama Bumdes"}
                required={false}
                placeholder={"Masukkan nama"}
                fieldName={"badan_usaha_milik_desa.nama_bumdes"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"64. Email"}
                required={false}
                placeholder={"Masukkan email "}
                fieldName={"badan_usaha_milik_desa.email"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"65. Web Desa"}
                required={false}
                placeholder={"Masukkan web desa"}
                fieldName={"badan_usaha_milik_desa.web_desa"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"66. Facebook"}
                required={false}
                placeholder={"Masukkan facebook"}
                fieldName={"badan_usaha_milik_desa.facebook"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"67. Twitter"}
                required={false}
                placeholder={"Masukkan twitter"}
                fieldName={"badan_usaha_milik_desa.twitter"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"68. Instagram"}
                required={false}
                placeholder={"Masukkan instagram"}
                fieldName={"badan_usaha_milik_desa.instagram"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"69. Youtube"}
                required={false}
                placeholder={"Masukkan youtube"}
                fieldName={"badan_usaha_milik_desa.youtube"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"70. Modal Awal (Rp)"}
                required={false}
                fieldName={"modal_awal"}
                options={[
                  {
                    label: "Dari pemerintah desa",
                    value: "dari_pemerintah_desa",
                    fieldName: "dari_pemerintah_desa",
                    type: "number",
                  },
                  {
                    label: "Dari warga desa",
                    value: "dari_warga_desa",
                    fieldName: "dari_warga_desa",
                    type: "number",
                  },
                  {
                    label: "Dari pihak lain",
                    value: "dari_pihak_lain",
                    fieldName: "dari_pihak_lain",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"71. Omzet Setahun Terakhir (Rp)"}
                required={false}
                placeholder={"Masukkan jumlah"}
                fieldName={"omzet_setahun_terakhir"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"72. Keuntungan Bersih Setahun Terakhir (Rp)"}
                required={false}
                placeholder={"Masukkan keuntungan bersih"}
                fieldName={"keuntungan_bersih_setahun_terakhir"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "73. Keuntungan Kotor Belum Dikurangi Pajak Setahun Terakhir (Rp)"
                }
                required={false}
                placeholder={"Masukkan keuntungan kotor"}
                fieldName={
                  "keuntungan_kotor_belum_dikurangi_pajak_setahun_terakhir"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"74. Nilai aset (Rp)"}
                required={false}
                placeholder={"Masukkan nilai aset"}
                fieldName={"nilai_aset"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"75. Sumbangan diberikan kepada PADdesa (Rp)"}
                required={false}
                placeholder={"Masukkan jumlah sumbangan"}
                fieldName={"sumbangan_diberikan_kepada_paddesa"}
                type={"number"}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
