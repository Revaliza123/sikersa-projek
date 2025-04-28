import { postByController } from "@app/services/main.service"
import { setLoading } from "@app/store/reducers/ui"
import { isEmpty } from "lodash"
import React, { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { useWatch } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import RequiredInfo from "../Tooltip/RequiredInfo"
import FormInputControl from "./FormInputControl"
import { API_PATH } from "@app/services/_path.service"
import { getCancelToken } from "@app/services/api.service"

export function FormInputKK({
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
  onCheckKK,
  className = "",
}: any) {
  const dispatch = useDispatch()
  const watcher = useWatch({
    control,
    name: fieldName,
    exact: true,
  })
  const { workspace } = useSelector((state: any) => state.app)
  const [nomorKKNotFound, setNomorKKNotFound] = useState(false)
  const checkNomorKK = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    dispatch(setLoading(true))
    try {
      const resp = await postByController(
        API_PATH().form.administrasi.bukuKartuTandaPendudukKK + "/get-all-ktp",
        {
          search: watcher,
          orderBy: "kepala.umum.nama_lengkap",
          order: "ASC",
          page: 1,
          size: 1,
          workspaceId: workspace?._id,
          filter: [
            {
              value: workspace?._id,
              field: "workspaceId",
            },
          ],
          searchBy: ["kepala.kelahiran.nomor_kk"],
        },
        getCancelToken()
      )
      const data = !isEmpty(resp.data) ? resp.data : null

      onCheckKK(data)

      if (!data) {
        setNomorKKNotFound(true)
        setError(fieldName, {
          type: "custom",
          message: "Nomor KK tidak terdaftar",
        })
      } else {
        clearErrors(fieldName)
      }
      dispatch(setLoading(false))
    } catch (err) {
      console.error("Error input kk", err)
      setNomorKKNotFound(true)
      dispatch(setLoading(false))
    }
  }

  const handleKeyupNomorKK = () => {
    if (nomorKKNotFound) {
      clearErrors(fieldName)
      setNomorKKNotFound(false)
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
            onKeyUp={handleKeyupNomorKK}
          />
          <Button
            variant={isInvalid ? "outline-danger" : "outline-primary"}
            onClick={checkNomorKK}>
            Cek Nomor KK
          </Button>
        </InputGroup>
        <Form.Control.Feedback type="invalid" className="d-block">
          {message}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  )
}
