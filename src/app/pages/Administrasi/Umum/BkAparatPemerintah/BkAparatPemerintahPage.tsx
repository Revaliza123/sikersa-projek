import React, { useState } from "react"
/** CONFIG */

/** COMPONENTS */
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import ModalForm from "@app/components/Modals/ModalForm"
import ModalImport from "@app/components/Modals/ModalImport"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import { BK_APARAT_PEMERINTAH_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-aparat-pemerintah-desa.config"
import { toTitleCase } from "@app/helper/string.helper"
import { dateFormat } from "@app/helper/time.helper"
import { IBukuAparatPemerintahDesa } from "@app/interface/administrasi/buku-aparat-pemerintah-desa.interface"
import { IModalData } from "@app/interface/modal.interface"
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import BkAparatPemerintahFilter from "./BkAparatPemerintahFilter"
import BkAparatPemerintahDesaForm from "./BkAparatPemerintahForm"

export default function BkAparatPemerintahPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuAparatPemerintahDesa
  )
  const [columns] = useState<any>(BK_APARAT_PEMERINTAH_DESA_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Aparat Pemerintah Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Aparat Pemerintah Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuAparatPemerintahDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nama: toTitleCase(item?.nama) || "-",
        jabatan: toTitleCase(item?.jabatan) || "-",
        tanggal_keputusan_pengangkatan: item?.tanggal_keputusan_pengangkatan
          ? dateFormat(item?.tanggal_keputusan_pengangkatan) || "-"
          : "-",
        tanggal_keputusan_pemberhentian: item?.tanggal_keputusan_pemberhentian
          ? dateFormat(item?.tanggal_keputusan_pemberhentian) || "-"
          : "-",
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
        filter={true}
        importFile={true}
        print={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        path={API_PATH().downloadBuku.administrasi.bukuAparatPemerintahDesa}>
        <BkAparatPemerintahFilter />
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
          "jabatan",
          "nip",
          "tanggal_keputusan_pengangkatan",
          "tanggal_keputusan_pemberhentian",
        ]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkAparatPemerintahDesaForm
          onCancel={handleCloseModal}></BkAparatPemerintahDesaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuAparatPemerintahDesa}`}
        templatePath={
          IMPORT_FILE_FORMAT().administrasi.bukuAparatPemerintahDesa
        }
      />
    </>
  )
}
