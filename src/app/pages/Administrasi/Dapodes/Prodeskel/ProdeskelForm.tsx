import { Button } from "@app/components"
import { SDGsStatusErrorIcon } from "@app/components/Icons/SDGsStatusErrorIcon"
import { SdgsStatusSuccessIcon } from "@app/components/Icons/SdgsIcon"
import FormInputControl from "@app/components/Input/FormInputControl"
import { FormInputKK } from "@app/components/Input/FormInputKK"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import SelectStatic from "@app/components/Select/SelectStatic"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import {
  OPTIONS_BULAN,
  OPTIONS_HUBUNGAN_KELUARGA,
  OPTIONS_PRODESKEL_AKSEPTOR_KB,
  OPTIONS_PRODESKEL_LEMBAGA_EKONOMI,
  OPTIONS_PRODESKEL_LEMBAGA_KEMASYARAKATAN,
  OPTIONS_PRODESKEL_LEMBAGA_PEMERINTAH,
  OPTIONS_PRODESKEL_MATA_PENCAHARIAN_POKOK,
  OPTIONS_PRODESKEL_WAJIB_PAJAK,
} from "@app/config/options.config"
import { useNotification } from "@app/hooks/notification.hooks"
import {
  IProdeskel,
  ProdeskelField,
} from "@app/interface/administrasi/dapodes/prodeskel.interface"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { getCancelToken } from "@app/services/api.service"
import { postByController } from "@app/services/main.service"
import { yupResolver } from "@hookform/resolvers/yup"
import { get, unionBy } from "lodash"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { useFieldArray, useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import * as yup from "yup"

const schema = yup.object().shape({
  check_nomor_kk: yup.string().nullable(),
  kode_keluarga: yup.string().required(),
  nama_kepala_keluarga: yup.string().required(),
  alamat: yup.string().required(),
  rt: yup.string().min(3).max(3).required(),
  rw: yup.string().min(3).max(3).required(),
  nama_dusun: yup.string(),
  bulan: yup.number().required().not([0]),
  tahun: yup.number().required().not([0]),
  nama_pengisi: yup.string(),
  pekerjaan: yup.string(),
  jabatan: yup.string(),
  sumber_data: yup.string(),
  anggota_keluarga: yup.array().of(
    yup.object().shape({
      no_urut: yup.number().required(),
      nik: yup.string().required(),
      nama_lengkap: yup.string().required(),
      nomor_akte_kelahiran: yup.string(),
      jenis_kelamin: yup.string().required(),
      hubungan_keluarga: yup.string().required(),
      tempat_lahir: yup.string().required(),
      tanggal_lahir: yup.string().required().not(["", "Invalid date"]),
      tanggal_pencatatan: yup.string(),
      status_perkawinan: yup.string().required(),
      agama: yup.string().required(),
      golongan_darah: yup.string().required(),
      kewarganegaraan: yup.string().required(),
      "etnis_/_suku": yup.string(),
      pendidikan_terakhir: yup.string().required(),
      mata_pencaharian_pokok: yup.string().required(),
      "nama_bapak_/_ibu": yup.string(),
      akseptor_kb: yup.string().required(),
      cacat_fisik: yup.string(),
      cacat_mental: yup.string(),
      kependudukan_sebagai_wajib_pajak: yup.mixed(),
      lembaga_pemerintahan_yang_diikuti: yup.mixed(),
      lembaga_kemasyarakatan_yang_diikuti: yup.mixed(),
      lembaga_ekonomi_yang_diikuti: yup.mixed(),
    })
  ),
})

const stringArrayJoiner = (arr: Array<string>, delimiter = ",") => {
  if (!Array.isArray(arr)) return arr
  return arr.map((y: string) => y).join(delimiter)
}

export function ProdeskelForm({ afterSubmit }: { afterSubmit: any }) {
  const [page, setPage] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    setError,
    clearErrors,
    getValues,
  } = useForm<IProdeskel>({
    resolver: yupResolver(schema),
  })
  const { fields, append } = useFieldArray({
    name: "anggota_keluarga",
    control: control,
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [dataSelected, setDataSelected] = useState<any>()
  const [dataParams, setDataParams] = useState<any>()
  const [checked, setChecked] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [searchParams] = useSearchParams()
  const { dispatchNotification } = useNotification()

  const handleSubmitForm = (data: IProdeskel) => {
    const payload = {
      ...data,
      anggota_keluarga: data.anggota_keluarga.map((x: any) => ({
        ...x,
        kependudukan_sebagai_wajib_pajak: stringArrayJoiner(
          x.kependudukan_sebagai_wajib_pajak
        ),
        lembaga_pemerintahan_yang_diikuti: stringArrayJoiner(
          x.lembaga_pemerintahan_yang_diikuti
        ),
        lembaga_kemasyarakatan_yang_diikuti: stringArrayJoiner(
          x.lembaga_kemasyarakatan_yang_diikuti
        ),
        lembaga_ekonomi_yang_diikuti: stringArrayJoiner(
          x.lembaga_ekonomi_yang_diikuti
        ),
      })),
    }

    delete payload["check_nomor_kk"]

    setDataParams(payload)

    if (afterSubmit && typeof afterSubmit === "function") {
      afterSubmit(payload)
    }
  }

  const handleSubmitErrorForm = (err: any) => {
    console.error("Error submit", err)
    if (err) {
      const messageErrors = Object.values(err).map((x: any) => x?.message || "")
      dispatchNotification(messageErrors, "danger")
    }
  }

  const handleCloseModal = () => {
    if (afterSubmit && typeof afterSubmit === "function") {
      afterSubmit()
    }
  }

  const reformatedDate = (dateString: string) => {
    if (moment(dateString, ["YYY-MM-DD"]).isValid()) {
      return moment(dateString, ["YYY-MM-DD"], true).format("YYY-MM-DD")
    }

    return dateString
  }

  const checkByNomorKK = (data: any) => {
    const kepalaKeluarga = data?.[0]?.kepala
    const anggotaKeluarga = unionBy([...data?.[0]?.anggota], "_id")

    // KEPALA KELUARGA
    setValue("nama_kepala_keluarga", get(kepalaKeluarga, 0).umum?.nama_lengkap)
    setValue("alamat", get(kepalaKeluarga, 0).umum?.alamat_rumah)
    setValue("rt", get(kepalaKeluarga, 0).umum?.rt)
    setValue("rw", get(kepalaKeluarga, 0).umum?.rw)
    setValue("nama_dusun", get(kepalaKeluarga, 0).umum?.dusun)

      // ANGGOTA KELUARGA
      ; (anggotaKeluarga || []).forEach((d: any, idx: number) =>
        append({
          akseptor_kb: "",
          agama: d?.umum?.agama,
          cacat_fisik: d?.lain_lain?.cacat_fisik,
          cacat_mental: d?.lain_lain?.cacat_mental,
          "etnis_/_suku": d?.umum?.suku,
          golongan_darah: d?.umum?.golongan_darah,
          hubungan_keluarga: d?.kelahiran?.kedudukan_dalam_keluarga,
          jenis_kelamin: d?.umum?.jenis_kelamin,
          kependudukan_sebagai_wajib_pajak: "",
          kewarganegaraan: d?.umum?.kewarganegaraan,
          lembaga_ekonomi_yang_diikuti: "",
          lembaga_kemasyarakatan_yang_diikuti: "",
          lembaga_pemerintahan_yang_diikuti: "",
          mata_pencaharian_pokok: d?.umum?.pekerjaan,
          "nama_bapak_/_ibu": d?.kelahiran?.nama_ayah_kandung,
          nama_lengkap: d?.umum?.nama_lengkap,
          nik: d?.umum?.nik,
          no_urut: idx + 1,
          nomor_akte_kelahiran: d?.kelahiran?.nomor_akta_kelahiran,
          pendidikan_terakhir: d?.umum?.pendidikan_terakhir,
          status_perkawinan: d?.nikah_cerai?.status_perkawinan,
          tanggal_lahir: reformatedDate(d?.kelahiran?.tanggal_lahir),
          tanggal_pencatatan: "",
          tempat_lahir: d?.kelahiran?.tempat_lahir,
        })
      )
  }

  const getByNomorKK = async (nomorKK: string) => {
    try {
      const params = {
        filter: [{ field: "kode_keluarga", value: nomorKK }],
        order: "DESC",
        orderBy: "createdAt",
        page: 1,
        search: "",
        searchBy: [],
        size: 1,
      }
      const resp = await postByController(
        API_PATH().form.administrasi.prodeskel + "/get-all",
        params,
        getCancelToken()
      )

      if (resp?.data) {
        setSubmitted(true)
      } else {
        setSubmitted(false)
      }
    } catch (err) {
      setSubmitted(false)
      console.error("Error get by nomor kk", err)
    }
  }

  const handleCheckHasSubmitted = () => {
    const nomorKK = getValues("check_nomor_kk") || ""

    if (nomorKK) {
      setChecked(true)
      getByNomorKK(nomorKK)
    } else {
      dispatchNotification("Nomor KK tidak boleh kosong", "danger")
    }
  }

  useEffect(() => {
    if (searchParams.get("id")) {
      setChecked(true)
      setSubmitted(true)
      setPage(1)
    }
  }, [searchParams])

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={ProdeskelField}
        path={API_PATH().form.administrasi.prodeskel}
        customLabel="state"
        onLoading={setLoading}
        onGetDataResult={setDataSelected}>
        <Form onSubmit={handleSubmit(handleSubmitForm, handleSubmitErrorForm)}>
          <div className={page === 0 ? "d-block" : "d-none"}>
            <>
              {!checked ? (
                <React.Fragment>
                  <h5 className="fw-bolder mb-3">Kartu Keluarga</h5>
                  <div>
                    <Row>
                      <Col>
                        <FormInputControl
                          type="number"
                          labelName="Nomor Kartu Keluarga"
                          required={false}
                          register={register("check_nomor_kk")}
                          isInvalid={!!errors?.check_nomor_kk}
                          message={errors?.check_nomor_kk?.message}
                          placeholder="Masukkan nomor KK"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="d-flex justify-content-start align-items-center gap-1">
                    <Button
                      onClick={handleCheckHasSubmitted}
                      type="button"
                      variant="primary">
                      Cek DDK
                    </Button>
                  </div>
                </React.Fragment>
              ) : submitted ? (
                <HasSubmitted onClick={handleCloseModal} />
              ) : (
                <NotSubmitted onClick={() => setPage(page + 1)} />
              )}
            </>
          </div>
          <div className={page === 1 ? "d-block" : "d-none"}>
            <h5 className="fw-bolder mb-3">Kartu Keluarga</h5>
            <div>
              <Row>
                <Col>
                  <FormInputKK
                    labelName={"Kode Keluarga (Nomor KK)"}
                    required={true}
                    register={register("kode_keluarga")}
                    isInvalid={!!errors?.kode_keluarga}
                    message={errors?.kode_keluarga?.message}
                    placeholder={"Masukkan Kode Keluarga"}
                    fieldName={"kode_keluarga"}
                    control={control}
                    setError={setError}
                    clearErrors={clearErrors}
                    onCheckKK={checkByNomorKK}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="Nama Kepala Keluarga"
                    required={true}
                    register={register("nama_kepala_keluarga")}
                    isInvalid={!!errors?.nama_kepala_keluarga}
                    message={errors?.nama_kepala_keluarga?.message}
                    placeholder="Masukkan nama kepala keluarga"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="Alamat"
                    required={true}
                    register={register("alamat")}
                    isInvalid={!!errors?.alamat}
                    message={errors?.alamat?.message}
                    placeholder="Masukkan alamat"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="RT"
                    required={true}
                    register={register("rt")}
                    isInvalid={!!errors?.rt}
                    message={errors?.rt?.message}
                    placeholder="Masukkan rt"
                  />
                </Col>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="RW"
                    required={true}
                    register={register("rw")}
                    isInvalid={!!errors?.rw}
                    message={errors?.rw?.message}
                    placeholder="Masukkan rw"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="Nama Dusun"
                    required={false}
                    register={register("nama_dusun")}
                    isInvalid={!!errors?.nama_dusun}
                    message={errors?.nama_dusun?.message}
                    placeholder="Masukkan nama dusun"
                  />
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-end align-items-center my-3 gap-1">
              <Button
                onClick={handleCloseModal}
                type="button"
                variant="outline-primary">
                Kembali
              </Button>
              <Button
                onClick={() => setPage(page + 1)}
                type="button"
                variant="primary">
                Lanjut
              </Button>
            </div>
          </div>

          <div className={page === 2 ? "d-block" : "d-none"}>
            <h5 className="fw-bolder mb-3">Pengisi</h5>
            <div>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bulan <RequiredInfo />
                    </Form.Label>
                    <SelectStatic
                      required={true}
                      isClearable={false}
                      errors={errors}
                      control={control}
                      fieldName={`bulan`}
                      options={OPTIONS_BULAN()}
                      isMulti={false}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="Tahun"
                    required={true}
                    register={register("tahun")}
                    isInvalid={!!errors?.tahun}
                    message={errors?.tahun?.message}
                    placeholder="Masukkan tahun"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="Nama Pengisi"
                    required={false}
                    register={register("nama_pengisi")}
                    isInvalid={!!errors?.nama_pengisi}
                    message={errors?.nama_pengisi?.message}
                    placeholder="Masukkan nama pengisi"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Pekerjaan</Form.Label>
                    <SelectAsyncDynamic
                      required={true}
                      isClearable={false}
                      errors={errors}
                      control={control}
                      labelField={"name"}
                      valueField={"name"}
                      fieldName={`pekerjaan`}
                      pathServiceName={`${API_PATH().master}/get-all`}
                      queryParams={{
                        filter: [
                          {
                            value: "pekerjaan",
                            field: "category",
                          },
                        ],
                        size: 120,
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="Jabatan"
                    required={false}
                    register={register("jabatan")}
                    isInvalid={!!errors?.jabatan}
                    message={errors?.jabatan?.message}
                    placeholder="Masukkan jabatan"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormInputControl
                    type="text"
                    labelName="Sumber Data"
                    required={false}
                    register={register("sumber_data")}
                    isInvalid={!!errors?.sumber_data}
                    message={errors?.sumber_data?.message}
                    placeholder="Masukkan sumber data"
                  />
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-end align-items-center my-3 gap-1">
              <Button
                onClick={() => setPage(page - 1)}
                type="button"
                variant="outline-primary">
                Kembali
              </Button>
              {fields.length > 0 ? (
                <Button
                  onClick={() => setPage(page + 1)}
                  type="button"
                  variant="primary">
                  Lanjut
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary btn-submit"
                  isLoading={loading}>
                  {dataSelected?._id ? "Simpan Perubahan" : "Simpan"}
                </Button>
              )}
            </div>
          </div>

          {fields.length > 0 &&
            fields.map((field: any, index: number) => (
              <React.Fragment key={field?.id}>
                <div className={page === 3 + index ? "d-block" : "d-none"}>
                  <h5 className="fw-bolder mb-3">
                    Anggota Keluarga ({index + 1}/{fields.length})
                  </h5>
                  <div>
                    <Row>
                      <Col>
                        <FormInputControl
                          type="text"
                          labelName="No. Urut"
                          required={true}
                          register={register(
                            `anggota_keluarga.${index}.no_urut`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]?.no_urut
                          }
                          message={
                            errors?.anggota_keluarga?.[index]?.no_urut?.message
                          }
                          placeholder="Masukkan nomor urut"
                        />
                      </Col>
                      <Col>
                        <FormInputControl
                          type="text"
                          labelName="NIK"
                          required={true}
                          register={register(`anggota_keluarga.${index}.nik`)}
                          isInvalid={!!errors?.anggota_keluarga?.[index]?.nik}
                          message={
                            errors?.anggota_keluarga?.[index]?.nik?.message
                          }
                          placeholder="Masukkan NIK"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormInputControl
                          type="text"
                          labelName="Nama Lengkap"
                          required={true}
                          register={register(
                            `anggota_keluarga.${index}.nama_lengkap`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]?.nama_lengkap
                          }
                          message={
                            errors?.anggota_keluarga?.[index]?.nama_lengkap
                              ?.message
                          }
                          placeholder="Masukkan nama lengkap"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormInputControl
                          type="text"
                          labelName="Nomor Akte Kelahiran"
                          required={false}
                          register={register(
                            `anggota_keluarga.${index}.nomor_akte_kelahiran`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]
                              ?.nomor_akte_kelahiran
                          }
                          message={
                            errors?.anggota_keluarga?.[index]
                              ?.nomor_akte_kelahiran?.message
                          }
                          placeholder="Masukkan nomor akte kelahiran"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Jenis kelamin <RequiredInfo />
                          </Form.Label>
                          <SelectAsyncDynamic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            fieldName={`anggota_keluarga.${index}.jenis_kelamin`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "jenis_kelamin",
                                  field: "category",
                                },
                              ],
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Hubungan Keluarga <RequiredInfo />
                          </Form.Label>
                          <SelectStatic
                            required={true}
                            isClearable={false}
                            errors={errors}
                            control={control}
                            fieldName={`anggota_keluarga.${index}.hubungan_keluarga`}
                            options={OPTIONS_HUBUNGAN_KELUARGA()}
                            isMulti={false}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormInputControl
                          type="text"
                          labelName="Tempat Lahir"
                          required={true}
                          register={register(
                            `anggota_keluarga.${index}.tempat_lahir`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]?.tempat_lahir
                          }
                          message={
                            errors?.anggota_keluarga?.[index]?.tempat_lahir
                              ?.message
                          }
                          placeholder="Masukkan tempat lahir"
                        />
                      </Col>
                      <Col>
                        <FormInputControl
                          type="date"
                          labelName="Tanggal Lahir"
                          required={true}
                          register={register(
                            `anggota_keluarga.${index}.tanggal_lahir`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]?.tanggal_lahir
                          }
                          message={
                            errors?.anggota_keluarga?.[index]?.tanggal_lahir
                              ?.message
                          }
                          placeholder="Masukkan tanggal lahir"
                          additionalOptions={{
                            max: moment().format("yyyy-MM-DD"),
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormInputControl
                          type="date"
                          labelName="Tanggal Pencatatan"
                          required={false}
                          register={register(
                            `anggota_keluarga.${index}.tanggal_pencatatan`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]
                              ?.tanggal_pencatatan
                          }
                          message={
                            errors?.anggota_keluarga?.[index]
                              ?.tanggal_pencatatan?.message
                          }
                          placeholder="Masukkan tanggal pencatatan"
                          additionalOptions={{
                            max: moment().format("yyyy-MM-DD"),
                          }}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Status Perkawinan <RequiredInfo />
                          </Form.Label>
                          <SelectAsyncDynamic
                            isClearable={true}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            placeholder="Status Perkawinan"
                            fieldName={`anggota_keluarga.${index}.status_perkawinan`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "status_perkawinan",
                                  field: "category",
                                },
                              ],
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Agama <RequiredInfo />
                          </Form.Label>
                          <SelectAsyncDynamic
                            isClearable={true}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            placeholder="Agama"
                            fieldName={`anggota_keluarga.${index}.agama`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "agama",
                                  field: "category",
                                },
                              ],
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Golongan Darah <RequiredInfo />
                          </Form.Label>
                          <SelectAsyncDynamic
                            required={true}
                            isClearable={false}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            fieldName={`anggota_keluarga.${index}.golongan_darah`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "golongan_darah",
                                  field: "category",
                                },
                              ],
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Kewarganegaraan <RequiredInfo />
                          </Form.Label>
                          <SelectAsyncDynamic
                            required={true}
                            isClearable={false}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            fieldName={`anggota_keluarga.${index}.kewarganegaraan`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "kewarganegaraan",
                                  field: "category",
                                },
                              ],
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <FormInputControl
                          type="text"
                          labelName="Etnis / suku"
                          required={false}
                          register={register(
                            `anggota_keluarga.${index}.etnis_/_suku`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]?.[
                            "etnis_/_suku"
                            ]
                          }
                          message={
                            errors?.anggota_keluarga?.[index]?.["etnis_/_suku"]
                              ?.message
                          }
                          placeholder="Masukkan etnis / suku"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            Pendidikan Terakhir <RequiredInfo />
                          </Form.Label>
                          <SelectAsyncDynamic
                            isClearable={true}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            placeholder="Pendidikan"
                            fieldName={`anggota_keluarga.${index}.pendidikan_terakhir`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "pendidikan_terakhir",
                                  field: "category",
                                },
                              ],
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Mata Pencaharian Pokok <RequiredInfo />
                          </Form.Label>
                          <SelectStatic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            required={true}
                            fieldName={`anggota_keluarga.${index}.mata_pencaharian_pokok`}
                            options={OPTIONS_PRODESKEL_MATA_PENCAHARIAN_POKOK()}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormInputControl
                          type="text"
                          labelName="Nama Bapak / Ibu"
                          required={false}
                          register={register(
                            `anggota_keluarga.${index}.nama_bapak_/_ibu`
                          )}
                          isInvalid={
                            !!errors?.anggota_keluarga?.[index]?.[
                            "nama_bapak_/_ibu"
                            ]
                          }
                          message={
                            errors?.anggota_keluarga?.[index]?.[
                              "nama_bapak_/_ibu"
                            ]?.message
                          }
                          placeholder="Masukkan nama bapak / ibu"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Akseptor KB <RequiredInfo />
                          </Form.Label>
                          <SelectStatic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            required={true}
                            fieldName={`anggota_keluarga.${index}.akseptor_kb`}
                            options={OPTIONS_PRODESKEL_AKSEPTOR_KB()}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Cacat Fisik</Form.Label>
                          <SelectAsyncDynamic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            fieldName={`anggota_keluarga.${index}.cacat_fisik`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "cacat_fisik",
                                  field: "category",
                                },
                              ],
                            }}
                            isMulti={true}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label> Cacat Mental</Form.Label>
                          <SelectAsyncDynamic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            labelField={"name"}
                            valueField={"name"}
                            fieldName={`anggota_keluarga.${index}.cacat_mental`}
                            pathServiceName={`${API_PATH().master}/get-all`}
                            queryParams={{
                              filter: [
                                {
                                  value: "cacat_mental",
                                  field: "category",
                                },
                              ],
                            }}
                            isMulti={true}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Kependudukan sebagai Wajib Pajak
                          </Form.Label>
                          <SelectStatic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            fieldName={`anggota_keluarga.${index}.kependudukan_sebagai_wajib_pajak`}
                            options={OPTIONS_PRODESKEL_WAJIB_PAJAK()}
                            isMulti={true}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Lembaga pemerintahan yang diikuti
                          </Form.Label>
                          <SelectStatic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            fieldName={`anggota_keluarga.${index}.lembaga_pemerintahan_yang_diikuti`}
                            options={OPTIONS_PRODESKEL_LEMBAGA_PEMERINTAH()}
                            isMulti={true}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            Lembaga kemasyarakatan yang diikuti
                          </Form.Label>
                          <SelectStatic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            fieldName={`anggota_keluarga.${index}.lembaga_kemasyarakatan_yang_diikuti`}
                            options={OPTIONS_PRODESKEL_LEMBAGA_KEMASYARAKATAN()}
                            isMulti={true}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Lembaga ekonomi yang diikuti</Form.Label>
                          <SelectStatic
                            isClearable={false}
                            errors={errors}
                            control={control}
                            fieldName={`anggota_keluarga.${index}.lembaga_ekonomi_yang_diikuti`}
                            options={OPTIONS_PRODESKEL_LEMBAGA_EKONOMI()}
                            isMulti={true}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>

                  <div className="d-flex justify-content-end align-items-center my-3 gap-1">
                    <Button
                      onClick={() => setPage(page - 1)}
                      type="button"
                      variant="outline-primary">
                      Kembali
                    </Button>
                    {page === fields.length + 2 ? (
                      <Button
                        type="submit"
                        variant="primary btn-submit"
                        isLoading={loading}>
                        {dataSelected?._id ? "Simpan Perubahan" : "Simpan"}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setPage(page + 1)}
                        type="button"
                        variant="primary">
                        Lanjut
                      </Button>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}
        </Form>
      </FormData>
    </>
  )
}

function NotSubmitted({ onClick }: { onClick: () => void }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <SDGsStatusErrorIcon />
      <p className="my-2">
        Nomor KK belum ada pendataan
        <br />
        DDK sebelumnya
      </p>
      <Button className="mb-3" onClick={onClick} type="button" variant="danger">
        Isi DDK
      </Button>
    </div>
  )
}

function HasSubmitted({ onClick }: { onClick: () => void }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <SdgsStatusSuccessIcon />
      <p className="my-2">
        Nomor KK sudah terdaftar dalam
        <br />
        DDK sebelumnya
      </p>
      <Button
        className="mb-3"
        onClick={onClick}
        type="button"
        variant="primary">
        Selesai
      </Button>
    </div>
  )
}
