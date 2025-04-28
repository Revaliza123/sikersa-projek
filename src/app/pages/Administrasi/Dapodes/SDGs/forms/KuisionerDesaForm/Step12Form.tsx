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
  unit_usaha_bumdes: Yup.array().of(
    Yup.object().shape({
      aset_unit_usaha_tahun_lalu: Yup.number(),
      jumlah_pekerja: Yup.number(),
      jumlah_unit_usaha: Yup.number(),
      keuntungan_bersih_tahun_lalu: Yup.number(),
      nama_unit_usaha: Yup.string(),
      omset_tahun_lalu: Yup.number(),
    })
  ),
})

export function Step12Form() {
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
        fieldName="unit_usaha_bumdes"
        required={false}
        defaultValue={{
          aset_unit_usaha_tahun_lalu: 0,
          jumlah_pekerja: 0,
          jumlah_unit_usaha: 0,
          keuntungan_bersih_tahun_lalu: 0,
          nama_unit_usaha: "",
          omset_tahun_lalu: 0,
        }}
        title="77. Unit Usaha Bumdes"
        subtitle="Unit Usaha Bumdes">
        {({ index, required, fieldName, register, errors }: any) => (
          <>
            <FormInputControl
              labelName={"Nama Unit Usaha"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.nama_unit_usaha`)}
              placeholder={`Masukkan nama`}
            />

            <FormInputControl
              labelName={"Jumlah Unit Usaha"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.jumlah_unit_usaha`)}
              type={"number"}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah Pekerja (jiwa)"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.jumlah_pekerja`)}
              type={"number"}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Keuntungan Bersih Tahun Lalu (Rp)"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(
                `${fieldName}.${index}.keuntungan_bersih_tahun_lalu`
              )}
              type={"number"}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Omzet Tahun Lalu (Rp)"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.omset_tahun_lalu`)}
              type={"number"}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Aset Unit Usaha Tahun Lalu (Rp)"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(
                `${fieldName}.${index}.aset_unit_usaha_tahun_lalu`
              )}
              type={"number"}
              placeholder={`Masukkan jumlah`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
