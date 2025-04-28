import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, Input } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  akses_internet_yang_diperoleh_melalui: Yup.string().required(),
  alamat_email_pribadi: Yup.string(),
  alamat_facebook_pribadi: Yup.string(),
  alamat_instagram_pribadi: Yup.string(),
  alamat_twitter_pribadi: Yup.string(),
  apakah_aktif_menggunakan_internet_selama_sebulan_terakhir:
    Yup.string().required(),
  kecepatan_akses_internet: Yup.string().required(),
  nomor_hp: Yup.string().required(),
  nomor_untuk_whatsapp: Yup.string(),
})

export function Step3Form() {
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
          <h5>INDIVIDU</h5>
          <Row>
            <Col sm>
              <Input
                labelName={"19. Nomor Handphone"}
                required={true}
                placeholder={"Contoh: +6281234567890"}
                fieldName={"nomor_hp"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"20. Nomor Whatsapp"}
                required={false}
                placeholder={"Contoh: +6281234567890"}
                fieldName={"nomor_untuk_whatsapp"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"21. Alamat Email Pribadi"}
                required={false}
                placeholder={"Contoh: saya@gmail.com"}
                fieldName={"alamat_email_pribadi"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"22. Alamat Facebook Pribadi"}
                required={false}
                placeholder={"Masukkan alamat facebook"}
                fieldName={"alamat_facebook_pribadi"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"23. Alamat Twitter Pribadi"}
                required={false}
                placeholder={"Contoh: @saya"}
                fieldName={"alamat_twitter_pribadi"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"24. Alamat Instagram Pribadi"}
                required={false}
                placeholder={"Masukkan alamat instagram"}
                fieldName={"alamat_instagram_pribadi"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={
                  "25. Apakah aktif menggunakan internet selama sebulan terakhir?"
                }
                fieldName={
                  "apakah_aktif_menggunakan_internet_selama_sebulan_terakhir"
                }
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName:
                      "apakah_aktif_menggunakan_internet_selama_sebulan_terakhir",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName:
                      "apakah_aktif_menggunakan_internet_selama_sebulan_terakhir",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"26. Akses internet yang diperoleh melalui?"}
                fieldName={"akses_internet_yang_diperoleh_melalui"}
                required={true}
                options={[
                  {
                    label: "Wifi",
                    value: "wifi",
                    fieldName: "akses_internet_yang_diperoleh_melalui",
                  },
                  {
                    label: "Handphone",
                    value: "handphone",
                    fieldName: "akses_internet_yang_diperoleh_melalui",
                  },
                  {
                    label: "Wifi dan Handphone",
                    value: "wifi_phone",
                    fieldName: "akses_internet_yang_diperoleh_melalui",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"27. Kecepatan akses internet"}
                fieldName={"kecepatan_akses_internet"}
                required={true}
                options={[
                  {
                    label: "Cepat",
                    value: "cepat",
                    fieldName: "kecepatan_akses_internet",
                  },
                  {
                    label: "Sedang",
                    value: "sedang",
                    fieldName: "kecepatan_akses_internet",
                  },
                  {
                    label: "Lambat",
                    value: "lambat",
                    fieldName: "kecepatan_akses_internet",
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
