import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import TableData from "@app/modules/Table/TableData"
import { API_PATH } from "@app/services/_path.service"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { PRODESKEL_COLUMNS } from "@app/config/react-table/administrasi/prodeskel.config"
import { ProdeskelForm } from "./ProdeskelForm"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { OPTIONS_BULAN_OBJECT } from "@app/config/options.config"

export default function ProdeskelPage() {
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [columns] = useState<any>(PRODESKEL_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Data Dasar Keluarga (DDK)`,
  })

  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Detail Prodeskel`,
    show: false,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: any) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nomorKK: item?.kode_keluarga || item?.nomor_kk || "-",
        namaKepalaKeluarga: toTitleCase(item?.nama_kepala_keluarga || "-"),
        bulan: item?.bulan
          ? OPTIONS_BULAN_OBJECT[Number(item?.bulan)]?.label
          : "-",
        tahun: item?.tahun || "-",
        namaPengisi: item?.nama_pengisi || "-",
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

  // /** HANDLE ADD */
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

    // if (payload) {
    //   handleDetail(payload)
    // }
  }

  const handleDetail = (item: any) => {
    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      httpMethod: "POST",
      url: `${API_PATH().form.administrasi.prodeskel}/details?id=${item.id}`,
    }))
  }

  return (
    <>
      <TableDataListAction
        add={true}
        importFile={false}
        btnAddText="Tambah DDK"
        onClickAdd={handleAddClick}></TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={API_PATH().form.administrasi.prodeskel}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={[]}
        sorting={{
          orderBy: "updated_at",
          order: "DESC",
        }}></TableData>

      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <Modal.Body>
          <ProdeskelForm afterSubmit={handleCloseModal} />
        </Modal.Body>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>
    </>
  )
}
