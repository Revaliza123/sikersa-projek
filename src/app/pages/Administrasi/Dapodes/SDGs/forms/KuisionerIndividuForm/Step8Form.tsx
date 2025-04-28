import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { TableChoices } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  disabilitas: Yup.object().shape({
    cacat_eks_sakit_kusta_pernah_sakit_kusta_dan_dinyatakan_sembuh_oleh_dokter:
      Yup.string(),
    cacat_ganda_cacat_fisik_mental_cacat_fisik_dan_cacat_mental: Yup.string(),
    dipasung: Yup.string(),
    tunadaksa_cacat_tubuh_kelumpuhan_kelainan_ketidaklengkapan_anggota_gerak:
      Yup.string(),
    tunagrahita_cacat_mental_keterbelakangan_mental: Yup.string(),
    tunalaras_eks_sakit_jiwa_gangguan_mengendalikan_emosi_dan_kontrol_sosial:
      Yup.string(),
    tunanetra_buta: Yup.string(),
    tunarungu_tuli: Yup.string(),
    tunarungu_wicara_tuli_bisu: Yup.string(),
    tunawicara_bisu: Yup.string(),
  }),
})

export function Step8Form() {
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
          <h5>DISABILITAS</h5>
          <Row>
            <Col sm>
              <TableChoices
                labelName={"37. Disabilitas"}
                fieldName={"disabilitas"}
                required={true}
                options={[
                  {
                    label: "Tunanetra (buta)",
                    value: "tunanetra_buta",
                    fieldName: "tunanetra_buta",
                  },
                  {
                    label: "Tunarungu (tuli)",
                    value: "tunarungu_tuli",
                    fieldName: "tunarungu_tuli",
                  },
                  {
                    label: "Tunawicara (bisu)",
                    value: "tunawicara_bisu",
                    fieldName: "tunawicara_bisu",
                  },
                  {
                    label: "Tunarungu-tunawicara (Tuli-bisu)",
                    value: "tunarungu_wicara_tuli_bisu",
                    fieldName: "tunarungu_wicara_tuli_bisu",
                  },
                  {
                    label:
                      "Tunadaksa (cacat tubuh): Kelumpuhan/Kelainan/Ketidaklengkapan Anggota Gerak",
                    value:
                      "tunadaksa_cacat_tubuh_kelumpuhan_kelainan_ketidaklengkapan_anggota_gerak",
                    fieldName:
                      "tunadaksa_cacat_tubuh_kelumpuhan_kelainan_ketidaklengkapan_anggota_gerak",
                  },
                  {
                    label: "Tunagrahita (cacat mental)",
                    value: "tunagrahita_cacat_mental_keterbelakangan_mental",
                    fieldName:
                      "tunagrahita_cacat_mental_keterbelakangan_mental",
                  },
                  {
                    label:
                      "Tunalaras (Eks-sakit jiwa, gangguan mengendalikan emosi dan kontrol sosial",
                    value:
                      "tunalaras_eks_sakit_jiwa_gangguan_mengendalikan_emosi_dan_kontrol_sosial",
                    fieldName:
                      "tunalaras_eks_sakit_jiwa_gangguan_mengendalikan_emosi_dan_kontrol_sosial",
                  },
                  {
                    label:
                      "Cacat eks-sakit kusta: Pernah sakit kusta dan dinyatakan sembuh oleh dokter",
                    value:
                      "cacat_eks_sakit_kusta_pernah_sakit_kusta_dan_dinyatakan_sembuh_oleh_dokter",
                    fieldName:
                      "cacat_eks_sakit_kusta_pernah_sakit_kusta_dan_dinyatakan_sembuh_oleh_dokter",
                  },
                  {
                    label: "Cacat ganda (cacat fisik dan mental)",
                    value:
                      "cacat_ganda_cacat_fisik_mental_cacat_fisik_dan_cacat_mental",
                    fieldName:
                      "cacat_ganda_cacat_fisik_mental_cacat_fisik_dan_cacat_mental",
                  },
                  {
                    label: "Dipasung",
                    value: "dipasung",
                    fieldName: "dipasung",
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
