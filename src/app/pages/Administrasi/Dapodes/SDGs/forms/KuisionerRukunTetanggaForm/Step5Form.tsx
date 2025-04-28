import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, Input, Select, TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  agen_pengerahan_tki_ke_luar_negeri: Yup.object().shape({
    jumlah_perusahaan: Yup.number().required(),
    jumlah_orang: Yup.number().required(),
  }),
  tata_ruang_industri: Yup.object().shape({
    jumlah_sentra_industri: Yup.number().required(),
    jumlah_lingkungan_industri_kecil: Yup.number().required(),
    jumlah_perkampungan_industri_kecil: Yup.number().required(),
  }),
  keberadaan_pub_diskotik_tempat_karaoke: Yup.string().required(),
  jarak_pub_diskotik_tempat_karaoke_terdekat: Yup.number(),
  keberadaan_pangkalan_agen_penjual_minyak_tanah: Yup.string().required(),
  keberadaan_pangkalan_agen_penjual_lpg: Yup.string().required(),
  keberadaan_koperasi: Yup.object().shape({
    jumlah_kud: Yup.number().required(),
    jumlah_kud_yang_membeli_menjual_hasil_produksi_pertanian:
      Yup.number().required(),
    jumlah_kud_yang_menyediakan_kredit_usaha: Yup.number().required(),
    jumlah_kud_yang_melakukan_kegiatan_lainnya: Yup.number().required(),
    jumlah_koperasi_industri_kecil_dan_kerajinan_rakyat_usaha_mikro:
      Yup.number().required(),
    jumlah_koperasi_simpan_pinjam: Yup.number().required(),
    jumlah_koperasi_serba_usaha: Yup.number().required(),
    jumlah_koperasi_lainnya: Yup.number().required(),
  }),
  kios_sarana_produksi_petani_nelayan: Yup.object().shape({
    milik_kud: Yup.number().required(),
    milik_bumdes: Yup.number().required(),
    milik_selain_kud_dan_bumdes: Yup.number().required(),
  }),
  kredit_usaha_rakyat: Yup.string().required(),
  kredit_ketahanan_pangan_dan_enegi: Yup.string().required(),
  kredit_usaha_kecil: Yup.string().required(),
  kelompok_usaha_bersama: Yup.string().required(),
})

