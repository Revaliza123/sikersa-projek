import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Checkboxes, Choices, Input, Select, TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { SDGSKuesionerDesaField } from "@app/interface/sdgs-kuesioner.interface"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  pengadaan_dan_publikasi: Yup.object().shape({
    jumlah_pengadaan_barang_dan_jasa_setahun_terakhir: Yup.number().required(),
    jumlah_publikasi_terbuka: Yup.number().required(),
  }),
  posyandu: Yup.object().shape({
    apakah_posyandu_menangani_kesehatan_jiwa: Yup.string().required(),
    jumlah_balita_terdaftar: Yup.number().required(),
    jumlah_bayi_mendapat_asi_eksklusif: Yup.number().required(),
    jumlah_bayi_meninggal: Yup.number().required(),
    jumlah_ibu_hamil_terdaftar: Yup.number().required(),
    jumlah_ibu_melahirkan: Yup.number().required(),
    jumlah_ibu_meninggal_karena_melahirkan: Yup.number().required(),
    jumlah_ibu_terdaftar: Yup.number().required(),
    jumlah_posyandu_di_desa: Yup.number().required(),
  }),
  lingkungan: Yup.object().shape({
    jumlah_kejadian_penangkapan_ikan_ilegal: Yup.number().required(),
    jumlah_omset_wisata_tahun_sebelumnya: Yup.number().required(),
    jumlah_satwa_terancam_punah_setahun_terakhir: Yup.number().required(),
    jumlah_satwa_terancam_punah_tahun_sebelumnya: Yup.number().required(),
    jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_setahun_terakhir:
      Yup.number().required(),
    jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_tahun_sebelumnya:
      Yup.number().required(),
    kawasan_konservasi_perairan: Yup.string().required(),
    luas_kawasan_konservasi_perairan: Yup.number().when(
      "lingkungan.kawasan_konservasi_perairan",
      {
        is: (value: string) => value && value.match(/(ada)/gi),
        then: Yup.number().required(),
      }
    ),
    hutan_konservasi_di_desa: Yup.string().required(),
    luas_kerusakan_hutan_konservasi_setahun_terakhir: Yup.number().when(
      "lingkungan.hutan_konservasi_di_desa",
      {
        is: (value: string) => value && value.match(/(ada)/gi),
        then: Yup.number().required(),
      }
    ),
    luas_kerusakan_hutan_konservasi_tahun_sebelumnya: Yup.number().when(
      "lingkungan.hutan_konservasi_di_desa",
      {
        is: (value: string) => value && value.match(/(ada)/gi),
        then: Yup.number().required(),
      }
    ),
    apakah_ada_populasi_satwa_terancam_punah_saat_ini: Yup.array().of(
      Yup.string()
    ),
    total_keuntungan_wisata_tahun_sebelumnya: Yup.number().required(),
  }),
})

