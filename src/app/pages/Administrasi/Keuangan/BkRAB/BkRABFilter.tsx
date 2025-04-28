import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkRABFilter() {
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
        labelName="Tanggal RAB"
        register={register("tanggal_RAB")}
        isInvalid={!!errors?.tanggal_RAB}
        message={errors?.tanggal_RAB?.message}
        placeholder="Masukkan tanggal"
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
