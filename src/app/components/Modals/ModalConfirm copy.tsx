import React, { FC, useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import styled from "styled-components"
import CheckCircleIcon from "../Icons/CheckCircle"
import CheckSqeareIcon from "../Icons/checkSquareIcon"
import TrashIcon from "../Icons/TrashIcon"

const Icon = styled.div`
  font-size: 2rem;
`
const Desc = styled.p`
  line-height: 1.5;
`

type Props = {
  modalConfirmProps: any
  callbackModalConfirm: any
}

function ModalIcon({ className }: { className: string }) {
  if (className.indexOf("trash") > -1) {
    return <TrashIcon />
  }

  if (className.indexOf("check-square") > -1) {
    return <CheckSqeareIcon />
  }

  if (className.indexOf("check-circle") > -1) {
    return <CheckCircleIcon />
  }

  return <TrashIcon />
}

const ModalConfirm: FC<Props> = ({
  modalConfirmProps,
  callbackModalConfirm,
}) => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [modalConfirm, setModalConfirm] = useState<any>({
    show: false,
    approved: false,
    size: "sm",
    icon: "far fa-trash",
    description: "Delete this data",
    subDescriotion: `This action can't be undone`,
    textApproved: "Yes",
    classApproved: "primary",
    textDecline: "No",
  })

  useEffect(() => {
    if (modalConfirmProps?.show) setClicked(false)
    setModalConfirm({ ...modalConfirmProps })
  }, [modalConfirmProps])

  const modalConfirmDecline = () => {
    setModalConfirm({ ...modalConfirm, show: false })
    callbackModalConfirm(false)
  }

  const modalConfirmAccept = () => {
    setClicked(true)
    setModalConfirm({
      ...modalConfirm,
      show: false,
      approved: true,
    })
    callbackModalConfirm(true)
  }

  return (
    <Modal
      className="confirm-delete"
      centered
      backdrop="static"
      keyboard={false}
      size={modalConfirm.size || "sm"}
      show={modalConfirm.show}
      onHide={modalConfirmDecline}>
      <Modal.Body className="p-4">
        <Icon className="text-muted">
          {/* <i className={modalConfirm.icon} /> */}
          <ModalIcon className={modalConfirm?.icon} />
          {/* <span dangerouslySetInnerHTML={{
              __html: `<i class="${modalConfirm?.icon}"></i>`,
            }}></span> */}
        </Icon>
        <h5 className="my-2">{modalConfirm.description}</h5>
        {modalConfirm.subDescriotion && (
          <Desc
            className="text-muted"
            dangerouslySetInnerHTML={{
              __html: modalConfirm.subDescriotion,
            }}></Desc>
        )}
        <div className="d-flex justify-content-between mt-4">
          <button className="btn me-2 w-50" onClick={modalConfirmDecline}>
            {modalConfirm.textDecline || "No"}
          </button>
          <button
            className={`btn btn-${modalConfirm.classApproved} ms-2 w-50 text-white`}
            onClick={modalConfirmAccept}
            disabled={clicked}>
            {modalConfirm.textApproved || "Yes"}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalConfirm
