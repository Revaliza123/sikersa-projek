import { Button } from "@app/components"
import { createDownloadableBlob } from "@app/helper/download.helper"
import { notificationTemplate } from "@app/helper/notificationTemplate"
import { API_PATH } from "@app/services/_path.service"
import requestApi from "@app/services/api.service"
import { importFile } from "@app/services/import.service"
import { addNotification } from "@app/store/notification/notification.action"
import { reloadingData } from "@app/store/reducers/app"
import { DFlex } from "@app/styled/flex.styled"
import axios from "axios"
import React, { FC, useEffect, useRef, useState } from "react"
import { Card, Form, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

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

const ResumeItemCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  margin-bottom: 0.5rem;
`

const ResumeItemCardContent = styled.div`
  line-height: 1.75;
`

const ResumeItemCardAction = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  gap: 0.125rem;
`

type Props = {
  modalProps: any
  accept?: string
}

export const KUESIONER_LIST = {
  individu: "kuesioner_individu",
  keluarga: "kuesioner_keluarga",
  rukun_tetangga: "kuesioner_rukun_tetangga",
  desa: "kuesioner_desa",
}

const SdgsImportModal: FC<Props> = ({
  modalProps,
  accept = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileImportPath, setFileImportPath] = useState<string>("")
  const [dataImportReplacer, setDataImportReplacer] = useState<any>()
  const [dataImportValidationMessage, setDataImportValidationMessage] =
    useState<string>("")
  const [dataImportNewDataMessage, setDataImportNewDataMessage] =
    useState<string>("")

  useEffect(() => {
    setModal({ ...modalProps })
  }, [modalProps])

  useEffect(() => {
    setIsSubmitting(false)
  }, [])

  const modalClose = () => {
    setIsSubmitting(false)
    setModal({ ...modal, show: false })
  }

  const dispatchNotification = (msg: string = "", type: string = "") => {
    const notification = notificationTemplate(msg, type)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }

  const dispatchReloadData = () => {
    dispatch(reloadingData(true))
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

  const handleUpload = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      const url = `${API_PATH().import.administrasi.dapodes.sdgsImportValidate}/${workspace._id}`
      const formData: any = new FormData()
      formData.append("file", fileImport.file)

      const resp = (await importFile(
        url,
        formData,
        source.token
      )) as unknown as { Data: any; Message: string }

      setDataImportValidationMessage(resp?.Data?.duplicate)
      setDataImportNewDataMessage(resp?.Data?.dataNew)
      setDataImportReplacer(resp?.Data?.dataReplacer)
      setFileImportPath(resp?.Data?.pathNewData)

      setIsSubmitting(true)
      setLoading(false)
    } catch (err: any) {
      setLoading(false)
      // dispatchNotification(`Failed upload file`, "danger")
    }
  }

  const handleBackToUpload = () => {
    setIsSubmitting(false)
    setFileImport(null)
  }

  const handleDownloadNikNotRegister = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      const url = `${API_PATH().import.administrasi.dapodes.sdgsImportDownload}/${fileImportPath}`

      createDownloadableBlob({ url, payload: "", source: source.token })
    } catch (err: any) {
      console.warn("Something went wrong when download file", err)
    }
  }

  const handleImportReplacer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      if (dataImportReplacer) {
        const url = `${API_PATH().import.administrasi.dapodes.sdgsImportReplacer}/${workspace._id}`
        const resp = await requestApi().post(url, dataImportReplacer)

        setIsSubmitting(false)
        dispatchNotification(`Sukses mengganti data`, "success")
        dispatchReloadData()
        modalClose()
      }
    } catch (err) {
      console.log("error replacer", err)
      setIsSubmitting(false)
      dispatchNotification(`Gagal mengganti data`, "danger")
    }
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
      <Modal.Body className="p-3 pt-3">
        <Modal.Header closeButton className="p-0" />
        <ModalTitle className="mb-3">Import File</ModalTitle>

        <Form.Group className="mb-3">
          <Form.Label>Pilih file</Form.Label>
          <DFlex className="w-100">
            <input
              ref={refUploadButton}
              onChange={handleSelectFile}
              type="file"
              accept={accept}
              className="form-control"
            />
            <Button
              type="button"
              variant="outline-primary"
              isLoading={loading}
              onClick={handleUpload}
              className="ms-1">
              Validasi
            </Button>
          </DFlex>
        </Form.Group>

        {isSubmitting ? (
          <div className="mt-4">
            <h5>Resume</h5>
            <ResumeItemCard>
              <ResumeItemCardContent>
                <p className="fw-bold mb-0">Data Perlu Pengecekan Ulang</p>
                <p className="mb-0 fs-sm">
                  {dataImportValidationMessage || ""}
                </p>
              </ResumeItemCardContent>
              <ResumeItemCardAction>
                <Button
                  onClick={handleImportReplacer}
                  type="button"
                  variant="primary"
                  size="sm"
                  className="border-0 ms-1 w-100">
                  Ganti
                </Button>
                <Button
                  onClick={handleBackToUpload}
                  type="button"
                  variant="danger"
                  size="sm"
                  className="text-white border-0 ms-1 w-100">
                  Batal
                </Button>
              </ResumeItemCardAction>
            </ResumeItemCard>

            <ResumeItemCard>
              <ResumeItemCardContent>
                <p className="fw-bold mb-0">
                  Data NIK yang belum terdaftar di Buku Induk
                </p>
                <p className="mb-0 fs-sm">
                  {dataImportNewDataMessage || 0} data
                </p>
              </ResumeItemCardContent>
              <ResumeItemCardAction>
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  className="text-primary border-0 ms-1"
                  onClick={handleDownloadNikNotRegister}>
                  Download
                </Button>
              </ResumeItemCardAction>
            </ResumeItemCard>
          </div>
        ) : null}
      </Modal.Body>
    </ModalImportFile>
  )
}

export default SdgsImportModal
