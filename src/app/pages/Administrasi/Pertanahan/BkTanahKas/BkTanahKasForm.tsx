import { Button, ButtonCancel } from "@app/components"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
import {
  BukuTanahKasDesaField,
  IBukuTanahKasDesa,
} from "@app/interface/administrasi/buku-tanah-kas-desa.interface"
import { IFormDataContent } from "@app/interface/main"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { DFlex } from "@app/styled/flex.styled"
import { FormGroupTitle } from "@app/styled/typography.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, InputGroup, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  asal_tanah_kas_desa: Yup.string().required(),
  nomor_sertifikat_buku_letter: Yup.string().required(),
  luas: Yup.number().required(),
  kelas: Yup.string().required(),
  perolehan_tkd: Yup.object().shape({
    asal_milik_desa: Yup.number().required(),
    bantuan_pemerintah: Yup.number().required(),
    bantuan_provinsi: Yup.number().required(),
    bantuan_kabupaten_kota: Yup.number().required(),
    lain_lain: Yup.number().required(),
    tanggal_perolehan: Yup.string().required(),
  }),
  jenis_tkd: Yup.object().shape({
    sawah: Yup.number().required(),
    tegal: Yup.number().required(),
    kebun: Yup.number().required(),
    tambak_kolam: Yup.number().required(),
    tanah_kering_darat: Yup.number().required(),
  }),
  patok_tanda_batas: Yup.object().shape({
    ada: Yup.number().required(),
    tidak_ada: Yup.number().required(),
  }),
  papan_nama: Yup.object().shape({
    ada: Yup.number().required(),
    tidak_ada: Yup.number().required(),
  }),
  lokasi: Yup.string().required(),
  peruntukan: Yup.string().required(),
  mutasi: Yup.string().required(),
})

const BkTanahKasDesaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()
  const [path] = useState<string>(API_PATH().form.administrasi.bukuTanahKasDesa)
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    // control,
    formState: { errors },
  } = useForm<IBukuTanahKasDesa>({
    // resolver: yupResolver(validationSchema),
  })

  const onSubmitForm = (data: any) => {
    const params = {
      ...data,
    }

    setDataParams(params)
  }

  const handleClickHide = (e: any) => {
    if (onCancel) {
      onCancel(e)
    }
  }

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={BukuTanahKasDesaField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Asal Tanah Kas Desa"
                  required={true}
                  register={register("asal_tanah_kas_desa")}
                  isInvalid={!!errors?.asal_tanah_kas_desa}
                  message={errors?.asal_tanah_kas_desa?.message}
                  placeholder="Masukkan asal tanah kas"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Nomor Sertifikat Buku Letter"
                  required={true}
                  register={register("nomor_sertifikat_buku_letter")}
                  isInvalid={!!errors?.nomor_sertifikat_buku_letter}
                  message={errors?.nomor_sertifikat_buku_letter?.message}
                  placeholder="Masukkan nomor sertifikat"
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    Luas Tanah <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Luas Tanah"
                      required={true}
                      register={register("luas")}
                      isInvalid={!!errors?.luas}
                      message={errors?.luas?.message}
                      placeholder="Masukkan luas tanah"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.luas?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Kelas"
                  required={true}
                  register={register("kelas")}
                  isInvalid={!!errors?.kelas}
                  message={errors?.kelas?.message}
                  placeholder="Masukkan kelas"
                />
              </Col>
            </Row>
            <FormGroupTitle>Perolehan TKD:</FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Asli Milik Desa <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Asli Milik Desa"
                      required={true}
                      register={register("perolehan_tkd.asal_milik_desa")}
                      isInvalid={!!errors?.perolehan_tkd?.asal_milik_desa}
                      message={errors?.perolehan_tkd?.asal_milik_desa?.message}
                      placeholder="Masukkan perolehan_tkd.asal_milik_desa tanah"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.perolehan_tkd?.asal_milik_desa?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Bantuan Pemerintah <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Bantuan Pemerintah"
                      required={true}
                      register={register("perolehan_tkd.bantuan_pemerintah")}
                      isInvalid={!!errors?.perolehan_tkd?.bantuan_pemerintah}
                      message={
                        errors?.perolehan_tkd?.bantuan_pemerintah?.message
                      }
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.perolehan_tkd?.bantuan_pemerintah?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Bantuan Provinsi <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Bantuan Provinsi"
                      required={true}
                      register={register("perolehan_tkd.bantuan_provinsi")}
                      isInvalid={!!errors?.perolehan_tkd?.bantuan_provinsi}
                      message={errors?.perolehan_tkd?.bantuan_provinsi?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.perolehan_tkd?.bantuan_provinsi?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "16px" }}>
                    Bantuan Kab/Kota <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Bantuan Kabupaten/Kota"
                      required={true}
                      register={register(
                        "perolehan_tkd.bantuan_kabupaten_kota"
                      )}
                      isInvalid={
                        !!errors?.perolehan_tkd?.bantuan_kabupaten_kota
                      }
                      message={
                        errors?.perolehan_tkd?.bantuan_kabupaten_kota?.message
                      }
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.perolehan_tkd?.bantuan_kabupaten_kota?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Lain-Lain <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Lain-Lain"
                      required={true}
                      register={register("perolehan_tkd.lain_lain")}
                      isInvalid={!!errors?.perolehan_tkd?.lain_lain}
                      message={errors?.perolehan_tkd?.lain_lain?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.perolehan_tkd?.lain_lain?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Tanggal Perolehan"
                  type="date"
                  required={true}
                  register={register("perolehan_tkd.tanggal_perolehan")}
                  isInvalid={!!errors?.perolehan_tkd?.tanggal_perolehan}
                  message={errors?.perolehan_tkd?.tanggal_perolehan?.message}
                  placeholder="Masukkan tanggal perolehan"
                />
              </Col>
            </Row>
            <FormGroupTitle>Jenis TKD:</FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Sawah <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Sawah"
                      required={true}
                      register={register("jenis_tkd.sawah")}
                      isInvalid={!!errors?.jenis_tkd?.sawah}
                      message={errors?.jenis_tkd?.sawah?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.jenis_tkd?.sawah?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Tegal <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Tegal"
                      required={true}
                      register={register("jenis_tkd.tegal")}
                      isInvalid={!!errors?.jenis_tkd?.tegal}
                      message={errors?.jenis_tkd?.tegal?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.jenis_tkd?.tegal?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Kebun <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Kebun"
                      required={true}
                      register={register("jenis_tkd.kebun")}
                      isInvalid={!!errors?.jenis_tkd?.kebun}
                      message={errors?.jenis_tkd?.kebun?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.jenis_tkd?.kebun?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Tambah/Kolam <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Tambah/Kolam"
                      required={true}
                      register={register("jenis_tkd.tambak_kolam")}
                      isInvalid={!!errors?.jenis_tkd?.tambak_kolam}
                      message={errors?.jenis_tkd?.tambak_kolam?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.jenis_tkd?.tambak_kolam?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Tanah Kering/Darat <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Tanah Kering/Darat"
                      required={true}
                      register={register("jenis_tkd.tanah_kering_darat")}
                      isInvalid={!!errors?.jenis_tkd?.tanah_kering_darat}
                      message={errors?.jenis_tkd?.tanah_kering_darat?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.jenis_tkd?.tanah_kering_darat?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm></Col>
            </Row>
            <FormGroupTitle>Patok Tanda Batas:</FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Ada <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Ada"
                      required={true}
                      register={register("patok_tanda_batas.ada")}
                      isInvalid={!!errors?.patok_tanda_batas?.ada}
                      message={errors?.patok_tanda_batas?.ada?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.patok_tanda_batas?.ada?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Tidak Ada <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Tidak Ada"
                      required={true}
                      register={register("patok_tanda_batas.tidak_ada")}
                      isInvalid={!!errors?.patok_tanda_batas?.tidak_ada}
                      message={errors?.patok_tanda_batas?.tidak_ada?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.patok_tanda_batas?.tidak_ada?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <FormGroupTitle>Papan Nama:</FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Ada <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Ada"
                      required={true}
                      register={register("papan_nama.ada")}
                      isInvalid={!!errors?.papan_nama?.ada}
                      message={errors?.papan_nama?.ada?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.papan_nama?.ada?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Tidak Ada <RequiredInfo />
                  </Form.Label>
                  <InputGroup>
                    <FormInputControl
                      className="mb-0"
                      formGroup={false}
                      errorDiv={false}
                      labelName="Tidak Ada"
                      required={true}
                      register={register("papan_nama.tidak_ada")}
                      isInvalid={!!errors?.papan_nama?.tidak_ada}
                      message={errors?.papan_nama?.tidak_ada?.message}
                      placeholder="Masukkan data"
                    />
                    <InputGroup.Text>M2</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.papan_nama?.tidak_ada?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Lokasi"
                  required={true}
                  register={register("lokasi")}
                  isInvalid={!!errors?.lokasi}
                  message={errors?.lokasi?.message}
                  placeholder="Masukkan lokasi"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Peruntukan"
                  required={true}
                  register={register("peruntukan")}
                  isInvalid={!!errors?.peruntukan}
                  message={errors?.peruntukan?.message}
                  placeholder="Masukkan peruntukan"
                />
              </Col>
              <Col sm>
                <FormInputControl
                  labelName="Mutasi"
                  required={true}
                  register={register("mutasi")}
                  isInvalid={!!errors?.mutasi}
                  message={errors?.mutasi?.message}
                  placeholder="Masukkan mutasi"
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
              <ButtonCancel onClick={handleClickHide} />
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

export default BkTanahKasDesaForm
