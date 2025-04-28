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
  apakah_ada_penanganan_psikososia_keluarga_terdampak_bencana_penyuluhan_konseling_terapi:
    Yup.string().required(),
  apakah_anda_terkena_dampak_bencana: Yup.string().required(),
  apakah_menerima_pemenuhan_kebutuhan_dasar_saat_bencana_makanan_pakaian_tempat_tinggal:
    Yup.string().required(),
  bagaimana_keterbukaan_desa_terhadap_masukan_yang_telah_disampaikan:
    Yup.string().required(),
  bagaimana_pelayanan_desa_yang_diperoleh: Yup.string().required(),
  dalam_setahun_terakhir_apakah_pernah_memperoleh_pelayanan_desa:
    Yup.string().required(),
  dalam_setahun_terakhir_apakah_pernah_menyampaikan_masukan_saran_kepada_pihak_desa:
    Yup.string().required(),
  dalam_setahun_terakhir_apakah_terjadi_bencana: Yup.string().required(),
  menolong_warga_yang_kecelakaan_setahun_terakhir_jumlah:
    Yup.string().required(),
  menolong_warga_yang_sedang_sakit_setahun_terakhir_jumlah:
    Yup.string().required(),
})

export function Step10Form() {
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
          <h5>PENDIDIKAN</h5>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "46. Menolong warga yang sedang sakit setahun terakhir (jumlah)"
                }
                required={true}
                placeholder={"Masukkan jumlah menolong warga yang sedang sakit"}
                fieldName={
                  "menolong_warga_yang_sedang_sakit_setahun_terakhir_jumlah"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "47. Menolong warga yang mengalami kecelakaan setahun terakhir (jumlah)"
                }
                required={true}
                placeholder={
                  "Masukkan jumlah menolong warga yang mengalami kecelakaan"
                }
                fieldName={
                  "menolong_warga_yang_kecelakaan_setahun_terakhir_jumlah"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={
                  "48. Dalam setahun terakhir apakah pernah memperoleh pelayanan desa?"
                }
                fieldName={
                  "dalam_setahun_terakhir_apakah_pernah_memperoleh_pelayanan_desa"
                }
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName:
                      "dalam_setahun_terakhir_apakah_pernah_memperoleh_pelayanan_desa",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName:
                      "dalam_setahun_terakhir_apakah_pernah_memperoleh_pelayanan_desa",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"49. Bagaimana pelayanan desa yang diperoleh?"}
                fieldName={"bagaimana_pelayanan_desa_yang_diperoleh"}
                required={true}
                options={[
                  {
                    label: "Baik",
                    value: "baik",
                    fieldName: "bagaimana_pelayanan_desa_yang_diperoleh",
                  },
                  {
                    label: "Cukup",
                    value: "cukup",
                    fieldName: "bagaimana_pelayanan_desa_yang_diperoleh",
                  },
                  {
                    label: "Buruk",
                    value: "buruk",
                    fieldName: "bagaimana_pelayanan_desa_yang_diperoleh",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={
                  "50. Pernah menyampaikan pelayanan desa yang diperoleh?"
                }
                fieldName={
                  "dalam_setahun_terakhir_apakah_pernah_menyampaikan_masukan_saran_kepada_pihak_desa"
                }
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName:
                      "dalam_setahun_terakhir_apakah_pernah_menyampaikan_masukan_saran_kepada_pihak_desa",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName:
                      "dalam_setahun_terakhir_apakah_pernah_menyampaikan_masukan_saran_kepada_pihak_desa",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={
                  "51. Bagaimana keterbukaan desa terhadap masukan yang disampaikan?"
                }
                fieldName={
                  "bagaimana_keterbukaan_desa_terhadap_masukan_yang_telah_disampaikan"
                }
                required={true}
                options={[
                  {
                    label: "Baik",
                    value: "baik",
                    fieldName:
                      "bagaimana_keterbukaan_desa_terhadap_masukan_yang_telah_disampaikan",
                  },
                  {
                    label: "Cukup",
                    value: "cukup",
                    fieldName:
                      "bagaimana_keterbukaan_desa_terhadap_masukan_yang_telah_disampaikan",
                  },
                  {
                    label: "Buruk",
                    value: "buruk",
                    fieldName:
                      "bagaimana_keterbukaan_desa_terhadap_masukan_yang_telah_disampaikan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={
                  "52. Dalam setahun terakhir apakah pernah terjadi bencana?"
                }
                fieldName={"dalam_setahun_terakhir_apakah_terjadi_bencana"}
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName: "dalam_setahun_terakhir_apakah_terjadi_bencana",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName: "dalam_setahun_terakhir_apakah_terjadi_bencana",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"53. Apakah anda terkena dampak bencana?"}
                fieldName={"apakah_anda_terkena_dampak_bencana"}
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName: "apakah_anda_terkena_dampak_bencana",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName: "apakah_anda_terkena_dampak_bencana",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={
                  "54. Apakah menerima pemulilhan kebutuhan dasar saat bencana?"
                }
                fieldName={
                  "apakah_menerima_pemenuhan_kebutuhan_dasar_saat_bencana_makanan_pakaian_tempat_tinggal"
                }
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName:
                      "apakah_menerima_pemenuhan_kebutuhan_dasar_saat_bencana_makanan_pakaian_tempat_tinggal",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName:
                      "apakah_menerima_pemenuhan_kebutuhan_dasar_saat_bencana_makanan_pakaian_tempat_tinggal",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={
                  "55. Apakah ada penanganan psikososial keluarga terdampak bencana?"
                }
                fieldName={
                  "apakah_ada_penanganan_psikososia_keluarga_terdampak_bencana_penyuluhan_konseling_terapi"
                }
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "ya",
                    fieldName:
                      "apakah_ada_penanganan_psikososia_keluarga_terdampak_bencana_penyuluhan_konseling_terapi",
                  },
                  {
                    label: "Tidak",
                    value: "tidak",
                    fieldName:
                      "apakah_ada_penanganan_psikososia_keluarga_terdampak_bencana_penyuluhan_konseling_terapi",
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
