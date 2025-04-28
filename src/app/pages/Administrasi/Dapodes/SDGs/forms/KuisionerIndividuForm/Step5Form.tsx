import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"
import SelectStatic from "@app/components/Select/SelectStatic"
import TrashIcon from "@app/components/Icons/TrashIcon"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import FormInputMask from "@app/components/Input/FormInputMask"
import FormInputControl from "@app/components/Input/FormInputControl"

const validationSchema = Yup.object().shape({
  penghasilan_setahun_terakhir_dari: Yup.array().of(
    Yup.object().shape({
      diekspor: Yup.string().required(),
      jumlah: Yup.number().required(),
      penghasilan_setahun: Yup.number().required(),
      sumber_penghasilan: Yup.string().required(),
      sumber_penghasilan_lainnya: Yup.string().when("sumber_penghasilan", {
        is: (value: string) => value && value.match(/(lainnya)/),
        then: Yup.string(),
      }),
    })
  ),
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
          <h5>PENGHASILAN</h5>
          <Row>
            <Col sm>
              <PenghasilanFieldArray />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function PenghasilanFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="penghasilan_setahun_terakhir_dari"
        required={true}
        defaultValue={{
          sumber_penghasilan: "",
          jumlah: 0,
          diekspor: "",
          penghasilan_setahun: 0,
        }}>
        {({
          index,
          required,
          remove,
          fieldName,
          register,
          control,
          errors,
          watch,
        }: any) => (
          <>
            <div className="d-flex justify-content-between mt-3">
              <p className="fs-5 fw-bold">
                Penghasilan <span className="text-success">{index + 1}</span>
              </p>
              <Button
                onClick={() => remove(index)}
                type="button"
                variant="outline-danger">
                <TrashIcon />
              </Button>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>
                Sumber Penghasilan {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors}
                fieldName={`${fieldName}.${index}.sumber_penghasilan`}
                options={[
                  { label: "Padi", value: "padi" },
                  {
                    label: "Palawija (jagung, kacang-kacangan, ubi-ubian, dll)",
                    value: "palawija",
                  },
                  {
                    label:
                      "Hortikultura (buah-buahan, sayur-sayuran, tanaman hias, tanaman obat-obatan, dll)",
                    value: "hortikultura",
                  },
                  { label: "Karet", value: "karet" },
                  { label: "Kelapa sawit", value: "kelapa_sawit" },
                  { label: "Kopi", value: "kopi" },
                  { label: "Kakao", value: "kakao" },
                  { label: "Kelapa", value: "kelapa" },
                  { label: "Lada", value: "laba" },
                  { label: "Cengkeh", value: "cengkeh" },
                  { label: "Tembakau", value: "tembakau" },
                  { label: "Tebu", value: "tebu" },
                  { label: "Sapi potong", value: "sapi_potong" },
                  { label: "Susu sapi", value: "susu_sapi" },
                  { label: "Domba", value: "domba" },
                  {
                    label: "Ternak besar lainnya (kuda, kerbau, dll)",
                    value: "ternak_besar_lainnya_kuda_kerbau_dll",
                  },
                  { label: "Ayam pedaging", value: "ayam_pedaging" },
                  { label: "Telur ayam", value: "telur_ayam" },
                  {
                    label: "Ternak kecil lainnya (bebek, burung, dll)",
                    value: "ternak_kecil_bebek_burung_dll",
                  },
                  {
                    label: "Perikanan tangkap (termasuk biota lainnya)",
                    value: "perikanan_tangkap",
                  },
                  {
                    label: "Perikanan budidaya (termasuk biota lainnya)",
                    value: "perikanan_budidaya",
                  },
                  { label: "Bambu", value: "bambu" },
                  {
                    label:
                      "Budidaya tanaman kehutanan (jati, mahoni, sengon, dll)",
                    value: "budidaya_tanaman_kehutanan",
                  },
                  {
                    label:
                      "Pemungutan hasil hutan (madu, gaharu, buah-buahan, kayu bakar, rotan, dll)",
                    value: "pemungutan_hasil_hutan",
                  },
                  {
                    label:
                      "Penangkapan satwa liar (babi, ayam hutan, kijang, dll)",
                    value: "penangkapan_satwa_liar",
                  },
                  {
                    label: "Penangkaran satwa liar (arwana, buaya, dll)",
                    value: "penangkaran_satwa_liar",
                  },
                  {
                    label: "Jasa pertanian (sewa traktor, penggilingan, dll)",
                    value: "jasa_pertanian",
                  },
                  {
                    label: "Pertambangan dan penggalian",
                    value: "pertambangan_dan_penggalian",
                  },
                  { label: "Industri kerajinan", value: "industri_kerajinan" },
                  {
                    label: "Industri pengolahan",
                    value: "industri_pengolahan",
                  },
                  { label: "Perdagangan", value: "perdagangan" },
                  {
                    label: "Warung dan rumah makan",
                    value: "warung_dan_rumah_makan",
                  },
                  { label: "Angkutan", value: "angkutan" },
                  { label: "Pergudangan", value: "pergudangan" },
                  { label: "Komunikasi", value: "komunikasi" },
                  {
                    label: "Jasa di luar pertanian",
                    value: "jasa_di_luar_pertanian",
                  },
                  { label: "Uang  Pensiunan", value: "uang_pensiunan" },
                  { label: "Karyawan tetap", value: "karyawan_tetap" },
                  {
                    label: "Karyawan tidak tetap",
                    value: "karyawan_tidak_tetap",
                  },
                  { label: "TNI", value: "tni" },
                  { label: "PNS", value: "pns" },
                  { label: "TKI di luar negeri", value: "tki_di_luar_negeri" },
                  {
                    label: "Sumbangan (dari keluarga, dari pemerintah)",
                    value: "sumbangan",
                  },
                  { label: "Lainnya, sebutkan", value: "lainnya" },
                ]}
                placeholder={"Pilih sumber penghasilan"}
              />
              {watch(`${fieldName}.${index}.sumber_penghasilan`) &&
              watch(`${fieldName}.${index}.sumber_penghasilan`).match(
                /(lainnya)/
              ) ? (
                <FormInputControl
                  required={required}
                  isInvalid={
                    !!errors?.fieldName?.index?.sumber_penghasilan_lainnya
                  }
                  message={
                    errors?.fieldName?.index?.sumber_penghasilan_lainnya
                      ?.message
                  }
                  register={register(
                    `${fieldName}.${index}.sumber_penghasilan_lainnya`
                  )}
                  placeholder={`Masukkan sumber penghasilan lainnya`}
                />
              ) : null}
              {/* <FieldLainnya
              control={control}
              fieldName={`${fieldName}.${index}.sumber_penghasilan`}
              index={index} 
              required={false}
              register={register}
              errors={errors}
            /> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Jumlah (yang tidak berpenghasilan isi dengan 0){" "}
                {required && <RequiredInfo />}
              </Form.Label>
              <FormInputMask
                prefix={"Rp "}
                register={register(`${fieldName}.${index}.jumlah`)}
                errors={errors}
                control={control}
                field={`${fieldName}.${index}.jumlah`}
                placeholder={`Masukkan jumlah`}
                decimalScale={0}
                required={required}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Penghasilan Setahun (Rp) {required && <RequiredInfo />}
              </Form.Label>
              <FormInputMask
                prefix={"Rp "}
                register={register(`${fieldName}.${index}.penghasilan_setahun`)}
                errors={errors}
                control={control}
                field={`${fieldName}.${index}.penghasilan_setahun`}
                placeholder={`Masukkan penghasilan setahun`}
                decimalScale={0}
                required={required}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Diekspor {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors}
                fieldName={`${fieldName}.${index}.diekspor`}
                options={[
                  { label: "Semua", value: "semua" },
                  { label: "Sebagian Besar", value: "sebagian_besar" },
                  { label: "Tidak", value: "tidak" },
                ]}
                placeholder={"Pilih diekspor"}
              />
            </Form.Group>
          </>
        )}
      </FieldArray>
    </>
  )
}
