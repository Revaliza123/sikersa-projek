import FormInputControl from "@app/components/Input/FormInputControl"
import React, { useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { IUploadLampiranFileExtend } from "./upload-lampiran.type"
import InputFileUploadBox from "@app/modules/Form/InputFileUploadBox"

interface ILampiranExtendFormProps {
  selected?: any | null
  onSubmit: (v: any) => void
}

export function LampiranExtendForm({
  onSubmit,
  selected = null,
}: ILampiranExtendFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    resetField,
  } = useForm<IUploadLampiranFileExtend>()

  const handleSubmitForm = (data: any) => {
    if (onSubmit && typeof onSubmit === "function") {
      onSubmit(data)
    }
    resetField("nama_file")
    resetField("path_file")
  }

  useEffect(() => {
    if (selected !== null) {
      setValue("nama_file", selected?.nama_file)
      setValue("path_file", selected?.path_file)
    }
  }, [selected])

  return (
    <div className="my-4">
      <h5 className="fs-5 fw-bold">Unggah Lampiran</h5>
      <hr className="mt-2" />

      <FormInputControl
        type="text"
        labelName="Nama file"
        required={false}
        register={register(`nama_file`)}
        isInvalid={!!errors?.nama_file?.message}
        message={errors?.nama_file?.message}
        placeholder="Masukkan nama file"
      />

      <Form.Group className="position-relative mb-3">
        <Form.Label>File</Form.Label>
        <InputFileUploadBox
          setValue={setValue}
          field={`path_file`}
          isInvalid={!!errors?.path_file}
          message={errors?.path_file?.message}
          link={watch(`path_file`)}
        />
      </Form.Group>

      <Button
        onClick={handleSubmit(handleSubmitForm)}
        type="button"
        variant="outline-primary"
        className="w-100">
        Tambah
      </Button>
    </div>
  )
}
