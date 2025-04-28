import { Button, ButtonCancel } from "@app/components"
import RequiredInfo from "@app/components/Info/RequiredInfo"
import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputMask from "@app/components/Input/FormInputMask"
import {
  BkKasPembantuKegiatanField,
  IBkKasPembantuKegiatan,
} from "@app/interface/administrasi/buku-kas-pembantu-kegiatan.interface"
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
  tanggal: Yup.string().required(),
})

const BkKasPembantuKegiatanForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKasPembantuKegiatan
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IBkKasPembantuKegiatan>({
    resolver: yupResolver(validationSchema),
  })

  const lampiran = useWatch({ control, name: "lampiran" })

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
        fields={BkKasPembantuKegiatanField}
        path={path}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Modal.Body>
            <FormInputControl
              type="date"
              labelName="Tanggal"
              required={true}
              register={register("tanggal")}
              isInvalid={!!errors?.tanggal}
              message={errors?.tanggal?.message}
              placeholder="Masukkan tanggal"
            />

            <FormGroupTitle>Penerimaan Kegiatan: </FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Dari Bendahara <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("penerimaan_kegiatan.dari_bendahara")}
                    errors={errors}
                    control={control}
                    field={"penerimaan_kegiatan.dari_bendahara"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Pemotongan <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register(
                      "penerimaan_kegiatan.swadaya_masyarakat"
                    )}
                    errors={errors}
                    control={control}
                    field={"penerimaan_kegiatan.swadaya_masyarakat"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>
            <FormInputControl
              labelName="Nomor Bukti"
              required={true}
              register={register("nomor_bukti")}
              isInvalid={!!errors?.nomor_bukti}
              message={errors?.nomor_bukti?.message}
              placeholder="Masukkan nomor bukti"
            />
            <FormGroupTitle>Pengeluaran Kegiatan: </FormGroupTitle>
            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Belanja Modal <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pengeluaran_kegiatan.belanja_modal")}
                    errors={errors}
                    control={control}
                    field={"pengeluaran_kegiatan.belanja_modal"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>

              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Belanja Barang Dan Jasa <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("pengeluaran_kegiatan.belanja_barang_dan_jasa")}
                    errors={errors}
                    control={control}
                    field={"pengeluaran_kegiatan.belanja_barang_dan_jasa"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm>
                <Form.Group>
                  <Form.Label>
                    {" "}
                    Jumlah Pengembalian ke Bendahara <RequiredInfo />
                  </Form.Label>
                  <FormInputMask
                    prefix={"Rp "}
                    register={register("jumlah_pengembalian_ke_bendahara")}
                    errors={errors}
                    control={control}
                    field={"jumlah_pengembalian_ke_bendahara"}
                    placeholder={"Masukan nominal"}
                    decimalScale={0}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>
                {" "}
                Saldo <RequiredInfo />
              </Form.Label>
              <FormInputMask
                prefix={"Rp "}
                register={register("saldo")}
                errors={errors}
                control={control}
                field={"saldo"}
                placeholder={"Masukan nominal"}
                decimalScale={0}
                required={true}
              />
            </Form.Group>

            <FormInputControl
              as="textarea"
              required={false}
              rows={3}
              labelName="Keterangan"
              register={register("keterangan")}
              isInvalid={!!errors?.keterangan}
              message={errors?.keterangan?.message}
              placeholder="Masukkan keterangan"
            />

            <Form.Group className="position-relative mb-3">
              <Form.Label> Upload Lampiran </Form.Label>
              <InputFileUpload
                setValue={setValue}
                field="lampiran"
                message={errors?.lampiran?.message}
                isInvalid={!!errors?.lampiran?.message}
                link={lampiran}></InputFileUpload>
            </Form.Group>
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

export default BkKasPembantuKegiatanForm
