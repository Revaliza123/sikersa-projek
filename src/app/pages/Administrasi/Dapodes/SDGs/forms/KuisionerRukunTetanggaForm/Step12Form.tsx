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
  kejadian_perkelahian_massal_setahun_terakhir: Yup.array().of(
    Yup.object().shape({
      jenis_perkelahian_massal: Yup.string(),
      jenis_perkelahian_massal_lainnya: Yup.string().when(
        "jenis_perkelahian_massal",
        {
          is: (value: string) => value && value.match(/(lainnya)/),
          then: Yup.string(),
        }
      ),
      jumlah_kejadian: Yup.number(),
      korban_luka_luka: Yup.number(),
      korban_tewas: Yup.number(),
      penyebab_utama: Yup.string(),
      penyebab_utama_lainnya: Yup.string().when("penyebab_utama", {
        is: (value: string) => value && value.match(/(lainnya)/),
        then: Yup.string(),
      }),
      penyelesaian: Yup.string(),
      pihak_pendamai_utama: Yup.string(),
      pihak_pendamai_utama_lainnya: Yup.string().when("pihak_pendamai_utama", {
        is: (value: string) => value && value.match(/(lainnya)/),
        then: Yup.string(),
      }),
    })
  ),
})

export function Step12Form() {
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
        <LembagaKeagamaanFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function LembagaKeagamaanFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="kejadian_perkelahian_massal_setahun_terakhir"
        required={false}
        defaultValue={{
          jenis_perkelahian_massal: "",
          jumlah_kejadian: 0,
          korban_luka_luka: 0,
          korban_tewas: 0,
          penyebab_utama: "",
          penyelesaian: "",
          pihak_pendamai_utama: "",
        }}
        title="236. Kejadian perkelahian massal setahun terakhir"
        subtitle="Keamanan">
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
                Jenis perkelahian massal {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.jenis_perkelahian_massal}
                fieldName={`${fieldName}.${index}.jenis_perkelahian_massal`}
                options={[
                  {
                    label: "1. antar kelompok masyarakat",
                    value: "1. antar kelompok masyarakat",
                  },
                  {
                    label: "2. kelompok masyarakat antar desa",
                    value: "2. kelompok masyarakat antar desa",
                  },
                  {
                    label: "3. kelompok masyarakat dengan aparat keamanan",
                    value: "3. kelompok masyarakat dengan aparat keamanan",
                  },
                  {
                    label: "4. kelompok masyarakat dengan aparat pemerintah",
                    value: "4. kelompok masyarakat dengan aparat pemerintah",
                  },
                  {
                    label: "5. antar aparat keamanan",
                    value: "5. antar aparat keamanan",
                  },
                  {
                    label: "6. antar aparat pemerintah",
                    value: "6. antar aparat pemerintah",
                  },
                  {
                    label: "7. pelajar/ mahasiswa",
                    value: "7. pelajar/ mahasiswa",
                  },
                  { label: "8. antar suku", value: "8. antar suku" },
                  { label: "9. lainnya", value: "9. lainnya" },
                ]}
                placeholder={"Pilih jenis perkelahian"}
              />
              {watch(`${fieldName}.${index}.jenis_perkelahian_massal`) &&
              watch(`${fieldName}.${index}.jenis_perkelahian_massal`).match(
                /(lainnya)/
              ) ? (
                <FormInputControl
                  required={required}
                  isInvalid={
                    !!errors?.fieldName?.index?.jenis_perkelahian_massal_lainnya
                  }
                  message={
                    errors?.fieldName?.index?.jenis_perkelahian_massal_lainnya
                      ?.message
                  }
                  register={register(
                    `${fieldName}.${index}.jenis_perkelahian_massal_lainnya`
                  )}
                  placeholder={`Masukkan jenis perkelahian massal lainnya`}
                />
              ) : null}
              {/* <FieldLainnya
              control={control}
              fieldName={`${fieldName}.${index}.sumber_penghasilan`}
              index={index} 
              required={false}
              register={register}
              errors={errors?.fieldName?.index?.jenis_perkelahian_massal}
            /> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Penyebab utama {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.penyebab_utama}
                fieldName={`${fieldName}.${index}.penyebab_utama`}
                options={[
                  { label: "1. harta", value: "1. harta" },
                  { label: "2. kekuasaan", value: "2. kekuasaan" },
                  { label: "3. asmara", value: "3. asmara" },
                  { label: "4. ideologi", value: "4. ideologi" },
                  {
                    label: "5. agama/kepercayaan",
                    value: "5. agama/kepercayaan",
                  },
                  {
                    label: "6. keramaian (olah raga, hiburan, dll)",
                    value: "6. keramaian (olah raga, hiburan, dll)",
                  },
                  {
                    label: "7. ketidakpuasan atas kebijakan/ pelayanan",
                    value: "7. ketidakpuasan atas kebijakan/ pelayanan",
                  },
                  { label: "8. lainnya", value: "8. lainnya" },
                ]}
                placeholder={"Pilih penyebab"}
              />
              {watch(`${fieldName}.${index}.penyebab_utama`) &&
              watch(`${fieldName}.${index}.penyebab_utama`).match(
                /(lainnya)/
              ) ? (
                <FormInputControl
                  required={required}
                  isInvalid={!!errors?.fieldName?.index?.penyebab_utama_lainnya}
                  message={
                    errors?.fieldName?.index?.penyebab_utama_lainnya?.message
                  }
                  register={register(
                    `${fieldName}.${index}.penyebab_utama_lainnya`
                  )}
                  placeholder={`Masukkan penyebab utama lainnya`}
                />
              ) : null}
              {/* <FieldLainnya
              control={control}
              fieldName={`${fieldName}.${index}.sumber_penghasilan`}
              index={index} 
              required={false}
              register={register}
              errors={errors?.fieldName?.index?.sumber_penghasilan}
            /> */}
            </Form.Group>

            <FormInputControl
              labelName={"Jumlah kejadian"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_kejadian}
              message={errors?.fieldName?.index?.jumlah_kejadian?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah_kejadian`)}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Korban Luka-luka (jiwa)"}
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
              isInvalid={!!errors?.fieldName?.index?.korban_tewas}
              message={errors?.fieldName?.index?.korban_tewas?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.korban_tewas`)}
              placeholder={`Masukkan jumlah`}
            />

            <Form.Group className="mb-3">
              <Form.Label>
                Penyelesaian {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.penyelesaian}
                fieldName={`${fieldName}.${index}.penyelesaian`}
                options={[
                  { label: "Ya, semuanya", value: "Ya, semuanya" },
                  { label: "Ya, sebagian", value: "Ya, sebagian" },
                  { label: "Tidak ada", value: "Tidak ada" },
                ]}
                placeholder={"Pilih penyelesaian"}
              />
              {/* <FieldLainnya
              control={control}
              fieldName={`${fieldName}.${index}.sumber_penghasilan`}
              index={index} 
              required={false}
              register={register}
              errors={errors?.fieldName?.index?.sumber_penghasilan}
            /> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Pihak pendamai utama {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.pihak_pendamai_utama}
                fieldName={`${fieldName}.${index}.pihak_pendamai_utama`}
                options={[
                  { label: "1. aparat keamanan", value: "1. aparat keamanan" },
                  {
                    label: "2. aparat pemerintah desa",
                    value: "2. aparat pemerintah desa",
                  },
                  {
                    label: "3. aparat pemerintah daerah",
                    value: "3. aparat pemerintah daerah",
                  },
                  {
                    label: "4. tokoh masyarakat",
                    value: "4. tokoh masyarakat",
                  },
                  { label: "5. tokoh agama", value: "5. tokoh agama" },
                  { label: "6. lainnya", value: "6. lainnya" },
                  { label: "7. tidak ada", value: "7. tidak ada" },
                ]}
                placeholder={"Pilih"}
              />
              {watch(`${fieldName}.${index}.pihak_pendamai_utama`) &&
              watch(`${fieldName}.${index}.pihak_pendamai_utama`).match(
                /(lainnya)/
              ) ? (
                <FormInputControl
                  required={required}
                  isInvalid={
                    !!errors?.fieldName?.index?.pihak_pendamai_utama_lainnya
                  }
                  message={
                    errors?.fieldName?.index?.pihak_pendamai_utama_lainnya
                      ?.message
                  }
                  register={register(
                    `${fieldName}.${index}.pihak_pendamai_utama_lainnya`
                  )}
                  placeholder={`Masukkan pihak pendamai utama lainnya`}
                />
              ) : null}
              {/* <FieldLainnya
              control={control}
              fieldName={`${fieldName}.${index}.sumber_penghasilan`}
              index={index} 
              required={false}
              register={register}
              errors={errors?.fieldName?.index?.sumber_penghasilan}
            /> */}
            </Form.Group>
          </>
        )}
      </FieldArray>
    </>
  )
}
