import { useErrorForm } from "@app/helper/form-error.helper"
import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import * as Yup from "yup"
import { Input, Select, TableInputs } from ".."
import { useWizard, WizardForm } from "../WizardForm/WizardForm"

const validationSchema = Yup.object().shape({
  nama_ketua_rt: Yup.string().required(),
  alamat: Yup.string().required(),
  nomor_hp: Yup.string().required(),
  lokasi_rt_terletak_di_pulau: Yup.string().required(),
  topografi_terluas_wilayah_rt: Yup.string().required(),
  jumlah_warga_di_lereng_puncak: Yup.number().required(),
  penanaman_pemeliharaan_pepohonan_di_lahan_kritis: Yup.string().required(),
  panjang_garis_pantai: Yup.number().required(),
  pemanfaatan_laut_perikanan_tangkap: Yup.string().required(),
  pemanfaatan_laut_perikanan_budidaya: Yup.string().required(),
  pemanfaatan_laut_tambak_garam: Yup.string().required(),
  pemanfaatan_laut_wisata_bahari: Yup.string().required(),
  pemanfaatan_laut_transportasi_umum: Yup.string().required(),
  kondisi_mangrove: Yup.string().required(),
  penanaman_mangrove: Yup.string().required(),
  jumlah_warga_di_wilayah_pesisir: Yup.number().required(),
  jumlah_warga_yang_tinggal_di_atas_air: Yup.number().required(),
  wilayah_desa_di_dalam_hutan: Yup.number().required(),
  wilayah_desa_di_tepi_hutan: Yup.number().required(),
  fungsi_hutan: Yup.object().shape({
    konservasi: Yup.number(),
    lindung: Yup.number(),
    produksi: Yup.number(),
    hutan_desa: Yup.number(),
  }),
  jumlah_warga_yang_tinggal_di_dalam_hutan: Yup.string().required(),
  jumlah_warga_yang_tinggal_di_sekitar_hutan: Yup.string().required(),
  ketergantungan_warga_terhadap_hutan: Yup.string().required(),
  reboisasi_hutan: Yup.string().required(),
  jumlah_penduduk_luar_desa_yang_masuk_dan_menetap_di_desa_selama_setahun_terakhir:
    Yup.string().required(),
  jumlah_penduduk_yang_keluar_dari_desa_selama_setahun_terakhir:
    Yup.string().required(),
})

