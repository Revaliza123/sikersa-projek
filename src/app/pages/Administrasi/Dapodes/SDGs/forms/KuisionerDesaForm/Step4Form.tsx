import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, FieldArray, Input } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import SelectStatic from "@app/components/Select/SelectStatic"
import FormInputControl from "@app/components/Input/FormInputControl"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  regulasi: Yup.array().of(
    Yup.object().shape({
      bulan_ke: Yup.string().required(),
      jenis_peraturan: Yup.string().required(),
      nomor_dokumen: Yup.string().required(),
      peraturan: Yup.string().required(),
      peraturan_lainnya: Yup.string().when("peraturan", {
        is: (value: string) => value === "Lainnya",
        then: Yup.string().required(),
      }),
      tahun: Yup.string().required(),
    })
  ),
  rpjm_desa_berlaku_sampai_tahun: Yup.string().required(),
  rkp_desa: Yup.string().required(),
})

export function Step4Form() {
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
        <Row>
          <Col sm={12}>
            <h5>Regulasi Desa</h5>
          </Col>
          <Col sm={12}>
            <Input
              labelName={"38. RPJM Desa Berlaku sampai tahun"}
              required={true}
              placeholder={"Masukkan masa berlaku RPJM Desa"}
              fieldName={"rpjm_desa_berlaku_sampai_tahun"}
            />
          </Col>
          <Col sm={12}>
            <Choices
              labelName={"39. RKP Desa"}
              required={true}
              fieldName={"rkp_desa"}
              options={[
                { label: "Ada", value: "Ada", fieldName: "rkp_desa" },
                {
                  label: "Tidak ada",
                  value: "Tidak ada",
                  fieldName: "rkp_desa",
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <PemerintahDesaFieldArray />
          </Col>
        </Row>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function PemerintahDesaFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="regulasi"
        required={true}
        defaultValue={{
          peraturan: "",
          jenis_peraturan: "",
          nomor_dokumen: "",
          bulan_ke: "",
          tahun: "",
        }}
        title="40. Regulasi"
        subtitle="Regulasi">
        {({
          index,
          required,
          fieldName,
          register,
          control,
          errors,
          watch,
        }: any) => (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Peraturan {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.peraturan}
                fieldName={`${fieldName}.${index}.peraturan`}
                options={[
                  {
                    label: "Peraturan yang mendukung pemberdayaan perempuan",
                    value: "Peraturan yang mendukung pemberdayaan perempuan",
                  },
                  {
                    label:
                      "Peraturan yang menjamin perempuan mendapatkan pelayanan, informasi, dan Pendidikan terkait KB dan Kesehatan Reproduksi",
                    value:
                      "Peraturan yang menjamin perempuan mendapatkan pelayanan, informasi, dan Pendidikan terkait KB dan Kesehatan Reproduksi",
                  },
                  {
                    label:
                      "Peraturan tentang penggunaan air tanah, tata kelola sumber daya air",
                    value:
                      "Peraturan tentang penggunaan air tanah, tata kelola sumber daya air",
                  },
                  {
                    label:
                      "Peraturan tentang pelestarian lingkungan di sekitar aliran sungai",
                    value:
                      "Peraturan tentang pelestarian lingkungan di sekitar aliran sungai",
                  },
                  {
                    label: "Peraturan tentang advokasi pekerja migran",
                    value: "Peraturan tentang advokasi pekerja migran",
                  },
                  {
                    label:
                      "Peraturan tentang kegiatan usaha yang tidak menimbulkan pencemaran dan pengelolaan limbah serta sampah rumah tangga",
                    value:
                      "Peraturan tentang kegiatan usaha yang tidak menimbulkan pencemaran dan pengelolaan limbah serta sampah rumah tangga",
                  },
                  {
                    label:
                      "Peraturan tentang tata ruang desa dan perlindungan sumber daya laut",
                    value:
                      "Peraturan tentang tata ruang desa dan perlindungan sumber daya laut",
                  },
                  {
                    label:
                      "Peraturan tentang pelestarian keanekaragaman hayati",
                    value:
                      "Peraturan tentang pelestarian keanekaragaman hayati",
                  },
                  { label: "Lainnya", value: "Lainnya" },
                ]}
                placeholder={"Pilih peraturan"}
              />
              {watch(`${fieldName}.${index}.peraturan`) &&
              watch(`${fieldName}.${index}.peraturan`).match(/(lainnya)/gi) ? (
                <FormInputControl
                  required={required}
                  isInvalid={!!errors?.fieldName?.index?.peraturan_lainnya}
                  message={errors?.fieldName?.index?.peraturan_lainnya?.message}
                  register={register(`${fieldName}.${index}.peraturan_lainnya`)}
                  placeholder={`Masukkan peraturan lainnya`}
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

            <Form.Group>
              <Form.Label>
                Jenis peraturan <RequiredInfo />
              </Form.Label>
              <div className="my-2">
                <Form.Check
                  inline
                  label="Peraturan Desa"
                  value="Peraturan Desa"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.jenis_peraturan}
                  {...register(`${fieldName}.${index}.jenis_peraturan`)}
                />
                <Form.Check
                  inline
                  label="Peraturan Kepala Desa"
                  value="Peraturan Kepala Desa"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.jenis_peraturan}
                  {...register(`${fieldName}.${index}.jenis_peraturan`)}
                />
                <Form.Check
                  inline
                  label="SK Kepala Desa"
                  value="SK Kepala Desa"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.jenis_peraturan}
                  {...register(`${fieldName}.${index}.jenis_peraturan`)}
                />
              </div>
              {errors?.fieldName?.index?.ada_dokumen_musyawarah && (
                <div className="invalid-feedback d-block">
                  {errors?.fieldName?.index?.ada_dokumen_musyawarah?.message}
                </div>
              )}
            </Form.Group>

            <FormInputControl
              labelName={"Nomor dokumen"}
              required={required}
              isInvalid={!!errors?.index?.nomor_dokumen}
              message={errors?.index?.nomor_dokumen?.message}
              register={register(`${fieldName}.${index}.nomor_dokumen`)}
              placeholder={`Masukkan nomor dokumen`}
            />

            <Form.Group className="mb-3">
              <Form.Label>Bulan ke {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.bulan_ke}
                fieldName={`${fieldName}.${index}.bulan_ke`}
                options={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "6", value: "6" },
                  { label: "7", value: "7" },
                  { label: "8", value: "8" },
                  { label: "9", value: "9" },
                  { label: "10", value: "10" },
                  { label: "11", value: "11" },
                  { label: "12", value: "12" },
                ]}
                placeholder={"Pilih bulan ke"}
              />
              {/* <FieldLainnya
              control={control}
              fieldName={`${fieldName}.${index}.sumber_penghasilan`}
              index={index} 
              required={false}
              register={register}
              errors={errors}
            /> */}
            </Form.Group>

            <FormInputControl
              labelName={"Tahun"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.tahun}
              message={errors?.fieldName?.index?.tahun?.message}
              register={register(`${fieldName}.${index}.tahun`)}
              placeholder={`Masukkan tahun`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
