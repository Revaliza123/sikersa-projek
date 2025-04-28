import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { Card, Modal } from "react-bootstrap"
import CloudUpload from "../Icons/CloudUpload"
import styled from "styled-components"
import ButtonCancel from "../Button/ButtonCancel"
import { DFlex } from "@app/styled/flex.styled"
import Button from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { notificationTemplate } from "@app/helper/notificationTemplate"
import { addNotification } from "@app/store/notification/notification.action"
import { importFile } from "@app/services/import.service"
import axios from "axios"
import FileExcelIcon from "../Icons/FileExcelIcon"
import ExcelIcon from "../Icons/ExcelIcon"
import { reloadingData } from "@app/store/reducers/app"

const ModalImportFile = styled(Modal)`
  .modal-container {
    max-width: 34.375rem;
  }
`

const ModalTitle = styled(Modal.Title)`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`

const DragArea = styled.div`
  background: rgba(1, 204, 143, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed var(--primary);
  border-radius: 7px;
  cursor: pointer;

  h6 {
    font-weight: 600;
  }
`

type Props = {
  modalProps: any
  path?: string
  accept?: string
  templatePath?: string
}

const ModalImport: FC<Props> = ({
  modalProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  path, // path api import submit
  accept = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  templatePath,
}) => {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState<any>({
    approved: false,
    size: "md",
  })
  const [fileImport, setFileImport] = useState<any | null>(null)
  const refUploadButton = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch()
  const source = axios.CancelToken.source()
  const { workspace } = useSelector((state: any) => state.app)

  useEffect(() => {
    setModal({ ...modalProps })
  }, [modalProps])

  const modalClose = () => {
    setModal({ ...modal, show: false })
  }

  const handleUpload = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      const formData: any = new FormData()
      formData.append("file", fileImport.file)

      await importFile(`${path}/${workspace._id}`, formData, source.token)

      modalClose()
      setLoading(false)
      dispatchNotification(`Success upload file`, "success")
      dispatchReloadData()
    } catch (err: any) {
      setLoading(false)
      dispatchNotification(`Failed upload file`, "danger")
    }
  }

  const handleSelectFile = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const reader: any = new FileReader()
      reader.onload = () => {
        setFileImport((prevState: any) => ({
          ...prevState,
          base64: reader.result,
          file: file,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const getFilename = useMemo(() => {
    return fileImport ? fileImport?.file?.name : ""
  }, [fileImport])

  const dispatchNotification = (msg: string = "", type: string = "") => {
    const notification = notificationTemplate(msg, type)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }

  const dispatchReloadData = () => {
    dispatch(reloadingData(true))
  }

  return (
    <ModalImportFile
      centered
      backdrop="static"
      keyboard={false}
      size={modal.size || "sm"}
      show={modal.show}
      onHide={modalClose}
      dialogClassName="modal-container">
      <Modal.Body className="p-4 pt-3">
        <Modal.Header closeButton className="p-0" />
        <ModalTitle className="mb-3">Import File</ModalTitle>
        <DragArea
          className="py-3"
          onClick={() => refUploadButton.current?.click()}>
          {fileImport ? <FileExcelIcon /> : <CloudUpload />}
          <h6>{getFilename || "Import Document Anda Disini"}</h6>
          <input
            ref={refUploadButton}
            onChange={handleSelectFile}
            type="file"
            accept={accept}
            hidden
          />
        </DragArea>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        {templatePath ? (
          <Card className="col-12 p-2 mb-2">
            <DFlex className="justify-content-between align-items-center">
              <DFlex className="align-items-center">
                <ExcelIcon />
                <h6 className="m-0 ms-2">Contoh Format import.xls</h6>
              </DFlex>
              <a
                className="text-primary fw-bolder"
                href={templatePath}
                download>
                Download
              </a>
            </DFlex>
          </Card>
        ) : (
          <></>
        )}
        <DFlex className="col-50">
          <ButtonCancel onClick={modalClose} />
          <Button
            type="submit"
            variant="primary btn-submit"
            isLoading={loading}
            onClick={handleUpload}>
            Upload
          </Button>
        </DFlex>
      </Modal.Footer>
    </ModalImportFile>
  )
}

export default ModalImport
