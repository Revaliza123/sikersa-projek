import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Input, Select, TableInputs, TableSelects } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  penerangan_di_jalan_utama: Yup.string().required(),
  prasarana_transportasi_antar_rt: Yup.string().required(),
  panjang_jalan: Yup.object().shape({
    jalan_aspal: Yup.number().required(),
    jalan_diperkeras: Yup.number().required(),
    jalan_tanah: Yup.number().required(),
    jalan_papan_di_atas_air: Yup.number().required(),
    jalan_setapak: Yup.number().required(),
    jalan_lainnya: Yup.number().required(),
  }),
  jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih:
    Yup.string().required(),
  keberadaan_trayek_angkutan_umum: Yup.string().required(),
  operasional_angkutan_umum: Yup.string().when(
    "keberadaan_trayek_angkutan_umum",
    {
      is: (value: string) =>
        value &&
        (value.match(/(Trayek)\s+(tetap)/gi) ||
          value.match(/(Tanpa)\s+(trayek)\s+(tetap)/gi)),
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  jam_operasi_angkutan_umum: Yup.string().required(),
  dermaga_laut_sungai: Yup.string().required(),
  Jumlah_Menara_Base_Transceiver_Station: Yup.number().required(),
  sinyal_operator: Yup.object().shape({
    bakrie_telecom_internet: Yup.string(),
    bakrie_telecom_operator: Yup.string(),
    hutchison_3_internet: Yup.string(),
    hutchison_3_operator: Yup.string(),
    indosat_internet: Yup.string(),
    indosat_operator: Yup.string(),
    psn_byru_internet: Yup.string(),
    psn_byru_operator: Yup.string(),
    smartfren_internet: Yup.string(),
    smartfren_operator: Yup.string(),
    telkomsel_internet: Yup.string(),
    telkomsel_operator: Yup.string(),
    xl_axis_internet: Yup.string(),
    xl_axis_operator: Yup.string(),
  }),
  kantor_pos_pos_pembantu_rumah_pos: Yup.string().required(),
  layanan_pos_keliling: Yup.string().required(),
  perusahaan_agen_jasa_ekspedisi_dokumen_swasta: Yup.string().required(),
  program_siaran_tv_radio_yang_diterima: Yup.object().shape({
    radio_komunitas: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
    radio_swasta: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
    rr: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
    rri_daerah: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
    tv_luar_negeri: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
    tv_swasta: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
    tvri: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
    tvri_daerah: Yup.object().shape({
      dapat_diterima: Yup.string(),
      perlu_parabola: Yup.string(),
    }),
  }),
  jumlah_lokasi_permukiman_liar: Yup.string().required(),
  jumlah_fasilitas_umum_fasilitas_sosial_yang_ditinggali_penduduk:
    Yup.object().shape({
      pasar: Yup.number().required(),
      stasiun: Yup.number().required(),
      terminal: Yup.number().required(),
      kolong_jembatan: Yup.number().required(),
      pelabuhan: Yup.number().required(),
    }),
  jumlah_lokasi_permukiman_khusus: Yup.object().shape({
    permukiman_perumahan_mewah: Yup.number().required(),
    apartemen: Yup.number().required(),
    rumah_susun: Yup.number().required(),
    sekolah_berasrama: Yup.number().required(),
    kos_kosan: Yup.number().required(),
    asrama_barak_militer: Yup.number().required(),
    lp_rutan: Yup.number().required(),
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

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>INFRASTRUKTUR</h5>
          <Row>
            <Col sm>
              <Select
                labelName={"53. Penerangan di jalan utama"}
                fieldName={"penerangan_di_jalan_utama"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Listrik diusahakan pemerintah",
                    value: "Listrik diusahakan pemerintah",
                    fieldName: "penerangan_di_jalan_utama",
                  },
                  {
                    label: "Listrik diusahakan non pemerintah",
                    value: "Listrik diusahakan non pemerintah",
                    fieldName: "penerangan_di_jalan_utama",
                  },
                  {
                    label: "Non listrik",
                    value: "Non listrik",
                    fieldName: "penerangan_di_jalan_utama",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "penerangan_di_jalan_utama",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={"54. Prasarana transportasi antar RT"}
                fieldName={"prasarana_transportasi_antar_rt"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Air",
                    value: "Air",
                    fieldName: "prasarana_transportasi_antar_rt",
                  },
                  {
                    label: "Darat",
                    value: "Darat",
                    fieldName: "prasarana_transportasi_antar_rt",
                  },
                  {
                    label: "Darat dan air",
                    value: "Darat dan air",
                    fieldName: "prasarana_transportasi_antar_rt",
                  },
                  {
                    label: "Udara",
                    value: "Udara",
                    fieldName: "prasarana_transportasi_antar_rt",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={"55. Panjang jalan (km)"}
                fieldName={"panjang_jalan"}
                required={true}
                options={[
                  {
                    label: "Jalan aspal",
                    value: "jalan_aspal",
                    fieldName: "jalan_aspal",
                    type: "number",
                  },
                  {
                    label: "Jalan diperkeras (kerikil, batu, dll)",
                    value: "jalan_diperkeras",
                    fieldName: "jalan_diperkeras",
                    type: "number",
                  },
                  {
                    label: "Jalan tanah",
                    value: "jalan_tanah",
                    fieldName: "jalan_tanah",
                    type: "number",
                  },
                  {
                    label: "Jalan papan di atas air",
                    value: "jalan_papan_di_atas_air",
                    fieldName: "jalan_papan_di_atas_air",
                    type: "number",
                  },
                  {
                    label: "Jalan setapak",
                    value: "jalan_setapak",
                    fieldName: "jalan_setapak",
                    type: "number",
                  },
                  {
                    label: "Jalan lainnya",
                    value: "jalan_lainnya",
                    fieldName: "jalan_lainnya",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={
                  "56. Jalan darat dapat dilalui kendaraan bermotor roda 4 atau lebih"
                }
                fieldName={
                  "jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Sepanjang tahun",
                    value: "Sepanjang tahun",
                    fieldName:
                      "jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih",
                  },
                  {
                    label:
                      "Sepanjang tahun kecuali saat tertentu (ketika hujan, pasang, dll)",
                    value:
                      "Sepanjang tahun kecuali saat tertentu (ketika hujan, pasang, dll)",
                    fieldName:
                      "jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih",
                  },
                  {
                    label: "Selama musim kemarau",
                    value: "Selama musim kemarau",
                    fieldName:
                      "jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih",
                  },
                  {
                    label: "Tidak dapat dilalui sepanjang tahun",
                    value: "Tidak dapat dilalui sepanjang tahun",
                    fieldName:
                      "jalan_darat_dapat_dilalui_kendaraan_bermotor_roda_4_atau_lebih",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={"57. Keberadaan trayek angkutan umum"}
                fieldName={"keberadaan_trayek_angkutan_umum"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Trayek tetap",
                    value: "Trayek tetap",
                    fieldName: "keberadaan_trayek_angkutan_umum",
                  },
                  {
                    label: "Tanpa trayek tetap",
                    value: "Tanpa trayek tetap",
                    fieldName: "keberadaan_trayek_angkutan_umum",
                  },
                  {
                    label: "Tidak ada angkutan umum",
                    value: "Tidak ada angkutan umum",
                    fieldName: "keberadaan_trayek_angkutan_umum",
                  },
                ]}
              />
            </Col>
          </Row>

          {methods
            .watch("keberadaan_trayek_angkutan_umum")
            .match(/(Trayek)\s+(tetap)/gi) ||
          methods
            .watch("keberadaan_trayek_angkutan_umum")
            .match(/(Tanpa)\s+(trayek)\s+(tetap)/gi) ? (
            <Row>
              <Col sm>
                <Select
                  labelName={"58. Operasional angkutan umum"}
                  fieldName={"operasional_angkutan_umum"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Setiap hari",
                      value: "Setiap hari",
                      fieldName: "operasional_angkutan_umum",
                    },
                    {
                      label: "Tidak setiap hari",
                      value: "Tidak setiap hari",
                      fieldName: "operasional_angkutan_umum",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          <Row>
            <Col sm>
              <Select
                labelName={"59. Jam operasional angkutan umum"}
                fieldName={"jam_operasi_angkutan_umum"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Siang dan malam hari",
                    value: "Siang dan malam hari",
                    fieldName: "jam_operasi_angkutan_umum",
                  },
                  {
                    label: "Hanya siang hari",
                    value: "Hanya siang hari",
                    fieldName: "jam_operasi_angkutan_umum",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={"60. Dermaga laut/sungai"}
                fieldName={"dermaga_laut_sungai"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada, kondisi baik",
                    value: 'Ada, kondisi baik"',
                    fieldName: "dermaga_laut_sungai",
                  },
                  {
                    label: "Ada, kondisi buruk",
                    value: "Ada, kondisi buruk",
                    fieldName: "dermaga_laut_sungai",
                  },
                  {
                    label: "Ada, tidak dapat berfungsi",
                    value: "Ada, tidak dapat berfungsi",
                    fieldName: "dermaga_laut_sungai",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "dermaga_laut_sungai",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"61. Jumlah menara Base Transceiver Station (BTS)"}
                required={true}
                placeholder={"Masukkan jumlah menara BTS"}
                fieldName={"Jumlah_Menara_Base_Transceiver_Station"}
                type={"number"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableSelects
                labelName={"62. Sinyal Operator"}
                required={true}
                fieldName={"sinyal_operator"}
                categories={["Sinyal Operator", "Sinyal Internet"]}
                selectOptions={[
                  { label: "Sinyal sangat kuat", value: "Sinyal sangat kuat" },
                  { label: "Sinyal kuat", value: "Sinyal kuat" },
                  { label: "Sinyal lemah", value: "Sinyal lemah" },
                  { label: "Tidak ada sinyal", value: "Tidak ada sinyal" },
                ]}
                selectOptions2={[
                  { label: "4G/LTE", value: "4G/LTE" },
                  { label: "3G/H/H+/EVDO", value: "3G/H/H+/EVDO" },
                  { label: "5G/E/GPRS", value: "5G/E/GPRS" },
                  {
                    label: "Tidak ada sinyal internet",
                    value: "Tidak ada sinyal internet",
                  },
                ]}
                options={[
                  {
                    labelName: "Telkomsel",
                    fieldName: ["telkomsel_operator", "telkomsel_internet"],
                  },
                  {
                    labelName: "Indosat",
                    fieldName: ["indosat_operator", "indosat_internet"],
                  },
                  {
                    labelName: "XL/Axis",
                    fieldName: ["xl_axis_operator", "xl_axis_internet"],
                  },
                  {
                    labelName: "Hutchison 3",
                    fieldName: ["hutchison_3_operator", "hutchison_3_internet"],
                  },
                  {
                    labelName: "PSN ByRU",
                    fieldName: ["psn_byru_operator", "psn_byru_internet"],
                  },
                  {
                    labelName: "Smartfren",
                    fieldName: ["smartfren_operator", "smartfren_internet"],
                  },
                  {
                    labelName: "Bakrie Telecom",
                    fieldName: [
                      "bakrie_telecom_operator",
                      "bakrie_telecom_internet",
                    ],
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={"63. Kantor pos/pos pembantu/rumah pos"}
                fieldName={"kantor_pos_pos_pembantu_rumah_pos"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Beroperasi",
                    value: "Beroperasi",
                    fieldName: "kantor_pos_pos_pembantu_rumah_pos",
                  },
                  {
                    label: "Jarang beroperasi",
                    value: "Jarang beroperasi",
                    fieldName: "kantor_pos_pos_pembantu_rumah_pos",
                  },
                  {
                    label: "Tidak beroperasi",
                    value: "Tidak beroperasi",
                    fieldName: "kantor_pos_pos_pembantu_rumah_pos",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kantor_pos_pos_pembantu_rumah_pos",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={"64. Layanan Pos Keliling"}
                fieldName={"layanan_pos_keliling"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "layanan_pos_keliling",
                  },
                  {
                    label: "Tidak Ada",
                    value: "Tidak Ada",
                    fieldName: "layanan_pos_keliling",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={
                  "65. Perusahaan/agen jasa ekspedisi (pengiriman barang/dokumen) swasta"
                }
                fieldName={"perusahaan_agen_jasa_ekspedisi_dokumen_swasta"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Beroperasi",
                    value: "Beroperasi",
                    fieldName: "perusahaan_agen_jasa_ekspedisi_dokumen_swasta",
                  },
                  {
                    label: "Jarang beroperasi",
                    value: "Jarang beroperasi",
                    fieldName: "perusahaan_agen_jasa_ekspedisi_dokumen_swasta",
                  },
                  {
                    label: "Tidak beroperasi",
                    value: "Tidak beroperasi",
                    fieldName: "perusahaan_agen_jasa_ekspedisi_dokumen_swasta",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "perusahaan_agen_jasa_ekspedisi_dokumen_swasta",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableSelects
                labelName={"66. Program/siaran TV/radio yang diterima"}
                required={true}
                fieldName={"program_siaran_tv_radio_yang_diterima"}
                categories={["Dapat diterima", "Perlu parabola"]}
                selectOptions={[
                  { label: "Ya", value: "Ya" },
                  { label: "Tidak", value: "Tidak" },
                ]}
                selectOptions2={[
                  { label: "Ya", value: "Ya" },
                  { label: "Tidak", value: "Tidak" },
                ]}
                options={[
                  {
                    labelName: "TVRI",
                    fieldName: ["tvri.dapat_diterima", "tvri.perlu_parabola"],
                  },
                  {
                    labelName: "TVRI Daerah",
                    fieldName: [
                      "tvri_daerah.dapat_diterima",
                      "tvri_daerah.perlu_parabola",
                    ],
                  },
                  {
                    labelName: "TV Swasta",
                    fieldName: [
                      "tv_swasta.dapat_diterima",
                      "tv_swasta.perlu_parabola",
                    ],
                  },
                  {
                    labelName: "TV Luar negeri",
                    fieldName: [
                      "tv_luar_negeri.dapat_diterima",
                      "tv_luar_negeri.perlu_parabola",
                    ],
                  },
                  {
                    labelName: "RRI",
                    fieldName: ["rr.dapat_diterima", "rr.perlu_parabola"],
                  },
                  {
                    labelName: "RRI Daerah",
                    fieldName: [
                      "rri_daerah.dapat_diterima",
                      "rri_daerah.perlu_parabola",
                    ],
                  },
                  {
                    labelName: "Radio Swasta",
                    fieldName: [
                      "radio_swasta.dapat_diterima",
                      "radio_swasta.perlu_parabola",
                    ],
                  },
                  {
                    labelName: "Radio Komunitas",
                    fieldName: [
                      "radio_komunitas.dapat_diterima",
                      "radio_komunitas.perlu_parabola",
                    ],
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"67. Jumlah lokasi permukiman liar"}
                required={true}
                placeholder={"Masukkan jumlah lokasi permukiman liar"}
                fieldName={"jumlah_lokasi_permukiman_liar"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={
                  "68. Jumlah fasilitas umum/fasilitas sosial yang ditingggali penduduk"
                }
                fieldName={
                  "jumlah_fasilitas_umum_fasilitas_sosial_yang_ditinggali_penduduk"
                }
                required={true}
                options={[
                  {
                    label: "Pasar",
                    value: "pasar",
                    fieldName: "pasar",
                    type: "number",
                  },
                  {
                    label: "Stasiun",
                    value: "stasiun",
                    fieldName: "stasiun",
                    type: "number",
                  },
                  {
                    label: "Terminal",
                    value: "terminal",
                    fieldName: "terminal",
                    type: "number",
                  },
                  {
                    label: "Kolong jembatan",
                    value: "kolong_jembatan",
                    fieldName: "kolong_jembatan",
                    type: "number",
                  },
                  {
                    label: "Pelabuhan",
                    value: "pelabuhan",
                    fieldName: "pelabuhan",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={"69. Jumlah lokasi permukiman khusus"}
                fieldName={"jumlah_lokasi_permukiman_khusus"}
                required={true}
                options={[
                  {
                    label: "Permukiman/perumahan mewah",
                    value: "permukiman_perumahan_mewah",
                    fieldName: "permukiman_perumahan_mewah",
                    type: "number",
                  },
                  {
                    label: "Apartemen",
                    value: "apartemen",
                    fieldName: "apartemen",
                    type: "number",
                  },
                  {
                    label: "Rumah susun",
                    value: "rumah_susun",
                    fieldName: "rumah_susun",
                    type: "number",
                  },
                  {
                    label: "Sekolah berasrama (boarding school)",
                    value: "sekolah_berasrama",
                    fieldName: "sekolah_berasrama",
                    type: "number",
                  },
                  {
                    label: "Kos-kosan",
                    value: "kos_kosan",
                    fieldName: "kos_kosan",
                    type: "number",
                  },
                  {
                    label: "Asrama/barak militer",
                    value: "asrama_barak_militer",
                    fieldName: "asrama_barak_militer",
                    type: "number",
                  },
                  {
                    label: "LP/rutan",
                    value: "lp_rutan",
                    fieldName: "lp_rutan",
                    type: "number",
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
