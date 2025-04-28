import React, { useEffect, useState } from "react"
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap"
import SelectAsyncDynamic from "../../../../components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilterWithSkipDotNotation } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import MultiRangeSlider from "@app/components/RangeSlider/MultiRangeSlider"
import styled from "styled-components"
import { DFlex } from "@app/styled/flex.styled"
import CrossIcon from "@app/components/Icons/CrossIcon"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkIndukPendudukFilter() {
  const dispatch = useDispatch()

  const [minAge, setMinAge] = useState<any>(0)
  const [maxAge, setMaxAge] = useState<any>(120)
  const [rangeAge, setRangeAge] = useState<any>(null)
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  })

  const { activeFilters } = useSelector((state: any) => state.ui)

  const onSubmitForm = (data: any) => {
    const range = rangeAge ? rangeAge : null
    const params: any = generateFilterWithSkipDotNotation(data)
    dispatch(
      setActiveFilters({
        filters: {
          filter: params,
          ...range,
        },
      })
    )
  }

  const setAgeFilter = () => {
    setRangeAge({
      range: {
        end: maxAge,
        field: "umur",
        start: minAge,
      },
    })
  }

  const resetAgeFilter = () => {
    setRangeAge(null)
    setMinAge(0)
    setMaxAge(120)
  }

  const handleReset = () => {
    reset()
    resetAgeFilter()
    dispatch(setActiveFilters(null))
  }

  useEffect(() => {
    if (activeFilters) {
      const filters = activeFilters?.filters?.filter || []
      filters.forEach((f: any) => setValue(f.field, f.value))
    }
  }, [activeFilters])

  return (
    <Form
      className="d-flex flex-wrap gap-2 mb-3"
      noValidate
      onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <Row>
          <Col>
            <h6 className="fw-bolder text-uppercase">Data Diri</h6>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Group>
              <Form.Label>Nomor KK</Form.Label>
              <FormInputControl
                className="mb-0"
                register={register("nomor_kk")}
                isInvalid={!!errors?.nomor_kk}
                message={errors?.nomor_kk?.message}
                placeholder="Nomor KK"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Group>
              <Form.Label>NIK</Form.Label>
              <FormInputControl
                className="mb-0"
                register={register("nik")}
                isInvalid={!!errors?.nik}
                message={errors?.nik?.message}
                placeholder="NIK"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Agama</Form.Label>
              <SelectAsyncDynamic
                isClearable={true}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                placeholder="Agama"
                fieldName={`agama`}
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
          <Col md={4}>
            <Form.Group>
              <Form.Label>Golongan Darah</Form.Label>
              <SelectAsyncDynamic
                isClearable={true}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                placeholder="Golongan Darah"
                fieldName={`golongan_darah`}
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
          <Col md={4}>
            <Form.Group>
              <Form.Label>Jenis Kelamin</Form.Label>
              <SelectAsyncDynamic
                isClearable={true}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                placeholder="Jenis Kelamin"
                fieldName={`umum.jenis_kelamin`}
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

        <Row className="mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Umur</Form.Label>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  className="h-100 d-flex align-items-center justify-content-between"
                  id="dropdown-basic">
                  {rangeAge
                    ? `${minAge} Tahun - ${maxAge} Tahun`
                    : "Kategori Umur"}
                </Dropdown.Toggle>
                <CustomMenu>
                  <DFlex className="align-items-center mb-2 justify-content-between">
                    <p className="m-0">
                      {minAge} Tahun - {maxAge} Tahun
                    </p>
                    <Button variant="" className="p-0" onClick={resetAgeFilter}>
                      <CrossIcon />
                    </Button>
                  </DFlex>
                  <MultiRangeSlider
                    min={0}
                    max={120}
                    setMinValue={setMinAge}
                    setMaxValue={setMaxAge}
                    minValue={minAge}
                    maxValue={maxAge}
                    onChange={setAgeFilter}
                  />
                  <DFlex className="gap-2 mt-3"></DFlex>
                </CustomMenu>
              </Dropdown>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Tanggal Lahir</Form.Label>
              <FormInputControl
                className="mb-0"
                register={register("tanggal_lahir")}
                isInvalid={!!errors?.tanggal_lahir}
                message={errors?.tanggal_lahir?.message}
                placeholder="Tanggal lahir"
                type="date"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Kota Lahir</Form.Label>
              <FormInputControl
                className="mb-0"
                register={register("tempat_lahir")}
                isInvalid={!!errors?.tempat_lahir}
                message={errors?.tempat_lahir?.message}
                placeholder="Tempat lahir"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h6 className="fw-bolder text-uppercase mb-0">Alamat</h6>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col md={4}>
            <Form.Group>
              <Form.Label>RT</Form.Label>
              <FormInputControl
                className="mb-0"
                register={register("rt")}
                isInvalid={!!errors?.rt}
                message={errors?.rt?.message}
                placeholder="RT"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>RW</Form.Label>
              <FormInputControl
                className="mb-0"
                register={register("rw")}
                isInvalid={!!errors?.rw}
                message={errors?.rw?.message}
                placeholder="RW"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Dusun</Form.Label>
              <FormInputControl
                className="mb-0"
                register={register("dusun")}
                isInvalid={!!errors?.dusun}
                message={errors?.dusun?.message}
                placeholder="Dusun"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h6 className="fw-bolder text-uppercase mb-0">Lainnya</h6>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Pendidikan Terakhir</Form.Label>
              <SelectAsyncDynamic
                isClearable={true}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                placeholder="Pendidikan"
                fieldName={`pendidikan_terakhir`}
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
          <Col md={6}>
            <Form.Group>
              <Form.Label>Pekerjaan</Form.Label>
              <SelectAsyncDynamic
                isClearable={true}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                placeholder="Pendidikan"
                fieldName={`pekerjaan`}
                pathServiceName={`${API_PATH().master}/get-all`}
                queryParams={{
                  filter: [
                    {
                      value: "pekerjaan",
                      field: "category",
                    },
                  ],
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Group>
              <Form.Label>Status Perkawinan</Form.Label>
              <SelectAsyncDynamic
                isClearable={true}
                errors={errors}
                control={control}
                labelField={"name"}
                valueField={"name"}
                placeholder="Status Perkawinan"
                fieldName={`status_perkawinan`}
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

        <Row className="mt-3 justify-content-end text-right">
          <Col>
            <Button
              onClick={handleReset}
              type="button"
              variant="danger"
              className="me-1 text-white">
              <CiCloseBig /> Reset filter
            </Button>
            <Button type="submit" variant="primary">
              Cari
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  )
}

const CustomMenu = styled(Dropdown.Menu)`
  // height:9rem;
  height: 5.3rem;
  width: 14rem;
  padding: 1rem 1rem 0.8rem 1rem;
`
