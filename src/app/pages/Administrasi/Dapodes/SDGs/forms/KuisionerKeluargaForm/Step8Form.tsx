import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Input, TableChoices } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  jumlah_anggota_keluarga_menggunakan_transportasi_umum_bulan_sebelumnya:
    Yup.string().required(),
  jumlah_anggota_keluarga_menggunakan_transportasi_umum_sebulan_terakhir:
    Yup.string().required(),
  pemanfaat_penerima_program_pemerintah: Yup.object().shape({
    bantuan_lainnya: Yup.string().required(),
    bantuan_pendidikan_anak: Yup.string().required(),
    bantuan_presiden: Yup.string().required(),
    bantuan_sosial_tunai: Yup.string().required(),
    bantuan_umkm: Yup.string().required(),
    bantuan_untuk_pekerja: Yup.string().required(),
    blt_dana_desa: Yup.string().required(),
    program_keluarga_harapan: Yup.string().required(),
  }),
  rata_rata_pengeluaran_satu_keluarga_satu_bulan: Yup.string().required(),
})

export function Step8Form() {
  const { handleSubmit, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    handleSubmit(data)
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
          <h5>LAIN - LAIN</h5>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "64. Berapa jumlah anggota keluarga yang menggunakan transportasi umum dalam sebulan terakhir?"
                }
                required={true}
                placeholder={
                  "Masukkan berapa jumlah anggota keluarga yang menggunakan transportasi umum sebulan terakhir"
                }
                fieldName={
                  "jumlah_anggota_keluarga_menggunakan_transportasi_umum_sebulan_terakhir"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "65. Berapa jumlah anggota keluarga yang menggunakan transportasi umum pada bulan sebelumnya?"
                }
                required={true}
                placeholder={
                  "Masukkan berapa jumlah anggota keluarga yang menggunakan transportasi umum bulan sebelumnya"
                }
                fieldName={
                  "jumlah_anggota_keluarga_menggunakan_transportasi_umum_bulan_sebelumnya"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableChoices
                labelName={"66. Pemanfaat/penerima program pemerintah"}
                fieldName={"pemanfaat_penerima_program_pemerintah"}
                required={true}
                options={[
                  {
                    label: "BLT Dana desa",
                    value: "blt_dana_desa",
                    fieldName: "blt_dana_desa",
                  },
                  {
                    label: "Program Keluarga Harapan/PKH",
                    value: "program_keluarga_harapan",
                    fieldName: "program_keluarga_harapan",
                  },
                  {
                    label: "Bantuan Sosial Tunai/BST",
                    value: "bantuan_sosial_tunai",
                    fieldName: "bantuan_sosial_tunai",
                  },
                  {
                    label: "Bantuan Presiden/Banpres",
                    value: "bantuan_presiden",
                    fieldName: "bantuan_presiden",
                  },
                  {
                    label: "Bantuan UMKM",
                    value: "bantuan_umkm",
                    fieldName: "bantuan_umkm",
                  },
                  {
                    label: "Bantuan untuk pekerja",
                    value: "bantuan_untuk_pekerja",
                    fieldName: "bantuan_untuk_pekerja",
                  },
                  {
                    label: "Bantuan pendidikan anak",
                    value: "bantuan_pendidikan_anak",
                    fieldName: "bantuan_pendidikan_anak",
                  },
                  {
                    label: "Lainnya",
                    value: "bantuan_lainnya",
                    fieldName: "bantuan_lainnya",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "67. Berapa rata - rata pengeluaran satu keluarga dalam sebulan?"
                }
                required={true}
                placeholder={
                  "Masukkan berapa rata-rata pengeluaran satu keluarga dalam sebulan"
                }
                fieldName={"rata_rata_pengeluaran_satu_keluarga_satu_bulan"}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
