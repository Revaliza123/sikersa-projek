import React from "react"
import { Button, Form } from "react-bootstrap"
import SelectAsyncDynamic from "../../../../components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkKegiatanPembangunanFilter() {
  const dispatch = useDispatch()
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  })

  const onSubmitForm = (data: any) => {
    const params: any = generateFilter(data)
    dispatch(setActiveFilters({ filters: { filter: params } }))
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
        placeholder="Sifat Proyek"
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
      <FormInputControl
        className="mb-0"
        type="date"
        register={register("waktu_pengerjaan")}
        isInvalid={!!errors?.waktu_pengerjaan}
        message={errors?.waktu_pengerjaan?.message}
        placeholder="Masukkan waktu pengerjaan"
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
