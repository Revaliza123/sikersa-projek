import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Form } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import SelectStatic from "@app/components/Select/SelectStatic"
import FormInputControl from "@app/components/Input/FormInputControl"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  industri_menurut_bahan_baku_utama: Yup.array().of(
    Yup.object().shape({
      jenis_industri: Yup.string(),
      jenis_industri_lainnya: Yup.string().when("jenis_industri", {
        is: (value: string) => value && value.match(/(lainnya)/),
        then: Yup.string(),
      }),
      jumlah_industri_kecil_dan_rumah_tangga: Yup.number(),
      jumlah_industri_sedang_dan_besar: Yup.number(),
      jumlah_manajemen: Yup.number(),
      jumlah_pekerja: Yup.number(),
    })
  ),
})

export function Step6Form() {
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
        <IndustriFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function IndustriFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="industri_menurut_bahan_baku_utama"
        required={false}
        defaultValue={{
          jenis_industri: "",
          jumlah_industri_kecil_dan_rumah_tangga: 0,
          jumlah_industri_sedang_dan_besar: 0,
          jumlah_manajemen: 0,
          jumlah_pekerja: 0,
        }}
        title="51. Industri menurut bahan baku utama"
        subtitle="Industri">
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
              <Form.Label>
                Jenis Industri {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.jenis_industri}
                fieldName={`${fieldName}.${index}.jenis_industri`}
                options={[
                  {
                    label:
                      "1. Industri barang dari kulit (tas, sepatu, sandal, dll)",
                    value:
                      "1. Industri barang dari kulit (tas, sepatu, sandal, dll)",
                  },
                  {
                    label:
                      "2. Industri barang dari kayu (meja, kursi, lemari, dll)",
                    value:
                      "2. Industri barang dari kayu (meja, kursi, lemari, dll)",
                  },
                  {
                    label:
                      "3. Industri barang dari logam mulia atau bahan logam (perabot, perhiasan, dll)",
                    value:
                      "3. Industri barang dari logam mulia atau bahan logam (perabot, perhiasan, dll)",
                  },
                  {
                    label: "4. industri logam berat",
                    value: "4. industri logam berat",
                  },
                  {
                    label:
                      "5. industri barang dari kain (tenun, konveksi, dll)",
                    value:
                      "5. industri barang dari kain (tenun, konveksi, dll)",
                  },
                  {
                    label:
                      "6. Industri gerabah/ keramik/ batu (porselen, keramik, tegel, dll)",
                    value:
                      "6. Industri gerabah/ keramik/ batu (porselen, keramik, tegel, dll)",
                  },
                  {
                    label: "7. Industri genteng dan batu bara",
                    value: "7. Industri genteng dan batu bara",
                  },
                  {
                    label:
                      "8. Industri anyaman dari rotan/ bambu/ rumput/ pandan, dll",
                    value:
                      "8. Industri anyaman dari rotan/ bambu/ rumput/ pandan, dll",
                  },
                  {
                    label:
                      "9. Industri makanan dan minuman (pengolahan dan pengawetan daging, ikan, buah-buahan, minyak dan lemak, susu dan makanan dari susu, dll)",
                    value:
                      "9. Industri makanan dan minuman (pengolahan dan pengawetan daging, ikan, buah-buahan, minyak dan lemak, susu dan makanan dari susu, dll)",
                  },
                  {
                    label: "10. industri tembakau",
                    value: "10. industri tembakau",
                  },
                  {
                    label: "11. industri lainnya, sebutkan",
                    value: "11. industri lainnya, sebutkan",
                  },
                ]}
                placeholder={"Pilih jenis industri"}
              />
              {watch(`${fieldName}.${index}.jenis_industri`) &&
              watch(`${fieldName}.${index}.jenis_industri`).match(
                /(lainnya)/
              ) ? (
                <FormInputControl
                  required={required}
                  isInvalid={!!errors?.fieldName?.index?.jenis_industri_lainnya}
                  message={
                    errors?.fieldName?.index?.jenis_industri_lainnya?.message
                  }
                  register={register(
                    `${fieldName}.${index}.jenis_industri_lainnya`
                  )}
                  placeholder={`Masukkan jenis industri lainnya`}
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

            <FormInputControl
              labelName={
                "Jumlah industri kecil dan rumah tangga (pekerja dibawah 20 orang)"
              }
              required={required}
              isInvalid={
                !!errors?.fieldName?.index
                  ?.jumlah_industri_kecil_dan_rumah_tangga
              }
              message={
                errors?.fieldName?.index?.jumlah_industri_kecil_dan_rumah_tangga
                  ?.message
              }
              type={"number"}
              register={register(
                `${fieldName}.${index}.jumlah_industri_kecil_dan_rumah_tangga`
              )}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah industri sedang dan besar"}
              required={required}
              isInvalid={
                !!errors?.fieldName?.index?.jumlah_industri_sedang_dan_besar
              }
              message={
                errors?.fieldName?.index?.jumlah_industri_sedang_dan_besar
                  ?.message
              }
              type={"number"}
              register={register(
                `${fieldName}.${index}.jumlah_industri_sedang_dan_besar`
              )}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah manajemen (orang)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_manajemen}
              message={errors?.fieldName?.index?.jumlah_manajemen?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah_manajemen`)}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah pekerja (orang)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_pekerja}
              message={errors?.fieldName?.index?.jumlah_pekerja?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah_pekerja`)}
              placeholder={`Masukkan jumlah`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
