import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, Input } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { SDGSKuesionerDesaField } from "@app/interface/sdgs-kuesioner.interface"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  komputer_pc_laptop: Yup.string().required(),
  fasilitas_internet: Yup.string().required(),
  kecepatan_akses_internet: Yup.string().required(),
  sistem_informasi_desa: Yup.string().required(),
  sistem_keuangan_desa: Yup.string().required(),
  jumlah_surat_keterangan_tidak_mampu_miskin_setahun_terakhir:
    Yup.number().required(),
  jumlah_penduduk_yang_belum_merekam_ektp: Yup.number().required(),
  jumlah_penduduk_yang_belum_tercatat_di_kk: Yup.number().required(),
  pelayanan_desa_setahun_terakhir: Yup.string().required(),
  ketersediaan_data_statistik_desa: Yup.string().required(),
  jumlah_petugas_statistik_desa: Yup.string().required(),
  ketersediaan_data_sdgs_desa_tahunan: Yup.string().required(),
  apakah_data_sdgs_desa_sudah_digunakan_untuk_rkpdes_dan_apbdes_setahun_terakhir:
    Yup.string().when("ketersediaan_data_sdgs_desa_tahunan", {
      is: (value: string) => value === "Ada",
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }),
  pendamping_desa: Yup.object().shape({
    nama: Yup.string().required(),
    jenis_kelamin: Yup.string().required(),
    no_hp: Yup.string().required(),
    status_terakhir_idm_desa: Yup.string().required(),
  }),
})

