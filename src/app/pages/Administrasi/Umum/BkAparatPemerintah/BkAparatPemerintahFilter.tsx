import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setActiveFilters } from "@app/store/reducers/ui"
import { generateFilter } from "@app/helper/filter.helper"
import FormInputControl from "@app/components/Input/FormInputControl"
import CiCloseBig from "@app/components/Icons/CiCloseBig"

export default function BkAparatPemerintahFilter() {
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
      className="d-flex flex-wrap align-items-end gap-2 mb-3"
      noValidate
      onSubmit={handleSubmit(onSubmitForm)}>
      <FormInputControl
        className="mb-0"
        labelName="Tanggal Keputusan Pengangkatan"
        type="date"
        register={register("tanggal_keputusan_pengangkatan")}
        isInvalid={!!errors?.tanggal_keputusan_pengangkatan}
        message={errors?.tanggal_keputusan_pengangkatan?.message}
        placeholder="Masukkan tanggal keputusan pengangkatan"
      />
      <FormInputControl
        className="mb-0"
        labelName="Posisi"
        register={register("posisi")}
        isInvalid={!!errors?.posisi}
        message={errors?.posisi?.message}
        placeholder="Masukkan posisi"
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
