import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Form } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import FormInputControl from "@app/components/Input/FormInputControl"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import SelectStatic from "@app/components/Select/SelectStatic"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  tindak_kejahatan_yang_terjadi_selama_setahun_terakhir: Yup.array().of(
    Yup.object().shape({
      jenis_kejahatan: Yup.string(),
      jenis_kejahatan_lainnya: Yup.string().when("jenis_kejahatan", {
        is: (value: string) => value && value.match(/(lainnya)/),
        then: Yup.string(),
      }),
      jumlah_kasus: Yup.number(),
      jumlah_kasus_selesai_ditangani: Yup.number(),
      jumlah_kasus_tidak_bisa_ditangani: Yup.number(),
      korban_luka_luka: Yup.number(),
      korban_tewas: Yup.number(),
    })
  ),
})

export function Step13Form() {
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
        <TindakKejahatanFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function TindakKejahatanFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="tindak_kejahatan_yang_terjadi_selama_setahun_terakhir"
        required={false}
        defaultValue={{
          jenis_kejahatan: "",
          jumlah_kasus: 0,
          jumlah_kasus_selesai_ditangani: 0,
          jumlah_kasus_tidak_bisa_ditangani: 0,
          korban_luka_luka: 0,
          korban_tewas: 0,
        }}
        title="237. Tindak kejahatan yang terjadi di desa selama setahun terakhir"
        subtitle="Tindak kejahatan">
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
                Jenis kejahatan {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.jenis_kejahatan}
                fieldName={`${fieldName}.${index}.jenis_kejahatan`}
                options={[
                  { label: "1. Pencurian", value: "1. Pencurian" },
                  {
                    label: "2. Pencurian dengan kekerasan",
                    value: "2. Pencurian dengan kekerasan",
                  },
                  {
                    label: "3. Penipuan/ penggelapan",
                    value: "3. Penipuan/ penggelapan",
                  },
                  { label: "4. Penganiayaan", value: "4. Penganiayaan" },
                  { label: "5. Pembakaran", value: "5. Pembakaran" },
                  {
                    label: "6. Perkosaan/ kejahatan terhadap kesusilaan",
                    value: "6. Perkosaan/ kejahatan terhadap kesusilaan",
                  },
                  {
                    label: "7. Penyalahgunaan/ peredaran narkoba",
                    value: "7. Penyalahgunaan/ peredaran narkoba",
                  },
                  { label: "8. Perjudian", value: "8. Perjudian" },
                  { label: "9. Pembunuhan", value: "9. Pembunuhan" },
                  {
                    label: "10. Perdagangan orang (trafficking)",
                    value: "10. Perdagangan orang (trafficking)",
                  },
                  { label: "11. Korupsi", value: "11. Korupsi" },
                  { label: "12. Lainnya", value: "12. Lainnya" },
                ]}
                placeholder={"Pilih jenis kejahatan"}
              />
              {watch(`${fieldName}.${index}.jenis_kejahatan`) &&
              watch(`${fieldName}.${index}.jenis_kejahatan`).match(
                /(lainnya)/
              ) ? (
                <FormInputControl
                  required={required}
                  isInvalid={
                    !!errors?.fieldName?.index?.jenis_kejahatan_lainnya
                  }
                  message={
                    errors?.fieldName?.index?.jenis_kejahatan_lainnya?.message
                  }
                  register={register(
                    `${fieldName}.${index}.jenis_kejahatan_lainnya`
                  )}
                  placeholder={`Masukkan jenis kejahatan lainnya`}
                />
              ) : null}
              {/* <FieldLainnya
              control={control}
              fieldName={`${fieldName}.${index}.sumber_penghasilan`}
              index={index} 
              required={false}
              register={register}
              errors={errors?.fieldName?.index?.jenis}
            /> */}
            </Form.Group>

            <FormInputControl
              labelName={"Jumlah kasus"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_kasus}
              message={errors?.fieldName?.index?.jumlah_kasus?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah_kasus`)}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah kasus selesai ditangani"}
              required={required}
              isInvalid={
                !!errors?.fieldName?.index?.jumlah_kasus_selesai_ditangani
              }
              message={
                errors?.fieldName?.index?.jumlah_kasus_selesai_ditangani
                  ?.message
              }
              type={"number"}
              register={register(
                `${fieldName}.${index}.jumlah_kasus_selesai_ditangani`
              )}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah kasus tidak bisa ditangani"}
              required={required}
              isInvalid={
                !!errors?.fieldName?.index?.jumlah_kasus_tidak_bisa_ditangani
              }
              message={
                errors?.fieldName?.index?.jumlah_kasus_tidak_bisa_ditangani
                  ?.message
              }
              type={"number"}
              register={register(
                `${fieldName}.${index}.jumlah_kasus_tidak_bisa_ditangani`
              )}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Korban luka-luka (jiwa)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.korban_luka_luka}
              message={errors?.fieldName?.index?.korban_luka_luka?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.korban_luka_luka`)}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Korban tewas (jiwa)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_tewas}
              message={errors?.fieldName?.index?.jumlah_tewas?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah_tewas`)}
              placeholder={`Masukkan jumlah`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
