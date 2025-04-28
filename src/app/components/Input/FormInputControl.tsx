import React from "react"
import { Form } from "react-bootstrap"
import { UseFormRegisterReturn } from "react-hook-form"
import styled from "styled-components"
import RequiredInfo from "../Tooltip/RequiredInfo"

const WarpInput = styled.div``

const FormInputControl: React.FC<{
  labelName?: string
  required?: boolean
  placeholder?: string
  formGroupAs?: any
  formGroup?: boolean
  errorDiv?: boolean
  as?: "textarea" | any
  rows?: any
  isInvalid: boolean | undefined
  message: any
  maxlength?: number
  max?: any
  register?: UseFormRegisterReturn
  type?:
    | "text"
    | "password"
    | "number"
    | "color"
    | "email"
    | "tel"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
  className?: string
  classNameLabel?: string
  classNameControl?: string
  autoFocus?: boolean
  additionalOptions?: any
  helperText?: string
  onKeyUp?: any
}> = ({
  labelName,
  required = false,
  placeholder,
  isInvalid,
  message,
  maxlength,
  max,
  register = {},
  type = "text",
  formGroup = true,
  errorDiv = true,
  formGroupAs = undefined,
  as = undefined,
  rows = undefined,
  className = "mb-3",
  classNameLabel = "",
  classNameControl = "",
  autoFocus = false,
  additionalOptions = {},
  helperText = "",
  onKeyUp,
}) => {
  const handleOnKeyUp = (e: any) => {
    if (onKeyUp) {
      onKeyUp(e)
    }
  }

  if (formGroup)
    return (
      <Form.Group as={formGroupAs} className={className}>
        {labelName && (
          <Form.Label className={classNameLabel}>
            {labelName}
            {required && <RequiredInfo />}
          </Form.Label>
        )}
        {helperText ? <Form.Text muted>{helperText}</Form.Text> : null}
        <WarpInput className={classNameControl}>
          <Form.Control
            type={type ?? "text"}
            {...register}
            as={as}
            rows={rows}
            isInvalid={isInvalid}
            maxLength={maxlength}
            placeholder={placeholder ?? ""}
            autoFocus={autoFocus}
            onKeyUp={handleOnKeyUp}
            max={max}
            {...additionalOptions}
          />
          {errorDiv && (
            <Form.Control.Feedback type="invalid">
              {message?.includes("||") ? (
                <ul className="ps-2">
                  {message.split("||").map((msg: string, id: number) => (
                    <li key={id}>{msg}</li>
                  ))}
                </ul>
              ) : (
                message
              )}
            </Form.Control.Feedback>
          )}
        </WarpInput>
      </Form.Group>
    )
  else
    return (
      <>
        <Form.Control
          type={type ?? "text"}
          {...register}
          as={as}
          rows={rows}
          isInvalid={isInvalid}
          placeholder={placeholder ?? ""}
          className={className}
          onKeyUp={handleOnKeyUp}
          {...additionalOptions}
        />
        {errorDiv && formGroup && (
          <Form.Control.Feedback type="invalid">
            {message?.includes("||") ? (
              <ul className="ps-2">
                {message.split("||").map((msg: string, id: number) => (
                  <li key={id}>{msg}</li>
                ))}
              </ul>
            ) : (
              message
            )}
          </Form.Control.Feedback>
        )}
      </>
    )
}

export default FormInputControl
