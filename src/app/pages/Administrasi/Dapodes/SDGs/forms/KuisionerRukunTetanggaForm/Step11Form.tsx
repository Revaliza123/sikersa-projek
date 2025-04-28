import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Button, Form } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import FormInputControl from "@app/components/Input/FormInputControl"
import TrashIcon from "@app/components/Icons/TrashIcon"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import SelectStatic from "@app/components/Select/SelectStatic"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  keberadaan_lembaga_kemasyarakatan_desa: Yup.array().of(
    Yup.object().shape({
      fasilitas: Yup.string(),
      jumlah_anggota: Yup.number(),
      jumlah_kelompok_lembaga: Yup.number(),
      jumlah_pengurus: Yup.number(),
      nama_lembaga_kemasyarakatan_desa: Yup.string(),
      nama_lembaga_kemasyarakatan_desa_lainnya: Yup.string().when(
        "nama_lembaga_kemasyarakatan_desa",
        {
          is: (value: string) => value && value.match(/(lainnya)/),
          then: Yup.string(),
        }
      ),
    })
  ),
})

export function Step11Form() {
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
        <LembagaKemasyarakatDesaFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function LembagaKemasyarakatDesaFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="keberadaan_lembaga_kemasyarakatan_desa"
        required={false}
        defaultValue={{
          fasilitas: "",
          jumlah_anggota: 0,
          jumlah_kelompok_lembaga: 0,
          jumlah_pengurus: 0,
          nama_lembaga_kemasyarakatan_desa: "",
        }}
        title="235. Keberadaan lembaga kemasyarakatan desa"
        subtitle="Lembaga kemasyarakatan desa">
        {({
          index,
          required,
          remove,
          fieldName,
          register,
          control,
          errors,
          watch,
        }: any) => (
          <>
            <div className="d-flex justify-content-between mt-3">
              <p className="fs-5 fw-bold">
                <span className="text-success">{index + 1}</span>
              </p>
              <Button
                onClick={() => remove(index)}
                type="button"
                variant="outline-danger">
                <TrashIcon />
              </Button>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>
                Nama lembaga kemasyarakatan desa {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={
                  errors?.fieldName?.index?.nama_lembaga_kemasyarakatan_desa
                }
                fieldName={`${fieldName}.${index}.nama_lembaga_kemasyarakatan_desa`}
                options={[
                  { label: "1. kelompok tani", value: "1. kelompok tani" },
                  {
                    label: "2. masyarakat (pokmas)",
                    value: "2. masyarakat (pokmas)",
                  },
                  { label: "3. pengelola air", value: "3. pengelola air" },
                  { label: "4. musik", value: "4. musik" },
                  {
                    label: "5. musik tradisional/etnis",
                    value: "5. musik tradisional/etnis",
                  },
                  { label: "6. tari", value: "6. tari" },
                  {
                    label: "7. tari tradisional/etnis",
                    value: "7. tari tradisional/etnis",
                  },
                  { label: "8. lukis", value: "8. lukis" },
                  { label: "9. drama", value: "9. drama" },
                  { label: "10. fotografi", value: "10. fotografi" },
                  {
                    label: "11. kesenian lainnya",
                    value: "11. kesenian lainnya",
                  },
                  { label: "12. sepakbola", value: "12. sepakbola" },
                  { label: "13. bola voli", value: "13. bola voli" },
                  { label: "14. bulu tangkis", value: "14. bulu tangkis" },
                  { label: "15. bola basket", value: "15. bola basket" },
                  { label: "16. tenis lapangan", value: "16. tenis lapangan" },
                  { label: "17. tenis meja", value: "17. tenis meja" },
                  { label: "18. futsal", value: "18. futsal" },
                  { label: "19. renang", value: "19. renang" },
                  { label: "20. bela diri", value: "20. bela diri" },
                  { label: "21. biliar", value: "21. biliar" },
                  {
                    label: "22. fitness/aerobik",
                    value: "22. fitness/aerobik",
                  },
                  {
                    label: "23. olah raga lainnya",
                    value: "23. olah raga lainnya",
                  },
                ]}
                placeholder={"Pilih"}
              />
              {watch(
                `${fieldName}.${index}.nama_lembaga_kemasyarakatan_desa`
              ) &&
              watch(
                `${fieldName}.${index}.nama_lembaga_kemasyarakatan_desa`
              ).match(/(lainnya)/) ? (
                <FormInputControl
                  required={required}
                  isInvalid={
                    !!errors?.fieldName?.index
                      ?.nama_lembaga_kemasyarakatan_desa_lainnya
                  }
                  message={
                    errors?.fieldName?.index
                      ?.nama_lembaga_kemasyarakatan_desa_lainnya?.message
                  }
                  register={register(
                    `${fieldName}.${index}.nama_lembaga_kemasyarakatan_desa_lainnya`
                  )}
                  placeholder={`Masukkan nama lembaga kemasyarakatan desa lainnya`}
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
              labelName={"Jumlah kelompok/lembaga"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_kelompok_lembaga}
              message={
                errors?.fieldName?.index?.jumlah_kelompok_lembaga?.message
              }
              type={"number"}
              register={register(
                `${fieldName}.${index}.jumlah_kelompok_lembaga`
              )}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah pengurus (jiwa)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_pengurus}
              message={errors?.fieldName?.index?.jumlah_pengurus?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah_pengurus`)}
              placeholder={`Masukkan jumlah`}
            />

            <FormInputControl
              labelName={"Jumlah anggota (jiwa)"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah_anggota}
              message={errors?.fieldName?.index?.jumlah_anggota?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah_anggota`)}
              placeholder={`Masukkan jumlah`}
            />

            <Form.Group className="mb-3">
              <Form.Label>Fasilitas {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.fasilitas}
                fieldName={`${fieldName}.${index}.fasilitas`}
                options={[
                  { label: "Ada, baik", value: "Ada, baik" },
                  { label: "Tidak ada", value: "Tidak ada" },
                ]}
                placeholder={"Pilih fasilitas"}
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
          </>
        )}
      </FieldArray>
    </>
  )
}
