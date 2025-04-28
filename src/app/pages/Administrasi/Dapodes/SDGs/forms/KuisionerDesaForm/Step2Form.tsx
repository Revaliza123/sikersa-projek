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
  pemerintahan_desa: Yup.array().of(
    Yup.object().shape({
      jabatan: Yup.string().required(),
      nama: Yup.string().required(),
      nik: Yup.string().required(),
      jenis_kelamin: Yup.string().required(),
      no_hp: Yup.string().required(),
      menjabat_sejak_tahun: Yup.string(),
    })
  ),
})

export function Step2Form() {
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
        fieldName="pemerintahan_desa"
        required={true}
        defaultValue={{
          jabatan: "",
          jenis_kelamin: "",
          menjabat_sejak_tahun: "",
          nama: "",
          nik: "",
          no_hp: "",
        }}
        title={"36. Pemerintahan Desa"}
        subtitle={"Pemerintahan Desa"}>
        {({ index, fieldName, required, register, control, errors }: any) => (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Jabatan {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.jabatan}
                fieldName={`${fieldName}.${index}.jabatan`}
                options={[
                  { label: "Kepala Desa", value: "Kepala Desa" },
                  { label: "Sekretaris Desa", value: "Sekretaris Desa" },
                  { label: "Bendahara Desa", value: "Bendahara Desa" },
                  {
                    label: "Kepala Urusan Tata Usaha",
                    value: "Kepala Urusan Tata Usaha",
                  },
                  {
                    label: "Kepala Urusan Keuangan",
                    value: "Kepala Urusan Keuangan",
                  },
                  {
                    label: "Kepala Urusan perencanaan",
                    value: "Kepala Urusan perencanaan",
                  },
                  {
                    label: "Kepala Seksi Pemerintahan",
                    value: "Kepala Seksi Pemerintahan",
                  },
                  {
                    label: "Kepala Seksi Kesejahteraan",
                    value: "Kepala Seksi Kesejahteraan",
                  },
                  {
                    label: "Kepala Seksi Pelayanan",
                    value: "Kepala Seksi Pelayanan",
                  },
                  {
                    label: "Kepala Badan permusyawaratan Desa",
                    value: "Kepala Badan permusyawaratan Desa",
                  },
                  {
                    label: "Anggota Badan Permusyawaratan Desa",
                    value: "Anggota Badan Permusyawaratan Desa",
                  },
                  { label: "Pegawai Desa", value: "Pegawai Desa" },
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
              isInvalid={!!errors?.fieldName?.index?.nama}
              message={errors?.fieldName?.index?.nama?.message}
              register={register(`${fieldName}.${index}.nama`)}
              placeholder={`Masukkan nama`}
            />

            <Form.Group>
              <Form.Label>
                Jenis Kelamin <RequiredInfo />
              </Form.Label>
              <div className="my-2">
                <Form.Check
                  inline
                  label="Laki-Laki"
                  value="Laki-Laki"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.jenis_kelamin}
                  {...register(`${fieldName}.${index}.jenis_kelamin`)}
                />
                <Form.Check
                  inline
                  label="Perempuan"
                  value="Perempuan"
                  type={"radio"}
                  isInvalid={!!errors?.fieldName?.index?.jenis_kelamin}
                  {...register(`${fieldName}.${index}.jenis_kelamin`)}
                />
              </div>
              {errors?.fieldName?.index?.jenis_kelamin && (
                <div className="invalid-feedback d-block">
                  {errors?.fieldName?.index?.jenis_kelamin?.message}
                </div>
              )}
            </Form.Group>

            <FormInputControl
              labelName={"NIK"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.nik}
              message={errors?.fieldName?.index?.nik?.message}
              register={register(`${fieldName}.${index}.nik`)}
              placeholder={`Masukkan NIK`}
            />

            <FormInputControl
              labelName={"Nomor HP"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.no_hp}
              message={errors?.fieldName?.index?.no_hp?.message}
              register={register(`${fieldName}.${index}.no_hp`)}
              placeholder={`Masukkan nomor hp. Contoh: +6281234567890`}
            />

            <FormInputControl
              labelName={"Menjabat sejak tahun"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.menjabat_sejak_tahun}
              message={errors?.fieldName?.index?.menjabat_sejak_tahun?.message}
              register={register(`${fieldName}.${index}.menjabat_sejak_tahun`)}
              placeholder={`Masukkan tahun menjabat`}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}