export function Step7Form() {
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
          <h5>LAYANAN</h5>
          <Row>
            <Col sm>
              <Choices
                labelName={"44. Komputer/PC/Laptop"}
                required={true}
                fieldName={"komputer_pc_laptop"}
                options={[
                  {
                    label: "Digunakan",
                    value: "Digunakan",
                    fieldName: "komputer_pc_laptop",
                  },
                  {
                    label: "Jarang digunakan",
                    value: "Jarang digunakan",
                    fieldName: "komputer_pc_laptop",
                  },
                  {
                    label: "Tidak digunakan",
                    value: "Tidak digunakan",
                    fieldName: "komputer_pc_laptop",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "komputer_pc_laptop",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"45. Fasilitas Internet"}
                required={true}
                fieldName={"fasilitas_internet"}
                options={[
                  {
                    label: "Berfungsi",
                    value: "Berfungsi",
                    fieldName: "fasilitas_internet",
                  },
                  {
                    label: "Jarang berfungsi",
                    value: "Jarang berfungsi",
                    fieldName: "fasilitas_internet",
                  },
                  { label: "Tidak berfungsi", value: "Tidak berfungsi" },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "fasilitas_internet",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"46. Kecepatan Akses Internet"}
                required={true}
                fieldName={"kecepatan_akses_internet"}
                options={[
                  {
                    label: "Cepat",
                    value: "Cepat",
                    fieldName: "kecepatan_akses_internet",
                  },
                  {
                    label: "Sedang",
                    value: "Sedang",
                    fieldName: "kecepatan_akses_internet",
                  },
                  {
                    label: "Lambat",
                    value: "Lambat",
                    fieldName: "kecepatan_akses_internet",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"47. Sistem Informasi Desa"}
                required={true}
                fieldName={"sistem_informasi_desa"}
                options={[
                  {
                    label: "Ada dan diperbarui",
                    value: "Ada dan diperbarui",
                    fieldName: "sistem_informasi_desa",
                  },
                  {
                    label: "Ada tapi tidak diperbarui",
                    value: "Ada tapi tidak diperbarui",
                    fieldName: "sistem_informasi_desa",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "sistem_informasi_desa",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"48. Sistem Keuangan Desa"}
                required={true}
                fieldName={"sistem_keuangan_desa"}
                options={[
                  {
                    label: "Ada dan diperbarui",
                    value: "Ada dan diperbarui",
                    fieldName: "sistem_keuangan_desa",
                  },
                  {
                    label: "Ada tapi tidak diperbarui",
                    value: "Ada tapi tidak diperbarui",
                    fieldName: "sistem_keuangan_desa",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "sistem_keuangan_desa",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={
                  "49. Jumlah surat keterangan tidak mampu/miskin setahun terakhir"
                }
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "jumlah_surat_keterangan_tidak_mampu_miskin_setahun_terakhir"
                }
                type={"number"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"50. Jumlah penduduk yang belum merekam eKTP"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"jumlah_penduduk_yang_belum_merekam_ektp"}
                type={"number"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"51. Jumlah penduduk yang belum tercatat di KK"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"jumlah_penduduk_yang_belum_tercatat_di_kk"}
                type={"number"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Choices
                labelName={"52. Pelayanan desa setahun terakhir"}
                required={true}
                fieldName={"pelayanan_desa_setahun_terakhir"}
                options={[
                  {
                    label: "Baik",
                    value: "Baik",
                    fieldName: "pelayanan_desa_setahun_terakhir",
                  },
                  {
                    label: "Cukup baik",
                    value: "Cukup baik",
                    fieldName: "pelayanan_desa_setahun_terakhir",
                  },
                  {
                    label: "Buruk",
                    value: "Buruk",
                    fieldName: "pelayanan_desa_setahun_terakhir",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Choices
                labelName={"53. Ketersediaan data statistik desa"}
                required={true}
                fieldName={"ketersediaan_data_statistik_desa"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "ketersediaan_data_statistik_desa",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "ketersediaan_data_statistik_desa",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"54. Jumlah petugas statistik desa"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"jumlah_petugas_statistik_desa"}
                type={"number"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Choices
                labelName={"55. Ketersediaan data SDGs Desa tahunan"}
                required={true}
                fieldName={"ketersediaan_data_sdgs_desa_tahunan"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "ketersediaan_data_sdgs_desa_tahunan",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "ketersediaan_data_sdgs_desa_tahunan",
                  },
                ]}
              />
            </Col>
          </Row>

          {methods.watch("ketersediaan_data_sdgs_desa_tahunan") === "Ada" ? (
            <Row>
              <Col sm>
                <Choices
                  labelName={
                    "56. Apakah data SDGs Desa sudah digunakan RKPDes dan APBDes setahun terakhir?"
                  }
                  required={true}
                  fieldName={
                    "apakah_data_sdgs_desa_sudah_digunakan_untuk_rkpdes_dan_apbdes_setahun_terakhir"
                  }
                  options={[
                    {
                      label: "Ya",
                      value: "Ya",
                      fieldName:
                        "apakah_data_sdgs_desa_sudah_digunakan_untuk_rkpdes_dan_apbdes_setahun_terakhir",
                    },
                    {
                      label: "Tidak",
                      value: "Tidak",
                      fieldName:
                        "apakah_data_sdgs_desa_sudah_digunakan_untuk_rkpdes_dan_apbdes_setahun_terakhir",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          <h5>PENDAMPING DESA</h5>
          <Row>
            <Col sm>
              <Input
                labelName={"57. Nama"}
                required={true}
                placeholder={"Masukkan nama"}
                fieldName={"pendamping_desa.nama"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Choices
                labelName={"58. Jenis kelamin"}
                required={true}
                fieldName={"pendamping_desa.jenis_kelamin"}
                options={[
                  {
                    label: "Laki-laki",
                    value: "Laki-laki",
                    fieldName: "pendamping_desa.jenis_kelamin",
                  },
                  {
                    label: "Perempuan",
                    value: "Perempuan",
                    fieldName: "pendamping_desa.jenis_kelamin",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"59. No. HP"}
                required={true}
                placeholder={"Masukkan nomor hp. Contoh: +6281234567890"}
                fieldName={"pendamping_desa.no_hp"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"60. Status Terakhir IDM Desa"}
                required={true}
                fieldName={"pendamping_desa.status_terakhir_idm_desa"}
                options={[
                  {
                    label: "Desa Sangat Tertinggal",
                    value: "Desa Sangat Tertinggal",
                    fieldName: "pendamping_desa.status_terakhir_idm_desa",
                  },
                  {
                    label: "Desa Tertinggal",
                    value: "Desa Tertinggal",
                    fieldName: "pendamping_desa.status_terakhir_idm_desa",
                  },
                  { label: "Desa Berkembang", value: "Desa Berkembang" },
                  {
                    label: "Desa Maju",
                    value: "Desa Maju",
                    fieldName: "pendamping_desa.status_terakhir_idm_desa",
                  },
                  {
                    label: "Desa Mandiri",
                    value: "Desa Mandiri",
                    fieldName: "pendamping_desa.status_terakhir_idm_desa",
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
