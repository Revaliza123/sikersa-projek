import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import FormInputControl from "./FormInputControl"

export default function FormInputGroup({
  label,
  field,
  register,
  type = "text",
  suffix,
  prefix,
  required = false,
  placeholder = null,
  className = "mb-3",
  additionalOptions = {},
}: IFormInputGroup) {
  return (
    <Form.Group className={className}>
      {label ? <Form.Label>{label}</Form.Label> : null}
      <InputGroup>
        {prefix && <InputGroup.Text>{prefix}</InputGroup.Text>}
        <FormInputControl
          className="mb-0"
          type={type}
          formGroup={false}
          required={required}
          register={register}
          isInvalid={!!field}
          message={field?.message}
          placeholder={placeholder}
          additionalOptions={additionalOptions}
        />
        {suffix && <InputGroup.Text>{suffix}</InputGroup.Text>}
      </InputGroup>
      <Form.Control.Feedback type="invalid" className="d-block">
        {field?.message}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

interface IFormInputGroup {
  register: any
  field: any
  type?: any
  label: string
  prefix?: string
  suffix?: string
  placeholder?: string | any
  required?: boolean
  className?: string
  additionalOptions?: any
}
