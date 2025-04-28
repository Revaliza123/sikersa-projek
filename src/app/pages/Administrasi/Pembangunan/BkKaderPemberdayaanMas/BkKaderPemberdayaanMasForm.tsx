import { Button, ButtonCancel } from "@app/components"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import SelectStatic from "@app/components/Select/SelectStatic"
import {
  BukuKaderPemberdayaanMasyarakatField,
  IBukuKaderPemberdayaanMasyarakat,
} from "@app/interface/administrasi/buku-kader-pemberdayaan-masyarakat.interface"
import { IFormDataContent } from "@app/interface/main"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { DFlex } from "@app/styled/flex.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { Col, Form, InputGroup, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  nik: Yup.string().min(16).max(16).required(),
  nama: Yup.string().required(),
  jenis_kelamin: Yup.string().required(),
  umur: Yup.string().required(),
  pendidikan: Yup.string().required(),
  bidang: Yup.string().required(),
  alamat: Yup.string().required(),
})

const BkKaderPemberdayaanMasForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKaderPemberdayaanMasyarakat
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBukuKaderPemberdayaanMasyarakat>({
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
        fields={BukuKaderPemberdayaanMasyarakatField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <Row hidden>
              <Col sm>
                <Form.Group as={Col} controlId="level">
                  <Form.Label>
                    Cari Berdasarkan NIK/Nama
                    <RequiredInfo />
                  </Form.Label>
                  <SelectStatic
                    isClearable={true}
                    control={control}
                    errors={errors}
                    fieldName={"name"}
                    options={[]}
                    placeholder="Pilih dari buku induk penduduk"></SelectStatic>
                  <Form.Control.Feedback type="invalid">
                    {(errors as any)?.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <FormInputControl
              labelName="NIK"
              required={true}
              register={register("nik")}
              isInvalid={!!errors?.nik}
              message={errors?.nik?.message}
              placeholder="Masukkan nik"
            />
            <Row>
              <Col sm>
                <FormInputControl
                  labelName="Nama"
                  required={true}
                  register={register("nama")}
                  isInvalid={!!errors?.nama}
                  message={errors?.nama?.message}
                  placeholder="Masukkan nama"
                />
              </Col>
              <Col sm>
                <Form.Group>
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <div className="d-flex flex-column" >
                    <Form.Check
                      inline
                      label="Laki-Laki"
                      value="Laki-Laki"
                      type={"radio"}
                      {...register("jenis_kelamin")}
                    />
                    <Form.Check
                      inline
                      label="Perempuan"
                      value="Perempuan"
                      type={"radio"}
                      {...register("jenis_kelamin")}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>Umur</Form.Label>
                  <InputGroup>
                    <FormInputControl
                      formGroup={false}
                      required={false}
                      register={register("umur")}
                      isInvalid={!!errors?.umur}
                      message={errors?.umur?.message}
                      placeholder="Masukan Umur"
                    />
                    <InputGroup.Text>Tahun</InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors?.umur?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group>
                  <SelectAsyncDynamic
                    labelName="Pendidikan"
                    isClearable={false}
                    errors={errors}
                    control={control}
                    labelField={"name"}
                    valueField={"name"}
                    fieldName={`pendidikan`}
                    pathServiceName={`${API_PATH().master}/get-all`}
                    queryParams={{
                      filter: [
                        {
                          value: "pendidikan",
                          field: "category",
                        },
                      ],
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <FormInputControl
              labelName="Bidang"
              required={true}
              register={register("bidang")}
              isInvalid={!!errors?.bidang}
              message={errors?.bidang?.message}
              placeholder="Masukkan bidang"
            />

            <FormInputControl
              labelName="Alamat"
              required={true}
              as={"textarea"}
              rows={3}
              register={register("alamat")}
              isInvalid={!!errors?.alamat}
              message={errors?.alamat?.message}
              placeholder="Masukkan alamat"
            />
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

export default BkKaderPemberdayaanMasForm
