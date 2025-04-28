import { ReactSelectStyle } from "@app/config/react-select.config"
import { get } from "lodash"
import React from "react"
import { Form } from "react-bootstrap"
import { Controller } from "react-hook-form"
import Select from "react-select"

export default function SelectStatic({
  control,
  errors,
  fieldName,
  placeholder = "Pilih...",
  options,
  defaultValue = "",
  className = "",
  required = false,
  isClearable = false,
  isMulti = false,
  additionalOptions = {},
  labelName
}: ISelectStatic) {
  return (
    <>
      <Form.Group>
        <Form.Label>
          {labelName}
          {required && <span className="text-danger">*</span>}
        </Form.Label>

        <Controller
          control={control}
          defaultValue={defaultValue}
          name={fieldName}
          rules={{
            required: required,
          }}
          render={({ field: { onChange, value, ref } }) =>
            isMulti ? (
              <Select
                className={className}
                placeholder={placeholder}
                styles={ReactSelectStyle}
                classNamePrefix={`${get(errors, fieldName) ? "is-invalid" : ""}`}
                ref={ref}
                value={
                  value
                    ? options.filter((c: any) =>
                      (value as any[]).includes(c.value)
                    )
                    : []
                }
                onChange={(val: any) => onChange(val?.map((x: any) => x.value))}
                options={options}
                isClearable={isClearable}
                isMulti={isMulti}
                {...additionalOptions}
              />
            ) : (
              <Select
                className={className}
                placeholder={placeholder}
                styles={ReactSelectStyle}
                classNamePrefix={`${get(errors, fieldName) ? "is-invalid" : ""}`}
                ref={ref}
                value={options.filter((c: any) => c.value == value)}
                onChange={(val: any) => onChange(val?.value)}
                options={options}
                isClearable={isClearable}
                {...additionalOptions}
              />
            )
          }
        />
      </Form.Group>
      {get(errors, fieldName) && (
        <div className="invalid-feedback d-block">
          {get(errors, fieldName)?.message}
        </div>
      )}
    </>
  )
}

type OptionSelect = {
  label: string
  value: string | number | any
}
interface ISelectStatic {
  control: any
  errors: any
  fieldName: string
  placeholder?: string
  options: OptionSelect[]
  defaultValue?: any
  className?: string
  required?: boolean
  isClearable?: boolean
  isMulti?: boolean
  additionalOptions?: any
  labelName?: string
}
