import { get } from "lodash"
import React from "react"
import { Form } from "react-bootstrap"
import { Controller } from "react-hook-form"
import ReactNumberFormat from "react-number-format"

export default function FormInputMask({
  prefix = "",
  suffix = "",
  field,
  decimalScale = 0,
  placeholder = "",
  errors,
  control,
  required = false,
  allowNegative = true,
  className = "mb-3",
  additionalOptions = {},
}: IFormInputMask) {
  return (
    <>
      <Form.Group className={className}>
        <Controller
          render={({ field: { onChange, value } }) => (
            <ReactNumberFormat
              className={`form-control${!!get(errors, field) ? " is-invalid" : ""
                }`}
              thousandsGroupStyle="thousand"
              prefix={prefix}
              suffix={suffix}
              displayType="input"
              type="text"
              thousandSeparator={"."}
              decimalSeparator=","
              allowNegative={allowNegative}
              value={value}
              decimalScale={decimalScale}
              placeholder={placeholder}
              onValueChange={(val: any) => onChange(val?.value)}
              {...additionalOptions}
            />
          )}
          rules={{
            required: required,
          }}
          name={field}
          defaultValue={null}
          control={control}
        />
        {get(errors, field) && (
          <div className="invalid-feedback d-block">
            {get(errors, field)?.message}
          </div>
        )}
      </Form.Group>
    </>
  )
}

interface IFormInputMask {
  prefix?: string
  suffix?: string
  errors: any
  field: any
  control: any
  register: any
  required?: boolean
  placeholder?: string
  decimalScale?: number
  allowNegative?: boolean
  className?: string
  additionalOptions?: any
}
