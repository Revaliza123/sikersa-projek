import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Form } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import FormInputControl from "@app/components/Input/FormInputControl"
import SelectStatic from "@app/components/Select/SelectStatic"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import { SDGSKuesionerDesaField } from "@app/interface/sdgs-kuesioner.interface"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  pengurus_bumdes: Yup.array().of(
    Yup.object().shape({
      jabatan: Yup.string(),
      nama: Yup.string(),
      nik: Yup.string(),
      nomor_hp: Yup.string(),
    })
  ),
})

export function Step11Form() {
  const { updateFormData, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized || SDGSKuesionerDesaField,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <LembagaKemasyarakatanDesaFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function LembagaKemasyarakatanDesaFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="pengurus_bumdes"
        required={false}
        defaultValue={{
          jabatan: "",
          nama: "",
          nik: "",
          nomor_hp: "",
        }}
        title="76. Pengurus Bumdes"
        subtitle="Pengurus Bumdes">
        {({ index, required, fieldName, register, control, errors }: any) => (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Jabatan {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors}
                fieldName={`${fieldName}.${index}.jabatan`}
                options={[
                  { label: "Pembina/Komisaris", value: "Pembina/Komisaris" },
                  { label: "Pengawas", value: "Pengawas" },
                  { label: "Direksi", value: "Direksi" },
                ]}
                placeholder={"Pilih jabatan"}
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
              labelName={"Nama"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.nama`)}
              placeholder={`Masukkan nama`}
            />

            <FormInputControl
              labelName={"NIK"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.nik`)}
              placeholder={`Masukkan NIK`}
            />

            <FormInputControl
              labelName={"Nomor HP"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.nomor_hp`)}
              placeholder={`Masukkan nomor hp`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
