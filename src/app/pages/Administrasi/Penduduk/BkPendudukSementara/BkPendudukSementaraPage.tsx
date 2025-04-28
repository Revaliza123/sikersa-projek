import React, { useState } from "react"
/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { dateFormat } from "@app/helper/time.helper"
import ModalForm from "@app/components/Modals/ModalForm"
import { IModalData } from "@app/interface/modal.interface"
import { BK_PENDUDUK_SEMENTARA_COLUMNS } from "@app/config/react-table/administrasi/bk-penduduk-sementara.config"
import BkPendudukSementaraForm from "./BkPendudukSementaraForm"
import { IBkPendudukSementara } from "@app/interface/administrasi/buku-penduduk-sementara.interface"
import ModalImport from "@app/components/Modals/ModalImport"
import BkPendudukSementaraFilter from "./BkPendudukSementaraFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkPendudukSementaraPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_PENDUDUK_SEMENTARA_COLUMNS())

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuPendudukSementara
  )

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Penduduk Sementara`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Penduduk Sementara`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBkPendudukSementara) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nik: item?.nik,
        nama_lengkap: toTitleCase(item?.nama_lengkap) || "-",
        umur: item?.umur || "-",
        jenis_kelamin: item?.jenis_kelamin || "-",
        datang_dari: item?.datang_dari || "-",
        tanggal_datang: dateFormat(item?.datang_tanggal),
        nama_yang_didatangi: item?.nama_yang_didatangi || "-",
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
        importFile={true}
        print={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        filter={true}
        path={API_PATH().downloadBuku.administrasi.bukuPendudukSementara}>
        <BkPendudukSementaraFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"id"}
        action={action}
        selected={dataSelected}
        searchByField={[
          "nomor_kk",
          "nama_lengkap",
          "nik",
          "jenis_kelamin",
          "tempat_lahir",
          "tanggal_lahir",
        ]}
        sorting={{
          orderBy: "created_at",
          order: "DESC",
        }}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkPendudukSementaraForm
          onCancel={handleCloseModal}></BkPendudukSementaraForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuPendudukSementara}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuPendudukSementara}
      />
    </>
  )
}
