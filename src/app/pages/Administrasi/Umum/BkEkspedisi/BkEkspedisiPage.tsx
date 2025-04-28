import React, { useState } from "react"
/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { BK_EKSPEDISI_COLUMNS } from "@app/config/react-table/administrasi/bk-ekspedisi.config"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import BkEkspedisiForm from "./BkEkspedisiForm"
import { IBukuEkspedisi } from "@app/interface/administrasi/buku-ekspedisi.interface"
import ModalImport from "@app/components/Modals/ModalImport"
import BkEkspedisiFilter from "./BkEkspedisiFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { dateFormat } from "@app/helper/time.helper"

export default function BkEkspedisiPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(API_PATH().form.administrasi.bukuEkspedisi)

  const [columns] = useState<any>(BK_EKSPEDISI_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "md",
    title: `Buku Ekspedisi`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Ekspedisi`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuEkspedisi) => {
      dataTableValue.push({
        no: (item as any)?.number,
        tanggal_pengiriman: dateFormat(item?.tanggal_pengiriman) || "-",
        nomor_surat: item?.nomor_surat || "-",
        ditujukan_kepada: toTitleCase(item?.ditujukan_kepada) || "-",
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

  /** HANDLE IMPORT FILE */
  const handleImportFile = () => {
    setModalImport((prevState: any) => ({
      ...prevState,
      show: true,
    }))
  }

  const handleDetail = (item: any) => {
    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      collection: path.split("/").reverse()[0],
      id: item._id,
    }))
  }

  return (
    <>
      <TableDataListAction
        add={true}
        importFile={true}
        print={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        filter={true}
        path={API_PATH().downloadBuku.administrasi.bukuEkspedisi}>
        <BkEkspedisiFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={["ditujukan_kepada"]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkEkspedisiForm onCancel={handleCloseModal}></BkEkspedisiForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuEkspedisi}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuEkspedisi}
      />
    </>
  )
}
