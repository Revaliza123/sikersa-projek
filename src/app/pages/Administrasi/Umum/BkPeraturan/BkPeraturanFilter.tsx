import React from "react"
import { Button, Form } from "react-bootstrap"
import SelectAsyncDynamic from "../../../../components/Select/SelectAsyncDynamic"
import { API_PATH } from "@app/services/_path.service"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkPeraturanFilter() {
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
      className="d-flex align-items-end gap-2 mb-3"
      noValidate
      onSubmit={handleSubmit(onSubmitForm)}>
      <div className="d-flex flex-column w-25">
        <Form.Label>Jenis Peraturan</Form.Label>
        <SelectAsyncDynamic
          isClearable={true}
          placeholder="Masukkan Jenis Peraturan"
          errors={errors}
          control={control}
          labelField={"name"}
          valueField={"name"}
          fieldName={`jenis_peraturan`}
          pathServiceName={`${API_PATH().master}/get-all`}
          queryParams={{
            filter: [
              {
                value: "jenis_peraturan",
                field: "category",
              },
            ],
          }}
        />
      </div>
      <div>
        <Button type="submit" variant="primary">
          Cari
        </Button>
        <Button
          onClick={handleReset}
          type="button"
          variant="danger"
          className="text-white ms-2">
          <CiCloseBig /> Reset filter
        </Button>
      </div>
    </Form>
  )
}
