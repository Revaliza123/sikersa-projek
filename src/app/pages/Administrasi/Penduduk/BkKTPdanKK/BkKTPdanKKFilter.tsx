import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkKTPdanKKFilter() {
  const dispatch = useDispatch()
  const {
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
      <FormInputControl
        className="mb-0"
        register={register(`kepala.umum.rw`)}
        isInvalid={!!errors?.rw}
        message={errors?.rw?.message}
        placeholder="RW"
      />
      <FormInputControl
        className="mb-0"
        register={register(`kepala.umum.rt`)}
        isInvalid={!!errors?.rt}
        message={errors?.rt?.message}
        placeholder="RT"
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
