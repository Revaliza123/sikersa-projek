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
  transportasi: Yup.array().of(
    Yup.object().shape({
      biaya: Yup.number().required(),
      dari_kantor_kepala_desa_ke: Yup.string().required(),
      jarak_tempuh: Yup.number().required(),
      jenis_angkutan_umum_yang_ada: Yup.string().required(),
      sarana_transportasi_yang_biasa_digunakan: Yup.string().required(),
      waktu_tempuh: Yup.number().required(),
    })
  ),
})

export function Step13Form() {
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
        fieldName="transportasi"
        required={true}
        defaultValue={{
          biaya: 0,
          dari_kantor_kepala_desa_ke: "",
          jarak_tempuh: 0,
          jenis_angkutan_umum_yang_ada: "",
          sarana_transportasi_yang_biasa_digunakan: "",
          transportasi: "",
          waktu_tempuh: 0,
        }}
        title="78. Transportasi"
        subtitle="Transportasi">
        {({ index, required, control, fieldName, register, errors }: any) => (
          <>
            <Form.Group className="mb-3">
              <Form.Label>
                Dari kantor kepala desa ke {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors}
                fieldName={`${fieldName}.${index}.dari_kantor_kepala_desa_ke`}
                options={[
                  { label: "Kantor Camat", value: "Kantor Camat" },
                  { label: "Kantor Bupati", value: "Kantor Bupati" },
                  {
                    label: "Kantor Camat Lain Terdekat",
                    value: "Kantor Camat Lain Terdekat",
                  },
                  { label: "Kantor Bupati Lain Terdekat", value: "lainnya" },
                ]}
                placeholder={"Pilih tujuan"}
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

            <Form.Group>
              <Form.Label>
                Sarana transportasi yang biasa digunakan <RequiredInfo />
              </Form.Label>
              <div className="my-2">
                <Form.Check
                  inline
                  label="Angkutan umum"
                  value="Angkutan umum"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index
                      ?.sarana_transportasi_yang_biasa_digunakan
                  }
                  {...register(
                    `${fieldName}.${index}.sarana_transportasi_yang_biasa_digunakan`
                  )}
                />
                <Form.Check
                  inline
                  label="Kendaraan pribadi"
                  value="Kendaraan pribadi"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index
                      ?.sarana_transportasi_yang_biasa_digunakan
                  }
                  {...register(
                    `${fieldName}.${index}.sarana_transportasi_yang_biasa_digunakan`
                  )}
                />
                <Form.Check
                  inline
                  label="Sepeda, becak, bentor, delman"
                  value="Sepeda, becak, bentor, delman"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index
                      ?.sarana_transportasi_yang_biasa_digunakan
                  }
                  {...register(
                    `${fieldName}.${index}.sarana_transportasi_yang_biasa_digunakan`
                  )}
                />
                <Form.Check
                  inline
                  label="Jalan kaki"
                  value="Jalan kaki"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index
                      ?.sarana_transportasi_yang_biasa_digunakan
                  }
                  {...register(
                    `${fieldName}.${index}.sarana_transportasi_yang_biasa_digunakan`
                  )}
                />
              </div>
              {errors?.fieldName?.index
                ?.sarana_transportasi_yang_biasa_digunakan && (
                <div className="invalid-feedback d-block">
                  {
                    errors?.fieldName?.index
                      ?.sarana_transportasi_yang_biasa_digunakan?.message
                  }
                </div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Jenis angkutan umum yang ada <RequiredInfo />
              </Form.Label>
              <div className="my-2">
                <Form.Check
                  inline
                  label="Ojek sepeda motor"
                  value="Ojek sepeda motor"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index?.jenis_angkutan_umum_yang_ada
                  }
                  {...register(
                    `${fieldName}.${index}.jenis_angkutan_umum_yang_ada`
                  )}
                />
                <Form.Check
                  inline
                  label="Kendaraan bermotor roda 3 atau lebih"
                  value="Kendaraan bermotor roda 3 atau lebih"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index?.jenis_angkutan_umum_yang_ada
                  }
                  {...register(
                    `${fieldName}.${index}.jenis_angkutan_umum_yang_ada`
                  )}
                />
                <Form.Check
                  inline
                  label="Perahu"
                  value="Perahu"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index?.jenis_angkutan_umum_yang_ada
                  }
                  {...register(
                    `${fieldName}.${index}.jenis_angkutan_umum_yang_ada`
                  )}
                />
                <Form.Check
                  inline
                  label="Lainnya (becak, delman, pedat, dll)"
                  value="Lainnya (becak, delman, pedat, dll)"
                  type={"radio"}
                  isInvalid={
                    !!errors?.fieldName?.index?.jenis_angkutan_umum_yang_ada
                  }
                  {...register(
                    `${fieldName}.${index}.jenis_angkutan_umum_yang_ada`
                  )}
                />
              </div>
              {errors?.fieldName?.index?.jenis_angkutan_umum_yang_ada && (
                <div className="invalid-feedback d-block">
                  {
                    errors?.fieldName?.index?.jenis_angkutan_umum_yang_ada
                      ?.message
                  }
                </div>
              )}
            </Form.Group>

            <FormInputControl
              labelName={"Jarak tempuh (km)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jarak_tempuh}
              message={errors?.fieldName?.index?.jarak_tempuh?.message}
              register={register(`${fieldName}.${index}.jarak_tempuh`)}
              type={"number"}
              placeholder={`Masukkan jarak`}
            />

            <FormInputControl
              labelName={"Waktu tempuh (menit)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.waktu_tempuh}
              message={errors?.fieldName?.index?.waktu_tempuh?.message}
              register={register(`${fieldName}.${index}.waktu_tempuh`)}
              type={"number"}
              placeholder={`Masukkan waktu`}
            />

            <FormInputControl
              labelName={"Biaya (x Rp1000)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.biaya}
              message={errors?.fieldName?.index?.biaya?.message}
              register={register(`${fieldName}.${index}.biaya`)}
              type={"number"}
              placeholder={`Masukkan jumlah`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
