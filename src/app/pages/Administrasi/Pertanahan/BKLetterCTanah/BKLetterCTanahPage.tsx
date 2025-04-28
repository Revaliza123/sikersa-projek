/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import BkLetterCTanahForm from "./BkLetterCTanahForm"
import ModalImport from "@app/components/Modals/ModalImport"
import BkLetterCTanahFilter from "./BKLetterCTanahFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "@app/pages/Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { BK_LETTER_C_TANAH_COLUMNS } from "@app/config/react-table/administrasi/bk-letter-c-tanah.config"
import { IBukuLetterCTanah } from "@app/interface/administrasi/buku-letter-c-tanah.interface"
import { size } from "lodash"
import { createDownloadable } from "@app/helper/download.helper"

export default function BKLetterCTanahPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_LETTER_C_TANAH_COLUMNS())

  const [path] = useState<string>(API_PATH().form.administrasi.bukuLetterCTanah)

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Letter C Tanah`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Letter C Tanah`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuLetterCTanah) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nama_wajib_iuran: (item as any)?.pemilik?.nama_wajib_iuran || "-",
        nik_wajib_iuran: (item as any)?.pemilik?.nik_wajib_iuran || "-",
        no_buku: (item as any)?.pemilik?.no_buku || "-",
        tanah_kering: (
          <>
            Tanah Kering{" "}
            <span className="text-primary">{size(item?.tanah_kering)}</span>
          </>
        ),
        tanah_sawah: (
          <>
            Tanah Sawah{" "}
            <span className="text-primary">{size(item?.sawah)}</span>
          </>
        ),
        action: (
          <DropdownActionData
            actions={["detail", "update", "delete", "print"]}
            item={item}
            handleDetail={handleDetail}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handlePrintItem={handlePrintItem}
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

  const handlePrintItem = (item: any) => {
    const url = `${API_PATH().downloadBuku.administrasi.bukuLetterCTanah}/${item._id}`
    createDownloadable(url)
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
        path={API_PATH().downloadBuku.administrasi.bukuLetterCTanah}>
        <BkLetterCTanahFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={[
          "pemilik.nama_wajib_iuran",
          "pemilik.nik_wajib_iuran",
          "pemilik.no_buku",
        ]}></TableData>

      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkLetterCTanahForm onCancel={handleCloseModal}></BkLetterCTanahForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuTanahDiDesa}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuLetterCTanah}
      />
    </>
  )
}
