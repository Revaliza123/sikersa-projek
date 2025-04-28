import React from "react"
import { Button, Form } from "react-bootstrap"
import SelectAsyncDynamic from "../../../../components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import SelectStatic from "@app/components/Select/SelectStatic"
import { OPTIONS_AGE_GROUP } from "@app/config/options.config"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkPendudukSementaraFilter() {
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  })

  const onSubmitForm = (data: any) => {
    const { umur, ...rest } = data
    const range = JSON.parse(umur || "{}")
    const params: any = generateFilter(rest)
    dispatch(
      setActiveFilters({
        filters: {
          filter: params,
          ...range,
        },
      })
    )
  }

  const handleReset = () => {
    reset()
    dispatch(setActiveFilters(null))
  }

  return (
    <Form
      className="d-flex flex-wrap gap-2 mb-3"
      noValidate
      onSubmit={handleSubmit(onSubmitForm)}>
      <SelectAsyncDynamic
        isClearable={true}
        errors={errors}
        control={control}
        labelField={"name"}
        valueField={"name"}
        placeholder="Jenis Kelamin"
        fieldName={`jenis_kelamin`}
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
      <SelectAsyncDynamic
        isClearable={true}
        errors={errors}
        control={control}
        labelField={"name"}
        valueField={"name"}
        placeholder="Pekerjaan"
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
      <FormInputControl
        className="mb-0"
        type="date"
        required={false}
        register={register("datang_tanggal")}
        isInvalid={!!errors?.datang_tanggal}
        message={errors?.datang_tanggal?.message}
        placeholder="Tanggal Datang"
      />
      <SelectStatic
        options={OPTIONS_AGE_GROUP()}
        isClearable={true}
        fieldName={"umur"}
        control={control}
        errors={errors}
        placeholder="Kategori umur"
      />
      <Button type="submit" variant="primary">
        Cari
      </Button>
      <Button
        onClick={handleReset}
        type="button"
        variant="danger"
        className="text-white">
        <CiCloseBig /> Reset filter
      </Button>
    </Form>
  )
}
