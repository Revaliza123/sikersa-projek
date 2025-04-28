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
  sarana_ekonomi_yang_tersedia: Yup.array().of(
    Yup.object().shape({
      jenis_industri: Yup.string(),
      jenis_industri_lainnya: Yup.string().when("jenis_industri", {
        is: (value: string) => value && value.match(/(lainnya)/),
        then: Yup.string(),
      }),
      jumlah: Yup.number(),
      kondisi: Yup.string(),
      kemudahan_untuk_mencapai: Yup.string(),
    })
  ),
})

export function Step7Form() {
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
        <SaranaEkonomiFieldArray />
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}

function SaranaEkonomiFieldArray() {
  return (
    <>
      <FieldArray
        fieldName="sarana_ekonomi_yang_tersedia"
        required={false}
        defaultValue={{
          jenis_industri: "",
          jumlah: 0,
          kondisi: "",
          kemudahan_untuk_mencapai: "",
        }}
        title="52. Sarana ekonomi yang tersedia"
        subtitle="Sarana ekonomi">
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
                Jenis Industri {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.jenis_industri}
                fieldName={`${fieldName}.${index}.jenis_industri`}
                options={[
                  {
                    label:
                      "1. Kelompok pertokoan (minimal 10 toko dan mengelompok dalam satu lokasi)",
                    value:
                      "1. Kelompok pertokoan (minimal 10 toko dan mengelompok dalam satu lokasi)",
                  },
                  {
                    label:
                      "2. Pasar dengan bangunan permanen (memiliki atap, lantai, dan dinding)",
                    value:
                      "2. Pasar dengan bangunan permanen (memiliki atap, lantai, dan dinding)",
                  },
                  {
                    label:
                      "3. Pasar dengan bangunan semi permanen (memiliki atap dan lantai, tanpa dinding)",
                    value:
                      "3. Pasar dengan bangunan semi permanen (memiliki atap dan lantai, tanpa dinding)",
                  },
                  {
                    label:
                      "4. Pasar tanpa bangunan (misalnya: pasar subuh, pasar terapung, dll.)",
                    value:
                      "4. Pasar tanpa bangunan (misalnya: pasar subuh, pasar terapung, dll.)",
                  },
                  {
                    label:
                      "5. Jumlah minimarket/swalayan (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang secara eceran dengan lable harga, sistem pelayanan mandiri, luas lantai < 400 m2)",
                    value:
                      "5. Jumlah minimarket/swalayan (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang secara eceran dengan lable harga, sistem pelayanan mandiri, luas lantai < 400 m2)",
                  },
                  {
                    label:
                      "6. Toko/warung kelontong (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang keperluan sehari-hari secara eceran, tanpa ada sistem pelayanan mandiri)",
                    value:
                      "6. Toko/warung kelontong (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang keperluan sehari-hari secara eceran, tanpa ada sistem pelayanan mandiri)",
                  },
                  {
                    label:
                      "7. Toko/warung kelontong yang menjual bahan pangan (sembako)",
                    value:
                      "7. Toko/warung kelontong yang menjual bahan pangan (sembako)",
                  },
                  {
                    label:
                      "8. Restoran/rumah makan (usaha pangan siap saji di bangunan tetap, pembeli biasanya dikenai pajak)",
                    value:
                      "8. Restoran/rumah makan (usaha pangan siap saji di bangunan tetap, pembeli biasanya dikenai pajak)",
                  },
                  {
                    label:
                      "9. Warung/kedai makanan minuman (usaha pangan siap saji di bangunan tetap, pembeli biasanya tidak dikenai pajak)",
                    value:
                      "9. Warung/kedai makanan minuman (usaha pangan siap saji di bangunan tetap, pembeli biasanya tidak dikenai pajak)",
                  },
                  {
                    label:
                      "10. Hotel (menyediakan jasa akomodasi dan ada restoran, penginapan dengan izin usaha sebagai hotel)",
                    value:
                      "10. Hotel (menyediakan jasa akomodasi dan ada restoran, penginapan dengan izin usaha sebagai hotel)",
                  },
                  {
                    label: "11. Bengkel mobil/motor",
                    value: "11. Bengkel mobil/motor",
                  },
                  {
                    label: "13. SalonKecantikan",
                    value: "13. SalonKecantikan",
                  },
                  {
                    label: "14. Agen Tiket/Travel/Biro Perjalanan",
                    value: "14. Agen Tiket/Travel/Biro Perjalanan",
                  },
                  { label: "15. Bank BRI", value: "15. Bank BRI" },
                  { label: "16. Agen BRI", value: "16. Agen BRI" },
                  { label: "17. Bank BNI", value: "17. Bank BNI" },
                  { label: "18. Agen BNI", value: "18. Agen BNI" },
                  { label: "19. Bank Mandiri", value: "19. Bank Mandiri" },
                  { label: "20. Agen Mandiri", value: "20. Agen Mandiri" },
                  { label: "21. BPD", value: "21. BPD" },
                  { label: "22. Agen BPD", value: "22. Agen BPD" },
                  {
                    label: "23. Bank umum pemerintah lainnya",
                    value: "23. Bank umum pemerintah lainnya",
                  },
                  { label: "24. Bank BCA", value: "24. Bank BCA" },
                  {
                    label: "25. Bank CIMB-Niaga/Maybank",
                    value: "25. Bank CIMB-Niaga/Maybank",
                  },
                  { label: "26. Bank Sinarmas", value: "26. Bank Sinarmas" },
                  { label: "27. Bank Permata", value: "27. Bank Permata" },
                  {
                    label: "28. Bank swasta lainnya",
                    value: "28. Bank swasta lainnya",
                  },
                  {
                    label: "29. BPR (Bank Perkreditan Rakyat)",
                    value: "29. BPR (Bank Perkreditan Rakyat)",
                  },
                  {
                    label: "30. Baitul Maal Wa Tamwil (BMT)",
                    value: "30. Baitul Maal Wa Tamwil (BMT)",
                  },
                  { label: "31. Pegadaian", value: "31. Pegadaian" },
                  {
                    label: "32. Anjungan Tunai Mandiri (ATM)",
                    value: "32. Anjungan Tunai Mandiri (ATM)",
                  },
                  {
                    label: "33. Sarana ekonomi lainnya",
                    value: "33. Sarana ekonomi lainnya",
                  },
                ]}
                placeholder={"Pilih jenis industri"}
              />
              {watch(`${fieldName}.${index}.jenis_industri`) &&
              watch(`${fieldName}.${index}.jenis_industri`).match(
                /(lainnya)/gi
              ) ? (
                <FormInputControl
                  required={required}
                  isInvalid={
                    !!errors?.fieldName?.index?.jenis_industri_lainnya_lainnya
                  }
                  message={
                    errors?.fieldName?.index?.jenis_industri_lainnya_lainnya
                      ?.message
                  }
                  register={register(
                    `${fieldName}.${index}.jenis_industri_lainnya_lainnya`
                  )}
                  placeholder={`Masukkan jenis industri lainnya`}
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
              labelName={"Jumlah"}
              required={required}
              isInvalid={!!errors?.fieldName?.index?.jumlah}
              message={errors?.fieldName?.index?.jumlah?.message}
              type={"number"}
              register={register(`${fieldName}.${index}.jumlah`)}
              placeholder={`Masukkan jumlah`}
            />

            <Form.Group className="mb-3">
              <Form.Label>Kondisi {required && <RequiredInfo />}</Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.kondisi}
                fieldName={`${fieldName}.${index}.kondisi`}
                options={[
                  { label: "Baik", value: "Baik" },
                  { label: "Buruk", value: "Buruk" },
                  { label: "Tidak berfungsi", value: "Tidak berfungsi" },
                  { label: "Tidak ada", value: "Tidak ada" },
                ]}
                placeholder={"Pilih"}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Kemudahan untuk mencapai {required && <RequiredInfo />}
              </Form.Label>
              <SelectStatic
                control={control}
                errors={errors?.fieldName?.index?.kemudahan_untuk_mencapai}
                fieldName={`${fieldName}.${index}.kemudahan_untuk_mencapai`}
                options={[
                  { label: "Sangat mudah", value: "Sangat mudah" },
                  { label: "Mudah", value: "Mudah" },
                  { label: "Sulit", value: "Sulit" },
                  { label: "Sangat sulit", value: "Sangat sulit" },
                ]}
                placeholder={"Pilih"}
              />
            </Form.Group>
          </>
        )}
      </FieldArray>
    </>
  )
}
