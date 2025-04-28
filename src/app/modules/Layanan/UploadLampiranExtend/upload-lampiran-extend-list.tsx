import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { LazyImage } from "@app/components"
import { cdnUrl } from "@app/helper/cdn.helper"
import { DFlex, DFlexJustifyBetween } from "@app/styled/flex.styled"
import { Card } from "react-bootstrap"
import TrashIcon from "@app/components/Icons/TrashIcon"

interface ILampiranExtendListProps {
  items: any[]
  onDelete: (v: any) => void
  onEdit: (v: any) => void
}

export function LampiranExtendList({
  items,
  onDelete,
  onEdit,
}: ILampiranExtendListProps) {
  return (
    <Row>
      {items?.length > 0 ? (
        <>
          <Col xs={12}>
            <h6 className="fs-6 fw-bold mb-2">File Terunggah</h6>
          </Col>

          {items?.map((item: any, idx: number) => (
            <Col xs={12} key={item?.id}>
              <LampiranExtendItemDisplay
                item={item}
                handleDelete={() => onDelete(idx)}
                handleEdit={() => onEdit(idx)}
              />
            </Col>
          ))}
        </>
      ) : null}
    </Row>
  )
}

// function LampiranExtendNoData() {
//   return (
//     <div className='w-100 d-flex flex-column align-items-center justify-content-center my-4'>
//       <img src="/static/illustration/table-empty.svg" alt="" />
//       <p className='fw-bolder mt-3'>Ups! Data tidak ditemukan</p>
//       <span className='text-muted'>Tidak ada hasil, sumber data kosong</span>
//     </div>
//   )
// }

interface ILampiranExtendItemDisplayProps {
  item: any
  handleEdit: any
  handleDelete: any
}

export function LampiranExtendItemDisplay({
  item,
  handleDelete,
  handleEdit,
}: ILampiranExtendItemDisplayProps) {
  return (
    <Card className="mb-2">
      <DFlex className="flex-column justify-content-between p-1">
        <div>
          <DFlexJustifyBetween className="align-items-center">
            <div className="d-flex align-items-center">
              <LazyImage
                defaultImage="/static/img/dummyImageLogo.png"
                src={cdnUrl(item?.path_file)}
                className="object-fit-cover"
                style={{ width: "5rem", height: "5rem" }}
                alt={item?.nama_file || ""}
              />
              <div className="ms-2">
                <p className="fw-bolder lh-base mb-0 text-truncate">
                  {item?.nama_file || "-"}
                </p>
                <p className="mb-0">2.2mb</p>
              </div>
            </div>
            <div>
              <Button
                onClick={handleEdit}
                type="button"
                variant="link"
                className="border-0 text-primary">
                Change
              </Button>
              <Button
                onClick={handleDelete}
                type="button"
                variant="link"
                className="border-0 text-danger">
                <TrashIcon />
              </Button>
            </div>
          </DFlexJustifyBetween>
        </div>
      </DFlex>
    </Card>
  )
}
