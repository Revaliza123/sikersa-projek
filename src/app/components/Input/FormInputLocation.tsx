import { API_PATH } from "@app/services/_path.service"
import React, { JSX } from "react"
import { Form } from "react-bootstrap"
import SelectAsyncDynamic from "../Select/SelectAsyncDynamic"
import RequiredInfo from "../Tooltip/RequiredInfo"

type InputLocationType = {
  errors: any
  control: any
  fieldName: string
  className?: string
  required?: boolean
  queryParams?: any
  labelName?: string
}
type InputLocationTypeDependent = InputLocationType & { watcherParent: any }

function Provinsi({
  errors,
  control,
  fieldName,
  className = "mb-3",
  required = false,
  queryParams = {},
  labelName = "",
}: InputLocationType) {
  const defaultQueryParams = { size: 50 }
  const queryParamsObj = { ...defaultQueryParams, ...queryParams }

  return (
    <>
      <Form.Group className={className}>
        <Form.Label>
          {labelName || "Provinsi"} {required && <RequiredInfo />}
        </Form.Label>
        <SelectAsyncDynamic
          isClearable={false}
          errors={errors}
          control={control}
          labelField={"nama_provinsi"}
          valueField={"kode_provinsi"}
          fieldName={fieldName}
          pathServiceName={API_PATH().admLocation.province}
          queryParams={queryParamsObj}
        />
      </Form.Group>
    </>
  )
}

function KabupatenKota({
  errors,
  control,
  watcherParent,
  fieldName,
  className = "mb-3",
  required = false,
  queryParams = {},
  labelName = "",
}: InputLocationTypeDependent) {
  const defaultQueryParams = { size: 50 }
  const queryParamsObj = { ...defaultQueryParams, ...queryParams }

  return (
    <>
      <Form.Group className={className}>
        <Form.Label>
          {labelName || "Kabupaten/Kota"} {required && <RequiredInfo />}
        </Form.Label>
        <SelectAsyncDynamic
          isClearable={false}
          errors={errors}
          control={control}
          labelField={"nama_kabkot"}
          valueField={"kode_kabkot"}
          fieldNameParent={"provinceCode"}
          fieldName={fieldName}
          pathServiceName={API_PATH().admLocation.city}
          watchParent={watcherParent}
          isDisabled={watcherParent == "" || watcherParent == undefined}
          queryParams={queryParamsObj}
        />
      </Form.Group>
    </>
  )
}

function Kecamatan({
  errors,
  control,
  watcherParent,
  fieldName,
  className = "mb-3",
  required = false,
  queryParams = {},
  labelName = "",
}: InputLocationTypeDependent) {
  const defaultQueryParams = { size: 50 }
  const queryParamsObj = { ...defaultQueryParams, ...queryParams }

  return (
    <>
      <Form.Group className={className}>
        <Form.Label>
          {labelName || "Kecamatan"} {required && <RequiredInfo />}
        </Form.Label>
        <SelectAsyncDynamic
          isClearable={false}
          errors={errors}
          control={control}
          labelField={"nama_kecamatan"}
          valueField={"kode_kecamatan"}
          fieldNameParent={"cityCode"}
          fieldName={fieldName}
          pathServiceName={API_PATH().admLocation.district}
          watchParent={watcherParent}
          isDisabled={watcherParent == "" || watcherParent == undefined}
          queryParams={queryParamsObj}
        />
      </Form.Group>
    </>
  )
}

function DesaKelurahan({
  errors,
  control,
  watcherParent,
  fieldName,
  className = "mb-3",
  required = false,
  queryParams = {},
  labelName = "",
}: InputLocationTypeDependent) {
  const defaultQueryParams = { size: 50 }
  const queryParamsObj = { ...defaultQueryParams, ...queryParams }

  return (
    <>
      <Form.Group className={className}>
        <Form.Label>
          {labelName || "Desa/Kelurahan"} {required && <RequiredInfo />}
        </Form.Label>
        <SelectAsyncDynamic
          isClearable={false}
          errors={errors}
          control={control}
          labelField={"nama_desa"}
          valueField={"kode_desa"}
          fieldNameParent={"districtCode"}
          fieldName={fieldName}
          pathServiceName={API_PATH().admLocation.subdistrict}
          watchParent={watcherParent}
          isDisabled={watcherParent == "" || watcherParent == undefined}
          queryParams={queryParamsObj}
        />
      </Form.Group>
    </>
  )
}

interface IInputLocation {
  Provinsi: (props: InputLocationType) => JSX.Element
  KabupatenKota: (props: InputLocationTypeDependent) => JSX.Element
  Kecamatan: (props: InputLocationTypeDependent) => JSX.Element
  DesaKelurahan: (props: InputLocationTypeDependent) => JSX.Element
}

export const InputLocation: IInputLocation = {
  Provinsi,
  KabupatenKota,
  Kecamatan,
  DesaKelurahan,
}