export function Step14Form() {
  const { handleSubmit, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized || SDGSKuesionerDesaField,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    handleSubmit(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"79. Pengadaan dan Publikasi"}
                required={true}
                fieldName={"pengadaan_dan_publikasi"}
                options={[
                  {
                    label: "Jumlah pengadaan barang dan jasa setahun terakhir",
                    value: "jumlah_pengadaan_barang_dan_jasa_setahun_terakhir",
                    fieldName:
                      "jumlah_pengadaan_barang_dan_jasa_setahun_terakhir",
                    type: "number",
                  },
                  {
                    label:
                      "Jumlah publikasi terbuka (papan, website, dll) pengadaan barang dan jasa",
                    value: "jumlah_publikasi_terbuka",
                    fieldName: "jumlah_publikasi_terbuka",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Posyandu</h5>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"80. Jumlah posyandu di desa"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_posyandu_di_desa"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"81. Jumlah ibu terdaftar"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_ibu_terdaftar"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"82. Jumlah ibu hamil terdaftar"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_ibu_hamil_terdaftar"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"83. Jumlah ibu melahirkan"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_ibu_melahirkan"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"84. Jumlah ibu meninggal karena melahirkan"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_ibu_meninggal_karena_melahirkan"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"85. Jumlah balita terdaftar"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_balita_terdaftar"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"86. Jumlah bayi mendapat ASI eksklusif"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_bayi_mendapat_asi_eksklusif"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"87. Jumlah bayi meninggal"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"posyandu.jumlah_bayi_meninggal"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"88. Apakah posyandu menangani kesehatan jiwa?"}
                required={true}
                fieldName={"posyandu.apakah_posyandu_menangani_kesehatan_jiwa"}
                options={[
                  {
                    label: "Ya",
                    value: "Ya",
                    fieldName:
                      "posyandu.apakah_posyandu_menangani_kesehatan_jiwa",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName:
                      "posyandu.apakah_posyandu_menangani_kesehatan_jiwa",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Lingkungan</h5>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"89. Hutan konservasi di desa"}
                required={true}
                fieldName={"lingkungan.hutan_konservasi_di_desa"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "lingkungan.hutan_konservasi_di_desa",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "lingkungan.hutan_konservasi_di_desa",
                  },
                ]}
              />
            </Col>
          </Row>
          {methods
            .watch("lingkungan.hutan_konservasi_di_desa")
            .match(/(ada)/gi) ? (
            <>
              <Row>
                <Col sm>
                  <Input
                    labelName={
                      "90. Luas kerusakan hutan konservasi tahun sebelumnya"
                    }
                    required={true}
                    placeholder={"Masukkan jumlah"}
                    fieldName={
                      "lingkungan.luas_kerusakan_hutan_konservasi_tahun_sebelumnya"
                    }
                    type={"number"}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Input
                    labelName={
                      "91. Luas kerusakan hutan konservasi setahun terakhir"
                    }
                    required={true}
                    placeholder={"Masukkan jumlah"}
                    fieldName={
                      "lingkungan.luas_kerusakan_hutan_konservasi_setahun_terakhir"
                    }
                    type={"number"}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Checkboxes
                    labelName={
                      "92. Apakah ada populasi satwa terancam punah saat ini?"
                    }
                    fieldName={
                      "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini"
                    }
                    required={false}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Harimau Sumatera",
                        value: "Harimau Sumatera",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Gajah Sumatera",
                        value: "Gajah Sumatera",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Badak",
                        value: "Badak",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Banteng",
                        value: "Banteng",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Owa",
                        value: "Owa",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Orangutan",
                        value: "Orangutan",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Bekantan",
                        value: "Bekantan",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Komodo",
                        value: "Komodo",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Jalak Bali",
                        value: "Jalak Bali",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Maleo",
                        value: "Maleo",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Babi Rusa",
                        value: "Babi Rusa",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Anoa",
                        value: "Anoa",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Elang",
                        value: "Elang",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Tarsius",
                        value: "Tarsius",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Monyet Hitam Sulawesi",
                        value: "Monyet Hitam Sulawesi",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                      {
                        label: "Tidak Ada",
                        value: "Tidak Ada",
                        fieldName:
                          "lingkungan.apakah_ada_populasi_satwa_terancam_punah_saat_ini",
                      },
                    ]}
                  />
                </Col>
              </Row>
            </>
          ) : null}
          <Row>
            <Col sm>
              <Input
                labelName={"93. Jumlah satwa terancam punah tahun sebelumnya"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "lingkungan.jumlah_satwa_terancam_punah_tahun_sebelumnya"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"94. Jumlah satwa terancam punah setahun terakhir"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "lingkungan.jumlah_satwa_terancam_punah_setahun_terakhir"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"95. Kawasan konservasi perairan"}
                required={true}
                fieldName={"lingkungan.kawasan_konservasi_perairan"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "lingkungan.kawasan_konservasi_perairan",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "lingkungan.kawasan_konservasi_perairan",
                  },
                ]}
              />
            </Col>
          </Row>
          {methods
            .watch("lingkungan.kawasan_konservasi_perairan")
            .match(/(ada)/gi) ? (
            <Row>
              <Col sm>
                <Input
                  labelName={"96. Luas kawasan konservasi perairan (m2)"}
                  required={true}
                  placeholder={"Masukkan luas"}
                  fieldName={"lingkungan.luas_kawasan_konservasi_perairan"}
                  type={"number"}
                  helperText={
                    "Untuk angka presisi dapat gunakan titik, Contoh: 10.5"
                  }
                />
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col sm>
              <Input
                labelName={"97. Jumlah kejadian penangkapan ikan ilegal"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"lingkungan.jumlah_kejadian_penangkapan_ikan_ilegal"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "98. Jumlah warga dihukum karena pelanggaran lingkungan hidup tahun sebelumnya"
                }
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "lingkungan.jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_tahun_sebelumnya"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "99. Jumlah warga dihukum karena pelanggaran lingkungan hidup setahun terakhir"
                }
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "lingkungan.jumlah_warga_dihukum_karena_pelanggaran_lingkungan_hidup_setahun_terakhir"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"100. Jumlah omzet wisata tahun sebelumnya"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"lingkungan.jumlah_omset_wisata_tahun_sebelumnya"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"101. Total keuntungan wisata tahun sebelumnya"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "lingkungan.total_keuntungan_wisata_tahun_sebelumnya"
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
