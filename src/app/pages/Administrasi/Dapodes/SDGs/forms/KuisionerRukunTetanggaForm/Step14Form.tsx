import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Input, Select, TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir:
    Yup.object().shape({
      jumlah_kegiatan_pembangunan_pemeliharaan_pos_keamanan_lingkungan:
        Yup.number().required(),
      jumlah_kegiatan_pembentukan_pengaturan_regu_keamanan:
        Yup.number().required(),
      jumlah_anggota_hansip_limnas_yang_ditambahkan: Yup.number().required(),
      pelaporan_tamu_yang_menginap_lebih_dari_24_jam_ke_aparat_lingkungan:
        Yup.string().required(),
      pengaktifan_sistem_keamanan_lingkungan_berasal_dari_inisiatif_warga:
        Yup.string().required(),
      jumlah_anggota_limnas_hansip: Yup.number().required(),
      jumlah_pos_polisi: Yup.object().shape({
        yang_Digunakan: Yup.string().required(),
        yang_Tidak_Digunakan: Yup.string().required(),
      }),
      perkiraan_jarak_ke_pos_polisi_terdekat: Yup.string(),
      kemudahan_untuk_mencapai_pos_polisi_terdekat: Yup.string().required(),
      jumlah_korban_bunuh_diri_termasuk_percobaan_bunuh_diri_yang_terjadi_selama_setahun_terakhir:
        Yup.string().required(),
      jumlah_lokasi_berkumpul_mangkal_anak_jalanan_selain_rumah_singgah:
        Yup.string().required(),
      jumlah_tempat_mangkal_gelandangan_pengemis: Yup.string().required(),
      jumlah_lokalisasi_lokasi_tempat_mangkal_pekerja_seks_komersial:
        Yup.number().required(),
    }),
})

export function Step14Form() {
  const { handleSubmit, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    handleSubmit(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>KEGIATAN WARGA</h5>

          <Row>
            <Col sm={12}>
              <h5>
                Kegiatan warga untuk menjaga keamanan lingkungan selama setahun
                terakhir
              </h5>
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "238. Jumlah kegiatan pembangunan/pemeliharaan pos keamanan lingkungan"
                }
                required={true}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_kegiatan_pembangunan_pemeliharaan_pos_keamanan_lingkungan"
                }
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "239. Jumlah kegiatan pembentukan/pengaturan regu keamanan"
                }
                required={true}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_kegiatan_pembentukan_pengaturan_regu_keamanan"
                }
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "240. Jumlah anggota hansip/linmas yang ditambahkan (jiwa)"
                }
                required={true}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_anggota_hansip_limnas_yang_ditambahkan"
                }
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "241. Pelaporan tamu yang menginap lebih dari 24 jam ke aparat lingkungan"
                }
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.pelaporan_tamu_yang_menginap_lebih_dari_24_jam_ke_aparat_lingkungan"
                }
                required={true}
                placeholder={"Pilih rumah berada dibawah sutet"}
                options={[
                  {
                    label: "Ya",
                    value: "Ya",
                    fieldName:
                      "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.pelaporan_tamu_yang_menginap_lebih_dari_24_jam_ke_aparat_lingkungan",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName:
                      "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.pelaporan_tamu_yang_menginap_lebih_dari_24_jam_ke_aparat_lingkungan",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "242. Pengaktifan sistem keamanan lingkungan berasal dari inisiatif warga"
                }
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.pengaktifan_sistem_keamanan_lingkungan_berasal_dari_inisiatif_warga"
                }
                required={true}
                placeholder={"Pilih "}
                options={[
                  {
                    label: "Ya",
                    value: "Ya",
                    fieldName:
                      "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.pengaktifan_sistem_keamanan_lingkungan_berasal_dari_inisiatif_warga",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName:
                      "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.pengaktifan_sistem_keamanan_lingkungan_berasal_dari_inisiatif_warga",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"243. Jumlah anggota linmas/hansip (jiwa)"}
                required={true}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_anggota_limnas_hansip"
                }
              />
            </Col>
            <Col sm={12}>
              <TableInputs
                labelName={"244. Jumlah pos polisi (termasuk kantor polisi)"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_pos_polisi"
                }
                required={true}
                options={[
                  {
                    label: "Yang digunakan (unit)",
                    value: "yang_Digunakan",
                    fieldName: "yang_Digunakan",
                  },
                  {
                    label: "Yang tidak digunakan",
                    value: "yang_Tidak_Digunakan",
                    fieldName: "yang_Tidak_Digunakan",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "245. Jika tidak ada pos polisi, perkiraan jarak ke pos polisi (termasuk kantor polisi) terdekat (km)"
                }
                required={false}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.perkiraan_jarak_ke_pos_polisi_terdekat"
                }
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "246. Kemudahan untuk mencapai pos polisi (termasuk kantor polisi) terdekat"
                }
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.kemudahan_untuk_mencapai_pos_polisi_terdekat"
                }
                required={true}
                placeholder={"Pilih rumah berada dibawah sutet"}
                options={[
                  {
                    label: "Mudah",
                    value: "Mudah",
                    fieldName:
                      "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.kemudahan_untuk_mencapai_pos_polisi_terdekat",
                  },
                  {
                    label: "Sulit",
                    value: "Sulit",
                    fieldName:
                      "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.kemudahan_untuk_mencapai_pos_polisi_terdekat",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "247. Jumlah korban bunuh diri (termasuk percobaan bunuh diri) yang terjadi selama setahun terakhir (jiwa)"
                }
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_korban_bunuh_diri_termasuk_percobaan_bunuh_diri_yang_terjadi_selama_setahun_terakhir"
                }
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "248. Jumlah lokasi berkumpul/mangkal anak jalanan (selain rumah singgah)"
                }
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_lokasi_berkumpul_mangkal_anak_jalanan_selain_rumah_singgah"
                }
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"249. Jumlah tempat mangkal gelandangan/pengemis"}
                required={true}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_tempat_mangkal_gelandangan_pengemis"
                }
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "250. Jumlah lokalisasi/lokasi/tempat mangkal Pekerja Seks Komersial (PSK)"
                }
                required={true}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={
                  "kegiatan_warga_untuk_menjaga_keamanan_lingkungan_selama_setahun_terakhir.jumlah_lokalisasi_lokasi_tempat_mangkal_pekerja_seks_komersial"
                }
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
