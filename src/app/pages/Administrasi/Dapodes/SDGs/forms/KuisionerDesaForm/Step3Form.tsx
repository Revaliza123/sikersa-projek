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
  musyawarah_desa: Yup.array().of(
    Yup.object().shape({
      bulan_ke: Yup.string().required(),
      agenda_musyawarah: Yup.string().required(),
      ada_dokumen_musyawarah: Yup.string(),
      unsur_masyarakat_yang_hadir: Yup.array().of(Yup.string()),
    })
  ),
})

export function Step3Form() {
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
        fieldName="musyawarah_desa"
        required={true}
        defaultValue={{
          bulan_ke: "",
          agenda_musyawarah: "",
          ada_dokumen_musyawarah: "",
          unsur_masyarakat_yang_hadir: [],
        }}
        title="37. Musyawarah desa tahun sebelumnya"
        subtitle="Musyawarah Desa">
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
              <Form.Label>Bulan ke {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors}
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
              labelName={"Agenda Musyawarah"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.agenda_musyawarah}
              message={errors?.fieldName?.index?.agenda_musyawarah?.message}
              register={register(`${fieldName}.${index}.agenda_musyawarah`)}
              placeholder={`Masukkan agenda musyawarah`}
            />

            <Form.Group>
              <Form.Label>Ada Dokumen Musyawarah?</Form.Label>
              <div className="my-2">
                <Form.Check
                  inline
                  label="Ya"
                  value="Ya"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.ada_dokumen_musyawarah}
                  {...register(`${fieldName}.${index}.ada_dokumen_musyawarah`)}
                />
                <Form.Check
                  inline
                  label="Tidak"
                  value="Tidak"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.ada_dokumen_musyawarah}
                  {...register(`${fieldName}.${index}.ada_dokumen_musyawarah`)}
                />
              </div>
              {errors?.fieldName?.index?.ada_dokumen_musyawarah && (
                <div className="invalid-feedback d-block">
                  {errors?.fieldName?.index?.ada_dokumen_musyawarah?.message}
                </div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Unsur Masyarakat yang Hadir <RequiredInfo />
              </Form.Label>
              <div className="my-2">
                <Form.Check
                  inline
                  label="Perempuan"
                  value="Perempuan"
                  type={"checkbox"}
                  isInvalid={
                    !!errors?.fieldName?.index?.unsur_masyarakat_yang_hadir
                  }
                  {...register(
                    `${fieldName}.${index}.unsur_masyarakat_yang_hadir`
                  )}
                />
                <Form.Check
                  inline
                  label="Tokoh Agama"
                  value="Tokoh Agama"
                  type={"checkbox"}
                  isInvalid={
                    !!errors?.fieldName?.index?.unsur_masyarakat_yang_hadir
                  }
                  {...register(
                    `${fieldName}.${index}.unsur_masyarakat_yang_hadir`
                  )}
                />
                <Form.Check
                  inline
                  label="Pengusaha"
                  value="Pengusaha"
                  type={"checkbox"}
                  isInvalid={
                    !!errors?.fieldName?.index?.unsur_masyarakat_yang_hadir
                  }
                  {...register(
                    `${fieldName}.${index}.unsur_masyarakat_yang_hadir`
                  )}
                />
                <Form.Check
                  inline
                  label="Lainnya"
                  value="Lainnya"
                  type={"checkbox"}
                  isInvalid={
                    !!errors?.fieldName?.index?.unsur_masyarakat_yang_hadir
                  }
                  {...register(
                    `${fieldName}.${index}.unsur_masyarakat_yang_hadir`
                  )}
                />
                {watch(`${fieldName}.${index}.unsur_masyarakat_yang_hadir`) &&
                watch(
                  `${fieldName}.${index}.unsur_masyarakat_yang_hadir`
                ).indexOf("Lainnya") > -1 ? (
                  <FormInputControl
                    required={required}
                    isInvalid={
                      !!errors?.fieldName?.index?.agenda_musyawarah_lainnya
                    }
                    message={
                      errors?.fieldName?.index?.agenda_musyawarah_lainnya
                        ?.message
                    }
                    register={register(
                      `${fieldName}.${index}.agenda_musyawarah_lainnya`
                    )}
                    placeholder={`Masukkan agenda musyawarah lainnya`}
                  />
                ) : null}
              </div>
              {errors?.fieldName?.index?.unsur_masyarakat_yang_hadir && (
                <div className="invalid-feedback d-block">
                  {
                    errors?.fieldName?.index?.unsur_masyarakat_yang_hadir
                      ?.message
                  }
                </div>
              )}
            </Form.Group>
          </>
        )}
      </FieldArray>
    </>
  )
}
