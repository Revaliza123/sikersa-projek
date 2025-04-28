import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Select } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  energi_untuk_memasak: Yup.string().required(),
  energi_untuk_memasak_lainnya: Yup.string().when("energi_untuk_memasak", {
    is: (value: string) => value && value.match(/(lainnya)/gi),
    then: Yup.string().required(),
  }),
  fasilitas_buang_air_besar: Yup.string().required(),
  fasilitas_buang_air_besar_lainnya: Yup.string().when(
    "fasilitas_buang_air_besar",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
  ),
  fasilitas_mck: Yup.string().required(),
  rumah_berada_di_sutet: Yup.string().required(),
  rumah_di_bantaran_sungai: Yup.string().required(),
  rumah_di_lereng_bukit_gunung: Yup.string().required(),
  secara_keseluruhan_kondisi_rumah: Yup.string().required(),
  sumber_air_mandi_terbanyak: Yup.string().required(),
  sumber_air_mandi_terbanyak_lainnya: Yup.string().when(
    "sumber_air_mandi_terbanyak",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
  ),
  sumber_air_minum_terbanyak: Yup.string().required(),
  sumber_air_minum_terbanyak_lainnya: Yup.string().when(
    "sumber_air_minum_terbanyak",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
  ),
  sumber_kayu_bakar: Yup.string().required(),
  sumber_kayu_bakar_lainnya: Yup.string().when("sumber_kayu_bakar", {
    is: (value: string) => value && value.match(/(lainnya)/gi),
    then: Yup.string().required(),
  }),
  tempat_pembuangan_limbah_cair: Yup.string().required(),
  tempat_pembuangan_limbah_cair_lainnya: Yup.string().when(
    "tempat_pembuangan_limbah_cair",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
  ),
  tempat_pembuangan_sampah: Yup.string().required(),
})

