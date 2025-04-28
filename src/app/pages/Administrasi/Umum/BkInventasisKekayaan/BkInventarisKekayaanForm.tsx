import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import { FormGroupTitle } from "@app/styled/typography.styled"
import {
  BukuInventarisKekayaanDesaField,
  IBukuInventarisKekayaanDesa,
} from "@app/interface/administrasi/buku-inventaris-kekayaan-desa.interface"
// import FormInputMask from "@app/components/Input/FormInputMask"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import { API_PATH } from "@app/services/_path.service"
import { IFormDataContent } from "@app/interface/main"

const validationSchema = Yup.object().shape({
  jenis_barang: Yup.string().required(),
  nilai_beli: Yup.number().required(),
  asal_barang_bangunan: Yup.object().shape({
    dibeli_sendiri: Yup.number().required(),
    bantuan_pemerintah: Yup.number().required(),
    bantuan_provinsi: Yup.number().required(),
    bantuan_kabupaten_kota: Yup.number().required(),
  }),
  keadaan_barang_bangunan_awal_tahun: Yup.object().shape({
    baik: Yup.number().required(),
    rusak: Yup.number().required(),
  }),
  keadaan_barang_bangunan_akhir_tahun: Yup.object().shape({
    baik: Yup.number().required(),
    rusak: Yup.number().required(),
  }),
  penghapusan_barang_dan_bangunan: Yup.object().shape({
    rusak: Yup.number().required(),
    dijual: Yup.number().required(),
    disumbangkan: Yup.number().required(),
  }),
})

const BkInventarisKekayaanDesaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuInventarisKekayaanDesa
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuInventarisKekayaanDesa>({
    // resolver: yupResolver(validationSchema),
  })

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
    }

    setDataParams(params)
  }

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={BukuInventarisKekayaanDesaField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm="8">
                <FormInputControl
                  labelName="Jenis Barang/Bangunan"
                  required={true}
                  register={register("jenis_barang")}
                  isInvalid={!!errors?.jenis_barang}
                  message={errors?.jenis_barang?.message}
                  placeholder="Masukkan jenis barang/bangunan"
                />
              </Col>
              <Col sm>
                <Form.Label>
                  {" "}
                  Nilai Beli Barang/Bangunan <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("nilai_beli")}
                  errors={errors}
                  control={control}
                  field={"nilai_beli"}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
            </Row>
            <FormGroupTitle>Asal Barang/Bangunan:</FormGroupTitle>
            <Row>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="Dibeli Sendiri"
                  required={true}
                  register={register("asal_barang_bangunan.dibeli_sendiri")}
                  isInvalid={!!errors?.asal_barang_bangunan?.dibeli_sendiri}
                  message={
                    errors?.asal_barang_bangunan?.dibeli_sendiri?.message
                  }
                  placeholder="0"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="Bantuan Pemerintah"
                  required={true}
                  register={register("asal_barang_bangunan.bantuan_pemerintah")}
                  isInvalid={!!errors?.asal_barang_bangunan?.bantuan_pemerintah}
                  message={
                    errors?.asal_barang_bangunan?.bantuan_pemerintah?.message
                  }
                  placeholder="0"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="Bantuan Provinsi"
                  required={true}
                  register={register("asal_barang_bangunan.bantuan_provinsi")}
                  isInvalid={!!errors?.asal_barang_bangunan?.bantuan_provinsi}
                  message={
                    errors?.asal_barang_bangunan?.bantuan_provinsi?.message
                  }
                  placeholder="0"
                />
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <FormInputControl
                  type="number"
                  labelName="Bantuan Kabupaten"
                  required={true}
                  register={register(
                    "asal_barang_bangunan.bantuan_kabupaten_kota"
                  )}
                  isInvalid={
                    !!errors?.asal_barang_bangunan?.bantuan_kabupaten_kota
                  }
                  message={
                    errors?.asal_barang_bangunan?.bantuan_kabupaten_kota
                      ?.message
                  }
                  placeholder="0"
                />
              </Col>
              <Col sm="4">
                <FormInputControl
                  type="number"
                  labelName="Sumbangan"
                  required={true}
                  register={register("asal_barang_bangunan.sumbangan")}
                  isInvalid={!!errors?.asal_barang_bangunan?.sumbangan}
                  message={errors?.asal_barang_bangunan?.sumbangan?.message}
                  placeholder="0"
                />
              </Col>
            </Row>

            <Row>
              <Col sm="6">
                <FormGroupTitle>
                  Keadaan Barang/Bangunan Awal Tahun:
                </FormGroupTitle>
                <Row>
                  <Col sm>
                    <FormInputControl
                      type="number"
                      labelName="Baik"
                      required={true}
                      register={register(
                        "keadaan_barang_bangunan_awal_tahun.baik"
                      )}
                      isInvalid={
                        !!errors?.keadaan_barang_bangunan_awal_tahun?.baik
                      }
                      message={
                        errors?.keadaan_barang_bangunan_awal_tahun?.baik
                          ?.message
                      }
                      placeholder="0"
                    />
                  </Col>
                  <Col sm>
                    <FormInputControl
                      type="number"
                      labelName="Rusak"
                      required={true}
                      register={register(
                        "keadaan_barang_bangunan_awal_tahun.rusak"
                      )}
                      isInvalid={
                        !!errors?.keadaan_barang_bangunan_awal_tahun?.rusak
                      }
                      message={
                        errors?.keadaan_barang_bangunan_awal_tahun?.rusak
                          ?.message
                      }
                      placeholder="0"
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm="6">
                <FormGroupTitle>
                  Keadaan Barang/Bangunan Akhir Tahun:
                </FormGroupTitle>
                <Row>
                  <Col sm>
                    <FormInputControl
                      type="number"
                      labelName="Baik"
                      required={true}
                      register={register(
                        "keadaan_barang_bangunan_akhir_tahun.baik"
                      )}
                      isInvalid={
                        !!errors?.keadaan_barang_bangunan_akhir_tahun?.baik
                      }
                      message={
                        errors?.keadaan_barang_bangunan_akhir_tahun?.baik
                          ?.message
                      }
                      placeholder="0"
                    />
                  </Col>
                  <Col sm>
                    <FormInputControl
                      type="number"
                      labelName="Rusak"
                      required={true}
                      register={register(
                        "keadaan_barang_bangunan_akhir_tahun.rusak"
                      )}
                      isInvalid={
                        !!errors?.keadaan_barang_bangunan_akhir_tahun?.rusak
                      }
                      message={
                        errors?.keadaan_barang_bangunan_akhir_tahun?.rusak
                          ?.message
                      }
                      placeholder="0"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <FormGroupTitle>Penghapusan Barang/Bangunan:</FormGroupTitle>
            <Row>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="Rusak"
                  required={true}
                  register={register("penghapusan_barang_dan_bangunan.rusak")}
                  isInvalid={!!errors?.penghapusan_barang_dan_bangunan?.rusak}
                  message={
                    errors?.penghapusan_barang_dan_bangunan?.rusak?.message
                  }
                  placeholder="0"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="Dijual"
                  required={true}
                  register={register("penghapusan_barang_dan_bangunan.dijual")}
                  isInvalid={!!errors?.penghapusan_barang_dan_bangunan?.dijual}
                  message={
                    errors?.penghapusan_barang_dan_bangunan?.dijual?.message
                  }
                  placeholder="0"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  type="number"
                  labelName="Disumbangkan"
                  required={true}
                  register={register(
                    "penghapusan_barang_dan_bangunan.disumbangkan"
                  )}
                  isInvalid={
                    !!errors?.penghapusan_barang_dan_bangunan?.disumbangkan
                  }
                  message={
                    errors?.penghapusan_barang_dan_bangunan?.disumbangkan
                      ?.message
                  }
                  placeholder="0"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Dihapus"
                  type="date"
                  required={true}
                  register={register(
                    "penghapusan_barang_dan_bangunan.tanggal_dihapus"
                  )}
                  isInvalid={
                    !!errors?.penghapusan_barang_dan_bangunan?.tanggal_dihapus
                  }
                  message={
                    errors?.penghapusan_barang_dan_bangunan?.tanggal_dihapus
                      ?.message
                  }
                  placeholder="Tanggal dihapus"
                />
              </Col>
            </Row>
            <FormInputControl
              labelName="Keterangan"
              as={"textarea"}
              rows={3}
              required={false}
              register={register("keterangan")}
              isInvalid={!!errors?.keterangan}
              message={errors?.keterangan?.message}
              placeholder="Masukkan keterangan"
            />
          </Modal.Body>

          <Modal.Footer>
            <DFlex className="col-50">
              <ButtonCancel onClick={onCancel} />
              <Button
                type="submit"
                variant="primary btn-submit"
                isLoading={loading}>
                {dataSelected?.id ? "Simpan Perubahan" : "Simpan"}
              </Button>
            </DFlex>
          </Modal.Footer>
        </Form>
      </FormData>
    </>
  )
}

export default BkInventarisKekayaanDesaForm
