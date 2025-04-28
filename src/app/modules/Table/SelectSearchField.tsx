import { ReactSelectStyleKtpKK } from "@app/config/react-select.config"
import { nanoid } from "nanoid"
import React, { useMemo, useState } from "react"
import { Form } from "react-bootstrap"
import Select from "react-select"

type SearchByFieldProps = {
  defaultValue: any
  options: any[]
  onChange: any
  type?: "native" | "styled"
}

export function SelectSearchField({
  defaultValue,
  options,
  onChange,
  type = "native",
}: SearchByFieldProps) {
  const [selected, setSelected] = useState(defaultValue)
  const handleChange = (event: any) => {
    let value: any
    if (type === "native") {
      value = event.target.value
      setSelected(value)
      onChange(options.find((o: any) => o.value === value))
    } else if (type === "styled") {
      value = event
      setSelected(value)
      onChange(value)
    }
  }
  const value = useMemo(() => selected, [selected])

  if (type === "native") {
    return (
      <Form.Select
        style={{ width: "13rem" }}
        value={value.value}
        onChange={handleChange}>
        {Array.isArray(options) && options.length > 0
          ? options.map((field: any) => (
              <option key={nanoid()} value={field.value}>
                {field.label}
              </option>
            ))
          : null}
      </Form.Select>
    )
  }

  if (type === "styled") {
    return (
      <Select
        styles={ReactSelectStyleKtpKK}
        options={options}
        defaultValue={value}
        onChange={handleChange}
      />
    )
  }

  throw new Error("unknowing SelectSearchField type")
}
