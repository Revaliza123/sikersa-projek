import { cdnUploadDirectory, cdnUrl } from "@app/helper/cdn.helper"
import { notificationTemplate } from "@app/helper/notificationTemplate"
import requestApi from "@app/services/api.service"
import { addNotification } from "@app/store/notification/notification.action"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Form, Spinner } from "react-bootstrap"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { FormLabelImageUpload } from "@app/styled/upload.styled"
import UploadIcon from "@app/components/Icons/UploadIcon"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import { LazyImage } from "@app/components"

/*  @params thumbSize ukuran optional example 40 
    @params fileUploadParams stirng param upload name  example file
    @params root stirng nama project
    @params folder string folder file 
    @params path string path upload
    @params accept file optional default all file | accept=".csv, application/vnd.openxmsformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    @params link file optional default string empty for show button preview
    @params onUpload return upload

 */
const InputImageUpload = ({
  label = "Upload Image",
  thumbSize,
  uploadParam = "file",
  onUpload,
  isInvalid,
  message,
  folder,
  url = "cdn-upload",
  path = "upload-image",
  params = [],

  setValue,
  field,
  imgPlaceholder = "/static/img/dummyImageLogo.png",

  link = "",
  width = "7rem",
  height = "7rem",
  helperText = "",
  required = false,
  className = "justify-content-start",
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
        path = `upload-image`
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
      // console.log('selectedFile', selectedFile);
      // console.log('formData', formData);

      // Request made to the backend api
      // Send formData object
      const req: any = await requestApi().request({
        url: `${url}/${path}`,
        method: "POST",
        data: formData,
        cancelToken: source.token, // <-- IMPORTANT!
      })

      const pathFileUploaded: any = req?.data
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
      <Form.Group>
        <Form.Label>
          {label} {required ? <RequiredInfo /> : null}
        </Form.Label>
        {helperText ? <Form.Text>{helperText}</Form.Text> : null}
        <br />
        <ImageUpload className={className}>
          <div className="position-relative">
            <ImageUploadInput
              type="file"
              isInvalid={isInvalid}
              onChange={selectFile}
              {...otherProps}
            />
            <FormLabelImageUpload>
              <ImagePreview
                defaultImage={imgPlaceholder}
                src={link ? cdnUrl(link) : imgPlaceholder}
                alt=""
                className="upload-preview"
                style={{ width: width, height: height }}
              />
            </FormLabelImageUpload>
            <ButtonUpload
              onClick={handleUpload}
              className={`input-group-text d-block cursor-pointer ${showUpload ? "" : "d-none"}`}
              disabled={loading}>
              {loading ? (
                <Spinner
                  className={`ms-1 ${loading ? "" : "d-none"}`}
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <UploadIcon />
              )}
            </ButtonUpload>
          </div>
          <div
            className={` ${showPreview || showUpload ? "" : "d-none"}`}></div>
        </ImageUpload>
      </Form.Group>
      {message && (
        <Form.Control.Feedback type="invalid" className="d-block">
          {message}
        </Form.Control.Feedback>
      )}
    </>
  )
}

const ImageUpload = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-flow: row wrap;
  justify-content: center;
`
const ImagePreview = styled(LazyImage)`
  width: 10rem;
  height: 10rem;
  object-fit: scale-down;
  padding: 0.5rem;
`
const ButtonUpload = styled.button`
  position: absolute;
  background-color: rgba(var(--black-5-rgb), 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  &:hover {
    background-color: rgba(var(--black-5-rgb), 1);
  }
`
const ImageUploadInput = styled(Form.Control)`
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0;
  width: 100%;
  height: 100%;
`

interface IUploadFile {
  label?: string
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
  imgPlaceholder?: any
  width?: any
  height?: any

  setValue?: any
  field?: string
  helperText?: string
  required?: boolean

  className?: string

  kecamatan?: string
  kelurahan?: string
}

export default InputImageUpload
