import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  anggaran_pendapatan_desa_tahun_sebelumnya: Yup.object().shape({
    anggaran_pendapatan: Yup.number().required(),
    dana_desa_dari_apbn: Yup.number(),
    pendapatan_asli_desa: Yup.number(),
    bagian_dari_pajak_dan_retribusi_daerah: Yup.number(),
    alokasi_dana_desa: Yup.number(),
    bantuan_keuangan_dari_apbd_provinsi: Yup.number(),
    bantuan_keuangan_dari_apbd_kabupaten_kota: Yup.number(),
    hibah_dan_sumbangan_pihak_ketiga: Yup.number(),
    lain_pendapatan_desa_yang_sah: Yup.number(),
  }),
  anggaran_pembelanjaan_desa_tahun_sebelumnya: Yup.object().shape({
    anggaran_pengeluaran: Yup.number().required(),
    bidang_penyelenggaraan_pemerintahan_desa: Yup.number(),
    bidang_pelaksanaan_pembangunan_desa: Yup.number(),
    bidang_pemberdayaan_masyarakat: Yup.number(),
    bidang_pembinaan_masyarakat: Yup.number(),
    belanja_modal: Yup.number(),
    penyertaan_modal_ke_bumdes: Yup.number(),
    lainnya: Yup.number(),
  }),
})

export function Step5Form() {
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

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>APBDesa</h5>
          <Row>
            <Col sm>
              <TableInputs
                labelName={
                  "41. Anggaran Pendapatan Desa Tahun Sebelumnya (Dalam Rupiah (Rp))"
                }
                fieldName={"anggaran_pendapatan_desa_tahun_sebelumnya"}
                required={false}
                options={[
                  {
                    label: "Anggaran pendapatan",
                    value: "anggaran_pendapatan",
                    fieldName: "anggaran_pendapatan",
                    type: "number",
                    required: true,
                  },
                  {
                    label: "Dana Desa dari APBN",
                    value: "dana_desa_dari_apbn",
                    fieldName: "dana_desa_dari_apbn",
                    type: "number",
                  },
                  {
                    label: "Pendapatan asli desa",
                    value: "pendapatan_asli_desa",
                    fieldName: "pendapatan_asli_desa",
                    type: "number",
                  },
                  {
                    label: "Bagian dari pajak dan retribusi daerah",
                    value: "bagian_dari_pajak_dan_retribusi_daerah",
                    fieldName: "bagian_dari_pajak_dan_retribusi_daerah",
                    type: "number",
                  },
                  {
                    label: "Alokasi Dana Desa",
                    value: "alokasi_dana_desa",
                    fieldName: "alokasi_dana_desa",
                    type: "number",
                  },
                  {
                    label: "Bantuan Keuangan dari APBN Provinsi",
                    value: "bantuan_keuangan_dari_apbd_provinsi",
                    fieldName: "bantuan_keuangan_dari_apbd_provinsi",
                    type: "number",
                  },
                  {
                    label: "Bantuan Keuangan dari APBN Kabupaten/kota",
                    value: "bantuan_keuangan_dari_apbd_kabupaten_kota",
                    fieldName: "bantuan_keuangan_dari_apbd_kabupaten_kota",
                    type: "number",
                  },
                  {
                    label: "Hibah dari Sumbangan Pihak Ketiga",
                    value: "hibah_dan_sumbangan_pihak_ketiga",
                    fieldName: "hibah_dan_sumbangan_pihak_ketiga",
                    type: "number",
                  },
                  {
                    label: "Lain-lain pendapatan desa yang sah",
                    value: "lain_pendapatan_desa_yang_sah",
                    fieldName: "lain_pendapatan_desa_yang_sah",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={
                  "42. Anggaran Pembelanjaan Desa Tahun Sebelumnya (Dalam Rupiah (Rp))"
                }
                fieldName={"anggaran_pembelanjaan_desa_tahun_sebelumnya"}
                required={false}
                options={[
                  {
                    label: "Anggaran Pengeluaran",
                    value: "anggaran_pengeluaran",
                    fieldName: "anggaran_pengeluaran",
                    required: true,
                  },
                  {
                    label: "Bidang Penyelenggaraan Pemerintahan Desa",
                    value: "bidang_penyelenggaraan_pemerintahan_desa",
                    fieldName: "bidang_penyelenggaraan_pemerintahan_desa",
                  },
                  {
                    label: "Bidang Pelaksanaan Pembangunan Desa",
                    value: "bidang_pelaksanaan_pembangunan_desa",
                    fieldName: "bidang_pelaksanaan_pembangunan_desa",
                  },
                  {
                    label: "Bidang Pemberdayaan Masyarakat",
                    value: "bidang_pemberdayaan_masyarakat",
                    fieldName: "bidang_pemberdayaan_masyarakat",
                  },
                  {
                    label: "Bidang Pembinaan Masyarakat",
                    value: "bidang_pembinaan_masyarakat",
                    fieldName: "bidang_pembinaan_masyarakat",
                  },
                  {
                    label:
                      "Belanja Modal (tanah, bangunan, jalan, komputer, dll)",
                    value: "belanja_modal",
                    fieldName: "belanja_modal",
                  },
                  {
                    label: "Pernyetaan Modal ke BUMDes",
                    value: "penyertaan_modal_ke_bumdes",
                    fieldName: "penyertaan_modal_ke_bumdes",
                  },
                  {
                    label: "Lainnya (belanja tak terduga, konsumsi rapat, dll)",
                    value: "lainnya",
                    fieldName: "lainnya",
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
