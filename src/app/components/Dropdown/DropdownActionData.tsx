import { Icon } from "@app/styled/icon.styled"
import { nanoid } from "nanoid"
import React from "react"
import { Dropdown } from "react-bootstrap"
import { useSelector } from "react-redux"
import CopyIcon from "../Icons/CopyIcon"
import { EllipsisIcon } from "../Icons/EllipsisIcon"
import InfoIcon from "../Icons/InfoIcon"
import PencilIcon from "../Icons/PencilIcon"
import PrintIcon from "../Icons/PrintIcon"
import TrashIcon from "../Icons/TrashIcon"

export default function DropdownActionData({
  actions = ["detail", "update", "delete"],
  item,
  handleDetail,
  handleEdit,
  handleDelete,
  handleSetPrivileges,
  handlePrintItem,
}: IDropdownActionData) {
  const { activePage } = useSelector((state: any) => state.ui)
  return (
    <Dropdown className="hide-toogle hide-focus">
      <Dropdown.Toggle
        className="bg-transparent border-0 py-0 text-body"
        id={`dropdown-act-${nanoid()}`}>
        <EllipsisIcon />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {actions?.includes("detail") && (
          <Dropdown.Item onClick={() => handleDetail(item)}>
            <Icon>
              <InfoIcon />
            </Icon>
            Detail
          </Dropdown.Item>
        )}
        {actions?.includes("update") && activePage?.privileges?.update && (
          <Dropdown.Item onClick={() => handleEdit(item)}>
            <Icon>
              <PencilIcon />
            </Icon>
            Edit
          </Dropdown.Item>
        )}
        {actions?.includes("copy") && activePage?.privileges?.copy && (
          <Dropdown.Item onClick={() => handleSetPrivileges(item)}>
            <Icon>
              <CopyIcon />
            </Icon>
            Salin
          </Dropdown.Item>
        )}
        {actions?.includes("print") && activePage?.privileges?.print && (
          <Dropdown.Item onClick={() => handlePrintItem(item)}>
            <Icon>
              <PrintIcon />
            </Icon>
            Cetak
          </Dropdown.Item>
        )}
        {actions?.includes("delete") && activePage?.privileges?.delete && (
          <Dropdown.Item
            onClick={() => handleDelete(item)}
            className="text-danger">
            <Icon>
              <TrashIcon />
            </Icon>
            Hapus
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

interface IDropdownActionData {
  actions?: any
  item: any
  handleDetail?: any
  handleEdit?: any
  handleDelete?: any
  handleSetPrivileges?: any
  handlePrintItem?: any
}
