import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import { BK_LEMBARAN_BERITA_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-lembaran-berita-desa.config"
import BkLembaranBeritaForm from "./BkLembaranBeritaForm"
import { IBukuLembaranBeritaDesa } from "@app/interface/administrasi/buku-lembaran-berita-desa.interface"
import ModalImport from "@app/components/Modals/ModalImport"
import BkLembaranBeritaFilter from "./BkLembaranBeritaFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { dateFormat } from "@app/helper/time.helper"

export default function BkLembaranBeritaPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuLembaranDesaDanBeritaDesa
  )

  const [columns] = useState<any>(BK_LEMBARAN_BERITA_DESA_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Lembaran Desa Dan Berita Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Lembaran Desa Dan Berita Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuLembaranBeritaDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        jenis_peraturan: toTitleCase(item.jenis_peraturan) || "-",
        nomor_peraturan: item?.nomor_peraturan || "-",
        tanggal_peraturan: dateFormat(item?.tanggal_peraturan) || "-",
        tentang: toTitleCase(item?.tentang) || "-",
        keterangan: toTitleCase(item?.keterangan) || "-",
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
        path={
          API_PATH().downloadBuku.administrasi.bukuLembaranDesaDanBeritaDesa
        }
        filter={true}>
        <BkLembaranBeritaFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={["jenis_peraturan", "tentang"]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkLembaranBeritaForm
          onCancel={handleCloseModal}></BkLembaranBeritaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuLembaranDesaDanBeritaDesa}`}
        templatePath={
          IMPORT_FILE_FORMAT().administrasi.bukuLembaranDanBeritaDesa
        }
      />
    </>
  )
}
