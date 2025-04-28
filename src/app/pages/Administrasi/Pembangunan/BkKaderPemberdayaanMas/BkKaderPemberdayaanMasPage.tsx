import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import ModalForm from "@app/components/Modals/ModalForm"
import { IModalData } from "@app/interface/modal.interface"
import { BK_KADER_PEMBERDAYAAN_MASYARAKAT_COLUMNS } from "@app/config/react-table/administrasi/bk-kader-pemberdayaan-masyarakat.config"
import BkKaderPemberdayaanMasForm from "./BkKaderPemberdayaanMasForm"
import { IBukuKaderPemberdayaanMasyarakat } from "@app/interface/administrasi/buku-kader-pemberdayaan-masyarakat.interface"
import BkKaderPemberdayaanMasFilter from "./BkKaderPemberdayaanMasFilter"
import ModalImport from "@app/components/Modals/ModalImport"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkKaderPemberdayaanMasPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_KADER_PEMBERDAYAAN_MASYARAKAT_COLUMNS())

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKaderPemberdayaanMasyarakat
  )

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "md",
    title: `Buku Kader Pemberdayaan Masyarakat`,
  })

  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })

  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Kader Pemberdayaan Masyarakat`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBukuKaderPemberdayaanMasyarakat) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nama: toTitleCase(item?.nama) || "-",
        umur: item?.umur || "-",
        jenis_kelamin: item?.jenis_kelamin || "-",
        pendidikan: item?.pendidikan || "-",
        bidang: toTitleCase(item?.bidang) || "-",
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
        path={
          API_PATH().downloadBuku.administrasi.bukuKaderPemberdayaanMasyarakat
        }>
        <BkKaderPemberdayaanMasFilter />
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
          "nama",
          "umur",
          "jenis_kelamin",
          "pendidikan",
          "bidang",
        ]}></TableData>
      <ModalForm modalProps={modal}>
        <BkKaderPemberdayaanMasForm
          onCancel={handleCloseModal}></BkKaderPemberdayaanMasForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuKaderPemberdayaanMasyarakat}`}
        templatePath={
          IMPORT_FILE_FORMAT().administrasi.bukuKaderPemberdayaanMasyarakat
        }
      />
    </>
  )
}
