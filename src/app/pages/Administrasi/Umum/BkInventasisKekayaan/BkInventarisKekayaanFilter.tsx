import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkInventarisKekayaanFilter() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
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
      <FormInputControl
        className="mb-0"
        labelName="Tanggal Penghapusan"
        type="date"
        register={register("penghapusan_barang_dan_bangunan.tanggal_dihapus")}
        isInvalid={!!errors?.tanggal_dihapus}
        message={errors?.tanggal_dihapus?.message}
        placeholder="Tanggal Penghapusan"
      />
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