export function Step2Form() {
  const { updateFormData, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit steptwo", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <section>
          <h5>DESKRIPSI KELUARGA & PEMUKIMAN</h5>
          <Row>
            <Col sm>
              <Input
                labelName={"7. Nama Ketua RT"}
                required={true}
                placeholder={"Masukkan nama"}
                fieldName={"nama_ketua_rt"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"8. Alamat"}
                required={true}
                placeholder={"Masukkan alamat"}
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
                helperText={"Contoh: +6281234567898"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"10. Lokasi RT terletak di pulau"}
                required={true}
                placeholder={
                  "Masukkan nama pulau, pisahkan dengan koma jika lebih dari satu"
                }
                fieldName={"lokasi_rt_terletak_di_pulau"}
                helperText={
                  "(Ketik nama pulau, pisahkan dengan koma jika lebih dari satu)"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"11. Tipografi terluas wilayah RT"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"topografi_terluas_wilayah_rt"}
                options={[
                  {
                    label: "Lereng/puncak",
                    value: "Lereng/puncak",
                    fieldName: "topografi_terluas_wilayah_rt",
                  },
                  {
                    label: "Lembah",
                    value: "Lembah",
                    fieldName: "topografi_terluas_wilayah_rt",
                  },
                  {
                    label: "Dataran",
                    value: "Dataran",
                    fieldName: "topografi_terluas_wilayah_rt",
                  },
                  {
                    label: "Pesisir",
                    value: "Pesisir",
                    fieldName: "topografi_terluas_wilayah_rt",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"12. Jumlah warga di lereng/puncak (jiwa)"}
                required={true}
                placeholder={"Masukkan jumlah warga"}
                fieldName={"jumlah_warga_di_lereng_puncak"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={
                  "13. Penanaman/pemeliharaan pepohonan di lahan kritis"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"penanaman_pemeliharaan_pepohonan_di_lahan_kritis"}
                options={[
                  {
                    label: "Ada, sebagian warga terlibat",
                    value: "Ada, sebagian warga terlibat",
                    fieldName:
                      "penanaman_pemeliharaan_pepohonan_di_lahan_kritis",
                  },
                  {
                    label: "Ada, warga tidak terlibat",
                    value: "Ada, warga tidak terlibat",
                    fieldName:
                      "penanaman_pemeliharaan_pepohonan_di_lahan_kritis",
                  },
                  {
                    label: "Tidak ada kegiatan",
                    value: "Tidak ada kegiatan",
                    fieldName:
                      "penanaman_pemeliharaan_pepohonan_di_lahan_kritis",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"14. Panjang garis pantai (km)"}
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={"panjang_garis_pantai"}
                helperText={
                  "Untuk angka presisi dapat gunakan titik, Contoh: 10.5"
                }
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"15. Pemanfaatan laut perikanan tangkap"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"pemanfaatan_laut_perikanan_tangkap"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "pemanfaatan_laut_perikanan_tangkap",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "pemanfaatan_laut_perikanan_tangkap",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"16. Pemanfaatan laut perikanan budidaya"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"pemanfaatan_laut_perikanan_budidaya"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "pemanfaatan_laut_perikanan_budidaya",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "pemanfaatan_laut_perikanan_budidaya",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"17. Pemanfaatan laut tambak garam"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"pemanfaatan_laut_tambak_garam"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "pemanfaatan_laut_tambak_garam",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "pemanfaatan_laut_tambak_garam",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"18. Pemanfaatan laut wisata bahari"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"pemanfaatan_laut_wisata_bahari"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "pemanfaatan_laut_wisata_bahari",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "pemanfaatan_laut_wisata_bahari",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"19. Pemanfaatan laut transportasi umum"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"pemanfaatan_laut_transportasi_umum"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "pemanfaatan_laut_transportasi_umum",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "pemanfaatan_laut_transportasi_umum",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"20. Kondisi mangrove"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"kondisi_mangrove"}
                options={[
                  {
                    label: "Seluruhnya baik",
                    value: "Seluruhnya baik",
                    fieldName: "kondisi_mangrove",
                  },
                  {
                    label: "Sebagian besar baik",
                    value: "Sebagian besar baik",
                    fieldName: "kondisi_mangrove",
                  },
                  {
                    label: "Sebagian besar buruk",
                    value: "Sebagian besar buruk",
                    fieldName: "kondisi_mangrove",
                  },
                  {
                    label: "Seluruhnya buruk",
                    value: "Seluruhnya buruk",
                    fieldName: "kondisi_mangrove",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kondisi_mangrove",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"21. Penanaman mangrove"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"penanaman_mangrove"}
                options={[
                  {
                    label: "Ada, sebagian warga terlibat",
                    value: "Ada, sebagian warga terlibat",
                    fieldName: "penanaman_mangrove",
                  },
                  {
                    label: "Ada, warga tidak terlibat",
                    value: "Ada, warga tidak terlibat",
                    fieldName: "penanaman_mangrove",
                  },
                  {
                    label: "Tidak ada kegiatan",
                    value: "Tidak ada kegiatan",
                    fieldName: "penanaman_mangrove",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"22. Jumlah warga di wilayah pesisir (jiwa)"}
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={"jumlah_warga_di_wilayah_pesisir"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"23. Jumlah warga yang tinggal di atas air (jiwa)"}
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={"jumlah_warga_yang_tinggal_di_atas_air"}
                type={"number"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"24. Wilayah desa di dalam hutan (Ha)"}
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={"wilayah_desa_di_dalam_hutan"}
                type={"number"}
                helperText={
                  "Untuk angka presisi dapat gunakan titik, Contoh: 10.5"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={"25. Wilayan desa di tepi hutan (Ha)"}
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={"wilayah_desa_di_tepi_hutan"}
                type={"number"}
                helperText={
                  "Untuk angka presisi dapat gunakan titik, Contoh: 10.5"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TableInputs
                labelName={"26. Fungsi hutan"}
                fieldName={"fungsi_hutan"}
                helperText={
                  "Untuk angka presisi dapat gunakan titik. Contoh: 10.5"
                }
                required={false}
                options={[
                  {
                    label: "Konservasi (Ha)",
                    value: "konservasi",
                    fieldName: "konservasi",
                    type: "number",
                  },
                  {
                    label: "Lindung (Ha)",
                    value: "lindung",
                    fieldName: "lindung",
                    type: "number",
                  },
                  {
                    label: "Produksi (Ha)",
                    value: "produksi",
                    fieldName: "produksi",
                    type: "number",
                  },
                  {
                    label: "Hutan desa (Ha)",
                    value: "hutan_desa",
                    fieldName: "hutan_desa",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "27. Jumlah warga yang tinggal  di dalam hutan (jiwa)"
                }
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={"jumlah_warga_yang_tinggal_di_dalam_hutan"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "28. Jumlah warga yang tinggal di sekitar hutan (jiwa)"
                }
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={"jumlah_warga_yang_tinggal_di_sekitar_hutan"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"29. Ketergantungan warga terhadap hutan"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"ketergantungan_warga_terhadap_hutan"}
                options={[
                  {
                    label: "Tinggi",
                    value: "Tinggi",
                    fieldName: "ketergantungan_warga_terhadap_hutan",
                  },
                  {
                    label: "Sedang",
                    value: "Sedang",
                    fieldName: "ketergantungan_warga_terhadap_hutan",
                  },
                  {
                    label: "Rendah",
                    value: "Rendah",
                    fieldName: "ketergantungan_warga_terhadap_hutan",
                  },
                  {
                    label: "Tidak tergantung",
                    value: "Tidak tergantung",
                    fieldName: "ketergantungan_warga_terhadap_hutan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Select
                labelName={"30. Reboisasi hutan"}
                required={true}
                placeholder={"Pilih data terkait"}
                fieldName={"reboisasi_hutan"}
                options={[
                  {
                    label: "Ada, sebagian warga terlibat",
                    value: "Ada, sebagian warga terlibat",
                    fieldName: "reboisasi_hutan",
                  },
                  {
                    label: "Ada, warga tidak terlibat",
                    value: "Ada, warga tidak terlibat",
                    fieldName: "reboisasi_hutan",
                  },
                  {
                    label: "Tidak ada kegiatan",
                    value: "Tidak ada kegiatan",
                    fieldName: "reboisasi_hutan",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "31. Jumlah penduduk luar desa yang masuk dan menetap di desa selama setahun terakhir"
                }
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={
                  "jumlah_penduduk_luar_desa_yang_masuk_dan_menetap_di_desa_selama_setahun_terakhir"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                labelName={
                  "32. Jumlah penduduk yang keluar dari desa selama setahun terakhir"
                }
                required={true}
                placeholder={"Isi data terkait"}
                fieldName={
                  "jumlah_penduduk_yang_keluar_dari_desa_selama_setahun_terakhir"
                }
              />
            </Col>
          </Row>
        </section>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
