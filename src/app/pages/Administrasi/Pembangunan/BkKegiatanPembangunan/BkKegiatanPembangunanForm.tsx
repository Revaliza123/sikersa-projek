import { Button, ButtonCancel } from "@app/components"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
// import FormInputMask from "@app/components/Input/FormInputMask"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import {
  BukuKegiatanPembangunanField,
  IBukuKegiatanPembangunan,
} from "@app/interface/administrasi/buku-kegiatan-pembangunan.interface"
import { IFormDataContent } from "@app/interface/main"
import FormData from "@app/modules/Form/FormData"
import InputFileUpload from "@app/modules/Form/InputFileUpload"
import { API_PATH } from "@app/services/_path.service"
import { DFlex } from "@app/styled/flex.styled"
import { FormGroupTitle } from "@app/styled/typography.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  nama_proyek: Yup.string().required(),
  lokasi: Yup.string().required(),
  sifat_proyek: Yup.string().required(),
  volume: Yup.number().required(),
  waktu_pengerjaan: Yup.string().required(),
  pelaksana: Yup.string().required(),
  jumlah_biaya: Yup.number().required(),
})

const BkKegiatanPembangunanForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKegiatanPembangunan
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuKegiatanPembangunan>({
    mode: "onChange",
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

  const lampiran = useWatch({ control, name: "upload_lampiran_surat" })

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={BukuKegiatanPembangunanField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <FormInputControl
              labelName="Nama Proyek/Kegiatan"
              required={true}
              register={register("nama_proyek")}
              isInvalid={!!errors?.nama_proyek}
              message={errors?.nama_proyek?.message}
              placeholder="Masukkan Proyek/Kegiatan"
            />
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
                <Form.Group>
                  <SelectAsyncDynamic
                    labelName="Sifat Proyek"
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`sifat_proyek`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "sifat_proyek",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Label>
                  {" "}
                  Volume <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  suffix="M3"
                  register={register("volume")}
                  field={"volume"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan volume"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <FormInputControl
                  type="date"
                  labelName="Waktu Pengerjaan"
                  required={true}
                  register={register("waktu_pengerjaan")}
                  isInvalid={!!errors?.waktu_pengerjaan}
                  message={errors?.waktu_pengerjaan?.message}
                  placeholder="Masukkan waktu pengerjaan"
                />
              </Col>
            </Row>
            <FormGroupTitle>Besaran:</FormGroupTitle>
            <Row>
              <Col md={6} sm>
                <Form.Label>
                  {" "}
                  Pemerintah <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix="Rp "
                  register={register("besaran_biaya.pemerintah")}
                  field={"besaran_biaya.pemerintah"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col md={6} sm>
                <Form.Label>
                  {" "}
                  Provinsi <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix="Rp "
                  register={register("besaran_biaya.provinsi")}
                  field={"besaran_biaya.provinsi"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col md={6} sm>
                <Form.Label>
                  {" "}
                  Kab/Kota <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix="Rp "
                  register={register("besaran_biaya.kab_kota")}
                  field={"besaran_biaya.kab_kota"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col md={6} sm>
                <Form.Label>
                  {" "}
                  Swadaya <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix="Rp "
                  register={register("besaran_biaya.swadaya")}
                  field={"besaran_biaya.swadaya"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
            </Row>

            <FormInputControl
              labelName="Pelaksana"
              required={true}
              register={register("pelaksana")}
              isInvalid={!!errors?.pelaksana}
              message={errors?.pelaksana?.message}
              placeholder="Masukan Pelaksana"
            />

            <Form.Group className="mb-3">
              <Form.Label>
                {" "}
                Jumlah Biaya <RequiredInfo />
              </Form.Label>
              {/* <FormInputMask
                prefix="Rp "
                register={register("jumlah_biaya")}
                field={"jumlah_biaya"}
                errors={errors}
                control={control}
                placeholder={"Masukan volume"}
                decimalScale={0}
                required={true}
              /> */}
            </Form.Group>

            <FormInputControl
              labelName="Keterangan"
              required={false}
              as={"textarea"}
              rows={3}
              register={register("keterangan")}
              isInvalid={!!errors?.keterangan}
              message={errors?.keterangan?.message}
              placeholder="Masukkan keterangan"
            />

            <Row>
              <Col sm>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Upload Lampiran</Form.Label>
                  <InputFileUpload
                    setValue={setValue}
                    field="upload_lampiran_surat"
                    message={errors?.upload_lampiran_surat?.message}
                    isInvalid={!!errors?.upload_lampiran_surat?.message}
                    link={lampiran}></InputFileUpload>
                </Form.Group>
              </Col>
            </Row>
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

export default BkKegiatanPembangunanForm
