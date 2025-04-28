import React, { useState } from "react"
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { toTitleCase } from "@app/helper/string.helper"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import {
  DATA_POTENSI_DESA_COLUMNS,
  IDataPotensiDesa,
} from "./DataPotensiDesaTypes"
import ModalForm from "@app/components/Modals/ModalForm"
import { useNavigate, useSearchParams } from "react-router-dom"
import DataPotensiDesaDetailV2 from "./DataPotensiDesaDetailV2"

export default function DataPotensiDesaPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [path] = useState<string>(API_PATH().form.administrasi.dataPotensiDesa)

  const [columns] = useState<any>(DATA_POTENSI_DESA_COLUMNS())
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Data Potensi Desa`,
    show: false,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IDataPotensiDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        namaPengisi: toTitleCase(item?.nama_pengisi),
        bulan: item?.bulan,
        tahun: item?.tahun,
        action: (
          <DropdownActionData
            actions={["detail", "update", "delete"]}
            item={item}
            handleDetail={handleDetail}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
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
  const handleAddClick = () => {
    setDataSelected(undefined)
    navigate("tambah-data")
  }

  /** EDIT HANDLING */
  const handleEdit = (item: any) => {
    setDataSelected(item)

    navigate(`edit/${item._id}`)
    // setAction('edit.modal');
  }

  const handleDetail = (item: any) => {
    setDataSelected(item)

    // navigate(`detail/${item._id}`);
    searchParams.set("id", item._id)
    setSearchParams(searchParams)

    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      collection: path.split("/").reverse()[0],
      id: item._id,
    }))
  }

  const handleCloseModalDetail = () => {
    searchParams.delete("id")
    setSearchParams(searchParams)

    setModalDetail((prev: any) => ({
      ...prev,
      show: false,
    }))
  }

  return (
    <>
      <TableDataListAction
        add={true}
        btnAddText="Tambah Data"
        print={false}
        onClickAdd={handleAddClick}
      />
      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={[]}
        sorting={{
          orderBy: "updated_at",
          order: "DESC",
        }}></TableData>

      <ModalForm modalProps={modalDetail} onHide={handleCloseModalDetail}>
        <DataPotensiDesaDetailV2 />
        {/* <DataPotensiDesaDetail form={modalDetail} onClose={handleCloseModalDetail} /> */}
      </ModalForm>
    </>
  )
}
