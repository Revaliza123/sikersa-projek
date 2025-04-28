import { Button, ButtonCancel } from "@app/components"
import FormInputControl from "@app/components/Input/FormInputControl"
import FormInputGroup from "@app/components/Input/FormInputGroup"
import { InputLocation } from "@app/components/Input/FormInputLocation"
// import FormInputMask from "@app/components/Input/FormInputMask"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import SelectStatic from "@app/components/Select/SelectStatic"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import { useErrorForm } from "@app/helper/form-error.helper"
import {
  BukuIndukPendudukField,
  IBukuIndukPenduduk,
} from "@app/interface/administrasi/buku-induk-penduduk.interface"
import { IFormDataContent } from "@app/interface/main"
import FormData from "@app/modules/Form/FormData"
import { API_PATH } from "@app/services/_path.service"
import { DFlex } from "@app/styled/flex.styled"
import { TabLink } from "@app/styled/tab.styled"
import { FormGroupTitle } from "@app/styled/typography.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import moment from "moment"
import React, { useEffect, useMemo, useState } from "react"
import { Col, Form, InputGroup, Modal, Nav, Row, Tab } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"
import * as Yup from "yup"

const JENIS_PERUBAHAN = [
  { label: "-", value: "-", showOnAdd: true, showOnEdit: true },
  { label: "Datang", value: "Datang", showOnAdd: true, showOnEdit: true },
  { label: "Lahir", value: "Lahir", showOnAdd: true, showOnEdit: false },
  { label: "Pergi", value: "Pergi", showOnAdd: true, showOnEdit: true },
  { label: "Meninggal", value: "Meninggal", showOnAdd: true, showOnEdit: true },
]

const validationSchema = Yup.object().shape({
  umum: Yup.object().shape({
    nik: Yup.string().min(16).max(16).required(),
    nama_lengkap: Yup.string().required(),
    jenis_kelamin: Yup.string().required(),
    golongan_darah: Yup.string(),
    kewarganegaraan: Yup.string().required(),
    agama: Yup.string().required(),
    alamat_rumah: Yup.string().required(),
    jenis_perubahan: Yup.string().required(),
    dusun: Yup.string().required(),
    rw: Yup.string().min(3).required(),
    rt: Yup.string().min(3).required(),
    pendidikan_terakhir: Yup.string().required(),
    pekerjaan: Yup.string().required(),
    pergi_tanggal: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(pergi)/gi),
      then: Yup.string().required(),
    }),
    pergi_ke: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(pergi)/gi),
      then: Yup.string().required(),
    }),
    datang_tanggal: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(datang)/gi),
      then: Yup.string().required(),
    }),
    datang_ke: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(datang)/gi),
      then: Yup.string().required(),
    }),
  }),
  kelahiran: Yup.object().shape({
    tempat_lahir: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(lahir)/gi),
      then: Yup.string().required(),
    }),
    tanggal_lahir: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(lahir)/gi),
      then: Yup.string().required(),
    }),
    nomor_kk: Yup.string().required(),
    nama_ibu_kandung: Yup.string().required(),
  }),
  kematian: Yup.object().shape({
    tempat_kematian: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(meninggal)/gi),
      then: Yup.string().required(),
    }),
    tanggal_kematian: Yup.string().when("umum.jenis_perubahan", {
      is: (value: string) => value && value.match(/(meninggal)/gi),
      then: Yup.string().required(),
    }),
  }),
  nikah_cerai: Yup.object().shape({
    status_perkawinan: Yup.string().required(),
  }),
})

const BkIndukPendudukForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()
  const [tabActive, setTabActive] = useState<string>("formUmum")

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuIndukPenduduk
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    watch,
    formState: { errors },
  } = useForm<IBukuIndukPenduduk>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  })
  const { onErrorForm } = useErrorForm()
  const watchUmumPekerjaan = watch("umum.pekerjaan")
  const { loggedInUser } = useSelector((state: any) => state.auth)
  let { id } = useParams()
  const [searchParams] = useSearchParams()
  const [additionalParams, setAdditionalParams] = useState<
    Record<string, unknown>
  >({})
  const onSubmitForm = (data: IBukuIndukPenduduk) => {
    const pekerjaanLainnya = data?.umum?.pekerjaan_lainnya || ""
    const watcher = (watchUmumPekerjaan || "").toLowerCase().includes("lainnya")
      ? pekerjaanLainnya
      : watchUmumPekerjaan

    delete data["umum"]["pekerjaan_lainnya"]
    data["umum"]["pekerjaan"] = watcher ? watcher : "-"

    const params = {
      ...data,
    }

    setDataParams(params)
  }

  const onNavTab = (selected: string) => {
    setTabActive(selected)
  }

  // send current login username when update buku induk
  useEffect(() => {
    if (id || searchParams.get("id")) {
      setAdditionalParams({ edited_by: loggedInUser?.username })
    }
  }, [id, searchParams.get("id")])

  const jenisPerubahanList = useMemo(() => {
    if (id || searchParams.get("id")) {
      return JENIS_PERUBAHAN.filter(
        (x: { showOnEdit: boolean }) => x.showOnEdit
      )
    }
    return JENIS_PERUBAHAN
  }, [id, searchParams.get("id")])

  return (
    <>
      <Tab.Container defaultActiveKey={tabActive}>
        <Nav
          className="d-flex justify-content-center mt-3"
          activeKey={tabActive}
          onSelect={(selectedKey) => onNavTab(selectedKey as string)}>
          <Nav.Item>
            <TabLink eventKey="formUmum">Umum</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="formKelahiran">Kelahiran</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="formKematian">Kematian</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="nikahCerai">Nikah / Cerai</TabLink>
          </Nav.Item>
          <Nav.Item>
            <TabLink eventKey="formLainnya">Lainnya</TabLink>
          </Nav.Item>
        </Nav>

        <FormData
          setError={setError}
          setValue={setValue}
          dataParams={dataParams}
          fields={BukuIndukPendudukField}
          path={path}
          customLabel="state"
          onLoading={setLoading}
          onGetDataResult={setDataSelected}
          additionalParams={additionalParams}
          >
          <Form noValidate onSubmit={handleSubmit(onSubmitForm, onErrorForm)}>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey="formUmum">
                  <FormGroupTitle>Informasi Diri</FormGroupTitle>
                  <FormInputControl
                    labelName="NIK"
                    required={true}
                    register={register("umum.nik")}
                    isInvalid={!!errors?.umum?.nik}
                    message={errors?.umum?.nik?.message}
                    placeholder="Masukkan nik"
                    maxlength={16}
                  />
                  <Row>
                    <Col sm>
                      <FormInputControl
                        labelName="Nama Lengkap"
                        required={true}
                        register={register("umum.nama_lengkap")}
                        isInvalid={!!errors?.umum?.nama_lengkap}
                        message={errors?.umum?.nama_lengkap?.message}
                        placeholder="Masukkan nama lengkap"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Nama Panggilan"
                        required={false}
                        register={register("umum.nama_panggilan")}
                        isInvalid={!!errors?.umum?.nama_panggilan}
                        message={errors?.umum?.nama_panggilan?.message}
                        placeholder="Masukkan nama lengkap"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group>
                        <Form.Label>
                          Jenis Kelamin <RequiredInfo />
                        </Form.Label>
                        <div className="my-2">
                          <Form.Check
                            inline
                            label="Laki-Laki"
                            value="Laki-Laki"
                            type={"radio"}
                            isInvalid={!!errors?.umum?.jenis_kelamin}
                            {...register("umum.jenis_kelamin")}
                          />
                          <Form.Check
                            inline
                            label="Perempuan"
                            value="Perempuan"
                            type={"radio"}
                            isInvalid={!!errors?.umum?.jenis_kelamin}
                            {...register("umum.jenis_kelamin")}
                          />
                        </div>
                        {errors?.umum?.jenis_kelamin && (
                          <div className="invalid-feedback d-block">
                            {errors?.umum?.jenis_kelamin?.message}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3">

                        <SelectAsyncDynamic
                          labelName="Golongan Darah"
                          required={true}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`umum.golongan_darah`}
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
                    <Col sm>
                      <Form.Group className="mb-3">

                        <SelectAsyncDynamic
                          labelName="Agama"
                          required={true}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`umum.agama`}
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
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <Form.Label>Kewarganegaraan</Form.Label>
                        <SelectAsyncDynamic
                          required={false}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`umum.kewarganegaraan`}
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
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        required={false}
                        labelName="Kebangsaan"
                        register={register("umum.kebangsaan")}
                        isInvalid={!!errors?.umum?.kebangsaan}
                        message={errors?.umum?.kebangsaan?.message}
                        placeholder="Masukkan kebangsaan"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        required={false}
                        labelName="Suku"
                        register={register("umum.suku")}
                        isInvalid={!!errors?.umum?.suku}
                        message={errors?.umum?.suku?.message}
                        placeholder="Masukkan suku"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <SelectAsyncDynamic
                          labelName="Pendidikan Terakhir"
                          required={true}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`umum.pendidikan_terakhir`}
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
                    <Col sm>
                      <FormInputControl
                        type="tel"
                        labelName="No Telp"
                        register={register("umum.no_telepon_hp")}
                        isInvalid={!!errors?.umum?.no_telepon_hp}
                        message={errors?.umum?.no_telepon_hp?.message}
                        placeholder="Masukkan non telp +62"
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <SelectAsyncDynamic
                      labelName="Pekerjaan"
                      required={true}
                      isClearable={false}
                      errors={errors}
                      control={control}
                      labelField={"name"}
                      valueField={"name"}
                      fieldName={`umum.pekerjaan`}
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
                    {(watchUmumPekerjaan || "")
                      .toLowerCase()
                      .includes("lainnya") ? (
                      <FormInputControl
                        labelName=""
                        register={register("umum.pekerjaan_lainnya")}
                        isInvalid={!!errors?.umum?.pekerjaan_lainnya}
                        message={errors?.umum?.pekerjaan_lainnya?.message}
                        placeholder="Masukkan pekerjaan"
                      />
                    ) : null}
                  </Form.Group>

                  <FormGroupTitle>Informasi Alamat</FormGroupTitle>

                  <FormInputControl
                    as="textarea"
                    required={true}
                    rows={2}
                    labelName="Alamat"
                    register={register("umum.alamat_rumah")}
                    isInvalid={!!errors?.umum?.alamat_rumah}
                    message={errors?.umum?.alamat_rumah?.message}
                    placeholder="Masukkan alamat"
                  />

                  <Row>
                    <Col sm>
                      <FormInputControl
                        required={true}
                        labelName="RT"
                        register={register("umum.rt")}
                        isInvalid={!!errors?.umum?.rt}
                        message={errors?.umum?.rt?.message}
                        placeholder="Masukkan RT"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        required={true}
                        labelName="RW"
                        register={register("umum.rw")}
                        isInvalid={!!errors?.umum?.rw}
                        message={errors?.umum?.rw?.message}
                        placeholder="Masukkan RW"
                      />
                    </Col>
                  </Row>
                  <FormInputControl
                    labelName="Dusun"
                    required={true}
                    register={register("umum.dusun")}
                    isInvalid={!!errors?.umum?.dusun}
                    message={errors?.umum?.dusun?.message}
                    placeholder="Masukan dusun"
                  />

                  {/* <Row>
                    <Col md={6} sm>
                      <Form.Group className='mb-3'>
                        <Form.Label>Provinsi <RequiredInfo /></Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={'nama_provinsi'}
                          valueField={'kode_provinsi'}
                          fieldName={`umum.provinsi`}
                          pathServiceName={API_PATH().admLocation.province}
                          queryParams={{
                            size:50
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} sm>
                      <Form.Group className='mb-3'>
                        <Form.Label>Kabupaten/Kota <RequiredInfo /></Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={'nama_kota'}
                          valueField={'kode_kota'}
                          fieldNameParent={'provinceCode'}
                          fieldName={`umum.kabupaten_kota`}
                          pathServiceName={API_PATH().admLocation.city}
                          watchParent={watchUmumProvince}
                          isDisabled={watchUmumProvince=='' || watchUmumProvince==undefined}
                          queryParams={{
                            size:50
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} sm>
                      <Form.Group className='mb-3'>
                        <Form.Label>Kecamatan <RequiredInfo /></Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={'nama_kecamatan'}
                          valueField={'kode_kecamatan'}
                          fieldNameParent={'cityCode'}
                          fieldName={`umum.kecamatan`}
                          pathServiceName={API_PATH().admLocation.district}
                          watchParent={watchUmumCity}
                          isDisabled={watchUmumCity=='' || watchUmumCity==undefined}
                          queryParams={{
                            size:50
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} sm>
                      <Form.Group className='mb-3'>
                        <Form.Label>Desa/Kelurahan <RequiredInfo /></Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={'nama_kelurahan'}
                          valueField={'kode_kelurahan'}
                          fieldNameParent={'districtCode'}
                          fieldName={`umum.desa_kelurahan`}
                          pathServiceName={API_PATH().admLocation.subdistrict}
                          watchParent={watchUmumDistrict}
                          isDisabled={watchUmumDistrict=='' || watchUmumDistrict==undefined}
                          queryParams={{
                            size:50
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}

                  <Row>
                    <Col>
                      <Form.Label>Dapat Membaca Huruf</Form.Label>
                      <div>
                        <Form.Check
                          inline
                          label="Ya"
                          type={"radio"}
                          value={"Ya"}
                          {...register("umum.dapat_membaca_huruf")}
                        />
                        <Form.Check
                          inline
                          label="Tidak"
                          value={"Tidak"}
                          {...register("umum.dapat_membaca_huruf")}
                          type={"radio"}
                        />
                      </div>
                    </Col>
                  </Row>
                  <FormGroupTitle className="mt-4">
                    Perubahan Data
                  </FormGroupTitle>
                  <Form.Group className="mb-3">
                    <SelectStatic
                      labelName="Jenis Perubahan"
                      options={jenisPerubahanList}
                      control={control}
                      errors={errors}
                      fieldName="umum.jenis_perubahan"
                    />
                  </Form.Group>

                  {/* <SelectAsyncDynamic
                      isClearable={false}
                      errors={errors}
                      control={control}
                      labelField={'name'}
                      valueField={'name'}
                      required={true}
                      fieldName={`umum.jenis_perubahan`}
                      pathServiceName={`${API_PATH().master}/get-all`}
                      queryParams={{
                        filter: [
                          {
                            value: 'jenis_perubahan',
                            field: 'category',
                          },
                        ],
                      }}
                    />
                  </Form.Group> */}

                  {/* JENIS PERUBAHAN DATANG */}
                  {watch("umum.jenis_perubahan")?.match(/(datang)/gi) ? (
                    <>
                      <Row>
                        <Col sm>
                          <FormInputControl
                            required={true}
                            labelName="Datang dari"
                            register={register("umum.datang_ke")}
                            isInvalid={!!errors?.umum?.datang_ke}
                            message={errors?.umum?.datang_ke?.message}
                            placeholder="Masukkan datang dari"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm>
                          <FormInputControl
                            type='date'
                            required={true}
                            labelName="Tanggal datang"
                            register={register("umum.datang_tanggal")}
                            isInvalid={!!errors?.umum?.datang_tanggal}
                            message={errors?.umum?.datang_tanggal?.message}
                            placeholder="Masukkan tanggal datang"
                          />
                        </Col>
                      </Row>
                    </>
                  ) : null}

                  {/* JENIS PERUBAHAN PERGI */}
                  {watch("umum.jenis_perubahan")?.match(/(pergi)/gi) ? (
                    <>
                      <Row>
                        <Col sm>
                          <FormInputControl
                            required={true}
                            labelName="Pergi ke"
                            register={register("umum.pergi_ke")}
                            isInvalid={!!errors?.umum?.pergi_ke}
                            message={errors?.umum?.pergi_ke?.message}
                            placeholder="Masukkan pergi ke"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm>
                          <FormInputControl
                            required={true}
                            labelName="Tanggal pergi"
                            register={register("umum.pergi_tanggal")}
                            isInvalid={!!errors?.umum?.pergi_tanggal}
                            message={errors?.umum?.pergi_tanggal?.message}
                            placeholder="Masukkan tangal pergi"
                          />
                        </Col>
                      </Row>
                    </>
                  ) : null}
                </Tab.Pane>

                {/* FORM KELAHIRAN  */}
                <Tab.Pane eventKey="formKelahiran">
                  <FormGroupTitle>Informasi Kelahiran</FormGroupTitle>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Tempat Dilahirkan{" "}
                          {watch("umum.jenis_perubahan")?.match(/(lahir)/gi) ? (
                            <RequiredInfo />
                          ) : null}
                        </Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          required={
                            watch("umum.jenis_perubahan")?.match(/lahir/gi)
                              ? true
                              : false
                          }
                          fieldName={`kelahiran.tempat_dilahirkan`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "tempat_dilahirkan",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Kota Lahir"
                        required={true}
                        register={register("kelahiran.tempat_lahir")}
                        isInvalid={!!errors?.kelahiran?.tempat_lahir}
                        message={errors?.kelahiran?.tempat_lahir?.message}
                        placeholder="Masukkan tempat lahir"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="date"
                        labelName="Tanggal Lahir"
                        required={
                          watch("umum.jenis_perubahan")?.match(/lahir/gi)
                            ? true
                            : false
                        }
                        register={register("kelahiran.tanggal_lahir")}
                        isInvalid={!!errors?.kelahiran?.tanggal_lahir}
                        message={errors?.kelahiran?.tanggal_lahir?.message}
                        placeholder="Tanggal"
                        additionalOptions={{
                          max: moment().format("yyyy-MM-DD"),
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="time"
                        labelName="Jam Lahir"
                        required={false}
                        register={register("kelahiran.jam_lahir")}
                        isInvalid={!!errors?.kelahiran?.jam_lahir}
                        message={errors?.kelahiran?.jam_lahir?.message}
                        placeholder="Jam"
                      />
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <SelectAsyncDynamic
                          labelName="Zona Waktu"
                          required={false}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`kelahiran.waktu_lahir`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "zona_waktu",
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
                      <FormInputGroup
                        required={true}
                        register={register("kelahiran.panjang_bayi")}
                        field={errors?.kelahiran?.panjang_bayi}
                        label={"Panjang Bayi"}
                        suffix={"Cm"}
                        type="number"
                        placeholder="Masukkan panjang bayi"
                      />
                    </Col>
                    <Col sm>
                      <FormInputGroup
                        required={true}
                        register={register("kelahiran.berat_bayi")}
                        field={errors?.kelahiran?.berat_bayi}
                        label={"Berat Bayi"}
                        suffix={"Kg"}
                        type="number"
                        placeholder="Masukkan berat bayi"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="number"
                        labelName="Anak Ke"
                        required={false}
                        register={register("kelahiran.anak_ke")}
                        isInvalid={!!errors?.kelahiran?.anak_ke}
                        message={errors?.kelahiran?.anak_ke?.message}
                        placeholder="Masukkan anak ke-"
                      />
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <SelectAsyncDynamic
                          labelName="Jenis Kelahiran"
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          required={false}
                          fieldName={`kelahiran.jenis_kelahiran`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "jenis_kelahiran",
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
                      <Form.Group className="mb-3">
                        <SelectAsyncDynamic
                          labelName="Penolong Kelahiran"
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          required={false}
                          fieldName={`kelahiran.penolong_kelahiran`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "penolong_kelahiran",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <FormGroupTitle>Informasi Nomor dan Akta</FormGroupTitle>

                  <Row>
                    <Col sm>
                      <FormInputControl
                        labelName="Nomor KK"
                        required={true}
                        register={register("kelahiran.nomor_kk")}
                        isInvalid={!!errors?.kelahiran?.nomor_kk}
                        message={errors?.kelahiran?.nomor_kk?.message}
                        placeholder="Masukan nomor KK"
                      />
                    </Col>
                    <Col sm>
                      <Form.Group>
                        <SelectAsyncDynamic
                          labelName="Kedudukan Dalam Keluarga"
                          required={false}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`kelahiran.kedudukan_dalam_keluarga`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "kedudukan_dalam_keluarga",
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
                      <FormInputControl
                        type="date"
                        labelName="Tanggal diterbitkan KTP"
                        required={false}
                        register={register("kelahiran.tanggal_diterbitkan_ktp")}
                        isInvalid={!!errors?.kelahiran?.tanggal_diterbitkan_ktp}
                        message={
                          errors?.kelahiran?.tanggal_diterbitkan_ktp?.message
                        }
                        placeholder="Masukan tanggal"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Tempat Diterbitkan KTP"
                        required={false}
                        register={register("kelahiran.tempat_diterbitkan_ktp")}
                        isInvalid={!!errors?.kelahiran?.tempat_diterbitkan_ktp}
                        message={
                          errors?.kelahiran?.tempat_diterbitkan_ktp?.message
                        }
                        placeholder="Masukan nomor KK"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group>
                        <SelectAsyncDynamic
                          labelName="Akta Kelahiran"
                          required={false}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`kelahiran.akta_kelahiran`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "akta_kelahiran",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col sm>
                      <FormInputControl
                        type="date"
                        labelName="Tanggal Akta Kelahiran"
                        required={false}
                        register={register("kelahiran.tanggal_akta_kelahiran")}
                        isInvalid={!!errors?.kelahiran?.tanggal_akta_kelahiran}
                        message={
                          errors?.kelahiran?.tanggal_akta_kelahiran?.message
                        }
                        placeholder="Masukan tanggal"
                      />
                    </Col>
                  </Row>

                  <FormInputControl
                    labelName="Nomor Akta Kelahiran"
                    required={false}
                    register={register("kelahiran.nomor_akta_kelahiran")}
                    isInvalid={!!errors?.kelahiran?.nomor_akta_kelahiran}
                    message={errors?.kelahiran?.nomor_akta_kelahiran?.message}
                    placeholder="Masukan no akta"
                  />

                  <FormGroupTitle>Informasi Orang Tua</FormGroupTitle>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        labelName="NIK Ibu Kandung"
                        required={false}
                        register={register("kelahiran.nik_ibu_kandung")}
                        isInvalid={!!errors?.kelahiran?.nik_ibu_kandung}
                        message={errors?.kelahiran?.nik_ibu_kandung?.message}
                        placeholder="Masukan NIK"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Nama Ibu Kandung"
                        required={true}
                        register={register("kelahiran.nama_ibu_kandung")}
                        isInvalid={!!errors?.kelahiran?.nama_ibu_kandung}
                        message={errors?.kelahiran?.nama_ibu_kandung?.message}
                        placeholder="Masukan nama ibu kandung"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        labelName="NIK Ayah Kandung"
                        required={false}
                        register={register("kelahiran.nik_ayah_kandung")}
                        isInvalid={!!errors?.kelahiran?.nik_ayah_kandung}
                        message={errors?.kelahiran?.nik_ayah_kandung?.message}
                        placeholder="Masukan NIK ayah kandung"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Nama Ayah Kandung"
                        required={false}
                        register={register("kelahiran.nama_ayah_kandung")}
                        isInvalid={!!errors?.kelahiran?.nama_ayah_kandung}
                        message={errors?.kelahiran?.nama_ayah_kandung?.message}
                        placeholder="Masukan nama ayah"
                      />
                    </Col>
                  </Row>
                </Tab.Pane>

                {/* FORM KEMATIAN  */}
                <Tab.Pane eventKey="formKematian">
                  <FormGroupTitle>Informasi Lokasi</FormGroupTitle>

                  <FormInputControl
                    as={"textarea"}
                    rows={2}
                    labelName="Tempat Kematian"
                    required={
                      watch("umum.jenis_perubahan")?.match(/meninggal/gi)
                        ? true
                        : false
                    }
                    register={register("kematian.tempat_kematian")}
                    isInvalid={!!errors?.kematian?.tempat_kematian}
                    message={errors?.kematian?.tempat_kematian?.message}
                    placeholder="Masukan tempat"
                  />

                  <Row>
                    <Col sm>
                      <InputLocation.Provinsi
                        control={control}
                        errors={errors}
                        fieldName={"kematian.provinsi"}
                      />
                    </Col>
                    <Col sm>
                      <InputLocation.KabupatenKota
                        control={control}
                        errors={errors}
                        fieldName={"kematian.kabupaten_kota"}
                        watcherParent={watch("kematian.provinsi")}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <InputLocation.Kecamatan
                        control={control}
                        errors={errors}
                        fieldName={"kematian.kecamatan"}
                        watcherParent={watch("kematian.kabupaten_kota")}
                      />
                    </Col>
                    <Col sm>
                      <InputLocation.DesaKelurahan
                        control={control}
                        errors={errors}
                        fieldName={"kematian.desa_kelurahan"}
                        watcherParent={watch("kematian.kecamatan")}
                      />
                    </Col>
                  </Row>

                  <div className="mb-4"></div>

                  <FormGroupTitle>Informasi Detail</FormGroupTitle>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <SelectAsyncDynamic
                          labelName="Sebab Kematian"
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`kematian.sebab_kematian`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "sebab_kematian",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group>
                        <Form.Label>Umur Saat Meninggal</Form.Label>
                        <InputGroup>
                          <FormInputControl
                            formGroup={false}
                            required={false}
                            register={register("kematian.umur_saat_meninggal")}
                            isInvalid={!!errors?.kematian?.umur_saat_meninggal}
                            message={
                              errors?.kematian?.umur_saat_meninggal?.message
                            }
                            placeholder="Masukan Umur"
                          />
                          <InputGroup.Text>Tahun</InputGroup.Text>
                        </InputGroup>
                        <Form.Control.Feedback
                          type="invalid"
                          className="d-block">
                          {errors?.kematian?.umur_saat_meninggal?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="date"
                        labelName="Tanggal Kematian"
                        required={
                          watch("umum.jenis_perubahan")?.match(/meninggal/gi)
                            ? true
                            : false
                        }
                        register={register("kematian.tanggal_kematian")}
                        isInvalid={!!errors?.kematian?.tanggal_kematian}
                        message={errors?.kematian?.tanggal_kematian?.message}
                        placeholder="Tanggal"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Yang mengabarkan kematian"
                        required={false}
                        register={register(
                          "kematian.yang_mengabarkan_kematian"
                        )}
                        isInvalid={
                          !!errors?.kematian?.yang_mengabarkan_kematian
                        }
                        message={
                          errors?.kematian?.yang_mengabarkan_kematian?.message
                        }
                        placeholder="Masukkan yang mengabarkan kematian"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="time"
                        labelName="Jam Kematian"
                        required={false}
                        register={register("kematian.jam_kematian")}
                        isInvalid={!!errors?.kematian?.jam_kematian}
                        message={errors?.kematian?.jam_kematian?.message}
                        placeholder="Jam"
                      />
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <SelectAsyncDynamic
                          labelName="Zona Waktu"
                          required={false}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`kematian.zona_waktu`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "zona_waktu",
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
                      <Form.Group className="mb-4">
                        <SelectAsyncDynamic
                          labelName="Akta Kematian"
                          required={false}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`kematian.akta_kematian`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "akta_kelahiran",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Nomor Akta Kematian"
                        required={false}
                        register={register("kematian.nomor_akta_kematian")}
                        isInvalid={!!errors?.kematian?.nomor_akta_kematian}
                        message={errors?.kematian?.nomor_akta_kematian?.message}
                        placeholder="Nomor"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="date"
                        labelName="Tanggal Akta Kematian"
                        required={false}
                        register={register("kematian.tanggal_akta_kematian")}
                        isInvalid={!!errors?.kematian?.tanggal_akta_kematian}
                        message={
                          errors?.kematian?.tanggal_akta_kematian?.message
                        }
                        placeholder="Tanggal"
                      />
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="nikahCerai">
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Status Perkawinan <RequiredInfo />
                        </Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`nikah_cerai.status_perkawinan`}
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
                    <Col sm>
                      <Form.Group className="mb-3">
                        <SelectAsyncDynamic
                          labelName="Akta Perkawinan"
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`nikah_cerai.akta_perkawinan`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "akta_kelahiran",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Nomor Akta Perkawinan"
                        required={false}
                        register={register("nikah_cerai.nomor_akta_perkawinan")}
                        isInvalid={!!errors?.nikah_cerai?.nomor_akta_perkawinan}
                        message={
                          errors?.nikah_cerai?.nomor_akta_perkawinan?.message
                        }
                        placeholder="Masukkan nomor akta"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="date"
                        labelName="Tanggal Perkawinan"
                        required={false}
                        register={register("nikah_cerai.tanggal_perkawinan")}
                        isInvalid={!!errors?.nikah_cerai?.tanggal_perkawinan}
                        message={
                          errors?.nikah_cerai?.tanggal_perkawinan?.message
                        }
                        placeholder="Pilih tanggal"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Lokasi Perkawinan"
                        required={false}
                        register={register("nikah_cerai.lokasi_perkawinan")}
                        isInvalid={!!errors?.nikah_cerai?.lokasi_perkawinan}
                        message={
                          errors?.nikah_cerai?.lokasi_perkawinan?.message
                        }
                        placeholder="Masukan lokasi perkawinan"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group>
                        <SelectAsyncDynamic
                          labelName="Akta Perceraian"
                          required={false}
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`nikah_cerai.akta_perceraian`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "akta_kelahiran",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Nomor Akta Perceraian"
                        required={false}
                        register={register("nikah_cerai.nomor_akta_perceraian")}
                        isInvalid={!!errors?.nikah_cerai?.nomor_akta_perceraian}
                        message={
                          errors?.nikah_cerai?.nomor_akta_perceraian?.message
                        }
                        placeholder="Masukan nomor akta"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <FormInputControl
                        type="date"
                        labelName="Tanggal Perceraian"
                        required={false}
                        register={register("nikah_cerai.tanggal_perceraian")}
                        isInvalid={!!errors?.nikah_cerai?.tanggal_perceraian}
                        message={
                          errors?.nikah_cerai?.tanggal_perceraian?.message
                        }
                        placeholder="Pilih tanggal"
                      />
                    </Col>
                    <Col sm>
                      <FormInputControl
                        labelName="Lokasi Perceraian"
                        required={false}
                        register={register("nikah_cerai.lokasi_perceraian")}
                        isInvalid={!!errors?.nikah_cerai?.lokasi_perceraian}
                        message={
                          errors?.nikah_cerai?.lokasi_perceraian?.message
                        }
                        placeholder="Masukan lokasi perceraian"
                      />
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="formLainnya">
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <Form.Label> Kelainan</Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`lain_lain.kelainan`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "kelainan",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <Form.Label> Jenis Penyandang Cacat</Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`lain_lain.jenis_penyandang_cacat`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "jenis_penyandang_cacat",
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
                      <Form.Group className="mb-3">
                        <Form.Label> Cacat Fisik</Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`lain_lain.cacat_fisik`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "cacat_fisik",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3">
                        <Form.Label> Cacat Mental</Form.Label>
                        <SelectAsyncDynamic
                          isClearable={false}
                          errors={errors}
                          control={control}
                          labelField={"name"}
                          valueField={"name"}
                          fieldName={`lain_lain.cacat_mental`}
                          pathServiceName={`${API_PATH().master}/get-all`}
                          queryParams={{
                            filter: [
                              {
                                value: "cacat_mental",
                                field: "category",
                              },
                            ],
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group>
                    <Form.Label> Pendapatan Perbulan</Form.Label>
                    {/* <FormInputMask
                      prefix={"Rp "}
                      register={register("lain_lain.pendapatan_per_bulan")}
                      errors={errors}
                      control={control}
                      field={"lain_lain.pendapatan_per_bulan"}
                      placeholder={"Masukan nominal"}
                      decimalScale={0}
                      required={true}
                    /> */}
                  </Form.Group>
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>

            <Modal.Footer>
              <DFlex className="col-50">
                <ButtonCancel onClick={onCancel} />
                <Button
                  type="submit"
                  variant="primary btn-submit"
                  isLoading={loading}>
                  {dataSelected?._id ? "Simpan Perubahan" : "Simpan"}
                </Button>
              </DFlex>
            </Modal.Footer>
          </Form>
        </FormData>
      </Tab.Container>
    </>
  )
}

export default BkIndukPendudukForm
