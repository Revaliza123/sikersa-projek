import { getAllByController } from "@app/services/main.service"
import { setLoading } from "@app/store/reducers/ui"
import axios from "axios"
import { isEmpty } from "lodash"
import React, { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { useWatch } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import RequiredInfo from "../Tooltip/RequiredInfo"
import FormInputControl from "./FormInputControl"

export function FormInputNIK({
  labelName,
  required,
  placeholder,
  fieldName,
  register,
  isInvalid,
  message,
  control,
  setError,
  clearErrors,
  onCheckNik,
  path,
  className = "",
  additionalOptions = {},
}: any) {
  const source = axios.CancelToken.source()
  const dispatch = useDispatch()
  const watcher = useWatch({
    control,
    name: fieldName,
    exact: true,
  })
  const { workspace } = useSelector((state: any) => state.app)
  const [nikNotFound, setNikNotFound] = useState(false)
  const checkNik = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    dispatch(setLoading(true))
    try {
      const nik = watcher
      const endpoint = `${path}?nik=${nik}&workspaceId=${workspace._id}`
      const resp: any = await getAllByController(endpoint, {}, source.token)
      const data = !isEmpty(resp.data) ? resp.data : null

      onCheckNik(data)

      if (!data) {
        setNikNotFound(true)
        setError(fieldName, {
          type: "custom",
          message: "NIK tidak terdaftar",
        })
      } else {
        clearErrors(fieldName)
      }
      dispatch(setLoading(false))
    } catch (err) {
      console.error("Error input nik", err)
      setNikNotFound(true)
      dispatch(setLoading(false))
    }
  }

  const handleKeyupNik = () => {
    if (nikNotFound) {
      clearErrors(fieldName)
      setNikNotFound(false)
    }
  }

  return (
    <>
      <Form.Group className={`mb-3 ${className}`}>
        <Form.Label>
          {labelName} {required && <RequiredInfo />}
        </Form.Label>
        <InputGroup className="has-validation">
          <FormInputControl
            className={``}
            formGroup={false}
            labelName={labelName}
            required={required}
            register={register}
            isInvalid={isInvalid}
            message={message}
            placeholder={placeholder}
            onKeyUp={handleKeyupNik}
            {...additionalOptions}
          />
          <Button
            variant={isInvalid ? "outline-danger" : "outline-primary"}
            onClick={checkNik}>
            CEK NIK
          </Button>
        </InputGroup>
        <Form.Control.Feedback type="invalid" className="d-block">
          {message}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  )
}
