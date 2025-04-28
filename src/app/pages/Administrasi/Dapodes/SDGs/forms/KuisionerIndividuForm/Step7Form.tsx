import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  apakah_dalam_setahun_terakhir_ini_ibu_melahirkan: Yup.string(),
  berapa_kali_fasilitas_kesehatan_berikut_didatangi_setahun_terakhir_untuk_pengobatan_perawatan:
    Yup.object().shape({
      apotik: Yup.number(),
      poliklinik_atau_balai_pengobatan: Yup.number(),
      polindes: Yup.number(),
      posbindu: Yup.number(),
      poskesdes: Yup.number(),
      posyandu: Yup.number(),
      puskesmas_dengan_rawat_inap: Yup.number(),
      puskesmas_pembantu: Yup.number(),
      puskesmas_tanpa_rawat_inap: Yup.number(),
      rumah_bersalin: Yup.number(),
      rumah_sakit: Yup.number(),
      rumah_sakit_bersalin: Yup.number(),
      tempat_praktik_dokter: Yup.number(),
      tempat_praktik_dukun_bayi_atau_bersalin_atau_paraji: Yup.number(),
      tempat_praktik_idan: Yup.number(),
      toko_khusus_obat_atau_jamu: Yup.number(),
    }),
  jaminan_sosial_kesehatan: Yup.string().required(),
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
          <h5>KESEHATAN</h5>
          <Row>
            <Col sm>
              <TableInputs
                labelName={
                  "34. Berapa kali fasilitas kesehatan berikut didatangi setahun terakhir untuk pengobatan/perawatan"
                }
                fieldName={
                  "berapa_kali_fasilitas_kesehatan_berikut_didatangi_setahun_terakhir_untuk_pengobatan_perawatan"
                }
                required={true}
                options={[
                  {
                    label: "Rumah Sakit",
                    value: "rumah_sakit",
                    fieldName: "rumah_sakit",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Rumah Sakit Bersalin",
                    value: "rumah_sakit_bersalin",
                    fieldName: "rumah_sakit_bersalin",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Puskesmas dengan Rawat Inap",
                    value: "puskesmas_dengan_rawat_inap",
                    fieldName: "puskesmas_dengan_rawat_inap",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Puskesmas tanpa Rawat Inap",
                    value: "puskesmas_tanpa_rawat_inap",
                    fieldName: "puskesmas_tanpa_rawat_inap",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Puskesmas Pembantu",
                    value: "puskesmas_pembantu",
                    fieldName: "puskesmas_pembantu",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Poliklinik/Balai Pengobatan",
                    value: "poliklinik_atau_balai_pengobatan",
                    fieldName: "poliklinik_atau_balai_pengobatan",
                  },
                  {
                    label: "Tempat Praktik Dokter",
                    value: "tempat_praktik_dokter",
                    fieldName: "tempat_praktik_dokter",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Rumah Bersalin",
                    value: "rumah_bersalin",
                    fieldName: "rumah_bersalin",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Tempat Praktik Bidan",
                    value: "tempat_praktik_idan",
                    fieldName: "tempat_praktik_idan",
                  },
                  {
                    label: "Poskesdes",
                    value: "poskesdes",
                    fieldName: "poskesdes",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Polindes",
                    value: "polindes",
                    fieldName: "polindes",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Apotik",
                    value: "apotik",
                    fieldName: "apotik",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Toko Khusus Obat/Jamu",
                    value: "toko_khusus_obat_atau_jamu",
                    fieldName: "toko_khusus_obat_atau_jamu",
                    type: "number",
                  },
                  {
                    label: "Posyandu",
                    value: "posyandu",
                    fieldName: "posyandu",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Posbindu",
                    value: "posbindu",
                    fieldName: "posbindu",
                    type: "number",
                    placeholder: "Masukkan jumlah",
                  },
                  {
                    label: "Tempat Praktik Dukun Bayi/Bersalin/Paraji",
                    value:
                      "tempat_praktik_dukun_bayi_atau_bersalin_atau_paraji",
                    fieldName:
                      "tempat_praktik_dukun_bayi_atau_bersalin_atau_paraji",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"35. Jaminan Sosial Kesehatan"}
                fieldName={"jaminan_sosial_kesehatan"}
                required={true}
                options={[
                  {
                    label: "Peserta",
                    value: "peserta",
                    fieldName: "jaminan_sosial_kesehatan",
                  },
                  {
                    label: "Bukan Peserta",
                    value: "bukan_peserta",
                    fieldName: "jaminan_sosial_kesehatan",
                  },
                ]}
              />
            </Col>
          </Row>
          {formDataMemoized.jenis_kelamin &&
          formDataMemoized.jenis_kelamin.match(/perempuan/gi) &&
          formDataMemoized.status_pernikahan &&
          (formDataMemoized.status_pernikahan === "Kawin" ||
            formDataMemoized.status_pernikahan === "Cerai Hidup" ||
            formDataMemoized.status_pernikahan === "Cerai Mati") ? (
            <Row>
              <Col sm>
                <Choices
                  labelName={
                    "36. Apakah dalam setahun terakhir ini ibu melahirkan?"
                  }
                  fieldName={"apakah_dalam_setahun_terakhir_ini_ibu_melahirkan"}
                  required={true}
                  options={[
                    {
                      label: "Iya",
                      value: "ya",
                      fieldName:
                        "apakah_dalam_setahun_terakhir_ini_ibu_melahirkan",
                    },
                    {
                      label: "Tidak",
                      value: "tidak",
                      fieldName:
                        "apakah_dalam_setahun_terakhir_ini_ibu_melahirkan",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
