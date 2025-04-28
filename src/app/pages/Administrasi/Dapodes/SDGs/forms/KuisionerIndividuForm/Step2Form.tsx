import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, Input, Select } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"
import moment from "moment"

const validationSchema = Yup.object().shape({
  agama: Yup.string().required(),
  berapa_usia_saat_pertama_kali_menikah_tahun: Yup.string().required(),
  jenis_kelamin: Yup.string().required(),
  nama: Yup.string().required(),
  nik: Yup.string().min(16).max(16).required(),
  nomor_kartu_keluarga: Yup.string().required(),
  status_pernikahan: Yup.string().required(),
  suku_bangsa: Yup.string().required(),
  tanggal_lahir: Yup.string().required(),
  tempat_lahir: Yup.string().required(),
  usia: Yup.number().required(),
  warganegara: Yup.string().required(),
})

export function Step2Form() {
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
                labelName={"7. Nomor Kartu Keluarga"}
                required={true}
                placeholder={"Masukkan nomor kartu keluarga"}
                fieldName={"nomor_kartu_keluarga"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"8. NIK"}
                required={true}
                placeholder={"Masukkan nik"}
                fieldName={"nik"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"9. Nama"}
                required={true}
                placeholder={"Masukkan nama"}
                fieldName={"nama"}
              />
            </Col>
            <Col sm>
              <Choices
                labelName={"10. Jenis Kelamin"}
                fieldName={"jenis_kelamin"}
                required={true}
                options={[
                  {
                    label: "Laki-Laki",
                    value: "Laki-Laki",
                    fieldName: "jenis_kelamin",
                  },
                  {
                    label: "Perempuan",
                    value: "Perempuan",
                    fieldName: "jenis_kelamin",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"11. Tempat Lahir"}
                required={true}
                placeholder={"Masukkan tempat lahir"}
                fieldName={"tempat_lahir"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"12. Tanggal Lahir"}
                required={true}
                placeholder={"Masukkan tanggal lahir"}
                fieldName={"tanggal_lahir"}
                additionalOptions={{
                  max: moment().format("yyyy-MM-DD"),
                }}
                type={"date"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"13. Usia(tahun)"}
                required={true}
                placeholder={"Masukkan usia"}
                fieldName={"usia"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"14. Status Pernikahan"}
                fieldName={"status_pernikahan"}
                required={true}
                options={[
                  {
                    label: "Belum Kawin",
                    value: "Belum Kawin",
                    fieldName: "jenis_pernikahan",
                  },
                  {
                    label: "Kawin",
                    value: "Kawin",
                    fieldName: "jenis_pernikahan",
                  },
                  {
                    label: "Cerai Hidup",
                    value: "Cerai Hidup",
                    fieldName: "jenis_pernikahan",
                  },
                  {
                    label: "Cerai Mati",
                    value: "Cerai Mati",
                    fieldName: "jenis_pernikahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"15. Berapa usia saat pertama kali menikah (tahun)?"}
                required={true}
                placeholder={"Masukkan usia pertama menikah"}
                fieldName={"berapa_usia_saat_pertama_kali_menikah_tahun"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"16. Agama"}
                fieldName={"agama"}
                required={true}
                placeholder={"Pilh agama"}
                options={[
                  { label: "Buddha", value: "buddha", fieldName: "agama" },
                  { label: "Hindu", value: "hindu", fieldName: "agama" },
                  { label: "Islam", value: "islam", fieldName: "agama" },
                  { label: "Katolik", value: "katolik", fieldName: "agama" },
                  { label: "Kristen", value: "kristen", fieldName: "agama" },
                  {
                    label: "Khonghucu",
                    value: "khonghucu",
                    fieldName: "agama",
                  },
                  { label: "Lainnya", value: "lainnya", fieldName: "agama" },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"17. Suku Bangsa"}
                required={true}
                placeholder={"Masukkan suku bangsa"}
                fieldName={"suku_bangsa"}
              />
            </Col>
            <Col sm>
              <Select
                labelName={"18. Warganegara"}
                required={true}
                placeholder={"Masukkan warganegara"}
                fieldName={"warganegara"}
                options={[
                  { label: "WNI", value: "WNI", fieldName: "warga_negara" },
                  { label: "WNA", value: "WNA", fieldName: "warga_negara" },
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
