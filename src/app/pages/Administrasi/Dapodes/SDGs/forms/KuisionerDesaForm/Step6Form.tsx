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
import { SDGSKuesionerDesaField } from "@app/interface/sdgs-kuesioner.interface"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  nilai_aset_desa: Yup.array().of(
    Yup.object().shape({
      aset: Yup.string().required(),
      aset_lainnya: Yup.string().when("aset", {
        is: (value: string) => value && value.match(/(lainnya)/gi),
        then: Yup.string().required(),
      }),
      volume: Yup.number(),
      nilai_rp: Yup.number(),
    })
  ),
})

export function Step6Form() {
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
        <PemerintahDesaFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function PemerintahDesaFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="nilai_aset_desa"
        required={true}
        defaultValue={{
          aset: "",
          volume: 0,
          nilai_rp: 0,
        }}
        title="43. Nilai Aset Desa"
        subtitle="Aset Desa">
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
              <Form.Label>Aset {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors}
                fieldName={`${fieldName}.${index}.aset`}
                options={[
                  {
                    label: "Bumdes dan Bumdesma",
                    value: "Bumdes dan Bumdesma",
                  },
                  { label: "Tanah Desa", value: "Tanah Desa" },
                  {
                    label: "Bangunan Milik Desa",
                    value: "Bangunan Milik Desa",
                  },
                  { label: "Pasar Desa", value: "Pasar Desa" },
                  {
                    label: "Tempat Pelelangan Ikan",
                    value: "Tempat Pelelangan Ikan",
                  },
                  { label: "Pertokoan", value: "Pertokoan" },
                  { label: "Tambatan Perahu", value: "Tambatan Perahu" },
                  { label: "Pemandian Umum", value: "Pemandian Umum" },
                  { label: "Lapangan Olahraga", value: "Lapangan Olahraga" },
                  { label: "Lokasi Wisata", value: "Lokasi Wisata" },
                  { label: "Aset Desa Lainnya", value: "Aset Desa Lainnya" },
                ]}
                placeholder={"Pilih jenis industri"}
              />
              {watch(`${fieldName}.${index}.aset`) &&
              watch(`${fieldName}.${index}.aset`).match(/(lainnya)/gi) ? (
                <FormInputControl
                  required={required}
                  isInvalid={!!errors?.fieldName?.index?.aset_lainnya}
                  message={errors?.fieldName?.index?.aset_lainnya?.message}
                  register={register(`${fieldName}.${index}.aset_lainnya`)}
                  placeholder={`Masukkan aset lainnya`}
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
              labelName={"Volume"}
              required={false}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.volume`)}
              type={"number"}
              placeholder={`Masukkan volume`}
            />

            <FormInputControl
              labelName={"Nilai Rp"}
              required={false}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.nilai_rp`)}
              type={"number"}
              placeholder={`Masukkan nilai`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
