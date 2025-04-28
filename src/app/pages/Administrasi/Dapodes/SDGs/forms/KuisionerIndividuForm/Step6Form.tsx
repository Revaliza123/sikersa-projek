import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { TableChoices } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  penyakit_yang_diderita_setahun_terakhir: Yup.object().shape({
    campak: Yup.string(),
    covid: Yup.string(),
    demam_berdarah: Yup.string(),
    diabetes_kencing_manis_gula: Yup.string(),
    diekspor: Yup.string(),
    difteri: Yup.string(),
    flu_burung_atau_sars: Yup.string(),
    gizi_buruk_atau_marasmus_dan_kwasiorkor: Yup.string(),
    hepatitis_b: Yup.string(),
    hepatitis_e: Yup.string(),
    jantung: Yup.string(),
    kanker: Yup.string(),
    kolera: Yup.string(),
    lainnya: Yup.string(),
    leptospirosis: Yup.string(),
    lumpuh: Yup.string(),
    malaria: Yup.string(),
    muntaber_atau_diare: Yup.string(),
    tbc_paru_paru: Yup.string(),
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
          <h5>KESEHATAN</h5>
          <Row>
            <Col sm>
              <TableChoices
                labelName={"33. Penyakit yang diderita setahun terakhir"}
                fieldName={"penyakit_yang_diderita_setahun_terakhir"}
                required={true}
                options={[
                  {
                    label: "Muntaber/Diare",
                    value: "muntaber_atau_diare",
                    fieldName: "muntaber_atau_diare",
                  },
                  {
                    label: "Demam Berdarah",
                    value: "demam_berdarah",
                    fieldName: "demam_berdarah",
                  },
                  { label: "Campak", value: "campak", fieldName: "campak" },
                  { label: "Malaria", value: "malaria", fieldName: "malaria" },
                  {
                    label: "Flu Burung/SARS",
                    value: "flu_burung_atau_sars",
                    fieldName: "flu_burung_atau_sars",
                  },
                  { label: "Covid-19", value: "covid", fieldName: "covid" },
                  {
                    label: "Hepatitis B",
                    value: "hepatitis_b",
                    fieldName: "hepatitis_b",
                  },
                  {
                    label: "Hepatitis E",
                    value: "hepatitis_e",
                    fieldName: "hepatitis_e",
                  },
                  { label: "Difteri", value: "difteri", fieldName: "difteri" },
                  // { label: 'Chikungunya', value: 'chikungunya', fieldName: 'chikungunya' },
                  {
                    label: "Leptospirosis",
                    value: "leptospirosis",
                    fieldName: "leptospirosis",
                  },
                  { label: "Kolera", value: "kolera", fieldName: "kolera" },
                  {
                    label: "Gizi Buruk (Maramus dan Kwasiorkor)",
                    value: "gizi_buruk_atau_marasmus_dan_kwasiorkor",
                    fieldName: "gizi_buruk_atau_marasmus_dan_kwasiorkor",
                  },
                  { label: "Jantung", value: "jantung", fieldName: "jantung" },
                  {
                    label: "TBC Paru-paru",
                    value: "tbc_paru_paru",
                    fieldName: "tbc_paru_paru",
                  },
                  { label: "Kanker", value: "kanker", fieldName: "kanker" },
                  {
                    label: "Diabetes/kencing manis",
                    value: "diabetes_kencing_manis_gula",
                    fieldName: "diabetes_kencing_manis_gula",
                  },
                  {
                    label: "Diekspor",
                    value: "diekspor",
                    fieldName: "diekspor",
                  },
                  { label: "Lumpuh", value: "lumpuh", fieldName: "lumpuh" },
                  { label: "Lainnya", value: "lainnya", fieldName: "lainnya" },
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
