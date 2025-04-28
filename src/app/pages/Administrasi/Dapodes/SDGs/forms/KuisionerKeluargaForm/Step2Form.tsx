import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Choices, Input, Select, TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { useSelector } from "react-redux"

const validationSchema = Yup.object().shape({
  alamat: Yup.string().required(),
  atap: Yup.string().required(),
  atap_lainnya: Yup.string().when("atap", {
    is: (value: string) => value && value.match(/(lainnya)/gi),
    then: Yup.string().required(),
  }),
  dinding_sebagian_besar_rumah: Yup.string().required(),
  dinding_sebagian_besar_rumah_lainnya: Yup.string().when(
    "dinding_sebagian_besar_rumah",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
  ),
  jendela: Yup.string().required(),
  jenis_lantai_tempat_tinggal_terluas: Yup.string().required(),
  jenis_lantai_tempat_tinggal_terluas_lainnya: Yup.string().when(
    "jenis_lantai_tempat_tinggal_terluas",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
  ),
  jumlah_anggota_keluarga: Yup.string().required(),
  luas_tempat_tinggal: Yup.object().shape({
    luas_lahan: Yup.string().required(),
    luas_lantai: Yup.string().required(),
  }),
  nama: Yup.string().required(),
  nik: Yup.string().required().min(16).max(16),
  nomor_hp: Yup.string().required(),
  nomor_kartu_keluarga: Yup.string().required(),
  nomor_telepon_kabel_rumah: Yup.string().required(),
  penerangan_rumah: Yup.string().required(),
  penerangan_rumah_lainnya: Yup.string().when("penerangan_rumah", {
    is: (value: string) => value && value.match(/(lainnya)/gi),
    then: Yup.string().required(),
  }),
  status_lahan_tempat_tinggal: Yup.string().required(),
  status_lahan_tempat_tinggal_lainnya: Yup.string().when(
    "status_lahan_tempat_tinggal",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
  ),
  tempat_tinggal_yang_ditempati: Yup.string().required(),
  tempat_tinggal_yang_ditempati_lainnya: Yup.string().when(
    "tempat_tinggal_yang_ditempati",
    {
      is: (value: string) => value && value.match(/(lainnya)/gi),
      then: Yup.string().required(),
    }
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
  const { workspace } = useSelector((state: any) => state.app)

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
          <h5>DESKRIPSI KELUARGA & PEMUKIMAN</h5>
          <Row>
            <Col sm>
              <Input
                labelName={"7. Nama"}
                required={true}
                placeholder={"Masukkan nama"}
                fieldName={"nama"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"8. Alamat"}
                required={true}
                placeholder={"Masukkan alamaat"}
                fieldName={"alamat"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"9. Nomor Handphone"}
                required={true}
                placeholder={"Masukkan nomor handphone"}
                fieldName={"nomor_hp"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"10. Nomor Telepon Kabel/Rumah"}
                required={true}
                placeholder={"Masukkan nomor telepon"}
                fieldName={"nomor_telepon_kabel_rumah"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"11. Nomor Kartu Keluarga"}
                required={true}
                placeholder={"Masukkan nomor kartu keluarga"}
                fieldName={"nomor_kartu_keluarga"}
              />
            </Col>
            <Col sm>
              <Input
                labelName={"12. NIK Kepala Keluarga"}
                required={true}
                placeholder={"Masukkan nik kepala keluarga"}
                fieldName={"nik"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "13. Jumlah Anggota Keluarga (termasuk kepala keluarga)"
                }
                required={true}
                placeholder={"Masukkan jumlah anggota keluarga"}
                fieldName={"jumlah_anggota_keluarga"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"14. Tempat tinggal yang ditempati"}
                fieldName={"tempat_tinggal_yang_ditempati"}
                required={true}
                options={[
                  {
                    label: "Milik Sendiri",
                    value: "milik_sendiri",
                    fieldName: "tempat_tinggal_yang_ditempati",
                  },
                  {
                    label: "Kontrak/Sewa",
                    value: "kontrak",
                    fieldName: "tempat_tinggal_yang_ditempati",
                  },
                  {
                    label: "Bebas Sewa",
                    value: "bebas_sewa",
                    fieldName: "tempat_tinggal_yang_ditempati",
                  },
                  {
                    label: "Dipinjami",
                    value: "dipinjami",
                    fieldName: "tempat_tinggal_yang_ditempati",
                  },
                  {
                    label: "Dinas",
                    value: "dinas",
                    fieldName: "tempat_tinggal_yang_ditempati",
                  },
                  {
                    label: "Lainnya (jelaskan)",
                    value: "lainnya",
                    fieldName: "tempat_tinggal_yang_ditempati",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Choices
                labelName={"15. Status lahan tempat tinggal"}
                fieldName={"status_lahan_tempat_tinggal"}
                required={true}
                options={[
                  {
                    label: "Milik Sendiri",
                    value: "milik_sendiri",
                    fieldName: "status_lahan_tempat_tinggal",
                  },
                  {
                    label: "Kontrak/Sewa",
                    value: "kontrak",
                    fieldName: "status_lahan_tempat_tinggal",
                  },
                  {
                    label: "Bebas Sewa",
                    value: "bebas_sewa",
                    fieldName: "status_lahan_tempat_tinggal",
                  },
                  {
                    label: "Dipinjami",
                    value: "dipinjami",
                    fieldName: "status_lahan_tempat_tinggal",
                  },
                  {
                    label: "Dinas",
                    value: "dinas",
                    fieldName: "status_lahan_tempat_tinggal",
                  },
                  {
                    label: "Lainnya (jelaskan)",
                    value: "lainnya",
                    fieldName: "status_lahan_tempat_tinggal",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"16. Luas tempat tinggal"}
                fieldName={"luas_tempat_tinggal"}
                required={true}
                options={[
                  {
                    label: "Luas lantai tempat tinggal (m2)",
                    value: "luas_lantai",
                    fieldName: "luas_lantai",
                  },
                  {
                    label: "Luas lahan tempat tinggal (m2)",
                    value: "luas_lahan",
                    fieldName: "luas_lahan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"17. Jenis lantai tempat tinggal terluas"}
                fieldName={"jenis_lantai_tempat_tinggal_terluas"}
                required={true}
                placeholder={"Pilih jenis lantai"}
                options={[
                  {
                    label: "Marmer/granit",
                    value: "Marmer/granit",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "Keramik",
                    value: "Keramik",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "Parket/vinil/permadani",
                    value: "Parket/vinil/permadani",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "Ubin/tegel/teraso",
                    value: "Ubin/tegel/teraso",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "Kayu/papan kualitas tinggi",
                    value: "Kayu/papan kualitas tinggi",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "Semen/bata merah",
                    value: "Semen/bata merah",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "Bambu",
                    value: "Bambu",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "Kayu/papan kualitas rendah",
                    value: "Kayu/papan kualitas rendah",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                  {
                    label: "lainnya",
                    value: "lainnya",
                    fieldName: "jenis_lantai_tempat_tinggal_terluas",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"18. Dinding sebagian besar rumah"}
                fieldName={"dinding_sebagian_besar_rumah"}
                required={true}
                placeholder={"Pilih jenis dinding"}
                options={[
                  {
                    label: "Semen/beton/kayu berkualitas tinggi",
                    value: "Semen/beton/kayu berkualitas tinggi",
                    fieldName: "dinding_sebagian_besar_rumah",
                  },
                  {
                    label: "Kayu berkualitas rendah/bamboo",
                    value: "Kayu berkualitas rendah/bamboo",
                    fieldName: "dinding_sebagian_besar_rumah",
                  },
                  {
                    label: "lainnya",
                    value: "lainnya",
                    fieldName: "dinding_sebagian_besar_rumah",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"19. Jendela"}
                fieldName={"jendela"}
                required={true}
                placeholder={"Pilh jenis jendela"}
                options={[
                  {
                    label: "Ada, berfungsi",
                    value: "Ada, berfungsi",
                    fieldName: "jendela",
                  },
                  {
                    label: "Ada, tidak berfungsi",
                    value: "Ada, tidak berfungsi",
                    fieldName: "jendela",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "jendela",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"20. Atap"}
                fieldName={"atap"}
                required={true}
                placeholder={"Pilh jenis atap"}
                options={[
                  { label: "Genteng", value: "Genteng", fieldName: "atap" },
                  {
                    label: "Kayu/Jerami",
                    value: "Kayu/Jerami",
                    fieldName: "atap",
                  },
                  { label: "lainnya", value: "lainnya", fieldName: "atap" },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"21. Penerangan rumah"}
                fieldName={"penerangan_rumah"}
                required={true}
                placeholder={"Pilih jenis penerangan rumah"}
                options={[
                  {
                    label: "Listrik PLN",
                    value: "Listrik PLN",
                    fieldName: "penerangan_rumah",
                  },
                  {
                    label: "Listrik non PLN",
                    value: "Listrik non PLN",
                    fieldName: "penerangan_rumah",
                  },
                  {
                    label: "Lampu minyak/lilin",
                    value: "Lampu minyak/lilin",
                    fieldName: "penerangan_rumah",
                  },
                  {
                    label: "Sumber penerangan lainnya",
                    value: "Sumber penerangan lainnya",
                    fieldName: "penerangan_rumah",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "penerangan_rumah",
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
