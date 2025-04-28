import React from "react"
import { Button, Form } from "react-bootstrap"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkLetterCTanahFilter() {
  const dispatch = useDispatch()
  const {
    control,
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
        placeholder="Status Hak Tanah"
        fieldName={`tanah.status_hak_tanah`}
        pathServiceName={`${API_PATH().master}/get-all`}
        queryParams={{
          filter: [
            {
              value: "status_hak_tanah",
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
        placeholder="Penggunaan Tanah"
        fieldName={`tanah.penggunaan_tanah`}
        pathServiceName={`${API_PATH().master}/get-all`}
        queryParams={{
          filter: [
            {
              value: "penggunaan_tanah",
              field: "category",
            },
          ],
        }}
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
