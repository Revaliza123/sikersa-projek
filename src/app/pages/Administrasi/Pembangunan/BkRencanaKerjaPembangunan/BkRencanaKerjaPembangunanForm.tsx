import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import FormData from "@app/modules/Form/FormData"
import {
  BukuRencanaKerjaPembangunanField,
  IBukuRencanaKerjaPembangunan,
} from "@app/interface/administrasi/buku-rencana-kerja-pembangunan.interface"
import { FormGroupTitle } from "@app/styled/typography.styled"
import { API_PATH } from "@app/services/_path.service"
// import FormInputMask from "@app/components/Input/FormInputMask"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import { IFormDataContent } from "@app/interface/main"

const validationSchema = Yup.object().shape({
  nama_proyek: Yup.string().required(),
  lokasi: Yup.string().required(),
  sumber_biaya: Yup.object().shape({
    pemerintah: Yup.number().required(),
    provinsi: Yup.number().required(),
    kab_kota: Yup.number().required(),
    swadaya: Yup.number().required(),
  }),
  jumlah_biaya: Yup.number().required(),
  pelaksana: Yup.string().required(),
  manfaat: Yup.string().required(),
})

const BkRencanaKerjaPembangunanForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuRencanaKerjaPembangunan
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuRencanaKerjaPembangunan>({
    // resolver: yupResolver(validationSchema),
  })

  const onSubmitForm = (data: IBukuRencanaKerjaPembangunan) => {
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
        fields={BukuRencanaKerjaPembangunanField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nama Proyek/Kegiatan"
                  required={true}
                  register={register("nama_proyek")}
                  isInvalid={!!errors?.nama_proyek}
                  message={errors?.nama_proyek?.message}
                  placeholder="Masukkan Proyek/Kegiatan"
                />
              </Col>
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
            </Row>
            <FormGroupTitle>Sumber Biaya:</FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Label>
                  Pemerintah <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("sumber_biaya.pemerintah")}
                  errors={errors}
                  control={control}
                  field={"sumber_biaya.pemerintah"}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  Provinsi <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("sumber_biaya.provinsi")}
                  field={"sumber_biaya.provinsi"}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Label>
                  Kabupaten/Kota <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  register={register("sumber_biaya.kab_kota")}
                  errors={errors}
                  control={control}
                  field={"sumber_biaya.kab_kota"}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                  required={true}
                /> */}
              </Col>
              <Col sm>
                <Form.Label>
                  Swadaya <RequiredInfo />
                </Form.Label>
                {/* <FormInputMask
                  prefix={"Rp "}
                  field={"sumber_biaya.swadaya"}
                  register={register("sumber_biaya.swadaya")}
                  errors={errors}
                  control={control}
                  placeholder={"Masukan nominal"}
                  decimalScale={0}
                /> */}
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Jumlah Biaya <RequiredInfo />
              </Form.Label>
              {/* <FormInputMask
                prefix={"Rp "}
                register={register("jumlah_biaya")}
                errors={errors}
                control={control}
                field={"jumlah_biaya"}
                placeholder={"Masukan nominal"}
                decimalScale={0}
                required={true}
              /> */}
            </Form.Group>
            <FormInputControl
              labelName="Pelaksana"
              required={true}
              register={register("pelaksana")}
              isInvalid={!!errors?.pelaksana}
              message={errors?.pelaksana?.message}
              placeholder="Masukkan pelaksana"
            />
            <FormInputControl
              labelName="Manfaat"
              required={true}
              as={"textarea"}
              rows={3}
              register={register("manfaat")}
              isInvalid={!!errors?.manfaat}
              message={errors?.manfaat?.message}
              placeholder="Masukkan manfaat"
            />
            <FormInputControl
              labelName="Keterangan"
              as={"textarea"}
              rows={3}
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

export default BkRencanaKerjaPembangunanForm