export function Step5Form() {
  const { updateFormData, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepfour", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>LEMBAGA EKONOMI</h5>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"39. Agen pengerahan TKI ke luar negeri"}
                fieldName={"agen_pengerahan_tki_ke_luar_negeri"}
                required={true}
                options={[
                  {
                    label: "Jumlah (perusahaan)",
                    value: "jumlah_perusahaan",
                    fieldName: "jumlah_perusahaan",
                    type: "number",
                  },
                  {
                    label: "Jumlah (orang)",
                    value: "jumlah_orang",
                    fieldName: "jumlah_orang",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"40. Tata ruang industri"}
                fieldName={"tata_ruang_industri"}
                required={true}
                options={[
                  {
                    label: "Jumlah sentra industri",
                    value: "jumlah_sentra_industri",
                    fieldName: "jumlah_sentra_industri",
                    type: "number",
                  },
                  {
                    label: "Jumlah lingkungan industri kecil",
                    value: "jumlah_lingkungan_industri_kecil",
                    fieldName: "jumlah_lingkungan_industri_kecil",
                    type: "number",
                  },
                  {
                    label: "Jumlah perkampungan industri kecil",
                    value: "jumlah_perkampungan_industri_kecil",
                    fieldName: "jumlah_perkampungan_industri_kecil",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"41. Keberadaan pub/diskotik/tempat karaoke"}
                fieldName={"keberadaan_pub_diskotik_tempat_karaoke"}
                required={true}
                options={[
                  {
                    label: "Ya",
                    value: "Ya",
                    fieldName: "keberadaan_pub_diskotik_tempat_karaoke",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak",
                    fieldName: "keberadaan_pub_diskotik_tempat_karaoke",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"42. Jarak pub/diskotik/tempat karaoke terdekat"}
                required={false}
                placeholder={"Masukkan jarak"}
                fieldName={"jarak_pub_diskotik_tempat_karaoke_terdekat"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={
                  "43. Keberadaan pangkalan/agen/penjual minyak tanah (termasuk penjual minyak tanah)"
                }
                required={true}
                placeholder={
                  "Pilih keberadaan pangkalan/agen/penjual minyak tanah"
                }
                fieldName={"keberadaan_pangkalan_agen_penjual_minyak_tanah"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "keberadaan_pangkalan_agen_penjual_minyak_tanah",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "keberadaan_pangkalan_agen_penjual_minyak_tanah",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={
                  "44. Keberadaan pangkalan/agen/penjual LPG(warung, toko, supermarket, penjual gas keliling)"
                }
                required={true}
                placeholder={"Pilih keberadaan pangkalan/agen/penjual LPG"}
                fieldName={"keberadaan_pangkalan_agen_penjual_lpg"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "keberadaan_pangkalan_agen_penjual_lpg",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "keberadaan_pangkalan_agen_penjual_lpg",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"45. Keberadaan koperasi"}
                fieldName={"keberadaan_koperasi"}
                required={true}
                options={[
                  {
                    label: "Jumlah KUD",
                    value: "jumlah_kud",
                    fieldName: "jumlah_kud",
                    type: "number",
                  },
                  {
                    label:
                      "Jumlah KUD yang membeli/menjual hasil/produksi pertanian",
                    value:
                      "jumlah_kud_yang_membeli_menjual_hasil_produksi_pertanian",
                    fieldName:
                      "jumlah_kud_yang_membeli_menjual_hasil_produksi_pertanian",
                    type: "number",
                  },
                  {
                    label: "Jumlah KUD yang menyediakan Kredit Usaha",
                    value: "jumlah_kud_yang_menyediakan_kredit_usaha",
                    fieldName: "jumlah_kud_yang_menyediakan_kredit_usaha",
                    type: "number",
                  },
                  {
                    label: "Jumlah KUD yang melakukan kegiatan lainnya",
                    value: "jumlah_kud_yang_melakukan_kegiatan_lainnya",
                    fieldName: "jumlah_kud_yang_melakukan_kegiatan_lainnya",
                    type: "number",
                  },
                  {
                    label:
                      "Jumlah Koperasi Industri dan Kerajinan Rakyat(Kopinkra)/Usaha mikro",
                    value:
                      "jumlah_koperasi_industri_kecil_dan_kerajinan_rakyat_usaha_mikro",
                    fieldName:
                      "jumlah_koperasi_industri_kecil_dan_kerajinan_rakyat_usaha_mikro",
                    type: "number",
                  },
                  {
                    label: "Jumlah Koperasi Simpan Pinjam (Kospin)",
                    value: "jumlah_koperasi_simpan_pinjam",
                    fieldName: "jumlah_koperasi_simpan_pinjam",
                    type: "number",
                  },
                  {
                    label: "Jumlah koperasi serba usaha",
                    value: "jumlah_koperasi_serba_usaha",
                    fieldName: "jumlah_koperasi_serba_usaha",
                    type: "number",
                  },
                  {
                    label: "Jumlah koperasi lainnya",
                    value: "jumlah_koperasi_lainnya",
                    fieldName: "jumlah_koperasi_lainnya",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"46. Kios sarana produksi petani/nelayan"}
                fieldName={"kios_sarana_produksi_petani_nelayan"}
                required={true}
                options={[
                  {
                    label: "Milik KUD (unit)",
                    value: "milik_kud",
                    fieldName: "milik_kud",
                    type: "number",
                  },
                  {
                    label: "Milik Bumdes (unit)",
                    value: "milik_bumdes",
                    fieldName: "milik_bumdes",
                    type: "number",
                  },
                  {
                    label: "Milik selain KUD dan Bumdes",
                    value: "milik_selain_kud_dan_bumdes",
                    fieldName: "milik_selain_kud_dan_bumdes",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"47. Kredit Usaha Rakyat (KUR)"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"kredit_usaha_rakyat"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "kredit_usaha_rakyat",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kredit_usaha_rakyat",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"48. Kredit Ketahanan Pangan dan Energi (KKP-E)"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"kredit_ketahanan_pangan_dan_enegi"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "kredit_ketahanan_pangan_dan_enegi",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kredit_ketahanan_pangan_dan_enegi",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"49. Kredit Usaha Kecil (KUK)"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"kredit_usaha_kecil"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "kredit_usaha_kecil",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kredit_usaha_kecil",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"50. Kelompok Usaha Bersama (KUBE)"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"kelompok_usaha_bersama"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "kelompok_usaha_bersama",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kelompok_usaha_bersama",
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
