import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkEkspedisiFilter() {
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
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
      <FormInputControl
        className="mb-0"
        type="date"
        required={false}
        register={register("tanggal_pengiriman")}
        isInvalid={!!errors?.tanggal_pengiriman}
        message={errors?.tanggal_pengiriman?.message}
        placeholder="Tanggal Pengiriman"
        labelName="Tanggal Pengiriman"
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
