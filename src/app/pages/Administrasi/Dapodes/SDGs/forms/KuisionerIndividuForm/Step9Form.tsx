import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Input, Select } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  bahasa_digunakan_dilembaga_formal_sekolah_tempat_kerja_tuliskan:
    Yup.string().required(),
  bahasa_digunakan_dirumah_dan_permukiman_tuliskan: Yup.string().required(),
  berapa_tahun_bapak_ibu_mengenyam_pendidikan_dasar_sd_smp_sma:
    Yup.string().required(),
  kerja_bakti_setahun_terakhir_jumlah: Yup.string().required(),
  menolong_warga_yang_mengalami_kematian_keluarga_setahun_terakhir_jumlah:
    Yup.string().required(),
  pendidikan_tertinggi_yang_ditamatkan: Yup.string().required(),
  pestarakyat_adat_setahun_terakhir_jumlah: Yup.string().required(),
  siskamling_setahun_terakhir_jumlah: Yup.string().required(),
})

export function Step9Form() {
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
          <h5>PENDIDIKAN</h5>
          <Row>
            <Col sm>
              <Select
                labelName={"38. Pendidikan tertinggi yang ditamatkan"}
                required={true}
                placeholder={"Masukkan pendidikan tertinggi yang ditamatkan"}
                fieldName={"pendidikan_tertinggi_yang_ditamatkan"}
                options={[
                  {
                    label: "Tidak sekolah/belum tamat SD",
                    value: "tidak_sekolah_atau_belum_tamat_sd",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "SD dan sederajat",
                    value: "sd_dan_sederajat",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "SMP dan sederajat",
                    value: "smp_dan_sederajat",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "SMA dan sederajat",
                    value: "sma_dan_sederajat",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "Diploma 1-3",
                    value: "diploma_1_3",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "S1 dan sederajat",
                    value: "s1_dan_sederajat",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "S2 dan sederajat",
                    value: "s2_dan_sederajat",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "S3 dan sederajat",
                    value: "s3_dan_sederajat",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "Pesantren, seminari, wihara dan sejenisnya",
                    value: "pesantren_seminari_wihara_dan_sejenisnya",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                  {
                    label: "Lainnya",
                    value: "lainnya",
                    fieldName: "pendidikan_tertinggi_yang_ditamatkan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "39. Berapa tahun Bapak/Ibu mengenyam pendidikan dasar (SD,SMP,SMA)?"
                }
                required={true}
                placeholder={"Masukkan berapa tahun mengenyam pendidikan dasar"}
                fieldName={
                  "berapa_tahun_bapak_ibu_mengenyam_pendidikan_dasar_sd_smp_sma"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "40. Bahasa yang digunakan di rumah dan di pemukiman (tulisan)"
                }
                required={true}
                placeholder={"Masukkan bahasa yang digunakan"}
                fieldName={"bahasa_digunakan_dirumah_dan_permukiman_tuliskan"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "41. Bahasa yang digunakan di lembaga formal (SD,SMP,SMA)"
                }
                required={true}
                placeholder={"Masukkan bahasa yang digunakan di lembaga formal"}
                fieldName={
                  "bahasa_digunakan_dilembaga_formal_sekolah_tempat_kerja_tuliskan"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"42. Kerja bakti setahun terakhir (Jumlah)"}
                required={true}
                placeholder={"Masukkan kerja bakti dalam setahun terakhir"}
                fieldName={"kerja_bakti_setahun_terakhir_jumlah"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"43. Siskamling setahun terakhir (jumlah)"}
                required={true}
                placeholder={"Masukkan jumlah siskamling setahun terakhir"}
                fieldName={"siskamling_setahun_terakhir_jumlah"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"44. Pesta rakyat/adat setahun terakhir (jumlah)"}
                required={true}
                placeholder={
                  "Masukkan jumlah pesat rakyat/adat setahun terakhir"
                }
                fieldName={"pestarakyat_adat_setahun_terakhir_jumlah"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "45. Menolong warga yang mengalami kematian setahun terakhir (jumlah)"
                }
                required={true}
                placeholder={
                  "Masukkan jumlah menolong warga yang mengalami kematian"
                }
                fieldName={
                  "menolong_warga_yang_mengalami_kematian_keluarga_setahun_terakhir_jumlah"
                }
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