export function Step3Form() {
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
          <h5>DESKRIPSI KELUARGA & PEMUKIMAN</h5>
          <Row>
            <Col sm>
              <Select
                labelName={"22. Energi untuk memasak"}
                fieldName={"energi_untuk_memasak"}
                required={true}
                placeholder={"Pilih energi untuk memasak"}
                options={[
                  {
                    label: "Gas kota/LPG/biogas",
                    value: "Gas kota/LPG/biogas",
                    fieldName: "energi_untuk_memasak",
                  },
                  {
                    label: "Minyak tanah/batu bara",
                    value: "Minyak tanah/batu bara",
                    fieldName: "energi_untuk_memasak",
                  },
                  {
                    label: "Kayu bakar",
                    value: "Kayu bakar",
                    fieldName: "energi_untuk_memasak",
                  },
                  {
                    label: "lainnya",
                    value: "lainnya",
                    fieldName: "energi_untuk_memasak",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={
                  "23. Jika menggunakan kayu bakar untuk memasak, sumber kayu bakar"
                }
                fieldName={"sumber_kayu_bakar"}
                required={false}
                placeholder={"Pilih sumber kayu bakar"}
                options={[
                  {
                    label: "Pembelian",
                    value: "Pembelian",
                    fieldName: "sumber_kayu_bakar",
                  },
                  {
                    label: "Diambil dari hutan",
                    value: "Diambil dari hutan",
                    fieldName: "sumber_kayu_bakar",
                  },
                  {
                    label: "Diambil di luar/bukan hutan",
                    value: "Diambil di luar/bukan hutan",
                    fieldName: "sumber_kayu_bakar",
                  },
                  {
                    label: "Lainnya (sebutkan)",
                    value: "Lainnya (sebutkan)",
                    fieldName: "sumber_kayu_bakar",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"24. Tempat pembuangan sampah"}
                fieldName={"tempat_pembuangan_sampah"}
                required={true}
                placeholder={"Pilih tempat pembuangan sampah"}
                options={[
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "tempat_pembuangan_sampah",
                  },
                  {
                    label: "Di kebun/sungai/drainase",
                    value: "Di kebun/sungai/drainase",
                    fieldName: "tempat_pembuangan_sampah",
                  },
                  {
                    label: "Dibakar",
                    value: "Dibakar",
                    fieldName: "tempat_pembuangan_sampah",
                  },
                  {
                    label: "Tempat sampah",
                    value: "Tempat sampah",
                    fieldName: "tempat_pembuangan_sampah",
                  },
                  {
                    label: "Tempat sampah diangkut reguler",
                    value: "Tempat sampah diangkut reguler",
                    fieldName: "tempat_pembuangan_sampah",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"25. Fasilitas MCK"}
                fieldName={"fasilitas_mck"}
                required={true}
                placeholder={"Pilih fasilitas mck"}
                options={[
                  {
                    label: "Sendiri",
                    value: "Sendiri",
                    fieldName: "fasilitas_mck",
                  },
                  {
                    label: "Berkelompok/tetangga",
                    value: "Berkelompok/tetangga",
                    fieldName: "fasilitas_mck",
                  },
                  {
                    label: "MCK umum",
                    value: "MCK umum",
                    fieldName: "fasilitas_mck",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "fasilitas_mck",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"26. Sumber air mandi terbanyak dari"}
                fieldName={"sumber_air_mandi_terbanyak"}
                required={true}
                placeholder={"Pilih sumber air mandi"}
                options={[
                  {
                    label: "Ledeng/perpipaan berbayar/air isi ulang/kemasan",
                    value: "Ledeng/perpipaan berbayar/air isi ulang/kemasan",
                    fieldName: "sumber_air_mandi_terbanyak",
                  },
                  {
                    label: "Perpipaan",
                    value: "Perpipaan",
                    fieldName: "sumber_air_mandi_terbanyak",
                  },
                  {
                    label: "Mata air/sumur",
                    value: "Mata air/sumur",
                    fieldName: "sumber_air_mandi_terbanyak",
                  },
                  {
                    label: "Sungai, danau, embung",
                    value: "Sungai, danau, embung",
                    fieldName: "sumber_air_mandi_terbanyak",
                  },
                  {
                    label: "Tadah air hujan",
                    value: "Tadah air hujan",
                    fieldName: "sumber_air_mandi_terbanyak",
                  },
                  {
                    label: "lainnya",
                    value: "lainnya",
                    fieldName: "sumber_air_mandi_terbanyak",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"27. Fasilitas buang air besar"}
                fieldName={"fasilitas_buang_air_besar"}
                required={true}
                placeholder={"Pilih fasilitas buang air besar"}
                options={[
                  {
                    label: "Jamban sendiri",
                    value: "Jamban sendiri",
                    fieldName: "fasilitas_buang_air_besar",
                  },
                  {
                    label: "Jamban bersama/tetangga",
                    value: "Jamban bersama/tetangga",
                    fieldName: "fasilitas_buang_air_besar",
                  },
                  {
                    label: "Jamban umum",
                    value: "Jamban umum",
                    fieldName: "fasilitas_buang_air_besar",
                  },
                  {
                    label: "lainnya",
                    value: "lainnya",
                    fieldName: "fasilitas_buang_air_besar",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"28. Sumber air minum terbanyak dari"}
                fieldName={"sumber_air_minum_terbanyak"}
                required={true}
                placeholder={"Pilih sumber air minum"}
                options={[
                  {
                    label: "Ledeng/perpipaan berbayar/air isi ulang/kemasan",
                    value: "Ledeng/perpipaan berbayar/air isi ulang/kemasan",
                    fieldName: "sumber_air_minum_terbanyak",
                  },
                  {
                    label: "Mata air/perpipaan/sumur",
                    value: "Mata air/perpipaan/sumur",
                    fieldName: "sumber_air_minum_terbanyak",
                  },
                  {
                    label: "Sungai, danau, embung",
                    value: "Sungai, danau, embung",
                    fieldName: "sumber_air_minum_terbanyak",
                  },
                  {
                    label: "Tadah air hujan",
                    value: "Tadah air hujan",
                    fieldName: "sumber_air_minum_terbanyak",
                  },
                  {
                    label: "lainnya",
                    value: "lainnya",
                    fieldName: "sumber_air_minum_terbanyak",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"29. Tempat pembuangan limbah cair"}
                fieldName={"tempat_pembuangan_limbah_cair"}
                required={true}
                placeholder={"Pilih tempat pembuangan limbah cair"}
                options={[
                  {
                    label: "Tangki/instalasi/pengelolaan limbah",
                    value: "Tangki/instalasi/pengelolaan limbah",
                    fieldName: "tempat_pembuangan_limbah_cair",
                  },
                  {
                    label: "Sawah/kolam/sungai/drainase/laut",
                    value: "Sawah/kolam/sungai/drainase/laut",
                    fieldName: "tempat_pembuangan_limbah_cair",
                  },
                  {
                    label: "Lubang di tanah",
                    value: "Lubang di tanah",
                    fieldName: "tempat_pembuangan_limbah_cair",
                  },
                  {
                    label: "lainnya",
                    value: "lainnya",
                    fieldName: "tempat_pembuangan_limbah_cair",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"30. Rumah berada dibawah SUTET/SUTT/SUTTAS"}
                fieldName={"rumah_berada_di_sutet"}
                required={true}
                placeholder={"Pilih rumah berada dibawah sutet"}
                options={[
                  {
                    label: "Ya",
                    value: "Ya",
                    fieldName: "rumah_berada_di_sutet",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "rumah_berada_di_sutet",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"31. Rumah dibantaran sungai"}
                fieldName={"rumah_di_bantaran_sungai"}
                required={true}
                placeholder={"Pilih rumah berada dibawah sutet"}
                options={[
                  {
                    label: "Ya",
                    value: "Ya",
                    fieldName: "rumah_di_bantaran_sungai",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "rumah_di_bantaran_sungai",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"32. Rumah di lereng bukit/gunung"}
                fieldName={"rumah_di_lereng_bukit_gunung"}
                required={true}
                placeholder={"Pilih rumah berada dibawah sutet"}
                options={[
                  {
                    label: "Ya",
                    value: "Ya",
                    fieldName: "rumah_di_lereng_bukit_gunung",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "rumah_di_lereng_bukit_gunung",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"33. Secara keseluruhan kondisi rumah"}
                fieldName={"secara_keseluruhan_kondisi_rumah"}
                required={true}
                placeholder={"Pilih rumah berada dibawah sutet"}
                options={[
                  {
                    label: "Kumuh",
                    value: "Kumuh",
                    fieldName: "secara_keseluruhan_kondisi_rumah",
                  },
                  {
                    label: "Tidak Kumuh",
                    value: "Tidak Kumuh",
                    fieldName: "secara_keseluruhan_kondisi_rumah",
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
