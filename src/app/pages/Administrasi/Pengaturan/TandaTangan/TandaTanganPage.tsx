import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import ModalForm from "@app/components/Modals/ModalForm"
import { IModalData } from "@app/interface/modal.interface"
import TandaTanganForm from "./TandaTanganForm"
import { PENGATURAN_TANDA_TANGAN_COLUMNS } from "@app/config/react-table/administrasi/tanda-tangan.config"
import { ITandaTangan } from "@app/interface/administrasi/tanda-tangan.interface"
import BadgeStatus from "@app/components/Status/BadgeStatus"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function TandaTanganPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(PENGATURAN_TANDA_TANGAN_COLUMNS())

  const [path] = useState<string>(API_PATH().form.administrasi.tandaTangan)

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "md",
    title: `Tanda Tangan`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: ITandaTangan) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nama: item?.nama_lengkap,
        jabatan: item?.jabatan,
        nip: item?.nip,
        utama: (
          <BadgeStatus
            status={item?.utama}
            trueMsg={"Utama"}
            falseClass={item?.utama == "ya" ? "badge-success" : "badge-danger"}
            falseMsg={item?.utama == "ya" ? "Utama" : "Tidak"}
          />
        ),
        action: (
          <DropdownActionData
            actions={["update", "delete"]}
            item={item}
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
    setModal((prevState: any) => ({
      ...prevState,
      show: true,
    }))
  }

  /** EDIT HANDLING */
  const handleEdit = (item: any) => {
    setDataSelected(item)
    setAction("edit.modal")
  }

  /** HANDLE CLOSE MODAL */
  const handleCloseModal = () => {
    setAction(undefined)
    setDataSelected(undefined)
    setModal((prevState: any) => ({
      ...prevState,
      show: false,
    }))
  }

  return (
    <>
      <TableDataListAction
        add={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}></TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        sorting={{ orderBy: "updatedAt" }}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={[
          "nama",
          "umur",
          "jenis_kelamin",
          "pendidikan",
          "bidang",
        ]}></TableData>
      <ModalForm modalProps={modal}>
        <TandaTanganForm onCancel={handleCloseModal}></TandaTanganForm>
      </ModalForm>
    </>
  )
}
