import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import FormInputControl from "@app/components/Input/FormInputControl"
import { SDGSKuesionerDesaField } from "@app/interface/sdgs-kuesioner.interface"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  lembaga_kemasyarakatan_desa: Yup.array().of(
    Yup.object().shape({
      jumlah_anggota: Yup.number(),
      jumlah_pengurus: Yup.number(),
      nama_lembaga: Yup.string(),
    })
  ),
})

export function Step9Form() {
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
        fieldName="lembaga_kemasyarakatan_desa"
        required={false}
        defaultValue={{
          jumlah_anggota: 0,
          jumlah_pengurus: 0,
          nama_lembaga: "",
        }}
        title="62. Lembaga Kemasyarakatan Desa"
        subtitle="Lembaga Kemasyarakatan Desa"
        helperText="Contoh lembaga: PKK, Karang Taruna, Adat, Anak dan Perempuan, Perlindungan Masyarakat, dll">
        {({ index, required, fieldName, register, errors }: any) => (
          <>
            <FormInputControl
              labelName={"Nama Lembaga"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.nama_lembaga`)}
              placeholder={`Masukkan nama lembaga`}
            />

            <FormInputControl
              labelName={"Jumlah pengurus"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.jumlah_pengurus`)}
              type={"number"}
              placeholder={`Masukkan jumlah pengurus`}
            />

            <FormInputControl
              labelName={"Jumlah anggota"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.jumlah_anggota`)}
              type={"number"}
              placeholder={`Masukkan jumlah anggota`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
