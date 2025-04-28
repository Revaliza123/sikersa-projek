import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, Input, Select } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  jaminan_sosial_ketenagakerjaan: Yup.string().required(),
  kondisi_pekerjaan: Yup.string().required(),
  pekerjaan_utama: Yup.string().required(),
  pekerjaan_utama_lainnya: Yup.string().when("pekerjaan_utama", {
    is: (value: string) => value && value.match(/(lainnya)/gi),
    then: Yup.string(),
  }),
  penghasilan_setahun_terakhir: Yup.number().required(),
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
          <h5>PEKERJAAN</h5>
          <Row>
            <Col sm>
              <Choices
                labelName={"28. Kondisi Pekerjaan"}
                fieldName={"kondisi_pekerjaan"}
                required={true}
                options={[
                  {
                    label: "Bersekolah",
                    value: "bersekolah",
                    fieldName: "kondisi_pekerjaan",
                  },
                  {
                    label: "Ibu rumah tangga",
                    value: "ibu_rumah_tangga",
                    fieldName: "kondisi_pekerjaan",
                  },
                  {
                    label: "Tidak bekerja",
                    value: "tidak_bekerja",
                    fieldName: "kondisi_pekerjaan",
                  },
                  {
                    label: "Sedang mencari pekerjaan",
                    value: "sedang_mencari_pekerjaan",
                    fieldName: "kondisi_pekerjaan",
                  },
                  {
                    label: "Bekerja",
                    value: "bekerja",
                    fieldName: "kondisi_pekerjaan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"29. Pekerjaan Utama"}
                fieldName={"pekerjaan_utama"}
                required={true}
                placeholder={"Pilih pekerjaan utama"}
                options={[
                  {
                    label: "Petani pemilik lahan",
                    value: "petani_pemilik_lahan",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Petani penyewa",
                    value: "petani_penyewa",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Buruh tani",
                    value: "buruh_tani",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Nelayan pemilik kapal/perahu",
                    value: "nelayan_pemilik_kapal_atau_perahu",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Nelayan penyewa perahu/kapal",
                    value: "nelayan_penyewa_perahu_atau_kapal",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Buruh nelayan",
                    value: "buruh_nelayan",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Guru",
                    value: "guru",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Guru agama",
                    value: "guru_agama",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Pedagang",
                    value: "pedagang",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Pengolahan/industri",
                    value: "pengolahan_atau_industri",
                    fieldName: "pekerjaan_utama",
                  },
                  { label: "PNS", value: "pns", fieldName: "pekerjaan_utama" },
                  { label: "TNI", value: "tni", fieldName: "pekerjaan_utama" },
                  {
                    label: "Perangkat desa",
                    value: "perangkat_desa",
                    fieldName: "pekerjaan_utama",
                  },
                  {
                    label: "Pegawai kantor desa",
                    value: "pegawai_kantor_desa",
                    fieldName: "pekerjaan_utama",
                  },
                  { label: "TKI", value: "tki", fieldName: "pekerjaan_utama" },
                  {
                    label: "Lainnya, sebutkan",
                    value: "lainnya",
                    fieldName: "pekerjaan_utama",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"30. Jaminan Sosial Ketenagakerjaan"}
                fieldName={"jaminan_sosial_ketenagakerjaan"}
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName: "jaminan_sosial_ketenagakerjaan",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName: "jaminan_sosial_ketenagakerjaan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"31. Penghasilan setahun terakhir (Rp)"}
                fieldName={"penghasilan_setahun_terakhir"}
                required={true}
                placeholder={"Masukkan penghasilan setahun tearkhir"}
                type={"currency"}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
