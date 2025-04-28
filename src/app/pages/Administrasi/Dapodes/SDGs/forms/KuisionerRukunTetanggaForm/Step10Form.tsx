import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { FieldArray } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import FormInputControl from "@app/components/Input/FormInputControl"
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
    })
  ),
})

export function Step10Form() {
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
        <div>
          <h5>LEMBAGA KEAGAMAAN</h5>
          <h6></h6>
          <Row>
            <Col sm>
              <LembagaKeagamaanFieldArray />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function LembagaKeagamaanFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="keberadaan_lembaga_keagamaan"
        required={false}
        defaultValue={{
          fasilitas: "",
          jumlah_anggota: 0,
          jumlah_pengurus: 0,
          nama_lembaga_keagamaan: "",
        }}
        title="234. Keberadaan lembaga keagamaan"
        subtitle="Lembaga keagamaan">
        {({ index, required, fieldName, register, control, errors }: any) => (
          <>
            <FormInputControl
              labelName={"Nama lembaga keagamaan"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.nama_lembaga_keagamaan}
              message={
                errors?.fieldName?.index?.nama_lembaga_keagamaan?.message
              }
              type={"text"}
              register={register(
                `${fieldName}.${index}.nama_lembaga_keagamaan`
              )}
              placeholder={`Masukkan nama lembaga keagamaan`}
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
                  { label: "Ada, rusak sedang", value: "Ada, rusak sedang" },
                  { label: "Ada, rusak parah", value: "Ada, rusak parah" },
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
