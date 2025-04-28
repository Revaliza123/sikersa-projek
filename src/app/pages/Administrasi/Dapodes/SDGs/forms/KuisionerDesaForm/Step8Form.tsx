import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Form } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
import { SDGSKuesionerDesaField } from "@app/interface/sdgs-kuesioner.interface"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  kerja_sama_desa: Yup.array().of(
    Yup.object().shape({
      jumlah_pemanfaat: Yup.number(),
      lingkup_kerja_sama: Yup.string(),
      nilai_kerja_sama: Yup.number(),
      pihak_yang_diajak_kerja_sama: Yup.string(),
      tahun_kerja_sama_berakhir: Yup.string(),
    })
  ),
})

export function Step8Form() {
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
        <KerjasamaDesaFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function KerjasamaDesaFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="kerja_sama_desa"
        required={false}
        defaultValue={{
          pihak_yang_diajak_kerja_sama: "",
          lingkup_kerja_sama: "",
          tahun_kerja_sama_berakhir: "",
          jumlah_pemanfaat: 0,
          nilai_kerja_sama: 0,
        }}
        title="61. Kerjasama desa"
        subtitle="Kerjasama Desa">
        {({ index, required, fieldName, register, errors }: any) => (
          <>
            <FormInputControl
              labelName={"Pihak yang diajak kerja sama"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(
                `${fieldName}.${index}.pihak_yang_diajak_kerja_sama`
              )}
              placeholder={`Masukkan pihak yang diajak kerja sama`}
            />

            <Form.Group>
              <Form.Label>
                Lingkup Kerja Sama <RequiredInfo />
              </Form.Label>
              <div className="my-2">
                <Form.Check
                  inline
                  label="Antar desa"
                  value="Antar desa"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.lingkup_kerja_sama}
                  {...register(`${fieldName}.${index}.lingkup_kerja_sama`)}
                />
                <Form.Check
                  inline
                  label="Dengan pemerintah daerah"
                  value="Dengan pemerintah daerah"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.lingkup_kerja_sama}
                  {...register(`${fieldName}.${index}.lingkup_kerja_sama`)}
                />
                <Form.Check
                  inline
                  label="Dengan Pemerintah pusat"
                  value="Dengan Pemerintah pusat"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.lingkup_kerja_sama}
                  {...register(`${fieldName}.${index}.lingkup_kerja_sama`)}
                />
                <Form.Check
                  inline
                  label="Dengan swasta"
                  value="Dengan swasta"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.lingkup_kerja_sama}
                  {...register(`${fieldName}.${index}.lingkup_kerja_sama`)}
                />
                <Form.Check
                  inline
                  label="Dengan lembaga internasional"
                  value="Dengan lembaga internasional"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.lingkup_kerja_sama}
                  {...register(`${fieldName}.${index}.lingkup_kerja_sama`)}
                />
              </div>
              {errors?.fieldName?.index?.lingkup_kerja_sama && (
                <div className="invalid-feedback d-block">
                  {errors?.fieldName?.index?.lingkup_kerja_sama?.message}
                </div>
              )}
            </Form.Group>

            <FormInputControl
              labelName={"Tahun kerja sama berakhir"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(
                `${fieldName}.${index}.tahun_kerja_sama_berakhir`
              )}
              type={"number"}
              placeholder={`Masukkan tahun kerja sama berakhir`}
            />

            <FormInputControl
              labelName={"Jumlah pemanfaat (jiwa)"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.jumlah_pemanfaat`)}
              type={"number"}
              placeholder={`Masukkan jumlah pemanfaat`}
            />

            <FormInputControl
              labelName={"Nilai kerja sama (Rp)"}
              required={required}
              isInvalid={!!errors[fieldName]}
              message={errors[fieldName]?.message}
              register={register(`${fieldName}.${index}.nilai_kerja_sama`)}
              type={"number"}
              placeholder={`Masukkan nilai kerja sama`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
