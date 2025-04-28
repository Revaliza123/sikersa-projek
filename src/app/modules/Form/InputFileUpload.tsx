import { cdnUploadDirectory, cdnUrl } from "@app/helper/cdn.helper"
import { notificationTemplate } from "@app/helper/notificationTemplate"
import { API_PATH } from "@app/services/_path.service"
import requestApi from "@app/services/api.service"
import { addNotification } from "@app/store/notification/notification.action"
import { DFlex } from "@app/styled/flex.styled"
import axios from "axios"
import { get } from "lodash"
import React, { useEffect, useState } from "react"
import { Form, Spinner } from "react-bootstrap"
import { useDispatch } from "react-redux"

/*  @params thumbSize ukuran optional example 40 
    @params fileUploadParams stirng param upload name  example file
    @params root stirng nama project
    @params folder string folder file 
    @params path string path upload
    @params accept file optional default all file | accept=".csv, application/vnd.openxmsformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    @params link file optional default string empty for show button preview
    @params onUpload return upload

 */

const acceptType = {
  doc: "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*",
  image: "image/*",
  all: "*",
}
const InputFileUpload = ({
  thumbSize,
  uploadParam = "file",
  onUpload,
  isInvalid,
  message,
  folder = "",
  url = "cdn-upload",
  path = "upload-file",
  params = [],

  setValue,
  field,

  link = "",
  accept = "doc",
  kelurahan,
  kecamatan,
  ...otherProps
}: IUploadFile) => {
  const [loading, setLoading] = useState<boolean>(false) //loading
  const [selectedFile, setSelectedFile] = useState<any>()
  const [showUpload, setShowUpload] = useState<boolean>(false)
  const [upload, setUpload] = useState<boolean>(false)
  const [showPreview, setShowPreview] = useState<boolean>(false)

  const source = axios.CancelToken.source()

  const dispatch = useDispatch()
  const dispatchNotification = (msg: string = "", type: string = "") => {
    const notification = notificationTemplate(msg, type)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }
  // On file upload (click the upload button)
  const postFile = async () => {
    setUpload(true)
    setLoading(true)

    try {
      // Create an object of formData
      const formData = new FormData()

      // Update the formData object
      formData.append(`${uploadParam}`, selectedFile)
      const type_file = selectedFile.type

      if (type_file.indexOf("image") >= 0) {
        path = 'upload-image'
      }

      const cdnDir = cdnUploadDirectory({ kelurahan, kecamatan })
      let additionalFolder: any = folder

      if (cdnDir?.root) formData.append("root", cdnDir?.root)
      if (cdnDir?.folder) additionalFolder = cdnDir?.folder
      formData.append("folder", additionalFolder)

      if (thumbSize && type_file.indexOf("image") >= 0) {
        formData.append("thumbSize", thumbSize)
      }
      if (thumbSize && type_file.indexOf("image") >= 0) {
        formData.append("thumbSize", thumbSize)
      }

      if (params?.length > 0) {
        params.map((value: any) => {
          formData.append(`${value.key}`, value.value)
        })
      }

      // Request made to the backend api
      // Send formData object
      const req: any = await requestApi().request({
        url: `${API_PATH().image}/upload-file`,
        method: "POST",
        data: formData,
        cancelToken: source.token, // <-- IMPORTANT!
      })

      const pathFileUploaded: any = req?.path
      setLoading(false)
      dispatchNotification("Upload berhasil", "success")
      setUpload(false)
      setShowUpload(false)
      setShowPreview(true)

      /** SUCCESS UPLOADED */
      if (onUpload) {
        onUpload(pathFileUploaded)
      }

      /** IF HOOK FORM SET VALUE */
      if (setValue && field) {
        setValue(field, pathFileUploaded)
      }
    } catch (err: any) {
      setShowPreview(false)
      setLoading(false)
      setUpload(false)
      dispatchNotification(err?.response?.data?.message, "danger")
    }
  }

  /* selected file */
  const selectFile = (event: any) => {
    setSelectedFile(event.target.files[0])
    setShowUpload(true)
  }

  /* selected file */
  const handleUpload = () => {
    if (!upload) {
      postFile()
    }
  }

  /* selected file */
  const previewAttachment = (path: any) => {
    if (!!path) {
      window.open(cdnUrl(path), "_blank")
    }
  }

  useEffect(() => {
    if (link != "" && link != null && link != undefined) {
      setShowPreview(true)
    } else {
      setShowPreview(false)
    }
    return () => {
      source.cancel("Canceled")
    }
  }, [link])

  return (
    <>
      <DFlex>
        <Form.Control
          type="file"
          isInvalid={isInvalid}
          onChange={selectFile}
          accept={get(acceptType, accept)}
          {...otherProps}
        />
        <div className={`ms-2 ${showPreview || showUpload ? "" : "d-none"}`}>
          <span
            onClick={handleUpload}
            className={`input-group-text cursor-pointer ${
              showUpload ? "" : "d-none"
            }`}>
            <Spinner
              className={`ms-1 ${loading ? "" : "d-none"}`}
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Upload {showUpload}
          </span>
          {!showUpload && (
            <span
              className={`input-group-text cursor-pointer ${
                showPreview ? "" : "d-none"
              }`}
              onClick={() => previewAttachment(link)}>
              Lihat
            </span>
          )}
        </div>
      </DFlex>
      {message && (
        <Form.Control.Feedback type="invalid" className="d-block">
          {message}
        </Form.Control.Feedback>
      )}
    </>
  )
}

interface IUploadFile {
  root?: string
  thumbSize?: string
  uploadParam?: string
  onUpload?: any
  isInvalid?: any
  message?: any
  folder?: string
  path?: "upload-file" | "upload-image"
  link?: string
  url?: string
  params?: any

  setValue?: any
  field?: string
  accept?: "image" | "doc" | "all"

  kecamatan?: string
  kelurahan?: string
}

export default InputFileUpload
