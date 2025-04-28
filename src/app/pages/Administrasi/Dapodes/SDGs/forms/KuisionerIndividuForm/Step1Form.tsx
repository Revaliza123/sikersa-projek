import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Input } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  desa: Yup.string().required(),
  kabupaten_kota: Yup.string().required(),
  kecamatan: Yup.string().required(),
  provinsi: Yup.string().required(),
  rt: Yup.string().min(3).required(),
  rw: Yup.string().min(3).required(),
})

export function Step1Form() {
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
          <h5>WILAYAH</h5>
          <Row>
            <Col sm>
              <Input
                fieldName="provinsi"
                labelName={"1. Provinsi"}
                required={true}
                placeholder={"Masukkan provinsi"}
              />
            </Col>

            <Col sm>
              <Input
                fieldName="kabupaten_kota"
                labelName={"2. Kabupaten/Kota"}
                required={true}
                placeholder={"Masukkan kabupaten/kota"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                fieldName="kecamatan"
                labelName={"3. Kecamatan"}
                required={true}
                placeholder={"Masukkan kecamatan"}
              />
            </Col>
            <Col sm>
              <Input
                fieldName="desa"
                labelName={"4. Desa"}
                required={true}
                placeholder={"Masukkan desa/kelurahan"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"5. RT"}
                required={true}
                placeholder={"Masukkan nama rt"}
                fieldName={"rt"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"6. RW"}
                required={true}
                placeholder={"Masukkan nama rw"}
                fieldName={"rw"}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
