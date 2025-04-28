import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  tujuan_beribadah: Yup.object().shape({
    biaya: Yup.string().required(),
    jenis: Yup.string().required(),
    kemudahan: Yup.string().required(),
    transport_umum: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  tujuan_berobat: Yup.object().shape({
    biaya: Yup.string().required(),
    jenis: Yup.string().required(),
    kemudahan: Yup.string().required(),
    transport_umum: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  tujuan_lahan_pertanian: Yup.object().shape({
    biaya: Yup.string().required(),
    jenis: Yup.string().required(),
    kemudahan: Yup.string().required(),
    transport_umum: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  tujuan_lokasi_pekerjaan_umum: Yup.object().shape({
    biaya: Yup.string().required(),
    jenis: Yup.string().required(),
    kemudahan: Yup.string().required(),
    transport_umum: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  tujuan_rekreasi_terdekat: Yup.object().shape({
    biaya: Yup.string().required(),
    jenis: Yup.string().required(),
    kemudahan: Yup.string().required(),
    transport_umum: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
  tujuan_sekolah: Yup.object().shape({
    biaya: Yup.string().required(),
    jenis: Yup.string().required(),
    kemudahan: Yup.string().required(),
    transport_umum: Yup.string().required(),
    waktu: Yup.string().required(),
  }),
})

export function Step7Form() {
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
          <h5>AKSES PRASARANA DAN SARANA TRANSPORTASI</h5>
          <Row className="mb-2">
            <Col sm>
              <p className="fw-bold mb-1">Note:</p>
              <p className="fw-bold mb-1">
                45 menit = 0.75 jam, 30 menit = 0.5 jam, 15 menit = 0.25 jam,
                &lt;5 menit = 0 jam
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"58. Tujuan : Lokasi pekerjaan utama"}
                fieldName={"tujuan_lokasi_pekerjaan_umum"}
                required={true}
                options={[
                  {
                    label:
                      "Jenis transportasi terlama (1 = Darat, 2 = Air, 3 = Udara)",
                    value: "jenis",
                    fieldName: "jenis",
                  },
                  {
                    label: "Penggunaan transportasi umum (1 = Ya, 2 = Tidak)",
                    value: "transport_umum",
                    fieldName: "transport_umum",
                  },
                  {
                    label: "Waktu tempuh sekali jalan (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Biaya sekali jalan (Rp)",
                    value: "biaya",
                    fieldName: "biaya",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={
                  "59. Tujuan : Lahan pertanian yang sedang diusahakan"
                }
                fieldName={"tujuan_lahan_pertanian"}
                required={false}
                options={[
                  {
                    label:
                      "Jenis transportasi terlama (1 = Darat, 2 = Air, 3 = Udara)",
                    value: "jenis",
                    fieldName: "jenis",
                  },
                  {
                    label: "Penggunaan transportasi umum (1 = Ya, 2 = Tidak)",
                    value: "transport_umum",
                    fieldName: "transport_umum",
                  },
                  {
                    label: "Waktu tempuh sekali jalan (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Biaya sekali jalan (Rp)",
                    value: "biaya",
                    fieldName: "biaya",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"60. Tujuan : Sekolah"}
                fieldName={"tujuan_sekolah"}
                required={true}
                options={[
                  {
                    label:
                      "Jenis transportasi terlama (1 = Darat, 2 = Air, 3 = Udara)",
                    value: "jenis",
                    fieldName: "jenis",
                  },
                  {
                    label: "Penggunaan transportasi umum (1 = Ya, 2 = Tidak)",
                    value: "transport_umum",
                    fieldName: "transport_umum",
                  },
                  {
                    label: "Waktu tempuh sekali jalan (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Biaya sekali jalan (Rp)",
                    value: "biaya",
                    fieldName: "biaya",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"61. Tujuan : Berobat"}
                fieldName={"tujuan_berobat"}
                required={true}
                options={[
                  {
                    label:
                      "Jenis transportasi terlama (1 = Darat, 2 = Air, 3 = Udara)",
                    value: "jenis",
                    fieldName: "jenis",
                  },
                  {
                    label: "Penggunaan transportasi umum (1 = Ya, 2 = Tidak)",
                    value: "transport_umum",
                    fieldName: "transport_umum",
                  },
                  {
                    label: "Waktu tempuh sekali jalan (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Biaya sekali jalan (Rp)",
                    value: "biaya",
                    fieldName: "biaya",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"62. Tujuan : Beribadah mingguan/bulanan/tahunan"}
                fieldName={"tujuan_beribadah"}
                required={true}
                options={[
                  {
                    label:
                      "Jenis transportasi terlama (1 = Darat, 2 = Air, 3 = Udara)",
                    value: "jenis",
                    fieldName: "jenis",
                  },
                  {
                    label: "Penggunaan transportasi umum (1 = Ya, 2 = Tidak)",
                    value: "transport_umum",
                    fieldName: "transport_umum",
                  },
                  {
                    label: "Waktu tempuh sekali jalan (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Biaya sekali jalan (Rp)",
                    value: "biaya",
                    fieldName: "biaya",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"63. Tujuan : Rekreasi terdekat"}
                fieldName={"tujuan_rekreasi_terdekat"}
                required={true}
                options={[
                  {
                    label:
                      "Jenis transportasi terlama (1 = Darat, 2 = Air, 3 = Udara)",
                    value: "jenis",
                    fieldName: "jenis",
                  },
                  {
                    label: "Penggunaan transportasi umum (1 = Ya, 2 = Tidak)",
                    value: "transport_umum",
                    fieldName: "transport_umum",
                  },
                  {
                    label: "Waktu tempuh sekali jalan (jam)",
                    value: "waktu",
                    fieldName: "waktu",
                  },
                  {
                    label: "Biaya sekali jalan (Rp)",
                    value: "biaya",
                    fieldName: "biaya",
                  },
                  {
                    label: "Kemudahan (1 = Mudah atau 2 = Susah)",
                    value: "kemudahan",
                    fieldName: "kemudahan",
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
