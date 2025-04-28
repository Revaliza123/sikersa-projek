import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { Choices, Input } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"
import InputImageUpload from "@app/modules/Form/InputImageUpload"

const validationSchema = Yup.object().shape({
  provinsi: Yup.string().required(),
  kabupaten_kota: Yup.string().required(),
  kecamatan: Yup.string().required(),
  desa: Yup.string().required(),
  foto_balai_desa: Yup.string().required(),
  email_desa: Yup.string(),
  web_desa: Yup.string(),
  facebook: Yup.string(),
  twitter: Yup.string(),
  instagram: Yup.string(),
  youtube: Yup.string(),
  status_pemerintahan: Yup.string().required(),
  jumlah_rw: Yup.string().required(),
  jumlah_rt: Yup.string().required(),
  sk_pendirian_desa: Yup.string().required(),
  no_sk_pendirian_desa: Yup.string().when("sk_pendirian_desa", {
    is: (value: string) => value === "Ada",
    then: Yup.string().required(),
    otherwise: Yup.string(),
  }),
  peta_desa: Yup.string().required(),
  no_sk_bupati_gubernur_tentang_peta_desa: Yup.string().when("peta_desa", {
    is: (value: string) => value === "Ada",
    then: Yup.string().required(),
    otherwise: Yup.string(),
  }),
  luas_wilayah_desa: Yup.string().required(),
  lokasi_desa_terletak_di_pulau: Yup.string().required(),
  topografi_terluas_wilayah: Yup.string().required(),
  jumlah_warga_di_lereng_puncak: Yup.number().required(),
  kantor_kepala_desa_balai_desa: Yup.string().required(),
  kepemilikan_kantor_kepala_desa_balai_desa: Yup.string().when(
    "kantor_kepala_desa_balai_desa",
    {
      is: (value: string) =>
        value === "Ada dan layak" || value === "Ada tetapi tidak layak",
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  lokasi_kantor: Yup.string().when("kantor_kepala_desa_balai_desa", {
    is: (value: string) =>
      value === "Ada dan layak" || value === "Ada tetapi tidak layak",
    then: Yup.string().required(),
    otherwise: Yup.string(),
  }),
  penyelenggaran_pemerintahan_utamanya_dilaksanakan_di: Yup.string().when(
    "kantor_kepala_desa_balai_desa",
    {
      is: (value: string) =>
        value === "Ada dan layak" || value === "Ada tetapi tidak layak",
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  jam_kerja_di_kantor_desa: Yup.string().when("kantor_kepala_desa_balai_desa", {
    is: (value: string) =>
      value === "Ada dan layak" || value === "Ada tetapi tidak layak",
    then: Yup.string().required(),
    otherwise: Yup.string(),
  }),
  koordinat_lintang: Yup.number().required(),
  lintang_utara: Yup.number().required(),
  lintang_selatan: Yup.number().required(),
  koordinat_bujur: Yup.number().required(),
  ketinggian_lokasi: Yup.number().required(),
  luas_lahan_hutan: Yup.number().required(),
  luas_lahan_pertanian: Yup.number().required(),
  luas_lahan_perkebunan: Yup.number().required(),
})

export function Step1Form() {
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
  const { workspace } = useSelector((state: any) => state.app)
  const fotoBalaiDesaWatcher = useWatch({
    control: methods.control,
    name: "foto_balai_desa",
  })

  // set location form from current workspace
  useEffect(() => {
    const {
      desakelurahan_details: {
        nama_kelurahan,
        nama_kecamatan,
        nama_kota,
        nama_provinsi,
      },
    } = workspace
    methods.setValue("provinsi", nama_provinsi)
    methods.setValue("kabupaten_kota", nama_kota)
    methods.setValue("kecamatan", nama_kecamatan)
    methods.setValue("desa", nama_kelurahan)
  }, [])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>LOKASI</h5>
          <Row>
            <Col sm>
              <Input
                fieldName="provinsi"
                labelName={"1. Provinsi"}
                required={false}
                placeholder={"Masukkan provinsi"}
              />
            </Col>

            <Col sm>
              <Input
                fieldName="kabupaten_kota"
                labelName={"2. Kabupaten/Kota"}
                required={false}
                placeholder={"Masukkan kabupaten/kota"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                fieldName="kecamatan"
                labelName={"3. Kecamatan"}
                required={false}
                placeholder={"Masukkan kecamatan"}
              />
            </Col>
            <Col sm>
              <Input
                fieldName="desa"
                labelName={"4. Desa"}
                required={false}
                placeholder={"Masukkan desa"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <InputImageUpload
                required={true}
                label="5. Foto Balai Desa"
                setValue={methods.setValue}
                field="foto_balai_desa"
                message={methods.formState?.errors?.foto_balai_desa?.message}
                isInvalid={methods.formState?.errors?.foto_balai_desa}
                link={fotoBalaiDesaWatcher}
                imgPlaceholder="/static/img/dummyImageLogo.png"
                path="upload-image"
                helperText="Pilih foto, lalu klik tombol upload"
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"6. Email Desa"}
                required={false}
                placeholder={"Masukkan email desa"}
                fieldName={"email_desa"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"7. Web Desa"}
                required={false}
                placeholder={"Masukkan web desa"}
                fieldName={"web_desa"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"8. Facebook"}
                required={false}
                placeholder={"Masukkan facebook"}
                fieldName={"facebook"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"9. Twitter"}
                required={false}
                placeholder={"Masukkan twitter"}
                fieldName={"twitter"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"10. Instagram"}
                required={false}
                placeholder={"Masukkan instagram"}
                fieldName={"instagram"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"11. Youtube"}
                required={false}
                placeholder={"Masukkan youtube"}
                fieldName={"youtube"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"12. Status Pemerintahan"}
                required={true}
                fieldName={"status_pemerintahan"}
                options={[
                  {
                    label: "Desa",
                    value: "desa",
                    fieldName: "status_pemerintahan",
                  },
                  {
                    label: "Kelurahan",
                    value: "kelurahan",
                    fieldName: "status_pemerintahan",
                  },
                  {
                    label: "Kampung",
                    value: "kampung",
                    fieldName: "status_pemerintahan",
                  },
                  { label: "Nagari", value: "nagari" },
                  {
                    label: "Gampong",
                    value: "gampong",
                    fieldName: "status_pemerintahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"13. Jumlah RW"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"jumlah_rw"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"14. Jumlah RT"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={"jumlah_rt"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"15. SK Pendirian Desa"}
                required={true}
                fieldName={"sk_pendirian_desa"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "sk_pendirian_desa",
                  },
                  {
                    label: "Tidak Ada",
                    value: "Tidak Ada",
                    fieldName: "sk_pendirian_desa",
                  },
                ]}
              />
            </Col>
          </Row>
          {methods.watch("sk_pendirian_desa") === "Ada" ? (
            <Row>
              <Col sm>
                <Input
                  labelName={"16. Nomor SK Pendirian Desa"}
                  required={true}
                  placeholder={"Masukkan nomor SK pendirian desa"}
                  fieldName={"no_sk_pendirian_desa"}
                />
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col sm>
              <Choices
                labelName={"17. Peta Desa"}
                required={true}
                fieldName={"peta_desa"}
                options={[
                  { label: "Ada", value: "Ada", fieldName: "peta_desa" },
                  {
                    label: "Tidak Ada",
                    value: "Tidak Ada",
                    fieldName: "peta_desa",
                  },
                ]}
              />
            </Col>
          </Row>
          {methods.watch("peta_desa") === "Ada" ? (
            <Row>
              <Col sm>
                <Input
                  labelName={"18. Nomor SK Bupati/Gubernur tentang Peta Desa"}
                  required={true}
                  placeholder={"Masukkan nomor SK Bupati/Gubernur"}
                  fieldName={"no_sk_bupati_gubernur_tentang_peta_desa"}
                />
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col sm>
              <Input
                labelName={"19. Luas Wilayah Desa (Ha)"}
                required={true}
                placeholder={"Masukkan luas wilayah desa"}
                fieldName={"luas_wilayah_desa"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"20. Lokasi Desa terletak di pulau"}
                required={true}
                placeholder={"Masukkan lokasi desa"}
                fieldName={"lokasi_desa_terletak_di_pulau"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"21. Topografi terluas wilayah"}
                required={true}
                fieldName={"topografi_terluas_wilayah"}
                options={[
                  {
                    label: "Lereng/Puncak",
                    value: "Lereng/Puncak",
                    fieldName: "topografi_terluas_wilayah",
                  },
                  {
                    label: "Lembah",
                    value: "Lembah",
                    fieldName: "topografi_terluas_wilayah",
                  },
                  {
                    label: "Dataran",
                    value: "Dataran",
                    fieldName: "topografi_terluas_wilayah",
                  },
                  {
                    label: "Pesisir Pantai",
                    value: "Pesisir Pantai",
                    fieldName: "topografi_terluas_wilayah",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"22. Jumlah warga di lereng/puncak"}
                required={true}
                placeholder={"Masukkan jumlah warga"}
                fieldName={"jumlah_warga_di_lereng_puncak"}
                type={"number"}
                additionalOptions={{
                  step: "any",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"23. Kantor Kepala Desa/Balai Desa"}
                required={true}
                fieldName={"kantor_kepala_desa_balai_desa"}
                options={[
                  {
                    label: "Ada dan layak",
                    value: "Ada dan layak",
                    fieldName: "kantor_kepala_desa_balai_desa",
                  },
                  {
                    label: "Ada tetapi tidak layak",
                    value: "Ada tetapi tidak layak",
                    fieldName: "kantor_kepala_desa_balai_desa",
                  },
                  {
                    label: "Tidak Ada",
                    value: "Tidak Ada",
                    fieldName: "kantor_kepala_desa_balai_desa",
                  },
                ]}
              />
            </Col>
          </Row>
          {methods.watch("kantor_kepala_desa_balai_desa") === "Ada dan layak" ||
          methods.watch("kantor_kepala_desa_balai_desa") ===
            "Ada tetapi tidak layak" ? (
            <>
              <Row>
                <Col sm>
                  <Choices
                    labelName={"24. Kepemilikan Kantor Kepala Desa/Balai Desa"}
                    required={true}
                    fieldName={"kepemilikan_kantor_kepala_desa_balai_desa"}
                    options={[
                      {
                        label: "Aset desa",
                        value: "Aset desa",
                        fieldName: "kepemilikan_kantor_kepala_desa_balai_desa",
                      },
                      {
                        label: "Bukan aset desa",
                        value: "Bukan aset desa",
                        fieldName: "kepemilikan_kantor_kepala_desa_balai_desa",
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Choices
                    labelName={"25. Lokasi kantor"}
                    required={true}
                    fieldName={"lokasi_kantor"}
                    options={[
                      {
                        label: "Di dalam desa",
                        value: "Di dalam desa",
                        fieldName: "lokasi_kantor",
                      },
                      {
                        label: "Di luar desa",
                        value: "Di luar desa",
                        fieldName: "lokasi_kantor",
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Choices
                    labelName={
                      "26. Penyelenggaraan pemerintahan utamanya dilaksanakan di"
                    }
                    required={true}
                    fieldName={
                      "penyelenggaran_pemerintahan_utamanya_dilaksanakan_di"
                    }
                    options={[
                      {
                        label: "Kantor kepala desa/balai desa",
                        value: "Kantor kepala desa/balai desa",
                        fieldName:
                          "penyelenggaran_pemerintahan_utamanya_dilaksanakan_di",
                      },
                      {
                        label: "Bukan kepala desa/balai desa",
                        value: "Bukan kepala desa/balai desa",
                        fieldName:
                          "penyelenggaran_pemerintahan_utamanya_dilaksanakan_di",
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Choices
                    labelName={"27. Jam kerja di kantor desa"}
                    required={true}
                    fieldName={"jam_kerja_di_kantor_desa"}
                    options={[
                      {
                        label: "Tidak menentu",
                        value: "Aset desa",
                        fieldName: "jam_kerja_di_kantor_desa",
                      },
                      {
                        label: "Ada jadwal kerja",
                        value: "Ada jadwal kerja",
                        fieldName: "jam_kerja_di_kantor_desa",
                      },
                    ]}
                  />
                </Col>
              </Row>
            </>
          ) : null}
          <Row>
            <Col sm>
              <Input
                labelName={"28. Koordinat Lintang (Latitude)"}
                required={true}
                placeholder={"Masukkan koordinat"}
                fieldName={"koordinat_lintang"}
                type={"number"}
                additionalOptions={{
                  min: "any",
                }}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"29. Lintang Utara"}
                required={true}
                placeholder={"Masukkan lintang"}
                fieldName={"lintang_utara"}
                type={"number"}
                additionalOptions={{
                  min: "any",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"30. Lintang Selatan"}
                required={true}
                placeholder={"Masukkan koordinat"}
                fieldName={"lintang_selatan"}
                type={"number"}
                additionalOptions={{
                  min: "any",
                }}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"31. Koordinat Bujur (Longitude)"}
                required={true}
                placeholder={"Masukkan bujur"}
                fieldName={"koordinat_bujur"}
                type={"number"}
                additionalOptions={{
                  min: "any",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"32. Ketinggian Lokasi (mdpl)"}
                required={true}
                placeholder={"Masukkan ketinggian lokasi"}
                fieldName={"ketinggian_lokasi"}
                type={"number"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"33. Luas Lahan Hutan (Ha)"}
                required={true}
                placeholder={"Masukkan luas lahan hutan"}
                fieldName={"luas_lahan_hutan"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"34. Luas Lahan Pertanian (Ha)"}
                required={true}
                placeholder={"Masukkan luas lahan pertanian"}
                fieldName={"luas_lahan_pertanian"}
                type={"number"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"35. Luas Lahan Perkebunan (Ha)"}
                required={true}
                placeholder={"Masukkan luas lahan perkebunan"}
                fieldName={"luas_lahan_perkebunan"}
                type={"number"}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
