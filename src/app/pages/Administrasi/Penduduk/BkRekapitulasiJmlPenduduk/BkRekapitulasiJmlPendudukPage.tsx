import React, { useState } from "react"
import { Dropdown } from "react-bootstrap"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { Icon } from "@app/styled/icon.styled"
import PencilIcon from "@app/components/Icons/PencilIcon"
import CopyIcon from "@app/components/Icons/CopyIcon"
import TrashIcon from "@app/components/Icons/TrashIcon"
import PrintIcon from "@app/components/Icons/PrintIcon"
import { BK_REKAPITULASI_JML_PENDUDUK_COLUMNS } from "@app/config/react-table/administrasi/bk-rekapitulasi-jumlah-penduduk.config"
import { EllipsisIcon } from "@app/components/Icons/EllipsisIcon"

export default function BkRekapitulasiJmlPendudukPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_REKAPITULASI_JML_PENDUDUK_COLUMNS())

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: any, index: number) => {
      dataTableValue.push({
        no: item?.number,
        namaDusunLingkungan: "Karang Harjo",
        wnaLaki: "1",
        wnaPerempuan: "0",
        wniLaki: "1000",
        wniPerempuan: "980",
        action: (
          <Dropdown className="hide-toogle hide-focus">
            <Dropdown.Toggle
              className="bg-transparent border-0 py-0 text-body"
              id={`dropdown-act-${index}`}>
              <EllipsisIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleEdit(item)}>
                <Icon>
                  <PencilIcon />
                </Icon>{" "}
                Edit
              </Dropdown.Item>
              <Dropdown.Item hidden>
                <Icon>
                  <CopyIcon />
                </Icon>{" "}
                Salin
              </Dropdown.Item>
              <Dropdown.Item hidden>
                <Icon>
                  <PrintIcon />
                </Icon>{" "}
                Cetak
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleDelete(item)}
                className="text-danger">
                <Icon>
                  <TrashIcon />
                </Icon>{" "}
                Hapus
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      })
    })
    setDataRows(dataTableValue)
  }

  /** DELETE HANDLING */
  const handleDelete = (item: any) => {
    setDataSelected(item)
    setAction("delete")
  }

  /** HANDLE ADD */

  /** EDIT HANDLING */
  const handleEdit = (item: any) => {
    setDataSelected(item)
    setAction("edit.modal")
  }

  return (
    <>
      <TableDataListAction add={false}></TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={API_PATH().workspace}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        filterParams={{
          fullname: "",
          order: "ASC",
          orderBy: "level",
          page: 1,
          search: "",
          size: 8,
        }}></TableData>
    </>
  )
}
